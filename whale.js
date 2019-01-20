let input= "whale talk";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray= [];
for (let i=0; i<input.length; i++) {
  for (let j=0; j<vowels.length; j++){
    if (input[i]===vowels[j])  {
      if (input[i] === 'a') {
      resultArray.push('aa')}
      else {
        resultArray.push(input[i]);
      }
     }
    }
   }
  
console.log(resultArray);
console.log(resultArray.join('').toUpperCase());
