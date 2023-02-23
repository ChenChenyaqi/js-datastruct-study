const Node = require('./node/node')

class LinkedList{
  // 传入自定义比较两个节点相等的函数规则，默认使用默认规则
  constructor(equalsFn = this.defaultEquals){
    // 记录链表中节点数量
    this.count = 0;
    // head头节点
    this.head = undefined;
    // 自定义规则
    this.equalsFn = equalsFn;
  }

  /**
  * 默认比较规则
  * @function 默认比较函数
  * @description 判断两个节点是否相等
  * @param a 节点1
  * @param b 节点2
  * @return 若相等则返回true，否则false
  * @author chenyaqi
  * @version 1.0
  **/
  defaultEquals(a, b){
    return a === b
  }

  /**
  * 向链表尾部追加一个值
  * @function 向列表后追加节点的函数
  * @description 向列表后追加节点
  * @param element 节点的值
  * @return undefined
  * @author chenyaqi
  * @version 1.0
  **/
  push(element){
    const node = new Node(element);
    let current;
    if(this.head == null){
      this.head = node;
    } else {
      current = this.head;
      while(current.next != null){
        current = current.next;
      }
      // 找到末尾元素，追加node
      current.next = node;
    }
    this.count++;
  }

  // 移除链表指定位置的节点
  removeAt(index){
    // 先检查是否越界
    if(index >= 0 && index < this.count){
      let current = this.head;

      // 如果是移除第一项
      if(index === 0){
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next
        // 此时current就是要移除的那个节点
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined
  }

  // 迭代链表直到目标位置的公共方法
  getElementAt(index){
    if(index >=0  && index < this.count){
      let node = this.head;
      for(let i = 0; i < index; i++){
        node = node.next;
      }
      return node
    }
    return undefined
  }

  // 在任意位置插入任意值
  insert(element, index){
    if(index >= 0 && index <= this.count){
      const node = new Node(element);
      if(index === 0){
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  // 返回一个元素的位置
  indexOf(element){
    let current = this.head;
    for(let i = 0; i < this.count; i++){
      if(this.equalsFn(element, current.element)){
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  // 移除指定元素
  remove(element){
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // 大小
  size(){
    return this.count;
  }

  // 判断是否为空
  isEmpty(){
    return this.size() === 0
  }

  // 得到头节点
  getHead(){
    return this.head;
  }

  // toString()
  toString(){
    if(this.head == null){
      return '';
    }
    const objArr = [];
    let current = this.head;
    for(let i = 0; i < this.count; i++){
      objArr.push(current.element);
      current = current.next
    }
    return objArr.join(',')
  }

}

const linkedList = new LinkedList()
console.log(linkedList.size());
linkedList.push(1);
linkedList.push(2);
console.log(linkedList.size());
console.log(linkedList.isEmpty());
linkedList.insert(3, 2)
console.log(linkedList.toString());
linkedList.remove(3)
linkedList.removeAt(linkedList.indexOf(2))
console.log(linkedList.toString());

module.exports = LinkedList