/**
 * @param {string} s
 * @return {number}
 */
let myMap = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
]);
var romanToInt = function(s) {
 let n = s.length;
  let a = 0;
  for (let i = 0; i < n; i++) {
    if (myMap.get(s[i]) < myMap.get(s[i + 1])) {
   
      a += myMap.get(s[i + 1]) - myMap.get(s[i]);
      i++;
    } else {
      a += myMap.get(s[i]);
     
    }
  }
  

  return a;
  
};