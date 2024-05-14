---
slug: git-pull-fail
title: git拉取代码失败:Filename-too-long
date: 2023-11-12
authors: yuchengee
tags: [git]
---
git pull拉取代码时，遇到一个错误：
error: unable to create file xxxxx/xxxx/xxxxx/xxxxxx/xxxxx/xxxx/xxx/xxx/xxxxx/xxxxx/xxxxx：Filename too long

该问题就是代码文件中路径过长，导致git报错。

解决：可以设置git支持长路径
```
git config --global core.longpaths true

git config --list
```

取消设置
```
git config --global --unset core.longpaths
```

:::info
当在Windows系统上使用Git时，文件路径的长度通常受到260个字符的限制。这意味着如果文件路径超过了这个限制，Git将无法正常处理这些文件。但是，通过运行"git config --global core.longpaths true"命令，你可以将"core.longpaths"配置选项设置为"true"，从而告诉Git允许处理超过260个字符的文件路径。
:::
