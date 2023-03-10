
---

> [!WARNING]
> 本篇主要说明一些常见的约定俗成项

* **文档与代码必须格式化并二次检查后才能提交**
* <kbd>Tab</kbd> 统一为**两个空格**
* 文件内容编码均统一为 `UTF-8`
* 代码必须写必要的**注释**，且注释符号前/后均需空格，比如：`// 注释`、`/* 注释 */`、`# 注释`、`* 注释`等。
* 文档/文件夹命名一般使用**小写字母**，间隔符允许使用 `-`、`_`、`.`，非特殊情况禁止使用**大写字母**或**驼峰命名**。
* **禁止**在项目中**保留**一些注释**无用的代码与弃用/未使用的文件**
* 非必要不要使用**拼音命名**，不要中英文字符**混用**。
* 文档编写需要保留**必要**的空格与换行，不要留**多余空白空格或连续多个空行**，**便于阅读**。
* **避免出现错别字，单词拼写错误。**
* 英文数字或字符需要与中文字符**隔一个空格**
* 一行最多 **120** 个字符，单个文件不要超过 **800** 行，一个方法/函数最好不要超过**一个屏幕**或 **100** 行。
* 命名必须有**实际意义**，禁止出现奇怪或者含糊不清的命名，哪怕引入的一个图标等资源，都必须通过命名体现其具体作用。
* 同项目功能操作用词选择时，需保持**统一/通用**，比如 `Search` 统一使用搜索或者查询，不要混用。
* [命名/通用名词参考](/rules/name)
* 一定要注意排版，排版必须**整洁、突出重点**。且内容**无重复、多余**的部分，也不能出现与文档**无关**的内容。
* 示例代码一定要**经过验证**，且同时要保证其遵循开发规范与**代码标准**，不要出现晦涩难懂的代码或者无意义的范例。
* 写完文档后必须**预览检查**，确保文字、排版、内容、范例、格式、标点均无误方可提交。
* 目录结构设计需**简单明了**，避免**多层结构或结构重复**，比如层层嵌套或者多个功能相似的目录。
* 与项目无关的文件非必要**禁止提交到远端仓库**，比如打包后的文件、编辑器设置文件、临时图片等。
* `package.json` 中，**未使用到的插件**需删除掉，**未用到的脚本命令**也需删除，不要误导后面的开发者。
* 项目必须有 **README.md** 文件，且至少包含**项目描述、如何运行、目录介绍、备注（问题、风险...）**。
* 使用 Git 时，**禁止上传** IDE 的配置文件或开发数据，已经合并的分支必须**删除**。
* 禁止写**死代码**，能抽离通用的需抽离，能写配置文件的需写配置文件，比如一些通用的**网址、名称、关键字等**，可以使用全局变量，方便统一修改维护。

> 本约定持续更新维护...
