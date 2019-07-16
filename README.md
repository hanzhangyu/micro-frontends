# RFC

## 如和更好的SPA通信
### 是否需要使用Parcel

react支持，vue还不支持，共享组件


## 是否需要才分多个项目

### one git one build

#### 优点

- 配置统一
- 依赖统一

#### 缺点

- 一个package.json，一个webpack.config 自由度与灵活度较低
- build time 增加
- 发布需要统一

### lerna（我觉得最优）

#### 优点

- 解耦

#### 缺点

- rebuild 时需要重装 package
- 新同学不友好

### dynamic import

1. 提取依赖
2. 使用/* webpackIgnore: true */忽略构建，采用package内部构建流程并提供url文件

