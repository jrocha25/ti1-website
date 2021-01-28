var map = L.map('map').setView([41.1493836,-8.60311], 30);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=Ms1ewiL5rf6SN9FCFSOf', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);
var marker = L.marker([41.1493836,-8.60311]).addTo(map);