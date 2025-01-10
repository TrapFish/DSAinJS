function findOddUsingRecursive(inArra){
  let result = [];
  function helperRecursiveFunction(inarrray){
    if(inarrray.length === 0){
       return ;
    } else {
        let firstArray = inarrray[0];
        if(firstArray % 2 !== 0){
          result.push(firstArray);
        }
        helperRecursiveFunction(inarrray.slice(1));
    }

  }
  helperRecursiveFunction(inArra);
  console.log("line 16 ::", result)
  return result;
}

let imnArray = [1,2,3,4,5, 6,7,8,9,10];
findOddUsingRecursive(imnArray);
//let outArray = [1,3,5,7,9]