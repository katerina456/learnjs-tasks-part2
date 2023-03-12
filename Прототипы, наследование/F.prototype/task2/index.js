let obj2 = new obj.constructor();

//Работает:

function Rabbit(name) {
  this.name = name;
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");


//Не работает: если заменить прототип по умолчанию на другой объект, то свойства "constructor" в нём не будет.

function Bird(name) {
  this.name = name;
}

Bird.prototype = {};

let bird = new Bird("White");
let bird2 = new bird.constructor("Black");