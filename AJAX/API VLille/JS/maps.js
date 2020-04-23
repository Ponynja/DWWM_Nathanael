//Fonction qui ouvre une fenetre google maps à partir de la latitude et longitude de la station cliquée
function latLongGoogleMaps(station) {
    latitude = station.getAttribute("data-latitude");
    longitude = station.getAttribute("data-longitude");

    url = "http://maps.google.com/maps?q=" + latitude + "," + longitude;

    var win = window.open(url, '_blank');
    win.focus();
}