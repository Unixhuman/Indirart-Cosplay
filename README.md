# Web Page Idea
Tema halaman ini adalah web sewa pakaian cosplay Nahida. Penggunanya adalah orang-orang yang tertarik dengan cosplay khususnya character Nahida. 
Pengalaman yang diharapkan dari pengguna saat mengakses halaman ini adalah:
1. mengetahui item yang dipakai saat cosplay character Nahida
2. mengetahui harga penyewaan pakaian
3. mengetahui denda yang dikenai jika merusak barang sewa

#dokumentasi web 

1) Pada halaman ini pengguna akan diberitahu tentang apa yang ada di dalam web tersebut
![image](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/5332187d-bc04-4ecf-ba7a-80c1ea0be633)

2) pada halaman ini pengguna akan diberitahu tentang informasi yang disediakan web seperti gambar item, deskripsi item, form pemesanan (klik button pesan)
![Screenshot 2023-11-17 090907](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/2ec19972-53a6-4314-accd-71e45c7057c8)

3) pada halaman ini pengguna diberitahu tentang pemilik dari web sewa pakaian Nahida tersebut
![image](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/3e58cc1b-c0db-42fd-85f7-3d01ac6ef7ca)

berikut adalah tampilan web saat dibuka pada perangkat seluler
![Screenshot 2023-11-17 093240](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/352c5ee3-c33f-4137-accf-2e772138c1db)

![Screenshot 2023-11-17 093257](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/311c3195-3c87-458e-a904-6292ea77ca1a)

![Screenshot 2023-11-17 093312](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/e75b0213-f96b-452c-994e-f3976883332f)

dokumentasi kodingan HTML :

CSS dan JavaScript:
- Gaya untuk dokumen tersebut terdapat dalam file CSS eksternal: css/style.css.
- Logika JavaScript berada dalam file eksternal: js/main.js.

Navigasi:
- Menu navigasi mencakup tautan ke berbagai bagian halaman (Home, Pilihan Item, Tentang Saya).
- Juga mencakup menu hamburger untuk layar yang lebih kecil.

Bagian-Bagian:
- Bagian Header (#home):
  Menampilkan hero/jumbotron dengan judul, subjudul, dan tombol panggilan aksi.
- Bagian Pilihan Item (#pilihan-item):
  Memberikan tata letak grid untuk menampilkan item.
- Bagian Tentang Saya (#tentang-saya):
  Berisi informasi tentang pembuat dengan gambar dan tautan media sosial.
- Bagian Footer:
  Termasuk pesan penutup.

Sumber Daya Eksternal:
- Ikon diambil dari perpustakaan Ikon Phosphor dan Font Awesome.
- Perpustakaan JavaScript eksternal untuk fungsionalitas ikon.

DOKUMENTASI KODINGAN CSS
1. Reset CSS
   - Mengatur margin dan padding ke nilai nol.
   - Menggunakan font 'Roboto' dan jenis sans-serif sebagai default.
   - Mengaktifkan perilaku scroll yang halus.
     
2. Wrapper Styling:
   - Membuat wrapper dengan lebar 1024px, rata tengah, dan padding.

3. Navigation Styling:
   - Menetapkan gaya untuk elemen navigasi.
   - Background berwarna hijau (#40513B), teks berwarna putih.
     
4. Menu Styling:
   - Mendesain menu navigasi dengan fleksibilitas dan tata letak.

5. Header Styling:
   - Mengatur latar belakang jumbotron dengan gambar dan efek bayangan teks.

6. Header Overlay Styling:
   - Menerapkan efek overlay pada bagian header untuk meningkatkan kontras.

7. Jumbotron Styling:
   - Mendesain jumbotron untuk menampilkan teks secara menengah.

8. Button Styling:
   - Mendesain tombol dengan efek hover dan transisi warna latar belakang.

9. Media Queries for Responsive Design:
    - Menyesuaikan tata letak dan gaya untuk ukuran layar yang lebih kecil menggunakan media queries.

10. Hamburger Menu Styling:
    - Mendesain tombol menu hamburger dengan efek hover.


DOKUMENTASI KODINGAN JS

1. Memilih Elemen DOM:
   - Menggunakan document.querySelector untuk memilih elemen-elemen DOM berdasarkan kelas.

2. Menambahkan Event Listener:
   - Menambahkan event listener untuk meng-handle klik pada menu hamburger dan menu itu sendiri.
   - Memanggil fungsi displayMenu ketika terjadi klik.

3. Fungsi displayMenu:
   - Mengecek apakah menu memiliki kelas tampil. Jika ya, menghapusnya; jika tidak, menambahkannya.
   - Mengganti tampilan ikon antara hamburger dan close.

4. Definisi Kelas Item:
     - Membuat kelas Item dengan konstruktor yang menerima parameter untuk gambar, ukuran, denda, dan waktu pemesanan.
     - Memiliki metode showItem untuk menampilkan item dalam grid HTML dengan memanipulasi innerHTML dari elemen dengan id grid-item.
    
  5. Membuat dan Menampilkan Instansi Kelas Item:
     - Membuat tiga instansi dari kelas Item dengan berbagai parameter.
     - Memanggil metode showItem untuk menampilkan item dalam grid HTML.
