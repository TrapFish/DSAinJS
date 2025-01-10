function sortArray(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: array with 0 or 1 element is already sorted
  }
 
  const middleValue = arr[Math.floor(Math.random() * arr.length)];
  
  const less = [];
  const great = [];
  const mid = [];

  for(const num of arr){
    if(num < middleValue){
      less.push(num);
    }else if(num > middleValue){
      great.push(num);
    }else{
      mid.push(middleValue)
    }
  }

  return [...sortArray(less) , ...mid , ...sortArray(great)]
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = sortArray(unsortedArray);
console.log("Sorted array:", sortedArray);