[返回](./#/js/)

## this 指向

1. 全局作用域中，this 指向 window（nodeJs->global）

```javascript
console.log(this); // window
```

2. 普通函数内

```javascript
function func() {
  console.log(this);
}

// 直接执行还是window
func(); // window， func的调用者是window,所以指向window

const obj = {};
// call，传入谁就是谁
func.call(obj); // obj, call可以改变this指向，后面再介绍

const obj = {
  func: function () {
    func();
  },
  func2: function () {
    console.log(this);
  },
};
obj.func(); // window，func内this指向 obj，但是func内执行func函数，其实还是window直接调用的，所以this指向window
obj.func2(); // obj, 上面已解释
const func3 = obj.func2;
func3(); // window，func3直接调用还是window
```

以上可以总结为：谁调用这个函数，this 指向谁

3. DOM 事件回调函数内的 this

先上代码：

```javascript
document.addEventListener("click", function (event) {
  console.log(this); // 打印的是document对象，说明事件的回调函数执行者是命中dom对象
});

// 那么定时器的回调函数执行者是谁呢？
setTimeout(function () {
  console.log(this); // 结果是window
}, 100);
```

4. new 的对象

```javascript
function func() {
  console.log(this); // 这里其实打印的就是obj自己，构造函数的执行者是对象自己
}

const obj = new func();
```

5. 箭头函数

其他资料强调的最多的一句话是，箭头函数的this指向在定义的时候已经确定，后面不会发生改变，什么意思呢？我们用上面普通函数来对比一下举例说明：


```javascript
// 例子1
const func = () => {
  console.log(this);
}

func(); // 毫无疑问是 window

// 例子2
const func = () => {
  console.log(this);
}
const obj = {};
func.call(obj); // 结果：window, PS：强大的call都无法改变箭头函数的this指向

// 例子3
const obj = {
  func: ()=>{
    console.log(this);
  }
}
obj.func(); // 结果： window，绝望了还是window, 那我们怎么才能让this指向obj呢？

// 例子4来实现上诉功能
const obj = {
  func: function() {
    return ()=> {
      console.log(this);
    }
  }
}
obj.func()(); // 此时结果是obj， 说明箭头函数指向了它的上文的this

// 例子5来证明4的结论：
const obj = {
  func: function() {
    return ()=> {
      console.log(this);
    }
  }
}
const obj2 = {a: 1}
obj.func.call(obj2)(); // 这里结果是obj2

// 例子6，箭头函数的dom事件指向了window
document.addEventListener('click', (event) => {
  console.log(this); // window, 普通函数是dom
})

```

有一个对箭头函数的总结很到位：箭头函数没有自己的this，箭头函数的this就是上文中定义的this，因为箭头函数没有自己的this所以不能用做构造函数，不能使用new、没有arguments、没有原型和super。

其他的知识点： 箭头函数也没有原型和super。不能使用yield关键字，因此箭头函数不能用作 Generator 函数

[返回](./#/js/)
