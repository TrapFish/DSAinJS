//Binary Search

function binarySearch(sortedArray, targetValue){
   
   let left = 0;
   let right = sortedArray.length - 1;
   while(left <= right){
     let mid = Math.floor((left + right) / 2);
     
     if(sortedArray[mid] === targetValue){
       return mid;
     } else if(sortedArray[mid] < targetValue){
      left = mid + 1;
     } else{
      right = mid -1;
     }
   }
   return -1;
}

const sortedArray = [1, 2, 3, 5, 7, 11, 13];
const targetValue = 5;
const foundValue = binarySearch(sortedArray, targetValue);


