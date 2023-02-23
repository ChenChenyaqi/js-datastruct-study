/* let num = [0,0,0]

threeSum(num)

function threeSum( num ) {
  let res = []
  if(num == null || num.length < 3){
      return res
  }
  num.sort((a, b) => a - b)
  
  let i = 0
  while(i < num.length){
      if(num[i] > 0){
          break
      }
      if(i != 0 && num[i] === num[i - 1]){
        i++
          continue
      }
      let left = i + 1
      let right = num.length - 1
      while(left < right){
          let sum = num[i] + num[left] + num[right]
          if(sum === 0){
              res.push([num[i], num[left], num[right]])
              left++
              right--
              while(num[left] === num[left - 1]){
                  left++
              }
              while(num[right] === num[right + 1]){
                  right--
              }
          } else if(sum > 0){
              right--
          } else {
              left++
          }
      }
      i++
  }
  return res
} */


let inputs = [[81,4],[2,2]]
// let readNum = read_line()
// while(readNum != ""){
//     inputs.push(readNum.split(' '))
//     readNum = read_line()
// }

let res = []
for(let i = 0; i < inputs.length; i++){
    let startNum = inputs[i][0]
    let sum = 0
    let m = inputs[i][1]
    for(let j = 0; j < m; j++){
        sum += startNum
        startNum = Math.sqrt(startNum)
    }
    res.push(sum)
}
console.log(res)