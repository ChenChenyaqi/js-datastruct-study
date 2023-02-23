const DoublyNode = require('./node/doublyNode')

class DoublyLinkedList {
  // 传入自定义比较两个节点相等的函数规则，默认使用默认规则
  constructor(equalsFn = this.defaultEquals) {
    // 记录链表中节点数量
    this.count = 0;
    // head头节点
    this.head = undefined;
    // 自定义规则
    this.equalsFn = equalsFn;
    // 对链表最后一个元素的引用
    this.tail = undefined
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
  defaultEquals(a, b) {
    return a === b
  }

  /**
  * 向链表尾部追加一个值
  * 
  * @function 向列表后追加节点的函数
  * @description 向列表后追加节点
  * @param element 节点的值
  * @return undefined
  * @author chenyaqi
  * @version 1.0
  **/
  push(element) {
    const node = new DoublyNode(element);
    let current;
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    }
    this.count++;
  }

  // 移除链表指定位置的节点
  removeAt(index) {
    // 先检查是否越界
    if (index >= 0 && index < this.count) {
      let current = this.head;

      // 如果是移除第一项
      if (index === 0) {
        this.head = current.next;
        // 如果只有一项，更新tail
        if(this.count === 1){
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if(index === this.count - 1){
        current = this.tail;
        current.prev.next = undefined
        this.tail = current.prev;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next
        // 此时current就是要移除的那个节点
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element;
    }
    return undefined
  }

  // 迭代链表直到目标位置的公共方法
  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node
    }
    return undefined
  }

  // 在任意位置插入任意值
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      // 创建节点
      const node = new DoublyNode(element);
      let current = this.head;
      // 如果插入的是第一个位置
      if (index === 0) {
        // 如果链表为空，则头节点指向node，尾结点也是node
        if(this.head == null){
          this.head = node;
          this.tail = node;
        } else {
          // 不为空时
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      } else if(index === this.count){
        // 插入的位置时最后一个位置时
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        // 获取inde的前一个节点
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        node.prev = previous;
        previous.next = node;
        current.prev = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  // 返回一个元素的位置
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  // 移除指定元素
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // 大小
  size() {
    return this.count;
  }

  // 判断是否为空
  isEmpty() {
    return this.size() === 0
  }

  // 得到头节点
  getHead() {
    return this.head;
  }

  // toString()
  toString() {
    if (this.head == null) {
      return '';
    }
    const objArr = [];
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      objArr.push(current.element);
      current = current.next
    }
    return objArr.join(',')
  }
}

const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.push(1);
doublyLinkedList.push(2)
console.log(doublyLinkedList.toString());  // 1,2
doublyLinkedList.remove(2) 
console.log(doublyLinkedList.toString()); // 1
doublyLinkedList.insert(3,0)
doublyLinkedList.insert(3,2)
console.log(doublyLinkedList.toString()); // 3,1,3
doublyLinkedList.removeAt(0)
console.log(doublyLinkedList.toString()); // 1,3
doublyLinkedList.removeAt(doublyLinkedList.count - 1)
console.log(doublyLinkedList.toString()); // 3
