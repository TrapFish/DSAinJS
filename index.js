//insertion sort 

function insertionSort(inarr){
  for(i = 1; i < inarr.length ; i++){
    let current = inarr[i];
    let j = i-1;
    while(j >= 0 && inarr[j]>current){
      inarr[j+1] = inarr[j];
      j= j-1;
    }
    inarr[j+1]= current;
  }
return inarr;
}

let arr = [8,2,4,1,3]
insertionSort(arr)