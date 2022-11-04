[返回](./#/vue/)

### 动态组件

有时候我们在一个容器下，并不确定当前使用哪个组件，通过 component 来实现组件动态化

```javascript
<component v-bind:is="currentTabComponent"></component>
```

### 动态参数

有一种场景，如果动态组件传给子组件的参数也不一样，这个时候就需要使用动态参数：

```javascript
<component v-bind:is="currentTabComponent" v-bind="param"></component>;

// js 中
param = {
  a: 1,
  b: 2,
};
```

这时只要在子组件定义好对应的 props 即可

[返回](./#/vue/)
