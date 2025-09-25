
var intToRoman = function(num) {
    
};

// ---------------- 4️ OPTIONAL: USER INPUT ----------------

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// For multiple parameters, separate by comma
rl.question('Enter input(s) separated by comma: ', function (input) {
  const params = input.split(',').map((x) => {
    x = x.trim();
    // Try to parse numbers, else keep string
    if (!isNaN(x) && x !== '') return Number(x);
    try {
      return JSON.parse(x);
    } catch {
      return x;
    } // for arrays/objects
  });
  console.log('Output:', romanToInt(...params));
  rl.close();
});

rl.on('close', function () {
  process.exit(0);
});
