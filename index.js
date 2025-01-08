//Anagram check

let stringOne = "Kumar Gourav";

let obj= {};

let stringToArray = [...stringOne.toLowerCase()];

for(let char of stringToArray){
    if(char !== ' '){
        obj[char] = (obj[char] || 0) +1;
    }
}

console.log(obj)