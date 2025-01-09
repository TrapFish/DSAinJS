//count of the largest consecutive number


function largestContinuousNumber(arr, n){
    let arrLength = arr.length;
    if(n > arrLength) return false;
    let numOfContinousSubArray = arrLength - n + 1;
    let max = 0;
    let subArarys= [];

    for(let i = 0; i < numOfContinousSubArray; i++){
      subArarys.push(arr.slice(i , i + n));
    }

    for(let j =0 ; j < subArarys.length; j++){
       let sum = subArarys[j].reduce((acc, value)=>{
          return acc+=value;
       }, 0)
       console.log("Sum is ::", sum)
       if(sum > max){
        max = sum;
       }
    }
    console.log("max is ::" , max)
    console.log("Line 5 :: ", arr, n, arrLength, numOfContinousSubArray,subArarys)
   
}

let arr=[1,2,3,4,3,5,4,6,7,8];
let n = 4;
largestContinuousNumber(arr,n)