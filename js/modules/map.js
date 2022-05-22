



//Обьект с данными для блока с картой
export let cityList = {
   regionCityNames: document.querySelectorAll('.city-item'),
   activeRegionCityNames: document.querySelector('.city-map-active'),
   cityNames: document.querySelectorAll('.footer__map-cities-item'),
   activeCityNames: document.querySelector('.active-cities'),
   shopAdressList: document.querySelectorAll('.shop-item'),
   mapsList: document.querySelectorAll('.map'),
   activeMaps: document.querySelector('.active-map'),
   ymapsList: document.querySelectorAll('.map ymaps'),
   activeYmaps: document.querySelector('.active-map ymaps'),
   shopAddressList: document.querySelectorAll('.active-cities .shop-item'),
   activeShopAddress: document.querySelector('.shop-active'),
   mapCityTitle: document.querySelectorAll('.footer__map-city-title'),
   //города
   mosvowList: [
      document.querySelector('.tvardovscogo'),
      document.querySelector('.nahimovscki'),
      document.querySelector('.dmitrovsckoe'),
      document.querySelector('.krasnogorskii'),
   ],
   belgorodList: [
      document.querySelector('.belgorog1'),
      document.querySelector('.belgorog2'),
   ],
   voronezhList: [
      document.querySelector('.voronezh1'),
      document.querySelector('.voronezh2'),
   ],
   kurskList: [
      document.querySelector('.kursk1'),
      document.querySelector('.kursk2'),
      document.querySelector('.kursk3'),
   ],
   tambowList: [
      document.querySelector('.tambow1')
   ],
   tulaList: [
      document.querySelector('.tula1'),
      document.querySelector('.tula2')
   ],
   sanktPeterburgList: [
      document.querySelector('.sankt-peterburg1'),
      document.querySelector('.sankt-peterburg2'),
      document.querySelector('.sankt-peterburg3'),
   ],
   krasnodarList: [
      document.querySelector('.krasnodar1'),
      document.querySelector('.krasnodar2'),
   ],
   ekaterinburgList: [
      document.querySelector('.ekaterinburg1'),
      document.querySelector('.ekaterinburg2'),
   ],
   tumenList: [
      document.querySelector('.tumen1'),
      document.querySelector('.tumen2'),
      document.querySelector('.tumen3'),
   ],
   novosibirskList: [
      document.querySelector('.novosibirsk1'),
      document.querySelector('.novosibirsk2'),
      document.querySelector('.novosibirsk3'),
   ],
   vladivostokList: [
      document.querySelector('.vladivostok1'),
      document.querySelector('.vladivostok2'),
      document.querySelector('.vladivostok3'),
   ],
   //адреса магазинов в городах
   moscowAdress: [[55.79414806895614, 37.4003865], [55.67157456908803, 37.58521499999999], [55.881984568853746, 37.54766549999997], [55.7523714151267, 37.17144650000001]],
   belgorodAdress: [[55.881984568853746, 37.54766549999997], [55.7523714151267, 37.17144650000001]],
   voronezhAdress: [[55.79414806895614, 37.4003865], [55.67157456908803, 37.58521499999999]],
   kurskAdress: [[55.67157456908803, 37.58521499999999], [55.881984568853746, 37.54766549999997], [55.7523714151267, 37.17144650000001]],
   tambowAdress: [[55.67157456908803, 37.58521499999999]],
   tulaAdress: [[55.881984568853746, 37.54766549999997], [55.7523714151267, 37.17144650000001]],
   sanktPeterburgAdress: [[55.67157456908803, 37.58521499999999], [55.881984568853746, 37.54766549999997], [55.7523714151267, 37.17144650000001]],
   krasnodarAdress: [[55.79414806895614, 37.4003865], [55.7523714151267, 37.17144650000001]],
   ekaterinburgAdress: [[55.67157456908803, 37.58521499999999], [55.881984568853746, 37.54766549999997]],
   tumenAdress: [[55.79414806895614, 37.4003865], [55.67157456908803, 37.58521499999999], [55.881984568853746, 37.54766549999997],],
   novosibirskAdress: [[55.79414806895614, 37.4003865], [55.67157456908803, 37.58521499999999], [55.7523714151267, 37.17144650000001]],
   vladivostokAdress: [[55.79414806895614, 37.4003865], [55.67157456908803, 37.58521499999999], [55.7523714151267, 37.17144650000001]],
}
//список городов
export let cityNamesList = [
   cityList.mosvowList,
   cityList.belgorodList,
   cityList.voronezhList,
   cityList.kurskList,
   cityList.tambowList,
   cityList.tulaList,
   cityList.sanktPeterburgList,
   cityList.krasnodarList,
   cityList.ekaterinburgList,
   cityList.tumenList,
   cityList.novosibirskList,
   cityList.vladivostokList
]
//cписок магазинов
export let cityAdressList = [
   cityList.moscowAdress,
   cityList.belgorodAdress,
   cityList.voronezhAdress,
   cityList.kurskAdress,
   cityList.tambowAdress,
   cityList.tulaAdress,
   cityList.sanktPeterburgAdress,
   cityList.krasnodarAdress,
   cityList.ekaterinburgAdress,
   cityList.tumenAdress,
   cityList.novosibirskAdress,
   cityList.vladivostokAdress,
]
let mapTitle = document.querySelector('.footer__map-region-title');
let mapRegion = document.querySelector('.footer__map-region');
let localIndexCity = localStorage.cityIndex;
if (localIndexCity == undefined) {
   localIndexCity = 0;
}
let localIndexShop = localStorage.shopIndex;
if (localIndexShop == undefined) {
   localIndexShop = 0;
}
// cityList.cityNames[0].classList.add('active-cities')
// cityList.regionCityNames[0].classList.add('city-map-active')
// document.querySelector('.active-cities .map').classList.add('active-map')
// cityList.activeRegionCityNames = document.querySelector('.city-map-active');
// cityList.activeCityNames = document.querySelector('.active-cities');
// cityList.activeMaps = document.querySelector('.active-map');
// cityList.activeShopAddress = document.querySelector('.shop-active');
// cityList.activeMaps.setAttribute('id', 'map-on');
// cityList.shopAddressList = document.querySelectorAll('.active-cities .shop-item');
// cityList.shopAddressList[0].classList.add('shop-active');
// cityList.activeShopAddress = document.querySelector('.shop-active');


localStorage.setItem('cityIndex', 0)
localStorage.setItem('shopIndex', 0)

export let mapShop;
export let mapListCity = [
   '.moscow-container',
   '.belgorod-container',
   '.voronezh-container',
   '.kursk-container',
   '.tambow-container',
   '.tula-container',
   '.sankt-peterburg-container',
   '.krasnodar-container',
   '.ekaterinburg-container',
   '.tumen-container',
   '.novosibirsk-container',
   '.vladivostok-container',
]
let activeMapContainer;
let activeMapSlide;
let mapPaginationBullet;
export function newMap(params) {
   mapShop = new Swiper(mapListCity[params], {
      //Стрелки 
      // navigation: {
      //    nextEl: '.proects-swiper-button-next',
      //    prevEl: '.proects-swiper-button-prev'
      // },
      //Булеты, текущее положение , прогрессбар
      pagination: {
         el: '.map-pagination',
         //Буллеты 
         clickable: true,
         //Динамические буллеты
         //dynamicBullets: true,
         //Кастомные буллеты 
         // renderBullet: function (index, className) {
         //    return '<span class="' + className + '">' + (index + 1) + '</span>';
         // }
      },

      //фракция
      //type: 'fraction',
      //кастомный вывод фракции
      // renderFraction: function (currentClass, totalClass) {
      //    return 'Фото <span class="' + currentClass + '"></span>' +
      //      ' из ' +
      //     '<span class="' + totalClass + '"></span>';
      // }
      //Прогресс бар
      //type: 'progressbar'
      //},


      //Скролл 
      //scrollbar: {
      //   el: '.swiper-scrollbar',
      //Возможность перетаскивать скролл
      // draggable: true
      //},

      // Включение/Отключение перетаскивания на пк
      simulateTouch: true,
      //Чувствительность свайпа 
      touchRatio: 1,
      //Угол срабатывания свайпа/перетаскивания
      touchAngle: 45,
      //Курсор перетаскивания
      grabCursor: true,

      //Переключение при клике на слайд
      slideToClickedSlide: true,

      //Навишация по хешу
      // hashNavigation: {
      //    //Отслеживать состояние
      //    watchState: false
      // },

      //Управление клавиатурой 
      keyboard: {
         //Включить/Выключить
         enabled: false,
         //Включить/Выключить только когда слайдер в пределах вьюпорта
         onlyInViewport: true,
         //Включить/Выключить управление клавишами pageUp , pageDown
         pageUpDown: true,
      },

      //Управление колесом мыши 
      // mousewheel: {
      //    //Чувствительность колеса мыши 
      //    sensitivity: 1,
      //    //Класс обьекта на котором будет срабатывать прокрутка мыши 
      //    eventsTarget: ".main__slider"
      // },

      //Автовысота 
      autoHeight: false,

      //Количество слайдов для показа
      slidesPerView: 1,
      //Отключение функционала слайда если слайдов меньше чем нужно
      watchOverflow: true,

      //Отступ между слайдами
      // spaceBetween: 31,

      //Количество пролистываемых слайдов 
      slidesPerGroup: 1,

      //Активный слайд по центру 
      //centeredSlides: true,

      //Стартовый слайд
      initialSlide: localIndexShop,//начинается с 0

      //Мультирадяность 
      // slidesPerColumn: 1,

      //Бесконечный слайдер 
      //loop: true,

      //Количество дублирующих слайдов
      //loopedSlides: 10,

      //Свободный режим 
      //freeMode: true,

      //Автопрокрутка
      //autoplay: {
      //Пауза между прокруткой 
      // delay: 1000,
      //Закончить на последнем слайде
      //stopOnLastSlide: true,
      //Отключить после ручного переключения
      //disableOnInteraction: false
      //},

      //Скорость 
      speed: 200,

      //Вертикальный слайдер
      //direction: "horizontal", //для вертикали 'vertical'

      //Еффекты переключения слайдов
      //Листание 
      effect: 'slide',

      //Еффекты переключения слайдов
      //Смена прозрачности
      // effect: 'fade',
      // //Дополнения к fade
      // fadeEffect: {
      //    //Параллельная смена прозрачности
      //    crossFade: true
      // },

      //Еффекты переключения слайдов
      //Переворот 
      // effect: 'flip',
      // //Дополнения к flip 
      // flipEffect: {
      //    //Тень 
      //    slideShadows: true,
      //    //Показ только активного слайда
      //    limitRotation: true,
      // },

      //Еффекты переключения слайдов
      //Куб
      // effect: 'cube',
      // //Дополнения к cube
      // cubeEffect: {
      //    //Настройки тени 
      //    slideShadows: true,
      //    shadow: true,
      //    shadowOffset: 20,
      //    shadowScale: 0.94
      // }




      //Еффекты переключения слайдов
      //Поток 
      // effect: 'coverflow',
      // //Дополнение к coverflow
      // coverflowEffect: {
      //    //Угол
      //    rotate: 20,
      //    //Наложение 
      //    stretch: 50,
      //    //Тень 
      //    slideShadows: true
      // },

      //Брекпоинты(адаптив)
      breakpoints: {
         320: {


         },
         700: {


         },
         992: {

         }

      },

      //Отключить предзагрузку картинок 
      // preloadImages: false,
      // //Lazy Loading(подгрузка картинок)
      //lazy: {
      //    //Подгружать на старте переключения слайда
      //loadOnTransitionStart: true,
      //    //Подгрузить предыдущую и следующую картинки 
      //    loadPrevNext: false,
      //},

      // //Слежка за видимыми слайдами 
      // watchSlidesProgress: true,
      // //Добавление класса видимым слайдам 
      // watchSlidesVisibility: true,

      //Миниатюры (превью) // необходимо добавлять блоки мини слайдера в html
      // thumbs: {
      //    //Свайпер с миниатюрами и его настройки
      //    swiper: {
      //       el: '' /* внутри кавычек название класса мини слайдера */,
      //       slidesPerView: 5
      //    }
      // }

      //Обновить свайпер при изменении элементов слайдера
      observer: true,
      //Обновить свайпер при изменении родительских элементов слайдера
      observeParents: true,
      //Обновить свайпер при изменении дочерних элементов слайда
      observeSlideChildren: true,
   });
   setTimeout(() => {
      mapPaginationBullet = document.querySelectorAll('.map-pagination .swiper-pagination-bullet');
      activeMapContainer = document.querySelector('.active-cities .swiper-wrapper');
      activeMapSlide = document.querySelectorAll('.active-cities .swiper-wrapper .swiper-slide');
      initMapSlideActive(mapPaginationBullet, activeMapSlide, activeMapContainer)
   }, 50);
}
export function deleteMap() {
   mapShop.destroy()
}






//переменная для указаний координат магазинов
export let numberI = cityAdressList[localIndexCity][0];
//Функция для вызова яндекс карты

export function init() {
   let map = new ymaps.Map('map-on', {
      center: numberI,
      zoom: 14
   });
   let placemark = new ymaps.Placemark(numberI, {}, {
      iconLayout: "default#image",//указание на использование своей изображения вместо маркера
      iconImageHref: '../img/metka.svg',//путь к изображению
      iconImageSize: [30, 30],//размеры изображения
      iconImageOffset: [0, 0]//отступ от центра
   });
   map.controls.remove('geolocationControl'); // удаляем геолокацию
   map.controls.remove('searchControl'); // удаляем поиск
   map.controls.remove('trafficControl'); // удаляем контроль трафика
   map.controls.remove('typeSelector'); // удаляем тип
   map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
   map.controls.remove('zoomControl'); // удаляем контрол зуммирования
   map.controls.remove('rulerControl'); // удаляем контрол правил
   //map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
   map.geoObjects.add(placemark);//Добавляем метку на карте
   cityList.activeYmaps = document.querySelector(".active-map ymaps");
}
export function clickCity() {
   for (let i = 0; i < cityList.regionCityNames.length; i++) {
      cityList.regionCityNames[i].addEventListener('click', function () {
         if (!cityList.regionCityNames[i].classList.contains('city-map-active')) {
            initCity(i)
            clickShop()
            setTimeout(() => {
               localStorage.cityIndex = i;
               localStorage.shopIndex = 0;
            }, 30);
            mapTitle.innerHTML = cityList.mapCityTitle[i].innerHTML
            if (window.innerWidth <= 700) {
               if (mapShop !== undefined) {
                  deleteMap()
               }
               setTimeout(() => {
                  newMap(i)
               }, 50);
               //mapRegion.classList.remove('map-region-active')
               //mapTitle.classList.remove('region-title-active')
            }
         }
      })
   }
}
export function clickShop() {
   for (let d = 0; d < cityList.shopAddressList.length; d++) {
      cityList.shopAddressList[d].addEventListener('click', function () {
         if (window.innerWidth > 700) {
            initShopAdress(d)
            localStorage.shopIndex = d;
         }
      })
   }
}
let indexCity = 0;
function initCity(param) {
   cityList.activeRegionCityNames.classList.remove('city-map-active');
   cityList.activeCityNames.classList.remove('active-cities');
   //cityList.activeMaps.setAttribute('id', 'map-off');
   cityList.activeMaps.removeAttribute('id');
   cityList.activeMaps.classList.remove('active-map');
   cityList.activeShopAddress.classList.remove('shop-active')
   cityList.regionCityNames[param].classList.add('city-map-active');
   cityList.cityNames[param].classList.add('active-cities');
   cityList.mapsList[param].setAttribute('id', 'map-on')
   cityList.mapsList[param].classList.add('active-map')
   cityList.shopAddressList = document.querySelectorAll('.active-cities .shop-item');
   cityList.shopAddressList[0].classList.add('shop-active')
   cityList.activeRegionCityNames = document.querySelector('.city-map-active');
   cityList.activeCityNames = document.querySelector('.active-cities');
   cityList.activeMaps = document.querySelector('.active-map');
   cityList.activeShopAddress = document.querySelector('.shop-active');
   numberI = cityAdressList[param][0];

   cityList.activeYmaps.remove();

   setTimeout(() => {
      ymaps.ready(init);
   }, 70);
   cityList.activeYmaps = document.querySelector('.active-map ymaps')
   indexCity = param;
}
function initShopAdress(param) {
   setTimeout(() => {
      cityList.activeShopAddress.classList.remove('shop-active');
      cityList.shopAddressList[param].classList.add('shop-active');
      cityList.activeYmaps = document.querySelector(".active-map ymaps");
      cityList.activeShopAddress = document.querySelector('.shop-active');
      numberI = cityAdressList[indexCity][param];
      cityList.activeYmaps.remove();
      setTimeout(() => {
         ymaps.ready(init);
      }, 70);
      cityList.activeYmaps = document.querySelector('.active-map ymaps')

   }, 50);
}
export function initYmaps() {
   ymaps.ready(init);
}
export function initMapSlideActive(bullets, slides, wrapper) {
   let indexN = 0;
   if (bullets.length == 2) {
      bullets[0].classList.add('bullet')
      bullets[1].classList.add('bullet-medium')
      for (let i = 0; i < bullets.length; i++) {
         bullets[i].addEventListener('click', function () {
            if (!bullets[i].classList.contains('bullet-active')) {
               for (let k = 0; k < bullets.length; k++) {
                  bullets[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
               }
               bullets[i].classList.add('bullet-active')
            }
            if (i == 0) {
               bullets[0].classList.add('bullet')
               bullets[1].classList.add('bullet-medium')
            }
            if (i == 1) {
               bullets[0].classList.add('bullet-medium')
               bullets[1].classList.add('bullet')
            }
         })
      }
      wrapper.addEventListener('transitionrun', function () {
         for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('swiper-slide-active')) {
               initShopAdress(i)
               if (!bullets[i].classList.contains('bullet-active')) {
                  for (let k = 0; k < bullets.length; k++) {
                     bullets[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
                  }
                  bullets[i].classList.add('bullet-active')
               }
               if (i == 0) {
                  bullets[0].classList.add('bullet')
                  bullets[1].classList.add('bullet-medium')
               }
               if (i == 1) {
                  bullets[0].classList.add('bullet-medium')
                  bullets[1].classList.add('bullet')
               }
            }
         }

      })
   }
   if (bullets.length == 3) {
      bullets[0].classList.add('bullet')
      bullets[1].classList.add('bullet-medium')
      bullets[2].classList.add('bullet-small')
      for (let i = 0; i < bullets.length; i++) {
         bullets[i].addEventListener('click', function () {
            if (!bullets[i].classList.contains('bullet-active')) {
               for (let k = 0; k < bullets.length; k++) {
                  bullets[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
               }
               bullets[i].classList.add('bullet-active')
            }
            if (i == 0) {
               bullets[0].classList.add('bullet')
               bullets[1].classList.add('bullet-medium')
               bullets[2].classList.add('bullet-small')
            }
            if (i == 1) {
               bullets[0].classList.add('bullet-medium')
               bullets[1].classList.add('bullet')
               bullets[2].classList.add('bullet-medium')
            }
            if (i == 2) {
               bullets[0].classList.add('bullet-small')
               bullets[1].classList.add('bullet-medium')
               bullets[2].classList.add('bullet')
            }

         })
      }
      wrapper.addEventListener('transitionrun', function () {
         for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('swiper-slide-active')) {
               initShopAdress(i)
               if (!bullets[i].classList.contains('bullet-active')) {
                  for (let k = 0; k < bullets.length; k++) {
                     bullets[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
                  }
                  bullets[i].classList.add('bullet-active')
               }
               if (i == 0) {
                  bullets[0].classList.add('bullet')
                  bullets[1].classList.add('bullet-medium')
                  bullets[2].classList.add('bullet-small')
               }
               if (i == 1) {
                  bullets[0].classList.add('bullet-medium')
                  bullets[1].classList.add('bullet')
                  bullets[2].classList.add('bullet-medium')
               }
               if (i == 2) {
                  bullets[0].classList.add('bullet-small')
                  bullets[1].classList.add('bullet-medium')
                  bullets[2].classList.add('bullet')
               }
            }

         }
      })
   }
   if (bullets.length == 4) {
      bullets[0].classList.add('bullet')
      bullets[1].classList.add('bullet')
      bullets[2].classList.add('bullet-medium')
      bullets[3].classList.add('bullet-small')
      for (let i = 0; i < bullets.length; i++) {
         bullets[i].addEventListener('click', function () {
            if (!bullets[i].classList.contains('bullet-active')) {
               for (let k = 0; k < bullets.length; k++) {
                  bullets[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
               }
               bullets[i].classList.add('bullet-active')
            }
            if (i > indexN) {
               indexN = indexN + (i - indexN);
               if (i == 1) {
                  if (bullets[i + 1] !== undefined) {
                     bullets[i + 1].classList.add('bullet-medium')
                  }
                  if (bullets[i + 2] !== undefined) {
                     bullets[i + 2].classList.add('bullet-small')
                  }
                  bullets[i].classList.add('bullet')
                  if (bullets[i - 1] !== undefined) {
                     bullets[i - 1].classList.add('bullet')
                  }
               }
               if (i == 2) {
                  if (bullets[i + 1] !== undefined) {
                     bullets[i + 1].classList.add('bullet-medium')
                  }
                  bullets[i].classList.add('bullet')
                  if (bullets[i - 1] !== undefined) {
                     bullets[i - 1].classList.add('bullet')
                     bullets[i - 2].classList.add('bullet-medium')
                  }
               }
               if (i == bullets.length - 1) {
                  bullets[i].classList.add('bullet')
                  if (bullets[i - 2] !== undefined) {
                     bullets[i - 1].classList.add('bullet')
                     bullets[i - 2].classList.add('bullet-medium')
                  }
                  if (bullets[i - 3] !== undefined) {
                     bullets[i - 3].classList.add('bullet-small')
                  }


               }

            }
            if (i < indexN) {
               if (i == 2) {
                  indexN = indexN + (i - indexN);
                  if (bullets[i - 1] !== undefined) {
                     bullets[i - 2].classList.add('bullet-small')
                     bullets[i - 1].classList.add('bullet-medium')
                     bullets[i].classList.add('bullet')
                     bullets[i + 1].classList.add('bullet')
                  }
               }
               if (i == 1) {
                  indexN = indexN + (i - indexN);
                  if (bullets[i - 1] !== undefined) {
                     bullets[i - 1].classList.add('bullet-medium')
                     bullets[i].classList.add('bullet')
                     bullets[i + 1].classList.add('bullet')
                     bullets[i + 2].classList.add('bullet-medium')
                  }
               }
               if (i == 0) {
                  indexN = indexN + (i - indexN);
                  bullets[i].classList.add('bullet')
                  bullets[i + 1].classList.add('bullet')
                  bullets[i + 2].classList.add('bullet-medium')
                  bullets[i + 3].classList.add('bullet-small')
               }
            }
            if (i == 0) {
               bullets[i].classList.add('bullet')
               bullets[i + 1].classList.add('bullet')
               bullets[i + 2].classList.add('bullet-medium')
               bullets[i + 3].classList.add('bullet-small')
            }
         })
      }
      wrapper.addEventListener('transitionrun', function () {
         for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('swiper-slide-active')) {
               initShopAdress(i)
               if (!bullets[i].classList.contains('bullet-active')) {
                  for (let k = 0; k < bullets.length; k++) {
                     bullets[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
                  }
                  bullets[i].classList.add('bullet-active')
               }
               if (i > indexN) {
                  indexN = indexN + (i - indexN);
                  if (i == 1) {
                     if (bullets[i + 1] !== undefined) {
                        bullets[i + 1].classList.add('bullet-medium')
                     }
                     if (bullets[i + 2] !== undefined) {
                        bullets[i + 2].classList.add('bullet-small')
                     }
                     bullets[i].classList.add('bullet')
                     if (bullets[i - 1] !== undefined) {
                        bullets[i - 1].classList.add('bullet')
                     }
                  }
                  if (i == 2) {
                     if (bullets[i + 1] !== undefined) {
                        bullets[i + 1].classList.add('bullet-medium')
                     }
                     bullets[i].classList.add('bullet')
                     if (bullets[i - 1] !== undefined) {
                        bullets[i - 1].classList.add('bullet')
                        bullets[i - 2].classList.add('bullet-medium')
                     }
                  }
                  if (i == bullets.length - 1) {
                     bullets[i].classList.add('bullet')
                     if (bullets[i - 2] !== undefined) {
                        bullets[i - 1].classList.add('bullet')
                        bullets[i - 2].classList.add('bullet-medium')
                     }
                     if (bullets[i - 3] !== undefined) {
                        bullets[i - 3].classList.add('bullet-small')
                     }


                  }

               }
               if (i < indexN) {
                  if (i == 2) {
                     indexN = indexN + (i - indexN);
                     if (bullets[i - 1] !== undefined) {
                        bullets[i - 2].classList.add('bullet-small')
                        bullets[i - 1].classList.add('bullet-medium')
                        bullets[i].classList.add('bullet')
                        bullets[i + 1].classList.add('bullet')
                     }
                  }
                  if (i == 1) {
                     indexN = indexN + (i - indexN);
                     if (bullets[i - 1] !== undefined) {
                        bullets[i - 1].classList.add('bullet-medium')
                        bullets[i].classList.add('bullet')
                        bullets[i + 1].classList.add('bullet')
                        bullets[i + 2].classList.add('bullet-medium')
                     }
                  }
                  if (i == 0) {
                     indexN = indexN + (i - indexN);
                     bullets[i].classList.add('bullet')
                     bullets[i + 1].classList.add('bullet')
                     bullets[i + 2].classList.add('bullet-medium')
                     bullets[i + 3].classList.add('bullet-small')
                  }
               }
               if (i == 0) {
                  bullets[i].classList.add('bullet')
                  bullets[i + 1].classList.add('bullet')
                  bullets[i + 2].classList.add('bullet-medium')
                  bullets[i + 3].classList.add('bullet-small')
               }
            }
         }

      })
   }
   if (itemList.length >= 5) {
      bullets[0].classList.add('bullet')
      bullets[1].classList.add('bullet')
      bullets[2].classList.add('bullet')
      bullets[3].classList.add('bullet-medium')
      bullets[4].classList.add('bullet-small')
      for (let i = 0; i < bullets.length; i++) {
         bullets[i].addEventListener('click', function () {
            if (!bullets[i].classList.contains('bullet-active')) {
               for (let k = 0; k < bullets.length; k++) {
                  bullets[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
               }
               bullets[i].classList.add('bullet-active')
            }
            if (i > indexN) {
               indexN = indexN + (i - indexN);
               if (i < bullets.length - 2 && i > 1) {
                  if (bullets[i + 1] !== undefined) {
                     bullets[i + 1].classList.add('bullet-medium')
                  }
                  if (bullets[i + 2] !== undefined) {
                     bullets[i + 2].classList.add('bullet-small')
                  }
                  bullets[i].classList.add('bullet')
                  if (bullets[i - 2] !== undefined) {
                     bullets[i - 1].classList.add('bullet')
                     bullets[i - 2].classList.add('bullet')
                  }
               }
               if (i == bullets.length - 2) {
                  if (bullets[i + 1] !== undefined) {
                     bullets[i + 1].classList.add('bullet-medium')
                  }
                  if (bullets[i + 2] !== undefined) {
                     bullets[i + 2].classList.add('bullet-small')
                  }
                  bullets[i].classList.add('bullet')
                  if (bullets[i - 2] !== undefined) {
                     bullets[i - 1].classList.add('bullet')
                     bullets[i - 2].classList.add('bullet')
                     bullets[i - 3].classList.add('bullet-medium')
                  }
               }
               if (i == bullets.length - 1) {
                  if (bullets[i + 1] !== undefined) {
                     bullets[i + 1].classList.add('bullet-medium')
                  }
                  if (bullets[i + 2] !== undefined) {
                     bullets[i + 2].classList.add('bullet-small')
                  }
                  bullets[i].classList.add('bullet')
                  if (bullets[i - 2] !== undefined) {
                     bullets[i - 1].classList.add('bullet')
                     bullets[i - 2].classList.add('bullet')
                  }
                  if (bullets[i - 3] !== undefined) {
                     bullets[i - 3].classList.add('bullet-medium')
                  }
                  if (bullets[i - 4] !== undefined) {
                     bullets[i - 4].classList.add('bullet-small')
                  }

               }
               if (i == 1) {
                  indexN = indexN + (i - indexN);
                  if (bullets[i - 1] !== undefined) {
                     bullets[i - 1].classList.add('bullet')
                     bullets[i].classList.add('bullet')
                     bullets[i + 1].classList.add('bullet')
                     bullets[i + 2].classList.add('bullet-medium')
                     bullets[i + 3].classList.add('bullet-small')
                  }
               }
            }
            if (i < indexN) {
               if (i > 1 && i < bullets.length - 2) {
                  indexN = indexN + (i - indexN);
                  if (bullets[i - 1] !== undefined) {
                     bullets[i - 1].classList.add('bullet-medium')
                  }
                  if (bullets[i - 2] !== undefined) {
                     bullets[i - 2].classList.add('bullet-small')
                  }
                  bullets[i].classList.add('bullet')
                  bullets[i + 1].classList.add('bullet')
                  bullets[i + 2].classList.add('bullet')
               }
               if (i == 1) {
                  indexN = indexN + (i - indexN);
                  if (bullets[i - 1] !== undefined) {
                     bullets[i - 1].classList.add('bullet-medium')
                     bullets[i].classList.add('bullet')
                     bullets[i + 1].classList.add('bullet')
                     bullets[i + 2].classList.add('bullet')
                     bullets[i + 3].classList.add('bullet-medium')
                  }

               }
               if (i == 0) {
                  indexN = indexN + (i - indexN);
                  bullets[i].classList.add('bullet')
                  bullets[i + 1].classList.add('bullet')
                  bullets[i + 2].classList.add('bullet')
                  bullets[i + 3].classList.add('bullet-medium')
                  bullets[i + 4].classList.add('bullet-small')

               }
               if (i == bullets.length - 2) {
                  indexN = indexN + (i - indexN);
                  if (bullets[i + 1] !== undefined) {
                     bullets[i + 1].classList.add('bullet')
                  }
                  if (bullets[i + 2] !== undefined) {
                     bullets[i + 2].classList.add('bullet')
                  }
                  bullets[i].classList.add('bullet')
                  if (bullets[i - 2] !== undefined) {
                     bullets[i - 1].classList.add('bullet')
                     bullets[i - 2].classList.add('bullet-medium')
                     bullets[i - 3].classList.add('bullet-small')
                  }
               }

            }
            if (i == 0) {
               bullets[i].classList.add('bullet')
               bullets[i + 1].classList.add('bullet')
               bullets[i + 2].classList.add('bullet')
               bullets[i + 3].classList.add('bullet-medium')
               bullets[i + 4].classList.add('bullet-small')
            }
         })
      }
      wrapper.addEventListener('transitionrun', function () {
         for (let i = 0; i < itemList2.length; i++) {
            if (itemList2[i].classList.contains('swiper-slide-active')) {
               initShopAdress(i)
               if (!bullets[i].classList.contains('bullet-active')) {
                  for (let k = 0; k < bullets.length; k++) {
                     bullets[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
                  }
                  bullets[i].classList.add('bullet-active')
               }
               if (i > indexN) {
                  indexN = indexN + (i - indexN);
                  if (i < bullets.length - 2 && i > 1) {
                     if (bullets[i + 1] !== undefined) {
                        bullets[i + 1].classList.add('bullet-medium')
                     }
                     if (bullets[i + 2] !== undefined) {
                        bullets[i + 2].classList.add('bullet-small')
                     }
                     bullets[i].classList.add('bullet')
                     if (bullets[i - 2] !== undefined) {
                        bullets[i - 1].classList.add('bullet')
                        bullets[i - 2].classList.add('bullet')
                     }
                  }
                  if (i == bullets.length - 2) {
                     if (bullets[i + 1] !== undefined) {
                        bullets[i + 1].classList.add('bullet-medium')
                     }
                     if (bullets[i + 2] !== undefined) {
                        bullets[i + 2].classList.add('bullet-small')
                     }
                     bullets[i].classList.add('bullet')
                     if (bullets[i - 2] !== undefined) {
                        bullets[i - 1].classList.add('bullet')
                        bullets[i - 2].classList.add('bullet')
                        bullets[i - 3].classList.add('bullet-medium')
                     }
                  }
                  if (i == bullets.length - 1) {
                     if (bullets[i + 1] !== undefined) {
                        bullets[i + 1].classList.add('bullet-medium')
                     }
                     if (bullets[i + 2] !== undefined) {
                        bullets[i + 2].classList.add('bullet-small')
                     }
                     bullets[i].classList.add('bullet')
                     if (bullets[i - 2] !== undefined) {
                        bullets[i - 1].classList.add('bullet')
                        bullets[i - 2].classList.add('bullet')
                     }
                     if (bullets[i - 3] !== undefined) {
                        bullets[i - 3].classList.add('bullet-medium')
                     }
                     if (bullets[i - 4] !== undefined) {
                        bullets[i - 4].classList.add('bullet-small')
                     }

                  }
                  if (i == 1) {
                     indexN = indexN + (i - indexN);
                     if (bullets[i - 1] !== undefined) {
                        bullets[i - 1].classList.add('bullet')
                        bullets[i].classList.add('bullet')
                        bullets[i + 1].classList.add('bullet')
                        bullets[i + 2].classList.add('bullet-medium')
                        bullets[i + 3].classList.add('bullet-small')
                     }
                  }
               }
               if (i < indexN) {
                  if (i > 1 && i < bullets.length - 2) {
                     indexN = indexN + (i - indexN);
                     if (bullets[i - 1] !== undefined) {
                        bullets[i - 1].classList.add('bullet-medium')
                     }
                     if (bullets[i - 2] !== undefined) {
                        bullets[i - 2].classList.add('bullet-small')
                     }
                     bullets[i].classList.add('bullet')
                     bullets[i + 1].classList.add('bullet')
                     bullets[i + 2].classList.add('bullet')
                  }
                  if (i == 1) {
                     indexN = indexN + (i - indexN);
                     if (bullets[i - 1] !== undefined) {
                        bullets[i - 1].classList.add('bullet-medium')
                        bullets[i].classList.add('bullet')
                        bullets[i + 1].classList.add('bullet')
                        bullets[i + 2].classList.add('bullet')
                        bullets[i + 3].classList.add('bullet-medium')
                     }

                  }
                  if (i == 0) {
                     indexN = indexN + (i - indexN);
                     bullets[i].classList.add('bullet')
                     bullets[i + 1].classList.add('bullet')
                     bullets[i + 2].classList.add('bullet')
                     bullets[i + 3].classList.add('bullet-medium')
                     bullets[i + 4].classList.add('bullet-small')

                  }
                  if (i == bullets.length - 2) {
                     indexN = indexN + (i - indexN);
                     if (bullets[i + 1] !== undefined) {
                        bullets[i + 1].classList.add('bullet')
                     }
                     if (bullets[i + 2] !== undefined) {
                        bullets[i + 2].classList.add('bullet')
                     }
                     bullets[i].classList.add('bullet')
                     if (bullets[i - 2] !== undefined) {
                        bullets[i - 1].classList.add('bullet')
                        bullets[i - 2].classList.add('bullet-medium')
                        bullets[i - 3].classList.add('bullet-small')
                     }
                  }

               }
               if (i == 0) {
                  bullets[i].classList.add('bullet')
                  bullets[i + 1].classList.add('bullet')
                  bullets[i + 2].classList.add('bullet')
                  bullets[i + 3].classList.add('bullet-medium')
                  bullets[i + 4].classList.add('bullet-small')
               }
            }
         }

      })
   }

}

mapTitle.addEventListener('click', function () {
   mapRegion.classList.toggle('map-region-active')
   mapTitle.classList.toggle('region-title-active')
})


