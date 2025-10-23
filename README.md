# Gallery-Photo

Ringkasan singkat:

Gallery-Photo adalah aplikasi web kecil berbasis React yang menampilkan kumpulan gambar dalam tampilan dashboard. Aplikasi ini memiliki komponen untuk menampilkan kartu gambar, navbar, dan halaman detail (struktur ada di folder `src/Gallery`).

Fitur utama:

- Dashboard grid untuk menampilkan gambar (komponen: `DashboardDisplay`, `DashboardItem`).
- Komponen kartu gambar (`ImageCard`) dengan efek hover.
- Navbar sederhana (`Navbar`).
- Halaman detail untuk setiap item (file di `src/Gallery/Page`).

Struktur proyek (ringkasan):

- `index.html` — root HTML.
- `src/index.jsx` — entry React.
- `src/App.jsx` — root React component.
- `src/Gallery` — folder komponen terkait gallery dan halaman.

Menjalankan aplikasi (Windows PowerShell):

1. Pasang dependensi:

```powershell
npm install
```

2. Jalankan dev server (Vite):

```powershell
npm run dev
```

3. Buka URL yang ditampilkan (mis. http://localhost:5173) di browser.

Tips debugging singkat:

- Jika aplikasi tidak merender apa pun, periksa `index.html` untuk `id` root yang cocok dengan `src/index.jsx`.
- Lihat console browser dan terminal dev server untuk pesan error.

Catatan Git (mengatur riwayat):

- Jika Anda perlu membatalkan merge atau commit tertentu, berhati-hatilah saat menggunakan `git reset --hard` dan `git push --force`; gunakan `git revert` jika ingin cara yang lebih aman.

Lisensi & kontak:

- Penulis: Aldo Sebastian
- Project ini adalah tugas kuliah; gunakan sesuai kebutuhan dengan atribusi.
