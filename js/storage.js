/**
 * Hemşirelik Bakım Rehberim - LocalStorage & Export Utilities
 */

const STORAGE_KEY = 'bakimrehberim_saved_plans';

window.getSavedPlans = function() {
    try {
        let data = localStorage.getItem(STORAGE_KEY);
        if (!data) data = localStorage.getItem('nursiplan_saved_plans');
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error('Saved plans read error:', e);
        return [];
    }
};

window.savePlanToStorage = function(planObject) {
    const plans = window.getSavedPlans();
    if (!planObject.id) {
        planObject.id = 'plan_' + Date.now();
        planObject.createdAt = new Date().toLocaleDateString('tr-TR', {
            year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });
    }

    const index = plans.findIndex(p => p.id === planObject.id);
    if (index >= 0) {
        plans[index] = planObject;
    } else {
        plans.unshift(planObject);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(plans));
    return planObject;
};

window.deletePlanFromStorage = function(planId) {
    let plans = window.getSavedPlans();
    plans = plans.filter(p => p.id !== planId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plans));
    return plans;
};

window.generatePlanFormattedText = function(planObject) {
    const academic = planObject.academicInfo || {};
    let text = `====================================================\n`;
    text += `       HEMŞİRELİK BAKIM PLANI - HEMŞİRELİK BAKIM REHBERİM\n`;
    text += `====================================================\n\n`;

    if (academic.university || academic.faculty || academic.course || academic.instructor || academic.hospital || academic.student || academic.date) {
        text += `[AKADEMİK STAJ & ÜST BİLGİ]\n`;
        if (academic.university) text += `Üniversite: ${academic.university}\n`;
        if (academic.faculty) text += `Fakülte / Bölüm: ${academic.faculty}\n`;
        if (academic.course) text += `Dersin Adı: ${academic.course}\n`;
        if (academic.instructor) text += `Sorumlu Öğretim Elemanı: ${academic.instructor}\n`;
        if (academic.hospital) text += `Staj Hastanesi / Servis: ${academic.hospital}\n`;
        if (academic.student) text += `Öğrenci Adı Soyadı & No: ${academic.student}\n`;
        if (academic.date) text += `Staj Tarihi: ${academic.date}\n`;
        text += `----------------------------------------------------\n\n`;
    }

    text += `[HASTA BİLGİLERİ]\n`;
    text += `Adı Soyadı: ${planObject.patientInfo?.name || '-'}\n`;
    text += `Yaş / Cinsiyet: ${planObject.patientInfo?.age || '-'} / ${planObject.patientInfo?.gender || '-'}\n`;
    text += `Tıbbi Tanı: ${planObject.patientInfo?.diagnosis || '-'}\n`;
    text += `Oda / Servis: ${planObject.patientInfo?.room || '-'}\n\n`;

    text += `====================================================\n`;
    text += `BAKIM PLANI DETAYLARI\n`;
    text += `====================================================\n\n`;

    (planObject.carePlans || []).forEach((cp, index) => {
        text += `--- TANI #${index + 1}: ${cp.diagnosisTitle || cp.diagnosisId} ---\n`;
        text += `• ETIYOLOJİ: ${cp.etiology}\n`;
        text += `• BELİRTİ VE BULGULAR: ${cp.symptoms}\n`;
        text += `• HEDEFLER (NOC):\n`;
        (cp.noc || []).forEach(n => text += `   - ${n}\n`);
        text += `• GİRİŞİMLER (NIC):\n`;
        (cp.nic || []).forEach(n => text += `   - ${n}\n`);
        text += `• DEĞERLENDİRME: ${cp.evaluationStatus || 'Henüz yapılmadı'}\n\n`;
    });

    return text;
};

/**
 * Toast Notification Popup Helper
 */
window.showToast = function(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    let icon = '✅';
    if (type === 'danger') icon = '❌';
    else if (type === 'info') icon = 'ℹ️';

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
};

window.copyPlanToClipboard = function(planObject) {
    const text = window.generatePlanFormattedText(planObject);
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            window.showToast('📋 Bakım planı metni panoya kopyalandı! Word/WhatsApp üzerine yapıştırabilirsiniz.', 'success');
        }).catch(() => {
            window.fallbackCopyText(text);
        });
    } else {
        window.fallbackCopyText(text);
    }
};

window.fallbackCopyText = function(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        window.showToast('📋 Bakım planı metni panoya kopyalandı!', 'success');
    } catch (err) {
        window.showToast('Kopyalama yapılamadı, lütfen metin indirmeyi kullanınız.', 'danger');
    }
    document.body.removeChild(textArea);
};

window.exportPlanAsText = function(planObject) {
    const text = window.generatePlanFormattedText(planObject);
    const dataStr = "data:text/plain;charset=utf-8," + encodeURIComponent(text);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Bakim_Plani_${planObject.patientInfo?.name || 'Hasta'}.txt`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    window.showToast('📄 Metin dosyası (.txt) indirildi.', 'info');
};

window.exportPlanAsJSON = function(planObject) {
    const jsonStr = JSON.stringify(planObject, null, 2);
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(jsonStr);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `BakimRehberim_Yedek_${planObject.patientInfo?.name || 'Vaka'}.json`);

    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    window.showToast('📤 JSON yedek dosyası indirildi.', 'success');
};

window.importPlanFromJSON = function(jsonString) {
    try {
        const parsed = JSON.parse(jsonString);
        if (parsed && (parsed.patientInfo || parsed.carePlans)) {
            window.savePlanToStorage(parsed);
            window.showToast('📥 Bakım planı yedeği başarıyla içe aktarıldı!', 'success');
            return parsed;
        } else {
            throw new Error('Geçersiz plan formatı.');
        }
    } catch (e) {
        window.showToast('❌ JSON dosyası okunamadı veya format geçersiz.', 'danger');
        return null;
    }
};

window.exportPlanAsWord = function(planObject) {
    const p = planObject || {};
    const info = p.patientInfo || {};
    const vitals = info.vitals || {};
    const academic = p.academicInfo || {};

    let academicTableHtml = '';
    if (academic.university || academic.faculty || academic.course || academic.instructor || academic.hospital || academic.student || academic.date) {
        academicTableHtml = `
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16pt; border: 2px solid #0d9488;">
            <thead>
                <tr>
                    <th colspan="2" style="background-color: #0d9488; color: #ffffff; text-align: center; padding: 8pt; font-size: 13pt;">
                        ${academic.university ? academic.university.toUpperCase() : 'AKADEMİK STAJ & KLİNİK ÜST BİLGİ'}
                    </th>
                </tr>
            </thead>
            <tbody>
                ${academic.faculty ? `<tr><td colspan="2" style="background-color: #f0fdf4; color: #0f766e; text-align: center; font-weight: bold; padding: 6pt; font-size: 11pt;">${academic.faculty}</td></tr>` : ''}
                <tr>
                    <td style="width: 50%; background-color: #f8fafc; padding: 6pt;"><strong>Dersin Adı:</strong> ${academic.course || '-'}</td>
                    <td style="width: 50%; background-color: #f8fafc; padding: 6pt;"><strong>Sorumlu Öğretim Elemanı:</strong> ${academic.instructor || '-'}</td>
                </tr>
                <tr>
                    <td style="width: 50%; background-color: #f8fafc; padding: 6pt;"><strong>Staj Yapılan Hastane / Servis:</strong> ${academic.hospital || '-'}</td>
                    <td style="width: 50%; background-color: #f8fafc; padding: 6pt;"><strong>Öğrenci Adı Soyadı & No:</strong> ${academic.student || '-'}</td>
                </tr>
                ${academic.date ? `<tr><td colspan="2" style="background-color: #f8fafc; padding: 6pt;"><strong>Staj / Bakım Planı Tarihi:</strong> ${academic.date}</td></tr>` : ''}
            </tbody>
        </table>`;
    }

    let html = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset="utf-8"><title>Hemşirelik Bakım Planı</title>
    <style>
        body { font-family: 'Calibri', 'Arial', sans-serif; font-size: 11pt; color: #1e293b; }
        h1 { font-size: 18pt; text-align: center; color: #0d9488; margin-bottom: 4pt; }
        p.sub { font-size: 10pt; text-align: center; color: #64748b; margin-top: 0; margin-bottom: 16pt; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 16pt; }
        th, td { border: 1px solid #94a3b8; padding: 6pt 8pt; vertical-align: top; }
        th { background-color: #0d9488; color: #ffffff; font-weight: bold; text-align: center; }
        .info-table td { background-color: #f1f5f9; }
    </style>
    </head>
    <body>
        ${academicTableHtml}

        <h1>T.C. HEMŞİRELİK BAKIM PLANI</h1>
        <p class="sub">Hemşirelik Bakım Rehberim - Akademik Klinik Bakım Planı Formu</p>

        <table class="info-table">
            <tr>
                <td><strong>Hasta Adı Soyadı:</strong> ${info.name || '-'}</td>
                <td><strong>Yaş / Cinsiyet:</strong> ${info.age || '-'} / ${info.gender || '-'}</td>
            </tr>
            <tr>
                <td><strong>Tıbbi Tanı / Operasyon:</strong> ${info.diagnosis || '-'}</td>
                <td><strong>Klinik / Oda No:</strong> ${info.room || '-'}</td>
            </tr>
            <tr>
                <td colspan="2"><strong>Yaşam Bulguları:</strong> Ateş: ${vitals.ates || '-'}°C | SpO2: %${vitals.spo2 || '-'} | Tansiyon: ${vitals.tansiyonSystolic || '-'}/${vitals.tansiyonDiastolic || '-'} mmHg | Nabız: ${vitals.nabiz || '-'}/dk | Solunum: ${vitals.solunum || '-'}/dk | Ağrı Skoru: ${vitals.agri || '0'}/10</td>
            </tr>
        </table>

        <table>
            <thead>
                <tr>
                    <th style="width: 22%;">Hemşirelik Tanısı (NANDA)</th>
                    <th style="width: 20%;">İlişkili Faktörler & Belirtiler</th>
                    <th style="width: 24%;">Hedefler (NOC & Likert Skalası)</th>
                    <th style="width: 24%;">Girişimler (NIC & Sıklık)</th>
                    <th style="width: 10%;">Değerlendirme</th>
                </tr>
            </thead>
            <tbody>`;

    (p.carePlans || []).forEach(cp => {
        const nocText = (cp.noc || []).map(n => `• ${n}`).join('<br>');
        const nicText = (cp.nic || []).map(n => `• ${n}`).join('<br>');
        const scoreInfo = cp.scoreBefore && cp.scoreTarget ? `<br><small style="color:#0d9488;"><strong>[Puan: Önce ${cp.scoreBefore}/5 ➔ Hedef ${cp.scoreTarget}/5]</strong></small>` : '';
        const freqInfo = cp.frequency ? `<br><small style="color:#3b82f6;"><strong>[Sıklık: ${cp.frequency}]</strong></small>` : '';

        html += `
            <tr>
                <td><strong>${cp.diagnosisTitle || cp.diagnosisId}</strong></td>
                <td><strong>Etiyoloji:</strong> ${cp.etiology || '-'}<br><br><strong>Belirtiler:</strong> ${cp.symptoms || '-'}</td>
                <td>${nocText}${scoreInfo}</td>
                <td>${nicText}${freqInfo}</td>
                <td>${cp.evaluationStatus || 'Hedefe Ulaşıldı'}</td>
            </tr>`;
    });

    html += `
            </tbody>
        </table>
        <br><br>
        <table>
            <tr>
                <td style="width: 50%; border: none;"><strong>Öğrenci / İntörn Hemşire İmza:</strong><br><br>___________________________</td>
                <td style="width: 50%; border: none;"><strong>Sorumlu Öğretim Elemanı / Hemşire İmza:</strong><br><br>___________________________</td>
            </tr>
        </table>
    </body>
    </html>`;

    const blob = new Blob(['\ufeff' + html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = url;
    downloadAnchor.download = `Bakim_Plani_${info.name || 'Hasta'}.doc`;
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    URL.revokeObjectURL(url);
    if (window.showToast) window.showToast('📝 Word (.doc) belgesi indirildi!', 'success');
};

window.printCarePlan = function() {
    window.print();
};

window.exportFullSystemBackupJSON = function() {
    const backupData = {
        app: 'Hemşirelik Bakım Rehberim',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        savedPlans: window.getSavedPlans(),
        customTemplates: JSON.parse(localStorage.getItem('nursiplan_custom_templates') || '[]'),
        calcHistory: JSON.parse(localStorage.getItem('nursiplan_calc_history') || '[]')
    };

    const jsonStr = JSON.stringify(backupData, null, 2);
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(jsonStr);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `BakimRehberim_Tam_Sistem_Yedegi_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    if (window.showToast) window.showToast('📦 Tüm sistem verileri başarıyla yedeklendi!', 'success');
};

window.importFullSystemBackupJSON = function(jsonString) {
    try {
        const parsed = JSON.parse(jsonString);
        if (parsed.savedPlans && Array.isArray(parsed.savedPlans)) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed.savedPlans));
            if (parsed.customTemplates) {
                localStorage.setItem('nursiplan_custom_templates', JSON.stringify(parsed.customTemplates));
            }
            if (parsed.calcHistory) {
                localStorage.setItem('nursiplan_calc_history', JSON.stringify(parsed.calcHistory));
            }
            if (window.showToast) window.showToast('📥 Tüm sistem verileri başarıyla geri yüklendi!', 'success');
            setTimeout(() => window.location.reload(), 1000);
            return true;
        } else {
            throw new Error('Yedek dosyası geçersiz.');
        }
    } catch (e) {
        if (window.showToast) window.showToast('❌ Yedek dosyası okunamadı veya formatı uygun değil.', 'danger');
        return false;
    }
};
