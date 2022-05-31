import bneArr from './bne_coord'
import nthsydArr from './nthsyd_coord'
import sydArr from './syd_coord'
import miscArr from './misc_coord'
import waverleyArr from './waverley_coord'
import manlyArr from './manly_coord'

import myIcon from './assets/img/logo-white.svg'
import myIcon2 from './assets/img/logo-trans-red.svg'
import 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css'
import 'leaflet.locatecontrol'
import 'leaflet.fullscreen'
import 'leaflet.fullscreen/Control.FullScreen.css'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch'
import 'leaflet-geosearch/dist/geosearch.css';

// ------------ MAP ------------ //
// Using Leaflet JS library and open street map for tile layers - attribution required https://www.openstreetmap.org/

// configurations for map

export const mapOptions = {
    // center: [-33.8899, 151.2017],
    zoom: 13,
    fullscreenControl: true,
    fullscreenControlOptions: {
        position: 'topleft',
    },
    scrollWheelZoom: true,
    tap: false,
};

// create map and tiles
export const map = L.map('map', mapOptions);

export const layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

layer.addTo(map);

// add search control 

const searchControl = new GeoSearchControl({
    style: 'bar',
    provider: new OpenStreetMapProvider({
        params: {
            countrycodes: 'au', // limit search results to the australia
        },
    }),
    notFoundMessage: 'Sorry, that address could not be found.',
    updateMap: true,
    autoComplete: true,
    autoCompleteDelay: 250,
    showMarker: true,
    showPopup: false,
    marker: {
        icon: L.icon({ iconUrl: myIcon2, iconSize: [22, 25] }),
        draggable: false,
    },
    maxMarkers: 1,
    retainZoomLevel: true,
    animateZoom: true,
    autoClose: true,
    searchLabel: 'Enter address',
    keepResult: true,
    updateMap: true,
});
map.addControl(searchControl);


// add current location control button
const lc = L.control.locate({
    locateOptions: {
        maxZoom: 14
    }
}).addTo(map);

// request location update and set location
lc.start();

//create custom marker
export const customIcon = L.icon({ iconUrl: myIcon, iconSize: [22, 25] });

///////////////////////////////////////
//add marker and create popup with info
///////////////////////////////////////

// BRISBANE CITY COUNCIL

bneArr.forEach(spot => {
    return L.marker([spot[1], spot[0]], { icon: customIcon })
        .addTo(map)
        .bindPopup(
            `<a href="https://www.google.com/maps/dir/?api=1&destination=${spot[1]}%2C${spot[0]}">Get Directions</a><br />${spot[4]},${spot[5]}<br />${spot[3]}`);
});

// MANLY - NORTHERN BEACHES COUNCIL

manlyArr.forEach(spot => {
    return L.marker([spot[1], spot[0]], { icon: customIcon })
    .addTo(map)
    .bindPopup(
        `<a href="https://www.google.com/maps/dir/?api=1&destination=${spot[1]}%2C${spot[0]}">Get Directions</a><br />${spot[2]}`);
});

// NORTH SYDNEY COUNCIL

nthsydArr.forEach(spot => {
    return L.marker([spot[3], spot[2]], { icon: customIcon })
        .addTo(map)
        .bindPopup(
            `<a href="https://www.google.com/maps/dir/?api=1&destination=${spot[3]}%2C${spot[2]}">Get Directions</a><br /> ${spot[0]}, ${spot[1]} space(s)`);
});

// SYDNEY CITY COUNCIL

sydArr.forEach(spot => {
    return L.marker([spot[1], spot[0]], { icon: customIcon })
        .addTo(map)
        .bindPopup(
            `<a href="https://www.google.com/maps/dir/?api=1&destination=${spot[1]}%2C${spot[0]}">Get Directions</a><br /> ${spot[3]}, ${spot[2]} space(s)`);
});

// WAVERLEY COUNCIL (Bondi, Bronte etc)

waverleyArr.forEach(spot => {
    return L.marker([spot[1], spot[0]], { icon: customIcon })
    .addTo(map)
    .bindPopup(
        `<a href="https://www.google.com/maps/dir/?api=1&destination=${spot[1]}%2C${spot[0]}">Get Directions</a><br /> ${spot[2]} space(s)`);
});


// Z.MISC COUNCILS - incl Blue Mountains

miscArr.forEach(spot => {
    return L.marker([spot[1], spot[0]], { icon: customIcon })
        .addTo(map)
        .bindPopup(
            `<a href="https://www.google.com/maps/dir/?api=1&destination=${spot[1]}%2C${spot[0]}">Get Directions</a><br />${spot[4]},${spot[5]}<br />${spot[3]}`);
});

