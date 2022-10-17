[返回](./#/js/)

## 1. 为什么使用 void 0 代替 undefined

一是因为 ECMAScript 5 之前，undefined 不是 Javascript 的保留字，可读写（ECMAScript 5 后只读），使用 void 0 不可被更改；二是 void 0 字符长度比 undefined 更短。

null == undefined\
null !== undefined

null 的类型是 object，这是由于历史原因造成的。1995 年的 JavaScript 语言第一版，只设计了五种数据类型（对象、整数、浮点数、字符串和布尔值），没考虑 null，只把它当作 object 的一种特殊值。后来 null 独立出来，作为一种单独的数据类型，为了兼容以前的代码，typeof null 返回 object 就没法改变了。

---

## 2.JS 数据类型有哪些

简单数据类型：\
 Number 、String、Boolean、Null、Undefined、BigInt、Symbol，其中 BigInt、Symbol 是 ES6 新增的两种数据类型\
 **`BigInt`**  可以表示任意大的整数。

```javascript
// BigInt和字符串互相转换
const str = "483948938490739487392843829483840838493";
const bigInt = new BigInt(str);
const tranStr = bigInt.toString();

// BigInt可互相加减
const destination = 200034343n - 2022n;
```

**`Symbol`** 可以理解为独一无二的值，阮大神对它的解释是：“ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突”

```javascript
// 此时的s1是不等于s2的
const s1 = Symbol("hello");
const s2 = Symbol("hello");
```

注意：Symbol 是不能用 new 来初始化的，因为 new 出来都是对象，而不是 Symbol 类型了

引用数据类型也叫复杂数据类型：\
 Object，其中普通对象，数组，正则，日期，Math 数学函数都属于 Object

数据分成两大类的本质区别：基本数据类型和引用数据类型它们在内存中的存储方式不同。\
基本数据类型是直接存储在栈中的简单数据段，占据空间小，属于被频繁使用的数据。\
引用数据类型是存储在堆内存中，占据空间大。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址，当解释器寻找引用值时，会检索其在栈中的地址，取得地址后从堆中获得实体。

---

## 3. 闭包

**`闭包`** ：就是一个函数 A，return 其内部的函数 B，B 函数能够在外部访问 A 函数内部的变量，这时候就形成了一个 B 函数的变量背包量。\
闭包形成的原理：**`作用域链`**，当前作用域可以访问上级作用域中的变量 \
闭包解决的问题：能够让函数作用域中的变量在函数执行结束之后不被销毁，同时也能在函数外部可以访问函数内部的局部变量。不同闭包中的变量隔离。\
闭包带来的问题：由于垃圾回收器不会将闭包中变量销毁，于是就造成了内存泄露，内存泄露积累多了就容易导致内存溢出。\
闭包的应用：能够模仿块级作用域，能够实现 **`柯里化`**，在构造函数中定义特权方法、Vue 中数据响应式 Observer 中使用闭包等。

---

## 4. 柯里化

柯里化，简单来说就是，把一个多参数的函数转化为单参数函数的方法。上代码：

```javascript
// 普通函数
function add(a, b) {
  return a + b;
}
add(1, 2);

// 柯里化后
function add(a) {
  return function (b) {
    return a + b;
  };
}

add(1)(2);
```

---

## 5. 作用域链

首先什么是 **`作用域`**：\
简单来说是变量的可用范围，可以使不同范围内的变量不互相干扰。\
JS 分为 **`全局作用域`** 、 **`函数作用域`**

1、函数在执行的过程中，先从自己内部寻找变量
2、如果找不到，再从创建当前函数所在的作用域去找，从此往上，也就是向上一级找\
上代码：

```javascript
var a = 100;
function process() {
  var a = 200;
  // 此时的a 很明显是200
  console.log(a);
}

// 但如果函数内没定义a呢
var a = 100;
function process() {
  // 此时a很明显是 100
  console.log(a);
}
```

---

## 6. 变量提升

JS 中使用 var 创建变量时会存在变量提升，也就是把使用 var 创建的变量提升到当前作用域的顶部。

```javascript
var a;
var b的是undefined;
console.log(a); //undefined
console.log(b); //undefined
a = 1;
b = 2;
console.log(a); // 1
console.log(b); // 2

// 注意：var变量提升只是声明提升，而赋值并没有提升，比如：
console.log(a); //undefined
console.log(b); //undefined
var a = 1;
var b = 2;
console.log(a); // 1
console.log(b); // 2
```

**`函数提升`** 函数声明，使用函数声明的函数会存在函数提升，即将声明的函数提升到当前作用域顶部
例如：

```javascript
a();
function a() {
  console.log("函数a");
}

// 相当于：
function a() {
  console.log("函数a");
}
a();
```

注意：函数提升高于变量提升，当存在同名时，在变量赋值之前函数声明还是函数声明，不会被覆盖，当变量赋值之后，函数声明将被变量覆盖。例如：

```javascript
console.log(a); // 打印的是函数
var a = 1;

console.log(a); // 1
function a() {
  console.log("函数a");
}

console.log(a); // 1
// 这里正是因为函数的提升优先级高于变量，所以后面变量a就把函数给覆盖了
```

## 7. JavaScript 几种判断变量的类型的方法

1. typeof：常用于判断基本数据类型，对于引用数据类型除了 function 返回’function‘，其余全部返回’object'

2. instanceof：主要用于区分引用数据类型，检测方法是检测的类型在当前实例的原型链上，用其检测出来的结果都是 true，不太适合用于简单数据类型的检测，检测过程繁琐且对于简单数据类型中的 undefined, null, symbol 检测不出来, 例如：

```javascript
class A {}
class B extends A {}
const ins = new B();

ins instanceof A; // true
ins instanceof B; // true
ins instanceof Object; // true

const temp = null; // undefined, null, symbol
tmp instanceof null; // Uncaught TypeError: Right-hand side of 'instanceof' is not an object
```

3. constructor:针对于 instanceof 的弊端，我们使用 constructor 检测，constructor 是原型对象的属性指向构造函数

```javascript
class A {}
class B extends A {}
const ins = new B();

ins.constructor === B; // true
ins.constructor === A; // false
```

4. 适用于所有类型的判断检测，检测方法是 Object.prototype.toString.call(数据) 返回的是该数据类型的字符串。 这四种判断数据类型的方法中，各种数据类型都能检测且检测精准

```javascript
const nullVar = null;
console.log(Object.prototype.toString.call(nullVar)); // [object Null]
const undefindedVar = undefined;
console.log(Object.prototype.toString.call(undefindedVar)); // [object Undefined]
const symbolVar = Symbol(1);
console.log(Object.prototype.toString.call(symbolVar)); // [object Symbol]
```

## 8. new 会发生什么

创建空对象、为对象添加属性、把新对象当作 this 的上下文、箭头函数不能作为构造函数 标准回答 `new` 关键字会进行如下的操作：

1. 创建一个空的简单 JavaScript 对象（即`{}`）；
2. 为步骤 1 新创建的对象添加属性`__proto__`，将该属性链接至构造函数的原型对象 ；
3. 将步骤 1 新创建的对象作为`this`的上下文 ；
4. 如果该函数没有返回对象，则返回`this`。

注意： `new`关键字后面的构造函数不能是箭头函数

## 9. 浏览器垃圾回收机制

浏览器垃圾回收机制根据数据的存储方式分为栈垃圾回收和堆垃圾回收。 \
栈垃圾回收的方式非常简便，当一个函数执行结束之后，JavaScript 引擎会通过向下移动 ESP 来销毁该函数保存在栈中的执行上下文，遵循先进后出的原则。 \
堆垃圾回收，当函数直接结束，栈空间处理完成了，但是堆空间的数据虽然没有被引用，但是还是存储在堆空间中，需要垃圾回收器将堆空间中的垃圾数据回收。\
为了使垃圾回收达到更好的效果，根据对象的生命周期不一样，使用不同的垃圾回收的算法。\
在 V8 中会把堆分为新生代和老生代两个区域，新生代中存放的是生存时间短的对象，老生代中存放的生存时间久的对象。新生区中使用 Scavenge 算法，老生区中使用标记-清除算法和标记-整理算法。

拓展：

- Scavenge 算法：

1. 标记：对对象区域中的垃圾进行标记
2. 清除垃圾数据和整理碎片化内存：副垃圾回收器会把这些存活的对象复制到空闲区域中，并且有序的排列起来，复制后空闲区域就没有内存碎片了
3. 角色翻转：完成复制后，对象区域与空闲区域进行角色翻转，也就是原来的对象区域变成空闲区域，原来的空闲区域变成了对象区域，这样就完成了垃圾对象的回收操作，同时这种角色翻转的操作还能让新生代中的这两块区域无限重复使用下去

- 标记-清除算法：

1. 标记：标记阶段就是从一组根元素开始，递归遍历这组根元素，在这个遍历过程中，能到达的元素称为活动对象，没有到达的元素就可以判断为垃圾数据。
2. 清除：将垃圾数据进行清除。
3. 产生内存碎片：对一块内存多次执行标记 - 清除算法后，会产生大量不连续的内存碎片。而碎片过多会导致大对象无法分配到足够的连续内存。

- 标记-整理算法

1. 标记：和标记 - 清除的标记过程一样，从一组根元素开始，递归遍历这组根元素，在这个遍历过程中，能到达的元素标记为活动对象。
2. 整理：让所有存活的对象都向内存的一端移动
3. 清除：清理掉端边界以外的内存 V8 是使用副垃圾回收器和主垃圾回收器处理垃圾回收的，不过由于 JavaScript 是运行在主线程之上的，一旦执行垃圾回收算法，都需要将正在执行的 JavaScript 脚本暂停下来，待垃圾回收完毕后再恢复脚本执行。我们把这种行为叫做全停顿。

为了降低老生代的垃圾回收而造成的卡顿，V8 将标记过程分为一个个的子标记过程，同时让垃圾回收标记和 JavaScript 应用逻辑交替进行，直到标记阶段完成，我们把这个算法称为增量标记（Incremental Marking）算法

## 10. 随机生产 32 位 hash 串

```javascript
function uuid() {
  var currentTime = new Date().getTime();
  return (
    "undefined" != typeof performance &&
      "function" == typeof performance.now &&
      (currentTime += performance.now()),
    "xxxxxxxxyyyyyyyyxxxxxxxxyyyyyyyy".replace(/[xy]/g, function (character) {
      var randFactor = (currentTime + 16 * Math.random()) % 16 | 0;
      return (
        (currentTime = Math.floor(currentTime / 16)),
        ("x" === character ? randFactor : (3 & randFactor) | 8).toString(16)
      );
    })
  );
}
```

### 11. 神奇的函数

先看代码：

```javascript
var a = 10;
function a() {}
console.log(a);
```

这里的打印的结果是什么？

之前我们知道，函数的提升优先级高于变量的，所以上面的代码相当于

```javascript
function a() {}
var a;
a = 10;
console.log(a);
```

所以打印出来的是 10

但是，下面代码：

```javascript
var a = 10;
(function a() {
  a = 20;
  console.log(a);
})();
```

这个打印出来竟然是函数本身

大神给出的解释：

一个立即执行的函数表达式（IIFE），而且是一个具名的函数表达式（NFE）。在 ECMAScript 标准中要求 NFE 实现两个特性 1.只能在函数体内访问函数名变量。2.函数名变量可以理解为常量，不可改变。所以 a = 20 被忽略了，在严格模式下会报错

12. Object.is

Object.is() 与 == 不同。== 运算符在判断相等前对两边的变量（如果它们不是同一类型）进行强制转换（这种行为将 "" == false 判断为 true），而 Object.is 不会强制转换两边的值。

Object.is() 与 === 也不相同。差别是它们对待有符号的零和 NaN 不同，例如，=== 运算符（也包括 == 运算符）将数字 -0 和 +0 视为相等，而将 Number.NaN 与 NaN 视为不相等。

与全等号不同的是：\
Object.is(+0, -0); // false\
Object.is(NaN, 0/0); // true\
Object.is(NaN, Number.NaN) // true

13. 以下两次检测对象 constructor 是否拥有属性名 1 的结果分别是什么

```javascript
1 in Object(1.0).constructor;
Number[1] = 123;
1 in Object(1.0).constructor;
```

Object(1.0)实际得到的是一个 Number，数字 1 是否在 Number.constructor 上

注： in 运算符，如果指定的属性在指定的对象或其原型链中，则 in 运算符返回 true

Number[1] = 123; 即将 1 添加到 Number 的原型链上，所有执行完这段代码后，就返回 true

[返回](./#/js/)
