function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.9364206,30.3216723),
    scrollwheel: false
  }
  var map = new google.maps.Map(document.getElementById('map-address'),
    mapOptions);
  var image = "../img/icon-map-pin.svg";
  var myLatLng = new google.maps.LatLng(59.9364206,30.3216723);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
