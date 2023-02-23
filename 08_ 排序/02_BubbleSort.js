// @ts-check
/* 
  冒泡排序
  时间复杂度：O(N^2)
  额外空间复杂度：O(1)
*/

let nums = [1, 5, 0, 5, 4, 9, 6, -1, 10];

function bubbleSort(nums){
  if(nums == null || nums.length < 2){
    return;
  }

  let flag = false;

  for(let i = 0; i < nums.length - 1; i++){
    for(let j = 0; j < nums.length - 1 - i; j++){
      if(nums[j] > nums[j+1]){
        flag = true
        let temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
    if(!flag){
      break
    } else {
      flag = false; 
    }
  }
}