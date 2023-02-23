// @ts-check

function getMaxWidth(root) {
  if (root == null) {
    return 0
  }

  let queue = []
  let map = new Map()
  queue.push(root)
  map.set(root, 1)
  // 当前层数
  let curLever = 1
  // 最大宽度
  let max = -1
  // 当前层有多少节点
  let curLeverNodes = 0

  while (queue.length) {
    let cur = queue.shift()
    // 得到当前节点所在层数
    let curNodeLever = map.get(cur)
    if (curNodeLever === curLever) {
      // 当前层的节点数+1
      curLeverNodes++
    } else {
      max = Math.max(max, curLeverNodes)
      curLever++
      // 来到下一层
      curLeverNodes = 1
    }
    if (cur.left) {
      map.set(cur.left, curLever + 1)
      queue.push(cur.left)
    }
    if (cur.right) {
      map.set(cur.right, curLever + 1)
      queue.push(cur.right)
    }
  }
  return max
}