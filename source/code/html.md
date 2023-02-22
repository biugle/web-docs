
> [!ATTENTION]
> 这是一篇简单的 HTML 开发规范与标准

## 代码编写

### 规则

* 禁止在 HTML 使用 `<style>`、`<script>`，非特殊情况一律使用外部文件引用方式引用 CSS、JavaScript 文件。
* `<style>` 应该在 `head` 的最后面，`<script>` 应该在 `body` 的最后面，非特殊情况引入的 `<script>` 不能中途影响页面加载。
* 注意 html 基础语法规则，优先级规则，不要出现类似于：`div` 写在 `body` 外面、`span 包 div` 等等这些情况。
* 外部链接禁止写死协议头，直接使用 `//cdn...`。
* HTML 标签需成双成对，有头有尾，且统一为小写字母。
  * 区块标签：`<tag></tag>`
  * 单标签：`<tag />`
* 禁止使用已被 HTML 舍弃的旧标签、属性。

### 废弃标签

```xml
<!-- html tag -->
<center>
<font>
<basefont>
<s>
<strike>
<u>
<listing>
<plaintext>
<xmp>
<!-- html attribute -->
align
bgcolor
color
```

### 模板

```html
<!-- 文档声明 -->
<!DOCTYPE html>
<html>
  <head lang="语言">
    <!-- 网页标题 -->
    <title>标题</title>
    <!-- 设置编码 -->
    <meta charset="UTF-8">
    <!-- 设备缩放比例 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 网页描述 -->
    <meta name="description" content="描述" />
    <!-- 网页图标 -->
    <link rel="shortcut icon" href="url..." >
    <!-- style 标签推荐位置(特殊情况除外) -->
  </head>
  <body>
    ...content...
    HTML5 新增语义元素
    <header>...</header>
    <nav>...</nav>
    <section>...</section>
    <article>...</article>
    <aside>...</aside>
    <footer>...</footer>
    <!-- script 标签推荐位置(特殊情况除外) -->
  </body>
</html>
```
