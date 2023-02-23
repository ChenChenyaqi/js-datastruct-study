// @ts-check

// 序列化二叉树，根据 先序遍历 的进行
function serialByPre(root){
  if(root == null){
    return "#_"
  }

  let res = root.val + "_"
  res += serialByPre(root.left)
  res += serialByPre(root.right)
  return res
}

// 反序列化
function reconByPreString(preStr){
  let values = preStr.split("_")
  let queue = new Array()
  values.forEach((v) => {
    queue.push(v)
  })

  return reconPreOrder(queue)
}

function reconPreOrder(queue){
  let value = queue.shift()
  if(value === '#'){
    return null
  }

  let head = new Node(parseInt(value))
  head.left = reconPreOrder(queue)
  head.right = reconPreOrder(queue)
  return head
}