//overlay loader
var overlay = document.querySelector('body>.overlay');

window.addEventListener('load', function(){
    overlay.classList.add('loaded');
});

const toggleBtn = document.querySelector('.header .toggle-icon');
const nav = document.querySelector('nav')
toggleBtn.addEventListener('click', function(){
    nav.style.left = 0;
    document.body.style.overflowY = "hidden";
});

const closeNavBtn = document.querySelector('nav .close-icon');
closeNavBtn.addEventListener('click', function(){
    nav.style.left="110%";
    document.body.style.overflowY = "scroll";
})