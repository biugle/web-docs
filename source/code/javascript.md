
> [!TIP]
> 这是一篇简单的 `通用/JavaScript` 开发规范与标准

## 通用

* **技术选型需注意：**
  * 不要引入过多无用复杂的依赖
  * 尽量选择基础应用，避免使用二次创作的项目。
  * 选择流行度较高，时效性好、近期的插件/项目，不要选择老项目、长期不维护、文档不全的。
* 每个函数应该注释，注释应包含函数功能说明、变量说明。
* 不必要的代码不要写，也禁止放到注释里面。
* `if-else` 的 `{}` 严禁省略。
* `{}` 起始一律跟在前一个功能的最后，禁止换行。
* 非特殊情况，代码最长不能超过一个屏幕。
* 一行最多 **120** 个字符，单个文件不要超过 **800** 行，一个方法/函数最好不要超过**一个屏幕**或 **100** 行。
* 关键字/括号/冒号与值前后要加空格
* 不允许连续多行空行
* 必须带有结束 `;`
* 不要使用 `debugger`
* 不要对变量使用 `delete` 操作
* 同一模块有多个导入时`一次性`写完
* 不要使用 `eval()`
* 禁止省略箭头函数 (Arrow function) 的**括号**，单行代码时除外：大括号与 `return` 可以省略，小括号不可省略。
* 禁止使用 HTML 字符串，一律使用 Dom 产生 HTML。
* 尽量使用模版字符串，纯字符串建议使用**单引号**。
* 避免 `do...while/while` 等循环
* 不要留定义无用的代码、变量、文件
* 变量定义明确作用域，非特殊情况禁止使用 `var`。
* 嵌套超过`三层`或者 `3` 个以上的 else 要思考去优化，比如：条件简化、先 `return` 等。
* `import` 在最前面，`export` 在最后面，特殊情况除外。
* 不要刻意简化代码，要注重**可读性**，没有用到的参数不要写，比如：`_ => {}` 应该改成 `() => {}`。
* ...

?> 正确写法

```javascript
import { a, b, c, d } from 'js-xxx';

function test() {
  // do something
  if (a === b) {
    // do something
  }
  if (c === d) {
    return false;
  }
}
```

!> 错误写法

```javascript
import {a,b} from 'js-xxx'; // 应该有空格
import { c, d } from 'js-xxx'; // 多个导入一次性写完


// 保留一个空行就 ok
function test()
{ // 括号位置不对
  if (a === b)
  {
    //do something
    // 注释符后面需要空格
  }
  if(c === d) return false // 没有空格、括号、分号
}
```

* 任何代码应该以 2 个 space 为一个阶层做好排版、不可使用 tab。
* 函数声明时需在函数上方加上函数注释，注释应包含函数说明、变量内容(变量类型、变量英文名称、变量说明)、返回值内容 (返回值类型、返回值说明)。
* 类 (Class)
  * 一个类 (Class) 的声明只能存在一个文件。
  * 类 (Class) 的声明文件，文件名必须为类名。
* 其他
  * 链接本地任何其他资源 (图片、文件、网站) 皆使用相对路径，禁止使用绝对路径，非本地资源除外。

## 命名

### 规则

* 命名应根据内容做有意义的命名，让后续维护人员可以一目了然!
* 即使不会发生错误，程序代码英文大小写也需明确区分。
* 具体标准参考
   1. 绝对不可使用没有意义的命名。
   2. 变量和函数命名最好是（动词+名词：setName、getId 或者 set_name、get_id 等等）。
   3. 资源命名最好是（使用下划线区分：`nav_logo.png` 等等)。
   4. css id、class 命名最好是（名词短语，以 `-` 隔开：user-id 等等）。
   5. 常量命名必须使用大写字母
   6. DOM 节点变量或其他实例变量，使用 `$` 前缀，比如：**$div、$http**。

### 语意

| 类型                      | 命名规则                                 | 说明                                           |
| :------------------------ | :--------------------------------------- | :--------------------------------------------- |
| 属性 (Attribute/Property) | 名词<br/>user_name、userName             |                                                |
| 方法 (Method/Function)    | 动词+名词<br/>getUserName、get_user_name | 常见的动词有：get、set、update、delete、remove |

> 一般驼峰命名用于面向对象中，函数式编程使用下划线区分，另外类名等首字母需大写。

### 动词参考

|     类型      | 面向对象中动词使用       | 数据库 | METHOD(restful) |
| :-----------: | :----------------------- | :----- | :-------------- |
| 增-**C**REATE | **add**/create           | INSERT | GET             |
|  查-**R**EAD  | **get**/list             | SELECT | POST            |
| 改-**U**PDATE | **set**/replace/edit/add | UPDATE | PUT/PATCH       |
| 删-**D**ELETE | **remove**/delete        | DELETE | DELETE          |

## 字母与分隔

<table><tbody><tr><th>语言</th><th>变量 (Variable/Parameter/Argument)</th><th>常量 (Constant)</th><th>面向对象 - 类名 (Class Name)</th><th>面向对象 - 成员 (mebmer)</th></tr><tr><td>HTML、CSS</td><td>全部小写，不同单字以「-」分隔 <br> user-id</td><td colspan="3"></td></tr><tr><td>JavaScript</td><td>首字小写，不同单字「首字以大写」分隔 <br> userId</td><td rowspan="2">全部大写，不同单字以「_」分隔<br>MAX_COUNT</td><td rowspan="2">首字大写，不同单字「首字以大写」分隔<br>一个文件放一个 Class<br>文件名即为 Class Name<br>User</td><td rowspan="2">公有 (public)&nbsp;: 首字小写，不同单字「首字以大写」分隔 <br> name, getName<br>私有 (private): _公有命名规则<br> _name、_getName</td></tr><tr><td>PHP</td><td>全部小写，不同单字以「_」分隔 <br> user_id</td></tr><tr><td>SQL</td><td>由使用者定义的：表名、字段名<br>全部小写，不同单字以「_」分隔</td><td>SQL语法、函数 <br> 全部大写 <br> SELECT、INSERT INTO</td><td colspan="2"> </td></tr></tbody></table>

## 注释

> JavaScript 注释应该遵循 JSDoc 的标准编写

### 全局变量 (Global)

```javascript
/* global $b, Biugle */
```

### 常量 (Constant)

```javascript
/**
 * 常量说明
 * @type {常量类型}
 */

 /**
 * 使用者ID
 * @type {String}
 */
var USER_NAME = 'Hello';
```

### 函数、方法 (Function/Method)

```javascript
/**
 * 函数用途说明
 * @param {自变量类型} 自变量名称 自变量说明
 * @param {自变量类型} [选择性自变量名称] 自变量说明
 * @param {自变量类型} [选择性自变量名称=自变量默认值] 自变量说明
 * @returns {回传值类型} 回传值说明
 */
```

* **Example**

```javascript
/**
 * 取得使用者
 * @param {Int} userId 使用者ID
 * @param {Object} [options] 其他选项
 * @param {String} [options.query='a'] 查询关键词 默认为 a
 * @returns {Object} 用户数据
 */
var getUser = function(userId, options){
  // do something
  return user;
};
```

## EsLint&Prettier&EditorConfig

### 说明

* 必须安装 `VsCode` 的 `EsLint` 与 `Prettier` 插件，用于统一代码格式化风格。
* 项目必须引入 `EsLint` 与 `Prettier`，统一管理。
* 必须有 `.editorconfig` 文件

```bash
npm i eslint -D
npm i prettier eslint-config-prettier eslint-plugin-prettier -D # 注意 eslint-plugin-prettier 的版本可能不兼容导致报错，可能需要手动修改。
npm i eslint-plugin-import eslint-plugin-spellcheck eslint-plugin-zob -D

npx eslint --init # 初始化对应的项目 eslint 基础模板

# 提交前 hook，可以引入 husky。
eslint ./ --fix --ext .ts,.tsx,.js,.jsx,.vue # eslint 执行修复全局代码
prettier --write ./**/*.{ts,tsx,js,jsx,vue,html,css,scss,less} # prettier 执行全局格式化
```

### 参考配置

* **EsLint**

```javascript
// .eslintrc.js
// http://www.verydoc.net/eslint/00003312.html
module.exports = {
  // ...
  extends: ['prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['prettier', '@typescript-eslint', 'spellcheck', 'import', 'zob'],
  rules: {
    'prettier/prettier': 'error', // prettier 相关的规则必须遵守
    '@typescript-eslint/ban-ts-comment': 'off', // 允许使用 ts 注释
    'no-useless-escape': 'warn', // 非必要的转义符号，允许但提示。
    'no-undef': ['error'], // 禁止未声明变量的引用
    'spaced-comment': ['error', 'always'], // 注释开始后，此规则将强制间距的一致性 // 或 /*。
    'space-before-blocks': ['error', 'always'], // 块必须至少有一个先前的空格
    'no-multiple-empty-lines': ['error', { max: 5 }], // 最大空行数量
    'no-mixed-spaces-and-tabs': ['error', false], // 不允许使用混合空格和制表符进行缩进
    'comma-dangle': ['error', 'only-multiline'], // 多行时才可以使用尾随逗号
    indent: ['error', 2, { SwitchCase: 1 }], // 强制执行一致的缩进样式
    'linebreak-style': ['error', 'windows'], // 强制执行统一的行结尾 CRLF
    quotes: ['error', 'single'], // 单引号
    semi: ['error', 'always'], // 在语句结尾需要分号
    // 'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }], // @typescript-eslint/no-unused-vars
    '@typescript-eslint/no-explicit-any': ['off'], // 允许使用 any 类型，但是我们不要滥用，允许使用是为了不给开发设限，但是该定义的还是要做的。
    'no-irregular-whitespace': [
      'error',
      { skipStrings: true, skipComments: true, skipRegExps: true, skipTemplates: true },
    ], // 禁止使用无效或不规则的空格，字符串等特殊情况跳过。
    'no-multi-spaces': ['error', { ignoreEOLComments: true }], // 禁止在某些表达式，函数周围使用多个空格，行尾注释除外。
    'no-trailing-spaces': ['error', { skipBlankLines: false }], // 禁止行尾添加尾随空白，空行也是一样。
    'brace-style': ['error', '1tbs', { allowSingleLine: false }], // 强制执行一个真正的大括号风格，括号必须跟在块后。
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }], // 对象 key 与冒号之间不允许使用空格，值与冒号间必须使用空格。
    'object-curly-spacing': ['error', 'always'], // 需要大括号内的空格，比如解构赋值，导入导出。
    'array-bracket-spacing': ['error', 'never'], // 数组括号内强制实现一致的间距空格
    'max-lines': ['error', 800], // 文件限制行数最大 800 行
    'max-statements': ['error', 100], // 一个方法限制行数最大 100 行
    'spellcheck/spell-checker': [
      // 拼写检查警告
      'warn',
      {
        comments: true, // 注释也要检查
        strings: true,
        identifiers: true,
        lang: 'en_US',
        skipWords: [
          // npm i modules-words // 常用词库
          'javascript',
          'debounce',
          'pathname',
          'minify',
          'charset',
          'unmount',
          'poweroff',
          'resize',
          'linux',
          'darwin',
          'resizable',
          'renderer',
          'unordered',
          'dropdown',
          'checkbox',
          'tooltip',
          'namespaced',
          'echarts',
          'onopen',
          'formatter',
          'xlocation',
          'xcall',
          'utils',
          'cordova',
          'ionics',
          'lodash',
          'splashscreen',
          'uglify',
          'jsonp',
          'async',
          'bcrypt',
          'werbs',
          'navbar',
          'popover',
          'substr',
          'zindex',
          'viewport',
          'validator',
          'webserver',
          'whitelist',
          'runtime',
          'proto',
          'popup',
          'polyfill',
          'preload',
          'mixin',
          'middleware',
          'lifecycle',
          'linter',
          'hostname',
          'dirname',
          'autocomplete',
          'sourcemap',
          'dicts',
          'undef',
          'asyncfunction',
          'xxxxx',
          'keydown',
          'keyup',
          'keypress',
          'webkit',
          'uint8',
          'radix',
          'storage',
          'favicon',
          'compat',
          'keyframes',
          'padlen',
          'tring',
          'xhtml',
          'xmind',
          'decrypt',
          'decrypted',
          'multipart',
          'contextmenu',
          'loadend',
          'callee',
          'slugify',
          'ciphertext',
          'urlencoded',
          'cancelable',
          'ascii',
          'unicode',
          'rollup',
          'axios',
          'redux',
          'unlink',
          'macos',
          'submenu',
        ],
        skipIfMatch: [
          // http url
          'http://[^s]*',
          // Auxiliary werbs
          // see: https://github.com/aotaduy/eslint-plugin-spellcheck/issues/7
          "(\\s|^)\\w+'t(\\s|$)",
          // ordinals
          // https://github.com/aotaduy/eslint-plugin-spellcheck/issues/8
          '(\\s|^|\\w+)\\d+(st|nd|rd|th)(\\s|[A-Z][a-zA-Z]+|$)',
          // pre/post prefixes both in kebab case and camel case
          '(\\s|^)(pre|post)([-\\w]|[A-Z])[a-zA-Z]+(\\s|$)',
          // xml tags
          '<(?:/)?[\\w-]+>',
          // cryptographic octal hashes
          '^[0-9a-f]{5,999}$',
          // hex colors
          '^#[0-9a-f]{3,6}$',
          // For MIME Types
          '^[-\\w]+/[-\\w\\.]+$'
        ],
        skipWordIfMatch: [
          '^foobar.*$' // words that begin with foobar will not be checked
        ],
        minLength: 5 // >=5 个字符以上才监测
      }
    ],
    'import/first': ['error'], // 导入必须在最前面
    'import/exports-last': ['error'], // 导出必须在最后面
    'import/newline-after-import': ['error'], // 导入后必须留出空行
    'import/no-duplicates': ['error'], // 同一个文件的导入必须写在一行
    'import/order': ['error', { 'newlines-between': 'never' }], // 导入排序
    'zob/comment': 'error' // 中英文空格间距 搜索中找英文符号正则 ([\u4e00-\u9fa5]\s*[!@#$%^&*_+=;:'"{\[\]},.\/\\`\(\)])
  },
  // ...
};
// 若特殊文件，比如压缩文件，可以使用 .eslintignore 忽略。
```

* **Prettier**

```javascript
// .prettierrc.js
module.exports = {
  printWidth: 120, // 最大行宽
  semi: true, // 末尾是否要分号
  singleQuote: true, // 单引号
  bracketSpacing: true, // 在对象括号之间增加空格
  bracketSameLine: false, // 将多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行。
  arrowParens: 'always', // 必须包含箭头函数的括号，而不是 avoid。
  insertPragma: false, // 是否插入已经被格式化的标识
  tabWidth: 2, // 缩进空格数
  useTabs: false, // 是否使用 tab 缩进
  endOfLine: 'crlf', // 行尾换行符
};
// 若特殊文件，比如压缩文件，可以使用 .prettierignore 忽略。
```

* **EditorConfig**

```bash
# 编辑器配置
# .editorconfig
# http://editorconfig.org
root = true # 是否是顶级配置文件，设置为 true 的时候才会停止搜索 .editorconfig 文件，一般我们项目只设置一个。

[*]
charset = utf-8 # 编码格式
end_of_line = crlf # 换行符类型
indent_size = 2 # 缩进大小
indent_style = space # 缩进方式
insert_final_newline = true # 是否让文件以空行结束
max_line_length = 120 # 最大行宽
trim_trailing_whitespace = true # 是否删除行尾空格

[*.md]
max_line_length = 120
```

* **常见忽略目录/文件**

```txt
.DS_Store/**
.idea/**
.vscode/**
**/node_modules/**
**/dist/**
**/test/**
**/*.svg
**/*.toml
**/*.xml
**/**.min.*
// ...
```

```txt
/*
!/src/ # 如果有排除项，必须写 /*，同时排除项要写在通配符后面。

!*.md
```
