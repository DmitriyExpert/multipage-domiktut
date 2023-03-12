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



// search--popup

const btnSearchHeader = document.querySelector('.header__lastblock--search');
const bodySite = document.querySelector('body');
const popupSearchBlock = document.querySelector('.popup__search');
const btnSearchHeaderClose = document.querySelector('.popup__search--close');
const btnSearchHeaderMobile = document.querySelector('.header__search--icon');

const searchforminput = document.querySelector('.searchform__input');
const btnSearchInner = document.querySelector('.searchform__btn');
const searchInputBlock = document.querySelector('.searchform__inputblock');

const popupWrapper = document.querySelector('.popup__search--wrapper');

btnSearchHeader.addEventListener('click', function () {
     if (popupSearchBlock.classList.contains('d-n')) {
          popupSearchBlock.classList.remove('d-n');
          popupSearchBlock.classList.add('animationPopupSearchOpen');
          bodySite.classList.add('overflowHidden');
          setTimeout(() => {
               popupSearchBlock.classList.remove('animationPopupSearchOpen')
          }, 300)
     }
});

btnSearchHeaderMobile.addEventListener('click', function () {
     if (popupSearchBlock.classList.contains('d-n')) {
          popupSearchBlock.classList.remove('d-n');
          popupSearchBlock.classList.add('animationPopupSearchOpen');
          bodySite.classList.add('overflowHidden');
          popupWrapper.classList.add('sens--off')
          setTimeout(() => {
               popupSearchBlock.classList.remove('animationPopupSearchOpen')
          }, 300)
     }
});

btnSearchHeaderClose.addEventListener('click', function () {
     popupSearchBlock.classList.add('animationPopupSearchClose');
     setTimeout(() => {
          popupSearchBlock.classList.remove('animationPopupSearchClose');
          popupSearchBlock.classList.add('d-n');
          bodySite.classList.remove('overflowHidden');
     }, 300);
});



btnSearchInner.addEventListener('click', function () {
     if (searchforminput.value == '') {
          alert('Введите данные корректно')
          searchInputBlock.classList.add('searchform__inputblock--animationborder');
     } else {
          searchforminput.value = '';
     }

     searchforminput.addEventListener('input', function () {
          if (searchforminput.value != '') {
               searchInputBlock.classList.remove('searchform__inputblock--animationborder');
          }
     });

});





