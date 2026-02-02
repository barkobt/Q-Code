# 📱 Q-Code: Dijital Kartvizit & QR Oluşturucu

**Q-Code**, kullanıcıların iletişim bilgilerini ve sosyal medya profillerini anında evrensel bir dijital kartvizit formatına (vCard) dönüştüren ve bu bilgileri bir QR kod üzerinden paylaşmalarını sağlayan modern bir web uygulamasıdır.

---

## 🚀 Proje Hikayesi ve "Vibe Coding"
Bu proje, geleneksel "satır satır kod yazma" yönteminden ziyade, yapay zeka araçlarını birer iş gücü olarak kullanarak ürün geliştirme felsefesi olan **"Vibe Coding"** metodolojisiyle inşa edilmiştir. 

Geliştirici, Ege Üniversitesi Matematik bölümü öğrencisidir ve bilgisayar bilimleri odaklı bir eğitim almaktadır. Aynı zamanda Bluesense firmasında AI Intern ve Yapay Zeka ve Teknoloji Akademisi'nde AI Trainee olarak görev yapmaktadır. Bu proje, **Future Talent Program** kapsamında AI araçlarının (Cursor, Perplexity vb.) orkestrasyonu ile hayata geçirilmiştir.

---

## ✨ Özellikler
* **Esnek Veri Girişi:** Hiçbir alanın doldurulması zorunlu değildir; tek bir bilgiyle bile kartvizit oluşturulabilir.
* **Geniş Sosyal Medya Desteği:** LinkedIn, Instagram, GitHub ve X (Twitter) gibi platformlar için profil linki ekleme imkanı.
* **Anlık QR Kod Üretimi:** Veri girildiği anda (Zero-Latency) QR kod gerçek zamanlı olarak güncellenir.
* **vCard (VCF) Uyumluluğu:** Oluşturulan dosyalar tüm iOS ve Android cihazlar tarafından "Contact" (Rehber Kaydı) olarak tanınır.
* **Modern UI:** Tailwind CSS ile geliştirilmiş, mobil öncelikli ve şık arayüz.

---

## 🛠️ Teknoloji Yığını (Tech Stack)
* **Framework:** Next.js (App Router)
* **Kütüphane:** React.js, TypeScript
* **Styling:** Tailwind CSS
* **QR Generation:** qrcode.react
* **Deployment:** Vercel

---

## 🧠 Kullanılan AI Ekosistemi
Proje geliştirme sürecinde aşağıdaki araçlar aktif olarak yönetilmiştir:
* **Cursor:** Yapay zeka destekli ana kod editörü.
* **Perplexity:** Teknik araştırma ve güncel dökümantasyon analizi.
* **v0.dev:** Arayüz bileşenlerinin hızlı prototiplenmesi.
* **cursor.directory:** AI Agent kurallarının yapılandırılması.

---

## 📂 Dosya Yapısı
```text
├── app/              # Next.js sayfa ve layout yapıları
├── components/       # UI bileşenleri (Form, QR Display, Icons)
├── lib/              # vCard üretim mantığı ve yardımcı fonksiyonlar
├── types/            # TypeScript tip tanımlamaları
└── public/           # Statik varlıklar
