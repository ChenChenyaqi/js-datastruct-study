// @ts-check

/* 
  满二叉树：若最大深度为 L， 总节点数为 N
  则 N = (2^L) - 1
*/

function isFullTree(root) {
  if (root == null) {
    return true
  }
  let res = cheak(root)
  return ((1 << res.height) - 1) === res.count
}

function cheak(root) {
  if (root == null) {
    return new ReturnData(0, 0)
  }

  let ld = cheak(root.left)
  let rd = cheak(root.right)

  let height = Math.max(ld.height, rd.height) + 1
  let count = ld.count + rd.count + 1

  return ReturnData(height, count)
}

function ReturnData(height, count) {
  this.height = height
  this.count = count
}