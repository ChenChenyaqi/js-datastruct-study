// @ts-check

function bfs(node) {
  if (node == null) {
    return
  }

  let queue = new Array()
  let set = new Set()
  queue.push(node)
  set.add(node)
  while (queue.length) {
    let cur = queue.shift()
    console.log(cur.value);
    cur.nexts.forEach((next) => {
      if (!set.has(next)) {
        set.add(next)
        queue.push(next)
      }
    })
  }
}