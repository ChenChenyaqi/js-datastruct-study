/* 
  逆序对问题：在一个数组中，左边的数如果比右边的数大，则这两个数构成一个逆序对，请找到逆序对的数量

  等价于： 一个数的左边 有多少个数比它大
*/

/* 
                3 2 4 5 0
      2 3 4                   0 5
   

*/

let arr = [3, 2, 4, 5, 0] // 5对

console.log(reversNum(arr));

function reversNum(arr) {
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
  let sum = 0
  let i = 0
  let p1 = left
  let p2 = mid + 1

  while (p1 <= mid && p2 <= right) {
    sum += arr[p1] > arr[p2] ? (mid - p1 + 1) : 0
    tempArr[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
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
  return sum
}