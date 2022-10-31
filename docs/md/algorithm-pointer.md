[返回](./#/algorithm/)

1. 三数之和为0

给出一个有 n 个元素的数组 S，S 中是否有元素 a,b,c 满足 a+b+c=0？找出数组 S 中所有满足条件的三元组。

要求：
空间复杂度：O(n^2)，时间复杂度 O(n^2)

注意：
解集中不能包含重复的三元组。

这个题简单的就是三层循环的暴力求解，但很明显时间复杂度不满足要求，引入双指针方式解决该问题：

直接找三个数字之和为某个数，太麻烦了，我们是不是可以拆分一下：如果找到了某个数 a，要找到与之对应的另外两个数，三数之和为 0，那岂不是只要找到另外两个数之和为 −a？这就方便很多了。

因为三元组内部必须是有序的，因此可以优先对原数组排序，这样每次取到一个最小的数为 a，只需要在后续数组中找到两个之和为 −a 就可以了，我们可以用双指针缩小区间，因为太后面的数字太大了，就不可能为 −a，可以舍弃。

步骤如下：

- step 1：排除边界特殊情况。
- step 2：既然三元组内部要求非降序排列，那我们先得把这个无序的数组搞有序了，使用 sort 函数优先对其排序。
- step 3：得到有序数组后，遍历该数组，对于每个遍历到的元素假设它是三元组中最小的一个，那么另外两个一定在后面。
- step 4：需要三个数相加为 0，则另外两个数相加应该为上述第一个数的相反数，我们可以利用双指针在剩余的子数组中找有没有这样的数对。双指针指向剩余子数组的首尾，如果二者相加为目标值，那么可以记录，而且二者中间的数字相加可能还会有。
- step 5：如果二者相加大于目标值，说明右指针太大了，那就将其左移缩小，相反如果二者相加小于目标值，说明左指针太小了，将其右移扩大，直到两指针相遇，剩余子数组找完了。

代码：

```javascript
function getNextNoMuli(arr, i, j) {
  while (i < j) {
    if (arr[i] === arr[i + 1]) {
      i++;
    } else {
      break;
    }
  }
  return i + 1;
}

function getPreNoMuli(arr, i, j) {
  while (i < j) {
    if (arr[j] === arr[j - 1]) {
      j--;
    } else {
      break;
    }
  }
  return j - 1;
}

function threeSum(num) {
  // write code here
  const sortArr = num.sort((i, j) => i - j);
  const len = num.length;
  const dest = [];
  let i = 0;
  while (i < len - 2) {
    let min = sortArr[i];
    let pre = i + 1;
    let last = len - 1;
    let next = 0 - min;
    while (pre < last) {
      if (sortArr[pre] + sortArr[last] === next) {
        dest.push([min, sortArr[pre], sortArr[last]]);
        // 可能后面还有继续执行，但是得去重，因为要求不能出现重复的结果
        pre = getNextNoMuli(sortArr, pre, last);
        last = getPreNoMuli(sortArr, pre, last);
      } else if (sortArr[pre] + sortArr[last] > next) {
        // 加起来比目标值要大，说明数要减小
        last = getPreNoMuli(sortArr, pre, last);
      } else {
        pre = getNextNoMuli(sortArr, pre, last);
      }
    }
    i = getNextNoMuli(sortArr, i, len - 1);
  }

  return dest;
}
```

[返回](./#/algorithm/)
