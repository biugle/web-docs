
> [!WARNING]
> 实施 CMD 参考

| `msinfo32` | 查看系统设备相关信息 |
| --- | --- |
| `powercfg /batteryreport` | 电池健康 |
| `shell:startup` | 添加开机启动项 |
| `ipconfig /flushdns` | 刷新dns |
| `netsh winsock reset` | 网络重置 |
| `ipconfig (?/all)` | ip信息 |
| `telnet [ip] [port]` | 端口测试 |
| `ping [ip] (?-t)` | ip测试 |
| `nslookup 网站域名` | 检查网站信息与ip |
| `shutdown -s(-a: 取消自动关机;-r: 自动重启;-h: 休眠;-l: 注销;) -t [time]` | 定时关机等 |
| `logoff` | 注销 |
| `chcp 936` | 默认中文 |
| `calc` | 计算器 |
| `control` | 控制面板 |
| `color (0-F背景色) (0-F前景色)` | 设置颜色 |
| `cleanmgr` | 打开磁盘清理工具 |
| `mstsc` | 远程桌面连接 |
| `osk` | 打开屏幕键盘 |
| `regedit.exe`/`regedt32` | 注册表编辑器 |
| `snippingtool` | 截图工具 |
| `wf.msc` | 高级防火墙 |
| `cleanmgr` | 垃圾整理 |
| `chkdsk.exe` | 磁盘检查 |
| `devmgmt.msc` | 设备管理器 |
| `echo on或off` | 打开或关闭echo |
| `echo 信息` | 在屏幕上显示出信息 |
| `echo 信息 >> pass.txt` | 将"信息"保存到pass.txt文件中 |
| `***a &#124;  导出位置` | 比方说“&#124; clip”是导出到剪贴板，“&#124; xxx.txt”是导出到xxx.txt。总之，你需要什么地方用，就放到哪儿，支持绝大多数CMD指令。 |
| `***a && ***b` | 将多个命令“连接”起来，一步运行多组命令。 |
| `d:` | 进入d盘 |
| `dir (d:)` | 查看目录下文件，写参数则查看指定目录下文件。 |
| `高级系统设置`与`文件保存设置` | 可以修改显示操作系统列表的时间，加快开机速度；可以修改新文件的默认保存位置。 |
| `%appdata%`/`%localappdata%`/`%temp%` | 记得定期进入这些目录删除一些个人隐私文件与无用文件 |
| `sfc /scannow` | 扫描系统文件并修复 |

> `net localgroup administrators test /add` #添加 test 帐号为管理员
> `net localgroup administrators test /del` #删除 test 账号的管理员权限
> `net localgroup administrators` #查看管理员列表

> `net user [username] [password] /add` #添加用户
> `net user test /del` #删除 test 用户
> `net user test` #查看 test 用户信息
> `net users` #查看用户列表
