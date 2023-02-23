const map = new Map()
map.set(1, '123')
map.set('1', '456')
map.set(null, 'null')
map.set('null', 'null2')
map.set(undefined, 'undefined')
map.set('undefined', 'undefined2')
console.log(map.get(1));
console.log(map.get('1'));
console.log(map.get(null));
console.log(map.get('null'));
console.log(map.get(undefined));
console.log(map.get('undefined'));


function Student(age, name){
  this.age = age
  this.name = name
}

Student.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.name);
}

let stu1 = new Student(18, "Jone")
let stu2 = new Student(18, "Jone")

map.set(stu1, "1")
map.set(stu2, "2")

console.log(map.has(stu1));
console.log(map.has(stu2));