# 0.4.0 kontrol kaydı

28 Ekim 2026. Bu kontroller arayüz/veri bütünlüğüne ilişkindir; klinik onay değildir.

- `node tests/check-release.cjs`: 40 benzersiz tanı, 40 tanıda örnek, 50 seçenek, 35 ürün; en fazla üç marka. Kaynak referansları, barkod/ambalaj alanları ve eski tam doğrulama kapısının kapalı olması kontrol edildi.
- Yeni 25 ürün: resmî 20 Ekim SKRS dosyasında aktif/normal; 2 Ekim SUT ZIP içindeki güncel EK-4/A dosyasında barkod eşleşmesi. Tam ürün/endikasyon geri ödeme uygunluğu ayrıca değerlendirilmelidir.
- Amoksisilin 20 tablet/16 tabletlik ambalaj → 2 kutu; AOM 15 tablet → 1 kutu; tek doz fosfomisin → 1 kutu; laktüloz örneği 210 ml; permetrin üst miktarı 120 ml. Krem/damla dönüşümleri için tahminî damla/ml veya gram/alan sayısı kullanılmadı.
- Tarayıcıda 40 tanı açıldı: toplam 50 örnek, boş örnek kartı yok. 320 pikselde standart ve 20 piksel çok büyük yazıda 40 rotada yatay taşma yok.
- Açık/koyu/saf siyah tema incelendi. Uzun aile hekimi koşulu, ambalaj isimleri ve yeni marka seçeneklerinde yatay taşma görülmedi.
- Kuru gözde Fullfresh seçimi sonrasında gebelik işaretlendi: standart doz gizlendi; marka korundu. Seçimler temizlenince doz geri geldi.
- Mekanik bel ağrısında Aprol seçiliyken böbrek yetmezliği işaretlendi: standart doz gizlendi; marka korundu.
- Yeni Panto/Osmolak/Üromisin/Metrin/Aprol seçenekleri seçildi; ambalaj ve miktar açıklamaları incelendi. Osmolak 250 ml seçildiğinde miktar hesabı 1 şişe gösterdi.
- Alerjik rinitte Zyrtec/Allerset; akut ürtikerde yalnız Zyrtec gösterildi. Allerset için yanlış form içeren web sayfası kaynak olarak kullanılmadı; tablet KÜB kaynağı bağlandı.
- Bölüm ve hasta durumu pencereleri dar ekranda açıldı; mevcut tek pencere düzeni korundu. Raporlu gezinmesi ve eski durum rozetleri yok. Tek index.html; harici çalışma zamanı bağımlılığı/PWA yok.

Yayın sonucu ve canlı sayfa kontrolü yayın tamamlandıktan sonra çalışma günlüğüne kaydedilir.
