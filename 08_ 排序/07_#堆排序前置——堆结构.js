/* 
  堆：是一个完全二叉树，子节点充满，或正在占满。只有left没有right的不是完全二叉树

  分为：大根堆、小根堆
      大根堆：以某节点为head 的整个子树，最大值就是 此节点
*/

/* 
  数组 --->  堆： arr = [...], size = n
          i 左节点：2 * i + 1
            右节点: 2 * i + 2
            父节点：(i - 1) / 2
*/

// @ts-check

class BigHeap {
    constructor() {
        this.heapSize = 0
    }

    /**
    * @function 向大根堆中添加一个数，添加的数为 arr[index]
    * @param arr 数组
    * @param index 添加的数的下标 
    * @return undefined
    * @author chenyaqi
    * @version 1.0
    **/
    heapInsert(arr, index) {
        this.heapSize++
        while (arr[index] > arr[Math.floor((index - 1) / 2)]) {
            this.swap(arr, index, Math.floor((index - 1) / 2))
            index = Math.floor((index - 1) / 2);
        }
    }

    /**
    * @function 从index位置开始，往下做heapify
    * @param arr 数组
    * @param index 从哪开始
    * @return undefined
    * @author chenyaqi
    * @version 1.0
    **/
    heapify(arr, index) {
        // 左孩子的下标
        let left = index * 2 + 1

        while (left < this.heapSize) { // 下方还有孩子的时候

            // 左孩子和右孩子中 最大的那个下标
            let largest = left + 1 < this.heapSize && arr[left + 1] > arr[left] ? left + 1 : left

            // largest 和 父节点最大的下标
            largest = arr[largest] > arr[index] ? largest : index

            // 如果最大的就是父节点，则停止heapify
            if (largest === index) {
                break
            }
            this.swap(arr, largest, index)
            index = largest
            left = index * 2 + 1
        }
    }

    /**
    * @function 更改index位置的值
    * @param arr 数组
    * @param index 要更改的数的下标
    * @param num 更新值
    * @return undefined
    * @author chenyaqi
    * @version 1.0
    **/
    updateHeap(arr, index, num) {
        // 判断当前堆里的值和要更新的值谁大
        if (arr[index] > num) {
            // 执行heapify操作, 向下去更新
            arr[index] = num
            this.heapify(arr, index)
        } else if (arr[index] < num) {
            // 执行heapInsert操作，向上更新
            arr[index] = num
            this.heapInsert(arr, index)
        }
    }

    /**
    * 
    * @function 删除堆中index处的值
    * @param arr 数组
    * @param index 要删除的数的下标
    * @return undefined
    * @author chenyaqi
    * @version 1.0
    **/
    deleteHeap(arr, index) {
        this.swap(arr, index, this.heapSize - 1)
        this.heapSize--
        this.heapify(arr, index)
    }

    /**
    * 
    * @function 打印堆
    * @param arr 数组
    * @author chenyaqi
    * @version 1.0
    **/
    printHeap(arr) {
        let temp = []
        for (let i = 0; i < this.heapSize; i++) {
            temp[i] = arr[i]
        }
        console.log(temp);
    }

    // 交换两个数
    swap(arr, index1, index2) {
        let temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
    }
}

module.exports = BigHeap