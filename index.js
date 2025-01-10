//sorting an array with recursion

function sortingWithRecursion(arr){
   if(arr.length <= 1){
     return arr;
   }

   let middle = Math.floor(arr.length / 2);
   let leftHalf = arr.slice(0, middle);
   let rightHalf = arr.slice(middle);

   return merge(leftHalf, rightHalf);
}


function merge(leftHalfPortion, rightHalfPortion){
     let result = [];
     let leftIndex = 0;
     let rightIndex = 0;

     while(leftIndex < leftHalfPortion.length && rightIndex < rightHalfPortion.length){
        if(leftHalfPortion[leftIndex] < rightHalfPortion[rightIndex]){
              result.push(leftHalfPortion[leftIndex]);
              leftIndex++;
        }else{
          result.push(rightHalfPortion[rightIndex]);
          rightIndex++;
        }
     }

     console.log("data is" ,result, leftHalfPortion, rightHalfPortion, result.concat(leftHalfPortion.slice(leftIndex)).concat(rightHalfPortion.slice(rightIndex)));
}

let arr = [64, 34, 25, 12, 22, 11, 90];
sortingWithRecursion(arr);