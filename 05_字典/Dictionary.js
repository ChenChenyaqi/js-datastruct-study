class ValuePair{
  constructor(key, value){
    this.key = key;
    this.value = value;
  }

  toString(){
    return `[#${this.key}: ${this.value}]`
  }
}


class Dictionary{
  constructor(){
    this.table = {}
  }

  // 将key转换为字符串
  keyToString(item){
    if(item === null){
      return 'NULL';
    } else if(item === undefined){
      return 'UNDEFINED';
    } else if(typeof item === 'string' || item instanceof String){
      return `${item}`;
    }

    return item.toString();
  }

  // 检查一个键是否存在于字典中
  hasKey(key){
    return this.table[this.keyToString(key)] != null
  }

  // 向字典中添加新元素
  set(key, value){
    if(key != null && value != null){
      const tableKey = this.keyToString(key)
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  // 删除一个值
  remove(key){
    if(this.hasKey(key)){
      delete this.table[this.keyToString(key)]
      return true;
    }
    return false;
  }

  // 检索一个值
  get(key){
    const valuePair = this.table[this.keyToString(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  // 以数组形式返回所有valuePair
  keyValues(){
    return Object.values(this.table)
  }

  // 返回所有key
  keys(){
    return this.keyValues().map(valuePair => valuePair.key)
  }

  // 返回所有values
  values(){
    return this.keyValues().map(valuePair => valuePair.value)
  }

  // forEach迭代每个键值对
  // 回调函数返回false，则终止迭代
  forEach(callbackFn){
    const valuePairs = this.keyValues();
    for(let i = 0; i < valuePairs.length; i++){
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
      if(result === false){
        break;
      } 
    }
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
      return '';
    }
    const valuePairs = this.keyValues();
    let objStrArr = []
    valuePairs.forEach(item => {
      objStrArr.push(`${item.toString()}`)
    })
    return objStrArr.join('')
  }

}

const dictionary = new Dictionary()
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', '13213a2wd@qq.com')
console.log(dictionary.hasKey('Gandalf'));

dictionary.remove('John')
dictionary.set(123,131)
dictionary.set(null, null)
console.log(dictionary.keys());
console.log(dictionary.values());

console.log(dictionary.get(123));

dictionary.forEach((k,v)=>{
  console.log(k, v);
})