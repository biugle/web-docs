
> [!NOTE]
> 这是一篇简单的 CSS 开发规范与标准

## 定义规范

* 统一为小写字母，禁止使用大写字母，且首字符必须是字母。
* 单词间用 `-` 隔开
* 避免使用 `!important`，如果必须请加注释。
* 非必要不建议写行内样式
* 层级尽量控制在 5 层以内
* `background` 等复合属性尽量拆开，不要写在一起。
* 同部分的 css 名称，应该有统一前缀，比如：`text-primary/text-danger、user-name/user-avatar`。
* 布局要由大到小，设计结构要稳定，非必要禁止使用各种绝对定位拼接达到效果。
* 禁止使用 `import`
* 每个模块样式有注释说明，且相似/关联、伪类、伪元素样式应该放在一起，不能分散。
* 全局/通用样式、定义、`id` 样式在最前面。
* 通用命名参考

| 场景           |                            推荐                            |
| :------------- | :--------------------------------------------------------: |
| 头部           |                          `header`                          |
| 主体           |                        `main/body`                         |
| 底部           |                          `footer`                          |
| 侧栏           |                      `sidebar/aside`                       |
| 布局           |                          `layout`                          |
| 容器           |                  `container/box/wrapper`                   |
| 内容           |                         `content`                          |
| 标题           |                          `title`                           |
| 导航           |                           `nav`                            |
| 子             |                      `sub/child/item`                      |
| 菜单           |                           `menu`                           |
| 图标           |                           `logo`                           |
| 图片           |                           `img`                            |
| 文档           |                           `doc`                            |
| 信息           |                           `info`                           |
| 卡片           |                           `card`                           |
| 列表           |                           `list`                           |
| 左边           |                           `left`                           |
| 右边           |                          `right`                           |
| 区域           |                       `area/section`                       |
| 名称/昵称      |                        `name/nick`                         |
| 头像           |                          `avatar`                          |
| 风险等级       | `primary/success/danger/info/warning/light/dark/secondary` |
| 按钮           |                           `btn`                            |
| 禁用/启用/只读 |                 `disabled/active/readonly`                 |
| 链接/条        |                         `link/bar`                         |
| 群组           |                          `group`                           |
| 隐藏/显示      |                        `hide/show`                         |
| 提示/气泡      |                     `tooltip/popover`                      |
