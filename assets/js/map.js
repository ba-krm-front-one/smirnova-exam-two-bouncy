;(() => {
    function initMap() {
    let map;
    let mapContainer = document.querySelector('#map');
    let mapCoordinates = {lat: 52.525595, lng: 13.393085};
    let mapOptions = {
        center: mapCoordinates,
        zoom: 14,
        disableDefaultUI: true
    };

    let infoWindowText = document.querySelector('#marker').innerHTML;
    map = new google.maps.Map(mapContainer, mapOptions);

    let marker = new google.maps.Marker({
        position: mapCoordinates,
        map: map,
        icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.png'
    });

    let infowindow = new google.maps.InfoWindow({
        content: infoWindowText
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });


}

document.addEventListener('DOMContentLoaded', initMap);
})();


