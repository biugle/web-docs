## 准则

* `Master/Main/Prod` 的版本必须是最稳定的版本。
* 每次 Commit 信息应该如实填写，不可模棱两可，且一个 Commit 应该为一个功能的修改。
* 禁止上传 IDE 的配置文件或开发数据。
* 开始工作前应先进行 `Fetch/Pull` 同步远程代码，并解决本地-远程冲突，本地处理 **Merge 不要提交到远端（Git 默认设置-Pull 会合并本地并提交到远端）**。
* `Git-Flow` 工作流可以不使用，但是要学习了解其思想。

## 分支 (Branch)

* 应以此分支主要目的命名 (修复BUG、新增某特定功能)。
* 保留分支至少包含两个分支，分别代表开发与生产环境(Protect)，最好有测试分支。
* 合并后的分支应删除

## Commit

### 基本原则

* Commit 前应确认所提交文件及修改确实无误-二次检查

### 基本样板

* Commit Message 须遵循以下规范<span style="color: red;">(若有 issue / pull request 一律需附上编号)</span>：  

> [!ATTENTION]
> `{type}: {subject (并在50个字内)} (#{issue/pull request})`  
> *// 使用英文冒号+一个空格、每个部分需一个空格分开*  
> 栗子：**Fix: 修复某某页面滚动条异常置顶的 bug (#1)**

### 详细规则

|Type|类型|范例|说明|
|:--:|:--|:--|:--|
| 调整 | Feat | `Feat: {变动或新增/优化内容} (#issueID)` | 调整功能，需叙述现况(before)、调整后(after)。 |
| 新增 | Add | `Add: {单纯新增内容} (#issueID)` | 单纯新增功能 |
| 删除 | Remove | `Remove: {删除内容} (#issueID)` | 删除功能，须说明删除原因。 |
| 修正 | Fix | `Fix: {修复内容} (#issueID)` | 修复已知的 BUG |
| 重写 | Refactor | `Refactor: {重写功能名称} (#issueID)` | 不是新增功能，也不是修补 bug 的程序代码变动，单纯重写某个功能的程序代码，并不影响功能结果。 |
| 优化 | Perf | `Perf: {改善内容} (#issueID)` | 改善程序代码的效能 |
| 退版 | Revert | `Revert: {恢复的版本 commit message+原因} (#issueID)` | 恢复某一个 commit 的版本 |
| 格式 | Style | `Style: {修改内容} (#issueID)` | 不影响代码含义的更改(例如空格、格式化、少了分号等等) |
| 文档 | Docs | `Docs: {调整内容} (#issueID)` | 只是文档的更改 |
| 工具 | Chore | `Chore: {工具内容/功能} (#issueID)` | 对构建或者辅助工具的更改 |
| 测试 | Test | `Test: {测试功能/代码的调整} (#issueID)` | 添加或修正测试 |

## Tags

### 命名原则

* 小变动升小版号 1.0.0=>1.0.1
* 较大调整升中版号 1.0.0=>1.1.0
* 重大变动或架构调整升大版号 1.0.0=>2.0.0

### 删除原则

* 版号过多时可删除非重要版号
* 应至少保留每个中版号的最新一版
* 应至少保留最近更新的十个版号

## 其他

* [Git 常用指令](/git/tutorial)
* 推荐使用 SourceTree 提高协作开发效率，可以建立一套开发体系，规范团队协作，规范开发、测试流程，也可以巧妙使用 GitFlow 工作流、HotFix、CherryPick 等。
* [SourceTree 教学](https://a.biugle.cn/sourcetreessh)
