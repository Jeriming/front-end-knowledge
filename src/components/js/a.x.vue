<template>
  <section class="section-container">
    <h4>{{ index }}. 连等号a.x=a={n:2}引发的思考</h4>
    <p class="code-show-container">
      var a = { n: 1};
      var b = a;
      a.x = a = { n: 2 };//方式1
      //a = a.x = { n: 2 };//方式2
      console.log(a.x);//undefined
      console.log(b.x);//{n:2}
    </p>
    <p class="words-show-container">
当执行a.x = a = {n:2};时，注意了，不是a变量指向了{n:2},然后a对象的a.x也指向{n:2},而是，

解释a:如果变量为一层变量(下面解释)时，则该变量指向新的内存({n:2})；

解释a.x:如果变量是之前已有内存（堆{n:1}）的属性（不管之前有没有存在，没有存在就创建然后指向undefined先），
然后用该堆中对象的该属性指向{n:2},刚好说明了b.x为什么也指向{n:2},因为恰好b也指向该堆中的内存，
而a.x为undefined因为执行a.x=a={n:2}的时候，a.x根本就不是操作a执行新的内存{n:2}的属性,所以a.x为undefine,如下图

解释:为什么a={n:2}，之后a.x为什么不是a新的内存中的x:

因为js在 执行 a = b (赋值表达式)的时候，先把左边的变量的栈(有可能是堆中的变量a.x)确定下来，然后再赋值，所以a.x=a={n:2}和a=a.x={n:2}一样，因为左边的变量已经确定下来了
综合上述，不管是a.x=a={n:2}还是a=a.x={n:2}都会console.log(a.x)输出undefine,因为a.x操作的是之前内存中对象的属性x,而非a指向新对象内存中的x
    </p>
  </section>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      default: ()=>null
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.section-container {
  width: 100%;
  margin-bottom: 30px;
  .code-show-container {
    white-space: pre;
    background-color: var(--background-grey-color);
  }
  .words-show-container {
    white-space: pre;
  }
}
</style>