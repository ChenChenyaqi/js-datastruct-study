// @ts-check
let {Graph, Edge, MyNode } = require('./00_图的数据结构')

/**
 * matrix[0][0] from, matrix[0][1] to, matrix[0][2] weight
 *   
 * @param {Array} matrix 
 */
function createGraph(matrix){
  let graph = new Graph()
  for (let i = 0; i < matrix.length; i++) {
    let from = matrix[0][0]
    let to = matrix[0][1]
    let weight = matrix[0][2]
    if(!graph.nodes.has(from)){
      graph.nodes.set(from, new MyNode(from))
    }
    if(!graph.nodes.has(to)){
      graph.nodes.set(to, new MyNode(to))
    }
    let fromNode = graph.nodes.get(from)
    let toNode = graph.nodes.get(to)
    let newEdge = new Edge(weight, fromNode, toNode)
    fromNode.nexts.push(toNode)
    fromNode.out++
    toNode.in++
    fromNode.edges.push(newEdge)
    graph.edges.add(newEdge)
  }
}


let matrix = [[1,2,3],[2,3,5]]
createGraph(matrix)