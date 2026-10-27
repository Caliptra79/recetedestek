# Reçete Destek proje kuralları

- Yalnızca Caliptra79/recetedestek deposunda çalış. Eski DiagnoRx deposuna dokunma.
- Uygulama tek index.html dosyasıdır; derleme, CDN, harici yazı tipi veya veri servisi gerektirmez. GitHub Pages main dalı / kök dizinden yayımlar.
- Kullanıcı açıkça "PWA hazırla" demeden manifest veya service worker üretme.
- Kullanıcı ilk 30 tanıyı ve sonra yeni tanılar/örnek reçeteler hazırlanmasını onayladı. 0.3.0: 40 tanı, 20 tanıda 30 örnek seçenek, 10 ticari ürün. Örnek reçete gösterimini tam klinik/ticari doğrulama diye sunma; kaynak, tarihler ve kalan 20 tanı docs/sample-recipes-0.3.0.md ve .json içindedir.
- Marka, doz, sıklık, süre, ambalaj, kutu sayısı ve pratisyen/SUT koşullarını hafızadan yazma; kaynakla doğrula. Aktif SKRS kaydı; fiyat, fiziksel stok veya SGK uygunluğu değildir.
- Son talimat: Kullanıcı hekim incelemesini daha sonra yaptıracağını belirterek piyasa adlarıyla ÖRNEK reçetelerin görünmesini istedi. Bu örnekler ayrı CLINICAL_PLANS/BRANDS verisindedir; eski tam doğrulama kapısı başarılı sayılmadı. Ticari ürünler kaynak, barkod, SKRS ve tarihli fiyat kaydıyla takip edilir; eksik resmî fiyat/SGK kontrolüne ✓ verme. Tarihsel verification-group-01 raporundaki adaylarla bu sürümdeki örnek gösterimini karıştırma.
- Doğrulamaları 10'lu gruplarla raporla; kontrol tarihi ve kaynak tarihini ayır. Güncel fiyatı veya aktif satışı teyit edilemeyen markayı reçeteye ekleme. ✓ yalnızca ilgili ürünün tamamlanmış doğrulamasında kullanılabilir.
- Kullanıcı raporlu bölümünü tamamen kaldırdı; uygulama acil taburculuk örnekleri içindir. Raporlu kronik yenileme bölümünü geri ekleme. Uzman/rapor gerektiren ürünleri normal örneklere ekleme; şüpheli ürünleri kullanıcıya sor.
- Kullanıcı geliştirme önizlemesi/doktor onayı bekleniyor ve tanı durum rozetlerinin kaldırılmasını istedi. Bu etiketleri geri ekleme. Hakkında'da “Karar destek aracıdır, son karar hekime aittir.” ve olgusal kontrol kapsamı bulunur. İlaçlara özgü hasta uyarılarını kaldırma.
- Bölüm seçimi ve hasta durumu ayrı açılır pencerelerdedir. Marka sayısı etken madde başına en fazla üçtür; başka form/gücü aynı seçenek gibi sunma.
- Reçete kopyalama düğmesi ekleme. Paylaşılan URL yalnızca tanı kimliğini içersin; hasta durumu ve notlar eklenmesin. Notlar sayfa belleğinde, yalnızca görünüm tercihleri localStorage içinde tutulur.
- Arama, filtreler ve liste konumu geri dönüşte korunmalı. Mobilde açık/koyu/saf siyah tema ve büyük yazı dahil yatay taşmayı kontrol et. Türkçe karakter ve başlık kurallarını koru.
- Telif sahibi ve lisans türünü kullanıcı belirler; henüz belirlenmedi. Yeni görsel/ek özellik önerileri kullanıcı seçmeden uygulanmaz.
- Her turda eklenenler, çıkarılanlar, doğrulanamayanlar ve kalanları dürüstçe raporla.
