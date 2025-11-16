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
const sections = document.querySelectorAll('section[id}');
const navLinks = document.querySelectorAll('nav ul li a');
const headerHeight = 100;
window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset ;
    let currentSectionId = '';

    // BLOK 1: Mencari section mana yang aktif (Ini sudah benar)
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight;
        if (currentScrollPos >= sectionTop) {
            currentSectionId = section.getAttribute('id');
        }
    }); // <-- Kurung tutup } dari sections.forEach

    // BLOK 2: Menerapkan class 'active' ke link
    // (Blok ini harusnya ada DI DALAM event listener)
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSectionId) {
            link.classList.add('active');
        }
    });

}); // <-- Kurung tutup ); dari window.addEventListener