//navbar//
let menu = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('open');
};

let menubar = document.querySelector('#part');
let nav = document.querySelector('.navigation');

menubar.onclick = () => {
    menubar.classList.toggle('fa-arrow-left');
    nav.classList.toggle('open');
}

let menutext = document.querySelector('#part2');
let nav2 = document.querySelector('.navigation');

menutext.onclick = () => {
    menutext.classList.toggle('fa-xmarks');
    nav2.classList.toggle('open')
}

