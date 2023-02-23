// 分离链接法
// 引入链表
// @ts-check
const LinkedList = require('../03_链表/LinkedList')

class HashTableSeparateChaining{
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

  // 创建散列函数
  // 社区最推崇的散列函数之一
  djb2HashCode(key){
    const tableKey = this.keyToString(key)
    let hash = 5381
    for(let i = 0; i < tableKey.length; i++){
      hash = (hash * 33) + tableKey.charCodeAt(i)
    }
    return hash % 1013;
  }

  // 得到key的哈希值
  hashCode(key){
    return this.djb2HashCode(key)
  }

  // put方法
  put(key, value){
    if(key != null && value != null){
      const position = this.hashCode(key)
      // 如果这个位置还没有元素
      if(this.table[position] == null){
        // 创建一个链表
        this.table[position] = new LinkedList()
      }
      // 说明有链表了，则加入一个值
      this.table[position].push(new ValuePair(key, value))
      return true
    }
    return false
  }

  // get方法
  get(key){
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if(linkedList != null && !linkedList.isEmpty()){
      let current = linkedList.getHead()
      while(current != null){
        if(current.element.key === key){
          return current.element.value
        }
        current = current.next
      }
    }
    return undefined
  }

  // remove方法
  remove(key){
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if(linkedList != null && !linkedList.isEmpty()){
      let current = linkedList.getHead()
      while(current != null){
        if(current.element.key === key){
          linkedList.remove(current.element)
          if(linkedList.isEmpty()){
            delete this.table[position]
          }
          return true
        }
        current = current.next
      }
    }
    return false
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