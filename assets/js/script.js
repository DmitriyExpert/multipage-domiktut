const bodySite = document.querySelector('body');





// Lazy loading img

const imgOnSite = document.querySelectorAll('img');

for (let item of imgOnSite) {
     item.setAttribute('loading', 'lazy');
};



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


// Animation favorite block

const favoriteBlocks = document.querySelectorAll('.popular__favoriteblock');
const bagMark = document.querySelector('.heartblock__bagblock');
let touchCounterFavorite = 0;
for (let i = 0; i < favoriteBlocks.length; i++) {
     favoriteBlocks[i].addEventListener('click', function () {
          if (favoriteBlocks[i].classList.contains('popular__favoriteblock--active')) {
               favoriteBlocks[i].classList.remove('popular__favoriteblock--active')
               touchCounterFavorite -= 1
               console.log(touchCounterFavorite)
          } else {
               favoriteBlocks[i].classList.add('popular__favoriteblock--active');
               touchCounterFavorite+=1
               console.log(touchCounterFavorite)
          }
          if (touchCounterFavorite > 0) {
               bagMark.classList.remove('d-n')
          } else if (touchCounterFavorite == 0) {
               bagMark.classList.add('d-n')
          }
     })
}


// pop up City

const menuCity = document.querySelectorAll('.city__citytext--menu');
const menuCityActivator = document.querySelectorAll('.city__citytext');
const menuCityItem = document.querySelectorAll('.city__citytext--menu-item');

const cityTitle = document.querySelectorAll('.city__title');


for (let i = 0; i < menuCity.length; i++) {
     menuCity[i].classList.add('menuCity--notActive');
};

for (let i = 0; i < menuCityActivator.length; i++) {
     menuCityActivator[i].addEventListener('click', function () {

          if (menuCity[i].classList.contains('menuCity--Active')) {
               menuCity[i].classList.remove('menuCity--Active');
               menuCity[i].classList.add('cityMenuClose');
               setTimeout(() => {
                    menuCity[i].classList.add('menuCity--notActive');
                    menuCity[i].classList.add('d-n');
                    menuCity[i].classList.remove('cityMenuClose');
               }, 300);
          };

          if (menuCity[i].classList.contains('menuCity--notActive')) {
               menuCity[i].classList.remove('menuCity--notActive');
               menuCity[i].classList.remove('d-n');
               menuCity[i].classList.add('menuCity--Active');
               menuCity[i].classList.add('cityMenuActivated');
               setTimeout(() => {
                    menuCity[i].classList.remove('cityMenuActivated');
               },300);
          };
          
          for (let j = 0; j < menuCityItem.length; j++) {
               menuCityItem[j].addEventListener('click', function () {
                    cityTitle[i].innerText = menuCityItem[j].innerText
               });
          };
     });
};






























// ANIMATION BURGER MENU

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
          for (let item1 of introInputsText) {
               item1.value = '';
          };
          for (let item2 of introForms) {
               item2.style.border = '1px solid #C0C2D7'
          };
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
          popupSearchBlock.classList.add('animationPopupOpen');
          bodySite.classList.add('overflowHidden');
          setTimeout(() => {
               popupSearchBlock.classList.remove('animationPopupOpen')
          }, 300)
     }
});

btnSearchHeaderMobile.addEventListener('click', function () {
     if (popupSearchBlock.classList.contains('d-n')) {
          popupSearchBlock.classList.remove('d-n');
          popupSearchBlock.classList.add('animationPopupOpen');
          bodySite.classList.add('overflowHidden');
          popupWrapper.classList.add('sens--off')
          setTimeout(() => {
               popupSearchBlock.classList.remove('animationPopupOpen')
          }, 300)
     }
});

btnSearchHeaderClose.addEventListener('click', function () {
     popupSearchBlock.classList.add('animationPopupClose');
     setTimeout(() => {
          popupSearchBlock.classList.remove('animationPopupClose');
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


// prefooter pop up


const prefooterBtn = document.querySelector('.prefooter__button');
const prefooterCloseBtn = document.querySelector('.prefooter__popup--close');
const prefooterPopup = document.querySelector('.prefooter__popup');
const prefooterPopupPrev = document.querySelector('.prefooter__popup--content--prev');
const prefooterPopupNextBtn = document.querySelector('.prefooter__popup--btn');
const prefooterPopupNext = document.querySelector('.prefooter__popup--content--next');
const prefooterNextCloseBtns = document.querySelectorAll('.prefooter__popupNextClose');

prefooterBtn.addEventListener('click', function () {
     if (prefooterPopup.classList.contains('d-n')) {
          prefooterPopup.classList.remove('d-n');
          prefooterPopup.classList.add('animationPopupOpen');
          bodySite.classList.add('overflowHidden');
          setTimeout(() => {
               prefooterPopup.classList.remove('animationPopupOpen')
          }, 300)
     }
});

prefooterCloseBtn.addEventListener('click', function () {
     prefooterPopup.classList.add('animationPopupClose');
     setTimeout(() => {
          prefooterPopup.classList.remove('animationPopupClose');
          prefooterPopup.classList.add('d-n');
          bodySite.classList.remove('overflowHidden');
     }, 300);
});


prefooterPopupNextBtn.addEventListener('click', function () {
     prefooterPopupNext.classList.remove('d-n');
     prefooterPopupNext.classList.add('activatedNextPrefooterPopup');
     prefooterPopupPrev.classList.add('d-n')
     setTimeout(() => {
          prefooterPopupNext.classList.remove('activatedNextPrefooterPopup');
     }, 300);
});

for (let i = 0; i < prefooterNextCloseBtns.length; i++) {
     prefooterNextCloseBtns[i].addEventListener('click', function () {
          prefooterPopup.classList.add('animationPopupClose');
          setTimeout(() => {
               prefooterPopupNext.classList.add('d-n');
               prefooterPopup.classList.remove('animationPopupClose');
               prefooterPopup.classList.add('d-n');
               bodySite.classList.remove('overflowHidden');
               prefooterPopupPrev.classList.remove('d-n')
          }, 300);
     })
}


const prefooterQuestIcon = document.querySelector('.prefooter__popup--icon');
const prefooterQuestBody = document.querySelector('.prefooter__questionbody');

if (this.screen.availWidth >= 992) {
     prefooterQuestIcon.addEventListener('mouseover', function () {
          prefooterQuestBody.classList.remove('d-n');
          prefooterQuestBody.classList.add('prefooter__questionbody--animopen');
          setTimeout(() => {  
               prefooterQuestBody.classList.remove('prefooter__questionbody--animopen');
          }, 100);
     })
     prefooterQuestIcon.addEventListener('mouseout', function () {
          prefooterQuestBody.classList.add('prefooter__questionbody--animclose');
          setTimeout(() => {  
               prefooterQuestBody.classList.add('d-n');
               prefooterQuestBody.classList.remove('prefooter__questionbody--animclose');
          }, 100);
     })     
}

if (this.screen.availWidth < 992) {
     prefooterQuestIcon.addEventListener('click', function () {
          if (prefooterQuestBody.classList.contains('prefooter__questionbody--animopen')) {
               prefooterQuestBody.classList.remove('prefooter__questionbody--animopen');
               prefooterQuestBody.classList.add('prefooter__questionbody--animclose');
               setTimeout(() => {  
                    prefooterQuestBody.classList.add('d-n');
                    prefooterQuestBody.classList.remove('prefooter__questionbody--animclose');
               }, 100);
          } else {
               prefooterQuestBody.classList.remove('d-n');
               prefooterQuestBody.classList.add('prefooter__questionbody--animopen');
          }
     })
}






// Animation scroll

// to Questions

const smoothLinksQuestionsHeader = document.querySelectorAll('a[href^="#scrollAnchorQuestionHeader"]');
for (let smoothLink of smoothLinksQuestionsHeader) {
     smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
          document.querySelector(id).scrollIntoView({
               behavior: 'smooth',
               block: 'start'
          });
     });
};

// to Prefooter

const smoothLinksPrefooter = document.querySelectorAll('a[href^="#prefooter"]');
for (let smoothLink of smoothLinksPrefooter) {
     smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
          document.querySelector(id).scrollIntoView({
               behavior: 'smooth',
               block: 'start'
          });
     });
};





