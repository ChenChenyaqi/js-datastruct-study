/* 
  给定两个可能有环，也可能无环的单链表，头节点 head1 和 head2。
    如果这两个链表相交，请返回相交的 第一个节点。
    如果不相交，返回null
*/

// 两个没有环的链表相交情况
function test(head1, head2) {
  if (head1 == null || head2 == null) {
    return null
  }
  // 先判断这 两个链表 是否相交
  let cur1 = head1
  let cur2 = head2
  let head1Len = 1
  let head2Len = 1
  // 1 -> 2 -> 3 -> null
  while (cur1.next) {
    cur1 = cur1.next
    head1Len++
  }
  while (cur2.next) {
    cur2 = cur2.next
    head2Len++
  }
  if (cur1 !== cur2) {
    return null
  }

  // 找到相交的节点
  let cha = Math.abs(head1Len - head2Len)
  if (head1Len >= head2Len) {
    cur1 = head1
    cur2 = head2
  } else {
    cur1 = head2
    cur2 = head1
  }
  for (let i = 0; i < cha; i++) {
    cur1 = cur1.next
  }
  while (cur1 !== cur2) {
    cur1 = cur1.next
    cur2 = cur2.next
  }
  return cur1
}

/*  两个链表都有环：1.各自独立、
                  2.入环节点共同（用无环链表相交问题解决）、
                  3.入环节点不同 
        1、3区别，loop1再转一次，回到自己之前如果遇不到loop2，则是情况1
                  */
function bothLoop(head1, loop1, head2, loop2) {
  let cur1 = null
  let cur2 = null
  if (loop1 === loop2) {
    // 用无环链表相交问题
    let head1Len = 1
    let head2Len = 1
    while (cur1.next !== loop1) {
      cur1 = cur1.next
      head1Len++
    }
    while (cur2.next !== loop2) {
      cur2 = cur2.next
      head2Len++
    }
    // 找到相交的节点
    let cha = Math.abs(head1Len - head2Len)
    if (head1Len >= head2Len) {
      cur1 = head1
      cur2 = head2
    } else {
      cur1 = head2
      cur2 = head1
    }
    for (let i = 0; i < cha; i++) {
      cur1 = cur1.next
    }
    while (cur1 !== cur2) {
      cur1 = cur1.next
      cur2 = cur2.next
    }
    return cur1
  } else {
    // 情况1、3
    cur1 = loop1.next
    while(cur1 !== loop1){
      if(cur1 === loop2){
        return loop1
      } 
      cur1 = cur1.next
    }
    return null
  }
}


// 返回一个链表的第一个  入环节点 或者 null
function EntryNodeOfLoop(pHead) {
  // 快慢指针
  let fast = pHead
  let slow = pHead
  let flag = false
  while (fast != null && fast.next != null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      flag = true
      break
    }
  }
  if (!flag) {
    return null
  }
  fast = pHead
  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }
  return fast
}