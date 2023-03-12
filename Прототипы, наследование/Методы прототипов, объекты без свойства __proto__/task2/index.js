function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");



rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); // undefined

//Вызовы делают разное. В первом случае выводится Rabbit, так как он находится перед точкой, то есть это this. 
//В остальных случаях в качестве this выступает Rabbit.prototype