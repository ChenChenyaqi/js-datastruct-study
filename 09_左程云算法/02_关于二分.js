/* 
  局部最小问题

  在一个数组(无序)中，任意两个相邻的数一定不相等

  局部最小：如果 nums[0] < nums[1]：0 位置是局部最小
                nums[N - 1] < nums[N - 2]： N - 1 位置局部最小
                nums[i - 1] > nums[i] < nums[i + 1]: i 位置局部最小
  只求一个局部最小，要求时间复杂度小于 O(N)
*/

let nums = [5, 4, 6, 5, 1, 3, 5, 6, 3, 6, 9, 1, 5];
console.log(findMinNum(nums));

function findMinNum(nums){
  if(nums == null || nums.length < 3){
    return undefined
  }

  // 先判断0 和 n-1位置的数
  if(nums[0] < nums[1]){
    return nums[0]
  } 
  if(nums[nums.length - 1] < nums[nums.length - 2]){
    return nums[nums.length - 1]
  }

  // 二分
  let left = 0;
  let right = nums.length - 1;
  while(left <= right){
    let mid = left + Math.floor((right - left) / 2)
    if(nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1]){
      return mid;
    } else if(nums[mid] > nums[mid - 1]){
      right = mid
    } else {
      left = mid
    }
  }
  return -1
}