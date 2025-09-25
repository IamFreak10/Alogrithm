/**
 * @param {number} num
 * @return {string}
 */

let romanMap = new Map([
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
]);
function intToRoman(num) {
  let s = '';
  
  romanMap.forEach((values, keyes) => {
    if (num > 0) {
      rem = num - (num % values);
      num -= rem;
      if(rem>0){
       let cnt=Math.floor(rem/values);
       s+=keyes.repeat(cnt);
      }
      
    }
  });
 return s;
}

