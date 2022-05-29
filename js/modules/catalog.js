
//1вариант работы каталога
let catalogObjItem = {
   //перечень элементов главного визуального списка
   archiElementsList: document.querySelectorAll('.element-item1'),
   //перечень главных блоков , в каждый главный блок встроен подсписок
   archiElementsBlockList: document.querySelectorAll('.element-item2'),
   //перечень элементов визульного активного подсписка
   subElementList: document.querySelectorAll('.element-item2-active .subelement-item'),
   //перечень элементов активного блока контента
   content_listList: document.querySelectorAll('.content-block-active .content-list'),
   //перечень блоков контентной части,внутри которых находятся списки с элементами контентной части
   contentBlockList: document.querySelectorAll('.content-block'),
   //перечень элементов на которые навешивается клик ,кликнув по которому будет открываться элемент контентной части
   contentItemInfoList: document.querySelectorAll('.content-list-active .main__headcatalog-content-item-info'),
   //перечень элементов активного списка контентной части
   contentItemList: document.querySelectorAll('.content-list-active .catalog-content-item'),
   //перечень элементов закрывающих кнопок контентной части
   contentClosedList: document.querySelectorAll('.content-list-active .main__headcatalog-content-item-closed'),
   //перечень блоков с выбором цвета внутри активного списка контента
   colorList: document.querySelectorAll('.content-list-active .color-list'),
   //активный элемент главного списка визульного списка , используется для удаления класса у ранее выбранного  , при инициализации нового
   activeArchiElements: document.querySelector('.element-item1-active'),
   //активный блок контента , используется для удаления класса у ранее выбранного , при инициализации нового
   activeContentBlock: document.querySelector('.content-block-active'),
   //активный главный блок , используется для удаления класса у ранее выбранного , при инициализации нового
   activeArchiElementsBlock: document.querySelector('.element-item2-active'),
   //активный элемент визуального активного подсписка, используется для удаления класса у ранее выбранного  , при инициализации нового
   activeSubElementActive: document.querySelector('.subelement-item-active'),
   //активный элемент  активного блока контента, используется для удаления класса у ранее выбранного  , при инициализации нового
   activeContentList: document.querySelector('.content-list-active'),
   //активный элемент  активного списка контентной части, используется для удаления класса у ранее выбранного  , при инициализации нового
   activeContentItem: document.querySelector('.content-item-active'),
   //активный   блок с выбором цвета, используется для удаления класса у ранее выбранного , при инициализации нового
   activeColorList: document.querySelector('.color-list-active'),
   navItemList: document.querySelectorAll('.header-nav-item'),
   activeNavItem: document.querySelector('.active-nav-catalog-item'),
}



let elementIndex = localStorage.element;
let subElementIndex = localStorage.subelement;

if (elementIndex == undefined) {
   elementIndex = 0;
   subElementIndex = 0;
}


let lazyCatalogImage;


//переменные для изменения цвета элементов контентной части
let imageItem;
let element;
let subElement;
//главный список архитектурных элементов для выбора цвета
let archiElemListImage = ['balustradi', 'dekorativnie_elementi', 'zamkovie_kamni', 'malie_arhitekturnie_formi', 'karnizi', 'nalichniki', 'podokonnki', 'rusti', 'kolonni', 'pilastrii',]
//подсписки каждого элемента для выбора цвета
let subElementListImage = [
   ['balasini', 'kriski-tumb', 'navershia', 'osnovanie-balustradi', 'poruchen', 'telo-tumbi'],
   ['izdelia1', 'izdelia2', 'izdelia3', 'izdelia4', 'izdelia5', 'izdelia6', 'izdelia7'],
   ['izdelia1', 'izdelia2', 'izdelia3', 'izdelia4'],
   ['izdelia1', 'izdelia2', 'izdelia3', 'izdelia4', 'izdelia5', 'izdelia6'],
   ['izdelia1', 'izdelia2', 'izdelia3'],
   ['izdelia1', 'izdelia2', 'izdelia3', 'izdelia4', 'izdelia5'],
   ['izdelia1', 'izdelia2', 'izdelia3', 'izdelia4', 'izdelia5'],
   ['izdelia1', 'izdelia2', 'izdelia3', 'izdelia4'],
   ['izdelia1', 'izdelia2', 'izdelia3'],
   ['izdelia1', 'izdelia2', 'izdelia3', 'izdelia']
]
//cписок элементов внутри подсписка для выбора
let imageContentListImage = [
   [//балюстрады
      [['ABL66-2.png', 'ABL66-2.webp'], ['ABL66-2.png', 'ABL66-2.webp'], ['ABL66-2.png', 'ABL66-2.webp'], ['ABL66-2.png', 'ABL66-2.webp'], ['ABL66-2.png', 'ABL66-2.webp'], ['ABL66-2.png', 'ABL66-2.webp'], ['ABL66-2.png', 'ABL66-2.webp'], ['ABL66-2.png', 'ABL66-2.webp'], ['ABL66-2.png', 'ABL66-2.webp']],//балясины
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],

   ],
   //декоративные элементы
   [
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
   ],
   //замковые камни
   [
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
   ],
   //малые архитектурные формы
   [
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
   ],
   //карнизы
   [
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
   ],
   //наличники
   [
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
   ],
   //подоконники
   [
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
   ],
   //русты
   [

      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],

   ],
   //колонны
   [
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],

   ],
   //пилястры
   [
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
      [['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'], ['no-img.png', 'no-img.webp'],],
   ]

];




catalogObjItem.archiElementsList[elementIndex].classList.add('element-item1-active', 'element-active');
catalogObjItem.archiElementsBlockList[elementIndex].classList.add('element-item2-active');
catalogObjItem.contentBlockList[elementIndex].classList.add('content-block-active');
catalogObjItem.navItemList[elementIndex].classList.add('active-nav-catalog-item');
catalogObjItem.subElementList = document.querySelectorAll('.element-item2-active .subelement-item');
catalogObjItem.content_listList = document.querySelectorAll('.content-block-active .content-list');
catalogObjItem.subElementList[subElementIndex].classList.add('subelement-item-active');
catalogObjItem.content_listList[subElementIndex].classList.add('content-list-active');



catalogObjItem.activeArchiElements = document.querySelector('.element-item1-active')
catalogObjItem.activeArchiElementsBlock = document.querySelector('.element-item2-active')
catalogObjItem.activeContentBlock = document.querySelector('.content-block-active');
catalogObjItem.activeSubElementActive = document.querySelector('.subelement-item-active');
catalogObjItem.activeContentList = document.querySelector('.content-list-active');
catalogObjItem.contentItemInfoList = document.querySelectorAll('.content-list-active  .main__headcatalog-content-item-info');
catalogObjItem.contentItemList = document.querySelectorAll('.content-list-active .catalog-content-item');
catalogObjItem.contentClosedList = document.querySelectorAll('.content-list-active .main__headcatalog-content-item-closed');
catalogObjItem.activeContentItem = document.querySelector('.content-item-active');
catalogObjItem.activeColorList = document.querySelector('.color-list-active');
catalogObjItem.colorList = document.querySelectorAll('.content-list-active .color-list');
catalogObjItem.activeNavItem = document.querySelector('.active-nav-catalog-item');



//функция для инициализации выбора цвета
function initColor(param) {
   if (document.documentElement.classList.contains('no-webp')) {
      let colorListItem = document.querySelectorAll('.color-list-active .color-item');
      let activeImage = document.querySelector('.content-item-active .content-image');
      imageDelete();
      initItemColor();
      colorListItem[0].addEventListener('click', function () {
         activeImage.setAttribute('src', 'img/catalog/white-isvestniak/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[1].addEventListener('click', function () {
         activeImage.setAttribute('src', 'img/catalog/cream-isvestniak/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[2].addEventListener('click', function () {
         activeImage.setAttribute('src', 'img/catalog/yellow-isvestniak/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[3].addEventListener('click', function () {
         activeImage.setAttribute('src', 'img/catalog/sandstone-cream/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[4].addEventListener('click', function () {
         activeImage.setAttribute('src', 'img/catalog/beige-isvestniak/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[5].addEventListener('click', function () {
         activeImage.setAttribute('src', 'img/catalog/gray-isvestniak/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[6].addEventListener('click', function () {
         activeImage.setAttribute('src', 'img/catalog/black-isvestniak/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[7].addEventListener('click', function () {
         activeImage.setAttribute('src', 'img/catalog/brown-marble/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[8].addEventListener('click', function () {
         activeImage.setAttribute('src', 'img/catalog/travertine-brown/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[9].addEventListener('click', function () {
         activeImage.setAttribute('src', 'img/catalog/travertine-cream/' + element + '/' + subElement + '/' + imageItem)
      })

   }
   if (document.documentElement.classList.contains('webp')) {
      let colorListItem = document.querySelectorAll('.color-list-active .color-item');
      let activeImage = document.querySelector('.content-item-active source');
      imageDelete();
      initItemColor();
      colorListItem[0].addEventListener('click', function () {
         activeImage.setAttribute('srcset', 'img/catalog/white-isvestniak/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[1].addEventListener('click', function () {
         activeImage.setAttribute('srcset', 'img/catalog/cream-isvestniak/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[2].addEventListener('click', function () {
         activeImage.setAttribute('srcset', 'img/catalog/yellow-isvestniak/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[3].addEventListener('click', function () {
         activeImage.setAttribute('srcset', 'img/catalog/sandstone-cream/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[4].addEventListener('click', function () {
         activeImage.setAttribute('srcset', 'img/catalog/beige-isvestniak/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[5].addEventListener('click', function () {
         activeImage.setAttribute('srcset', 'img/catalog/gray-isvestniak/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[6].addEventListener('click', function () {
         activeImage.setAttribute('srcset', 'img/catalog/black-isvestniak/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[7].addEventListener('click', function () {
         activeImage.setAttribute('srcset', 'img/catalog/brown-marble/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[8].addEventListener('click', function () {
         activeImage.setAttribute('srcset', 'img/catalog/travertine-brown/' + element + '/' + subElement + '/' + imageItem)
      })
      colorListItem[9].addEventListener('click', function () {
         activeImage.setAttribute('srcset', 'img/catalog/travertine-cream/' + element + '/' + subElement + '/' + imageItem)
      })

   }
}
//функция для выбора цвета элемента
function initItemColor() {
   let contentBlockActive = document.querySelectorAll('.content-block')
   if (document.documentElement.classList.contains('webp')) {
      for (let j = 0; j < contentBlockActive.length; j++) {
         if (contentBlockActive[j].classList.contains('content-block-active')) {
            let contentListActive = document.querySelectorAll('.content-block-active .content-list')
            for (let y = 0; y < contentListActive.length; y++) {
               if (contentListActive[y].classList.contains('content-list-active')) {
                  let contentItemActive = document.querySelectorAll('.content-list-active .catalog-content-item')
                  for (let w = 0; w < contentItemActive.length; w++) {
                     if (contentItemActive[w].classList.contains('content-item-active')) {
                        contentItemActive[w].classList.add('content-item-color')
                        element = archiElemListImage[j];
                        subElement = subElementListImage[j][y];
                        imageItem = imageContentListImage[j][y][w][1];

                        return
                     };
                  }
               }
            }
         }
      }
   }
   if (document.documentElement.classList.contains('no-webp')) {
      for (let j = 0; j < contentBlockActive.length; j++) {
         if (contentBlockActive[j].classList.contains('content-block-active')) {
            let contentListActive = document.querySelectorAll('.content-block-active .content-list')
            for (let y = 0; y < contentListActive.length; y++) {
               if (contentListActive[y].classList.contains('content-list-active')) {
                  let contentItemActive = document.querySelectorAll('.content-list-active .catalog-content-item')
                  for (let w = 0; w < contentItemActive.length; w++) {
                     if (contentItemActive[w].classList.contains('content-item-active')) {
                        contentItemActive[w].classList.add('content-item-color')
                        element = archiElemListImage[j];
                        subElement = subElementListImage[j][y];
                        imageItem = imageContentListImage[j][y][w][0];
                        return
                     };
                  }
               }
            }
         }
      }
   }
}
//функция для удаления выбранного цвета на предыдущем элементе
function imageDelete() {
   if (document.documentElement.classList.contains('no-webp')) {
      let deleteContentImageColor = document.querySelector('.content-item-color .content-image');
      if (deleteContentImageColor !== null) {
         deleteContentImageColor.setAttribute('src', 'img/catalog/white-isvestniak/' + element + '/' + subElement + '/' + imageItem)
         let deleteContentItemColor = document.querySelector('.content-item-color')
         deleteContentItemColor.classList.remove('content-item-color')
      }
   }
   if (document.documentElement.classList.contains('webp')) {
      let deleteContentImageColor = document.querySelector('.content-item-color source');
      if (deleteContentImageColor !== null) {
         deleteContentImageColor.setAttribute('srcset', 'img/catalog/white-isvestniak/' + element + '/' + subElement + '/' + imageItem)
         let deleteContentItemColor = document.querySelector('.content-item-color')
         deleteContentItemColor.classList.remove('content-item-color')
      }
   }

}


//функция для указания события по при выборе элемента главного списка
export function clickHeadItem() {
   for (let i = 0; i < catalogObjItem.archiElementsList.length; i++) {
      //добавление события клик на элемента главного списка
      catalogObjItem.archiElementsList[i].addEventListener('click', function () {
         initElement(i)
         localStorage.element = i;
         initLazyCatalogImage()
      })
   }

   for (let u = 0; u < catalogObjItem.navItemList.length; u++) {
      //добавление события клик на элемента главного списка
      catalogObjItem.navItemList[u].addEventListener('click', function () {
         if (window.innerWidth <= 700) {

            initElement(u)
            localStorage.element = u;
         }
      })
   }





}
//функция для указания события по при выборе элемента подсписка
export function clickSubItem() {
   for (let d = 0; d < catalogObjItem.subElementList.length; d++) {
      catalogObjItem.subElementList[d].addEventListener('click', function () {
         initSubElement(d)
         localStorage.subelement = d;
         initLazyCatalogImage()
      })
   }
}
//функция для указания события по при выборе элемента контентной части
export function clickContentItem() {
   for (let e = 0; e < catalogObjItem.contentItemInfoList.length; e++) {
      catalogObjItem.contentItemInfoList[e].addEventListener('click', function () {
         initContentItem(e)
      })
   }
}
//функция для инициализации элемента из подсписка 
export function initElement(param) {
   //переменная для проверки наличия класса у элемента
   let elementActive = catalogObjItem.archiElementsList[param].classList.contains('element-active');
   //если клик на элемент происходит в первый раз 
   if (!elementActive) {
      catalogObjItem.activeArchiElements.classList.remove('element-active', 'element-item1-active');
      catalogObjItem.activeArchiElementsBlock.classList.remove('element-item2-active');
      catalogObjItem.activeContentBlock.classList.remove('content-block-active');
      catalogObjItem.activeSubElementActive.classList.remove('subelement-item-active');
      catalogObjItem.activeContentList.classList.remove('content-list-active');
      if (catalogObjItem.activeNavItem !== null) {
         catalogObjItem.activeNavItem.classList.remove('active-nav-catalog-item');
      }
      if (catalogObjItem.activeContentItem !== null) {
         catalogObjItem.activeContentItem.classList.remove('content-item-active');
         catalogObjItem.activeColorList.classList.remove('color-list-active')
      }

      //запуск функции для удаления выбранного цвета у элемента контентной части
      imageDelete();
      //добавления активного класса выбранному элементу главного списка 
      catalogObjItem.archiElementsList[param].classList.add('element-active', 'element-item1-active');
      //добавления активного класса выбранному блоку главного списка
      catalogObjItem.archiElementsBlockList[param].classList.add('element-item2-active');
      catalogObjItem.contentBlockList[param].classList.add('content-block-active');
      //добавления активного класса первому элементу подсписка выбранного элемента главного списка
      catalogObjItem.subElementList = document.querySelectorAll('.element-item2-active .subelement-item');
      catalogObjItem.content_listList = document.querySelectorAll('.content-block-active .content-list');
      catalogObjItem.subElementList[0].classList.add('subelement-item-active');
      //добавления активного класса первому элементу списка контента выбранного элемента подсписка
      catalogObjItem.content_listList[0].classList.add('content-list-active');
      catalogObjItem.navItemList[param].classList.add('active-nav-catalog-item');




      catalogObjItem.activeArchiElements = document.querySelector('.element-item1-active')
      catalogObjItem.activeArchiElementsBlock = document.querySelector('.element-item2-active')
      catalogObjItem.activeContentBlock = document.querySelector('.content-block-active');
      catalogObjItem.activeSubElementActive = document.querySelector('.subelement-item-active');
      catalogObjItem.activeContentList = document.querySelector('.content-list-active');
      catalogObjItem.contentItemInfoList = document.querySelectorAll('.content-list-active .main__headcatalog-content-item-info');
      catalogObjItem.contentItemList = document.querySelectorAll('.content-list-active .catalog-content-item');
      catalogObjItem.contentClosedList = document.querySelectorAll('.content-list-active .main__headcatalog-content-item-closed');
      catalogObjItem.activeContentList = document.querySelector('.content-list-active');
      catalogObjItem.activeContentItem = document.querySelector('.content-item-active');
      catalogObjItem.activeColorList = document.querySelector('.color-list-active');
      catalogObjItem.colorList = document.querySelectorAll('.content-list-active .color-list');
      catalogObjItem.activeNavItem = document.querySelector('.active-nav-catalog-item');

      clickSubItem()
      clickContentItem()
   }
   //если клик повторный на тот же элемент
   else {
      // catalogObjItem.activeArchiElements[param].classList.add('element-item1-active');
      // catalogObjItem.activeContentBlock[param].classList.add('element-item2-active');
   }
}
//функция для инициализации элемента из подсписка 
export function initSubElement(param) {


   catalogObjItem.activeSubElementActive.classList.remove('subelement-item-active');
   catalogObjItem.activeContentList.classList.remove('content-list-active');
   if (catalogObjItem.activeContentItem !== null) {
      catalogObjItem.activeContentItem.classList.remove('content-item-active');
      catalogObjItem.activeColorList.classList.remove('color-list-active')
   }
   imageDelete();
   catalogObjItem.subElementList[param].classList.add('subelement-item-active');
   catalogObjItem.content_listList[param].classList.add('content-list-active');

   //catalogObjItem.archiElementsBlockList = document.querySelectorAll('.element-item2');
   //catalogObjItem.subElementList = document.querySelectorAll('.element-item2-active .subelement-item');
   //catalogObjItem.content_listList = document.querySelectorAll('.content-block-active .content-list');
   catalogObjItem.contentItemInfoList = document.querySelectorAll('.content-list-active .main__headcatalog-content-item-info');
   catalogObjItem.contentItemList = document.querySelectorAll('.content-list-active .catalog-content-item');
   catalogObjItem.contentClosedList = document.querySelectorAll('.content-list-active .main__headcatalog-content-item-closed');
   catalogObjItem.activeContentBlockList = document.querySelector('.content-block-active');
   catalogObjItem.activeSubElementActive = document.querySelector('.subelement-item-active');
   catalogObjItem.activeContentList = document.querySelector('.content-list-active');
   catalogObjItem.activeContentItem = document.querySelector('.content-item-active');
   catalogObjItem.activeColorList = document.querySelector('.color-list-active');
   catalogObjItem.contentBlockList = document.querySelectorAll('.content-block');
   catalogObjItem.colorList = document.querySelectorAll('.content-list-active .color-list');
   clickContentItem()
}
//функция для инициализации элемента контентной части
export function initContentItem(param) {
   if (catalogObjItem.activeContentItem !== null) {
      catalogObjItem.activeContentItem.classList.remove('content-item-active');
      catalogObjItem.activeColorList.classList.remove('color-list-active')
   }
   catalogObjItem.contentItemList[param].classList.add('content-item-active');
   catalogObjItem.colorList[param].classList.add('color-list-active');
   initColor();
   catalogObjItem.contentClosedList[param].addEventListener('click', function () {
      catalogObjItem.contentItemList[param].classList.remove('content-item-active');
      catalogObjItem.colorList[param].classList.remove('color-list-active')
      imageDelete();
   })
   //catalogObjItem.archiElementsBlockList = document.querySelectorAll('.element-item2');
   //catalogObjItem.subElementList = document.querySelectorAll('.element-item2-active .subelement-item');
   //catalogObjItem.content_listList = document.querySelectorAll('.content-block-active .content-list');
   //catalogObjItem.contentItemInfoList = document.querySelectorAll('.content-list-active .catalog-content-item .main__headcatalog-content-item-info');
   //catalogObjItem.contentItemList = document.querySelectorAll('.content-list-active .catalog-content-item');
   //catalogObjItem.contentClosedList = document.querySelectorAll('.content-list-active .main__headcatalog-content-item-closed');
   //catalogObjItem.activeContentBlockList = document.querySelector('.content-block-active');
   //catalogObjItem.activeSubElementActive = document.querySelector('.subelement-item-active');
   //catalogObjItem.activeContentList = document.querySelector('.content-list-active');
   catalogObjItem.activeContentItem = document.querySelector('.content-item-active');
   catalogObjItem.activeColorList = document.querySelector('.color-list-active');
   //catalogObjItem.contentBlockList = document.querySelectorAll('.content-block');
   //catalogObjItem.colorList = document.querySelectorAll('.content-list-active .color-list');

}

export function initLazyCatalogImage() {
   lazyCatalogImage = document.querySelectorAll('.content-list-active img[data-src],.content-list-active source[data-srcset]')
   if (!catalogObjItem.activeContentList.classList.contains('image-lazy')) {
      setTimeout(() => {
         lazyCatalogImage.forEach(item => {
            if (item.dataset.src) {
               item.src = item.dataset.src;
               item.removeAttribute('data-src');
            }
            if (item.dataset.srcset) {
               item.srcset = item.dataset.srcset;
            }
         })

         catalogObjItem.activeContentList.classList.add('image-lazy')

      }, 100);

   }

}





let addCatalog = document.querySelectorAll('.add-catalog');
for (let j = 0; j < addCatalog.length; j++) {
   addCatalog[j].addEventListener('click', function () {
      localStorage.element = 0;
      localStorage.subelement = 0;
   })
}








