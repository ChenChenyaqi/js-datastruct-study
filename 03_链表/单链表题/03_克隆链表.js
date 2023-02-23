// @ts-check
class MyNodeList {
  constructor(val, next, rand) {
    this.val = val
    this.next = next
    // rand 随机指，可能是null， 可能是 其它节点，可能是 自己
    this.rand = rand
  }

  toString(){
    let cur = this
    let str = []
    while(cur){
      str.push(`${cur.val}->`)
      cur = cur.next
    }
    return str.join('')
  }
}

let head = new MyNodeList(1)
let node2 = new MyNodeList(2)
let node3 = new MyNodeList(3)
head.next = node2
node2.next = node3
head.rand = node3
node2.rand = head
node3.rand = null

let clonHead = clonList(head)
console.log(clonHead.toString());

// 复制链表
function clonList(head) {
  if (head == null) {
    return null
  }

  let cur = head
  let next = null
  // node1 -> node1' -> node2 -> node2' -> node3 -> node3' -> null
  while(cur){
    next = cur.next
    let copyCur = new MyNodeList(cur.val)
    cur.next = copyCur
    copyCur.next = next
    cur = next
  }
  // 处理rand
  let p1 = head
  let p2 = head.next
  while(p2.next){
    p2.rand = p1.rand ? p1.rand.next : null
    p1 = p2.next
    p2 = p2.next.next
  }
  p2.rand = p1.rand ? p1.rand.next : null
  
  // 分离 head 和 cloneHead
  p1 = head
  p2 = head.next
  let newHead = p2
  while(p2.next){
    p1.next = p2.next
    p1 = p1.next
    p2.next = p1.next
    p2 = p2.next
  }
  p1.next = p2.next

  return newHead
}