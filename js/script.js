import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import * as navFunction from "./modules/nav.js";
import * as animFunction from "./modules/animation.js";
import * as colorFunction from "./modules/color.js";
import { initPagination, resizePagination } from "./slider.js";
import * as mapFunction from "./modules/map.js";
"use strict"
// //////////////////header/////////////////////////


let proectsBulletList = document.querySelectorAll('.swiper-pagination-proects .swiper-pagination-bullet')
let proectsBulletList1 = document.querySelectorAll('.swiper-pagination .swiper-pagination-bullet')
let proectsBulletList2 = document.querySelectorAll('.main__proects-content-item.swiper-slide')
let teamBulletList = document.querySelectorAll('.team-pagination .swiper-pagination-bullet')
let teamBulletList2 = document.querySelectorAll('.main__team-slider-item.swiper-slide')
let proectWrapper = document.querySelector('.main__proects-content-block')
let teamWrapper = document.querySelector('.main__team-slider-block')
let wrapperBody = document.querySelector('.wrapper')
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
      mapFunction.initYmaps();
      mapFunction.clickCity()
      mapFunction.clickShop();
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
   if (window.pageYOffset == 0 && window.innerWidth > 700) {
      setTimeout(() => {
         animFunction.animOnScroll();
      }, 200);
   }
   if (window.pageYOffset !== 0 || window.innerWidth <= 700) {
      for (let y = 0; y < animItem.length; y++) {
         animItem[y].classList.add('no-item-active')
         wrapperBody.classList.add('no-anim')
      }
   }
   initPagination(proectsBulletList, proectsBulletList1, proectsBulletList2, proectWrapper)
   initPagination(teamBulletList, undefined, teamBulletList2, teamWrapper)
   initSmallScreen()

};
window.onscroll = function () {
   navFunction.scrollWindow();
   if (!wrapperBody.classList.contains('no-anim')) {
      animFunction.animOnScroll();
   }
};
window.onresize = function () {
   if (window.innerWidth <= 700 && wrapperBody.classList.contains('sw-active')) {
      resizePagination('.swiper-pagination-proects', proectsBulletList2, proectWrapper)
      resizePagination('.team-pagination', teamBulletList2, teamWrapper)
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







