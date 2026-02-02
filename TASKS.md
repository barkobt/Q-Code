# Q-Card — Görev Listesi (Tasks)

PRD'ye göre oluşturulmuş, uygulama adımları.

---

## 1. Proje Kurulumu

- [ ] **1.1** Next.js projesi oluştur (TypeScript, App Router).
- [ ] **1.2** Tailwind CSS yapılandır ve temel global stilleri ekle.
- [ ] **1.3** `qrcode.react` paketini kur.
- [ ] **1.4** Proje klasör yapısını ve temel sayfa/layout dosyalarını oluştur.

---

## 2. Veri Modeli ve State

- [ ] **2.1** Form alanları için TypeScript tipi/interface tanımla (Ad, Soyad, Unvan, Şirket, Telefon, E-posta, Web, sosyal medya URL’leri).
- [ ] **2.2** Tüm alanların opsiyonel olduğu form state’ini (örn. `useState` veya kontrollü input) kur.
- [ ] **2.3** Tek bir alan bile dolu olsa QR/vCard üretilebilecek şekilde minimum veri kuralını netleştir.

---

## 3. Form Arayüzü (Input Form)

- [ ] **3.1** **Kişisel:** Ad, Soyad, Unvan, Şirket Adı input’larını ekle (hepsi opsiyonel).
- [ ] **3.2** **İletişim:** Telefon, E-posta, Web Sitesi input’larını ekle (hepsi opsiyonel).
- [ ] **3.3** **Sosyal Medya:** LinkedIn, Twitter (X), Instagram, GitHub, Behance URL alanlarını ekle (hepsi opsiyonel).
- [ ] **3.4** Mobil öncelikli (mobile-first) layout; Tailwind ile responsive düzen.
- [ ] **3.5** Erişilebilirlik: `aria-label`, `tabindex`, klavye desteği gibi özellikleri ekle.

---

## 4. vCard Üretimi (Client-Side)

- [ ] **4.1** vCard 3.0 formatına uygun metin üreten yardımcı fonksiyon yaz (FN, ORG, TITLE, TEL, EMAIL, URL vb.).
- [ ] **4.2** Form state her değiştiğinde vCard string’ini anlık güncelle (sayfa yenilenmeden, zero-latency).
- [ ] **4.3** Boş alanları vCard çıktısına ekleme; sadece dolu alanları kullan.

---

## 5. QR Kod Gösterimi

- [ ] **5.1** `qrcode.react` ile vCard string’inden QR kod bileşeni oluştur.
- [ ] **5.2** Input değişiminde QR’ı anında güncelle (gerçek zamanlı).
- [ ] **5.3** QR’ı yüksek okunabilirlik için uygun boyut ve hata düzeltme seviyesiyle ayarla.

---

## 6. .vcf İndirme ve Paylaşım

- [ ] **6.1** Oluşturulan vCard string’ini `.vcf` dosyası olarak indirme butonu/linki ekle.
- [ ] **6.2** Dosya adını anlamlı yap (örn. `ad-soyad.vcf` veya `qcard.vcf`).

---

## 7. Son Rötuşlar ve Yayına Alma

- [ ] **7.1** Mobil görünüm ve dokunmatik kullanımı test et.
- [ ] **7.2** Zero-latency kuralını doğrula: tek karakter girişinde bile QR ve vCard anında güncelleniyor mu?
- [ ] **7.3** Hiçbir alan zorunlu değil kuralını doğrula.
- [ ] **7.4** Vercel’e deploy için gerekli config (varsa) ekle ve canlıya al.

---

*Kaynak: prd.md — Q-Card PRD v1.0*
