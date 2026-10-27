# İTS açık sorgu incelemesi

Kontrol tarihi: 27 Ekim 2026.

Kullanıcı güncel TİTCK fiyat listesine erişiminin olmadığını bildirdi ve İlaç Takip Sistemi üzerinden tek tek sorgulamayı önerdi. Herkese açık resmî ekranlar tarayıcıdan incelendi; ilaç sorgusu başarıyla yapılmış gibi bildirilmedi.

## İlaç Sorgulama

Kaynak: https://its.gov.tr/its/ilac_sorgula

Ekranda hem ilaç barkodu (GTIN) hem de kutuya özgü sıra/seri numarası (SN) isteniyor. Elimizde yalnızca ürün barkodları var; gerçek kutu seri numarası yok. Seri numarası uydurulmadı, kutuya özgü kayıt sorgusu yapılmadı. Bu ekran yalnızca marka adı veya barkod ile toplu piyasa/fiyat doğrulaması sağlamadı.

## İlacım Nerede

Kaynak: https://its.gov.tr/its/ilacim_nerede

Ekran il, ilçe ve seçili bir ilaç listesi sunuyor. Sayfada yalnızca belirli ürünler için sorgu yapıldığı ve son güncellemenin 27.10.2026 olduğu belirtiliyor. Gözlenen seçim listesinde ilk 10 aday ürün yer almıyor. Bu durum adayların piyasada olmadığına kanıt değildir; yalnızca bu açık ekran üzerinden stok doğrulaması yapılamadığı anlamına gelir.

## Sonuç

İTS'de ürünlerin satış/fiyat doğrulaması tamamlanamadı. Resmî SKRS aktif/pasif eşleştirmesi ayrı bir kanıt olarak korunuyor. Güncel ve tarihli ikincil fiyat kaynakları yardımcı olabilir; ancak tarihli bir kayıt otomatik olarak güncel resmî fiyat veya fiziksel stok kabul edilmez. Örneğin İlacabak'ta PAROL 500 mg 30 tablet için 24 Ekim 2026 tarihli fiyat kaydı bulundu; ilk rapordaki 20 tabletlik ambalajla karıştırılmamalıdır:

https://www.ilacabak.com/parol-500-mg-30-tablet-701

Klinik reçete yayını hâlâ sıfırdır. İTS API erişimi, kullanıcı hesabı, güvenlik aşma veya gerçek olmayan seri numarası kullanma yoluna gidilmedi.
