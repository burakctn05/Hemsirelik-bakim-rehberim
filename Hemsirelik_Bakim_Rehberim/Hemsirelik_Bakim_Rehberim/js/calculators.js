/**
 * Hemşirelik Bakım Rehberim - Hemşirelik Klinik Ölçekler ve Doz Hesaplayıcıları (Standard Global Script)
 */

window.calculateGCS = function(eye, verbal, motor) {
    const total = Number(eye) + Number(verbal) + Number(motor);
    let interpretation = '';
    let alertClass = '';

    if (total === 15) {
        interpretation = 'Normal Bilinç Düzeyi (Oryante ve Koopere)';
        alertClass = 'alert-success';
    } else if (total >= 13) {
        interpretation = 'Hafif Kafa Travması / Hafif Derecede Bilinç Bulanıklığı';
        alertClass = 'alert-info';
    } else if (total >= 9) {
        interpretation = 'Orta Derecede Kafa Travması / Letarjik - Stupor';
        alertClass = 'alert-warning';
    } else {
        interpretation = 'Şiddetli Kafa Travması / Koma Durumu (GKS ≤ 8 Yoğun Bakım Endikasyonu!)';
        alertClass = 'alert-danger';
    }

    return { total, interpretation, alertClass };
};

window.calculateBraden = function(sensory, moisture, activity, mobility, nutrition, friction) {
    const total = Number(sensory) + Number(moisture) + Number(activity) + Number(mobility) + Number(nutrition) + Number(friction);
    let riskLevel = '';
    let alertClass = '';
    let recommendations = [];

    if (total <= 12) {
        riskLevel = 'YÜKSEK RİSK';
        alertClass = 'alert-danger';
        recommendations = [
            'Havalı yatak derhal kurulmalıdır.',
            '2 saatte bir sık pozisyon değişimi yapılmalıdır.',
            'Kemik çıkıntıları silikon pedlerle desteklenmelidir.',
            'Cilt bariyer kremleri uygulanmalıdır.'
        ];
    } else if (total <= 14) {
        riskLevel = 'ORTA RİSK';
        alertClass = 'alert-warning';
        recommendations = [
            'Pozisyon değişimi periyodu aksatılmamalıdır.',
            'Cilt temizliği ve nem dengesi günlük takip edilmelidir.'
        ];
    } else if (total <= 18) {
        riskLevel = 'DÜŞÜK RİSK';
        alertClass = 'alert-info';
        recommendations = [
            'Hastanın hareketliliği teşvik edilmelidir.'
        ];
    } else {
        riskLevel = 'RİSK YOK / ÇOK DÜŞÜK RİSK';
        alertClass = 'alert-success';
        recommendations = ['Rutin bakıma devam edilir.'];
    }

    return { total, riskLevel, alertClass, recommendations };
};

window.calculateItaki = function(selectedMajorCount, selectedMinorCount) {
    const total = (selectedMajorCount * 5) + (selectedMinorCount * 1);
    const isHighRisk = total >= 5;

    return {
        total,
        isHighRisk,
        riskLabel: isHighRisk ? 'YÜKSEK DÜŞME RİSKİ' : 'DÜŞÜK DÜŞME RİSKİ',
        alertClass: isHighRisk ? 'alert-danger' : 'alert-success',
        actions: isHighRisk ? [
            'Yatak başına Kırmızı Yonca etiketi asılmalıdır.',
            'Yatak kenarlıkları her zaman çift taraflı kaldırılmalıdır.',
            'Yatak en düşük seviyede tutulmalı ve frenleri kilitlenmelidir.'
        ] : [
            'Standart güvenlik önlemleri uygulanır.'
        ]
    };
};

window.calculateDripRate = function(volumeMl, hours, dropFactor = 20) {
    if (!volumeMl || !hours || hours <= 0 || volumeMl <= 0) return null;
    const totalMinutes = hours * 60;
    const dripRatePerMin = Math.round((volumeMl * dropFactor) / totalMinutes);
    const mlPerHour = (volumeMl / hours).toFixed(1);
    return { dripRatePerMin, mlPerHour, totalMinutes };
};

window.calculateMedDose = function(desiredDose, doseOnHand, volumeOnHand) {
    if (!desiredDose || !doseOnHand || !volumeOnHand || doseOnHand <= 0) return null;
    const resultVolume = (desiredDose / doseOnHand) * volumeOnHand;
    return resultVolume.toFixed(2);
};

window.calculateBMI = function(weightKg, heightCm) {
    if (!weightKg || !heightCm || heightCm <= 0) return null;
    const heightM = heightCm / 100;
    const bmi = (weightKg / (heightM * heightM)).toFixed(1);

    let status = '';
    let alertClass = '';

    if (bmi < 18.5) { status = 'Zayıf'; alertClass = 'alert-warning'; }
    else if (bmi <= 24.9) { status = 'Normal Kilo'; alertClass = 'alert-success'; }
    else if (bmi <= 29.9) { status = 'Fazla Kilolu'; alertClass = 'alert-info'; }
    else { status = 'Obezite'; alertClass = 'alert-danger'; }

    return { bmi, status, alertClass };
};

/**
 * 7. Ortalama Arter Basıncı (MAP - Mean Arterial Pressure)
 * Formül: MAP = Diastolik + ( (Sistolik - Diastolik) / 3 ) = (Sistolik + 2*Diastolik) / 3
 */
window.calculateMAP = function(systolic, diastolic) {
    const sys = parseFloat(systolic);
    const dia = parseFloat(diastolic);
    if (isNaN(sys) || isNaN(dia) || sys <= 0 || dia <= 0) return null;

    const map = Math.round((sys + (2 * dia)) / 3);
    let status = '';
    let alertClass = '';

    if (map < 65) {
        status = 'KRİTİK HİPOPERFÜZYON (MAP < 65 mmHg) - Hayati organ perfüzyonu risk altında!';
        alertClass = 'alert-danger';
    } else if (map <= 100) {
        status = 'Normal Ortalama Arter Basıncı (65 - 100 mmHg)';
        alertClass = 'alert-success';
    } else if (map <= 110) {
        status = 'Hafif Yüksek Ortalama Arter Basıncı (100 - 110 mmHg)';
        alertClass = 'alert-warning';
    } else {
        status = 'YÜKSEK ARTER BASINCI (MAP > 110 mmHg) - Hipertansif kriz riski!';
        alertClass = 'alert-danger';
    }

    return { map, status, alertClass };
};

/**
 * 8. Aldığı - Çıkardığı Sıvı Dengesi (Fluid Balance Calculator)
 */
window.calculateFluidBalance = function(intake, output) {
    const totalIntake = (Number(intake.oral || 0) + Number(intake.iv || 0) + Number(intake.blood || 0) + Number(intake.otherIntake || 0));
    const totalOutput = (Number(output.urine || 0) + Number(output.drain || 0) + Number(output.vomit || 0) + Number(output.stool || 0) + Number(output.otherOutput || 0));

    const balance = totalIntake - totalOutput;
    let label = '';
    let alertClass = '';
    let advice = '';

    if (balance > 500) {
        label = `POZİTİF BİLANÇO (+${balance} mL Sıvı Tutulumu)`;
        alertClass = 'balance-positive';
        advice = 'Hastada ödem ve sıvı yüklenmesi (Hipervolemi) riski var. Akciğer sesleri ve bacak ödemi takip edilmeli.';
    } else if (balance < -500) {
        label = `NEGATİF BİLANÇO (${balance} mL Sıvı Açığı)`;
        alertClass = 'balance-negative';
        advice = 'Hastada sıvı eksikliği (Dehidratasyon/Hipovolemi) riski var. Mukoza kuruluğu, turgor ve tansiyon takip edilmeli.';
    } else {
        label = `DENGELİ BİLANÇO (${balance > 0 ? '+' : ''}${balance} mL)`;
        alertClass = 'balance-neutral';
        advice = 'Sıvı dengesi beklenen sınırlar içerisinde.';
    }

    return { totalIntake, totalOutput, balance, label, alertClass, advice };
};

