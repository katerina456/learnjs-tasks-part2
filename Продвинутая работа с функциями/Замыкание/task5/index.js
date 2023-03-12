/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

function inBetween(a, b) {
  return function(x) {
    return x <= b && x >= a;
  }
}


function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  }
}