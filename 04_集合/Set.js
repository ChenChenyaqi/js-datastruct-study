class Set {
  constructor() {
    this.items = {}
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true
    }
    return false
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false
  }

  has(element) {
    // return element in this.items;
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length;
  }

  sizeLegacy() {
    let count = 0;
    for (let key in this.items) {
      if (this.has(key)) {
        count++;
      }
    }
    return count;
  }

  // 返回一个包含集合中所有值的数组
  values() {
    return Object.values(this.items)
  }

  valuesLegacy() {
    let values = [];
    for (let key in this.items) {
      if (this.has(key)) {
        values.push(this.items[key])
      }
    }
    return values;
  }

  /* 
    集合的运算：并集、差集、交集、子集
  */
  //  并集
  union(otherSet) {
    const unionSet = new Set()
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }

  // 交集
  intersection(otherSet){
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if(otherValues.length - values.length > 0){
      biggerSet = otherValues;
      smallerSet = values;
    }

    smallerSet.forEach(item => {
      if(biggerSet.includes(values)){
        intersectionSet.add(values);
      }
    })
    return intersectionSet;
  }

  // 差集
  difference(otherSet){
    const differenceSet = new Set();
    this.values().forEach(value => {
      if(!otherSet.has(value)){
        differenceSet.add(value);
      }
    })
    return differenceSet;
  }

  // 当前集合是否是otherSet的子集
  isSubsetOf(otherSet){
    if(this.size() > otherSet.size()){
      return false;
    }
    let isSubset = true;
    this.values().every(value => {
      if(!otherSet.has(value)){
        isSubset = false;
        return false;
      }
      return true;
    })
    return isSubset
  }

}

const set = new Set()

set.add(1)
console.log(set.values());
console.log(set.valuesLegacy())
console.log(set.has(1))
console.log(set.size())

set.add(2)
console.log(set.values());
console.log(set.valuesLegacy())
console.log(set.has(1))
console.log(set.sizeLegacy());
console.log(set.size())

set.add(1)
console.log(set.values());
console.log(set.valuesLegacy())
console.log(set.has(1))
console.log(set.size())

set.delete(1)
console.log(set.values());
set.delete(2)
console.log(set.values());