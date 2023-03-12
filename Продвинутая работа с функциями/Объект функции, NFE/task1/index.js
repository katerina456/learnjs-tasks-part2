function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  counter.set = function(value) {
    counter.count = value;
  }

  counter.decrease = function() {
    counter.count--;
  }

  return counter;
}

let counter = makeCounter();

counter.count = 10;
counter.decrease();
alert( counter() ); // 9


