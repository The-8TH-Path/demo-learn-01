const hamburger = document.querySelector('.hamburger');
const togglemenu = document.querySelector('.header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    togglemenu.classList.toggle('active');
});

// Typing Effect

let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer', 'Freelancer', 'Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});

// Active Link State On Scroll 

// Get All Links 
let navLinks = document.querySelectorAll('nav ul li a');
//  Get All Sections
let sections = document.querySelectorAll('section');

// Create Function
window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY + 20;
    sections.forEach(sections => {
        if(scrollPos > sections.offsetTop && scrollPos < (sections.offsetTop + sections.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(sections.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});