const initMap = () => {
    mapboxgl.accessToken = "pk.eyJ1IjoibHVja3lndXk3MyIsImEiOiJja2M0MjQ5bDAwM2xsMndud29kNm12OWxxIn0.zlOFDFw-k5cgNa0x4QSIXg";

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [-118.064091, 33.858480],
        zoom: 9
    });

    const popup = new mapboxgl.Popup()
        .setHTML(`<h2>Cerritos, CA</h2><p>My hometown where I grew up and currently reside</p>`);

    const marker = new mapboxgl.Marker()
        .setLngLat([-118.064091, 33.858480])
        .setPopup(popup)
        .addTo(map);
};

initMap();
