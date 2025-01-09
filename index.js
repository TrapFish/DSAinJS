//checking square in array
// [1,2,3,4]-> [1, 9, 4,16]


function arrayCheck(val, valA){
    let map1 = {};
    let map2 = {};

    for(let i of val){
      map1[i] = (map1[i] || 0) + 1;
    }
    for(let i of valA){
      map2[i] = (map2[i] || 0) + 1;
    }

    console.log("Line 16 ::", map1, map2)

    for(key in map1){
      if(!map2[key * key]){
        return false;
      }
      if(map1[key] !== map2[key * key]){
        return false;
      }
    }
    return true;
}

let arr1= [1,2,3,4];
let arr2 =[1,4,8,16];

console.log(arrayCheck(arr1, arr2));