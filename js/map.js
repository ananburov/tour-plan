ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('map', {
      center: [7.890703, 98.294772],
      zoom: 15
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter());

  myMap.geoObjects.add(myPlacemark);

  myPlacemark.events
    .add('mouseenter', function (e) {
      // Ссылку на объект, вызвавший событие,
      // можно получить из поля 'target'.
      e.get('target').options.set('preset', 'islands#greenIcon');
    })
    .add('mouseleave', function (e) {
      e.get('target').options.unset('preset');
    });
}