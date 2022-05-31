import nthsyd_coord from './nthsyd_coord.json'

// get array
const coord = nthsyd_coord;
const getArr = coord.Placemark;

// console.log(getArr);

const getNewArr = getArr.map((entry) => {
   //getStreetName
    const getDescription = entry.description;
    const splitDescription = getDescription.split("<br>");
    const streetName1 = splitDescription[3];
    const streetName2 = streetName1.split(": ");
    const streetName = streetName2[1];
    //getSpace
    const space = entry.name;
    //getCoord
    const coord = entry.Point.coordinates;
    const coordxy = coord.split(",");
    // createNewStr
    const newStr = streetName + "," + space + "," + coordxy;
    const newArr = newStr.split(",");
    return newArr;
})

// console.log(getNewArr);

export default getNewArr;