const unsortedArray = [64, 34, 25, 12, 22, 11, 90];

const sortedArray = unsortedArray.sort((a,b)=>{
  return a-b;
})

// Example usage:

// const sortedArray = sortArray(unsortedArray);
console.log("Sorted array:", sortedArray);