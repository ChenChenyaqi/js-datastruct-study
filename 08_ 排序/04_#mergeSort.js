// @ts-check
/* 
  归并排序：递归思想

  取left 和 right 中点 mid ，分别对 left ~ mid 和 mid + 1 ~ right 区间进行排序, 然后merge合并

  T(N) = 2*T(N/2) + O(N)  ->  O(N*logN)
*/


let nums = [1, 5, 0, 5, 4, 9, 6, -1, 10];
mergeSort(nums)
console.log(nums);

function mergeSort(nums) {
    if (nums == null || nums.length < 2) {
        return;
    }

    return sortProcess(nums, 0, nums.length - 1)
}

function sortProcess(nums, left, right) {
    if (left === right) {
        return
    }

    let mid = left + ((right - left) >> 1);
    sortProcess(nums, left, mid)
    sortProcess(nums, mid + 1, right)
    merge(nums, left, mid, right)
}

function merge(nums, left, mid, right) {
    // 开辟一个临时数组
    let tempArr = new Array(right - left + 1)

    let i = 0;
    let p1 = left;
    let p2 = mid + 1;

    while (p1 <= mid && p2 <= right) {
        tempArr[i++] = nums[p1] <= nums[p2] ? nums[p1++] : nums[p2++]
    }
    while (p1 <= mid) {
        tempArr[i++] = nums[p1++]
    }
    while (p2 <= right) {
        tempArr[i++] = nums[p2++]
    }
    for (i = 0; i < tempArr.length; i++) {
        nums[left + i] = tempArr[i]
    }
}