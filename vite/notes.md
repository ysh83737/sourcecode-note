Vite源码阅读笔记
===
# 核心知识点

- logger
- ~~webSocket: createWebSocketServer~~
- ~~watcher: 热更新，文件变更监听，使用`chokidar`~~
- ~~html: transformIndexHtml~~
- ~~hmr: handleHMRUpdate~~
  - ~~client（客户端）webSocket - handleMessage~~
- ~~middlewares: 本地服务加入大量中间件，处理不同的业务~~
- ~~transformMiddleware => transformRequest~~
  - ~~`pending`的缓存机制~~

# Thinking 项目设计思路

> 仅探讨`vite serve`本地开发功能，`build`功能属`rollup`

## 服务

- 使用`node:http`模块创建本地服务
- 使用`connect`模块挂载中间件
- 所有的功能都通过中间件实现，根据不同的配置（功能需求）挂载不同的中间件

## 编译

- 使用`transformMiddleware`中间件，实现代码实时编译
- `vite`仅提供访问服务，代码编译都是通过插件（`plugin`）完成，如：`plugin-vue`

## 热更新

- 使用`chokidar`监听文件变更，进而实现热更新（handleHMRUpdate）
- `client`（客户端）接收`webSocket`消息，执行更新操作（handleMessage）

# Codes 闪光代码

- 无，代码没啥出彩的、注释少

# Packages 优秀的库

## [cac](https://www.npmjs.com/package/cac)

一个非常轻量简洁的`cli`开发基础库

## [picocolors](https://www.npmjs.com/package/picocolors)

一个非常轻量简洁的终端输出颜色库  
比`chalk`更轻、更快

## [esbuild](https://www.npmjs.com/package/esbuild)

新一代js编译工具，性能超强

## [connect](https://www.npmjs.com/package/connect)

承载`nodejs http`中间件挂载，曾经是`express`的核心组件，现在的`express`也是基于这种思路

## [cors](https://www.npmjs.com/package/cors)

跨域配置中间件
> 适用于`connect`/`express`

## [http-proxy](https://www.npmjs.com/package/http-proxy)

提供http代理服务

## [sirv](https://www.npmjs.com/package/sirv)

提供静态资源访问服务的中间件


# Expand 拓展知识

## Nodejs 中断监听

- `process.once('SIGTERM')`：shell kill -9 退出
- `process.once('SIGINT')`：`ctrl + c` 退出
> `once` - 监听一次

## Nodejs 性能监控模块

`node:perf_hooks`

## Nodejs url 模块

`node:url`

- `url.pathToFileURL`: 文件路径 转换为可访问的文件url
- 
## Nodejs module 模块

`node:module`，用于处理模块引入相关操作

- `module.createRequire(filename)`: 构造基于`filename`相对路径的`require`函数，用于引入`CommonJS`模块
