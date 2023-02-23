// @ts-check
/* 
  1. x 有 右树 的时候， x的后继节点 就是 x 右子树的 最左边 的节点
  2. x 无 右树 的时候，x的后继节点 就是 往上找，当发现此时节点 是 父亲的左节点时，这个父亲就是 x 的 后继节点
  3. x 是 整个树的 最右节点，则 x 无 后继节点
*/


function getSuccessorNode(root){
  if(root == null){
    return root
  }

  // 有右树
  if(root.right){
    return getLeftMost(root.right)
  } else {
    let parent = root.parent
    while(parent != null && parent.left !== root){
      root = parent
      parent = root.parent
    }
    return parent
  }
}

// 得到root子树的 最左节点
function getLeftMost(root){
  if(root == null){
    return root
  }
  while(root.left != null){
    root = root.left
  }
  return root
}