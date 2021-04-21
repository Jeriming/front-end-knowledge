<template>
  <div class="container">
    <el-page-header
      class="page-header-style"
      @back="goBack"
      title="返回首页"
      content="JS知识"
    >
    </el-page-header>
    <el-container>
      <section class="section-container">
        <h4>1. 宏任务微任务</h4>
        <p class="code-show-container">
    以下代码：打印结果 
	async function runData() {
		setTimeout(() => {
		  console.log(1);
		});
		new Promise((resolve, reject) => {
		  console.log(2);
		  resolve(true);
		}).then(res => {
		  console.log(3);
		});
		await new Promise((resolve, reject) => {
		  console.log(4);
		  resolve(true);
		}).then(res => {
		  console.log(5);
		});
		console.log(6);
		setTimeout(() => {
		  console.log(7);
		  new Promise((resolve, reject) => {
			console.log(8);
			resolve(true);
		  }).then(res => {
			console.log(9);
		  });
		});
	}
        </p>
        <p class="code-show-container">
		打印结果：2 4 3 5 6 1 7 8 9  // 注意这里要注意async await的使用
		</p>
		<p class="words-show-container">
		但是这里为何 3在5的前面，而1又在后面呢？我们再看一个例子
		</p>
        <p class="code-show-container">
	async function runData() {
		setTimeout(()=>{
			console.log(1);
		})
		console.log(2);
		await new Promise(resolve=>{
			setTimeout(()=>{
				console.log(3)
				resolve(true);
			})
		}).then(res=>{
			console.log('promise done')
		})
		console.log(4);
		setTimeout(()=>{
			console.log(5);
		})
	}
		</p>
        <p class="code-show-container">
		打印结果：2 1 3 promise done 4 5 
		</p>
		
		<p class="words-show-container">
		这里就能看出，await等待宏任务还是微任务，取决于promise内部是是宏任务对象还是微任务对象
		</p>
      </section>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageKey: ""
    };
  },
  created() {
    this.pageKey = this.$route.params.pagekey;
    console.log(this.$route.params.pagekey);
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    runData() {}
  }
};
</script>
<style>
.container {
  width: calc(100% - 60px);
  margin: 10px 30px 0;
}
.page-header-style {
  height: 24px;
}
.section-container {
  width: 100%;
}
.code-show-container {
  white-space: pre;
  background-color: #f2f2f2;
}
.words-show-container {
  white-space: pre;
  background-color: #ffffff;
}
</style>
