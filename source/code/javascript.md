
> [!TIP]
> 这是一篇简单的 `通用/JavaScript` 开发规范与标准

## 通用

* 每个函数应该注释，注释应包含函数功能说明、变量说明。
* 不必要的代码不要写，也禁止放到注释里面。
* `if-else` 的 `{}` 严禁省略。
* `{}` 起始一律跟在前一个功能的最后，禁止换行。
* 非特殊情况，代码最长不能超过一个屏幕。
* 关键字/括号/冒号与值前后要加空格
* 不允许连续多行空行
* 必须带有结束 `;`
* 不要使用 `debugger`
* 不要对变量使用 `delete` 操作
* 同一模块有多个导入时`一次性`写完
* 不要使用 `eval()`
* 禁止省略箭头函数 (Arrow function) 的括号
* 禁止使用 HTML 字符串，一律使用 Dom 产生 HTML。
* 尽量使用模版字符串，纯字符串建议使用**单引号**。
* 避免 `do...while/while` 等循环
* 不要留定义无用的代码、变量、文件
* 变量定义明确作用域，非特殊情况禁止使用 `var`。
* 嵌套超过`三层`或者 `3` 个以上的 else 要思考去优化，比如：条件简化、先 `return` 等。
* `import` 在最前面，`export` 在最后面，特殊情况除外。
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
