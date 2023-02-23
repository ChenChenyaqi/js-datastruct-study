// @ts-check
class Graph {
  constructor() {
    // Integer, Node
    this.nodes = new Map()
    // Edge
    this.edges = new Set()
  }
}

// @ts-ignore
class MyNode {
  /**
   * @param {number} value 
   */
  constructor(value) {
    // 这个点的值
    this.value = value
    // 入度
    // 有多少个点 发散出来的边 是直接指向这个点的
    this.in = 0
    // 出度
    // 此点 发散出多少个边
    this.out = 0
    // 此点 发散出去的边连接的点
    this.nexts = []
    // 此点 发散出去的边
    this.edges = []
  }
}

class Edge {
  /**
   * @param {number} weight 
   * @param {MyNode} from 
   * @param {MyNode} to 
   */
  constructor(weight, from, to) {
    this.weight = weight
    this.from = from
    this.to = to
  }
}

module.exports = { Graph, MyNode, Edge }