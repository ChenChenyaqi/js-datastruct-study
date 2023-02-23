/* 
  问题一：
    给定一个数组arr，和一个数num，请把小于等于num的数放在数组的左边，大于num的数放在数组的右边。
    要求空间复杂度O(1), 时间复杂度O(N)

  问题二：荷兰国旗问题
    给定一个数组arr，和一个数num，请把小于num的数放在数组的左边，等于num的数放在数组的中间，
    大于num的数放在数组的右边。
    要求空间复杂度O(1), 时间复杂度O(N)
*/


let arr = [3, 5, 6, 7, 4, 3, 5, 8]
let num = 5
problemTwo(arr, num)
console.log(arr);


/* 
  问题一：

  1、[i] <= num， [i] 和 <= 区的下一个数交换， <= 区右阔，i++
  2、[i] > num，i++
*/
function problemOne(arr, num){
  if(arr == null || arr.length < 2){
    return;
  }

  let smallIndex = -1;
  let i = 0;
  while(i < arr.length){
    if(arr[i] <= num){
      let temp = arr[i]
      arr[i] = arr[smallIndex + 1]
      arr[smallIndex + 1] = temp
      smallIndex++;
    }
    i++
  }
}



/* 
  问题二：

  1、[i] < num， [i] 和 <区的下一个数交换， <区右阔，i++
  2、[i] == num，i++
  3、[i] > num, [i]  和 > 区前一个交换，> 区左阔，i不动
*/
function problemTwo(arr, num){
  if(arr == null || arr.length < 2){
    return;
  }

  let smallIndex = -1
  let bigIndex = arr.length
  let i = 0
  while(i < bigIndex){
    if(arr[i] < num){
      let temp = arr[i]
      arr[i] = arr[smallIndex + 1]
      arr[smallIndex + 1] = temp
      smallIndex++; 
    } else if(arr[i] > num){
      let temp = arr[i]
      arr[i] = arr[bigIndex - 1]
      arr[bigIndex - 1] = temp
      bigIndex--;
      continue;
    }
    i++
    console.log(arr);
  }
}