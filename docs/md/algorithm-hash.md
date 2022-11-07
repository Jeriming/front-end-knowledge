[返回](./#/algorithm/)

## 哈希类

### 1. 两数之和

给出一个整型数组 numbers 和一个目标值 target，请在数组中找出两个加起来等于目标值的数的下标，返回的下标按升序排列。
（注：返回的数组下标从 1 开始算起，保证 target 一定可以由数组里面 2 个数字相加得到）

要求：空间复杂度 O(n)，时间复杂度 O(nlogn)

[3,2,4],6

#### 示例 1

```
输入：[3,2,4],6
返回值：[2,3]
说明：因为 2+4=6 ，而 2的下标为2 ， 4的下标为3 ，又因为 下标2 < 下标3 ，所以返回[2,3]
```

#### 示例 2

```
输入：[20,70,110,150],90
返回值：[1,2]
说明：20+70=90
```

分析：
这题一看是哈希题型，必须想到 map，只要两者之和恰好等于目标值的下标，又用到哈希，嘿嘿，哈希存什么最省？存差值，一次循环搞定：

```javascript
function twoSum(numbers, target) {
  const length = numbers.length;
  const oMap = new Map();
  for (let i = 0; i < length; i++) {
    let less = target - numbers[i];
    if (!oMap.has(less)) {
      // 如果插值不在map内，则把当前值存入map
      oMap.set(numbers[i], i + 1);
    } else {
      // 差值存在map内，说明已找到，直接返回
      return [oMap.get(less), i + 1];
    }
  }
  return [];
}
```

### 2. 数组中只出现一次的两个数字

一个整型数组里除了两个数字只出现一次，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字

示例 1：

```
输入：[1,4,1,6]
返回值：[4,6]
说明：返回的结果中较小的数排在前面
```

示例 2：

```
输入：[1,2,3,3,2,9]
返回值：[1,9]
```

解决方案 1：构建哈希，重复的+1

```javascript
function FindNumsAppearOnce(array) {
  // write code here
  const len = array.length;
  const obj = new Map();
  for (let i = 0; i < len; i++) {
    const item = array[i];
    if (obj.get(item) !== undefined) {
      obj.set(item, obj.get(item) + 1);
      if (obj.get(item) === 2) {
        obj.delete(item);
      }
    } else {
      obj.set(item, 1);
    }
  }
  return Array.from(obj.keys()).sort((i, j) => i - j);
}
```

这种方案虽然能得到正确答案，但是不满足空间复杂度为 O(1)，还有一种方案：
异或运算符，其思路：

异或运算满足交换率，且相同的数字作异或会被抵消掉，比如：a⊕b⊕c⊕b⊕c=a，且任何数字与 0 异或还是原数字，放到这个题目里面所有数字异或运算就会得到 a⊕b，也即得到了两个只出现一次的数字的异或和。

```
//遍历数组得到a^b
for(int i = 0; i < array.length; i++)
    temp ^= array[i];
```

但是我们是要将其分开得到结果的，可以考虑将数组分成两部分，一部分为 a⊕d⊕c⊕d⊕c=a，另一部分为 b⊕x⊕y⊕x⊕y=a 的样式，怎么划分才能让 a 与 b 完全分开，而另外的也能刚好成对在一个组呢？这是我们需要考虑的问题。

a⊕b 的结果中如果二进制第一位是 1，则说明 a 与 b 的第一位二进制不相同，否则则是相同的，从结果二进制的最高位开始遍历，总能找到二进制位为 1 的情况：

```
//找到两个数不相同的第一位
while((k & temp) == 0)
    k <<= 1;
```

因为两个数字不相同，我们就以这一位是否为 1 来划分上述的两个数组，相同的数字自然会被划分到另一边，而 a 与 b 也会刚好被分开。

```
//遍历数组，对每个数分类
if((k & array[i]) == 0)
    res1 ^= array[i];
else
    res2 ^= array[i];
```

具体做法：

step 1：遍历整个数组，将每个元素逐个异或运算，得到 a⊕b。\
step 2：我们可以考虑位运算的性质，找到二进制中第一个不相同的位，将所有数组划分成两组。\
step 3：遍历数组对分开的数组单独作异或连算。\
step 4：最后整理次序输出。

如图：
![image](./md/images/C30EF4D55F5E47F5616DFDCA6BB24F0F.gif)

代码：

```javascript
function FindNumsAppearOnce(array) {
  // write code here
  const len = array.length;
  let res1 = 0;
  let res2 = 0;
  let temp = 0;
  //遍历数组得到a^b
  for (let i = 0; i < len; i++) {
    temp ^= array[i];
  }
  let k = 1;
  //找到两个数不相同的第一位
  while ((k & temp) == 0) {
    k <<= 1;
  }
  for (let i = 0; i < len; i++) {
    //遍历数组，对每个数分类
    if ((k & array[i]) == 0) {
      res1 ^= array[i];
    } else {
      res2 ^= array[i];
    }
  }
  //整理次序
  if (res1 < res2) {
    return [res1, res2];
  } else {
    return [res2, res1];
  }
}
```

### 3. 数组中出现次数超过一半的数字

给一个长度为 n 的数组，数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
例如输入一个长度为 9 的数组[1,2,3,2,2,2,5,4,2]。由于数字 2 在数组中出现了 5 次，超过数组长度的一半，因此输出 2。

要求：空间复杂度：O(1)，时间复杂度 O(n)

普通用哈希，一次遍历找出最大值，时间复杂度满足了，但是不满足空间复杂度 O(1)

下面是最优解：\
加入数组中存在众数，那么众数一定大于数组的长度的一半。
思想就是：如果两个数不相等，就消去这两个数，最坏情况下，每次消去一个众数和一个非众数，那么如果存在众数，最后留下的数肯定是众数。

具体做法：

1. 初始化：候选人 cond = arr[0]， 候选人的投票次数 cnt = 1
2. 遍历数组，如果 cnt=0， 表示没有候选人，则选取当前数为候选人，++cnt
3. 否则，如果 cnt > 0, 表示有候选人，如果当前数=cond，则++cnt，否则--cnt
4. 直到数组遍历完毕，最后检查 cond 是否为众数

代码：

```javascript
function MoreThanHalfNum_Solution(numbers) {
  // write code here
  let cond = numbers[0];
  let cnt = 1;
  let len = numbers.length;
  for (let i = 1; i < len; i++) {
    if (cnt === 0) {
      cond = numbers[i];
      cnt = 1;
    } else {
      if (cond === numbers[i]) {
        cnt++;
      } else {
        cnt--;
      }
    }
  }
  return cond;
}
```

### 4. 缺失的第一个正整数

描述：
给定一个未排序的整数数组 nums，请你找出其中没有出现的最小的正整数

进阶： 空间复杂度 O(1)，时间复杂度 O(n)

思路：

n 个长度的数组，没有重复，则如果数组填满了 1 ～ n，那么缺失 n+1，如果数组填不满 1 ～ n，那么缺失的就是 1 ～ n 中的数字。对于这种快速查询某个元素是否出现过的问题，还是可以使用哈希表快速判断某个数字是否出现过。

具体做法：

step 1：构建一个哈希表，用于记录数组中出现的数字。
step 2：从 1 开始，遍历到 n，查询哈希表中是否有这个数字，如果没有，说明它就是数组缺失的第一个正整数，即找到。
step 3：如果遍历到最后都在哈希表中出现过了，那缺失的就是 n+1.

代码：

```javascript
function minNumberDisappeared(nums) {
  // write code here
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0) {
      // 将所有的小于0的数都标记成数组长度+1，因为n+1不会威胁1~n内的数的计算
      // 记住：数组内最小正整数，要么在1 ~ n内，要么是 n+1？为啥不是大于n+1的数字？，如果这样，数组内的数字就无法填充1 ~ n了，所以这个数绝对是：要么在1 ~ n内，要么是 n+1
      nums[i] = n + 1;
    }
  }

  for (let i = 0; i < n; i++) {
    // 取
    const num = Math.abs(nums[i]);
    if (num <= n) {
      // 将这个数值对应的下标里的元素改成负数，相当于每个出现过的正整数，我们把与它值相等的下标都指向一个负数，这就是类似哈希表的实现原理的操作。
      nums[num - 1] = -1 * Math.abs(nums[num - 1]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      // 如果该数未发生过变化，则表示该下标对应得正整数未出现过
      return i + 1;
    }
  }
  return n + 1;
}
```

[返回](./#/algorithm/)
