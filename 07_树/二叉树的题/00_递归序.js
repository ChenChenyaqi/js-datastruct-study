// @ts-check
function f(root){
  // 1 第一次回到自己
  if(root == null){
    return 
  }
  // 1 
  f(root.left)
  // 2 第二次回到自己
  f(root.right)
  // 3 第三次回到自己
}