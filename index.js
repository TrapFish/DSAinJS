//bubble sort


function bubbleSort(arr){
  for(let i = arr.length; i > 0 ; i--){
    console.log("Arr is ::", arr[i]);
    for(let j = 0; j < i-1; j++){
      if(arr[j]>arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  } 
  return arr;
}

let a = [4,3,5,6,2,90,54,55,34];
bubbleSort(a)