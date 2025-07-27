简单记录一些 CTF MISC Part 的知识或者技巧

## 图片类

### PNG 隐写

+ PNG 前的文件头：`89 50 4E 47 0D 0A 1A 0A`（用 Hex Editor 打开）
	+ Vim 里 用 `%!xxd file` 调用 xxd 来打开。
	+ 写入的时候记得 `%!xxd -r` 转写回二进制文件，但如果 vim 没有 `-b` 参数启动的话似乎会增加一个 0a（暂未考证） 

+ `50 4E 47` 是 PNG 三个字母的 Ascii code。

+ 常见的隐写有反转整个文件的 byte（类似 `50 4E` -> `4E 50`）或者是缺失文件头；

+ 隐写的时候注意一下 encoding，例如 ctfshowmisc7入门 这题要用 Text 的方式打开 jpg 才能找到 flag，直接用 Hex code 来看没法看到，用 Text 相当于将 Hex code 翻译为了文字。


---

TO BE CONTINUED...

UPD：因为一些比较神秘的原因需要暂时放掉 CTF 复健算法竞赛，本篇无限期搁置> <