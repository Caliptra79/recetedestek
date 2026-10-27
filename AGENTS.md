# Reçete Destek proje kuralları

- Yalnızca Caliptra79/recetedestek deposunda çalış. Eski DiagnoRx deposuna dokunma.
- Uygulama tek index.html dosyasıdır; derleme, CDN, harici yazı tipi veya veri servisi gerektirmez. GitHub Pages main dalı / kök dizinden yayımlar.
- Kullanıcı açıkça "PWA hazırla" demeden manifest veya service worker üretme.
- Kullanıcı ilk 30 tanılık listeyi onayladı ve yeni tanı/uyumlu reçete eklenmesini istedi. 0.2.0-preview sürümünde toplam 40 tanı, yeni 10 tanıda 16 kaynaklı etken madde kullanım seçeneği vardır. Tam doğrulanmış reçete sayısı sıfırdır; klinik sürüm tamamlandı deme. Etken madde bilgileri ticari reçete doğrulamasından ayrı tutulur; ayrıntı docs/expansion-group-04.md içindedir.
- Marka, doz, sıklık, süre, ambalaj, kutu sayısı ve pratisyen/SUT koşullarını hafızadan yazma; kaynakla doğrula. Aktif SKRS kaydı; fiyat, fiziksel stok veya SGK uygunluğu değildir.
- Eksik doğrulamalı reçeteyi yayın kapısından geçirme; eksik alanlara başarılı varsayımı uygulama. Aday ürünler docs/verification-group-01.json içindedir ve reçete önerileri değildir.
- Doğrulamaları 10'lu gruplarla raporla; kontrol tarihi ve kaynak tarihini ayır. Güncel fiyatı veya aktif satışı teyit edilemeyen markayı reçeteye ekleme. ✓ yalnızca ilgili ürünün tamamlanmış doğrulamasında kullanılabilir.
- Raporlu kronik tedavi yenilemeleri ayrı bölümdedir. Uzman/rapor gerektiren ürünleri normal hazır reçetelere ekleme; şüpheli ürünleri kullanıcıya sor.
- Reçete kopyalama düğmesi ekleme. Paylaşılan URL yalnızca tanı kimliğini içersin; hasta durumu ve notlar eklenmesin. Notlar sayfa belleğinde, yalnızca görünüm tercihleri localStorage içinde tutulur.
- Arama, filtreler ve liste konumu geri dönüşte korunmalı. Mobilde açık/koyu/saf siyah tema ve büyük yazı dahil yatay taşmayı kontrol et. Türkçe karakter ve başlık kurallarını koru.
- Telif sahibi ve lisans türünü kullanıcı belirler; henüz belirlenmedi. Yeni görsel/ek özellik önerileri kullanıcı seçmeden uygulanmaz.
- Her turda eklenenler, çıkarılanlar, doğrulanamayanlar ve kalanları dürüstçe raporla.
