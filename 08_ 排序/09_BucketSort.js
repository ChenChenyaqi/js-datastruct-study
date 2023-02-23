// @ts-check
/* 
  桶排序（基数排序） 0 <= num < 200
*/

let arr = [12, 15, 54, 110, 32, 61, 59]
bucketSort(arr)

console.log(arr);

function bucketSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }

  bucketSortProcess(arr, 0, arr.length - 1, maxbits(arr))
}

// 返回数组中最大的数有几位
function maxbits(arr) {
  let max = Number.MIN_VALUE
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i])
  }
  let res = 0
  while (max != 0) {
    res++
    max = Math.floor(max / 10)
  }
  return res
}

// 在 left 到 right 中进行桶排序
function bucketSortProcess(arr, left, right, digit) {
  let bucket = new Array(right - left + 1)
  // 当前看第几位的数
  let index = 1

  while(index <= digit){
    // count[i] 表示：x位上  小于等于i  的有几个数
    let count = new Array(10).fill(0)

    for (let i = left; i <= right; i++) {
      // 获取x位数上的值
      let x = getDigit(arr[i], index)
      count[x]++
    }
    // 把count[i] 变为前缀和
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1]
    }
  
    // 依据count，把arr中的数放入bucket数组中
    for(let i = right; i >= 0; i--){
      // 获取x位数上的值
      let x = getDigit(arr[i], index)
      bucket[count[x] - 1] = arr[i]
      count[x]--
    }
    
    for(let i = left; i <= right; i++){
      arr[i] = bucket[i]
      bucket[i] = 0
    }
    index++
  }
}


// 获取 数字x 第 d 位上的数
// (x / 10^(d-1)) % 10
function getDigit(x, d){
  return (Math.floor((x / Math.floor(Math.pow(10, d - 1)))) % 10)
}