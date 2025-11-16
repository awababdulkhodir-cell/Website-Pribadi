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
