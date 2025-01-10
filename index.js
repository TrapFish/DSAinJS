function sortArray(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: array with 0 or 1 element is already sorted
  }

  const pivot = arr[Math.floor(Math.random() * arr.length)]; // Select a random pivot
  const less = [];
  const greater = [];
  const equal = [];

  for (const num of arr) {
    if (num < pivot) {
      less.push(num);
    } else if (num > pivot) {
      greater.push(num);
    } else {
      equal.push(num);
    }
  }

  return [...sortArray(less), ...equal, ...sortArray(greater)];
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = sortArray(unsortedArray);
console.log("Sorted array:", sortedArray);