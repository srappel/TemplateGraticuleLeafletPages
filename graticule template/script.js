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
    

//Leaflet.graticule stuff:
L.latlngGraticule({
    showLabel: true,
    color: 'white',
    zoomInterval: {
//FIX THIS STUFF!    
    latitude: [
        {start: 3, end: 2, interval: 10}, //Every 10 degrees
        {start: 4, end: 6, interval: 1}, //Every degree
        {start: 7, end: 9, interval: 1/6}, // every 10 minutes
        {start: 10, end: 11, interval: 1/12}, // every 5 minutes
        {start: 12, end: 13, interval: 1/60}, //every minute
        {start: 14, end: 15, interval: 1/120} // every 30 seconds (recommend using sec = true)
    ],
    longitude: [
        {start: 0, end: 2, interval: 10}, //Every 10 degrees
        {start: 4, end: 6, interval: 1}, //Every degree
        {start: 8, end: 9, interval: 1/6}, // every 10 minutes
        {start: 10, end: 11, interval: 1/12}, // every 5 minutes
        {start: 12, end: 13, interval: 1/60}, //every minute
        {start: 14, end: 15, interval: 1/120} // every 30 seconds (recommend using sec = true)
    ]
  }
}).addTo(mymap);
    
    
    

//Creates a standalone popup    
//var popup = L.popup()
//    .setLatLng([43, -88])
//    .setContent("I am a standalone popup.")
//    .openOn(mymap);    

//Very useful little function to print the coordinates of where you click to the console.
function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);

    //Adds click to print zoom level to console
    console.log('The Zoom Level is:' + mymap.getZoom());
}

mymap.on('click', onMapClick);    
    
    
})();






