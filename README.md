# Reçete Destek

Pratisyen ve aile hekimleri için tek dosyalık karar destek uygulaması.

**Durum: 0.1.0-preview — arayüz önizlemesi. Klinik kullanım için hazır değildir.**

Onaylanan 30 tanı listelenir. Henüz yayımlanmış klinik reçete yoktur. Güncel satış/fiyat, doz/süre/ambalaj ve pratisyen/SUT koşulları doğrulanmadan ilaç önerisi açılmaz. Bu ayrım uygulamada da görünürdür.

## Kullanım

[GitHub Pages önizlemesi](https://caliptra79.github.io/recetedestek/)

Uygulamayı güncellemek için kök dizindeki `index.html` değiştirilir. Harici bağımlılık veya derleme gerekmez. Pages kaynağı `main` dalı, `/ (root)` dizinidir. `NOTICE.md` ve `docs/` yalnızca belgelerdir; çalışma zamanında yüklenmez.

## Hazır arayüz işlevleri

- Türkçe karakter ve küçük yazım hatalarına toleranslı tanı araması, bölüm seçimi ve filtreler.
- Tanıdan geri dönüşte arama, filtre ve liste konumunu koruma.
- Hasta durumu seçimleri; ilaçlara özgü risk eşleştirmesi henüz hazırlanmadığı için bu durum açıkça belirtilir.
- Tanı bağlantısını paylaşma; yalnızca açık oturumda tutulan kişisel notlar. Reçete kopyalama düğmesi yoktur.
- Açık, koyu ve saf siyah tema; renk paleti, yazı boyutu/stili, renk körlüğü modu ve liste yoğunluğu.
- Ayrı raporlu ilaç yenileme bölümü, Hakkında, gizlilik ve telif bildirimleri.

## Klinik doğrulama

[İlk 10 aday ürünün araştırma raporu](docs/verification-group-01.md)

TİTCK 20 Ekim 2026 SKRS dosyası barkodla incelendi. Aktif kayıt, güncel satış/fiyat veya SGK uygunluğu yerine geçmez. Güncel fiyat listesi giriş gerektirdiği için tam ürün doğrulaması bitmedi. Kaynaklarda bulunan tarihli fiyatlar araştırma raporunda ayrıca gösterilir.

## Gizlilik ve lisans

Uygulama kodu veri toplamaz ve dışarı veri göndermez. Görünüm ayarları yerel depolamada, notlar ve hasta durumu açık sayfanın belleğinde tutulur. Hasta bilgisi girilmemelidir. GitHub Pages'in kendi teknik erişim kayıtları ayrı bir konudur.

Telif sahibi ve lisans türü kullanıcı tarafından belirlenecektir. Üçüncü taraf kod/font/görsel paketi kullanılmaz. PWA dosyası oluşturulmamıştır.

Yalnızca hekimler içindir. **Karar destek aracıdır, son karar hekime aittir.**
