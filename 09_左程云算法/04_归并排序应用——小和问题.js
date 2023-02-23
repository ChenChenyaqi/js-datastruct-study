/* 
  小和问题：在一个数组中，每一个数左边比当前数小的数累加起来，叫做这个数组的小和。求一个数组的 小和
*/
// 1  +  1+3   +  1   + 1+3+4+2  = 16 
let arr = [1, 3, 4, 2, 5]

// 等同于，求一个数，右边有多少个数比他大，小和就是: 这个数 * n
console.log(minSum(arr));


function minSum(arr) {
  if (arr == null || arr.length < 2) {
    return 0
  }

  return process(arr, 0, arr.length - 1)
}

function process(arr, left, right) {
  if (left === right) {
    return 0
  }
  let mid = left + ((right - left) >> 1)
  return process(arr, left, mid)
    + process(arr, mid + 1, right)
    + merge(arr, left, mid, right)
}

function merge(arr, left, mid, right) {
  let tempArr = new Array(right - left + 1)
  let minSum = 0
  let i = 0
  let p1 = left
  let p2 = mid + 1

  while (p1 <= mid && p2 <= right) {
    minSum += arr[p1] < arr[p2] ? (right - p2 + 1) * arr[p1] : 0
    tempArr[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
  }

  while (p1 <= mid) {
    tempArr[i++] = arr[p1++]
  }

  while (p2 <= right) {
    tempArr[i++] = arr[p2++]
  }

  for (i = 0; i < tempArr.length; i++) {
    arr[left + i] = tempArr[i];
  }
  
  return minSum
}