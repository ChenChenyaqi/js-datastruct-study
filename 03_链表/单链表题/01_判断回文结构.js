// @ts-check
function test(head){
  if(head == null || head.next == null){
    return true
  }

  if(head.next.next == null){
    return head.val === head.next.val
  }

  // 快慢指针找中点
  let fast = head.next
  let slow = head
  while(fast != null && fast.next != null){
    fast = fast.next.next
    slow = slow.next
  }

  // 把链表右边逆序
  let cur = slow
  let pre = null
  let next = null
  while(cur){
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  // 右边头节点
  let rightHead = pre
  
  let leftHead = head
  let flag = true
  while(rightHead && leftHead){
    if(rightHead.val !== leftHead.val){
      flag = false
    }
    rightHead = rightHead.next
    leftHead = leftHead.next
  }

  // 恢复
  cur = pre
  pre = null
  next = null
  while(cur){
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return flag
}