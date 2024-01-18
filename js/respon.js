// Memilih elemen-elemen DOM
const Menu = document.querySelector('.Menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

// Menambahkan event listener untuk menu hamburger dan menu itu sendiri
hamburgerMenu.addEventListener('click', displayMenu);
Menu.addEventListener('click', displayMenu);

// Fungsi untuk menampilkan atau menyembunyikan menu dan mengganti ikon antara hamburger dan close
function displayMenu() {
  if(Menu.classList.contains('tampil')) {
    Menu.classList.remove('tampil');
    iconBars.style.display='inline';
    iconClose.style.display='none';
  } else {
    Menu.classList.add('tampil');
    iconBars.style.display='none';
    iconClose.style.display='inline';
  }
}