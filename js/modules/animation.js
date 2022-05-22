//константа со списком анимирующих элементов
export const animItems = document.querySelectorAll('.anim-item');
//функция для анимамирования элементов при скроле страницы

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
            animItem.classList.add('item-active');
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