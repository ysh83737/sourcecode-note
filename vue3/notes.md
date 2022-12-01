Vue3 源码阅读笔记
===
# 核心知识点

- `@vue/runtime-core`
  - `createRenderer`创建渲染器
- `@vue/reactivity`
  - `trackRefValue` **ref依赖收集**

# Thinking 项目设计思路

## xx

xxxx

# Codes 闪光代码

xxxx

# Packages 优秀的库

## [xxxx](https://www.npmjs.com/package/xxxx)

xxxx

# Expand 拓展知识

## Object.is

`Object.is(value1, value2)`判断两个值是否是相同的值，与`value1 === value2`相似，但有细微区别，如：
| value1 | value2 | Object.is | ===   |
| ------ | ------ | --------- | ----- |
| +0     | -0     | false     | true  |
| NaN    | NaN    | true      | false |