function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

function spy(func) {
  let cache = new Map();

  function into(...arguments) {
    into.calls.push(arguments);

    return func.apply(this, arguments);
  };

  into.calls = [];

  return into;
}
