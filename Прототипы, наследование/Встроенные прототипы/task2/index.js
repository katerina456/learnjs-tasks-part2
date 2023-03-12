function f(a, b) {
  alert( a + b );
}

Function.prototype.defer = function(ms) {
  return function(...arguments) {
    setTimeout(() => f.apply(this, arguments), ms)
  }
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
