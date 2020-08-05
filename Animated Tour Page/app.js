const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0%"}, { height: "80%"})
.fromTo(headline, 0.5, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut}, "+=.1")