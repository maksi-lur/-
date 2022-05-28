//Функция для изменения навигации при скролле
let headerNav = document.querySelector('.header__nav');
let arrowNav = document.querySelector('.header__arrow');
let headTop = document.querySelector('#head');

let navBg = document.querySelector(".header__nav-bg")
let scrollNav = window.pageYOffset;
export function scrollWindow() {
   scrollNav = window.pageYOffset;
   if (scrollNav !== 0) {
      headerNav.classList.add('nav-active');
      arrowNav.classList.add('arrow-active');


   }
   else if (scrollNav == 0) {

      headerNav.classList.remove('nav-active')
      arrowNav.classList.remove('arrow-active')

   }
}
let navBlock = document.querySelector('.header__nav-block');
let burgerOpen = document.querySelector('.header__burger-open');
let burgerClosed = document.querySelector('.header__burger-closed');
let navItem = document.querySelectorAll('.nav-list-item')
let clickMap = document.querySelector('#nav-map-click')
let clickContacts = document.querySelector('#nav-contacts-click')
let idMap = document.querySelector('#footer-map');
let idContacts = document.querySelector('#footer-contacts');


export function initBurger() {
   burgerOpen.addEventListener('click', function () {
      navBlock.classList.add('nav-block-active')
      document.body.classList.add('lock');
      navBg.classList.add('nav-active-bg');
   })
   burgerClosed.addEventListener('click', function () {
      navBlock.classList.remove('nav-block-active')
      document.body.classList.remove('lock');
      navBg.classList.remove('nav-active-bg');
   })
   for (let i = 0; i < navItem.length; i++) {
      navItem[i].addEventListener('click', function () {
         navBlock.classList.remove('nav-block-active')
         document.body.classList.remove('lock');
         navBg.classList.remove('nav-active-bg');
      })
   }
}
export function delBurger() {
   navBlock.classList.remove('nav-block-active')
   document.body.classList.remove('lock');
   navBg.classList.remove('nav-active-bg');
}

clickMap.addEventListener('click', function () {
   idMap.scrollIntoView({ behavior: "smooth" })
})
clickContacts.addEventListener('click', function () {
   idContacts.scrollIntoView({ behavior: "smooth" })
})
arrowNav.addEventListener('click', function () {
   headTop.scrollIntoView({ behavior: "smooth" })
})



