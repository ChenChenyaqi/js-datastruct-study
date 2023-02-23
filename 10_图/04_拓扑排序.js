// @ts-check

// java jar包的互相依赖，做出编译顺序

function sortedTopology(graph) {
  // key: 某一个node
  // value: 剩余的入度
  let inMap = new Map()
  // 入度为0的点，进入队列
  let zeroInQueue = new Array()
  for (let node of graph.nodes.values()) {
    inMap.set(node, node.in)
    if (node.in === 0) {
      zeroInQueue.push(node)
    }
  }
  // 进行拓扑排序
  let res = new Array()
  while (zeroInQueue.length) {
    let cur = zeroInQueue.shift()
    res.push(cur)
    for (let next of cur.nexts) {
      inMap.set(next, inMap.get(next) - 1)
      if (inMap.get(next) === 0) {
        zeroInQueue.push(next)
      }
    }
  }
  return res
}