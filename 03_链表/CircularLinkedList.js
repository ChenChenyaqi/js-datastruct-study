const LinkedList = require('./LinkedList')
const Node = require('./node/node')

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = this.defaultEquals) {
    super(equalsFn)
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

  // 在任意位置插入元素
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.size() - 1);
          this.head = node;
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true
    }
    return false;
  }
}