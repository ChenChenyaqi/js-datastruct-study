/* 
  快速排序
  时间复杂度：平均 O(N*logN)
  空间复杂度:O(logN), 最差O(N)

*/

let arr = [2, 0, 5, 5, 16, 8, 3, 4, 9, 10]
quickSort(arr)
console.log(arr);

function quickSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }

  process(arr, 0, arr.length - 1)
}
 
function process(arr, left, right) { 
  if (left < right) {
    // 随机选择一个数，和最右边的交换  [0, 1)  ->  [0, length) -> [left, left + length)
    swap(arr, left + Math.floor(Math.random() * (right - left + 1)), right)
    // 荷兰国旗算法
    let p = partition(arr, left, right)

    process(arr, left, p[0])
    process(arr, p[1], right)
  }
}

// 荷兰国旗算法
function partition(arr, left, right) {
  let target = arr[right]
  let smallIndex = left - 1
  let bigIndex = right + 1
  let i = left
  while (i < bigIndex) {
    if (arr[i] < target) {
      swap(arr, smallIndex + 1, i)
      smallIndex++;
    } else if (arr[i] > target) {
      swap(arr, bigIndex - 1, i)
      bigIndex--;
      continue;
    }
    i++
  }
  return [smallIndex, bigIndex]
}

// 交换两个数
function swap(arr, index1, index2) {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}