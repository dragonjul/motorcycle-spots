import proj4 from 'proj4'
import waverley_coord from './waverley.json'

// WAVERLEY COUNCIL [NSW]

//transform coordinate system
proj4.defs([
    [
        "EPSG:28356", "+proj=utm +zone=56 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"],
    [
        "EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs"]
]);

const convert = (x, y) => {
    const projone = proj4('EPSG:28356');
    const projtwo = proj4('EPSG:4326');
    return proj4(projone, projtwo, [x, y]);
}

// create new array with converted coordinates

const coord28356 = waverley_coord;
const coord28356arr = coord28356.features;

// console.log(coord28356arr);

// note!! x is lng and y is lat (make sure you take correct coord for lat and lng in map.js)
const coordxy = coord28356arr.map((entry1) => {
    const coordx = entry1.geometry.coordinates[0];
    const coordy = entry1.geometry.coordinates[1];
    return convert(coordx, coordy);
})

// console.log(coordxy);

// get no. of spaces
const spaceStreetArr = coord28356arr.map((entry1) => {
    const getSpace = entry1.properties.Spaces;
    return getSpace;
})

// console.log(spaceStreetArr);

const combinedArray = [];

for (let i=0; i<spaceStreetArr.length; i++){
    const newStr = coordxy[i] + "," + spaceStreetArr[i];
    const newStrSplit = newStr.split(",");
    combinedArray.push(newStrSplit);
    // console.log(newStrSplit);
};

export default combinedArray;