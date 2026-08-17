/**
 * Hemşirelik Bakım Rehberim - Main Application Controller & UI Handlers (Standard Global Script)
 */

// Global Instances & State
const carePlanBuilder = new window.CarePlanBuilder();
let currentStep = 1;
let selectedDiagnosisForModal = null;

document.addEventListener('DOMContentLoaded', () => {
    // Force light white theme, clear old dark theme localStorage keys
    try {
        localStorage.removeItem('bakimrehberim_theme');
        localStorage.removeItem('nursiplan_theme');
    } catch (e) {}
    document.body.classList.remove('dark-theme', 'light-theme');

    initServiceWorker();
    initTabNavigation();
    initCarePlanWizard();
    initCalculators();
    initFluidBalanceCalculator();
    initMAPCalculator();
    initTemplateLibrary();
    initNandaDictionary();
    initSavedPlansView();
    initCommandPalette();
    initSamplePatientLoader();
    initContactModal();
    initLegalModal();
    initVisitorCounter();
    initDevAdminModal();
    restoreDraftIfAvailable();
});

function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(reg => console.log('SW Registered:', reg.scope))
                .catch(err => console.log('SW Registration failed:', err));
        });
    }
}

window.openPWAHelpModal = function() {
    const modal = document.getElementById('pwa-help-modal');
    if (modal) modal.classList.add('active');
};

window.closePWAHelpModal = function() {
    const modal = document.getElementById('pwa-help-modal');
    if (modal) modal.classList.remove('active');
};

function getDiagnosisTitle(cp) {
    if (cp.diagnosisTitle) return cp.diagnosisTitle;
    const nandaList = window.NANDA_DIAGNOSES || [];
    const found = nandaList.find(d => d.id === cp.diagnosisId);
    return found ? `${found.code} - ${found.title}` : (cp.diagnosisId || 'Hemşirelik Tanısı');
}

function restoreDraftIfAvailable() {
    if (carePlanBuilder.loadDraft()) {
        const info = carePlanBuilder.currentPlan.patientInfo || {};
        const v = info.vitals || {};

        if (document.getElementById('patient-name-input')) document.getElementById('patient-name-input').value = info.name || '';
        if (document.getElementById('patient-age-input')) document.getElementById('patient-age-input').value = info.age || '';
        if (document.getElementById('patient-gender-select')) document.getElementById('patient-gender-select').value = info.gender || 'Erkek';
        if (document.getElementById('patient-diag-input')) document.getElementById('patient-diag-input').value = info.diagnosis || '';
        if (document.getElementById('patient-room-input')) document.getElementById('patient-room-input').value = info.room || '';

        if (document.getElementById('vital-ates-input')) document.getElementById('vital-ates-input').value = v.ates || '';
        if (document.getElementById('vital-tansys-input')) document.getElementById('vital-tansys-input').value = v.tansiyonSystolic || '';
        if (document.getElementById('vital-tandia-input')) document.getElementById('vital-tandia-input').value = v.tansiyonDiastolic || '';
        if (document.getElementById('vital-nabiz-input')) document.getElementById('vital-nabiz-input').value = v.nabiz || '';
        if (document.getElementById('vital-solunum-input')) document.getElementById('vital-solunum-input').value = v.solunum || '';
        if (document.getElementById('vital-spo2-input')) document.getElementById('vital-spo2-input').value = v.spo2 || '';
        if (document.getElementById('vital-agri-input')) document.getElementById('vital-agri-input').value = v.agri || '0';
        if (document.getElementById('agri-val-disp')) document.getElementById('agri-val-disp').textContent = v.agri || '0';

        document.querySelectorAll('.wong-face-btn').forEach(btn => {
            if (btn.getAttribute('data-score') === String(v.agri || '0')) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }
}

/* ==========================================================================
   1. Tab Navigation
   ========================================================================== */
function initTabNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const targetContent = document.getElementById(`tab-${targetTab}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // Scroll to top instantly to prevent layout jump jitter on mobile height changes
            window.scrollTo({ top: 0, behavior: 'instant' });

            // Ensure active tab button is smoothly aligned into view in horizontal scrollbar on mobile
            if (tab.scrollIntoView && window.innerWidth <= 900) {
                tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }

            if (targetTab === 'saved') {
                renderSavedPlansList();
            }
        });
    });

    // Quick Action buttons on Home view
    document.querySelectorAll('[data-goto-tab]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const tabName = btn.getAttribute('data-goto-tab');
            const tabBtn = document.querySelector(`.nav-tab[data-tab="${tabName}"]`);
            if (tabBtn) tabBtn.click();
        });
    });
}

/* ==========================================================================
   2. Care Plan Generator (Wizard) & Wong-Baker Pain Scale
   ========================================================================== */
function initCarePlanWizard() {
    const stepItems = document.querySelectorAll('.step-item');
    const stepPanels = document.querySelectorAll('.wizard-step-panel');

    window.goToWizardStep = function(stepNum) {
        if (stepNum < 1 || stepNum > 4) return;
        currentStep = stepNum;

        stepItems.forEach((item, idx) => {
            item.classList.remove('active', 'completed');
            if (idx + 1 === currentStep) item.classList.add('active');
            else if (idx + 1 < currentStep) item.classList.add('completed');
        });

        stepPanels.forEach(panel => panel.style.display = 'none');
        const activePanel = document.getElementById(`wizard-step-${currentStep}`);
        if (activePanel) activePanel.style.display = 'block';

        if (currentStep === 2) {
            updateSmartSuggestionsUI();
            renderDiagnosisSelectionGrid();
        } else if (currentStep === 3) {
            renderStep3CustomizationList();
        } else if (currentStep === 4) {
            renderCarePlanPreviewTable();
        }

        updateMobileSelectedDockUI();
    };

    // Patient info form input change listeners
    const patientForm = document.getElementById('patient-info-form');
    if (patientForm) {
        patientForm.addEventListener('input', () => {
            const formData = new FormData(patientForm);
            carePlanBuilder.setPatientInfo({
                name: formData.get('patientName'),
                age: formData.get('patientAge'),
                gender: formData.get('patientGender'),
                diagnosis: formData.get('patientDiagnosis'),
                room: formData.get('patientRoom')
            });
            carePlanBuilder.setVitals({
                ates: formData.get('vitalAtes'),
                tansiyonSystolic: formData.get('vitalTansiyonSys'),
                tansiyonDiastolic: formData.get('vitalTansiyonDia'),
                nabiz: formData.get('vitalNabiz'),
                solunum: formData.get('vitalSolunum'),
                spo2: formData.get('vitalSpo2'),
                agri: formData.get('vitalAgri')
            });
        });
    }

    // Wong-Baker Pain Scale Interactive Face Buttons
    const wongFaceBtns = document.querySelectorAll('.wong-face-btn');
    const agriRangeInput = document.getElementById('vital-agri-input');
    const agriValDisp = document.getElementById('agri-val-disp');

    wongFaceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const score = btn.getAttribute('data-score');
            wongFaceBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (agriRangeInput) agriRangeInput.value = score;
            if (agriValDisp) agriValDisp.textContent = score;
            carePlanBuilder.setVitals({ agri: score });
        });
    });

    if (agriRangeInput) {
        agriRangeInput.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            wongFaceBtns.forEach(btn => {
                const btnScore = parseInt(btn.getAttribute('data-score'));
                if (Math.abs(val - btnScore) <= 1) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        });
    }

    // Modal Add Diagnosis Handlers
    const addDiagModal = document.getElementById('add-diagnosis-modal');
    window.closeModal = function() {
        if (addDiagModal) addDiagModal.classList.remove('active');
    };

    const saveDiagBtn = document.getElementById('save-diag-to-plan-btn');
    if (saveDiagBtn) {
        saveDiagBtn.addEventListener('click', () => {
            if (!selectedDiagnosisForModal) return;

            const etiologyInput = document.getElementById('modal-etiology-input').value;
            const symptomsInput = document.getElementById('modal-symptoms-input').value;

            // Selected NOC checkboxes
            let selectedNoc = Array.from(document.querySelectorAll('.modal-noc-cb:checked')).map(cb => cb.value);
            const customNoc = document.getElementById('modal-custom-noc').value;
            if (customNoc.trim()) selectedNoc.push(customNoc.trim());
            if (selectedNoc.length === 0 && selectedDiagnosisForModal.noc && selectedDiagnosisForModal.noc.length > 0) {
                selectedNoc = [...selectedDiagnosisForModal.noc];
            }

            // Selected NIC checkboxes
            let selectedNic = Array.from(document.querySelectorAll('.modal-nic-cb:checked')).map(cb => cb.value);
            const customNic = document.getElementById('modal-custom-nic').value;
            if (customNic.trim()) selectedNic.push(customNic.trim());
            if (selectedNic.length === 0 && selectedDiagnosisForModal.nic && selectedDiagnosisForModal.nic.length > 0) {
                selectedNic = [...selectedDiagnosisForModal.nic];
            }

            const evalStatus = document.getElementById('modal-eval-status').value;
            const scoreBefore = document.getElementById('modal-score-before')?.value || '2';
            const scoreTarget = document.getElementById('modal-score-target')?.value || '4';
            const frequency = document.getElementById('modal-nic-frequency')?.value || '';

            carePlanBuilder.addCarePlanItem({
                diagnosisId: selectedDiagnosisForModal.id,
                diagnosisTitle: `${selectedDiagnosisForModal.code} - ${selectedDiagnosisForModal.title}`,
                category: selectedDiagnosisForModal.category,
                etiology: etiologyInput,
                symptoms: symptomsInput,
                noc: selectedNoc,
                nic: selectedNic,
                scoreBefore: scoreBefore,
                scoreTarget: scoreTarget,
                frequency: frequency,
                evaluationStatus: evalStatus
            });

            closeModal();
            renderSelectedDiagnosesSummary();
            if (currentStep === 3) renderStep3CustomizationList();

        });
    }

    // Fill Sample Patient Button Handler
    document.getElementById('fill-sample-patient-btn')?.addEventListener('click', () => {
        document.getElementById('patient-name-input').value = 'Ayşe K. (Örnek Vaka)';
        document.getElementById('patient-age-input').value = '64';
        document.getElementById('patient-gender-select').value = 'Kadın';
        document.getElementById('patient-diag-input').value = 'Akut KOAH Alevlenmesi & Hipertansiyon';
        document.getElementById('patient-room-input').value = 'Göğüs Hastalıkları Servisi 204';

        document.getElementById('vital-ates-input').value = '38.2';
        document.getElementById('vital-tansys-input').value = '145';
        document.getElementById('vital-tandia-input').value = '90';
        document.getElementById('vital-nabiz-input').value = '102';
        document.getElementById('vital-solunum-input').value = '25';
        document.getElementById('vital-spo2-input').value = '91';
        document.getElementById('vital-agri-input').value = '6';

        document.getElementById('agri-val-disp').textContent = '6';
        document.querySelectorAll('.wong-face-btn').forEach(btn => {
            if (btn.getAttribute('data-score') === '6') btn.classList.add('active');
            else btn.classList.remove('active');
        });

        const patientForm = document.getElementById('patient-info-form');
        if (patientForm) patientForm.dispatchEvent(new Event('input'));

        alert('🎲 Örnek hasta demografik verileri ve vital bulguları dolduruldu! "İleri" butonuna basarak akıllı tanı önerilerini görebilirsiniz.');
    });

    // Clear Patient Form Handler
    const clearFormHandler = () => {
        const form = document.getElementById('patient-info-form');
        if (form) form.reset();

        document.getElementById('patient-name-input').value = '';
        document.getElementById('patient-age-input').value = '';
        document.getElementById('patient-gender-select').value = 'Kadın';
        document.getElementById('patient-diag-input').value = '';
        document.getElementById('patient-room-input').value = '';
        if (document.getElementById('patient-weight-input')) document.getElementById('patient-weight-input').value = '';
        if (document.getElementById('patient-height-input')) document.getElementById('patient-height-input').value = '';
        const bmiBadge = document.getElementById('step1-bmi-badge');
        if (bmiBadge) { bmiBadge.style.display = 'none'; bmiBadge.innerHTML = ''; }

        document.getElementById('vital-ates-input').value = '';
        document.getElementById('vital-tansys-input').value = '';
        document.getElementById('vital-tandia-input').value = '';
        document.getElementById('vital-nabiz-input').value = '';
        document.getElementById('vital-solunum-input').value = '';
        document.getElementById('vital-spo2-input').value = '';
        document.getElementById('vital-agri-input').value = '0';
        document.getElementById('agri-val-disp').textContent = '0';

        document.querySelectorAll('.wong-face-btn').forEach(btn => {
            if (btn.getAttribute('data-score') === '0') btn.classList.add('active');
            else btn.classList.remove('active');
        });

        // Reset builder draft state
        carePlanBuilder.setPatientInfo({
            name: '', age: '', gender: 'Kadın', diagnosis: '', room: '',
            vitals: { ates: '', tansiyonSystolic: '', tansiyonDiastolic: '', nabiz: '', solunum: '', spo2: '', agri: '0' }
        });

        if (window.showToast) window.showToast('🧹 Form ve yaşam bulguları temizlendi.', 'info');
    };

    const updateStep1BMI = () => {
        const w = parseFloat(document.getElementById('patient-weight-input')?.value);
        const h = parseFloat(document.getElementById('patient-height-input')?.value);
        const badge = document.getElementById('step1-bmi-badge');
        if (!badge) return;

        if (w > 0 && h > 0) {
            const res = window.calculateBMI(w, h);
            if (res) {
                badge.style.display = 'block';
                badge.innerHTML = `<span class="badge ${res.alertClass}" style="padding: 6px 12px; font-size: 0.84rem;">⚖️ Otomatik VKİ: <strong>${res.bmi} kg/m²</strong> (${res.status})</span>`;
                return;
            }
        }
        badge.style.display = 'none';
        badge.innerHTML = '';
    };

    document.getElementById('patient-weight-input')?.addEventListener('input', updateStep1BMI);
    document.getElementById('patient-height-input')?.addEventListener('input', updateStep1BMI);

    document.getElementById('clear-patient-form-btn')?.addEventListener('click', clearFormHandler);
    document.getElementById('clear-patient-form-btn-bottom')?.addEventListener('click', clearFormHandler);


    // Final Save / Export / Copy / JSON Backup Buttons

    document.getElementById('save-plan-btn')?.addEventListener('click', () => {
        const saved = window.savePlanToStorage(carePlanBuilder.currentPlan);
        if (window.showToast) window.showToast(`"Bakım Planı (${saved.patientInfo?.name || 'Hasta'})" başarıyla kaydedildi!`, 'success');
    });

    document.getElementById('copy-plan-btn')?.addEventListener('click', () => {
        window.copyPlanToClipboard(carePlanBuilder.currentPlan);
    });

    document.getElementById('export-text-btn')?.addEventListener('click', () => {
        window.exportPlanAsText(carePlanBuilder.currentPlan);
    });

    document.getElementById('export-word-btn')?.addEventListener('click', () => {
        window.exportPlanAsWord(carePlanBuilder.currentPlan);
    });


    document.getElementById('export-json-btn')?.addEventListener('click', () => {
        window.exportPlanAsJSON(carePlanBuilder.currentPlan);
    });

    const importJsonBtn = document.getElementById('import-json-btn');
    const importFileInput = document.getElementById('import-json-file-input');

    if (importJsonBtn && importFileInput) {
        importJsonBtn.addEventListener('click', () => importFileInput.click());
        importFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                const imported = window.importPlanFromJSON(event.target.result);
                if (imported) {
                    carePlanBuilder.loadFullPlan(imported);
                    window.goToWizardStep(4);
                    renderCarePlanPreviewTable();
                }
            };
            reader.readAsText(file);
        });
    }

    document.getElementById('print-plan-btn')?.addEventListener('click', () => {
        window.printCarePlan();
    });
}


function updateSmartSuggestionsUI() {
    const container = document.getElementById('smart-suggestions-container');
    if (!container) return;

    const suggestions = carePlanBuilder.getSmartSuggestions();
    if (suggestions.length === 0) {
        container.innerHTML = `
            <div class="alert alert-info">
                ℹ️ Girilen yaşam bulgularına göre otomatik kritik uyarı yok. Tüm tanı listesinden seçim yapabilirsiniz.
            </div>`;
        return;
    }

    let html = `
        <div class="suggestion-box">
            <div class="suggestion-header">
                ⚡ Akıllı Tanı Öneri Motoru (${suggestions.length} Öneri Bulundu)
            </div>
            <p style="font-size: 0.86rem; color: var(--text-secondary); margin-bottom: 12px;">
                Girmiş olduğunuz anormal yaşam bulguları ve belirtilere dayanarak aşağıdaki NANDA hemşirelik tanıları önerilmektedir:
            </p>`;

    suggestions.forEach(item => {
        html += `
            <div class="suggestion-chip">
                <div>
                    <strong style="color: var(--text-primary);">${item.diag.code} - ${item.diag.title}</strong>
                    <div style="font-size: 0.8rem; color: var(--warning);">${item.reason}</div>
                </div>
                <button class="btn btn-sm btn-primary" onclick="openAddDiagnosisModal('${item.diag.id}')">
                    + Planına Ekle
                </button>
            </div>`;
    });

    html += `</div>`;
    container.innerHTML = html;
}

let currentStep2CategoryFilter = 'all';

window.filterStep2Category = function(catId) {
    currentStep2CategoryFilter = catId;
    renderDiagnosisSelectionGrid();
};

function renderDiagnosisSelectionGrid() {
    const container = document.getElementById('diagnosis-selection-grid');
    if (!container) return;

    const categories = window.NANDA_CATEGORIES || [];
    const diagnoses = window.NANDA_DIAGNOSES || [];
    const favorites = window.getFavoriteDiagnoses();
    const commonIds = ['akut_agri', 'enfeksiyon_riski', 'solunum_yolu_kapanmasi', 'dusme_riski', 'sivi_volum_eksikligi', 'kan_sekeri_dengesizligi', 'doku_butunlugu_bozulma', 'hipertermi', 'anksiyete'];

    // Category Filter Pills
    let pillsHtml = `
        <div class="category-pills-container">
            <button class="category-pill ${currentStep2CategoryFilter === 'all' ? 'active' : ''}" onclick="filterStep2Category('all')">🌐 Tüm Tanılar (${diagnoses.length})</button>
            <button class="category-pill ${currentStep2CategoryFilter === 'favorites' ? 'active' : ''}" onclick="filterStep2Category('favorites')">⭐ Favorilerim (${favorites.length})</button>
            <button class="category-pill ${currentStep2CategoryFilter === 'common' ? 'active' : ''}" onclick="filterStep2Category('common')">🔥 En Çok Kullanılanlar</button>
            ${categories.map(cat => {
                const count = diagnoses.filter(d => d.category === cat.id).length;
                return `<button class="category-pill ${currentStep2CategoryFilter === cat.id ? 'active' : ''}" onclick="filterStep2Category('${cat.id}')">${cat.name} (${count})</button>`;
            }).join('')}
        </div>`;

    // Filter Diagnoses
    let targetDiagnoses = diagnoses;
    if (currentStep2CategoryFilter === 'favorites') {
        targetDiagnoses = diagnoses.filter(d => favorites.includes(d.id));
    } else if (currentStep2CategoryFilter === 'common') {
        targetDiagnoses = diagnoses.filter(d => commonIds.includes(d.id));
    } else if (currentStep2CategoryFilter !== 'all') {
        targetDiagnoses = diagnoses.filter(d => d.category === currentStep2CategoryFilter);
    }

    if (targetDiagnoses.length === 0) {
        container.innerHTML = pillsHtml + `<div class="alert alert-info" style="margin-top: 10px;">ℹ️ Seçilen filtrede henüz tanı bulunmamaktadır.</div>`;
        renderSelectedDiagnosesSummary();
        return;
    }

    let html = pillsHtml;

    // Grouping by categories if 'all', 'favorites', or 'common'
    const groupedCategories = categories.filter(cat => targetDiagnoses.some(d => d.category === cat.id));

    groupedCategories.forEach(cat => {
        const diags = targetDiagnoses.filter(d => d.category === cat.id);
        if (diags.length === 0) return;

        html += `
            <div style="margin-bottom: 20px;">
                <h4 style="margin-bottom: 10px; color: ${cat.color};">${cat.name} (${diags.length})</h4>
                <div class="grid-2">`;

        diags.forEach(d => {
            const isAdded = carePlanBuilder.currentPlan.carePlans.some(cp => cp.diagnosisId === d.id);
            const isFav = favorites.includes(d.id);

            html += `
                <div class="card card-hover" style="padding: 16px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                        <span class="badge badge-primary">${d.code}</span>
                        <div>
                            <button class="favorite-star-btn ${isFav ? 'active' : ''}" onclick="toggleFavoriteDiagnosis('${d.id}')" title="Favorilere Ekle/Çıkar">
                                ${isFav ? '⭐' : '☆'}
                            </button>
                            ${isAdded ? '<span class="badge badge-success">✓ Eklendi</span>' : ''}
                        </div>
                    </div>
                    <h5 style="margin-bottom: 6px; font-size: 1rem;">${d.title}</h5>
                    <p style="font-size: 0.82rem; margin-bottom: 14px; line-height: 1.4;">${d.definition}</p>
                    <button class="btn btn-sm ${isAdded ? 'btn-secondary' : 'btn-outline'}" onclick="openAddDiagnosisModal('${d.id}')">
                        ${isAdded ? '✏️ Özelleştir / Düzenle' : '+ Planıma Ekle'}
                    </button>
                </div>`;
        });

        html += `</div></div>`;
    });

    container.innerHTML = html;
    renderSelectedDiagnosesSummary();
}

window.openAddDiagnosisModal = function(diagId) {
    const nandaList = window.NANDA_DIAGNOSES || [];
    const diag = nandaList.find(d => d.id === diagId);
    if (!diag) return;

    selectedDiagnosisForModal = diag;
    const existing = carePlanBuilder.currentPlan.carePlans.find(cp => cp.diagnosisId === diagId);

    document.getElementById('modal-diag-title').textContent = `${diag.code} - ${diag.title}`;

    // Etiology options
    const etiologyInput = document.getElementById('modal-etiology-input');
    etiologyInput.value = existing?.etiology || `${diag.etiology[0]} bağlamında`;

    // Symptoms options
    const symptomsInput = document.getElementById('modal-symptoms-input');
    symptomsInput.value = existing?.symptoms || `${diag.symptoms[0]} şeklinde gösterilen`;

    // NOC Checkboxes
    const nocContainer = document.getElementById('modal-noc-checkboxes');
    const nocList = (diag.noc && diag.noc.length > 0) ? diag.noc : ['Hastanın durumu stabil tutulacak ve takip edilecek.'];
    const existingNoc = (existing?.noc && existing.noc.length > 0) ? existing.noc : null;
    nocContainer.innerHTML = nocList.map(n => `
        <label style="display: block; font-size: 0.88rem; margin-bottom: 6px; cursor: pointer;">
            <input type="checkbox" class="modal-noc-cb" value="${n}" ${existingNoc ? existingNoc.includes(n) : true}> ${n}
        </label>
    `).join('');

    // NIC Checkboxes
    const nicContainer = document.getElementById('modal-nic-checkboxes');
    const nicList = (diag.nic && diag.nic.length > 0) ? diag.nic : ['Vital bulgular düzenli takip edilecek.', 'Hekim istemine uygun tedavi uygulanacak.'];
    const existingNic = (existing?.nic && existing.nic.length > 0) ? existing.nic : null;
    nicContainer.innerHTML = nicList.map(n => `
        <label style="display: block; font-size: 0.88rem; margin-bottom: 6px; cursor: pointer;">
            <input type="checkbox" class="modal-nic-cb" value="${n}" ${existingNic ? existingNic.includes(n) : true}> ${n}
        </label>
    `).join('');

    document.getElementById('modal-custom-noc').value = '';
    document.getElementById('modal-custom-nic').value = '';
    if (existing?.evaluationStatus) {
        document.getElementById('modal-eval-status').value = existing.evaluationStatus;
    }

    const modal = document.getElementById('add-diagnosis-modal');
    if (modal) modal.classList.add('active');
};

window.openSelectedDiagnosesDrawer = function() {
    const backdrop = document.getElementById('selected-diagnoses-drawer-backdrop');
    if (backdrop) backdrop.classList.add('active');
    updateMobileSelectedDockUI();
};

window.closeSelectedDiagnosesDrawer = function() {
    const backdrop = document.getElementById('selected-diagnoses-drawer-backdrop');
    if (backdrop) backdrop.classList.remove('active');
};

function updateMobileSelectedDockUI() {
    const dock = document.getElementById('mobile-selected-diagnoses-dock');
    const countNum = document.getElementById('mobile-dock-count-num');
    const drawerCount = document.getElementById('drawer-diagnoses-count');
    const drawerList = document.getElementById('drawer-diagnoses-list');

    const items = carePlanBuilder.currentPlan.carePlans || [];
    const count = items.length;

    if (countNum) countNum.textContent = count;
    if (drawerCount) drawerCount.textContent = count;

    if (dock) {
        if (count > 0 && (currentStep === 2 || currentStep === 3)) {
            dock.classList.add('active');
        } else {
            dock.classList.remove('active');
        }
    }

    if (drawerList) {
        if (items.length === 0) {
            drawerList.innerHTML = `<p style="font-size: 0.88rem; color: var(--text-muted); padding: 10px 0;">Henüz tanı seçilmedi. Tanı kartlarından "+ Planıma Ekle" butonuna basabilirsiniz.</p>`;
        } else {
            drawerList.innerHTML = `
                <div style="display: flex; flex-direction: column; gap: 8px; max-height: 50vh; overflow-y: auto;">
                    ${items.map(cp => `
                        <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-card-hover); padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
                            <span style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary);">${getDiagnosisTitle(cp)}</span>
                            <div style="display: flex; gap: 6px; align-items: center;">
                                <button type="button" class="btn btn-sm btn-outline" onclick="closeSelectedDiagnosesDrawer(); openAddDiagnosisModal('${cp.diagnosisId}')">✏️ Düzenle</button>
                                <button type="button" class="btn btn-sm btn-danger" onclick="removeDiagnosisItem('${cp.diagnosisId}'); updateMobileSelectedDockUI();" title="Kaldır">✕ Sil</button>
                            </div>
                        </div>
                    `).join('')}
                </div>`;
        }
    }
}

function renderSelectedDiagnosesSummary() {
    const summaryBox = document.getElementById('selected-diagnoses-summary');
    updateMobileSelectedDockUI();
    if (!summaryBox) return;

    const items = carePlanBuilder.currentPlan.carePlans;
    if (items.length === 0) {
        summaryBox.innerHTML = `<p style="font-size: 0.88rem; color: var(--text-muted);">Henüz tanı eklenmedi. Yukarıdan tanı seçip planınıza ekleyin.</p>`;
        return;
    }

    summaryBox.innerHTML = `
        <div style="margin-top: 14px; background: var(--bg-card-hover); padding: 14px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
            <strong style="color: var(--primary);">Seçilen Hemşirelik Tanıları (${items.length}):</strong>
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
                ${items.map(cp => `
                    <span class="badge badge-primary" style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; background: var(--secondary-light); color: var(--secondary-hover); border: 1px solid var(--secondary);">
                        ${getDiagnosisTitle(cp)}
                        <span style="cursor: pointer; font-weight: bold;" onclick="removeDiagnosisItem('${cp.diagnosisId}')">✕</span>
                    </span>
                `).join('')}
            </div>
        </div>`;
}

function renderStep3CustomizationList() {
    const container = document.getElementById('step3-customization-list');
    if (!container) return;

    const items = carePlanBuilder.currentPlan.carePlans;
    if (items.length === 0) {
        container.innerHTML = `<div class="alert alert-warning">Henüz planınıza tanı eklemediniz. Lütfen Step 2'ye geçip en az 1 tanı ekleyin.</div>`;
        return;
    }

    container.innerHTML = items.map(cp => `
        <div class="card" style="margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                <div>
                    <h3 style="color: var(--primary-light);">${getDiagnosisTitle(cp)}</h3>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
                        <strong>İlişkili Faktörler:</strong> ${cp.etiology || 'Belirtilmedi'}
                    </p>
                </div>
                <button class="btn btn-sm btn-outline" onclick="openAddDiagnosisModal('${cp.diagnosisId}')">✏️ Düzenle</button>
            </div>
            
            <div class="grid-2" style="font-size: 0.86rem; margin-top: 10px;">
                <div style="background: rgba(15,23,42,0.6); padding: 12px; border-radius: 8px;">
                    <strong style="color: var(--success);">NOC Hedefleri (${(cp.noc || []).length}):</strong>
                    <ul style="padding-left: 16px; margin-top: 4px;">
                        ${(cp.noc || []).map(n => `<li>${n}</li>`).join('')}
                    </ul>
                </div>
                <div style="background: rgba(15,23,42,0.6); padding: 12px; border-radius: 8px;">
                    <strong style="color: var(--info);">NIC Girişimleri (${(cp.nic || []).length}):</strong>
                    <ul style="padding-left: 16px; margin-top: 4px;">
                        ${(cp.nic || []).map(n => `<li>${n}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join('');
}

window.removeDiagnosisItem = function(diagId) {
    carePlanBuilder.removeCarePlanItem(diagId);
    renderDiagnosisSelectionGrid();
};

function renderCarePlanPreviewTable() {
    const container = document.getElementById('care-plan-table-container');
    if (!container) return;

    const plan = carePlanBuilder.currentPlan;
    const info = plan.patientInfo || {};
    const v = info.vitals || {};

    let html = `
        <div class="patient-print-summary">
            <div><strong>Hasta Adı Soyadı:</strong> ${info.name || 'Girilmedi'}</div>
            <div><strong>Yaş / Cinsiyet:</strong> ${info.age || '-'} / ${info.gender || '-'}</div>
            <div><strong>Tıbbi Tanı:</strong> ${info.diagnosis || 'Girilmedi'}</div>
            <div><strong>Oda / Servis:</strong> ${info.room || 'Girilmedi'}</div>
            <div style="grid-column: span 2;">
                <strong>Yaşam Bulguları:</strong> Ateş: ${v.ates || '-'}°C | TA: ${v.tansiyonSystolic || '-'}/${v.tansiyonDiastolic || '-'} | Nabız: ${v.nabiz || '-'}/dk | Solunum: ${v.solunum || '-'}/dk | SpO2: %${v.spo2 || '-'} | Ağrı: ${v.agri || '-'}/10
            </div>
        </div>

        <div class="plan-table-wrapper">
            <table class="plan-table">
                <thead>
                    <tr>
                        <th style="width: 22%;">Hemşirelik Tanısı (NANDA-I)</th>
                        <th style="width: 22%;">Etiyoloji & Belirti/Bulgular</th>
                        <th style="width: 23%;">Beklenen Hasta Çıktıları (NOC)</th>
                        <th style="width: 23%;">Hemşirelik Girişimleri (NIC)</th>
                        <th style="width: 10%;">Değerlendirme</th>
                    </tr>
                </thead>
                <tbody>`;

    if (!plan.carePlans || plan.carePlans.length === 0) {
        html += `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Henüz plana bir hemşirelik tanısı eklenmedi. Step 2\'ye dönüp tanı ekleyin.</td></tr>`;
    } else {
        plan.carePlans.forEach(cp => {
            html += `
                <tr>
                    <td>
                        <strong style="color: var(--primary-light);">${getDiagnosisTitle(cp)}</strong>
                    </td>
                    <td>
                        <div><strong>İlişkili Faktörler:</strong> ${cp.etiology || '-'}</div>
                        <div style="margin-top: 6px;"><strong>Belirti/Bulgular:</strong> ${cp.symptoms || '-'}</div>
                    </td>
                    <td>
                        <ul class="table-bullet-list">
                            ${(cp.noc || []).map(n => `<li>${n}</li>`).join('')}
                        </ul>
                        ${cp.scoreBefore && cp.scoreTarget ? `<div style="margin-top: 8px; font-size: 0.78rem; font-weight: 700; color: var(--primary-light); background: rgba(13,148,136,0.15); padding: 4px 8px; border-radius: 6px;">📊 Likert Skalası: Önce <strong>${cp.scoreBefore}/5</strong> ➔ Hedef <strong>${cp.scoreTarget}/5</strong></div>` : ''}
                    </td>
                    <td>
                        <ul class="table-bullet-list">
                            ${(cp.nic || []).map(n => `<li>${n}</li>`).join('')}
                        </ul>
                        ${cp.frequency ? `<div style="margin-top: 8px; font-size: 0.78rem; font-weight: 700; color: var(--secondary); background: rgba(59,130,246,0.15); padding: 4px 8px; border-radius: 6px;">⏱️ Sıklık/Zaman: <strong>${cp.frequency}</strong></div>` : ''}
                    </td>
                    <td>
                        <span class="badge badge-success">${cp.evaluationStatus || 'Ulaşıldı'}</span>
                    </td>
                </tr>`;

        });
    }

    html += `</tbody></table></div>`;

    // Academic Signature Block (Imza Kutusu)
    html += `
        <div class="academic-signature-block">
            <div class="signature-box">
                <h5>👨‍🎓 Bakım Planını Hazırlayan Öğrenci</h5>
                <p style="font-size: 0.84rem;">Adı Soyadı / Okul No: _______________________</p>
                <p style="font-size: 0.84rem; margin-top: 4px;">İmza / Tarih: _______________________</p>
            </div>
            <div class="signature-box">
                <h5>👩‍🏫 Danışman Öğretim Elemanı Değerlendirme & Onay</h5>
                <p style="font-size: 0.84rem;">Notu / Görüşü: _______________________</p>
                <p style="font-size: 0.84rem; margin-top: 4px;">Unvan / Adı / İmza: _______________________</p>
            </div>
        </div>`;

    container.innerHTML = html;
}

/* ==========================================================================
   3. Clinical Calculators & Scale Transfers
   ========================================================================== */
function initCalculators() {
    const gcsInputs = document.querySelectorAll('.gcs-input');
    const calculateGCSHandler = () => {
        const eye = document.getElementById('gcs-eye').value;
        const verbal = document.getElementById('gcs-verbal').value;
        const motor = document.getElementById('gcs-motor').value;
        const result = window.calculateGCS(eye, verbal, motor);

        document.getElementById('gcs-score-display').textContent = `${result.total} / 15`;
        const interpEl = document.getElementById('gcs-interpretation');
        interpEl.textContent = result.interpretation;
        interpEl.className = `alert ${result.alertClass}`;
    };
    gcsInputs.forEach(input => input.addEventListener('change', calculateGCSHandler));

    const bradenInputs = document.querySelectorAll('.braden-input');
    const calculateBradenHandler = () => {
        const sensory = document.getElementById('braden-sensory').value;
        const moisture = document.getElementById('braden-moisture').value;
        const activity = document.getElementById('braden-activity').value;
        const mobility = document.getElementById('braden-mobility').value;
        const nutrition = document.getElementById('braden-nutrition').value;
        const friction = document.getElementById('braden-friction').value;

        const result = window.calculateBraden(sensory, moisture, activity, mobility, nutrition, friction);

        document.getElementById('braden-score-display').textContent = `${result.total} / 23`;
        const interpEl = document.getElementById('braden-interpretation');
        interpEl.textContent = result.riskLevel;
        interpEl.className = `alert ${result.alertClass}`;

        const recList = document.getElementById('braden-recommendations');
        if (recList) {
            recList.innerHTML = result.recommendations.map(r => `<li>${r}</li>`).join('');
        }
    };
    bradenInputs.forEach(input => input.addEventListener('change', calculateBradenHandler));

    const itakiMajorCbs = document.querySelectorAll('.itaki-major-cb');
    const itakiMinorCbs = document.querySelectorAll('.itaki-minor-cb');

    const updateItakiHandler = () => {
        let majorsCount = 0;
        let minorsCount = 0;
        itakiMajorCbs.forEach(cb => { if (cb.checked) majorsCount++; });
        itakiMinorCbs.forEach(cb => { if (cb.checked) minorsCount++; });

        const result = window.calculateItaki(majorsCount, minorsCount);
        document.getElementById('itaki-score-display').textContent = `${result.total} Puan`;

        const interpEl = document.getElementById('itaki-interpretation');
        interpEl.textContent = result.riskLabel;
        interpEl.className = `alert ${result.alertClass}`;

        const actionsList = document.getElementById('itaki-actions-list');
        if (actionsList) {
            actionsList.innerHTML = result.actions.map(a => `<li>${a}</li>`).join('');
        }
    };
    itakiMajorCbs.forEach(cb => cb.addEventListener('change', updateItakiHandler));
    itakiMinorCbs.forEach(cb => cb.addEventListener('change', updateItakiHandler));

    // Transfer Braden score to Care Plan
    document.getElementById('transfer-braden-btn')?.addEventListener('click', () => {
        const sensory = document.getElementById('braden-sensory').value;
        const moisture = document.getElementById('braden-moisture').value;
        const activity = document.getElementById('braden-activity').value;
        const mobility = document.getElementById('braden-mobility').value;
        const nutrition = document.getElementById('braden-nutrition').value;
        const friction = document.getElementById('braden-friction').value;

        const res = window.calculateBraden(sensory, moisture, activity, mobility, nutrition, friction);
        const nandaList = window.NANDA_DIAGNOSES || [];
        const diag = nandaList.find(d => d.id === 'cilt_butunlugu_bozulma') || nandaList.find(d => d.id === 'dusme_riski');

        if (diag) {
            carePlanBuilder.addCarePlanItem({
                diagnosisId: diag.id,
                diagnosisTitle: `${diag.code} - ${diag.title}`,
                category: diag.category,
                etiology: 'Yatağa bağımlılık, nem ve doku basıncına bağlı olarak',
                symptoms: `Braden Skoru: ${res.total}/23 (${res.riskLevel})`,
                noc: res.recommendations || [ 'Doku bütünlüğü korunacak.' ],
                nic: [
                    '2 saatte bir pozisyon verilecek.',
                    'Havalı yatak kurulacak.',
                    'Cilt bariyer kremleri uygulanacak.'
                ],
                evaluationStatus: 'Kısmen Ulaşıldı'
            });

            alert(`✓ Braden Risk Skoru (${res.total} Puan - ${res.riskLevel}) Bakım Planına aktarıldı! Bakım Planı sekmesinden inceleyebilirsiniz.`);
            const builderTabBtn = document.querySelector('.nav-tab[data-tab="builder"]');
            if (builderTabBtn) builderTabBtn.click();
            window.goToWizardStep(3);
        }
    });

    // Transfer Itaki score to Care Plan
    document.getElementById('transfer-itaki-btn')?.addEventListener('click', () => {
        let majorsCount = 0;
        let minorsCount = 0;
        document.querySelectorAll('.itaki-major-cb').forEach(cb => { if (cb.checked) majorsCount++; });
        document.querySelectorAll('.itaki-minor-cb').forEach(cb => { if (cb.checked) minorsCount++; });

        const res = window.calculateItaki(majorsCount, minorsCount);
        const nandaList = window.NANDA_DIAGNOSES || [];
        const diag = nandaList.find(d => d.id === 'dusme_riski');

        if (diag) {
            carePlanBuilder.addCarePlanItem({
                diagnosisId: diag.id,
                diagnosisTitle: `${diag.code} - ${diag.title}`,
                category: diag.category,
                etiology: 'İleri yaş, fiziksel immobilite ve denge kaybına bağlı olarak',
                symptoms: `İtaki Düşme Skoru: ${res.total} Puan (${res.riskLabel})`,
                noc: [ 'Düşme olayı ve fiziksel yaralanma yaşanmayacak.' ],
                nic: res.actions || [
                    'Yatak kenarlıkları kaldırılacak.',
                    'Yatak en düşük seviyede kilitlenecek.',
                    'Düşme riski etiketi asılacak.'
                ],
                evaluationStatus: 'Hedefe Ulaşıldı'
            });

            alert(`✓ İtaki Düşme Skoru (${res.total} Puan - ${res.riskLabel}) Bakım Planına aktarıldı! Bakım Planı sekmesinden inceleyebilirsiniz.`);
            const builderTabBtn = document.querySelector('.nav-tab[data-tab="builder"]');
            if (builderTabBtn) builderTabBtn.click();
            window.goToWizardStep(3);
        }
    });

    document.getElementById('calc-drip-btn')?.addEventListener('click', () => {
        const volume = parseFloat(document.getElementById('drip-volume').value);
        const hours = parseFloat(document.getElementById('drip-hours').value);
        const factor = parseFloat(document.getElementById('drip-factor').value);

        const res = window.calculateDripRate(volume, hours, factor);
        const output = document.getElementById('drip-result-output');
        if (res) {
            output.innerHTML = `
                <div class="alert alert-success">
                    <strong>💧 Damla Hızı:</strong> ${res.dripRatePerMin} damla / dakika (gtt/dk)<br>
                    <strong>⏱️ İnfüzyon Hızı:</strong> ${res.mlPerHour} mL / saat
                </div>`;
        } else {
            output.innerHTML = `<div class="alert alert-danger">Lütfen geçerli hacim ve saat değerleri giriniz.</div>`;
        }
    });

    // Clear / Reset Drip Rate
    document.getElementById('clear-drip-btn')?.addEventListener('click', () => {
        document.getElementById('drip-volume').value = '';
        document.getElementById('drip-hours').value = '';
        document.getElementById('drip-result-output').innerHTML = '';
    });

    document.getElementById('calc-dose-btn')?.addEventListener('click', () => {
        const desired = parseFloat(document.getElementById('dose-desired').value);
        const onHand = parseFloat(document.getElementById('dose-onhand').value);
        const volHand = parseFloat(document.getElementById('dose-volhand').value);

        const resVolume = window.calculateMedDose(desired, onHand, volHand);
        const output = document.getElementById('dose-result-output');
        if (resVolume) {
            output.innerHTML = `
                <div class="alert alert-success">
                    <strong>💉 Çekilecek/Uygulanacak Miktar:</strong> ${resVolume} mL
                </div>`;
        } else {
            output.innerHTML = `<div class="alert alert-danger">Lütfen pozitif doz sayıları giriniz.</div>`;
        }
    });

    // Clear / Reset Med Dose
    document.getElementById('clear-dose-btn')?.addEventListener('click', () => {
        document.getElementById('dose-desired').value = '';
        document.getElementById('dose-onhand').value = '';
        document.getElementById('dose-volhand').value = '';
        document.getElementById('dose-result-output').innerHTML = '';
    });

    document.getElementById('calc-bmi-btn')?.addEventListener('click', () => {
        const weight = parseFloat(document.getElementById('bmi-weight').value);
        const height = parseFloat(document.getElementById('bmi-height').value);

        const res = window.calculateBMI(weight, height);
        const output = document.getElementById('bmi-result-output');
        if (res) {
            output.innerHTML = `
                <div class="alert ${res.alertClass}">
                    <strong>⚖️ VKİ: ${res.bmi} kg/m²</strong> — Status: ${res.status}
                </div>`;
        } else {
            output.innerHTML = `<div class="alert alert-danger">Lütfen geçerli kilo (kg) ve boy (cm) giriniz.</div>`;
        }
    });

    // Clear / Reset BMI
    document.getElementById('clear-bmi-btn')?.addEventListener('click', () => {
        document.getElementById('bmi-weight').value = '';
        document.getElementById('bmi-height').value = '';
        document.getElementById('bmi-result-output').innerHTML = '';
    });
}

/* ==========================================================================
   4. Clinical Templates Library
   ========================================================================== */
function initTemplateLibrary() {
    const container = document.getElementById('templates-list-container');
    if (!container) return;

    const templates = window.CLINICAL_TEMPLATES || [];
    container.innerHTML = templates.map(tmpl => `
        <div class="card card-hover feature-card">
            <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 8px;">
                ${tmpl.tags.map(t => `<span class="badge badge-secondary">${t}</span>`).join('')}
            </div>
            <h3>${tmpl.title}</h3>
            <p>${tmpl.description}</p>
            <div style="display: flex; gap: 8px;">
                <button class="btn btn-sm btn-primary" onclick="loadTemplateIntoBuilder('${tmpl.id}')">
                    🚀 Bu Şablonu Kullan & Düzenle
                </button>
            </div>
        </div>
    `).join('');

    window.loadTemplateIntoBuilder = function(templateId) {
        const templatesList = window.CLINICAL_TEMPLATES || [];
        const tmpl = templatesList.find(t => t.id === templateId);
        if (!tmpl) return;

        carePlanBuilder.loadFullPlan(tmpl);

        const info = tmpl.patientInfo || {};
        const v = info.vitals || {};

        document.getElementById('patient-name-input').value = info.name || '';
        document.getElementById('patient-age-input').value = info.age || '';
        document.getElementById('patient-gender-select').value = info.gender || 'Erkek';
        document.getElementById('patient-diag-input').value = info.diagnosis || '';
        document.getElementById('patient-room-input').value = info.room || '';

        document.getElementById('vital-ates-input').value = v.ates || '';
        document.getElementById('vital-tansys-input').value = v.tansiyonSystolic || '';
        document.getElementById('vital-tandia-input').value = v.tansiyonDiastolic || '';
        document.getElementById('vital-nabiz-input').value = v.nabiz || '';
        document.getElementById('vital-solunum-input').value = v.solunum || '';
        document.getElementById('vital-spo2-input').value = v.spo2 || '';
        document.getElementById('vital-agri-input').value = v.agri || '0';

        const tabBtn = document.querySelector('.nav-tab[data-tab="builder"]');
        if (tabBtn) tabBtn.click();
        window.goToWizardStep(4);
    };
}

/* ==========================================================================
   5. NANDA Dictionary View & Favorites Logic
   ========================================================================== */
window.getFavoriteDiagnoses = function() {
    try {
        let data = localStorage.getItem('bakimrehberim_favorites');
        if (!data) data = localStorage.getItem('nursiplan_favorites');
        return data ? JSON.parse(data) : [];
    } catch(e) {
        return [];
    }
};

window.toggleFavoriteDiagnosis = function(diagId) {
    let favorites = window.getFavoriteDiagnoses();
    if (favorites.includes(diagId)) {
        favorites = favorites.filter(id => id !== diagId);
    } else {
        favorites.push(diagId);
    }
    localStorage.setItem('bakimrehberim_favorites', JSON.stringify(favorites));

    // Refresh views if open
    const catSelect = document.getElementById('nanda-category-select');
    if (catSelect) {
        catSelect.dispatchEvent(new Event('change'));
    }
    renderDiagnosisSelectionGrid();
};

function initNandaDictionary() {
    const container = document.getElementById('nanda-dictionary-container');
    const searchInput = document.getElementById('nanda-search-input');
    const catSelect = document.getElementById('nanda-category-select');

    if (!container) return;

    const categories = window.NANDA_CATEGORIES || [];
    const diagnoses = window.NANDA_DIAGNOSES || [];

    catSelect.innerHTML = `<option value="all">Tüm Kategoriler</option>` +
        `<option value="favorites">⭐ Favori Tanılarım</option>` +
        categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

    const sortSelect = document.getElementById('nanda-sort-select');

    const renderDictionary = () => {
        const query = searchInput.value.toLowerCase().trim();
        const catFilter = catSelect.value;
        const sortMode = sortSelect ? sortSelect.value : 'code';
        const favorites = window.getFavoriteDiagnoses();

        const filtered = diagnoses.filter(d => {
            const matchesQuery = d.title.toLowerCase().includes(query) ||
                d.code.includes(query) ||
                d.definition.toLowerCase().includes(query);
            
            let matchesCat = true;
            if (catFilter === 'favorites') {
                matchesCat = favorites.includes(d.id);
            } else if (catFilter !== 'all') {
                matchesCat = d.category === catFilter;
            }

            return matchesQuery && matchesCat;
        });

        // Apply Sorting
        filtered.sort((a, b) => {
            if (sortMode === 'title') {
                return a.title.localeCompare(b.title, 'tr');
            } else {
                return parseInt(a.code) - parseInt(b.code);
            }
        });

        if (filtered.length === 0) {
            container.innerHTML = `<div class="alert alert-warning">Arama kriterlerine uygun NANDA tanısı bulunamadı.</div>`;
            return;
        }

        container.innerHTML = filtered.map(d => {
            const catObj = categories.find(c => c.id === d.category);
            const isFav = favorites.includes(d.id);

            return `
                <div class="card" style="margin-bottom: 16px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <div>
                            <span class="badge badge-primary">${d.code}</span>
                            <span class="badge badge-secondary" style="color: ${catObj?.color || '#fff'};">${catObj?.name || d.category}</span>
                        </div>
                        <button class="favorite-star-btn ${isFav ? 'active' : ''}" onclick="toggleFavoriteDiagnosis('${d.id}')" title="Favorilere Ekle/Çıkar">
                            ${isFav ? '⭐' : '☆'}
                        </button>
                    </div>
                    <h3 style="margin-bottom: 6px; color: var(--primary-light);">${d.title}</h3>
                    <p style="font-size: 0.9rem; margin-bottom: 12px;"><strong>Tanım:</strong> ${d.definition}</p>

                    <div class="grid-2" style="font-size: 0.86rem;">
                        <div style="background: rgba(15,23,42,0.6); padding: 12px; border-radius: 8px;">
                            <strong style="color: var(--warning);">Etiyoloji (Nedenler):</strong>
                            <ul style="padding-left: 16px; margin-top: 4px;">
                                ${(d.etiology || []).map(e => `<li>${e}</li>`).join('')}
                            </ul>
                        </div>
                        <div style="background: rgba(15,23,42,0.6); padding: 12px; border-radius: 8px;">
                            <strong style="color: var(--info);">Belirti ve Bulgular:</strong>
                            <ul style="padding-left: 16px; margin-top: 4px;">
                                ${(d.symptoms || []).map(s => `<li>${s}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>`;
        }).join('');
    };

    searchInput.addEventListener('input', renderDictionary);
    catSelect.addEventListener('change', renderDictionary);
    if (sortSelect) sortSelect.addEventListener('change', renderDictionary);
    renderDictionary();
}

/* ==========================================================================
   6. Saved Plans View
   ========================================================================== */
function initSavedPlansView() {
    renderSavedPlansList();
}

function renderSavedPlansList() {
    const container = document.getElementById('saved-plans-container');
    if (!container) return;

    const plans = window.getSavedPlans();
    if (plans.length === 0) {
        container.innerHTML = `
            <div class="alert alert-info">
                ℹ️ Henüz kaydedilmiş bakım planınız bulunmuyor. "Bakım Planı Oluştur" sekmesinden plan hazırlayıp kaydedebilirsiniz.
            </div>`;
        return;
    }

    container.innerHTML = plans.map(p => `
        <div class="card card-hover" style="margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                    <h3 style="margin-bottom: 4px; color: var(--primary-light);">${p.patientInfo?.name || 'İsimsiz Hasta'}</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">
                        Oluşturulma: ${p.createdAt || '-'} | Tanı: ${p.patientInfo?.diagnosis || '-'}
                    </p>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button class="btn btn-sm btn-primary" onclick="loadSavedPlanToBuilder('${p.id}')">📂 Yükle & Aç</button>
                    <button class="btn btn-sm btn-secondary" onclick="exportSavedPlanAsWord('${p.id}')">📝 Word İndir</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteSavedPlanItem('${p.id}')">🗑️ Sil</button>
                </div>

            </div>
            <div style="margin-top: 12px;">
                <span class="badge badge-secondary">${(p.carePlans || []).length} Hemşirelik Tanısı Ekli</span>
            </div>
        </div>
    `).join('');

    window.loadSavedPlanToBuilder = function(planId) {
        const plans = window.getSavedPlans();
        const p = plans.find(item => item.id === planId);
        if (!p) return;

        carePlanBuilder.loadFullPlan(p);

        const info = p.patientInfo || {};
        const v = info.vitals || {};

        document.getElementById('patient-name-input').value = info.name || '';
        document.getElementById('patient-age-input').value = info.age || '';
        document.getElementById('patient-gender-select').value = info.gender || 'Erkek';
        document.getElementById('patient-diag-input').value = info.diagnosis || '';
        document.getElementById('patient-room-input').value = info.room || '';

        document.getElementById('vital-ates-input').value = v.ates || '';
        document.getElementById('vital-tansys-input').value = v.tansiyonSystolic || '';
        document.getElementById('vital-tandia-input').value = v.tansiyonDiastolic || '';
        document.getElementById('vital-nabiz-input').value = v.nabiz || '';
        document.getElementById('vital-solunum-input').value = v.solunum || '';
        document.getElementById('vital-spo2-input').value = v.spo2 || '';
        document.getElementById('vital-agri-input').value = v.agri || '0';

        const tabBtn = document.querySelector('.nav-tab[data-tab="builder"]');
        if (tabBtn) tabBtn.click();
        window.goToWizardStep(4);
    };

    window.exportSavedPlanAsWord = function(planId) {
        const plans = window.getSavedPlans();
        const p = plans.find(item => item.id === planId);
        if (p) window.exportPlanAsWord(p);
    };

    window.exportSavedPlanAsText = function(planId) {
        const plans = window.getSavedPlans();
        const p = plans.find(item => item.id === planId);
        if (p) window.exportPlanAsText(p);
    };

    window.deleteSavedPlanItem = function(planId) {
        if (confirm('Bu bakım planını silmek istediğinize emin misiniz?')) {
            window.deletePlanFromStorage(planId);
            renderSavedPlansList();
            if (window.showToast) window.showToast('Bakım planı silindi.', 'info');
        }
    };
}

// Backup & Data Storage Event Listeners
document.getElementById('full-backup-export-btn')?.addEventListener('click', () => {
    if (window.exportFullSystemBackupJSON) window.exportFullSystemBackupJSON();
});

document.getElementById('full-backup-import-btn')?.addEventListener('click', () => {
    document.getElementById('full-backup-file-input')?.click();
});

document.getElementById('full-backup-file-input')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        if (window.importFullSystemBackupJSON) {
            window.importFullSystemBackupJSON(event.target.result);
        }
    };
    reader.readAsText(file);
    e.target.value = '';
});

/* ==========================================================================
   7. Command Palette / Global Search Modal (Ctrl + K)
   ========================================================================== */
function initCommandPalette() {
    const backdrop = document.getElementById('command-palette-modal');
    const searchInput = document.getElementById('cmd-search-input');
    const resultsContainer = document.getElementById('cmd-results-list');
    const openBtns = document.querySelectorAll('.trigger-cmd-palette');

    if (!backdrop || !searchInput || !resultsContainer) return;

    window.openCommandPalette = function() {
        backdrop.classList.add('active');
        searchInput.value = '';
        searchInput.focus();
        renderCmdResults('');
    };

    window.closeCommandPalette = function() {
        backdrop.classList.remove('active');
    };

    openBtns.forEach(btn => btn.addEventListener('click', window.openCommandPalette));

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            if (backdrop.classList.contains('active')) {
                window.closeCommandPalette();
            } else {
                window.openCommandPalette();
            }
        }
        if (e.key === 'Escape' && backdrop.classList.contains('active')) {
            window.closeCommandPalette();
        }
    });

    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) window.closeCommandPalette();
    });

    searchInput.addEventListener('input', (e) => {
        renderCmdResults(e.target.value.trim());
    });

    function renderCmdResults(query) {
        const q = query.toLowerCase();
        const results = [];

        // 1. Search NANDA Diagnoses
        const nandas = window.NANDA_DIAGNOSES || [];
        nandas.forEach(d => {
            if (!q || d.title.toLowerCase().includes(q) || d.code.includes(q) || d.definition.toLowerCase().includes(q)) {
                results.push({
                    type: 'NANDA Tanısı',
                    icon: '📖',
                    title: `${d.code} - ${d.title}`,
                    sub: d.definition,
                    action: () => {
                        window.closeCommandPalette();
                        const tabBtn = document.querySelector('.nav-tab[data-tab="dictionary"]');
                        if (tabBtn) tabBtn.click();
                        const searchBox = document.getElementById('nanda-search-input');
                        if (searchBox) {
                            searchBox.value = d.code;
                            searchBox.dispatchEvent(new Event('input'));
                        }
                    }
                });
            }
        });

        // 2. Search Clinical Calculators
        const calculators = [
            { id: 'gks', title: 'Glasgow Koma Skoru (GKS)', sub: 'Nörolojik bilinç düzeyi değerlendirme' },
            { id: 'braden', title: 'Braden Bası Yarası Risk Skalası', sub: 'Yatak yarası riski puanlaması' },
            { id: 'itaki', title: 'İtaki Düşme Riski Skalası', sub: 'Hasta düşme riski faktörleri' },
            { id: 'fluid', title: 'Aldığı - Çıkardığı Sıvı Dengesi (Bilanço)', sub: 'Sıvı takibi ve tutulumu' },
            { id: 'map', title: 'Ortalama Arter Basıncı (MAP)', sub: 'Perfüzyon basıncı hesaplama' },
            { id: 'drip', title: 'Serum Damla Hızı (gtt/dk)', sub: 'IV İnfüzyon hızı hesabı' },
            { id: 'dose', title: 'İlaç Dozaj Hesaplayıcı', sub: 'Ampul/doz hesaplama' },
            { id: 'bmi', title: 'Vücut Kitle İndeksi (VKİ)', sub: 'Kilo/boy indeksi' }
        ];

        calculators.forEach(c => {
            if (!q || c.title.toLowerCase().includes(q) || c.sub.toLowerCase().includes(q)) {
                results.push({
                    type: 'Hesaplayıcı',
                    icon: '🧮',
                    title: c.title,
                    sub: c.sub,
                    action: () => {
                        window.closeCommandPalette();
                        const tabBtn = document.querySelector('.nav-tab[data-tab="calculators"]');
                        if (tabBtn) tabBtn.click();
                    }
                });
            }
        });

        // 3. Search Clinical Templates
        const templates = window.CLINICAL_TEMPLATES || [];
        templates.forEach(t => {
            if (!q || t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)) {
                results.push({
                    type: 'Vaka Şablonu',
                    icon: '📋',
                    title: t.title,
                    sub: t.description,
                    action: () => {
                        window.closeCommandPalette();
                        const tabBtn = document.querySelector('.nav-tab[data-tab="templates"]');
                        if (tabBtn) tabBtn.click();
                    }
                });
            }
        });

        if (results.length === 0) {
            resultsContainer.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--text-muted);">Arama sonucu bulunamadı.</div>`;
            return;
        }

        resultsContainer.innerHTML = results.slice(0, 10).map((r, idx) => `
            <div class="cmd-result-item" onclick="window.cmdExecAction(${idx})">
                <div class="cmd-result-left">
                    <span class="cmd-result-icon">${r.icon}</span>
                    <div>
                        <div class="cmd-result-title">${r.title}</div>
                        <div class="cmd-result-sub">${r.sub}</div>
                    </div>
                </div>
                <span class="cmd-result-type">${r.type}</span>
            </div>
        `).join('');

        window._activeCmdActions = results;
        window.cmdExecAction = function(index) {
            if (window._activeCmdActions && window._activeCmdActions[index]) {
                window._activeCmdActions[index].action();
            }
        };
    }
}

/* ==========================================================================
   8. Aldığı - Çıkardığı Sıvı Dengesi (Fluid Balance) Handler
   ========================================================================== */
function initFluidBalanceCalculator() {
    const calcBtn = document.getElementById('calc-fluid-btn');
    const clearBtn = document.getElementById('clear-fluid-btn');
    const outputContainer = document.getElementById('fluid-result-output');

    if (!calcBtn || !outputContainer) return;

    function runFluidCalc() {
        const intake = {
            oral: document.getElementById('fluid-in-oral')?.value || 0,
            iv: document.getElementById('fluid-in-iv')?.value || 0,
            blood: document.getElementById('fluid-in-blood')?.value || 0,
            otherIntake: document.getElementById('fluid-in-other')?.value || 0
        };
        const output = {
            urine: document.getElementById('fluid-out-urine')?.value || 0,
            drain: document.getElementById('fluid-out-drain')?.value || 0,
            vomit: document.getElementById('fluid-out-vomit')?.value || 0,
            stool: document.getElementById('fluid-out-stool')?.value || 0,
            otherOutput: document.getElementById('fluid-out-other')?.value || 0
        };

        const res = window.calculateFluidBalance(intake, output);
        outputContainer.innerHTML = `
            <div class="fluid-balance-badge ${res.alertClass}">
                ${res.label}
            </div>
            <div style="font-size: 0.88rem; margin-top: 10px; color: var(--text-secondary); text-align: center;">
                <strong>Toplam Giren:</strong> ${res.totalIntake} mL | <strong>Toplam Çıkan:</strong> ${res.totalOutput} mL
            </div>
            <div class="alert alert-info" style="margin-top: 10px; font-size: 0.84rem;">
                💡 <strong>Klinik Öneri:</strong> ${res.advice}
            </div>
        `;
    }

    calcBtn.addEventListener('click', runFluidCalc);

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            ['fluid-in-oral', 'fluid-in-iv', 'fluid-in-blood', 'fluid-in-other',
             'fluid-out-urine', 'fluid-out-drain', 'fluid-out-vomit', 'fluid-out-stool', 'fluid-out-other'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = '';
            });
            outputContainer.innerHTML = '';
        });
    }
}

/* ==========================================================================
   9. MAP Calculator Handler
   ========================================================================== */
function initMAPCalculator() {
    const sysInput = document.getElementById('map-sys');
    const diaInput = document.getElementById('map-dia');
    const calcBtn = document.getElementById('calc-map-btn');
    const outputContainer = document.getElementById('map-result-output');

    if (!calcBtn || !outputContainer) return;

    function runMAPCalc() {
        const sys = sysInput?.value;
        const dia = diaInput?.value;
        const res = window.calculateMAP(sys, dia);

        if (!res) {
            outputContainer.innerHTML = `<div class="alert alert-warning">Lütfen sistolik ve diastolik tansiyon değerlerini giriniz.</div>`;
            return;
        }

        outputContainer.innerHTML = `
            <div style="text-align: center; margin-top: 12px;">
                <div style="font-size: 0.85rem; color: var(--text-secondary);">Hesaplanan MAP Değeri</div>
                <div style="font-size: 2.2rem; font-weight: 800; color: var(--primary-light);">${res.map} <span style="font-size: 1.1rem;">mmHg</span></div>
            </div>
            <div class="alert ${res.alertClass}" style="margin-top: 10px; font-size: 0.86rem;">
                ${res.status}
            </div>
        `;
    }

    calcBtn.addEventListener('click', runMAPCalc);
}

/* ==========================================================================
   10. Sample Patient Scenarios Preset Loader
   ========================================================================== */
function initSamplePatientLoader() {
    const sampleBtn = document.getElementById('fill-sample-patient-btn');
    if (!sampleBtn) return;

    const sampleCases = [
        {
            name: 'Ahmet Y. (Post-Op Cerrahi)',
            age: 52,
            gender: 'Erkek',
            diag: 'Post-Op Apandektomi (Gün 1)',
            room: 'Genel Cerrahi 304',
            vitals: { ates: 38.2, tansys: 135, tandia: 85, nabiz: 92, solunum: 20, spo2: 96, agri: 6 }
        },
        {
            name: 'Ayşe K. (KOAH / Solunum Yetmezliği)',
            age: 67,
            gender: 'Kadın',
            diag: 'KOAH Akut Alevlenme',
            room: 'Göğüs Hastalıkları 208',
            vitals: { ates: 37.1, tansys: 145, tandia: 90, nabiz: 104, solunum: 28, spo2: 89, agri: 2 }
        },
        {
            name: 'Mustafa T. (Diyabetik Ketoasidoz)',
            age: 45,
            gender: 'Erkek',
            diag: 'Tip 1 Diyabet + Dehidratasyon',
            room: 'Dahiliye Servis 112',
            vitals: { ates: 37.4, tansys: 92, tandia: 60, nabiz: 110, solunum: 24, spo2: 97, agri: 3 }
        },
        {
            name: 'Zeynep B. (Sezaryen Doğum)',
            age: 29,
            gender: 'Kadın',
            diag: 'Post-Op C-Section (Sezaryen 8. Saat)',
            room: 'Kadın Doğum 405',
            vitals: { ates: 36.8, tansys: 120, tandia: 78, nabiz: 80, solunum: 16, spo2: 99, agri: 5 }
        }
    ];

    sampleBtn.addEventListener('click', () => {
        const randomCase = sampleCases[Math.floor(Math.random() * sampleCases.length)];

        document.getElementById('patient-name-input').value = randomCase.name;
        document.getElementById('patient-age-input').value = randomCase.age;
        document.getElementById('patient-gender-select').value = randomCase.gender;
        document.getElementById('patient-diag-input').value = randomCase.diag;
        document.getElementById('patient-room-input').value = randomCase.room;

        document.getElementById('vital-ates-input').value = randomCase.vitals.ates;
        document.getElementById('vital-tansys-input').value = randomCase.vitals.tansys;
        document.getElementById('vital-tandia-input').value = randomCase.vitals.tandia;
        document.getElementById('vital-nabiz-input').value = randomCase.vitals.nabiz;
        document.getElementById('vital-solunum-input').value = randomCase.vitals.solunum;
        document.getElementById('vital-spo2-input').value = randomCase.vitals.spo2;
        document.getElementById('vital-agri-input').value = randomCase.vitals.agri;
        document.getElementById('agri-val-disp').textContent = randomCase.vitals.agri;

        document.querySelectorAll('.wong-face-btn').forEach(btn => {
            if (btn.getAttribute('data-score') === String(randomCase.vitals.agri)) btn.classList.add('active');
            else btn.classList.remove('active');
        });

        // Trigger input event to update builder draft
        const form = document.getElementById('patient-info-form');
        if (form) form.dispatchEvent(new Event('input'));

        if (window.showToast) window.showToast(`🎲 ${randomCase.name} vaka verileri forma yüklendi!`, 'success');
    });
}

/* ==========================================================================
   11. Contact & Feedback Modal Handler
   ========================================================================== */
function initContactModal() {
    const modal = document.getElementById('contact-modal');
    const openBtns = document.querySelectorAll('.trigger-contact-modal');
    const closeBtn = document.getElementById('close-contact-modal-btn');
    const cancelBtn = document.getElementById('cancel-contact-btn');
    const form = document.getElementById('contact-form');

    // Floating Contact Drawer toggle handlers
    const drawer = document.getElementById('contact-drawer');
    const drawerToggle = document.getElementById('contact-drawer-toggle');

    if (drawer && drawerToggle) {
        drawerToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            drawer.classList.toggle('expanded');
        });

        document.addEventListener('click', (e) => {
            if (drawer.classList.contains('expanded') && !drawer.contains(e.target)) {
                drawer.classList.remove('expanded');
            }
        });
    }

    if (!modal) return;

    window.openContactModal = function() {
        if (drawer) drawer.classList.remove('expanded');
        modal.classList.add('active');
    };

    window.closeContactModal = function() {
        modal.classList.remove('active');
    };

    openBtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.openContactModal();
    }));

    if (closeBtn) closeBtn.addEventListener('click', window.closeContactModal);
    if (cancelBtn) cancelBtn.addEventListener('click', window.closeContactModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) window.closeContactModal();
    });

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submit-contact-btn');
            const nameInput = document.getElementById('contact-name-input');
            const emailInput = document.getElementById('contact-email-input');
            const subjectSelect = document.getElementById('contact-subject-select');
            const messageInput = document.getElementById('contact-message-input');

            const name = nameInput?.value.trim() || 'Kullanıcı';
            const email = emailInput?.value.trim() || '';
            const subject = subjectSelect?.value || 'Geri Bildirim';
            const message = messageInput?.value.trim() || '';

            if (!email || !message) {
                if (window.showToast) window.showToast('⚠️ Lütfen tüm zorunlu alanları doldurun.', 'warning');
                return;
            }

            const originalBtnText = submitBtn ? submitBtn.innerHTML : '✉️ Mesajı Gönder';
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '⏳ Gönderiliyor...';
            }

            const targetEmail = 'burakctn05@gmail.com';

            try {
                const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        _subject: `[Hemşirelik Bakım Rehberim] ${subject} - ${name}`,
                        message: message,
                        _template: 'table'
                    })
                });

                const result = await response.json();

                if (response.ok || result.success === 'true' || result.success === true) {
                    form.reset();
                    window.closeContactModal();
                    if (window.showToast) {
                        window.showToast(`✉️ Teşekkürler ${name}! Mesajınız Hemşire Burak ÇETİN'e (burakctn05@gmail.com) başarıyla iletildi.`, 'success');
                    }
                } else if (result.message && result.message.includes('Activation')) {
                    form.reset();
                    window.closeContactModal();
                    if (window.showToast) {
                        window.showToast(`📧 FormSubmit doğrulama maili burakctn05@gmail.com adresinize gönderildi! Lütfen Gmail "Spam / Önemsiz" veya "Tanıtımlar" kutunuzu kontrol edip 'Activate Form' butonuna tıklayın.`, 'info');
                    }
                } else {
                    throw new Error(result.message || 'Gönderim başarısız.');
                }
            } catch (err) {
                console.warn('FormSubmit AJAX isteği başarısız oldu, mailto alternatifi tetikleniyor:', err);
                
                if (window.showToast) {
                    window.showToast('⚠️ E-posta servisine doğrudan ulaşılamadı. E-posta uygulamanız açılıyor...', 'warning');
                }

                // Fallback: Mailto linki ile istemci e-posta uygulamasını açma
                const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent('[Bakım Rehberim] ' + subject + ' - ' + name)}&body=${encodeURIComponent('Gönderen: ' + name + ' (' + email + ')\n\n' + message)}`;
                window.location.href = mailtoUrl;

                form.reset();
                window.closeContactModal();
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                }
            }
        });
    }
}

/* ==========================================================================
   12. Legal Notice & Copyright Modal Handler
   ========================================================================== */
function initLegalModal() {
    const modal = document.getElementById('legal-notice-modal');
    const openBtn = document.getElementById('open-legal-modal-btn');
    const closeBtn = document.getElementById('close-legal-modal-btn');
    const confirmBtn = document.getElementById('confirm-legal-modal-btn');

    if (!modal) return;

    window.openLegalModal = function() {
        modal.classList.add('active');
    };

    window.closeLegalModal = function() {
        modal.classList.remove('active');
    };

    if (openBtn) openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.openLegalModal();
    });

    if (closeBtn) closeBtn.addEventListener('click', window.closeLegalModal);
    if (confirmBtn) confirmBtn.addEventListener('click', window.closeLegalModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) window.closeLegalModal();
    });
}

/* ==========================================================================
   13. Secret Developer Admin Panel & Silent Visitor Counter
   ========================================================================== */
function initVisitorCounter() {
    try {
        // Daily visit tracking
        const today = new Date().toISOString().split('T')[0];
        const lastDate = localStorage.getItem('dev_last_visit_date');
        let todayVisits = parseInt(localStorage.getItem('dev_today_visits') || '0', 10);

        if (lastDate !== today) {
            todayVisits = 1;
            localStorage.setItem('dev_last_visit_date', today);
        } else {
            todayVisits += 1;
        }
        localStorage.setItem('dev_today_visits', todayVisits.toString());

        // Fetch & Increment overall count on CounterAPI silently
        fetch('https://api.counterapi.dev/v1/hemsirelik-bakim-rehberim-burakcetin/visits/up')
            .then(res => res.json())
            .then(data => {
                if (data && data.count) {
                    localStorage.setItem('dev_total_visits', data.count.toString());
                }
            })
            .catch(err => {
                console.log('Silent counter API offline:', err);
                let totalVisits = parseInt(localStorage.getItem('dev_total_visits') || '1', 10) + 1;
                localStorage.setItem('dev_total_visits', totalVisits.toString());
            });
    } catch (e) {
        console.warn('Visitor counter init error:', e);
    }
}

function initDevAdminModal() {
    const modal = document.getElementById('dev-admin-modal');
    const triggerBtn = document.getElementById('dev-brand-trigger');
    const closeBtn = document.getElementById('close-dev-admin-modal-btn');
    const confirmBtn = document.getElementById('confirm-dev-admin-modal-btn');

    if (!modal) return;

    window.openDevAdminModal = function() {
        // Fetch fresh stats before opening
        const totalVisitsEl = document.getElementById('dev-stat-total-visits');
        const todayVisitsEl = document.getElementById('dev-stat-today-visits');
        const plansCountEl = document.getElementById('dev-stat-plans-count');
        const deviceTypeEl = document.getElementById('dev-stat-device-type');

        const totalVisits = localStorage.getItem('dev_total_visits') || '1';
        const todayVisits = localStorage.getItem('dev_today_visits') || '1';
        
        let savedPlansCount = 0;
        try {
            const plans = JSON.parse(localStorage.getItem('nursing_care_plans') || '[]');
            savedPlansCount = Array.isArray(plans) ? plans.length : 0;
        } catch (e) {}

        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const deviceText = isMobile ? '📱 Mobil (Telefon/Tablet)' : '💻 Masaüstü Bilgisayar';

        if (totalVisitsEl) totalVisitsEl.textContent = totalVisits;
        if (todayVisitsEl) todayVisitsEl.textContent = todayVisits;
        if (plansCountEl) plansCountEl.textContent = savedPlansCount.toString();
        if (deviceTypeEl) deviceTypeEl.textContent = deviceText;

        modal.classList.add('active');
    };

    window.closeDevAdminModal = function() {
        modal.classList.remove('active');
    };

    // 3 Fast Clicks Secret Gesture Listener
    if (triggerBtn) {
        let clickCount = 0;
        let clickTimer = null;

        triggerBtn.addEventListener('click', (e) => {
            if (e) e.preventDefault();
            if (window.getSelection) window.getSelection().removeAllRanges();

            clickCount++;
            clearTimeout(clickTimer);

            if (clickCount >= 3) {
                clickCount = 0;
                window.openDevAdminModal();
                if (window.showToast) window.showToast('👨‍⚕️ Geliştirici Yönetim Paneli Açıldı', 'info');
            } else {
                clickTimer = setTimeout(() => { clickCount = 0; }, 1500);
            }
        });
    }

    // Keyboard Shortcut (Ctrl + Shift + A)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
            e.preventDefault();
            window.openDevAdminModal();
        }
    });

    if (closeBtn) closeBtn.addEventListener('click', window.closeDevAdminModal);
    if (confirmBtn) confirmBtn.addEventListener('click', window.closeDevAdminModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) window.closeDevAdminModal();
    });
}



