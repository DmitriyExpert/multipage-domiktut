const bodySite = document.querySelector('body');


// Animation heart

const heartIcon = document.querySelector('.heart--icon');

const intervalId = setInterval(() => {
     setTimeout(() => {
          heartIcon.classList.add('animationHeartUp');
     }, 100);

     setTimeout(() => {
          heartIcon.classList.remove('animationHeartUp')
          heartIcon.classList.add('animationHeartDown');
     }, 1200);

     setTimeout(() => {
          heartIcon.classList.remove('animationHeartDown');
     }, 1700);
}, 1700);

// burger menu

const headerBurgermenuBtnActivated = document.querySelector('.header__burgermenu');
const headerburgermenuActive = document.querySelector('.header__burgermenuactive');
const headerburgermenuClosed = document.querySelector('.burgermenuactive--iconclose');

const burgerLinks = document.querySelectorAll('.burgermenuactive__sublinks--input');

for (let item of burgerLinks) {
     item.addEventListener('click', function (e) {
          e.preventDefault();
          burgerMenuClose();
          bodySite.classList.remove('overflowHidden');
     });
}


headerBurgermenuBtnActivated.addEventListener('click', function () {
     burgerMenuActivation();
     bodySite.classList.add('overflowHidden');
});

headerburgermenuClosed.addEventListener('click', function () {
     burgerMenuClose();
     bodySite.classList.remove('overflowHidden');
});


const burgerMenuActivation = function () {
     headerburgermenuActive.classList.add('burgermenuactive--animation');
};

const burgerMenuClose = function () {
     headerburgermenuActive.classList.add('burgermenuactive--animationclose');
     setTimeout(() => {
          headerburgermenuActive.classList.remove('burgermenuactive--animation');
          headerburgermenuActive.classList.remove('burgermenuactive--animationclose');
     }, 400);
};