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


// city

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