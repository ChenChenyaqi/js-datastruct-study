// @ts-check
const BigHeap = require('./07_#堆排序前置——堆结构')

let arr = [9,2,0,1,7,5,3,6,4,8]


heapSort(arr)

function heapSort(arr) {
    if (arr == null || arr.length < 2) {
        return
    }
    const heap = new BigHeap()
    for (let i = 0; i < arr.length; i++) {
        heap.heapInsert(arr, i)
    }
    console.log(arr);
    // 不断在堆中删除0位置的数，就把最大值移到了数组的后面
    for (let i = 0; i < arr.length; i++) {
        heap.deleteHeap(arr, 0)
    }
    console.log(arr);
}

console.log(arr);
