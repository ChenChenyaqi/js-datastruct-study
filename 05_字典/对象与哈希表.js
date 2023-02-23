/* 
  js中的对象是基于哈希表结构的，而哈希表的查找时间复杂度为O(1)，所以很多人喜欢用对象来做映射，减少遍历循环。
  比如常见的数组去重：
*/
function arrayUnique(target) {
  var result = [target[0]];
  var temp = {};
  temp[target[0]] = true;
  for (var i = 1; i <  target.length; i++) {
    // 把数组中的元素作为key，若对象中此位置是undefined
    if (typeof temp[target[i]] === 'undefined') {
      result.push(target[i]);
      temp[target[i]] = true;
    }
  }
  return result;
}

/* 
  这里使用了一个temp对象来保存出现过的元素，在循环中每次只需要判断当前元素是否在temp对象内即可判断出该元素是否已经出现过。

  上面的代码看起来没有问题，但有点经验的同学可能会说了，假如目标数组是[1,'1'], 这是2个不同类型元素，
      所以我们的期望值应该是原样输出的。但结果却是[1]。
  同理的还有true、null等，也就是说对象中的key在obj[key]时都被自动转成了字符串类型。
  所以，如果要区分出不同的类型的话，temp里面的属性值就不能是一个简单的true了，而是要包含几种数据类型。比如可以是：
        temp[target[0]]={};
        temp[target[0]][(typeof temp[target[i]])] = 1;
  在判断的时候除了要判断键是否存在之外，也要判断对应的数据类型计数是否大于1，以此来判断元素是否重复。
*/

/* 
  我们造的这个temp对象并不是完全空白，他是基于Object原型链继承而来的，所以自带了一个__proto__属性，
      如果你的目标数组里面恰好有"__proto__"这个值，返回的结果就有问题了
  可以使用Object.create(null)的方式来创建一个完全空白、无原型的空对象。
*/