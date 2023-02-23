const set = new Set();
set.add(1)
set.add(2)
set.add(3)
// set.clear
// set.delete
// set.has
// set.size
console.log(set.values());
const iterator = set.values()
console.log(iterator.next().value); // 1
console.log(iterator.next()); // {value:2, done:false}

for(let n of iterator){
  console.log(n);  // 3
}


let entries = set.entries();
for (const [k,v] of entries) {
    console.log(k,v);
}

console.log('###########');
let arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);

console.log('###########');
let obj = {name: 'jack', age: 18};
const {name, age} = obj;
console.log(name, age);
