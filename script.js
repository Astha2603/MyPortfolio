let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a');
let sections = document.querySelectorAll('section');
let footer = document.querySelector('footer');
let header = document.querySelector('header');
let scrollButton = document.querySelector('.footer-iconTop a');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//scroll sections
// let sections  = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar links/
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');

            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }

        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    });
    //sticky header
    // let header = document.querySelector('header');
    // let headerOffset = header.offsetTop;
    // header.classList.toggle('sticky', window.scrollY > headerOffset);
    header.classList.toggle('sticky', window.scrollY > 100);
    
    
    // remove toggle icon and navbar 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// animation footer on scroll
// let footer = document.querySelector('footer');
footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);


scrollButton.addEventListener('click', function (e) {
    e.preventDefault();

    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



