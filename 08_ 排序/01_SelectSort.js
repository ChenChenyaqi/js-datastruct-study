// @ts-check
/* 
  选择排序
  时间复杂度：O(N^2)
  额外空间复杂度：O(1)
*/

let nums = [1, 5, 0, 5, 4, 9, 6, -1, 10];

function selectSort(nums){
  if(nums == null || nums.length < 2){
    return;
  }

  for(let i = 0; i < nums.length - 1; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[j] < nums[i]){
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }
}

selectSort(nums);
console.log(nums);