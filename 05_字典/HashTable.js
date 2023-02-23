// 散列表，可以更快地获得一个值
// js 对象就是用散列表实现的，
/* 
  我们造的这个temp对象并不是完全空白，他是基于Object原型链继承而来的，所以自带了一个__proto__属性，
      如果你的目标数组里面恰好有"__proto__"这个值，返回的结果就有问题了
  可以使用Object.create(null)的方式来创建一个完全空白、无原型的空对象。

*/
// @ts-check

// 处理散列表 冲突的方法：
// 分离链接、线性探查、双散列法
// 分离链接：为散列表的每一个位置创建一个链表，并将元素存储在里面
// 线性探查：如果一个position被占用了，它就在position + 1出存储，如果position + 1也被占用了，就继续往下

class HashTable {
  constructor() {
    this.table = {}
  }

  // 将key转换为字符串
  keyToString(item) {
    if (item === null) {
      return 'NULL';
    } else if (item === undefined) {
      return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
      return `${item}`;
    }

    return item.toString();
  }

  // 创建散列函数
  loseloseHashCode(key){
    if(typeof key === 'number'){
      return key;
    }
    const tableKey = this.keyToString(key)
    let hash = 0
    for(let i = 0; i < tableKey.length; i++){
      hash += tableKey.charCodeAt(i)
    }
    return hash % 7;
  }

  // 得到key的哈希值
  hashCode(key){
    return this.loseloseHashCode(key)
  }

  // 添加一个值
  put(key, value){
    if(key != null && value != null){
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }

  // 获取一个值
  get(key){
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  // 移除一个值
  remove(key){
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if(valuePair != null){
      delete this.table[hash]
      return true
    }
    return false;
  }

  // size()
  size(){
    return Object.keys(this.table).length
  }

  // 是否为空
  isEmpty(){
    return this.size() === 0
  }

  // 清空
  clear(){
    this.table = {}
  }

  // toString()
  toString(){
    if(this.isEmpty()){
      return ''
    }
    const keys = Object.keys(this.table);
    let objStrArr = []
    for (let i = 0; i < keys.length; i++) {
      objStrArr.push(`{${keys[i]} => ${!this.get(keys[i]) ? 'undefined' : this.get(keys[i]).toString()}}`)  
    }
    return objStrArr.join('')
  } 
}

class ValuePair{
  constructor(key, value){
    this.key = key;
    this.value = value;
  }

  toString(){
    return `[#${this.key}: ${this.value}]`
  }
}

const hash = new HashTable()
hash.put('Gandalf', 'd1aw351f3@emial.com')
hash.put(null, null)
hash.put(undefined, undefined)
hash.put(131,1135)
hash.put({123:'dawd'}, 'dawef')

console.log(hash.hashCode('Gandalf'));
console.log(hash.get('Gandalf'))
console.log(hash.get('Gdalf'))

hash.remove('Gandalf')
console.log(hash.get('Gandalf'))
console.log(hash.get(null))
console.log(hash.get(undefined))
console.log(hash.get(131))
console.log(hash.get({123:'dawd'}))

console.log(hash.toString());


