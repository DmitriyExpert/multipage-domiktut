// ANIMATION BURGER MENU

const headerBurgermenuBtnActivated = document.querySelector('.header__burgermenu');
const headerburgermenuActive = document.querySelector('.header__burgermenuactive');
const headerburgermenuClosed = document.querySelector('.burgermenuactive--iconclose');

headerBurgermenuBtnActivated.addEventListener('click', function () {
     burgerMenuActivation();
});

headerburgermenuClosed.addEventListener('click', function () {
     burgerMenuClose();
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


// ANIMATION RANGE SLIDER

window.onload = function(){
     slideOne();
     slideTwo();
}

const introRangeOne = document.querySelector('.intro__range-1');
const introRangeTwo = document.querySelector('.intro__range-2');
const introValueOne = document.querySelector('.intro__rangeinput--thumb1');
const introValueTwo = document.querySelector('.intro__rangeinput--thumb2');

let minGap = 0;

function slideOne() {
     if (parseInt(introRangeTwo.value) - parseInt(introRangeOne.value) <= minGap) {
          introRangeOne.value = parseInt(introRangeTwo.value) - minGap;
     }

     introValueOne.textContent = introRangeOne.value + ' ₽';
}

function slideTwo() {
     if (parseInt(introRangeTwo.value) - parseInt(introRangeOne.value) <= minGap) {
          introRangeTwo.value = parseInt(introRangeOne.value) + minGap;
     };

     introValueTwo.textContent = introRangeTwo.value + ' ₽';
};


// intro__btn Func

const introInputFieldBtn = document.querySelector('.intro__btn');
const introInputsText = document.querySelectorAll('.intro__input');
const introForms = document.querySelectorAll('.intro__form');

introInputFieldBtn.addEventListener('click', function () {
     let resultFor = '';
     for (let item1 of introInputsText) {
          if (item1.value == '') {
               alert('Введите данные в окна');
               for (let item2 of introForms) {
                    item2.style.border = '1px solid #EF0000'
               };
               return;
          } else {
               resultFor += item1.value;
          }
     };

     if (resultFor == '') {
          return
     } else {
          console.log(resultFor)
     }
     
});


        