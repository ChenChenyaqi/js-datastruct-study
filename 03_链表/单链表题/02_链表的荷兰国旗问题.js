// @ts-check

function test(head, target){
  if(head == null || head.next == null){
    return head
  }
  
  // 小于区域的头和尾
  let smallH = null
  let smallT = null
  // 等于区域的头和尾
  let equalH = null
  let equalT = null
  // 大于区域的头和尾
  let bigH = null
  let bigT = null

  let cur = head
  while(cur){
    if(cur.val < target){
      if(!smallH){
        smallH = cur
        smallT = cur
      } else {
        smallT.next = cur
        smallT = cur
      }
    } else if(cur.val > target){
      if(!bigH){
        bigH = cur
        bigT = cur
      } else {
        bigT.next = cur
        bigT = cur
      }
    } else {
      if(!equalH){
        equalH = cur
        equalT = cur
      } else {
        equalT.next = cur
        equalT = cur
      }
    }
  }

  // 连接
  if(smallT){
    smallT.next = equalH
    equalT = equalT ? equalT : smallT
  }

  if(equalT){
    equalT.next = bigH
  }

  return smallH ? smallH : (equalH ? equalH : bigH)
}