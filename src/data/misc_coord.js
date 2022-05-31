import misc_coord from './misc_coord.json'

// get array
const coord = misc_coord;
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