let arr = [1,1,2,2,3,4,4,5,6,7,8,8];


let newArr = arr.reduce((acc, value)=> {
 
    if(!acc.includes(value)){
        acc.push(value);
    }

    return acc;
} , []);
console.log(newArr, newArr.length)