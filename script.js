const option = {
    strings: [
        "Designer",
        "Developer",
        "Data Analyst"
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
};
const typed = new Typed('#typed-text', option);
document.querySelectorAll('.social-icon a').forEach(link => 
    { link.addEventListener('click', function(e){
        e.preventDefault();
    })
})
// =============================
// ===== KODE SCROLL AKTIF =====
// =============================

// Ambil SEMUA link di navigasi (HANYA SEKALI DI SINI)
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section[id]');
const headerHeight = 85; // FIX 1: Ganti 100 menjadi 85 agar pas

window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;
    let currentSectionId = '';

    // BLOK 1: Mencari section mana yang aktif
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight;
        if (currentScrollPos >= sectionTop) {
            currentSectionId = section.getAttribute('id');
        }
    });

    // BLOK 2: Menerapkan class 'active' ke link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSectionId) {
            link.classList.add('active');
        }
    });
});

// =============================
// ===== KODE HAMBURGER MENU =====
// =============================
const menuIcon = document.getElementById('menu-icon');
const navUl = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

// Bonus: Sembunyikan menu setelah link di-klik (di mobile)
// FIX 2: Kita HAPUS deklarasi 'const navLinks' dari sini
//        karena sudah ada di atas (baris 6).
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navUl.classList.remove('active');
    });
});