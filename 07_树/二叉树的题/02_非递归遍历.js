// @ts-check

// 先序遍历
function preOrderUnRecur(root){
  if(root == null){
    console.log("null")
    return
  }

  let stack = []
  stack.push(root)
  while(stack.length){
    let node = stack.pop()
    console.log(node.val);
    // 先压右 再压左
    if(node.right){
      stack.push(node.right)
    }
    if(node.left){
      stack.push(node.left)
    }
  }
}


// 后序遍历
function posOrderUnRecur(root){
  if(root == null){
    console.log("null")
    return
  }
  // 准备两个栈
  let stack1 = []
  let stack2 = []
  stack1.push(root)
  while(stack1.length){
    let node = stack1.pop()
    stack2.push(node)
    // 先压左 再压右
    if(node.left){
      stack1.push(node.left)
    }
    if(node.right){
      stack1.push(node.right)
    }
  }
  // 后序输出
  while(stack2.length){
    let node = stack2.pop()
    console.log(node.val);
  }
}

// 中序遍历
// 整个树的左边界入栈
// 依次弹出打印
// 对右子树周而复始
function inOrderUnRecur(root){
  if(root == null){
    console.log("null")
    return
  }

  let stack = new Array()
  while(stack.length || root){
    if(root){
      stack.push(root)
      root = root.left
    } else{
      root = stack.pop()
      console.log(root.val);
      root = root.right
    }
  }
}