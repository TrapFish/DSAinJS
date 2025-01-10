//curring function with recursive function

function add(a){
  return function (b){
     if(b){
       return add(a+b);
     } else{
      return a;
     }
  }
}

console.log(add(2)(3)(8)());