class BigHeap{
    constructor(){
        this.heapSize = 0;
    }


    // 插入一个元素
    heapInsert(arr, index){
        this.heapSize++;
        while(arr[index] > arr[Math.floor((index - 1) / 2)]){
            this.swap(arr, index, Math.floor((index - 1) / 2));
            index = Math.floor((index - 1) / 2);
        }
    }

    // 从index处向下堆化
    heapfiy(arr, index){
        let left = index * 2 + 1;
        while(left < this.heapSize){
            let largest = left + 1 < this.heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
            largest = arr[largest] > arr[index] ? largest : index;
            if(largest === index){
                break;
            }
            this.swap(arr, index, largest);
            index = largest;
            left = index * 2 + 1;
        }
    }

    // 更新
    update(arr, index , num){
        if(arr[index] > num){
            arr[index] = num;
            this.heapfiy(arr, index);
        } else if(arr[index] < num){
            arr[index] = num;
            this.heapInsert(arr, index);
        }
    }

    // 删除
    delete(arr, index){
        this.swap(arr, index, this.heapSize - 1);
        this.heapSize--;
        this.heapfiy(arr, index);
    }



    swap(arr, i, j){
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
}


