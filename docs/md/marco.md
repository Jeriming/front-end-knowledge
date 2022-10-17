[返回](./#/js/)

1. 事件队列

所有的任务可以分为同步任务和异步任务，同步任务，顾名思义，就是立即执行的任务，同步任务一般会直接进入到主线程中执行；而异步任务，就是异步执行的任务，比如 ajax 网络请求，setTimeout 定时函数等都属于异步任务，异步任务会通过事件队列( Event Queue )的机制来进行协调。

同步和异步任务分别进入不同的执行环境，同步的进入主线程，即主执行栈，异步的进入 Event Queue 。主线程内的任务执行完毕为空，会去 Event Queue 读取对应的任务，推入主线程执行。 上述过程的不断重复就是我们说的 Event Loop (事件循环)。

事件循环过程是一个宏观的表述，实际上因为异步任务之间并不相同，因此他们的执行优先级也有区别。不同的异步任务被分为两类：微任务 (micro task) 和宏任务 (macro task)。

以下事件属于宏任务：

setInterval()
setTimeout()

以下事件属于微任务：

promise.then()
Async/Await(实际就是 promise)
new MutaionObserver()

下面通过代码来理解：

```javascript
console.log(1);

setTimeout(function () {
  console.log(2);

  Promise.resolve().then(function () {
    console.log(3);
  });
}, 0);

Promise.resolve()
  .then(function () {
    console.log(4);
    setTimeout(function () {
      console.log(5);

      Promise.resolve().then(function () {
        console.log(6);
      });
    }, 0);
    Promise.resolve().then(function () {
      console.log(7);
    });
  })
  .then(function () {
    console.log(8);
  });

console.log(9);
```

1. 先执行当前宏任务的同步任务，很明显先打印1，9；
2. 宏任务执行完成执行该宏任务下的微任务：4，这里需要分析先是执行7，还是8？我们思考promise,then的原理，链式then是等上一个then执行完才会执行，而4打印后，先执行的是7,所以7的微任务在8的前面，所以先打印7，后打印8； （至此：1，9，4，7，8）
3. 当前宏任务微任务执行完毕，则执行下一个宏任务：2，2执行完后当前宏任务执行完成，开始执行该宏任务下的微任务：3；（至此： 1，9，4，7，8，2，3）
4. 继续执行下一个宏任务：5，当前宏任务执行完成，执行当前宏任务下的微任务：6；

所以以上代码执行顺序： 1，9，4，7，8，2，3，5，6

- Promise终极面试题
```javascript
Promise.resolve().then(()=>{
  console.log(0);
  return Promise.resolve(4);
}).then(res=>{
  console.log(res);
})

Promise.resolve().then(()=>{
  console.log(1);
}).then(()=>{
  console.log(2);
}).then(()=>{
  console.log(3);
}).then(()=>{
  console.log(5);
}).then(()=>{
  console.log(6);
})
```

1. 第一步，执行同步代码：Promise.resolve()执行完一个promise，状态为 finished(f)，而它的then就会产生一个新的promise，记作p0，状态为pending(p)，依次执行同步代码
pr1: f
p0: p =>放入微队列： marco: p0
pres: p
pr2: f
p1: p p1 =>放入微队列： marco: p0 p1
p2: p
p3: p
p5: p
p6: p

2. 执行微队列 p0, p0打印0后将 因为返回一个Promise, 将该Promise加入微队列：marco: p1 Promise.resolve(4).then(()=>{完成p0})，此时p0状态还是p

输出： 0
macro: p1 Promise.resolve(4).then(()=>{完成p0})

3. 执行p1后，输出1，p1状态变成 f,然后将p2加入微队列：Promise.resolve(4).then(()=>{完成p0}) p2

3. 执行Promise.resolve(4).then(()=>{完成p0})，此时生成的()=>{完成p0}会加入微队列：p2 ()=>{完成p0},此时没打印

4. 执行p2，打印2, 将p3加入微队列：  ()=>{完成p0} p3

5. 执行()=>{完成p0}，完成p0，将pres加入微队列： p3 pres

6. 执行p3打印3， 将p5加入微队列：pres p5

7. 执行pres ，打印传入的4，微队列 p5 p6

最后打印：
0\
1\
2\
3\
4\
5\
6

[返回](./#/js/)
