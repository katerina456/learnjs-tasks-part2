//sum(1)(2) = 3
//sum(5)(-1) = 4


function sum(a) {
  return function sumInto(b) {
    return a + b;
  }
}

console.log(sum(1)(2))
console.log(sum(5)(-1))