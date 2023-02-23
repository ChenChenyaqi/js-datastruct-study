let pre = null
function isValidBST(root) {
  if (!root) {
    return true
  }
  let f1 = isValidBST(root.left)
  let flag = true
  if (!pre) {
    pre = root
  } else {
    if (pre.val >= root.val) {
      flag = false
    }
    pre = root
  }
  let f2 = isValidBST(root.right)

  return flag && f1 && f2
}


let preNode = null;
function test(root){
    if(!root){
        return true;
    }
    let flag1 = test(root.left);
    let flag = true;
    if(!pre){
        pre = root;
    } else {
        if(pre.val >= root.val){
            flag = false;
        }
        pre = root;
    }
    let flag2 = test(root.right)
    return flag && flag1 && flag2;
}


// 用套路来解

/* 
  是BST树的条件：
    1、左边是BST
    2、右边是BST
    3、左边最大值 < x.val
    4、右边最小值 > x.val
*/

function checkBST(root) {
  return myProcess(root).isBST
}

function myProcess(root) {
  if (root == null) {
    return null
  }

  let leftData = myProcess(root.left)
  let rightData = myProcess(root.right)

  let min = root.val
  let max = root.val
  if (leftData) {
    min = Math.min(min, leftData.min)
    max = Math.max(max, leftData.max)
  }
  if (rightData) {
    min = Math.min(min, rightData.min)
    max = Math.max(max, rightData.max)
  }
  let isBST = true
  if (leftData && (!leftData.isBST || leftData.max >= root.val)) {
    isBST = false
  }
  if (rightData && (!rightData.isBST || rightData.min <= root.val)) {
    isBST = false
  }

  return new ReturnData(isBST, min, max)
}

function ReturnData(isBST, min, max) {
  this.isBST = isBST
  this.min = min
  this.max = max
}