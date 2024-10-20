# 在中国大陆网络环境下安装国际版

众所周知 Mozilla 中国分部谋智为了适应大陆的环境推出了特供版，且在国内搜索引擎（百度等）搜索 Firefox 时结果雄踞榜首，甚至在浏览器的语言为简体中文时将自家官网 mozilla.org 跳转到 firefox.com.cn 。

有关特供版和国际版的区别可参考：[Firefox（国际版）与火狐中国版本有什么差别吗？ - 知乎](https://www.zhihu.com/question/375129190)

下面提供两种办法：

## 通过跳转到“正确”的国际版页面下载

Windows 用户：

1. 打开 [https://www.mozilla.org/zh-CN/firefox/new/](https://www.mozilla.org/zh-CN/firefox/new/) （要找到这个网址，使用bing搜索然后找到标题为 Mozilla 的结果即可）
2. 点击`下载Firefox`
3.  等待下载然后安装即可

Linux 用户：

推荐使用系统自带的包管理器（apt、pacman、dnf等）。

具体参考：[在 GNU/Linux 中安装 Firefox | Firefox 帮助](https://support.mozilla.org/zh-CN/kb/install-firefox-linux)

Ubuntu及其衍生通过此种办法可能需要注意会安装到snap版本的。

Mac 用户：

手边没Mac不知道，但似乎可以参考Windows。

## 在 Mozilla FTP 处下载

1. 打开 [https://ftp.mozilla.org/pub/firefox/releases/](https://ftp.mozilla.org/pub/firefox/releases/)
2. 找到目前最新的版本号（2024/03/23时最新版本为124.0）并点击打开（建议善用`在网页中查找`）
3. Windows  用户选择 `win64`，mac用户选择 `mac`
4. 滑到底部，找到 `zh-CN`
5. 选择任意一个下载即可。
