// @ts-check
/* 
  套路：
    假如 我 可以 向 我的左子树 和 右子树 要某个信息，我该做什么？

  ******************用于解决 树形 动态规划的 题目**********************
*/


/* 
  AVL树：左树 和 右树 的高度差不能超过 1
*/

// 假设以 x 为头的子树，如果 x 是AVL树，则 x.left 和 x.right 都是AVL树
//                                  并且：|左高 - 右高| <= 1

function isAVLTree(root){
  return checkAVL(root).isBalanced
}

function ReturnData(isBalanced, height){
  this.isBalanced = isBalanced
  this.height = height
}

function checkAVL(root){
  if(root == null){
    return new ReturnData(true, 0)
  }

  let leftData = checkAVL(root.left)
  let rightData = checkAVL(root.right)

  let height = Math.max(leftData.height, rightData.height) + 1
  let isBalanced = leftData.isBalanced && rightData.isBalanced && Math.abs(leftData.height - rightData.height) < 2

  return new ReturnData(isBalanced, height)
}