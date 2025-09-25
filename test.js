let nums = [2, 7, 11, 15];
let target = 9;

let map = new Map();
let result = [];
for (let i = 0; i < nums.length; i++) {
  let complement = target - nums[i];
  if (map.has(complement)) {
    result.push([map.get(complement), i]);
  }

  map.set(nums[i], i);
}
// Count Characters
let s = 'Hello world';
let smap = {};

for (let i = 0; i < s.length - 1; i++) {
  if (smap[s[i]]) {
    smap[s[i]] += 1;
  } else {
    smap[s[i]] = 1;
  }
}
// console.log(smap);
// Find Duplicates in Array
let array = [1, 2, 3, 2, 4, 5, 1];
let dmap = new Map();
let dE = [];
for (let a in array) {
    let a = array[a];
  if (dmap.has(a)) {
    dE.push(a);
  }
  dmap.set(a, a);
}
// console.log(dE);