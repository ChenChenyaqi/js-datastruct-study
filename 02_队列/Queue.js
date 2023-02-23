class Queue{
  constructor() {
    // 定义队列大小
    this.count = 0;
    // 第一个元素
    this.lowestCount = 0;
    // 存储数据
    this.items = {}
  }

  // 向队列尾部追加一项
  enqueue(element){
    this.items[this.count] = element;
    this.count++;
  }

  // 大小
  size(){
    return this.count - this.lowestCount
  }

  // 检查是否为空
  isEmpty(){
    return this.size() === 0
  }

  // 移除第一项
  dequeue(){
    if(this.isEmpty()){
      return undefined
    }
    // 获取第一项
    const item = this.items[this.lowestCount];
    // 删除第一项
    delete this.items[this.lowestCount]
    // 指针后移
    this.lowestCount++;
    return item
  }

  // 查看第一项
  peek(){
    if(this.isEmpty()){
      return undefined;
    }
    return this.items[this.lowestCount]
  }

  // 清空队列
  clear(){
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  // toString()
  toString(){
    if(this.isEmpty()){
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`;
    for(let i = this.lowestCount + 1; i < this.count; i++){
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}

module.exports = Queue