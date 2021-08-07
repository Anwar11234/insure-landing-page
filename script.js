const hamburger = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.header__nav');
hamburger.addEventListener('click' , open);
close.addEventListener('click' , closeMenu);
function open(){ 
    nav.classList.add('open');
}

function closeMenu(){ 
    nav.classList.remove('open');
}