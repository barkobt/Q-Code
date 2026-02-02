# Q-Card Önizleme

Sayfa açılmıyorsa, "This page could not be found" veya **"Cannot find module './819.js'"** gibi bir hata alıyorsanız önce önbelleği temizleyin:

```bash
cd /Users/barko/Q-Code
npm run clean
```

Sonra aşağıdaki yöntemlerden birini uygulayın.

---

## Yöntem 1: Statik önizleme (önerilen)

Terminali **Q-Code klasöründe** açın ve:

```bash
cd /Users/barko/Q-Code
npm run build
npm run preview
```

Ardından tarayıcıda **şu adresi** açın (kopyalayıp adres çubuğuna yapıştırın):

```
http://127.0.0.1:3001
```

- **Chrome, Safari veya Firefox** kullanın (Cursor içindeki önizleme değil).
- Adres tam olarak `http://127.0.0.1:3001` olmalı.

---

## Yöntem 2: Geliştirme sunucusu

Önce 3000 portunu kullanan süreci durdurun:

```bash
lsof -i :3000
```

Çıkan listede **PID** numarasını bulun, sonra:

```bash
kill <PID>
```

Ardından:

```bash
cd /Users/barko/Q-Code
npm run dev
```

Tarayıcıda açın: **http://127.0.0.1:3000**

---

## Önemli

- Komutları **mutlaka** `/Users/barko/Q-Code` klasöründe çalıştırın.
- Cursor’da terminal açtığınızda önce `cd /Users/barko/Q-Code` yazıp Enter’a basın.
- Önizlemeyi **sistem tarayıcınızda** (Chrome/Safari/Firefox) açın.
