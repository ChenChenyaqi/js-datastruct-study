// @ts-check

function dfs(node){
  if(node == null){
    return
  }

  let stack = new Array()
  let set = new Set()
  stack.push(node)
  set.add(node)
  console.log(node.value);
  while(stack.length){
    let cur = stack.pop()
    for(let next of cur.nexts){
      if(!set.has(next)){
        stack.push(cur)
        stack.push(next)
        set.add(next)
        console.log(next.value);
        break;
      }
    }
  }
}