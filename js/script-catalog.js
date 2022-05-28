import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import * as navFunction from "./modules/nav.js";
import * as mapFunction from "./modules/map.js";
import * as animFunction from "./modules/animation.js";
import * as catalogFunction from "./modules/catalog.js";
import * as colorFunction from "./modules/color.js";

"use strict"

let wrapperBody = document.querySelector('.wrapper');
let animItem = document.querySelectorAll('.anim-item');


let localIndexCity = localStorage.cityIndex;
if (localIndexCity == undefined) {
   localIndexCity = 0;
}
let localIndexShop = localStorage.shopIndex;
if (localIndexShop == undefined) {
   localIndexShop = 0;
}
function initSmallScreen() {
   if (window.innerWidth <= 700) {
      setTimeout(() => {
         mapFunction.newMap(localIndexCity)
      }, 50)
   }
   if (window.innerWidth > 700) {
      wrapperBody.classList.add('sw-active')
   }
}

window.onload = function () {
   //предзагрузочный экран
   setTimeout(() => {
      // mapFunction.initYmaps();
      // mapFunction.clickCity()
      // mapFunction.clickShop();
      catalogFunction.clickHeadItem()
      catalogFunction.clickSubItem()
      catalogFunction.clickContentItem()

   }, 100);
   colorFunction.initColorCatalog();
   navFunction.initBurger()
   setTimeout(() => {
      document.querySelector('.preloader').classList.add('loaded-hiding');
      document.body.classList.remove('lock');
   }, 300);
   setTimeout(() => {
      document.querySelector('.preloader').classList.add('loaded');
      document.querySelector('.preloader').classList.remove('loaded-hiding');
   }, 600);

   navFunction.scrollWindow();
   setTimeout(() => {
      animFunction.animOnScroll();
   }, 100);
   if (window.pageYOffset == 0 && window.innerWidth > 700) {
      wrapperBody.classList.add('anim')
   }
   else if (window.pageYOffset !== 0 || window.innerWidth <= 700) {
      for (let y = 0; y < animItem.length; y++) {
         animItem[y].classList.add('no-item-active')
      }
      wrapperBody.classList.remove('anim')

   }

   initSmallScreen()
};
window.onscroll = function () {
   navFunction.scrollWindow();
   animFunction.animOnScroll();

};
window.onresize = function () {
   if (window.innerWidth <= 700 && wrapperBody.classList.contains('sw-active')) {

      localIndexShop = localStorage.shopIndex;
      if (localIndexShop == undefined) {
         localIndexShop = 0;
      }
      localIndexCity = localStorage.cityIndex;
      if (localIndexCity == undefined) {
         localIndexCity = 0;
      }
      setTimeout(() => {
         mapFunction.newMap(localIndexCity)
      }, 20);
      wrapperBody.classList.remove('sw-active')
   }
   if (window.innerWidth > 700 && !wrapperBody.classList.contains('sw-active')) {
      mapFunction.deleteMap()
      navFunction.delBurger()
      wrapperBody.classList.add('sw-active');
   }
};




