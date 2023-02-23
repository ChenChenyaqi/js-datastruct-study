/* 
  二叉树层序遍历，广度(宽度)优先搜索（BFS）
  二叉树的深度优先遍历，就是它的先序遍历
*/
function levelOrder( root ) {
  // 层序遍历结果
  let res = []
  // 用数组作为队列
  let queue = []
  if(root == null){
      return res
  }
  // 把root节点入队列
  queue.push(root)
  while(queue.length !== 0){
      // 统计队列长度
      let size = queue.length 
      // 临时存储这一层节点
      let temArr = []
      for(let i = 0; i < size; i++){
          // 出队列
          let node = queue.shift()
          temArr.push(node.val)
          if(node.left){
              queue.push(node.left)
          }
          if(node.right){
              queue.push(node.right)
          }
      }
      res.push(temArr)
  }
  return res
}


// 递归写法
function levelOrder( root ) {
  let arr = []
  function traversal(root, arr, level){
    if(!root){
      return
    }
    if(arr[level] === undefined){
      arr[level] = []
    }
    arr[level].push(root.val)
    traversal(root.left, arr, level+1)
    traversal(root.right, arr, level+1)
  }
  traversal(root, arr, 0)
  return arr  
}