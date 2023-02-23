// @ts-check
/* 
  ^ 异或运算，相同为0，不同为1
  性质：0 ^ N = N，  N ^ N = 0
        满足交换和结合率

        交换两个数的值：a = a ^ b;
                      b = a ^ b;
                      a = a ^ b;
                      必须保证，a、b内存是两块不同的地方
*/


// 在一个数组中，1、一种数，出现了奇数次，其它都是偶数次  2、两种数出现了奇数次、其余偶数次
// 找出这种数

function findOne(nums) {
  if (nums == null || nums.length < 2) {
    return nums || nums[0]
  }

  let temp = 0
  for (let i = 0; i < nums.length; i++) {
    temp ^= nums[i];
  }
  return temp;
}

let nums = [5, 2, 3, 2, 3, 4, 4, 5, 9, 4, 4];
console.log(findOne(nums));

function findTow(nums) {
  if (nums == null || nums.length < 2) {
    return nums || nums[0]
  }

  let eor = 0;
  for (let i = 0; i < nums.length; i++) {
    eor ^= nums[i];
  }

  // 此时eor = a ^ b
  // eor != 0
  // eor 必然有一个位置上是1
  // 提取这个1
  // 0000..00100..0000
  let rightOne = eor & (~eor + 1)

  let numA = 0;
  nums.forEach((num) => {
      // 这个位置上是 0 的所有数
    if ((num & rightOne) === 0) {
      numA ^= num
    }
  })

  let numB = eor ^ numA

  return { numA, numB }
}

nums = [5, 2, 3, 2, 3, 4, 100, 4, 5, 90, 4, 4]
console.log(findTow(nums));