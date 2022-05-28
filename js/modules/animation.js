import * as mapFunction from "./map.js";

//константа со списком анимирующих элементов
export const animItems = document.querySelectorAll('.anim-item');
//функция для анимамирования элементов при скроле страницы

const catalogImages = document.querySelectorAll('.main__catalog img[data-src],.main__catalog source[data-srcset]')
const proectsImages = document.querySelectorAll('.main__proects img[data-src],.main__proects source[data-srcset]')
const teamImages = document.querySelectorAll('.main__team img[data-src],.main__team source[data-srcset]')

const blockCatalog = document.querySelector('.main__catalog');
const blockProects = document.querySelector('.main__proects');
const blockTeam = document.querySelector('.main__team');

const loadMapBlock = document.querySelector(".footer__map-cities-block-map");
let indexMap = 1;









let wrapperBody = document.querySelector('.wrapper')
export function animOnScroll() {

   if (animItems.length > 0) {
      for (let i = 0; i < animItems.length; i++) {
         const animItem = animItems[i];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 6;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if (window.pageYOffset > (animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
            if (wrapperBody.classList.contains('anim')) {
               animItem.classList.add('item-active');







               lazyScroll(i)
               animItem.classList.remove('data-image');


            }
            else if (!wrapperBody.classList.contains('anim')) {
               animItem.classList.remove('item-active');




               lazyScroll(i)
               animItem.classList.remove('data-image');



            }



         }
         // else {
         //    animItem.classList.remove('item-active');
         // }
      }
   }
   //функция для определения местоположения элемента в документе
   function offset(el) {
      const rect = el.getBoundingClientRect();
      return {
         top: rect.top + window.pageYOffset,
         right: rect.right + window.pageXOffset,
         bottom: rect.bottom + window.pageYOffset,
         left: rect.left + window.pageXOffset,
      }
   }
}

const windowHeight = document.documentElement.clientHeight;
function lazyLoadingCheck(element, elementList) {
   if (element !== null) {
      let blockPosition = element.getBoundingClientRect().top + pageYOffset;
      if (pageYOffset > blockPosition - windowHeight) {
         elementList.forEach(item => {
            if (item.dataset.src) {
               item.src = item.dataset.src;
               item.removeAttribute('data-src');
            }
            if (item.dataset.srcset) {
               item.srcset = item.dataset.srcset;
               item.removeAttribute('data-srcset');
            }


         });
      }
   }
}
function lazyScroll(index) {
   if (animItems[index].classList.contains('main__catalog') && animItems[index].classList.contains('data-image')) {
      lazyLoadingCheck(blockCatalog, catalogImages)
   }
   else if (animItems[index].classList.contains('main__proects') && animItems[index].classList.contains('data-image')) {
      lazyLoadingCheck(blockProects, proectsImages)
   }
   else if (animItems[index].classList.contains('main__team') && animItems[index].classList.contains('data-image')) {
      lazyLoadingCheck(blockTeam, teamImages)
   }
   else if (animItems[index].classList.contains('footer__map') && indexMap == 1) {
      getMap()
   }
}
function getMap() {
   const loadMapBlockPosition = loadMapBlock.getBoundingClientRect().top + pageYOffset;
   if (pageYOffset > loadMapBlockPosition - windowHeight) {
      setTimeout(() => {
         mapFunction.initYmaps();
         mapFunction.clickCity()
         mapFunction.clickShop();

      }, 100);
      indexMap = 0;
   }

}







// const lazyImages = document.querySelectorAll("img[data-src],source[data-srcset]");
// const loadMapBlock = document.querySelector(".footer__map-cities-block-map");
// const loadMapScript = document.querySelector(".load-map");
//const windowHeight = document.documentElement.clientHeight;
// let lazyImagesPositions = [];
// if (lazyImages.length > 0) {
//    lazyImages.forEach(img => {
//       if (img.dataset.src || img.dataset.srcset) {
//          lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);

//       }
//    });
//    // lazyLoadingCheck()
//    // getMap()
// }

// export function lazyScroll() {
//    if (document.querySelectorAll("img[data-src],source[data-srcset]").length > 0) {
//       lazyLoadingCheck()
//    }
//    if (indexMap == 1) {
//       getMap()
//    }
// }

// function lazyLoadingCheck() {
//    let imgIndex = lazyImagesPositions.findIndex(
//       item => pageYOffset > item - windowHeight
//    )


//    if (imgIndex >= 0) {

//       if (lazyImages[imgIndex].dataset.src) {
//          lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
//          lazyImages[imgIndex].removeAttribute('data-src')
//       }
//       else if (lazyImages[imgIndex].dataset.srcset) {
//          lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
//          lazyImages[imgIndex].removeAttribute('data-srcset')
//       }
//       delete lazyImagesPositions[imgIndex];

//    }
// }






