### 数学分析笔记 - Chapter 5 - 不定积分

#### 定义 5.1 不定积分

> 若在某个区间 $I$ 上，函数 $f, F$ 满足以下关系：
>
> $F^{\prime}(x) = f(x), x\in I$。
>
> 或者等价地： $\text{d} F(x) = f(x) \text{d} x$。
>
> 则称 $F$ 为 $f$ 在 $I$ 上的一个原函数。
>
> 函数 $f$ 的全体原函数称为 $f$ 的不定积分
>
> 记作 $\displaystyle\int f(x)\text{d}x$，由此：$F(x) = \displaystyle\int f(x) \text{d}x + C$，其中 $C$ 为任意常数。

例：$\displaystyle\int x \text{d} x = \dfrac{1}{2}x^2 + C$

原函数求导得到导函数

导函数求不定积分得到原函数

所以求导和不定积分一定程度上是逆运算（由于 $C$ 所以不完全是）

#### 命题 5.1

> 若 $f(x), g(x)$ 的原函数都存在，则 $\forall \alpha,\beta \in \mathbb R; \; \alpha f(x) + \beta g(x)$ 的原函数也存在。
>
> 且满足：$\displaystyle\int [\alpha f(x) + \beta g(x)] \text{d} x= \alpha \displaystyle\int f(x)\text{d}x + \beta \displaystyle\int g(x)\text{d}x$

证明：假设 $\displaystyle\int f(x)\text{d}x + C_1 = F(x), \displaystyle\int g(x)\text{d}x + C_2 = G(x)$

所以 $[\alpha F(x) + \beta G(x)]^{\prime} = \alpha f(x) + \beta g(x)$

那么 $\alpha F(x) + \beta G(x)$ 是 $\alpha f(x) + \beta g(x)$ 的一个原函数

也就是 $\displaystyle\int[\alpha f(x) + \beta g(x)]\text{d}x + C = \alpha F(x) + \beta G(x)$

所以 $\displaystyle\int[\alpha f(x) + \beta g(x)]\text{d}x + C = \alpha \displaystyle\int f(x)\text{d}x + \alpha C_1 + \beta \displaystyle\int g(x)\text{d}x + \beta C_2$

$= \alpha \displaystyle\int f(x)\text{d}x + \beta \displaystyle\int g(x)\text{d}x$

这里不是在消掉 $C$ 而是因为本身就带常数给扔到里面去了。

#### 命题 5.2 常用积分公式

> 1) $\displaystyle\int x^\alpha \text{d}x = \begin{cases}\dfrac{1}{\alpha + 1}x^{\alpha + 1} + C,&\alpha\not=-1\\\ln |x| + C, &\alpha= -1\end{cases}$
>
> 2) $\displaystyle\int e^x \text{d}x = e^x + C$
>
> 3) $\displaystyle\int a^x \text{d}x = \dfrac{a^x}{\ln a} + C,(a > 0, a\not= 1)$
>
> 4) $\displaystyle\int \sin x\text{d}x = -\cos x + C$
>
> 5) $\displaystyle\int \cos x\text{d}x = \sin x + C$
>
> 6) $\displaystyle\int \sec^2 x\text{d}x = \tan x + C$
>
> 7) $\displaystyle\int \csc^2 x\text{d}x = -\cot x + C$
>
> 8) $\displaystyle\int \tan x \sec x \text{d}x =\sec x + C$
>
> 9) $\displaystyle\int \cot x \csc x \text{d}x = -\csc x + C$
>
> 10) $\displaystyle\int \dfrac{1}{1 + x^2}\text{d}x = \arctan x + C$
>
> 11) $\displaystyle\int \dfrac{1}{\sqrt{1-x^2}} \text{d}x = \arcsin x + C$
>
> 12) $\displaystyle\int \dfrac{-1}{\sqrt{1-x^2}} \text{d}x = \arccos x + C$
>
> 其中 $C$ 为任意常数

`TODO` 全算一遍

#### 例题 5.1

> 求 $\displaystyle\int \tan^2 x\text{d}x = ?$

解：

$\tan^2 x = \sec^2 x - 1$

$\displaystyle\int (\sec^2 x - 1)\text{d}x = \displaystyle\int \sec^2x \text{d} x - \displaystyle\int 1 \text{d}x = \tan x - x + C$

#### 例题 5.2

> 求 $\displaystyle\int \sin^2 (\dfrac{x}{2})\text{d}x = ?$

解：

$\sin^2 (\dfrac{x}{2}) = \dfrac{1 - \cos x}{2}$

于是原式 $=\displaystyle\int \dfrac{1}{2}\text{d}x - \displaystyle\int \dfrac{\cos x}{2} \text{d}x = \dfrac{1}{2}\left(x - \sin x\right) + C$

### 不定积分的计算方法

#### 换元法 / 变量替换法

原理：

$\displaystyle\int f(g(x))\text{d}x$

令 $g(x) = u, x = h(u) \Rightarrow = \displaystyle\int f(u) \text{d}[h(u)]$

$= \displaystyle\int f(u) h^{\prime}(u) \text{d}u$

##### 例题 5.3

> 设 $n \ge 1, n \in \mathbb Z$。
>
> 求 $\displaystyle\int \dfrac{\text{d}x}{(x - a)^n}$

解：令 $x - a = t \Rightarrow \text{d}x = \text{d}(t - a) = \text{d}t$

所以原式：$\displaystyle\int t^{-n}\text{d}t$

若 $n = 1, \text{ans} = \ln|t| + C = \ln |x - a| + C$

若 $n \not= 1, \text{ans} = \dfrac{1}{1 - n}t^{1 - n} + C = \dfrac{1}{1 - n}(x - a)^{1 - n} + C$

##### 例题 5.4

> 求 $\displaystyle\int \dfrac{\text{d}x}{x^2 + a^2}, a\in \mathbb{R}, a\not= 0$。

有点像 $\arctan$，所以原式 $= \dfrac{1}{a^2} \displaystyle\int \dfrac{\text{d}x}{1 + (\dfrac{x}{a})^2}$。

令 $t = \dfrac{x}{a} \Rightarrow \text{d}x = a\text{d}t$

所以原式$= \dfrac{1}{a^2}\displaystyle\int \dfrac{\text{d}x}{1 + t^2} a \text{d} t = \dfrac{\arctan t}{a} + C = \dfrac{\arctan(\dfrac{x}{a})}{a} + C$

##### 例题 5.5

> 求 $\displaystyle\int \sqrt{a^2 - x^2}\text{d}x, a\not= 0$

令 $x = a\sin t \Rightarrow \sqrt{a^2 - x^2} = |a|\cdot|\cos t|$

$\text{d}x = a\cos t\text{d}t$

应该分讨（但其实直接做答案都一样）

1) $t \in [-\dfrac{\pi}{2}, \dfrac{\pi}{2}]$，所以是：

$\displaystyle\int |a|\cos t\cdot  a\cos t\text{d} t = a \cdot |a| \displaystyle\int \cos^2 t \text{d}t = a\cdot |a| = a|a| \displaystyle\int \dfrac{1 + \cos (2t)}{t}\text{d}t$

$= \dfrac{a|a|}{2}\displaystyle\int (1 + \cos(2t))\text{d}t = \dfrac{a|a|}{2}[t + \dfrac{1}{2}\sin (2t)] + C$

$= \dfrac{a|a|}{2}t + \dfrac{a|a|}{2}\sin t\cos t + C =\dfrac{a|a|}{2}t + \dfrac{|a|}{2}x\cos t + C$

$=\dfrac{a|a|}{2}t + \dfrac{1}{2}x \sqrt{a^2 - x^2} + C$

注意到要想使用 $\arcsin$，要满足 $t \in [-\dfrac{\pi}{2}, \dfrac{\pi}{2}]$，刚好满足

$=\dfrac{a|a|}{2}\arcsin(\dfrac{x}{a}) + \dfrac{1}{2}x\sqrt{a^2 - x^2} + C$

那要不在这个范围怎么办？

2)

`TODO` 手算一次，再导回去
