?> 这是一个 MarkDown 教学

## 标题

<!-- tabs:start -->

#### **效果**

<!-- markdownlint-disable-next-line single-title -->
# 标题 1 {docsify-ignore}

## 标题 2 {docsify-ignore}

### 标题 3 {docsify-ignore}

#### 标题 4 {docsify-ignore}

##### 标题 5 {docsify-ignore}

###### 标题 6 {docsify-ignore}

#### **Markdown**

```markdown
# 标题 1

## 标题 2

### 标题 3

#### 标题 4

##### 标题 5

###### 标题 6
```

<!-- tabs:end -->

## Text

<!-- tabs:start -->

#### **效果**

Body text

**Bold text**

*Italic text*

~~Strikethrough~~

<mark>Marked text</mark>

<pre>Preformatted text</pre>

<small>Small Text</small>

This is <sub>subscript</sub>

This is <sup>superscript</sup>

#### **Markdown**

```markdown
Body text

**Bold text**

*Italic text*

~~Strikethrough~~

<mark>Marked text</mark>

<pre>Preformatted text</pre>

<small>Small Text</small>

This is <sub>subscript</sub>

This is <sup>superscript</sup>
```

<!-- tabs:end -->

## Links

<!-- tabs:start -->

#### **效果**

[Inline link](https://google.com)

[Inline link with title](https://google.com "Google")

[Reference link by name][link1]

[Reference link by number][1]

[Reference link by self]

[link1]: https://google.com
[1]: https://google.com
[Reference link by self]: https://google.com

#### **Markdown**

```markdown
[Inline link](https://google.com)

[Inline link with title](https://google.com "Google")

[Reference link by name][link1]

[Reference link by number][1]

[Reference link by self]

[link1]: https://google.com
[1]: https://google.com
[Reference link by self]: https://google.com
```

<!-- tabs:end -->

## Lists

<!-- tabs:start -->

#### **效果**

**Ordered Lists**

1. Ordered 1
1. Ordered 2
   1. Ordered 2a
   1. Ordered 2b
   1. Ordered 2c
1. Ordered 3

**Unordered Lists**

- Unordered 1
- Unordered 2
  - Unordered 2a
  - Unordered 2b
  - Unordered 2c
- Unordered 3

**Task Lists**

- [x] Task 1
- [ ] Task 2
  - [x] Subtask A
  - [ ] Subtask B
- [ ] Task 3

#### **Markdown**

```markdown
**Ordered Lists**

1. Ordered 1
1. Ordered 2
   1. Ordered 2a
   1. Ordered 2b
   1. Ordered 2c
1. Ordered 3

**Unordered Lists**

- Unordered 1
- Unordered 2
  - Unordered 2a
  - Unordered 2b
  - Unordered 2c
- Unordered 3

**Task Lists**

- [x] Task 1
- [ ] Task 2
  - [x] Subtask A
  - [ ] Subtask B
- [ ] Task 3
```

<!-- tabs:end -->

## Blockquotes

<!-- tabs:start -->

#### **效果**

> 横空出世，莽昆仑，阅尽人间春色。  
> 飞起玉龙三百万，搅得周天寒彻。
>
> `- 教员`

#### **Markdown**

```markdown
> 横空出世，莽昆仑，阅尽人间春色。  
> 飞起玉龙三百万，搅得周天寒彻。
>
> `- 教员`
```

<!-- tabs:end -->

## Code

<!-- tabs:start -->

#### **效果**

This is `inline code`

```javascript
const add = (num1, num2) => num1 + num2;
const total = add(1, 2);

console.log(total); // 3
```

```html
<body>
  <p>Hello</p>
</body>
```

#### **Markdown**

````markdown
This is `inline code`

```javascript
const add = (num1, num2) => num1 + num2;
const total = add(1, 2);

console.log(total); // 3
```

```html
<body>
  <p>Hello</p>
</body>
```
````

<!-- tabs:end -->

## Notices

<!-- tabs:start -->

#### **效果**

!> **Important** 重要提醒

?> **Tip** 提示建议

#### **Markdown**

```markdown
!> **Important** 重要提醒

?> **Tip** 提示建议
```

<!-- tabs:end -->

## Tabs

<!-- tabs:start -->

#### **效果**

<!-- tabs:start -->

#### **English**

Hello!

#### **French**

Bonjour!

#### **Italian**

Ciao!

<!-- tabs:end -->

### **MarkDown**

```markdown
<!-- tabs:start -->

#### **English**

Hello!

#### **French**

Bonjour!

#### **Italian**

Ciao!

<!-- tabs:end -->
```

<!-- tabs:end -->

## Tables

<!-- tabs:start -->

#### **效果**

| 表头A    |  表头B   |    表头C |
| :------- | :------: | -------: |
| 内容居左 | 内容居中 | 内容居右 |
| 内容居左 | 内容居中 | 内容居右 |

#### **Markdown**

```markdown
| 表头A    |  表头B   |    表头C |
| :------- | :------: | -------: |
| 内容居左 | 内容居中 | 内容居右 |
| 内容居左 | 内容居中 | 内容居右 |
```

<!-- tabs:end -->

## Keyboard

<!-- tabs:start -->

#### **效果**

<kbd>&uarr;</kbd> Arrow Up

<kbd>&darr;</kbd> Arrow Down

<kbd>&larr;</kbd> Arrow Left

<kbd>&rarr;</kbd> Arrow Right

<kbd>&#8682;</kbd> Caps Lock

<kbd>&#8984;</kbd> Command

#### **Markdown**

```markdown
<kbd>&uarr;</kbd> Arrow Up

<kbd>&darr;</kbd> Arrow Down

<kbd>&larr;</kbd> Arrow Left

<kbd>&rarr;</kbd> Arrow Right

<kbd>&#8682;</kbd> Caps Lock

<kbd>&#8984;</kbd> Command
```

<!-- tabs:end -->

## Horizontal Rule

<!-- tabs:start -->

#### **效果**

---

#### **Markdown**

```markdown
---
```

<!-- tabs:end -->

## Images

<!-- tabs:start -->

#### **效果**

Inline-style

![alt text](http://a.biugle.cn/images/xixi.png "My Blog")

Reference-style

![alt text][logo]

[logo]:http://a.biugle.cn/images/xixi.jpg "My Blog"

#### **Markdown**

```markdown
**Inline**

![alt text](http://a.biugle.cn/images/xixi.png "My Blog")

**Reference**

![alt text][logo]

[logo]:http://a.biugle.cn/images/xixi.jpg "My Blog"
```

<!-- tabs:end -->

## Emoji

A complete list is available here ===> [Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/)

<!-- tabs:start -->

#### **效果**

:bowtie:
:smile:
:laughing:
:blush:
:smiley:
:relaxed:
:smirk:
:heart_eyes:
:kissing_heart:
:kissing_closed_eyes:
:flushed:
:relieved:
:satisfied:
:grin:
:wink:
:stuck_out_tongue_winking_eye:
:stuck_out_tongue_closed_eyes:
:grinning:
:kissing:
:kissing_smiling_eyes:
:stuck_out_tongue:
:sleeping:
:worried:
:frowning:
:anguished:
:open_mouth:
:grimacing:
:confused:
:hushed:
:expressionless:
:unamused:
:sweat_smile:
:sweat:
:disappointed_relieved:
:weary:
:pensive:
:disappointed:
:confounded:
:fearful:
:cold_sweat:
:persevere:
:cry:
:sob:
:joy:
:astonished:
:scream:
:neckbeard:
:tired_face:
:angry:
:rage:
:triumph:
:sleepy:
:yum:
:mask:
:sunglasses:
:dizzy_face:
:imp:
:smiling_imp:
:neutral_face:
:no_mouth:
:innocent:
:alien:
:yellow_heart:
:blue_heart:
:purple_heart:
:heart:
:green_heart:
:broken_heart:
:heartbeat:
:heartpulse:
:two_hearts:
:revolving_hearts:
:cupid:
:sparkling_heart:
:sparkles:
:star:
:star2:

#### **Markdown**

```markdown
:bowtie:
:smile:
:laughing:
:blush:
:smiley:
:relaxed:
:smirk:
:heart_eyes:
:kissing_heart:
:kissing_closed_eyes:
:flushed:
:relieved:
:satisfied:
:grin:
:wink:
:stuck_out_tongue_winking_eye:
:stuck_out_tongue_closed_eyes:
:grinning:
:kissing:
:kissing_smiling_eyes:
:stuck_out_tongue:
:sleeping:
:worried:
:frowning:
:anguished:
:open_mouth:
:grimacing:
:confused:
:hushed:
:expressionless:
:unamused:
:sweat_smile:
:sweat:
:disappointed_relieved:
:weary:
:pensive:
:disappointed:
:confounded:
:fearful:
:cold_sweat:
:persevere:
:cry:
:sob:
:joy:
:astonished:
:scream:
:neckbeard:
:tired_face:
:angry:
:rage:
:triumph:
:sleepy:
:yum:
:mask:
:sunglasses:
:dizzy_face:
:imp:
:smiling_imp:
:neutral_face:
:no_mouth:
:innocent:
:alien:
:yellow_heart:
:blue_heart:
:purple_heart:
:heart:
:green_heart:
:broken_heart:
:heartbeat:
:heartpulse:
:two_hearts:
:revolving_hearts:
:cupid:
:sparkling_heart:
:sparkles:
:star:
:star2:
```

<!-- tabs:end -->

## Alerts

<!-- tabs:start -->

#### **效果**

> [!NOTE]
> An alert of type 'note' using global style 'callout'.

> [!TIP]
> An alert of type 'tip' using global style 'callout'.

> [!WARNING]
> An alert of type 'warning' using global style 'callout'.

> [!ATTENTION]
> An alert of type 'attention' using global style 'callout'.

#### **Markdown**

```markdown
> [!NOTE]
> An alert of type 'note' using global style 'callout'.

> [!TIP]
> An alert of type 'tip' using global style 'callout'.

> [!WARNING]
> An alert of type 'warning' using global style 'callout'.

> [!ATTENTION]
> An alert of type 'attention' using global style 'callout'.
```

<!-- tabs:end -->

## Summary

<!-- tabs:start -->

#### **效果**

<details>

<summary>我的列表(点击打开/折叠)</summary>

- 123
- abc

</details>

#### **Markdown**

```markdown
<details>

<summary>我的列表(点击打开/折叠)</summary>

- 123
- abc

</details>
```

<!-- tabs:end -->
