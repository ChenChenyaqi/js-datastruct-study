let arr = [1,5,1,4,86,1,0,-5,6];
quickSort(arr);
console.log(arr);


function quickSort(arr){
    if(arr == null || arr.length < 2){
        return;
    }
    sort(arr, 0, arr.length - 1);
    
    function sort(arr, left, right){
        if(left < right){
            swap(arr, left + Math.floor((right - left) * Math.random()), right);
            let p = parttion(arr, left, right);
            sort(arr, left, p[0]);
            sort(arr, p[1], right);
        }
    }
    
    function parttion(arr, left, right){
        const target = arr[right];
        let small = left - 1;
        let big = right + 1;
        let i = left;
        while(i < big){
            if(arr[i] < target){
                swap(arr, i, small + 1);
                small++;
                i++;
            } else if(arr[i] > target){
                swap(arr, i, big - 1);
                big--;
            } else {
                i++;
            }
        }
        return [small, big];
    }
    
    function swap(arr, i, j){
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
}