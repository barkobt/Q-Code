# 📄 PRD: Q-Card (Dijital Kartvizit Oluşturucu)

**Versiyon:** 1.0  
**Durum:** Taslak  
**Rol:** Full Stack Developer  

---

## 1. Proje Özeti (Ne Yapıyoruz?)
Kullanıcıların kişisel bilgilerini ve sosyal medya hesaplarını girerek, anında telefon rehberine uyumlu bir **vCard (.vcf)** dosyası oluşturmalarını ve bu dosyayı bir **QR Kod** üzerinden hızlıca paylaşmalarını sağlayan web tabanlı bir mikro uygulamadır.

---

## 2. Hedef Kitle ve Amaç
* **Kullanıcı:** Hızlıca iletişim bilgilerini paylaşmak isteyen profesyoneller, etkinlik katılımcıları, öğrenciler ve dijitalleşen networking meraklıları.
* **Amaç:** Fiziksel kartvizit taşıma zorunluluğunu ve maliyetini ortadan kaldırmak, iletişim bilgilerinin rehbere hatasız ve hızlıca aktarılmasını sağlamak.

---

## 3. Temel Kurallar (Non-Negotiables)
Projenin başarısı için taviz verilmeyecek "kırmızı çizgiler":
1.  **Zorunluluk Yok:** Kullanıcı hiçbir alanı doldurmak zorunda bırakılmamalıdır. Tek bir harf bile girilse QR kod üretilebilmelidir.
2.  **Hız (Zero-Latency):** Sayfa yenilenmeden, inputa (giriş alanına) veri girildiği anda QR kod gerçek zamanlı olarak güncellenmelidir.
3.  **Mobil First:** Uygulama tasarımı öncelikli olarak telefon ekranları için optimize edilmelidir.

---

## 4. Uygulama Özellikleri (Fonksiyonel Gereksinimler)

### A. Veri Giriş Alanları (Input Form)
Kullanıcıdan alınacak esnek alanlar (Hepsi opsiyonel):
* **Kişisel:** Ad, Soyad, Unvan, Şirket Adı.
* **İletişim:** Telefon Numarası, E-posta, Web Sitesi.
* **Sosyal Medya:** LinkedIn, Twitter (X), Instagram, GitHub, Behance vb. (URL formatında).

### B. Dinamik vCard Üretimi
* Girilen veriler tarayıcı tarafında (Client-side) **vCard 3.0** standartlarına göre anlık olarak bir metin dizisine dönüştürülür.

### C. QR Kod Gösterimi ve Paylaşım
* vCard metni, yüksek okuma kapasitesine sahip bir QR koda dönüştürülür.
* Kullanıcıya QR kodu ekranda canlı gösterme ve `.vcf` dosyasını indirme seçeneği sunulur.

---

## 5. Teknik Mimari Önerisi

| Katman | Teknoloji | Neden? |
| :--- | :--- | :--- |
| **Frontend** | **React.js / Next.js** | Dinamik state yönetimiyle "Zero-Latency" deneyimi sunmak için. |
| **Styling** | **Tailwind CSS** | Mobil uyumlu, modern ve hızlı bir arayüz (UI) inşa etmek için. |
| **QR Library** | **qrcode.react** | VCF verisini saniyeler içinde QR görsele dönüştürmek için. |
| **Deployment** | **Vercel** | Tek tıkla canlıya almak ve global performans sağlamak için. |

---

## 6. Teknik Detay (vCard Şablonu)
Uygulamanın arka planda her girdi sonrası güncelleyeceği standart yapı:

```text
BEGIN:VCARD
VERSION:3.0
FN:Kullanıcı Adı Soyadı
ORG:Şirket Adı
TITLE:Unvan
TEL;TYPE=CELL:05550000000
EMAIL:ornek@mail.com
URL:[https://linkedin.com/in/kullanici](https://linkedin.com/in/kullanici)
END:VCARD
