import proj4 from 'proj4'
import syd_coord_arcgis from './syd_coord_arcgis.json'
import syd_spaces from './syd_data.json'

// CITY OF SYDNEY COUNCIL [NSW]

//transform coordinate system
proj4.defs([
    [
        "EPSG:28356","+proj=utm +zone=56 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"],
    [
        "EPSG:4326","+proj=longlat +datum=WGS84 +no_defs"]
]);

const convert = (x,y) => {
    const projone = proj4('EPSG:28356');
    const projtwo = proj4('EPSG:4326');
    return proj4(projone, projtwo, [x,y]);
}

// create new array with converted coordinates

const coord28356 = syd_coord_arcgis;
const coord28356arr = coord28356.geometries;

// console.log(coord28356arr);

// note!! x is lng and y is lat (make sure you take correct coord for lat and lng in map.js)
const coordxy = coord28356arr.map((entry1) => {
    const coordx = entry1.coordinates[0];
    const coordy = entry1.coordinates[1];
    return convert(coordx, coordy);
}) 

// console.log(coordxy);

const sydSpaceArr = syd_spaces;
// console.log(sydSpaceArr);

const spaceStreetArr = syd_spaces.map((entry) => {
    //getspace
    const getSpace = entry.No_ofSpace;
    //getstring
    const getStreet = entry.Location;
    const getStreet2 = getStreet.trim();
    //createNewStr 
    const spaceStreetStr = getSpace + "," + getStreet2
    const getSpaceStreetArr = spaceStreetStr.split(",");
    return getSpaceStreetArr;
})

// console.log(spaceStreetArr);

const combinedArray = [];

for (let i=0; i< spaceStreetArr.length; i++){
    const newStr = coordxy[i] + "," + spaceStreetArr[i];
    const newStrSplit = newStr.split(",");
    combinedArray.push(newStrSplit)
    // console.log(newStrSplit);
}
// console.log(combinedArray);

export default combinedArray;

// const parkingSpots = [
//     {
//         lat: -33.9042507,
//         lng: 151.1912507
//     },

    // {
    //     siteId: "001",
    //     location: "Belmont St eastside",
    //     suburb: "Alexandria",
    //     lat: -33.9042507,
    //     lng: 151.1912507,
    //     timeLimit: "unlimited",
    //     spaces: 3,
    // },

    // {
    //     siteId: "002",
    //     location: "Lawrence St eastside",
    //     suburb: "Alexandria",
    //     lat: -33.9025029,
    //     lng: 151.1940348,
    //     timeLimit: "unlimited",
    //     spaces: 3,
    // },

    // {
    //     siteId: "003",
    //     location: "Lawrence St westside",
    //     suburb: "Alexandria",
    //     lat: -33.9071055,
    //     lng: 151.1897852,
    //     timeLimit: "unlimited",
    //     spaces: 2,
    // },

    // {
    //     siteId: "009",
    //     location: "Liverpool St northside",
    //     suburb: "Darlinghurst",
    //     lat: -33.8781729,
    //     lng: 151.2209432,
    //     timeLimit: "unlimited",
    //     spaces: 5,
    // },

    // {
    //     siteId: "010",
    //     location: "Victoria St eastside",
    //     suburb: "Darlinghurst",
    //     lat: -33.8803255,
    //     lng: 151.2198431,
    //     timeLimit: "unlimited",
    //     spaces: 12,
    // },

    // {
    //     siteId: "021",
    //     location: "Albion Ave northside",
    //     suburb: "Paddington",
    //     lat: -33.8842913,
    //     lng: 151.218959,
    //     timeLimit: "unlimited",
    //     spaces: 3,
    // },

    // {
    //     siteId: "022",
    //     location: "Napier St southside",
    //     suburb: "Paddington",
    //     lat: -33.8831916,
    //     lng: 151.2190427,
    //     timeLimit: "unlimited",
    //     spaces: 3,
    // },

    // {
    //     siteId: "023",
    //     location: "Napier St southside",
    //     suburb: "Paddington",
    //     lat: -33.8833381,
    //     lng: 151.2202308,
    //     timeLimit: "unlimited",
    //     spaces: 3,
    // },

    // {
    //     siteId: "024",
    //     location: "Darlinghurst Rd eastside",
    //     suburb: "Potts Point",
    //     lat: -33.8739582,
    //     lng: 151.2233291,
    //     timeLimit: "unlimited",
    //     spaces: 13,
    // },

    // {
    //     siteId: "025",
    //     location: "Elizabeth Bay Rd northside",
    //     suburb: "Potts Point",
    //     lat: -33.8718833,
    //     lng: 151.2279556,
    //     timeLimit: "unlimited",
    //     spaces: 6,
    // },

    // {
    //     siteId: "026",
    //     location: "Manning St northside",
    //     suburb: "Potts Point",
    //     lat: -33.8707097,
    //     lng: 151.2247666,
    //     timeLimit: "unlimited",
    //     spaces: 4,
    // },

    // {
    //     siteId: "071",
    //     location: "Harrington St eastside",
    //     suburb: "Sydney",
    //     lat: -33.8609577,
    //     lng: 151.207503,
    //     timeLimit: "unlimited - (motorbikes only 6am-10pm Mon-Fri)",
    //     spaces: 24,
    // },

    // {
    //     siteId: "074",
    //     location: "Kent St westside",
    //     suburb: "Sydney",
    //     lat: -33.8615003,
    //     lng: 151.2037875,
    //     timeLimit: "unlimited",
    //     spaces: 5,
    // },

    // {
    //     siteId: "090",
    //     location: "Pitt St eastside",
    //     suburb: "Sydney",
    //     lat: -33.875762,
    //     lng: 151.207943,
    //     timeLimit: "unlimited",
    //     spaces: 18,
    // },
// ]

