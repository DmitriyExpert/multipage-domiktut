// Lazy loading img

const imgOnSite = document.querySelectorAll('img');

for (let item of imgOnSite) {
     item.setAttribute('loading', 'lazy');
};




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


// questions akkardion

const questionAction = document.querySelectorAll('.questions__button');
const questionVerticalLine = document.querySelectorAll('.question__verticalline');
const questionTextBlock = document.querySelectorAll('.questions__item--textblock');

for (let i = 0; i < questionAction.length; i++) {
     questionAction[i].addEventListener('click', function (e) {
          e.preventDefault();
          // Animation lines
          if (questionVerticalLine[i].classList.contains(('questions--tranformanimationminus'))) {
               questionVerticalLine[i].classList.add('questions--tranformanimationplus');
               questionVerticalLine[i].classList.remove('questions--tranformanimationminus');
               setTimeout(() => {
                    questionVerticalLine[i].classList.remove('questions--tranformanimationplus')
               }, 300);
               // Animation textblock


               questionTextBlock[i].classList.remove('questions__textblock--animationopen');
               questionTextBlock[i].classList.add('questions__textblock--animationclose');
               setTimeout(() => {
                    questionTextBlock[i].classList.add('d-n')
                    questionTextBlock[i].classList.remove('questions__textblock--animationclose')
               },500);

               

          } else {
               // Animation lines
               questionVerticalLine[i].classList.add('questions--tranformanimationminus');
               // Animation textblock
               questionTextBlock[i].classList.remove('d-n');
               questionTextBlock[i].classList.add('questions__textblock--animationopen');
          }
     });
};

