/* 
  master公式：

  T(N) = a*T(N/b) + O(N^d),  N/b 子问题等量规模，是总问题的多少比重，a 子问题调用了几次， O(N^d) 其余操作费时

  T(N) = 2*T(N/2) + O(1)  ->  O(N*logN)

  log(b,a) > d -> 复杂度为O(N^log(b,a))
  log(b,a) = d -> 复杂度为O(N^d * logN)
  log(b,a) < d -> 复杂度为O(N^d)
*/


let nums = [1, 5, 15, 2, 5, 5, 2, 66, 22, 33]
console.log(findMax(nums, 0, nums.length - 1));

function findMax(nums, left, right) {
  if (left === right) {
    return nums[left]
  }

  let mid = parseInt(left + (right - left) / 2)
  let maxLeft = findMax(nums, left, mid)
  let maxRight = findMax(nums, mid + 1, right)

  console.log(left, right);
  return Math.max(maxLeft, maxRight)
}