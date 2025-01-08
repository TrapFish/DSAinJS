//Anagram check

function checkObjecFrequecy(str){
    let strToArray = [...str.toLowerCase()];
    let obj={};
    for(let char of strToArray){
        obj[char] = (obj[char] || 0)+1;
    }
    return obj;
}

function areObjectsEqual(obj1, obj2) {
    // Check if both objects are of the same type
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return false;
    }
  
    // Check if both objects are null
    if (obj1 === null && obj2 === null) {
      return true;
    }
  
    // Check if one of the objects is null
    if (obj1 === null || obj2 === null) {
      return false;
    }
  
    // Get all keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // Check if all keys exist in both objects
    for (const key of keys1) {
      if (!keys2.includes(key)) {
        return false;
      }
    }
  
    // Check if all key-value pairs are equal
    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }


function checkAnaGram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    const obj1 = checkObjecFrequecy(str1);
    const obj2 = checkObjecFrequecy(str2);
    console.log("Line 19 ::", obj1, obj2)
    const value = areObjectsEqual(obj1, obj2);
    return value;
}


let strOne = "hello";
let strTwo = "llhue";
console.log(checkAnaGram(strOne, strTwo));