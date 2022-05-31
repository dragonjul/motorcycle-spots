import bne_coord from './bne_coord.json'

// get array
const coord = bne_coord;
const getArr = coord.Placemark;

// console.log(getArr);

const coordxy = getArr.map((entry) => {
    const getCoord = entry.Point.coordinates;
    const getDescription = entry.description;
    const getStreet = entry.name;
    const newStr = getCoord + "," + getDescription + "," + getStreet
    const coordArr = newStr.split(",");
    return coordArr;
});

// console.log(coordxy);

export default coordxy