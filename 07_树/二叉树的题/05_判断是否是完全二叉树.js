// @ts-check

/* 
  1、如果 左空 右不空， return false
  2、在 1 不成立的情况下，如果遇到了一个节点为空，则以后遇到的节点都必须是叶节点
*/

function checkCompleteTree(root){
  if(root == null){
    return true
  }

  let queue = []
  queue.push(root)

  // 是否遇到了第一个节点为空
  let leaf = false

  while(queue.length){
    let node = queue.shift()
    let left = node.left
    let right = node.right
    // 情况2 和 情况1
    if((leaf && (left != null || right != null))  ||  (left == null && right != null)){
      return false
    }
    if(left){
      queue.push(left)
    }
    if(right){
      queue.push(right)
    }
    if(left == null || right == null){
      leaf = true
    }
  }
  return true
}