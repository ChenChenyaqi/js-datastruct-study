// @ts-check

class MySets{
  setMap = new Map()
  /**
   * @param {Array} nodes
   */
  constructor(nodes){
    for(let cur of nodes){
      let set = new Set()
      set.add(cur)
      this.setMap.set(cur, set)
    }
  }

  isSameSet(from, to){
    let fromSet = this.setMap.get(from)
    let toSet = this.setMap.get(to)
    return fromSet === toSet
  }

  union(from, to){
    let fromSet = this.setMap.get(from)
    let toSet = this.setMap.get(to)

    for(let toNode of toSet){
      fromSet.add(toNode)
      this.setMap.set(toNode, fromSet)
    }
  }

}
