# 如何选择正确的版本

此篇可能同样适用于其它基于 Electron + GitHub Actions 构建的应用

以最新版 [0.4.8-2] 为例：

`yesplaymusic-0.4.8-arm64.tar.gz`

上面这个文件的文件名分为四部分：程序名（`yesplaymusic`）、版本（`0.4.8`）、架构（`arm64`）、文件格式（`tar.gz`）。

而选择到正确的版本的两个决定因素是架构和文件格式。

##  架构：

- `amd64`、`x86_64`、`x64`等是为现代（2014年或以后？）的搭载AMD/Intel芯片的设备（包括使用Intel芯片的Macbook）所设计。
- `arm64`表明它是为ARM架构64位设备所设计的，代表设备有搭载M系列芯片的MacBook以及树莓派等设备。
- `armv7(l)`表明它是为ARM架构的32位设备设计的。（待补充：支持设备列表）
- `universal`表明它支持所有主流架构，文件体积更大，如果不知道选什么可以选这个，支持几乎所有设备。

 ## 文件格式：

- `tar.gz`、`AppImage`、`pacman`、`deb`、`rpm`、`snap`等格式为Linux 系统对应的“安装包”。

  （以下的说法不是很严谨，事实上更严格来讲是发行版们对应的包管理器所需要的安装包）

  - `AppImage` 理论可在几乎所有现代发行版上运行
  - `pacman` 为 Arch Linux 及其衍生发行版所对应的安装包
  - `deb`为Debian及其衍生发行版（包括Deepin、Linux Mint等）所对应的安装包
  - `snap`是包含了 Snap 相关组件的发行版的安装包（最显著的例子是Ubuntu及其部分衍生）
  - `rpm`是redhat系（如Fedora）所对应的安装包
  - `tar.gz` 比较通用，解压后即可运行，如果要实现“安装”，需要自行将文件复制到 `$PATH` 所对应的文件夹（一般是 `/usr/bin`）中。

- `exe` 是 Windows 程序。
  - 文件其它部分包含 `Setup`字样的为安装程序，可以将程序安装到系统中方便管理
  - 没有任何字样的为单文件程序，下载后双击即可直接运行。
  - 需要特别注意的是 `zip`格式的一般为便携版（又称“绿色版”），可以塞进U盘等移动存储介质，随用随走，几乎不对系统自身产生影响
- `dmg`为 Mac 安装程序。
  
  - 只需要注意架构即可。

## 省流

Windows 用户想安装的话选这个：`YesPlayMusic.Setup.0.4.8.exe`

Intel Mac 选这个：`YesPlayMusic-mac-0.4.8-x64.dmg`

M1/M2/M3 Mac 选这个： `YesPlayMusic-mac-0.4.8-arm64.dmg`

Linux 新手推荐先去 Discover 等“商店”搜索...

