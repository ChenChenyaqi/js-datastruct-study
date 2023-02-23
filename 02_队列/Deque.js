// 双端队列
class Deque{
  constructor(){
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // 向前端添加元素
  addFront(element){
    if(this.isEmpty()){
      this.addBack(element);
    } else if(this.lowestCount > 0){
      this.lowestCount--;
      this.items[this.lowestCount] = element
    } else {
      for(let i = this.count; i > 0; i--){
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  // 向后端添加元素
  addBack(element){
    this.items[this.count] = element
    this.count++
  }

  // 大小
  size(){
    return this.count - this.lowestCount
  }

  // 是否为空
  isEmpty(){
    return this.size() === 0
  }

  // 从前端移除一个元素
  removeFront(){
    if(this.isEmpty()){
      return undefined
    }
    const item = this.items[this.lowestCount];
    delete this.items[this.lowestCount]
    this.lowestCount++
    return item
  }

  // 从后端移除一个元素
  removeBack(){
    if(this.isEmpty()){
      return undefined
    }
    const item = this.items[this.count - 1];
    delete this.items[this.count - 1]
    this.count--
    return item
  }

  // 查看前端第一个元素
  peekFront(){
    if(this.isEmpty()){
      return undefined
    }
    return this.items[this.lowestCount]
  }

  // 查看后端第一个元素
  peekBack(){
    if(this.isEmpty()){
      return undefined
    }
    return this.items[this.count - 1]
  }

  // toString()
  toString(){
    if(this.isEmpty()){
      return ''
    }
    let objArr = []
    for(let i = this.lowestCount; i < this.count; i++){
      objArr.push(this.items[i])
    }
    return objArr.join(',')
  }

   // 清空队列
   clear(){
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
}

module.exports = Deque