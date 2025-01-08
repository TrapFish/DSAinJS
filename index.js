//sum zero problem

// here it is with o(n2)
let arr = [-5, -4,-3,-2, 0, 2,4,6 , 8];
function cal(arr){
    for(let i = 0; i < arr.length - 1; i++){
    for(let j = 1; j < arr.length -1; j++){
        if(arr[i] + arr[j] === 0){
            return [arr[i], arr[j]]
        }
    }
}
    
}
let val =  cal(arr);
console.log("Line 15 ", val)