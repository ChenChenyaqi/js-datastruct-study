// let s = read_line()
let n = 11
let m = 3

let len = 0
// let tempN = n
// while(tempN){
//   tempN = Math.floor(tempN / 10)
//   len++
// }

// let nums = []
// for(let i = 1; i <= n; i++){
//   let numStr = i.toString()
//   if(numStr.length < len){
//     let tempLen = len - numStr.length
//     for(let j = 0; j < tempLen; j++){
//       numStr += 'X'
//     }
//   }
//   nums[i-1] = numStr
// }
let nums = []
for(let i = 1; i <= n ; i++){
  nums.push(i)
}

nums.sort()
console.log(nums);

console.log(compare('2X', '10'));
function compare(str1, str2){
  let arr1 = str1.split('')
  let arr2 = str2.split('')
  let flag = 1
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] === 'X' && arr2[i] !== 'X'){
      flag = 1
      break
    }
    if(arr2[i] === 'X' && arr1[i] !== 'X'){
      flag = -1
      break
    }
    if(parseInt(arr1[i]) < parseInt(arr2[i])){
      flag = 1
      break
    } else if(parseInt(arr1[i]) > parseInt(arr2[i])){
      flag = -1
      break
    }
  }
  return flag
}


/* 
let s = "And millionaires will hold 46% of total wealth by 2019, the report says. This ratio is likely to increase in 2020."
let arr = s.split('')
let len = arr.length

let p1 = 0
let p2 = 0
let res = []
while(p2 < len){
  if(arr[p2] > '0' && arr[p2] <= '9'){
    p1 = p2
    while(arr[p2] >= '0' && arr[p2] <= '9'){
      p2++
    }
    console.log(p1, p2);
    let strNum = s.slice(p1, p2)
    console.log(strNum);
    // if(parseInt(strNum) >= 1000 && parseInt(strNum) <= 3999){
      res.push()
    // }
  } 
  p2++
}

console.log(res) */


/* let numbers = [5, 75, 25]
let target = 100

twoSum(numbers, target)


function twoSum(numbers, target) {
  let map = new Map()

  numbers.forEach((num, index) => {
    map.set(num, index + 1)
  })

  for (let i = 0; i < numbers.length; i++) {
    let temp = target - numbers[i];
    let res = map.get(temp)
    if( res !== undefined && res !== i + 1){
      console.log(temp, res);
      return [i+1, res]
    }

  }
  return undefined
} */


