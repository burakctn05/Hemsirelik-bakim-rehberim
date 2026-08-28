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

/**
 * 9. Saatlik İdrar Çıkışı ve Oligüri Kontrolü (mL/kg/saat)
 */
window.calculateUrineOutput = function(urineMl, weightKg, hours = 24) {
    const ml = parseFloat(urineMl);
    const kg = parseFloat(weightKg);
    const hrs = parseFloat(hours);

    if (isNaN(ml) || isNaN(kg) || isNaN(hrs) || kg <= 0 || hrs <= 0) return null;

    const mlPerKgPerHour = (ml / kg / hrs).toFixed(2);
    const rate = parseFloat(mlPerKgPerHour);

    let status = '';
    let alertClass = '';
    let recommendations = [];

    if (rate < 0.5) {
        status = `OLİGÜRİ / AKUT BÖBREK HASARI RİSKİ (${rate} mL/kg/saat) - Kritik Seviye (< 0.5 mL/kg/h)!`;
        alertClass = 'alert-danger';
        recommendations = [
            'Derhal sorumlu hekime haber verilmelidir.',
            'Sıvı kısıtlaması veya IV hidrasyon istemi kontrol edilmelidir.',
            'Böbrek fonksiyon testleri (Üre, Kreatinin) ve potasyum izlenmelidir.',
            'Sonda tıkanıklığı / kıvrılması olup olmadığı kontrol edilmelidir.'
        ];
    } else if (rate > 3.0) {
        status = `POLİÜRİ / YÜKSEK İDRAR ÇIKIŞI (${rate} mL/kg/saat) - (> 3.0 mL/kg/h)`;
        alertClass = 'alert-warning';
        recommendations = [
            'Diüretik tedavisi veya sıvı yüklenmesi sorgulanmalıdır.',
            'Kan şekeri (diyabetik ketoasidoz) ve elektrolitler takip edilmelidir.'
        ];
    } else {
        status = `NORMAL İDRAR ÇIKIŞ HIZI (${rate} mL/kg/saat) - (Yeterli Böbrek Perfüzyonu)`;
        alertClass = 'alert-success';
        recommendations = ['Standart sıvı dengesi takibine devam edilir.'];
    }

    return { rate: mlPerKgPerHour, status, alertClass, recommendations };
};

/**
 * 10. Norton Bası Yarası Risk Ölçeği (5 - 20 Puan)
 */
window.calculateNorton = function(physical, mental, activity, mobility, incontinence) {
    const total = Number(physical) + Number(mental) + Number(activity) + Number(mobility) + Number(incontinence);
    let riskLevel = '';
    let alertClass = '';
    let recommendations = [];

    if (total <= 12) {
        riskLevel = 'ÇOK YÜKSEK BASI YARASI RİSKİ (≤ 12 Puan)';
        alertClass = 'alert-danger';
        recommendations = [
            'Havalı yatak kurulumu zorunludur.',
            '2 saatte bir pozisyon değiştirilmeli, pozisyon skalası tutulmalıdır.',
            'Cilt temiz ve kuru tutulmalı, nem koruyucu krem sürülmelidir.',
            'Beslenme desteği ve protein takviyesi verilmelidir.'
        ];
    } else if (total <= 14) {
        riskLevel = 'YÜKSEK BASI YARASI RİSKİ (13 - 14 Puan)';
        alertClass = 'alert-warning';
        recommendations = [
            'Düzenli pozisyon değişimi aksatılmamalıdır.',
            'Kemik çıkıntıları silikon pedlerle korunmalıdır.'
        ];
    } else {
        riskLevel = 'DÜŞÜK RİSK / RİSK YOK (> 14 Puan)';
        alertClass = 'alert-success';
        recommendations = ['Rutin hijyen ve mobilizasyon bakımı devam ettirilir.'];
    }

    return { total, riskLevel, alertClass, recommendations };
};

/**
 * 11. FLACC Pediatrik & Sözel Olmayan Ağrı Skalası (0 - 10 Puan)
 */
window.calculateFLACC = function(face, legs, activity, cry, consolability) {
    const total = Number(face) + Number(legs) + Number(activity) + Number(cry) + Number(consolability);
    let interpretation = '';
    let alertClass = '';

    if (total === 0) {
        interpretation = 'AĞRI YOK / RAHAT (0 Puan)';
        alertClass = 'alert-success';
    } else if (total <= 3) {
        interpretation = 'HAFİF DERECEDE RAHATSIZLIK / HAFİF AĞRI (1 - 3 Puan)';
        alertClass = 'alert-info';
    } else if (total <= 6) {
        interpretation = 'ORTA DERECEDE AĞRI (4 - 6 Puan) - Analjezik İhtiyacı Sorgulanmalı';
        alertClass = 'alert-warning';
    } else {
        interpretation = 'ŞİDDETLİ AĞRI / RAHATSIZLIK (7 - 10 Puan) - Derhal Müdahale Gerekli!';
        alertClass = 'alert-danger';
    }

    return { total, interpretation, alertClass };
};

/**
 * 12. Yanık Yüzdesi & Parkland IV Sıvı Formülü
 * Formül: Parkland = 4 mL × Vücut Ağırlığı (kg) × Yanık Yüzdesi (% TBSA)
 */
window.calculateParkland = function(weightKg, burnPercentage) {
    const kg = parseFloat(weightKg);
    const burn = parseFloat(burnPercentage);

    if (isNaN(kg) || isNaN(burn) || kg <= 0 || burn <= 0 || burn > 100) return null;

    const total24hMl = Math.round(4 * kg * burn);
    const first8hMl = Math.round(total24hMl / 2);
    const next16hMl = Math.round(total24hMl / 2);
    const first8hDripRate = Math.round(first8hMl / 8);
    const next16hDripRate = Math.round(next16hMl / 16);

    return {
        total24hMl,
        first8hMl,
        next16hMl,
        first8hDripRate,
        next16hDripRate,
        advice: `İlk 8 saatte ${first8hMl} mL Ringer Laktat (${first8hDripRate} mL/saat), sonraki 16 saatte ${next16hMl} mL Ringer Laktat (${next16hDripRate} mL/saat) verilmelidir.`
    };
};

/**
 * 13. Pediatrik Boy & Kilo Persentil Hesaplayıcısı (WHO & Neyzi Standartları)
 * 0 - 18 Yaş (0 - 216 Ay) Çocuk Sağlığı ve Gelişimi Persentil Eğrileri
 */
window.calculatePediatricPercentile = function(ageYears, ageMonths, gender, weightKg, heightCm) {
    const yrs = parseFloat(ageYears || 0);
    const mths = parseFloat(ageMonths || 0);
    const totalMonths = (yrs * 12) + mths;

    const w = parseFloat(weightKg);
    const h = parseFloat(heightCm);
    const isMale = (gender === 'Erkek');

    if (isNaN(totalMonths) || totalMonths < 0 || totalMonths > 216) return null;
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return null;

    const ageYr = totalMonths / 12;

    let medianW = 0, sdW = 0, medianH = 0, sdH = 0;

    if (isMale) {
        // Boys Weight
        if (ageYr <= 1) { medianW = 3.4 + (ageYr * 6.2); sdW = 1.1; }
        else if (ageYr <= 5) { medianW = 9.6 + ((ageYr - 1) * 2.2); sdW = 1.8; }
        else if (ageYr <= 12) { medianW = 18.3 + ((ageYr - 5) * 3.1); sdW = 3.8; }
        else { medianW = 39.8 + ((ageYr - 12) * 4.85); sdW = 6.5; }

        // Boys Height
        if (ageYr <= 1) { medianH = 50 + (ageYr * 25); sdH = 3.2; }
        else if (ageYr <= 5) { medianH = 75 + ((ageYr - 1) * 8.75); sdH = 4.5; }
        else if (ageYr <= 12) { medianH = 110 + ((ageYr - 5) * 5.7); sdH = 6.0; }
        else { medianH = 150 + ((ageYr - 12) * 4.0); sdH = 7.5; }
    } else {
        // Girls Weight
        if (ageYr <= 1) { medianW = 3.2 + (ageYr * 5.7); sdW = 1.0; }
        else if (ageYr <= 5) { medianW = 8.9 + ((ageYr - 1) * 2.3); sdW = 1.7; }
        else if (ageYr <= 12) { medianW = 18.2 + ((ageYr - 5) * 3.3); sdW = 4.0; }
        else { medianW = 41.5 + ((ageYr - 12) * 2.7); sdW = 5.8; }

        // Girls Height
        if (ageYr <= 1) { medianH = 49 + (ageYr * 25); sdH = 3.0; }
        else if (ageYr <= 5) { medianH = 74 + ((ageYr - 1) * 9.0); sdH = 4.2; }
        else if (ageYr <= 12) { medianH = 110 + ((ageYr - 5) * 5.7); sdH = 6.2; }
        else { medianH = 150 + ((ageYr - 12) * 3.0); sdH = 6.8; }
    }

    const zW = (w - medianW) / sdW;
    const zH = (h - medianH) / sdH;

    const getPercentileDetails = (z, valType) => {
        let pLabel = '';
        let status = '';
        let alertClass = '';
        let percentage = 50;

        if (z < -1.88) {
            pLabel = '< %3 (3. Persentil Altı)';
            status = valType === 'kilo' ? 'Düşük Kilo / Malnütrisyon Riski' : 'Bodurluk / Büyüme Geriliği Riski';
            alertClass = 'alert-danger';
            percentage = 2;
        } else if (z <= -1.04) {
            pLabel = '%3 - %15 Arası (15. Persentil)';
            status = valType === 'kilo' ? 'Zayıf / Sınırda Düşük Kilo' : 'Kısa Boylu / Sınırda Düşük';
            alertClass = 'alert-warning';
            percentage = 15;
        } else if (z <= 1.04) {
            pLabel = '%15 - %85 Arası (50. Persentil - İdeal)';
            status = 'Normal / İdeal Gelişim Seviyesi';
            alertClass = 'alert-success';
            percentage = 50;
        } else if (z <= 1.88) {
            pLabel = '%85 - %97 Arası (85. Persentil)';
            status = valType === 'kilo' ? 'Fazla Kilolu / İri Bebek' : 'Uzun Boylu';
            alertClass = 'alert-info';
            percentage = 85;
        } else {
            pLabel = '> %97 (97. Persentil Üstü)';
            status = valType === 'kilo' ? 'Obezite / Aşırı Kilo Riski' : 'Çok Uzun Boylu (Gigantizm/Gelişim İlerlemesi)';
            alertClass = 'alert-danger';
            percentage = 98;
        }

        return { pLabel, status, alertClass, percentage, zScore: z.toFixed(2) };
    };

    return {
        totalMonths,
        genderLabel: isMale ? 'Erkek Çocuk' : 'Kız Çocuk',
        weight: w,
        height: h,
        weightPercentile: getPercentileDetails(zW, 'kilo'),
        heightPercentile: getPercentileDetails(zH, 'boy')
    };
};



