

new Swiper('.main__slider-block', {
   //Стрелки 
   navigation: {
      nextEl: '.slider-swiper-button-next',
      prevEl: '.slider-swiper-button-prev'
   },
   //Булеты, текущее положение , прогрессбар
   // pagination: {
   // el: '.swiper-pagination',
   //Буллеты 
   // clickable: true,
   // //Динамические буллеты
   // dynamicBullets: true,
   //Кастомные буллеты 
   // renderBullet: function (index, className) {
   //    return '<span class="' + className + '">' + (index + 1) + '</span>';
   // },
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
   slideToClickedSlide: false,

   //Навишация по хешу
   // hashNavigation: {
   //    //Отслеживать состояние
   //    watchState: true
   // },

   //Управление клавиатурой 
   keyboard: {
      //Включить/Выключить
      enabled: true,
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
   slidesPerView: 3,
   //Отключение функционала слайда если слайдов меньше чем нужно
   watchOverflow: true,

   //Отступ между слайдами
   spaceBetween: 31,

   //Количество пролистываемых слайдов 
   slidesPerGroup: 1,

   //Активный слайд по центру 
   //centeredSlides: true,

   //Стартовый слайд
   initialSlide: 0,//начинается с 0

   //Мультирадяность 
   slidesPerColumn: 1,

   //Бесконечный слайдер 
   loop: true,

   //Количество дублирующих слайдов
   loopedSlides: 10,

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
   speed: 300,

   //Вертикальный слайдер
   direction: "horizontal", //для вертикали 'vertical'

   //Еффекты переключения слайдов
   //Листание 
   //effect: 'slide',

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
         slidesPerView: 1,
         spaceBetween: 10,



      },
      701: {
         slidesPerView: 2,
         spaceBetween: 15,

      },
      993: {
         slidesPerView: 3,
         spaceBetween: 10,

      },

      1301: {
         spaceBetween: 31,
         slidesPerView: 3,
      }

   },

   //Отключить предзагрузку картинок 
   preloadImages: false,
   //Lazy Loading(подгрузка картинок)
   lazy: {
      //Подгружать на старте переключения слайда
      loadOnTransitionStart: false,
      //Подгрузить предыдущую и следующую картинки 
      loadPrevNext: false,

   },
   //Слежка за видимыми слайдами 
   watchSlidesProgress: true,
   //Добавление класса видимым слайдам 
   watchSlidesVisibility: true,

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

//проекты
let proects = new Swiper('.main__proects-content', {
   //Стрелки 
   navigation: {
      nextEl: '.proects-swiper-button-next',
      prevEl: '.proects-swiper-button-prev'
   },
   //Булеты, текущее положение , прогрессбар

   pagination: {
      el: '.swiper-pagination-proects',
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
   centeredSlides: true,

   //Стартовый слайд
   //initialSlide: 0,//начинается с 0

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
   speed: 300,

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
   preloadImages: false,
   // //Lazy Loading(подгрузка картинок)
   lazy: {
      //    //Подгружать на старте переключения слайда
      //loadOnTransitionStart: true,
      //    //Подгрузить предыдущую и следующую картинки 
      loadPrevNext: false,
   },

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
let textProects = new Swiper('.main__proects-names', {
   //Стрелки 
   // navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev'
   // },
   //Булеты, текущее положение , прогрессбар
   pagination: {
      el: '.swiper-pagination',
      //Буллеты 
      clickable: true,
      // //Динамические буллеты
      // dynamicBullets: true,
      //Кастомные буллеты 
      // renderBullet: function (index, className) {
      //    return '<span class="' + className + '">' + (index + 1) + '</span>';
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
   simulateTouch: false,
   //Чувствительность свайпа 
   touchRatio: 1,
   //Угол срабатывания свайпа/перетаскивания
   touchAngle: 45,
   //Курсор перетаскивания
   grabCursor: true,

   //Переключение при клике на слайд
   slideToClickedSlide: false,

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
   //initialSlide: 0,//начинается с 0

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
   speed: 400,

   //Вертикальный слайдер
   //direction: "horizontal", //для вертикали 'vertical'

   //Еффекты переключения слайдов
   //Листание 
   //effect: 'slide',

   //Еффекты переключения слайдов
   //Смена прозрачности
   effect: 'fade',
   //Дополнения к fade
   fadeEffect: {
      //Параллельная смена прозрачности
      crossFade: true
   },

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
   // breakpoints: {
   //    320: {

   //    },
   //    480: {

   //    },
   //    992: {

   //    }

   // },

   //Отключить предзагрузку картинок 
   // preloadImages: false,
   // //Lazy Loading(подгрузка картинок)
   // lazy: {
   //    //Подгружать на старте переключения слайда
   //    loadOnTransitionStart: false,
   //    //Подгрузить предыдущую и следующую картинки 
   //    loadPrevNext: false,
   // },

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

proects.controller.control = textProects;
textProects.controller.control = proects;

//команда
let team = new Swiper('.main__team-slider-container', {
   //Стрелки 
   navigation: {
      nextEl: '.team-swiper-button-next',
      prevEl: '.team-swiper-button-prev'
   },
   //Булеты, текущее положение , прогрессбар
   pagination: {
      el: '.team-pagination',
      //Буллеты 
      clickable: true,
      // //Динамические буллеты
      //dynamicBullets: true,
      //Кастомные буллеты 
      // renderBullet: function (index, className) {
      //    return '<span class="' + className + '">' + (index + 1) + '</span>';
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
      enabled: true,
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
   slidesPerView: 3,
   //Отключение функционала слайда если слайдов меньше чем нужно
   watchOverflow: true,

   //Отступ между слайдами
   spaceBetween: 30,

   //Количество пролистываемых слайдов 
   slidesPerGroup: 1,

   //Активный слайд по центру 
   //centeredSlides: false,

   //Стартовый слайд
   initialSlide: 0,//начинается с 0

   //Мультирадяность 
   slidesPerColumn: 1,

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
   speed: 300,

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
      0: {
         slidesPerView: 1,


      },
      701: {
         slidesPerView: 2,
         spaceBetween: 15,

      },
      993: {
         slidesPerView: 3,
         spaceBetween: 10,

      },
      1301: {
         spaceBetween: 30,
         slidesPerView: 3,
      }


   },

   //Отключить предзагрузку картинок 
   preloadImages: false,
   // //Lazy Loading(подгрузка картинок)
   lazy: {
      //    //Подгружать на старте переключения слайда
      //    loadOnTransitionStart: false,
      //    //Подгрузить предыдущую и следующую картинки 
      loadPrevNext: true,
   },

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


// function initPaginationTest(itemList, transformIndex, itemList2, itemList3) {

//    let number = 0;
//    let indexN = 0;
//    itemList[0].classList.add('bullet')
//    itemList[1].classList.add('bullet')
//    itemList[2].classList.add('bullet')
//    itemList[3].classList.add('bullet-medium')
//    itemList[4].classList.add('bullet-small')


//    for (let i = 0; i < itemList.length; i++) {
//       itemList[i].addEventListener('click', function () {
//          if (!itemList[i].classList.contains('bullet-active')) {
//             for (let k = 0; k < itemList.length; k++) {
//                itemList[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
//             }
//             itemList[i].classList.add('bullet-active')
//          }
//          if (i > indexN) {
//             indexN = indexN + (i - indexN);
//             number = (indexN - 2) * transformIndex;
//             if (i < itemList.length - 2 && i > 1) {
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                if (itemList[i + 1] !== undefined) {
//                   itemList[i + 1].classList.add('bullet-medium')
//                }
//                if (itemList[i + 2] !== undefined) {
//                   itemList[i + 2].classList.add('bullet-small')
//                }
//                itemList[i].classList.add('bullet')
//                if (itemList[i - 2] !== undefined) {
//                   itemList[i - 1].classList.add('bullet')
//                   itemList[i - 2].classList.add('bullet')
//                }
//             }
//             if (i == itemList.length - 2) {
//                number = (indexN - 3) * transformIndex;
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                if (itemList[i + 1] !== undefined) {
//                   itemList[i + 1].classList.add('bullet-medium')
//                }
//                if (itemList[i + 2] !== undefined) {
//                   itemList[i + 2].classList.add('bullet-small')
//                }
//                itemList[i].classList.add('bullet')
//                if (itemList[i - 2] !== undefined) {
//                   itemList[i - 1].classList.add('bullet')
//                   itemList[i - 2].classList.add('bullet')
//                   itemList[i - 3].classList.add('bullet-medium')
//                }
//             }
//             if (i == itemList.length - 1) {
//                number = (indexN - 4) * transformIndex;
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                if (itemList[i + 1] !== undefined) {
//                   itemList[i + 1].classList.add('bullet-medium')
//                }
//                if (itemList[i + 2] !== undefined) {
//                   itemList[i + 2].classList.add('bullet-small')
//                }
//                itemList[i].classList.add('bullet')
//                if (itemList[i - 2] !== undefined) {
//                   itemList[i - 1].classList.add('bullet')
//                   itemList[i - 2].classList.add('bullet')
//                   itemList[i - 3].classList.add('bullet-medium')
//                   itemList[i - 4].classList.add('bullet-small')
//                }
//             }
//             if (i == 1) {
//                indexN = indexN + (i - indexN);
//                number = (indexN - 1) * transformIndex;
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                if (itemList[i - 1] !== undefined) {
//                   itemList[i - 1].classList.add('bullet')
//                   itemList[i].classList.add('bullet')
//                   itemList[i + 1].classList.add('bullet')
//                   itemList[i + 2].classList.add('bullet-medium')
//                   itemList[i + 3].classList.add('bullet-small')
//                }
//             }
//          }
//          if (i < indexN) {
//             if (i > 1 && i < itemList.length - 2) {
//                indexN = indexN + (i - indexN);
//                number = (indexN - 2) * transformIndex;
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                if (itemList[i - 1] !== undefined) {
//                   itemList[i - 1].classList.add('bullet-medium')
//                }
//                if (itemList[i - 2] !== undefined) {
//                   itemList[i - 2].classList.add('bullet-small')
//                }
//                itemList[i].classList.add('bullet')
//                itemList[i + 1].classList.add('bullet')
//                itemList[i + 2].classList.add('bullet')
//             }
//             if (i == 1) {
//                indexN = indexN + (i - indexN);
//                number = (indexN - 1) * transformIndex;
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                if (itemList[i - 1] !== undefined) {
//                   itemList[i - 1].classList.add('bullet-medium')
//                   itemList[i].classList.add('bullet')
//                   itemList[i + 1].classList.add('bullet')
//                   itemList[i + 2].classList.add('bullet')
//                   itemList[i + 3].classList.add('bullet-medium')
//                }

//             }
//             if (i == 0) {
//                indexN = indexN + (i - indexN);
//                number = (indexN) * transformIndex;
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                itemList[i].classList.add('bullet')
//                itemList[i + 1].classList.add('bullet')
//                itemList[i + 2].classList.add('bullet')
//                itemList[i + 3].classList.add('bullet-medium')
//                itemList[i + 4].classList.add('bullet-small')

//             }
//             if (i == itemList.length - 2) {
//                indexN = indexN + (i - indexN);
//                number = (indexN - 3) * transformIndex;
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                if (itemList[i + 1] !== undefined) {
//                   itemList[i + 1].classList.add('bullet')
//                }
//                if (itemList[i + 2] !== undefined) {
//                   itemList[i + 2].classList.add('bullet')
//                }
//                itemList[i].classList.add('bullet')
//                if (itemList[i - 2] !== undefined) {
//                   itemList[i - 1].classList.add('bullet')
//                   itemList[i - 2].classList.add('bullet-medium')
//                   itemList[i - 3].classList.add('bullet-small')
//                }
//             }

//          }

//          if (i == 0) {
//             itemList[i].classList.add('bullet')
//             itemList[i + 1].classList.add('bullet')
//             itemList[i + 2].classList.add('bullet')
//             itemList[i + 3].classList.add('bullet-medium')
//             itemList[i + 4].classList.add('bullet-small')
//          }
//          // if (i == 1) {
//          //    itemList[i - 1].classList.add('bullet')
//          //    itemList[i].classList.add('bullet')
//          //    itemList[i + 1].classList.add('bullet')
//          //    itemList[i + 2].classList.add('bullet-medium')
//          //    itemList[i + 3].classList.add('bullet-small')
//          // }

//          console.log(indexN)
//       })
//       itemList2[i].addEventListener('click', function () {
//          if (!itemList[i].classList.contains('bullet-active')) {
//             for (let k = 0; k < itemList.length; k++) {
//                itemList[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
//             }
//             itemList[i].classList.add('bullet-active')
//          }
//          if (i > indexN) {
//             indexN = indexN + (i - indexN);
//             number = (indexN - 2) * transformIndex;
//             if (i < itemList.length - 2 && i > 1) {
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                if (itemList[i + 1] !== undefined) {
//                   itemList[i + 1].classList.add('bullet-medium')
//                }
//                if (itemList[i + 2] !== undefined) {
//                   itemList[i + 2].classList.add('bullet-small')
//                }
//                itemList[i].classList.add('bullet')
//                if (itemList[i - 2] !== undefined) {
//                   itemList[i - 1].classList.add('bullet')
//                   itemList[i - 2].classList.add('bullet')
//                }
//             }
//             if (i == itemList.length - 2) {
//                indexN = indexN + (i - indexN);
//                number = (indexN - 3) * transformIndex;
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                if (itemList[i + 1] !== undefined) {
//                   itemList[i + 1].classList.add('bullet-medium')
//                }
//                if (itemList[i + 2] !== undefined) {
//                   itemList[i + 2].classList.add('bullet-small')
//                }
//                itemList[i].classList.add('bullet')
//                if (itemList[i - 2] !== undefined) {
//                   itemList[i - 1].classList.add('bullet')
//                   itemList[i - 2].classList.add('bullet')
//                   itemList[i - 3].classList.add('bullet-medium')
//                }
//             }
//             if (i == itemList.length - 1) {
//                number = (indexN - 4) * transformIndex;
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                if (itemList[i + 1] !== undefined) {
//                   itemList[i + 1].classList.add('bullet-medium')
//                }
//                if (itemList[i + 2] !== undefined) {
//                   itemList[i + 2].classList.add('bullet-small')
//                }
//                itemList[i].classList.add('bullet')
//                if (itemList[i - 2] !== undefined) {
//                   itemList[i - 1].classList.add('bullet')
//                   itemList[i - 2].classList.add('bullet')
//                   itemList[i - 3].classList.add('bullet-medium')
//                   itemList[i - 4].classList.add('bullet-small')
//                }
//             }
//             if (i == 1) {
//                indexN = indexN + (i - indexN);
//                number = (indexN - 1) * transformIndex;
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                if (itemList[i - 1] !== undefined) {
//                   itemList[i - 1].classList.add('bullet')
//                   itemList[i].classList.add('bullet')
//                   itemList[i + 1].classList.add('bullet')
//                   itemList[i + 2].classList.add('bullet-medium')
//                   itemList[i + 3].classList.add('bullet-small')
//                }
//             }
//          }
//          if (i < indexN) {
//             if (i > 1 && i < itemList.length - 2) {
//                indexN = indexN + (i - indexN);
//                number = (indexN - 2) * transformIndex;
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                if (itemList[i - 1] !== undefined) {
//                   itemList[i - 1].classList.add('bullet-medium')
//                }
//                if (itemList[i - 2] !== undefined) {
//                   itemList[i - 2].classList.add('bullet-small')
//                }
//                itemList[i].classList.add('bullet')
//                itemList[i + 1].classList.add('bullet')
//                itemList[i + 2].classList.add('bullet')
//             }
//             if (i == 1) {
//                indexN = indexN + (i - indexN);
//                number = (indexN - 1) * transformIndex;
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                if (itemList[i - 1] !== undefined) {
//                   itemList[i - 1].classList.add('bullet-medium')
//                   itemList[i].classList.add('bullet')
//                   itemList[i + 1].classList.add('bullet')
//                   itemList[i + 2].classList.add('bullet')
//                   itemList[i + 3].classList.add('bullet-medium')
//                }

//             }
//             if (i == 0) {
//                indexN = indexN + (i - indexN);
//                number = (indexN) * transformIndex;
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                itemList[i].classList.add('bullet')
//                itemList[i + 1].classList.add('bullet')
//                itemList[i + 2].classList.add('bullet')
//                itemList[i + 3].classList.add('bullet-medium')
//                itemList[i + 4].classList.add('bullet-small')

//             }
//             if (i == itemList.length - 2) {
//                indexN = indexN + (i - indexN);
//                number = (indexN - 3) * transformIndex;
//                for (let u = 0; u < itemList.length; u++) {
//                   itemList[u].style.transform = 'translateX(-' + number + 'px)';;
//                }
//                if (itemList[i + 1] !== undefined) {
//                   itemList[i + 1].classList.add('bullet')
//                }
//                if (itemList[i + 2] !== undefined) {
//                   itemList[i + 2].classList.add('bullet')
//                }
//                itemList[i].classList.add('bullet')
//                if (itemList[i - 2] !== undefined) {
//                   itemList[i - 1].classList.add('bullet')
//                   itemList[i - 2].classList.add('bullet-medium')
//                   itemList[i - 3].classList.add('bullet-small')
//                }
//             }

//          }

//          if (i == 0) {
//             itemList[i].classList.add('bullet')
//             itemList[i + 1].classList.add('bullet')
//             itemList[i + 2].classList.add('bullet')
//             itemList[i + 3].classList.add('bullet-medium')
//             itemList[i + 4].classList.add('bullet-small')
//          }


//          console.log(indexN)
//       })
//    }
// }
export function initPagination(itemList, itemList2, itemList3, wrapperBlock) {
   let indexN = 0;
   itemList[0].classList.add('bullet')
   itemList[1].classList.add('bullet')
   itemList[2].classList.add('bullet')
   itemList[3].classList.add('bullet-medium')
   if (itemList[4] !== undefined) {
      itemList[4].classList.add('bullet-small')
   }
   for (let i = 0; i < itemList.length; i++) {
      itemList[i].addEventListener('click', function () {
         if (!itemList[i].classList.contains('bullet-active')) {
            for (let k = 0; k < itemList.length; k++) {
               itemList[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
            }
            itemList[i].classList.add('bullet-active')
         }
         if (i > indexN) {
            indexN = indexN + (i - indexN);

            if (i < itemList.length - 2 && i > 1) {
               if (itemList[i + 1] !== undefined) {
                  itemList[i + 1].classList.add('bullet-medium')
               }
               if (itemList[i + 2] !== undefined) {
                  itemList[i + 2].classList.add('bullet-small')
               }
               itemList[i].classList.add('bullet')
               if (itemList[i - 2] !== undefined) {
                  itemList[i - 1].classList.add('bullet')
                  itemList[i - 2].classList.add('bullet')
               }
            }
            if (i == itemList.length - 2) {
               if (itemList[i + 1] !== undefined) {
                  itemList[i + 1].classList.add('bullet-medium')
               }
               if (itemList[i + 2] !== undefined) {
                  itemList[i + 2].classList.add('bullet-small')
               }
               itemList[i].classList.add('bullet')
               if (itemList[i - 2] !== undefined) {
                  itemList[i - 1].classList.add('bullet')
                  itemList[i - 2].classList.add('bullet')
                  itemList[i - 3].classList.add('bullet-medium')
               }
            }
            if (i == itemList.length - 1) {
               if (itemList[i + 1] !== undefined) {
                  itemList[i + 1].classList.add('bullet-medium')
               }
               if (itemList[i + 2] !== undefined) {
                  itemList[i + 2].classList.add('bullet-small')
               }
               itemList[i].classList.add('bullet')
               if (itemList[i - 2] !== undefined) {
                  itemList[i - 1].classList.add('bullet')
                  itemList[i - 2].classList.add('bullet')
               }
               if (itemList[i - 3] !== undefined) {
                  itemList[i - 3].classList.add('bullet-medium')
               }
               if (itemList[i - 4] !== undefined) {
                  itemList[i - 4].classList.add('bullet-small')
               }

            }
            if (i == 1) {
               indexN = indexN + (i - indexN);
               if (itemList[i - 1] !== undefined) {
                  itemList[i - 1].classList.add('bullet')
                  itemList[i].classList.add('bullet')
                  itemList[i + 1].classList.add('bullet')
                  itemList[i + 2].classList.add('bullet-medium')
                  itemList[i + 3].classList.add('bullet-small')
               }
            }
         }
         if (i < indexN) {
            if (i > 1 && i < itemList.length - 2) {
               indexN = indexN + (i - indexN);


               if (itemList[i - 1] !== undefined) {
                  itemList[i - 1].classList.add('bullet-medium')
               }
               if (itemList[i - 2] !== undefined) {
                  itemList[i - 2].classList.add('bullet-small')
               }
               itemList[i].classList.add('bullet')
               itemList[i + 1].classList.add('bullet')
               itemList[i + 2].classList.add('bullet')
            }
            if (i == 1) {
               indexN = indexN + (i - indexN);


               if (itemList[i - 1] !== undefined) {
                  itemList[i - 1].classList.add('bullet-medium')
                  itemList[i].classList.add('bullet')
                  itemList[i + 1].classList.add('bullet')
                  itemList[i + 2].classList.add('bullet')
                  itemList[i + 3].classList.add('bullet-medium')
               }

            }
            if (i == 0) {
               indexN = indexN + (i - indexN);


               itemList[i].classList.add('bullet')
               itemList[i + 1].classList.add('bullet')
               itemList[i + 2].classList.add('bullet')
               itemList[i + 3].classList.add('bullet-medium')
               itemList[i + 4].classList.add('bullet-small')

            }
            if (i == itemList.length - 2) {
               indexN = indexN + (i - indexN);


               if (itemList[i + 1] !== undefined) {
                  itemList[i + 1].classList.add('bullet')
               }
               if (itemList[i + 2] !== undefined) {
                  itemList[i + 2].classList.add('bullet')
               }
               itemList[i].classList.add('bullet')
               if (itemList[i - 2] !== undefined) {
                  itemList[i - 1].classList.add('bullet')
                  itemList[i - 2].classList.add('bullet-medium')
                  itemList[i - 3].classList.add('bullet-small')
               }
            }

         }
         if (i == 0) {
            itemList[i].classList.add('bullet')
            itemList[i + 1].classList.add('bullet')
            itemList[i + 2].classList.add('bullet')
            itemList[i + 3].classList.add('bullet-medium')
            itemList[i + 4].classList.add('bullet-small')
         }

      })
      if (itemList2 !== undefined) {
         itemList2[i].addEventListener('click', function () {
            if (!itemList[i].classList.contains('bullet-active')) {
               for (let k = 0; k < itemList.length; k++) {
                  itemList[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
               }
               itemList[i].classList.add('bullet-active')
            }
            if (i > indexN) {
               indexN = indexN + (i - indexN);

               if (i < itemList.length - 2 && i > 1) {

                  if (itemList[i + 1] !== undefined) {
                     itemList[i + 1].classList.add('bullet-medium')
                  }
                  if (itemList[i + 2] !== undefined) {
                     itemList[i + 2].classList.add('bullet-small')
                  }
                  itemList[i].classList.add('bullet')
                  if (itemList[i - 2] !== undefined) {
                     itemList[i - 1].classList.add('bullet')
                     itemList[i - 2].classList.add('bullet')
                  }
               }
               if (i == itemList.length - 2) {
                  indexN = indexN + (i - indexN);


                  if (itemList[i + 1] !== undefined) {
                     itemList[i + 1].classList.add('bullet-medium')
                  }
                  if (itemList[i + 2] !== undefined) {
                     itemList[i + 2].classList.add('bullet-small')
                  }
                  itemList[i].classList.add('bullet')
                  if (itemList[i - 2] !== undefined) {
                     itemList[i - 1].classList.add('bullet')
                     itemList[i - 2].classList.add('bullet')
                     itemList[i - 3].classList.add('bullet-medium')
                  }
               }
               if (i == itemList.length - 1) {


                  if (itemList[i + 1] !== undefined) {
                     itemList[i + 1].classList.add('bullet-medium')
                  }
                  if (itemList[i + 2] !== undefined) {
                     itemList[i + 2].classList.add('bullet-small')
                  }
                  itemList[i].classList.add('bullet')
                  if (itemList[i - 2] !== undefined) {
                     itemList[i - 1].classList.add('bullet')
                     itemList[i - 2].classList.add('bullet')
                     itemList[i - 3].classList.add('bullet-medium')
                     itemList[i - 4].classList.add('bullet-small')
                  }
               }
               if (i == 1) {
                  indexN = indexN + (i - indexN);


                  if (itemList[i - 1] !== undefined) {
                     itemList[i - 1].classList.add('bullet')
                     itemList[i].classList.add('bullet')
                     itemList[i + 1].classList.add('bullet')
                     itemList[i + 2].classList.add('bullet-medium')
                     itemList[i + 3].classList.add('bullet-small')
                  }
               }
            }
            if (i < indexN) {
               if (i > 1 && i < itemList.length - 2) {
                  indexN = indexN + (i - indexN);


                  if (itemList[i - 1] !== undefined) {
                     itemList[i - 1].classList.add('bullet-medium')
                  }
                  if (itemList[i - 2] !== undefined) {
                     itemList[i - 2].classList.add('bullet-small')
                  }
                  itemList[i].classList.add('bullet')
                  itemList[i + 1].classList.add('bullet')
                  itemList[i + 2].classList.add('bullet')
               }
               if (i == 1) {
                  indexN = indexN + (i - indexN);


                  if (itemList[i - 1] !== undefined) {
                     itemList[i - 1].classList.add('bullet-medium')
                     itemList[i].classList.add('bullet')
                     itemList[i + 1].classList.add('bullet')
                     itemList[i + 2].classList.add('bullet')
                     itemList[i + 3].classList.add('bullet-medium')
                  }

               }
               if (i == 0) {
                  indexN = indexN + (i - indexN);


                  itemList[i].classList.add('bullet')
                  itemList[i + 1].classList.add('bullet')
                  itemList[i + 2].classList.add('bullet')
                  itemList[i + 3].classList.add('bullet-medium')
                  itemList[i + 4].classList.add('bullet-small')

               }
               if (i == itemList.length - 2) {
                  indexN = indexN + (i - indexN);

                  if (itemList[i + 1] !== undefined) {
                     itemList[i + 1].classList.add('bullet')
                  }
                  if (itemList[i + 2] !== undefined) {
                     itemList[i + 2].classList.add('bullet')
                  }
                  itemList[i].classList.add('bullet')
                  if (itemList[i - 2] !== undefined) {
                     itemList[i - 1].classList.add('bullet')
                     itemList[i - 2].classList.add('bullet-medium')
                     itemList[i - 3].classList.add('bullet-small')
                  }
               }

            }

            if (i == 0) {
               itemList[i].classList.add('bullet')
               itemList[i + 1].classList.add('bullet')
               itemList[i + 2].classList.add('bullet')
               itemList[i + 3].classList.add('bullet-medium')
               itemList[i + 4].classList.add('bullet-small')
            }
         })
      }
   }
   wrapperBlock.addEventListener('transitionrun', function () {
      setTimeout(() => {
         for (let i = 0; i < itemList3.length; i++) {
            if (itemList3[i].classList.contains('swiper-slide-active')) {
               if (!itemList[i].classList.contains('bullet-active')) {
                  for (let k = 0; k < itemList.length; k++) {
                     itemList[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
                  }
                  itemList[i].classList.add('bullet-active')
               }
               if (i > indexN) {
                  indexN = indexN + (i - indexN);

                  if (i < itemList.length - 2 && i > 1) {

                     if (itemList[i + 1] !== undefined) {
                        itemList[i + 1].classList.add('bullet-medium')
                     }
                     if (itemList[i + 2] !== undefined) {
                        itemList[i + 2].classList.add('bullet-small')
                     }
                     itemList[i].classList.add('bullet')
                     if (itemList[i - 2] !== undefined) {
                        itemList[i - 1].classList.add('bullet')
                        itemList[i - 2].classList.add('bullet')
                     }
                  }
                  if (i == itemList.length - 2) {
                     if (itemList[i + 1] !== undefined) {
                        itemList[i + 1].classList.add('bullet-medium')
                     }
                     if (itemList[i + 2] !== undefined) {
                        itemList[i + 2].classList.add('bullet-small')
                     }
                     itemList[i].classList.add('bullet')
                     if (itemList[i - 2] !== undefined) {
                        itemList[i - 1].classList.add('bullet')
                        itemList[i - 2].classList.add('bullet')
                        itemList[i - 3].classList.add('bullet-medium')
                     }
                  }
                  if (i == itemList.length - 1) {


                     if (itemList[i + 1] !== undefined) {
                        itemList[i + 1].classList.add('bullet-medium')
                     }
                     if (itemList[i + 2] !== undefined) {
                        itemList[i + 2].classList.add('bullet-small')
                     }
                     itemList[i].classList.add('bullet')
                     if (itemList[i - 2] !== undefined) {
                        itemList[i - 1].classList.add('bullet')
                        itemList[i - 2].classList.add('bullet')
                        itemList[i - 3].classList.add('bullet-medium')
                        itemList[i - 4].classList.add('bullet-small')
                     }
                  }
                  if (i == 1) {
                     indexN = indexN + (i - indexN);
                     if (itemList[i - 1] !== undefined) {
                        itemList[i - 1].classList.add('bullet')
                        itemList[i].classList.add('bullet')
                        itemList[i + 1].classList.add('bullet')
                        itemList[i + 2].classList.add('bullet-medium')
                        itemList[i + 3].classList.add('bullet-small')
                     }
                  }
               }
               if (i < indexN) {
                  if (i > 1 && i < itemList.length - 2) {
                     indexN = indexN + (i - indexN);
                     if (itemList[i - 1] !== undefined) {
                        itemList[i - 1].classList.add('bullet-medium')
                     }
                     if (itemList[i - 2] !== undefined) {
                        itemList[i - 2].classList.add('bullet-small')
                     }
                     itemList[i].classList.add('bullet')
                     itemList[i + 1].classList.add('bullet')
                     itemList[i + 2].classList.add('bullet')
                  }
                  if (i == 1) {
                     indexN = indexN + (i - indexN);
                     if (itemList[i - 1] !== undefined) {
                        itemList[i - 1].classList.add('bullet-medium')
                        itemList[i].classList.add('bullet')
                        itemList[i + 1].classList.add('bullet')
                        itemList[i + 2].classList.add('bullet')
                        itemList[i + 3].classList.add('bullet-medium')
                     }
                  }
                  if (i == 0) {
                     indexN = indexN + (i - indexN);
                     itemList[i].classList.add('bullet')
                     itemList[i + 1].classList.add('bullet')
                     itemList[i + 2].classList.add('bullet')
                     itemList[i + 3].classList.add('bullet-medium')
                     itemList[i + 4].classList.add('bullet-small')
                  }
                  if (i == itemList.length - 2) {
                     indexN = indexN + (i - indexN);
                     if (itemList[i + 1] !== undefined) {
                        itemList[i + 1].classList.add('bullet')
                     }
                     if (itemList[i + 2] !== undefined) {
                        itemList[i + 2].classList.add('bullet')
                     }
                     itemList[i].classList.add('bullet')
                     if (itemList[i - 2] !== undefined) {
                        itemList[i - 1].classList.add('bullet')
                        itemList[i - 2].classList.add('bullet-medium')
                        itemList[i - 3].classList.add('bullet-small')
                     }
                  }
               }
               if (i == 0) {
                  itemList[i].classList.add('bullet')
                  itemList[i + 1].classList.add('bullet')
                  itemList[i + 2].classList.add('bullet')
                  itemList[i + 3].classList.add('bullet-medium')
                  if (itemList[i + 4] !== undefined) {
                     itemList[i + 4].classList.add('bullet-small')
                  }
               }
            }
         }
      }, 0);

   })
}
export function resizePagination(pagination, itemList3, wrapperBlock) {
   setTimeout(() => {
      let itemList = document.querySelectorAll(pagination + ' .swiper-pagination-bullet');
      let indexN = 0;
      setTimeout(() => {
         for (let i = 0; i < itemList3.length; i++) {
            if (itemList3[i].classList.contains('swiper-slide-active')) {
               for (let k = 0; k < itemList.length; k++) {
                  itemList[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
               }
               itemList[i].classList.add('bullet-active')
               if (i > indexN) {
                  indexN = indexN + (i - indexN);

                  if (i < itemList.length - 2 && i > 1) {

                     if (itemList[i + 1] !== undefined) {
                        itemList[i + 1].classList.add('bullet-medium')
                     }
                     if (itemList[i + 2] !== undefined) {
                        itemList[i + 2].classList.add('bullet-small')
                     }
                     itemList[i].classList.add('bullet')
                     if (itemList[i - 2] !== undefined) {
                        itemList[i - 1].classList.add('bullet')
                        itemList[i - 2].classList.add('bullet')
                     }
                  }
                  if (i == itemList.length - 2) {
                     if (itemList[i + 1] !== undefined) {
                        itemList[i + 1].classList.add('bullet-medium')
                     }
                     if (itemList[i + 2] !== undefined) {
                        itemList[i + 2].classList.add('bullet-small')
                     }
                     itemList[i].classList.add('bullet')
                     if (itemList[i - 2] !== undefined) {
                        itemList[i - 1].classList.add('bullet')
                        itemList[i - 2].classList.add('bullet')
                        itemList[i - 3].classList.add('bullet-medium')
                     }
                  }
                  if (i == itemList.length - 1) {


                     if (itemList[i + 1] !== undefined) {
                        itemList[i + 1].classList.add('bullet-medium')
                     }
                     if (itemList[i + 2] !== undefined) {
                        itemList[i + 2].classList.add('bullet-small')
                     }
                     itemList[i].classList.add('bullet')
                     if (itemList[i - 2] !== undefined) {
                        itemList[i - 1].classList.add('bullet')
                        itemList[i - 2].classList.add('bullet')
                        itemList[i - 3].classList.add('bullet-medium')
                        itemList[i - 4].classList.add('bullet-small')
                     }
                  }
                  if (i == 1) {
                     indexN = indexN + (i - indexN);
                     if (itemList[i - 1] !== undefined) {
                        itemList[i - 1].classList.add('bullet')
                        itemList[i].classList.add('bullet')
                        itemList[i + 1].classList.add('bullet')
                        itemList[i + 2].classList.add('bullet-medium')
                        itemList[i + 3].classList.add('bullet-small')
                     }
                  }
               }
               if (i < indexN) {
                  if (i > 1 && i < itemList.length - 2) {
                     indexN = indexN + (i - indexN);
                     if (itemList[i - 1] !== undefined) {
                        itemList[i - 1].classList.add('bullet-medium')
                     }
                     if (itemList[i - 2] !== undefined) {
                        itemList[i - 2].classList.add('bullet-small')
                     }
                     itemList[i].classList.add('bullet')
                     itemList[i + 1].classList.add('bullet')
                     itemList[i + 2].classList.add('bullet')
                  }
                  if (i == 1) {
                     indexN = indexN + (i - indexN);
                     if (itemList[i - 1] !== undefined) {
                        itemList[i - 1].classList.add('bullet-medium')
                        itemList[i].classList.add('bullet')
                        itemList[i + 1].classList.add('bullet')
                        itemList[i + 2].classList.add('bullet')
                        itemList[i + 3].classList.add('bullet-medium')
                     }
                  }
                  if (i == 0) {
                     indexN = indexN + (i - indexN);
                     itemList[i].classList.add('bullet')
                     itemList[i + 1].classList.add('bullet')
                     itemList[i + 2].classList.add('bullet')
                     itemList[i + 3].classList.add('bullet-medium')
                     itemList[i + 4].classList.add('bullet-small')
                  }
                  if (i == itemList.length - 2) {
                     indexN = indexN + (i - indexN);
                     if (itemList[i + 1] !== undefined) {
                        itemList[i + 1].classList.add('bullet')
                     }
                     if (itemList[i + 2] !== undefined) {
                        itemList[i + 2].classList.add('bullet')
                     }
                     itemList[i].classList.add('bullet')
                     if (itemList[i - 2] !== undefined) {
                        itemList[i - 1].classList.add('bullet')
                        itemList[i - 2].classList.add('bullet-medium')
                        itemList[i - 3].classList.add('bullet-small')
                     }
                  }
               }
               if (i == 0) {
                  itemList[i].classList.add('bullet')
                  itemList[i + 1].classList.add('bullet')
                  itemList[i + 2].classList.add('bullet')
                  itemList[i + 3].classList.add('bullet-medium')
                  if (itemList[i + 4] !== undefined) {
                     itemList[i + 4].classList.add('bullet-small')
                  }
               }

            }
         }
         for (let i = 0; i < itemList.length; i++) {
            itemList[i].addEventListener('click', function () {
               if (!itemList[i].classList.contains('bullet-active')) {
                  for (let k = 0; k < itemList.length; k++) {
                     itemList[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
                  }
                  itemList[i].classList.add('bullet-active')
               }
               if (i > indexN) {
                  indexN = indexN + (i - indexN);

                  if (i < itemList.length - 2 && i > 1) {
                     if (itemList[i + 1] !== undefined) {
                        itemList[i + 1].classList.add('bullet-medium')
                     }
                     if (itemList[i + 2] !== undefined) {
                        itemList[i + 2].classList.add('bullet-small')
                     }
                     itemList[i].classList.add('bullet')
                     if (itemList[i - 2] !== undefined) {
                        itemList[i - 1].classList.add('bullet')
                        itemList[i - 2].classList.add('bullet')
                     }
                  }
                  if (i == itemList.length - 2) {
                     if (itemList[i + 1] !== undefined) {
                        itemList[i + 1].classList.add('bullet-medium')
                     }
                     if (itemList[i + 2] !== undefined) {
                        itemList[i + 2].classList.add('bullet-small')
                     }
                     itemList[i].classList.add('bullet')
                     if (itemList[i - 2] !== undefined) {
                        itemList[i - 1].classList.add('bullet')
                        itemList[i - 2].classList.add('bullet')
                        itemList[i - 3].classList.add('bullet-medium')
                     }
                  }
                  if (i == itemList.length - 1) {
                     if (itemList[i + 1] !== undefined) {
                        itemList[i + 1].classList.add('bullet-medium')
                     }
                     if (itemList[i + 2] !== undefined) {
                        itemList[i + 2].classList.add('bullet-small')
                     }
                     itemList[i].classList.add('bullet')
                     if (itemList[i - 2] !== undefined) {
                        itemList[i - 1].classList.add('bullet')
                        itemList[i - 2].classList.add('bullet')
                     }
                     if (itemList[i - 3] !== undefined) {
                        itemList[i - 3].classList.add('bullet-medium')
                     }
                     if (itemList[i - 4] !== undefined) {
                        itemList[i - 4].classList.add('bullet-small')
                     }

                  }
                  if (i == 1) {
                     indexN = indexN + (i - indexN);
                     if (itemList[i - 1] !== undefined) {
                        itemList[i - 1].classList.add('bullet')
                        itemList[i].classList.add('bullet')
                        itemList[i + 1].classList.add('bullet')
                        itemList[i + 2].classList.add('bullet-medium')
                        itemList[i + 3].classList.add('bullet-small')
                     }
                  }
               }
               if (i < indexN) {
                  if (i > 1 && i < itemList.length - 2) {
                     indexN = indexN + (i - indexN);


                     if (itemList[i - 1] !== undefined) {
                        itemList[i - 1].classList.add('bullet-medium')
                     }
                     if (itemList[i - 2] !== undefined) {
                        itemList[i - 2].classList.add('bullet-small')
                     }
                     itemList[i].classList.add('bullet')
                     itemList[i + 1].classList.add('bullet')
                     itemList[i + 2].classList.add('bullet')
                  }
                  if (i == 1) {
                     indexN = indexN + (i - indexN);


                     if (itemList[i - 1] !== undefined) {
                        itemList[i - 1].classList.add('bullet-medium')
                        itemList[i].classList.add('bullet')
                        itemList[i + 1].classList.add('bullet')
                        itemList[i + 2].classList.add('bullet')
                        itemList[i + 3].classList.add('bullet-medium')
                     }

                  }
                  if (i == 0) {
                     indexN = indexN + (i - indexN);


                     itemList[i].classList.add('bullet')
                     itemList[i + 1].classList.add('bullet')
                     itemList[i + 2].classList.add('bullet')
                     itemList[i + 3].classList.add('bullet-medium')
                     itemList[i + 4].classList.add('bullet-small')

                  }
                  if (i == itemList.length - 2) {
                     indexN = indexN + (i - indexN);


                     if (itemList[i + 1] !== undefined) {
                        itemList[i + 1].classList.add('bullet')
                     }
                     if (itemList[i + 2] !== undefined) {
                        itemList[i + 2].classList.add('bullet')
                     }
                     itemList[i].classList.add('bullet')
                     if (itemList[i - 2] !== undefined) {
                        itemList[i - 1].classList.add('bullet')
                        itemList[i - 2].classList.add('bullet-medium')
                        itemList[i - 3].classList.add('bullet-small')
                     }
                  }

               }
               if (i == 0) {
                  itemList[i].classList.add('bullet')
                  itemList[i + 1].classList.add('bullet')
                  itemList[i + 2].classList.add('bullet')
                  itemList[i + 3].classList.add('bullet-medium')
                  itemList[i + 4].classList.add('bullet-small')
               }
               console.log(indexN)

            })
         }
         wrapperBlock.addEventListener('transitionrun', function () {
            setTimeout(() => {
               for (let i = 0; i < itemList3.length; i++) {
                  if (itemList3[i].classList.contains('swiper-slide-active')) {
                     if (!itemList[i].classList.contains('bullet-active')) {
                        for (let k = 0; k < itemList.length; k++) {
                           itemList[k].classList.remove('bullet-small', 'bullet-medium', 'bullet-active', 'bullet');
                        }
                        itemList[i].classList.add('bullet-active')
                     }
                     if (i > indexN) {
                        indexN = indexN + (i - indexN);

                        if (i < itemList.length - 2 && i > 1) {

                           if (itemList[i + 1] !== undefined) {
                              itemList[i + 1].classList.add('bullet-medium')
                           }
                           if (itemList[i + 2] !== undefined) {
                              itemList[i + 2].classList.add('bullet-small')
                           }
                           itemList[i].classList.add('bullet')
                           if (itemList[i - 2] !== undefined) {
                              itemList[i - 1].classList.add('bullet')
                              itemList[i - 2].classList.add('bullet')
                           }
                        }
                        if (i == itemList.length - 2) {
                           if (itemList[i + 1] !== undefined) {
                              itemList[i + 1].classList.add('bullet-medium')
                           }
                           if (itemList[i + 2] !== undefined) {
                              itemList[i + 2].classList.add('bullet-small')
                           }
                           itemList[i].classList.add('bullet')
                           if (itemList[i - 2] !== undefined) {
                              itemList[i - 1].classList.add('bullet')
                              itemList[i - 2].classList.add('bullet')
                              itemList[i - 3].classList.add('bullet-medium')
                           }
                        }
                        if (i == itemList.length - 1) {


                           if (itemList[i + 1] !== undefined) {
                              itemList[i + 1].classList.add('bullet-medium')
                           }
                           if (itemList[i + 2] !== undefined) {
                              itemList[i + 2].classList.add('bullet-small')
                           }
                           itemList[i].classList.add('bullet')
                           if (itemList[i - 2] !== undefined) {
                              itemList[i - 1].classList.add('bullet')
                              itemList[i - 2].classList.add('bullet')
                              itemList[i - 3].classList.add('bullet-medium')
                              itemList[i - 4].classList.add('bullet-small')
                           }
                        }
                        if (i == 1) {
                           indexN = indexN + (i - indexN);
                           if (itemList[i - 1] !== undefined) {
                              itemList[i - 1].classList.add('bullet')
                              itemList[i].classList.add('bullet')
                              itemList[i + 1].classList.add('bullet')
                              itemList[i + 2].classList.add('bullet-medium')
                              itemList[i + 3].classList.add('bullet-small')
                           }
                        }
                     }
                     if (i < indexN) {
                        if (i > 1 && i < itemList.length - 2) {
                           indexN = indexN + (i - indexN);
                           if (itemList[i - 1] !== undefined) {
                              itemList[i - 1].classList.add('bullet-medium')
                           }
                           if (itemList[i - 2] !== undefined) {
                              itemList[i - 2].classList.add('bullet-small')
                           }
                           itemList[i].classList.add('bullet')
                           itemList[i + 1].classList.add('bullet')
                           itemList[i + 2].classList.add('bullet')
                        }
                        if (i == 1) {
                           indexN = indexN + (i - indexN);
                           if (itemList[i - 1] !== undefined) {
                              itemList[i - 1].classList.add('bullet-medium')
                              itemList[i].classList.add('bullet')
                              itemList[i + 1].classList.add('bullet')
                              itemList[i + 2].classList.add('bullet')
                              itemList[i + 3].classList.add('bullet-medium')
                           }
                        }
                        if (i == 0) {
                           indexN = indexN + (i - indexN);
                           itemList[i].classList.add('bullet')
                           itemList[i + 1].classList.add('bullet')
                           itemList[i + 2].classList.add('bullet')
                           itemList[i + 3].classList.add('bullet-medium')
                           itemList[i + 4].classList.add('bullet-small')
                        }
                        if (i == itemList.length - 2) {
                           indexN = indexN + (i - indexN);
                           if (itemList[i + 1] !== undefined) {
                              itemList[i + 1].classList.add('bullet')
                           }
                           if (itemList[i + 2] !== undefined) {
                              itemList[i + 2].classList.add('bullet')
                           }
                           itemList[i].classList.add('bullet')
                           if (itemList[i - 2] !== undefined) {
                              itemList[i - 1].classList.add('bullet')
                              itemList[i - 2].classList.add('bullet-medium')
                              itemList[i - 3].classList.add('bullet-small')
                           }
                        }
                     }
                     if (i == 0) {
                        itemList[i].classList.add('bullet')
                        itemList[i + 1].classList.add('bullet')
                        itemList[i + 2].classList.add('bullet')
                        itemList[i + 3].classList.add('bullet-medium')
                        if (itemList[i + 4] !== undefined) {
                           itemList[i + 4].classList.add('bullet-small')
                        }
                     }
                  }
               }
            }, 0);
         })
      }, 100);
   }, 60);
}








