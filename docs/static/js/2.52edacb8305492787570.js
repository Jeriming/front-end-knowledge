webpackJsonp([2],{DD8e:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={props:{index:{type:Number,default:function(){return null}}},data:function(){return{}}},t={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("section",{staticClass:"section-container"},[o("h4",[n._v(n._s(n.index)+". 宏任务微任务")]),n._v(" "),o("p",{staticClass:"code-show-container"},[n._v("\n  以下代码：打印结果 \nasync function runData() {\n  setTimeout(() => {\n    console.log(1);\n  });\n  new Promise((resolve, reject) => {\n    console.log(2);\n    resolve(true);\n  }).then(res => {\n    console.log(3);\n  });\n  await new Promise((resolve, reject) => {\n    console.log(4);\n    resolve(true);\n  }).then(res => {\n    console.log(5);\n  });\n  console.log(6);\n  setTimeout(() => {\n    console.log(7);\n    new Promise((resolve, reject) => {\n    console.log(8);\n    resolve(true);\n    }).then(res => {\n    console.log(9);\n    });\n  });\n}\n      ")]),n._v(" "),o("p",{staticClass:"code-show-container"},[n._v("\n  打印结果：2 4 3 5 6 1 7 8 9  // 注意这里要注意async await的使用\n  ")]),n._v(" "),o("p",{staticClass:"words-show-container"},[n._v("\n  但是这里为何 3在5的前面，而1又在后面呢？我们再看一个例子\n  ")]),n._v(" "),o("p",{staticClass:"code-show-container"},[n._v("\nasync function runData() {\n  setTimeout(()=>{\n    console.log(1);\n  })\n  console.log(2);\n  await new Promise(resolve=>{\n    setTimeout(()=>{\n      console.log(3)\n      resolve(true);\n    })\n  }).then(res=>{\n    console.log('promise done')\n  })\n  console.log(4);\n  setTimeout(()=>{\n    console.log(5);\n  })\n}\n")]),n._v(" "),o("p",{staticClass:"code-show-container"},[n._v("\n打印结果：2 1 3 promise done 4 5 \n")]),n._v(" "),o("p",{staticClass:"words-show-container"},[n._v("\n这里就能看出，await等待宏任务还是微任务，取决于promise内部是是宏任务对象还是微任务对象\n")])])},staticRenderFns:[]};var r=o("VU/8")(s,t,!1,function(n){o("yWgb")},"data-v-47eff45e",null);e.default=r.exports},yWgb:function(n,e){}});