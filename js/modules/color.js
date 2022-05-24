export let catalogColorObj = {
   indexCatalogItem: document.querySelectorAll('.index-catalog-item'),
   indexColorItem: document.querySelectorAll('.panel-color-item'),
   indexColorList: [
      'white-isvestniak',
      'cream-isvestniak',
      'yellow-isvestniak',
      'sandstone-cream',
      'beige-isvestniak',
      'gray-isvestniak',
      'black-isvestniak',
      'brown-marble',
      'travertine-brown',
      'travertine-cream'
   ],
   indexElementList: [
      'balustradi',
      'dekorativnie_elementi',
      'zamkovie_kamni',
      'malie_arhitekturnie_formi',
      'karnizi',
      'nalichniki',
      'podokonnki',
      'rusti',
      'kolonni',
      'pilastrii',
   ],
   indexImageList: [
      ['balustradi.png', 'balustradi.webp'],
      ['dekorativnie_elementi.png', 'dekorativnie_elementi.webp'],
      ['zamkovie_kamni.png', 'zamkovie_kamni.webp'],
      ['malie_arhitekturnie_formi.png', 'malie_arhitekturnie_formi.webp'],
      ['karnizi.png', 'karnizi.webp'],
      ['nalichniki.png', 'nalichniki.webp'],
      ['podokonnki.png', 'podokonnki.webp'],
      ['rusti.png', 'rusti.webp'],
      ['kolonni.png', 'kolonni.webp'],
      ['pilastrii.png', 'pilastrii.webp'],

   ]
}

let indexColor;
let indexElement;
let indexImage;
export function initColorCatalog() {
   if (document.documentElement.classList.contains('no-webp')) {
      for (let u = 0; u < catalogColorObj.indexColorItem.length; u++) {
         catalogColorObj.indexColorItem[u].addEventListener('click', function (param) {
            indexColor = catalogColorObj.indexColorList[u];
            for (let r = 0; r < catalogColorObj.indexCatalogItem.length; r++) {
               indexElement = catalogColorObj.indexElementList[r];
               indexImage = catalogColorObj.indexImageList[r][0];
               catalogColorObj.indexCatalogItem[r].setAttribute('src', 'img/catalog/' + indexColor + '/' + indexElement + '/' + indexImage)
            }
         })
      }
   }
   if (document.documentElement.classList.contains('webp')) {
      let indexCatalogItemWebp = document.querySelectorAll('.main__catalog-content-image source')
      for (let u = 0; u < catalogColorObj.indexColorItem.length; u++) {
         catalogColorObj.indexColorItem[u].addEventListener('click', function (param) {
            indexColor = catalogColorObj.indexColorList[u];
            for (let r = 0; r < indexCatalogItemWebp.length; r++) {
               indexElement = catalogColorObj.indexElementList[r];
               indexImage = catalogColorObj.indexImageList[r][1];
               indexCatalogItemWebp[r].setAttribute('srcset', 'img/catalog/' + indexColor + '/' + indexElement + '/' + indexImage)
            }
         })
      }
   }
}

//очищает веб-хранилище
localStorage.clear();
//создает ключ в котором хранится индекс , который используется для инициализации начального пункта каталога, при его загрузке
localStorage.setItem('element', 0)
localStorage.setItem('subelement', 0)


//функция для выбора элемента каталога на главной странице
let catalogElementList = document.querySelectorAll('.index-catalog-add');
for (let h = 0; h < catalogElementList.length; h++) {
   catalogElementList[h].addEventListener('click', function () {
      //изменяет индекс на необходимый для инициализации выбранно пункта каталога, при его загрузке
      localStorage.element = h;
   })
}






