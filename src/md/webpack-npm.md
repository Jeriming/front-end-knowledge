[返回](./#/webpack/)

### 1. 去 npm 官网注册账号

官网链接： [https://www.npmjs.com/](https://www.npmjs.com/)

记住账号密码注册邮箱

### 2. 使用命令行 npm adduser 将注册的账号添加至本地

输入：

```
npm adduser
```

注意输入 npm adduser 需要将本地代理改回官网地址，淘宝代理将无法发布（官网不通自己想办法解决）

```
registry=https://registry.npmjs.org/
```

### 3. 本地登录

```
npm login
# Username: xxx
# Password:
# Email: xxx@mail.com
# xxxx
```

### 4. 进入需要发布的包的根路径

以下以笔者的一个小工具 hash32 为例：

```
cd hash32
npm publish

npm notice
npm notice package: hash32@1.0.4
npm notice === Tarball Contents ===
npm notice 1.1kB LICENSE
npm notice 998B  lib/hash32.js
npm notice 491B  webpack.config.js
npm notice 550B  package.json
npm notice 329B  tsconfig.json
npm notice 418B  README.md
npm notice 96B   lib/index.d.ts
npm notice === Tarball Details ===
npm notice name:          hash32
npm notice version:       1.0.4
npm notice package size:  2.3 kB
npm notice unpacked size: 4.0 kB
npm notice shasum:        be145bb35b45ba8c952498e8696105052ab59e83
npm notice integrity:     sha512-VlJ139OJ3dx8H[...]8VSBP3a8cMFUg==
npm notice total files:   7
npm notice
+ hash32@1.0.4
```

可以查看笔者的一个 npm 包，链接：[https://www.npmjs.com/package/hash32](https://www.npmjs.com/package/hash32)

### 5. 发布升级版本

npm version xxxx

| npm version | 功能                                                                                                                                                                                                                                                                                          |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| major       | - 如果没有预发布号，则直接升级一位大号，其他位都置为 0 <br>- 如果有预发布号：<br>-- 中号和小号都为 0，则不升级大号，而将预发布号删掉。即 2.0.0-1 变成 2.0.0，这就是预发布的作用<br>-- 如果中号和小号有任意一个不是 0，那边会升级一位大号，其他位都置为 0，清空预发布号。即 2.0.1-0 变成 3.0.0 |
| minor       | - 如果没有预发布号，则升级一位中号，大号不动，小号置为空<br>- 如果有预发布号:<br>-- 如果小号为 0，则不升级中号，将预发布号去掉<br>-- 如果小号不为 0，同理没有预发布号                                                                                                                         |
| patch       | - 如果没有预发布号：直接升级小号，去掉预发布号<br>- 如果有预发布号：去掉预发布号，其他不动                                                                                                                                                                                                    |

有 pre 前缀的就是预发布版本号，不做赘述

6. 删除版本流程

 - 1. 删除某个版本
```
npm unpublish hash@1.0.0 --force
```

 - 2. 删除某个包的当前版本，进入某个目录下执行
```
npm unpublish --force
```

 - 3. 或者任意路径执行：
```
npm unpublish xxx --force
```
2和3只是删除当前包package.json中的版本号的包，不会将整个包删除

如果需要将整个包删除，需要将版本号逐个删除

本人github: [https://github.com/Jeriming](https://github.com/Jeriming)

[返回](./#/webpack/)
