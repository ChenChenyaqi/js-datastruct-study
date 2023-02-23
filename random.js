const n = 648
const map = new Map()

for (let i = 0; i < n * n; i++) {
    const random = Math.floor(Math.random() * 648)
    if(map.has(random)){
        map.set(random, map.get(random)  + 1)
    } else {
        map.set(random, 1)
    }
}
const arr = [];

class Node2{
    constructor(key,value){
        this.key = key
        this.value = value
    }
}

for(const entry of map){
    arr.push(new Node2(entry[0], entry[1]))
}

arr.sort((a, b) => a.value - b.value)
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr);