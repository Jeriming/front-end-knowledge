[返回](./#/js/)

### 1. 原型链继承

原理：原型链继承：让一个构造函数的原型是另一个类型的实例，那么这个构造函数 new 出来的实例就具有该实例的属性，原型链继承的。\
优点：写法方便简洁，容易理解。\
缺点：在父类型构造函数中定义的引用类型值的实例属性，会在子类型原型上变成原型属性被所有子类型实例所共享。同时在创建子类型的实例时，不能向超类型的构造函数中传递参数。

代码：

```javascript
function A(name) {
  this.name = name;
  this.scopes = [1, 2];
}

function B(name) {
  this.name = name;
}

B.prototype = new A();

const b = new B("hell");
b instanceof B; // true
b instanceof A; // true
b.scopes.push(3);
// 但是b 修改了scopes会导致其他类实例的scopes也会发生变化
const b2 = new B("hi");
b2.scopes; // [1,2,3]
```

### 2. 构造函数继承

原理：在子类型构造函数的内部调用父类型构造函数；使用 apply() 或 call() 方法将父对象的构造函数绑定在子对象上。\
优点：解决了原型链实现继承的不能传参的问题和父类的原型共享的问题。\
缺点：借用构造函数的缺点是方法都在构造函数中定义，因此无法实现函数复用。在父类型的原型中定义的方法，对子类型而言也是不可见的，结果所有类型都只能使用构造函数模式。

代码：

```javascript
function A(name) {
  this.name = name;
  this.scopes = [1, 2];
}

function B(name) {
  A.call(this, name);
}

const b1 = new B("hell");
b1 instanceof B; // true;
b1 instanceof A; // false;
b1.scopes.push(3);

const b2 = new B("hi");
b1.scopes; // [1, 2]
```

### 3. 组合式继承

原理： 将原型链和借用构造函数的组合到一块。使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义方法实现了函数复用，又能够保证每个实例都有自己的属性。\
优点就是解决了原型链继承和借用构造函数继承造成的影响。\
缺点是无论在什么情况下，都会调用两次超类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。

代码：

```javascript
function A(name) {
  this.name = name;
  this.scopes = [1, 2];
}

function B(name) {
  A.call(this, name);
}
B.prototype = new A();
const b1 = new B("hell");
b1 instanceof B; // true;
b1 instanceof A; // true;
b1.scopes.push(3);

const b2 = new B("hi");
b1.scopes; // [1, 2]
```

### 4. 寄生式组合继承

原理：通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。\
优点是：高效率只调用一次父构造函数，并且因此避免了在子原型上面创建不必要，多余的属性。与此同时，原型链还能保持不变；\
缺点是：代码复杂

代码：

```javascript
function A(name) {
  this.name = name;
  this.scopes = [1, 2];
}

function B(name) {
  A.call(this, name);
}

function initPrototype(subType, superType) {
  const pro = Object.create(superType.prototype);
  pro.constructor = subType;
  subType.prototype = pro;
}
initPrototype(B, A);
const b1 = new B("hell");

b1.scopes.push(3);

const b2 = new B("hi");
```

### 5. ES6 的 class extends

class 关键字只是原型的语法糖，JavaScript 继承仍然是基于原型实现的。 优点：语法简单易懂,操作更方便。缺点：并不是所有的浏览器都支持

[返回](./#/js/)
