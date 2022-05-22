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
      'balustradi.png',
      'dekorativnie_elementi.png',
      'zamkovie_kamni.png',
      'malie_arhitekturnie_formi.png',
      'karnizi.png',
      'nalichniki.png',
      'podokonnki.png',
      'rusti.png',
      'kolonni.png',
      'pilastrii.png',

   ]
}

let indexColor;
let indexElement;
let indexImage;
export function initColorCatalog() {
   for (let u = 0; u < catalogColorObj.indexColorItem.length; u++) {
      catalogColorObj.indexColorItem[u].addEventListener('click', function (param) {
         indexColor = catalogColorObj.indexColorList[u];

         for (let r = 0; r < catalogColorObj.indexCatalogItem.length; r++) {
            indexElement = catalogColorObj.indexElementList[r];
            indexImage = catalogColorObj.indexImageList[r];
            catalogColorObj.indexCatalogItem[r].setAttribute('src', 'img/catalog/' + indexColor + '/' + indexElement + '/' + indexImage)
         }
      })
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






