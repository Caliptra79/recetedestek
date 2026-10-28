# 0.5.0 kontrol kaydı

28 Ekim 2026. Bunlar veri/arayüz kontrolleridir; klinik onay değildir.

- `node tests/check-release.cjs` geçti: 50 benzersiz tanı, 50 tanıda örnek, 66 seçenek, 35 ürün, en fazla üç marka. Yeni 10 tanı/16 seçeneğin kaynakları, kapsam sınırları ve 11 kullanılan ürünün aktif/normal SKRS ve EK-4/A eşleşmeleri kontrol edildi. Tam doğrulama kapısı sıfır olarak kalır.
- Tarayıcıda 50 rotanın başlığı beklenen tanıyla eşleşti; toplam 66 örnek kartı, boş rota yok. 320 pikselde yatay taşma görülmedi.
- Yeni 10 tanı: 320 piksel ve 20 piksel çok büyük yazıyla açık, koyu ve saf siyah temada 30 ayrı görünüm kontrol edildi; taşma yok.
- Primer dismenore kartında Aprol seçilip gebelik işaretlendi: iki seçeneğin de standart dozu gizlendi; marka seçimi korundu. Seçimler temizlenince standart içerik döndü.
- Yeni Ağız ve Diş bölüm filtresi 1/50 sonuç verdi; bölüm penceresi Escape ile kapandı. Kadın Sağlığı ve Ağız ve Diş başlıkları mevcut kategori düzeninde yer aldı.
- “adet sancisi” araması 1/50 sonuç verdi. Karttan geri dönünce arama metni korundu.
- Diş ağrısında naproksen markası APRANAX ile sınırlandı; APROL gösterilmez. Güneş yanığında yalnız parasetamol örneği vardır; topikal NSAİİ/steroid otomatik eklenmedi. Folikülitte antibiyotik yalnız lokal bakıma rağmen süren uygun olgu koşuluyla sunulur.
- Bölüm/patient seçimi mevcut pencerelerde; raporlu yenileme, yeni özellik veya PWA eklenmedi. Çalışma zamanı tek index.html.

Pages sonucu ve canlı sayfa kontrolü yayın tamamlandığında çalışma günlüğüne kaydedilir.
