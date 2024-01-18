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

4) pada halaman ini pengguna akan disuruh melakukan pengisian form pemesanan pakaian
![image](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/f6262a43-4e43-46f0-8e2e-efc64035eb4f)

berikut adalah tampilan web saat dibuka pada perangkat seluler
![Screenshot 2023-11-17 093240](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/352c5ee3-c33f-4137-accf-2e772138c1db)

![Screenshot 2023-11-17 093257](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/311c3195-3c87-458e-a904-6292ea77ca1a)

![Screenshot 2023-11-17 093312](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/e75b0213-f96b-452c-994e-f3976883332f)


DOKUMENTASI KODINGAN HTML

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
   ![Screenshot 2023-11-17 211810](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/72ad4adc-f6a1-4e3c-9310-bd4cdef44789)
   - Mengatur margin dan padding ke nilai nol.
   - Menggunakan font 'Roboto' dan jenis sans-serif sebagai default.
   - Mengaktifkan perilaku scroll yang halus.
     
3. Wrapper Styling:
   ![Screenshot 2023-11-17 211825](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/7e4687cd-db3b-4270-86fb-056eaf35c3f2)
   - Membuat wrapper dengan lebar 1024px, rata tengah, dan padding.

5. Navigation Styling:
   ![Screenshot 2023-11-17 211951](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/90c7ed16-37e0-4abb-bb1d-331dd0687bf6)
   - Menetapkan gaya untuk elemen navigasi.
   - Background berwarna hijau (#40513B), teks berwarna putih.
     
7. Menu Styling:
   ![Screenshot 2023-11-17 212023](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/3016a10e-ed48-4353-8a83-639cfad63a58)
   - Mendesain menu navigasi dengan fleksibilitas dan tata letak.

9. Header Styling:
    ![Screenshot 2023-11-17 212241](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/0637cdd8-9aa3-440a-bd36-ef98a3a3e42d)
   - Mengatur latar belakang jumbotron dengan gambar dan efek bayangan teks.

11. Header Overlay Styling:
    ![Screenshot 2023-11-17 212256](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/a0d27f20-983f-4e40-a7c7-712918474579)

   - Menerapkan efek overlay pada bagian header untuk meningkatkan kontras.

11. Jumbotron Styling:
    ![Screenshot 2023-11-17 212310](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/2bd292b1-b55a-4dc5-8326-be8f3fdf7db4)

   - Mendesain jumbotron untuk menampilkan teks secara menengah.

11. Button Styling:
    ![Screenshot 2023-11-17 212457](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/87a4c67e-c426-4dec-b975-8d0210ea74f4)

   - Mendesain tombol dengan efek hover dan transisi warna latar belakang.

11. Media Queries for Responsive Design:
      ![Screenshot 2023-11-17 212634](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/48abbf7d-645a-4aff-875f-7b282f4d6cb2)
      ![Screenshot 2023-11-17 212648](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/ac8834f3-84c7-4c6d-ae92-e13516efc5c3)
      ![Screenshot 2023-11-17 212700](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/6b823d7f-85ec-4a3b-bb81-061b308683a8)
    - Menyesuaikan tata letak dan gaya untuk ukuran layar yang lebih kecil menggunakan media queries.

13. Hamburger Menu Styling:
    ![Screenshot 2023-11-17 212913](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/a8ed64d9-b85d-4508-8117-4718f814f341)
    - Mendesain tombol menu hamburger dengan efek hover.




DOKUMENTASI KODINGAN JS

1. Memilih Elemen DOM:
   ![Screenshot 2023-11-17 213012](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/5609765c-5c90-4715-b740-bf710b47ce3f)
   - Menggunakan document.querySelector untuk memilih elemen-elemen DOM berdasarkan kelas.

3. Menambahkan Event Listener:
   ![Screenshot 2023-11-17 213022](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/c8024c40-15f4-4d1b-906f-4cf2a68e9db5)
   - Menambahkan event listener untuk meng-handle klik pada menu hamburger dan menu itu sendiri.
   - Memanggil fungsi displayMenu ketika terjadi klik.

5. Fungsi displayMenu:
   ![Screenshot 2023-11-17 213036](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/e881cda8-9584-42a2-9c97-ce652751acff)
   - Mengecek apakah menu memiliki kelas tampil. Jika ya, menghapusnya; jika tidak, menambahkannya.
   - Mengganti tampilan ikon antara hamburger dan close.

7. Definisi Kelas Item:
   ![Screenshot 2023-11-17 213100](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/99d3b0de-8835-4746-8deb-343feb0e2cfe)
     - Membuat kelas Item dengan konstruktor yang menerima parameter untuk gambar, ukuran, denda, dan waktu pemesanan.
     - Memiliki metode showItem untuk menampilkan item dalam grid HTML dengan memanipulasi innerHTML dari elemen dengan id grid-item.
    
  9. Membuat dan Menampilkan Instansi Kelas Item:
      ![Screenshot 2023-11-17 213123](https://github.com/Unixhuman/UTS-Pemograman-Web/assets/146809846/d4f447db-6a68-44ca-860d-81b9f1ba8e6c)
     - Membuat tiga instansi dari kelas Item dengan berbagai parameter.
     - Memanggil metode showItem untuk menampilkan item dalam grid HTML.

Penjelasan mengenai Desain Database :

tb_barang menyimpan data tentang barang yang disewa, seperti ukuran barang, jenis barang, harga barang, dan stok barang.
tb_pelanggan menyimpan data tentang pelanggan, seperti nama pelanggan, alamat pelanggan, nomor telepon pelanggan, dan email pelanggan.
tb_transaksi menyimpan data tentang transaksi penyewaan, seperti tanggal sewa, tanggal kembali, jumlah hari, biaya sewa, dan status transaksi.
Pada gambar tersebut, hubungan antara ketiga tabel tersebut ditunjukkan dengan panah. Panah menunjukkan hubungan one-to-many.

Berikut adalah penjelasan singkat tentang masing-masing tabel:
1. tb_barang :
   - id_barang : Primary key untuk mengidentifikasi secara unik setiap barang.
   - jenis_barang : Jenis barang, seperti pakaian nahida, wig nahida, aksesoris nahida.
   - harga_barang : Harga barang.
   - ukuran_barang : Ukuran barang.
   - stok_barang : Stok barang yang tersedia.

2. tb_pelanggan
   - id_pelanggan : Primary key untuk mengidentifikasi secara unik setiap pelanggan.
   - nama_pelanggan : Nama pelanggan.
   - alamat : Alamat pelanggan.
   - nomor_telepon : Nomor telepon pelanggan.
   - email : Email pelanggan.
     
3. tb_transaksi
   - id_transaksi : Primary key untuk mengidentifikasi secara unik setiap transaksi penyewaan.
   - id_pelanggan : Foreign key yang merujuk ke primary key dari tabel pelanggan.
   - id_barang : Foreign key yang merujuk ke primary key dari tabel barang.
   - tanggal_sewa : Tanggal saat transaksi penyewaan dimulai.
   - tanggal_kembali : Tanggal saat transaksi penyewaan berakhir.
   - jumlah_hari : Jumlah hari barang disewa.
   - status_transaksi : Status transaksi, seperti "Menunggu Pembayaran", "Penyewaan", atau "Dikembalikan".
