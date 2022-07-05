// nav-bar burger
let burgerLines = document.querySelector('.burger__lines');
let burgerLinesImg = document.querySelector('.burger__lines img');
let burgerCross = document.querySelector('.burger__cross');
let burgerCrossImg = document.querySelector('.burger__cross img');
let nav = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__links li');


burgerLinesImg.addEventListener('click', function() {
    burgerLines.classList.add('burger-lines__inactive')
    burgerCross.classList.add('burger-cross__active');
    nav.classList.add('nav__active');
    this.style.display = "none";

    //nav-links animation
    navLinks.forEach(function(link, index) {
        link.style.animation = `navLinksFade 0.5s ease forwards ${index/5 + .5}s`;
    })
})

burgerCrossImg.addEventListener('click', function() {
    burgerCross.classList.remove('burger-cross__active');
    nav.classList.remove('nav__active');
    burgerLines.classList.remove('burger-lines__inactive');
    burgerLinesImg.style.display = "block";

    navLinks.forEach(function(link) {
            link.style.animation = '';
    }) 
})
