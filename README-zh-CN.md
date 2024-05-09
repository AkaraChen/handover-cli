# handover-cli

什么？跟甲方谈崩了？你还不想好好好好将代码交接给他？那就用这个工具吧！

## 功能

handover-cli 提供降低您代码质量，但是不会破坏项目本身鲁棒性的解决方案，以便您更好的交接代码。

首先，因为 prettier/ast-grep 等优秀开源生态的存在，这个工具可能支持你项目用到的所有语言，不管是后端的、前端的（包括框架），同时它现在能做到：

1. 将所有源代码用随机的规则 format 一遍
2. 删除所有注释
3. 删除所有 console.log
4. 删除所有跟代码质量有关的工具配置
5. 删除包管理器的 lockfile
6. 删除测试代码
7. 删除所有的 git 记录
8. 提供 codemod 小提示，助你「更好」的交接

## TODO

之后可能会引入 LSP，利用 LSP 完成一定的重构，比如：

1. 将英文变量名改成中文拼音

## 安装

```bash
# currently not available
npm install -g handover-cli
```

## 使用

```bash
handover -y
```

如果你想 dry run，可以：

```bash
handover
```
