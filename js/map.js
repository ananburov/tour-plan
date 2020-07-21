ymaps.ready(init);

function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map")
  var myMap = new ymaps.Map('map', {
    // При инициализации карты, обязательно нужно указать
    // ее центр и коэффициент масштабирования
    center: [7.890703, 98.294772], // Нижний Новгород
    zoom: 15
  });

  // Создание метки 
  var myPlacemark = new ymaps.Placemark(
    // Координаты метки
    [7.890703, 98.294772], {
      // Свойства
      // Текст метки
      iconContent: 'Hilton Phuket Banthai Resort'
    }, {
      // Опции
      // Иконка метки будет растягиваться под ее контент
      preset: 'islands#redStretchyIcon',
    });
  // Добавление метки на карту
  myMap.geoObjects.add(myPlacemark);

  myPlacemark.events
    .add('mouseenter', function (e) {
      // Ссылку на объект, вызвавший событие,
      // можно получить из поля 'target'.
      e.get('target').options.set('preset', 'islands#redStretchyIcon');
    })
    .add('mouseleave', function (e) {
      e.get('target').options.unset('preset', 'islands#blackStretchyIcon');
    });
}