(function(){
'use strict';

var mymap = L.map('mapid').setView([43.052222, -87.955833], 10)  
//IDEA: Define the set view based on data from a GeoJSON Object
    
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.dark',
    accessToken: 'pk.eyJ1Ijoic3JhcHBlbDkzMCIsImEiOiJ0RGNQSHJrIn0.21ukYtcChM2xWBamIPUp5g'
}).addTo(mymap);
    
var marker = L.marker([43.052222, -87.955833]).addTo(mymap); 
    
var circle = L.circle([43.052222, -87.955833], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(mymap);
    
var polygon = L.polygon([
    [43, -87],
    [43, -88],
    [44, -88],
    [44, -87]
]).addTo(mymap)

//making a line:
var pointA = new L.LatLng(44, -87);
var pointB = new L.LatLng(43, -88);
var pointList = [pointA, pointB];

var firstpolyline = new L.Polyline(pointList, {
    color: 'red',
    weight: 3,
    opacity: 0.5,
    smoothFactor: 1
});
firstpolyline.addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
    
    
var minute = 1/6
var second = 1/60
//Leaflet.graticule stuff:
L.latlngGraticule({
    showLabel: false,
    color: 'white',
    zoomInterval: [
        {start: 0, end: 4, interval: 1},
        {start: 4, end: 8, interval: 1},
        {start: 8, end: 10, interval: 1/2}, //30 min
        {start: 10, end: 12, interval: 1/12}, // 1 minute
        {start: 12, end: 19, interval: 1/60}, // 1 second
    ]
}).addTo(mymap);
    
    
    

//Creates a standalone popup    
//var popup = L.popup()
//    .setLatLng([43, -88])
//    .setContent("I am a standalone popup.")
//    .openOn(mymap);    

//Very useful little function to print the coordinates of where you click to the console.
function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);    
    
    
})();






