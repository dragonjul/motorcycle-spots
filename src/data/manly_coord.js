import manly_coord from './manly_coord.json'

// NOTE: data in manly_coord.json had many duplicates, and was cleaned up manually. 

//  console.log(manly_coord);

 const coord = manly_coord.map(entry => {
   const coordxy = entry.geometry.coordinates;
   const getSpace = entry.properties.description;
   const newStr = coordxy + "," + getSpace;
   const newStrArr = newStr.split(',')
   return newStrArr;
 })

 export default coord;
 