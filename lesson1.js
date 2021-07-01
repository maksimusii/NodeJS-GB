const clc = require("cli-color");

const n = +process.argv[2];
const m = +process.argv[3];
let z = 1;
let isSimple = false;

if (isNaN(n) || isNaN(m)) {
  console.log("В качестве аргументов переданны не числа");
  process.exit(-1);
}

const calcSimple = (n) => {
  if (n === 2) return true;
  if (n % 2 === 0 || n === 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
};

for(let i = n; i <= m; i++){
  if (calcSimple(i)) {
    isSimple = true;
  switch(z) {
    case 1: 
    console.log(clc.green(i));
    z++;
    break;
    case 2: 
    console.log(clc.yellow(i));
    z++;
    break;
    case 3: 
    console.log(clc.red(i));
    z = 1;
    break;
  };
  }
}
if (!isSimple) {
     console.log(clc.red("Простых чисел в диапозоне нет"));
   }
