let arr = [12, 15, 54, 110, 32, 61, 59];
bucketSort(arr);
console.log(arr);

function bucketSort(arr) {

    sort(arr, 0, arr.length - 1, getDigit(arr));

    // 在left 到 right位置上进行桶排序
    function sort(arr, left, right, digit) {
        let bucket = new Array(right - left + 1).fill(0);
        let d = 1;
        while (d <= digit) {
            let count = new Array(10).fill(0);
            for (let i = left; i <= right; i++) {
                count[getNumber(arr[i], d)]++;
            }
            for (let i = 1; i < 10; i++) {
                count[i] += count[i - 1];
            }

            for (let i = right; i >= left; i--) {
                bucket[count[getNumber(arr[i], d)] - 1] = arr[i];
                count[getNumber(arr[i], d)]--;
            }

            for(let i = left; i <= right; i++){
                arr[i] = bucket[i];
            }
            d++;
        }
    }

    // 返回数组中最大的数有几位
    function getDigit(arr) {
        let max = Number.MIN_VALUE;
        arr.forEach(v => {
            max = Math.max(max, v);
        })
        let count = 0;
        while (max !== 0) {
            count++;
            max = Math.floor(max / 10);
        }
        return count;
    }

    // 返回 index 位上的数
    function getNumber(number, index) {
        return Math.floor(number / Math.pow(10, (index - 1))) % 10;
    }
}