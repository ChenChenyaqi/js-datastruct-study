// 队列模拟击鼓传花游戏
const Queue = require('../Queue')
/* 
  elementsList: 参与游戏的玩家列表
  num: 多少个数结束
*/
function hotPotato(elementsList, num){
  const queue = new Queue();
  // 被依次淘汰的人员列表
  const eliminatedList = [];

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }

  while(queue.size() > 1){
    // num后，队列第一个人拿着花
    for(let i = 0; i < num; i++){
      queue.enqueue(queue.dequeue())
    }
    eliminatedList.push(queue.dequeue())
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  }
}

let res = hotPotato([1,2,3,4,5,6,7,8,9,10], 2)
console.log(res);


function cycle(people, num) {  
    let i, r = 0;  
    for (i = 2; i <= people; i++) r = (r + num) % i;
    return r + 1;  
}
console.log(cycle(10, 3));