
> [!WARNING]
> 工欲善其事必先利其器-前端

## 安装 Git

- [https://git-scm.com/](https://git-scm.com/)
  
> **Git 配置命令参考**

```bash
git config --global --list # 查看全局配置
git config --local --list # 查看本项目配置

git config --global user.name "用户名" # 设置用户名
git config --global user.email "邮箱" # 设置邮箱

git config --global alias.cm commit
git config --global alias.br branch # 配置指令别名简写

git config --global credential.helper store # 输入一次账号密码后第二次就会记住账号密码

git config --global core.ignorecase false # 关闭忽略大小写

git config --system core.longpaths true # 配置长路径

git config --global http.sslVerify false # 禁用 ssl 验证

git config --global core.protectNTFS false # 关闭 NTFS 文件保护

git config --global url."https://".insteadOf git:// # 解决 git:// 报错
```

## 安装 SourceTree

- [https://www.sourcetreeapp.com/](https://www.sourcetreeapp.com/)

> 推荐使用 `SourceTree`，他是一个 Git 的图形化工具，可以让我们更高效、便捷、优雅的协作。

- **SourceTree 待办**
  - 跳过登录方法，将文件 `accounts.json`放入 `%LocalAppData%\Atlassian\SourceTree\`。

```bash
[
  {
    "$id": "1",
    "$type": "SourceTree.Api.Host.Identity.Model.IdentityAccount, SourceTree.Api.Host.Identity",
    "Authenticate": true,
    "HostInstance": {
      "$id": "2",
      "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountInstance, SourceTree.Host.AtlassianAccount",
      "Host": {
        "$id": "3",
        "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountHost, SourceTree.Host.AtlassianAccount",
        "Id": "atlassian account"
      },
      "BaseUrl": "https://id.atlassian.com/"
    },
    "Credentials": {
      "$id": "4",
      "$type": "SourceTree.Model.BasicAuthCredentials, SourceTree.Api.Account",
      "Username": "",
      "Email": null
    },
    "IsDefault": false
  }
 ]
```

> **安装后操作：**更新版本；设置英文；配置 ssh；取消 pull 时快速合并；开启 force-push；配置个人信息与个性化设置；配置自定义 bat (同步标签等)。

- **同步标签 bat**

```bash
// windows 需带入参数 $REPO
cd %1

echo 'Remove all local tags'

FOR /F %%i in ('git tag -l') DO git tag -d %%i

echo 'Fetch tags from origin'

git fetch --tags origin

// mac 需带入参数 $REPO
#! /bin/bash
cd $REPO/.git
git tag -l | xargs git tag -d
git fetch origin --prune --prune-tags
```

## 安装 VsCode

- [https://code.visualstudio.com/](https://code.visualstudio.com/)

> 推荐使用 VsCode 进行开发，方便团队代码规范执行。

- 设置 `VsCode` 应用兼容性以管理员身份运行
- Windows PowerShell 特殊配置（以管理员的身份运行 PowerShell）

```bash
搜索 Powershell，右键以管理员身份运行。
set-ExecutionPolicy RemoteSigned 选 Y
get-ExecutionPolicy 等于 RemoteSigned 即可
```

## 安装 Node

- [https://nodejs.org/en/](https://nodejs.org/en/)

### nodejs 配置

- **全局安装 `yarn`：可大大提高插件安装速度，确保不同机器/环境上安装的`node_modules`相同。**

```bash
npm install yarn -g
```

- **替换 `npm` 安装源： 官方源的访问速度太慢，切换到淘宝镜像源。**

```bash
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global

// 查看当前 npm 镜像，默认是 https://registry.npmjs.org。
npm config get registry

// 避免 Module build failed: Error: Cannot find module 'xxxxx'
npm install -g mirror-config-china --registry=http://registry.npm.taobao.org

// 安装 cnpm，注意使用 cnpm 时，--save在 npm 高版本中是可以省略不写的，但是 cnpm 还是需要写的。
npm install -g cnpm --registry=https://registry.npm.taobao.org

// 当然也可以使用 nrm 管理
npm i -g nrm # 安装 nrm
nrm ls # 查看所有源
nrm use cnpm # 使用指定源
nrm add <registry> <url> [home] # 添加源
// 可以通过 -h 查看帮助，一般都是 nrm [options] [command]。

--------------------------------------------------

// electron 相关
# 设置华为镜像源
npm config set registry https://mirrors.huaweicloud.com/repository/npm/

# 浏览器引擎驱动镜像改成国内镜像
npm config set chromedriver_cdnurl https://mirrors.huaweicloud.com/chromedriver

# electron 镜像改成国内镜像
npm config set electron_mirror https://mirrors.huaweicloud.com/electron/

# electron_builder_binaries 镜像改成国内镜像
npm config set electron_builder_binaries_mirror https://mirrors.huaweicloud.com/electron-builder-binaries/

# 如果安装了yarn，把yarn镜像也改成国内镜像
yarn config set registry https://mirrors.huaweicloud.com/repository/npm/
```

- **全局安装`pm2`：方便管理、监控 node 服务，包含 `nodemon` 的功能。**

```bash
npm install pm2 -g
```

- **全局安装`rimraf`：方便删除文件或目录，特别是像 `node_modules`这种层级很深的，我们经常删不干净或者删除很慢。**

```bash
npm install -g rimraf
rimraf ./node_modules
```

- **全局安装`nodemon`：nodejs 项目热重载，方便开发调试；可以自动检测文件更改，并重新启动运行来调试基于 node.js 的应用程序。**

```bash
npm install -g nodemon

# 在本地 888 端口启动 node 服务
nodemon ./server.js localhost 888

# 延迟重启
nodemon --delay 2.5 server.js
nodemon --delay 2500ms server.js
```

- **临时运行可执行包**

```bash
# 假如我们有需要可执行的包，但又不想全局安装，避免污染，我们可以这样做。
# 例如：
npm i -g cloudcmd # 全局安装 cloudcmd
cloudcmd # 可以执行

npm i cloudcmd # 局部安装 cloudcmd
cloudcmd # not found cmd

# 但是我们可以使用 npx，高版本 node 自带，低版本自己安装 npx。
npx cloudcmd # 可以执行，不需要自己设置 $PATH，方便快捷。
```

- **protobufjs**

> 用于转换 proto 文件为 js 文件，配合 WebSocket 使用。

```bash
npm -g install protobufjs --force
npm -g install protobufjs-cli --force

pbjs -t json-module -w es6 -o src/proto/proto.js src/proto/monitor.proto

# 项目中
npm i protobufjs

# WebSocket Protobuf 交互示例
# https://gitee.com/doubleam/ws-protobuf-demo
# -----其他介绍-----
# 前端通用模板使用
# npm i js-xcmd -g
# xcmd create-web-base [dir] [branch]
# client-main ===> c-main
# client-modules ===> c-modules
# simple-cross-platform ===> cross
```

- **其他**

```bash
npm init # 初始化项目
npm info [package] [--json/readme] # 查看/输出某个模块的最新版本信息
npm list -g [--depth 0] # 列出全局已安装模块 depth: 深度
npm cache clean [--force] # 删除安装包缓存
npm cache verify # 验证缓存数据的有效性和完整性，清理垃圾数据。
npm update # 升级当前目录下的项目的所有模块
npm update express # 升级当前目录下的项目的指定模块
npm update -g express # 升级全局安装的指定模块

npm init # 会生成一个 package.json 的文件，项目的配置信息。
--save # 表示安装到本地的项目依赖中，也就是说不管程序是上线还是开发阶段，该类库始终需要。
--save-dev # 表示安装到本地的开发依赖中，可简写为 -D，该类库仅仅在开发阶段使用，项目打包上线后不会包含该类库。
 --global # 可简写为 -g。
npm install 包名 [-g] # 表示安装的意思，可简写为 i。
npm uninstall 包名 [-g] # 卸载安装的包或者使用 rimraf 删除整个目录。
# 局部：node_modules
# 全局：`C:\Users\hxb\AppData\Roaming\npm` 还有部分在 `C:\Users\hxb\`。

xxx -h / -help / --help # 一般可以查看该命令的帮助
xxx -v / -V / --version # 一般可以查看版本

yarn init
yarn info [package] [--json/readme] # 查看/输出某个模块的最新版本信息
yarn [global] list
yarn cache list
yarn/yarn install [--force]
yarn upgrade [global] # 更新包
yarn [global] add [package] --save(-s)
yarn [global] add [package] --dev(-d)
yarn remove [package] [--force]
yarn cache dir # 缓存文件目录路径
yarn cache clean # 清理缓存
yarn cache clean --mirror # 清理全局缓存
yarn cache -h # 查看更多使用方法帮助
yarn config set cache-folder <path> # 通过指定 --cache-folder 的参数来指定缓存目录
yarn run/test xxx # 运行 xxx
```

### package.json 版本检查

- 第一步：使用 npm 命令查看已经过期的安装包

> `npm outdated`

- 第二步：安装 npm 升级插件(可不使用 -g 进行全局安装)

> `npm install -g npm-check-updates`

- 第三步：查看最新的版本命令(可略)

> `ncu`

- 第四步：升级低版本的 npm 包文件

> `ncu -u` 如报错则使用命令指定包文件 `ncu -u --packageFile package.json`

- **不过也有像 GitHub 等网站都有自动升级的 bot，也可以使用这种方式，只是合并分支很丑(0.0)。**

### scripts 配置实例

```json
"scripts": {
  "dev": "npm run start:dev",
  "pretest": "node ./tests/beforeTest.js",
  "test": "umi test",
  "test:all": "cd ./test_dir && npm install && node ./run-tests.js && rimraf ./node_modules"
}

// 栗子: npm run dev
// 可以利用 scripts 来做一些 hooks 操作，简化固定流程或操作。
// 比如有时候可能需要提交发布前自动打包并生成文档，可以使用 prepublish hook 来进行脚本执行，文档生成推荐：jsdoc+jsdoc-to-markdown/typedoc+typedoc-plugin-markdown
```

## 安装 nvm 管理 Node 版本

- [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

> 下载 nvm-setup 并安装，我们开发中经常会碰到一些 Node 的版本兼容问题，使用 nvm 可以帮助我们快速切换，极其方便。

```javascript
nvm ls  // 列出所有已安装的 node 版本

nvm ls-remote  // 列出所有远程服务器的版本（官方node version list）

nvm list  // 列出所有已安装的 node 版本

nvm list available  // 显示所有可下载的版本

nvm install stable  // 安装最新版 node

nvm install [node版本号]  // 安装指定版本 node

nvm uninstall [node版本号]  // 删除已安装的指定版本

nvm use [node版本号]  // 切换到指定版本 node

nvm current  // 当前 node 版本

nvm alias [别名] [node版本号]  // 给不同的版本号添加别名

nvm unalias [别名]  // 删除已定义的别名

nvm alias default [node版本号]  // 设置默认版本

nvm version  // 查看 nvm 版本，检查是否安装成功。
```

## 其他工具推荐

- 抓包工具：`Fiddler`、`Charles`、`WireShark`
- 浏览器：`Chrome`、`Edge`
- 服务器管理工具：`SecureCRT`、`XShell`
- 接口测试工具：`Postman`、`ApiPost`、`ApiFox`
- FTP 工具：`XFtp`、`FileZilla`
- 快速编辑工具：`Notepad++`、`Sublime`
- Windows Docker: `Docker Desktop`
- 数据库管理: `Navicat`、`DBeaver`
- 远程协作：`向日葵`、`ToDesk`
- 梯子：`Shadowsocks`、`V2Ray`、`Clash For Windows`
- Windows APP：`终端`、`WSL`、`UTools`

## 技术准备

| 名称 | 解释 |
| --- | --- |
| [JavaScript](https://www.w3school.com.cn/js/js_intro.asp)/[TypeScript](https://ts.xcatliu.com/)/[Dart](https://dart.cn/guides) | 开发基础 (HTML/CSS/JS) |
| Ajax/Axios/Fetch | 前后台交互... |
| 浏览器基础/JS 引擎基础/网络基础知识/CDN/设计模式&面向对象/RWD 规范/业界标准 | 基础知识了解学习... |
| JSON/XML/CSV/TXT/YML | 各种类型的数据格式... |
| [Canvas](https://www.runoob.com/w3cnote/html5-canvas-intro.html) | Canvas 了解学习... |
| ~~[FontAwesome](https://fontawesome.com)~~ | 图标库... |
| ~~[BootStrap](https://bootstrap.hexschool.com)~~ | 初期学习传统前端开发 UI 框架... |
| ~~[jQuery](https://github.com/jquery/jquery)~~ | 一代版本一代神... |
| [Scss/Less](https://a.biugle.cn/sass_scss_less) | CSS 预处理 |
| [NodeJS](https://nodejs.org/en/docs/) | NodeJS |
| [Vue](https://github.com/vuejs/vue) | 前端框架-记得安装浏览器 DevTools 配合使用 |
| [React](https://angular.cn/) | 前端框架-记得安装浏览器 DevTools 配合使用 |
| [Antd](https://ant.design/)/[Element](https://element.eleme.cn/) | Antd React组件库/Element Vue组件库 |
| RN、H5、小程序(Taro)、SSR、SEO... | 暂时不做... |
| [Cordova](https://https://cordova.apache.org/) | 移动端壳子 |
| [Electron](https://www.electronjs.org/) | 客户端壳子/[常见问题&范例](https://github.com/pandaoh/react-view/blob/main/electron/electron_build_desc.ts) |
| [Flutter](https://flutter.dev/) | 谷歌新一代跨平台开发框架 |
| [D3.JS](https://https://d3js.org/)/[Three.js](https://threejs.org/) | 可视化库 |
| [ECharts](https://echarts.apache.org/) | 前端好用的图表库 |
| [Nodejs](https://nodejs.org/) | Node |
| [Express](https://expressjs.com/) | 基于 Nodejs 的服务端框架 |
| [Koa](https://koajs.com/) | 基于 Nodejs 的轻量服务端框架 |
| [Webpack](https://www.webpackjs.com/)/[Rollup](https://www.rollupjs.com/)/[Vite](https://cn.vitejs.dev/) | 前端打包构建工具，顺便学 Babel/Polyfill/RunTime/CoreJS/StyleLint 等。 |
| [MarkDown](/markdown/) | 文档编写语法，文档是进步积累之本！ |
| [Docker](/dev/docker_cmd) | 应用容器管理 |
| [EsLint/Prettier/Husky](http://localhost:3000/#/code/javascript?id=eslintampprettierampeditorconfig) | 代码质量管控 |
| WebSocket/GRPC/Protobuf... | 一些协议了解... |
| UMD/ES(ESModule)/CJS(CommonJS)/IIFE/RequireJS/AMD/CMD... | 各种模块化规范了解... |
| GithubActions/Jenkins/开发流程标准(SOP)... | DevOps...CI/CD等持续集成与交付流水线了解... |
| Mock/Test/Nginx... | 模拟数据的工具、测试工具、Nginx 配置学习... |
| 性能监控/日志记录/ServerLess... | 其他知识... |
| 前端安全(XSS、CSRF、隐私数据保护、防钓鱼、点击劫持、上传文件、SQL 注入、跨域)... | 防御型代码也是安全的一种(比如：CSS 防御布局、JS 防呆、HTML 防止白屏/卡死/暴露信息等)... |
| **注意身体健康** | **珍惜眼前美好** |
| *待补充* | - |

## 快速开始

- 阅读团队前端开发文档，明确方向，统一认知。
- 熟悉团队代码规范、工程结构、搭建开发环境。
- 调试代码、了解工程构建流程、原理。
- 维护封装团队常用工具、组件、项目等，比如：`js-xxx`/`js-xhttp`/`js-xcmd` 等。
- 开发与设计项目，注意项目结构与代码检查等等。
- 对项目进行深度优化与封装解耦
- ...
