---
title: Tips 列表
---

bot 会返回的 tips 列表，以及一些可能的解释：

::: tip
这里的更新可能不及时，可以参考 https://git.gb0.dev/gb/bot/src/branch/master/core/simple.py
:::

## "你知道吗：其实 tips 都是废话（确信"

似乎来自 Phigros 的过场 tips

## "如果 bot 没有回复链接，说明链接不需要被清理"

代码是这么写的（嗯

因为想让 bot 足够安静，所以一度加上的“我没有发现要清理的内容”也被撤销了。

## "不管如何，你今天都很棒！"

精神状态不好是这样的，至少让 bot 像个人了

## "这个 bot 暂时还跑在一台运行着 Arch Linux 的笔电上"

指我的测试环境，不过它现在应该运行在 VPS 上了

## "/ping 命令其实显示的是 bot 到 Telegram 服务器的延迟，而不是用户到 bot 的延迟"

至少计算方式是 bot 收到命令的时间和 Telegram 给 bot 发送的数据中用户发送时间（也就是 Telegram 服务器收到消息的时间戳）的时间差

## "bot 的链接清理功能其实大多归功于 ➗ Actually Legitimate URL Shortener Tool 规则集"

规则集：
https://github.com/DandelionSprout/adfilt/blob/master/LegitimateURLShortener.txt

虽然因为效果不好（用AI用的）已经逐步被参数白名单所取代了

## "bot 的功能可以被选择性的开启或者关闭，但是示例 bot 为了方便开发和测试，默认开启了所有功能"

其实还有一方面原因是太懒了，再加上写的实现我自己都不知道有没有实时重载的机制（好像是有的）

硬核 YAML 配置文件，不过后期会使用 SQLite 数据库

## "说真的，你应该去看看 @kmuav2bot"

因为这个 bot 的目标就是在我自己的需求范围内替代 kmuabot

## "任何一条 tips 消息都会在一分钟后自动消失，再也不用担心消息堆积了"

代码如此。

## "/mc 命令使用了 mcstatus 库来查询 Minecraft 服务器状态，而这个库曾经由 Dinnerbone 维护"
这句话是信息性的，也从某些方面指向了致敬 Minecraft 的[彩蛋](https://git.gb0.dev/gb/bot/src/commit/0f71c0e74df6f3d43b6e6e09de939be88358252e/core/mc.py#L118)
