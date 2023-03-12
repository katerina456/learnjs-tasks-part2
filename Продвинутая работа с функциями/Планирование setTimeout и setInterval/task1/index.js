function printNumbers(from, to) {
  let timerId = setInterval(() => {
    if (from <= to) {
      alert(from);
      from ++;
    } else {
      clearInterval(timerId)
    }
    
  }, 1000);
}

printNumbers(1, 7)


function printNumbers(from, to) {
  setTimeout(tick, 1000);

  function tick() {
    alert(from);
    from ++;
    if (from <= to) {
      
      setTimeout(tick, 1000);
    }
  }
}