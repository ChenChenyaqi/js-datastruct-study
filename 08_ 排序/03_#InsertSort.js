/* 
  插入排序
  时间复杂度：O(N^2), 最好O(N)
  空间复杂度：O(1)
*/

let nums = [1, 5, 0, 5, 4, 9, 6, -1, 10];
insertSort(nums)
console.log(nums);


function insertSort(nums) {
    if (nums == null || nums.length < 2) {
        return
    }

    for (let i = 1; i < nums.length; i++) {
        let curIndex = i;
        while (curIndex > 0 && nums[curIndex] < nums[curIndex - 1]) {
            let temp = nums[curIndex];
            nums[curIndex] = nums[curIndex - 1]
            nums[curIndex - 1] = temp

            curIndex--
        }
    }
}