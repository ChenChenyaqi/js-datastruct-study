// @ts-check

// 二叉搜索树的最近公共祖先, 利用二叉搜索树的性质
function lowestCommonAncestor(root, p, q) {
  return myProcess(root, p, q).val
}

function myProcess(root, p, q) {
  if (root == null) {
    return null
  }
  if (root.val == p || root.val == q) {
    return root
  }
  if (p < root.val && q < root.val) {
    return myProcess(root.left, p, q)
  } else if (p > root.val && q > root.val) {
    return myProcess(root.right, p, q)
  } else {
    return root
  }
}





// 一般二叉树的最近公共祖先
function lowestCommonAncestor(root, o1, o2) {
  // write code here
  return myProcess(root, o1, o2).val
}

function myProcess(root, o1, o2) {
  if (root == null || root.val == o1 || root.val == o2) {
    return root
  }
  let left = myProcess(root.left, o1, o2)
  let right = myProcess(root.right, o1, o2)
  if (left == null) {
    return right
  }
  if (right == null) {
    return left
  }
  return root
}