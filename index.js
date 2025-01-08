//sum zero problem

// here it is with o(n2)
let arr = [-5, -4,-3,-2, 0, 2,4,6 , 8];
function cal(arr){
  let left = arr[0];
  let right = arr.length - 1;
  
  while(left < right){
      sum = arr[left] + arr[right];
      if(sum === 0){
          return [arr[left], arr[right]];
      } else if(sum>0){
          right --;
      } else {
          left ++;
      }
  }
    
}
let val =  cal(arr);
console.log("Line 15 ", val)