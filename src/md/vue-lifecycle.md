[返回](./#/vue/)

加载过程\
父beforeCreate-> 父create -> 子beforeCreate-> 子created -> 子mounted -> 父mounted

更新过程\
父beforeUpdate->子beforeUpdate->子updated->父updated

销毁过程\
父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

- beforeCreate执行时：data和el均未初始化，值为undefined
- created执行时：Vue 实例观察的数据对象data已经配置好，已经可以得到data的值，但Vue 实例使用的根 DOM 元素el还未初始化
- beforeMount执行时：data和el均已经初始化，但此时el并没有渲染进数据，el的值为“虚拟”的元素节点
- mounted执行时：此时el已经渲染完成并挂载到实例上
- beforeUpdate和updated触发时，el中的数据都已经渲染完成，但只有updated钩子被调用时候，组件dom才被更新。
- 在created钩子中可以对data数据进行操作，这个时候可以进行数据请求将返回的数据赋给data
- 在mounted钩子对挂载的dom进行操作，此时，DOM已经被渲染到页面上。
虽然updated函数会在数据变化时被触发，但却不能准确的判断是那个属性值被改变，所以在实际情况中用computed或watch函数来监听属性的变化，并做一些其他的操作。
- 所有的生命周期钩子自动绑定 this 上下文到实例中，所以不能使用箭头函数来定义一个生命周期方法 (例如 created: () => this.fetchTodos()),会导致this指向父级。
- 在使用vue-router时有时需要使用来缓存组件状态，这个时候created钩子就不会被重复调用了，如果我们的子组件需要在每次加载或切换状态的时候进行某些操作，可以使用activated钩子触发。
- 父子组件的钩子并不会等待请求返回，请求是异步的，VUE设计也不能因为请求没有响应而不执行后面的钩子。所以，我们必须通过v-if来控制子组件钩子的执行时机

[返回](./#/vue/)