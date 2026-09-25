mapboxgl.accessToken = mapToken;

const mapElement = document.getElementById("map");

const coordinates = JSON.parse(mapElement.dataset.coordinates);

console.log("Coordinates:", coordinates);

const map = new mapboxgl.Map({
    style: "mapbox://styles/mapbox/streets-v12",
    container: "map",
    center: coordinates,
    zoom: 8
});

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25, className: "my-class" })
            .setHTML("<p>Exact location provided after booking</p>")
            .setMaxWidth("300px")
    )
    .addTo(map);