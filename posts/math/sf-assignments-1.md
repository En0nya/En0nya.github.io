## 数学分析习题记录

记录一下 xhm 的题还有平时作业不会的。

### 一点证明思路

#### 用定义证明收敛：

就是要说明在某个 $N$ 之后的所有 $n$ 满足一个形如 $f(n) < C\epsilon$ 的不等式**恒成立**。

所以就想办法找：

1. 直接用这个形式暴力求解出 $n > g(\epsilon)$ 的形式。
2. 用其它的条件放缩，比较常见的是如果极限内的式子为一个 $\sum$ 的样子；从一个有限项之后拆开，前面为常数，后面可以用条件放缩（常用三角不等式）。

#### 用定义证明数列为无穷大量

就是要说明对于任意一个数，一定能找到某项之后所有项都大于它。

其实道理差不多。

现在任取一个 $G$，我们当它是固定的。

然后根据 $x_n > G$ 解出 $n > g(G)$ 的范围。

我们只需要取 $N = g(G)$ 就可以了。

### 习题课 1（第一次作业）

> T6(3)：$\lim\limits_{n\to\infty}\dfrac{1\times 3\times 5 \times \cdots \times (2n - 1)}{2 \times 4 \times 6 \times \cdots \times 2n}$。

注意到：$a + b > 2\sqrt{ab}$。

所以 $(2n + 1) + (2n - 1) > 2 sqrt{(2n + 1)(2n - 1)} \iff 2n > \sqrt{(2n + 1)(2n - 1)}$。

于是把下面全部替换：

$\dfrac{1\times 3 \times 5 \times \cdots \times (2n - 1)}{\sqrt{1 \times 3} \sqrt{3 \times 5} \sqrt{5 \times 7} \times \cdots \sqrt{(2n - 1)(2n + 1)}}$。

然后就能约掉，原式等于 $\lim\limits_{n\to \infty}\dfrac{1}{2n + 1} = 0$。

> T8：设 $a > 0$ 为一常数，利用数列极限的定义证明：
>
>  $\lim\limits_{n\to \infty} \dfrac{a^n}{n!} = 0$。

由于夹逼法则和 Stolz 定理看起来都没法用，考虑直接用定义来证明。

即证：$\forall  \epsilon > 0, \exists N \text{ s.t. } \forall n > N , |\dfrac{a^n}{n!} - 0| < \epsilon$.

钦定一个 $M > a, \text{ like } M = [a] + 1$。

当 $n > M$ 时，$\dfrac{a^n}{n!} = \sum\limits_{i = 1}^{M}\dfrac{a}{i} \times \sum\limits_{i = M + 1}^{n}\dfrac{a}{i}$。

由于 $M$ 为一个固定常数，所以前面可以设为 $C_M$。

然后由于我们要求 $M > a$，所以后面的部分 $< 0$。

所以 $\dfrac{a^n}{n!} < C_M \times \epsilon,(n > M)$

> T11(3)：
>
> 若数列 $\{c_n\}$ 满足：$\lim\limits_{n\to\infty} \dfrac{\sum\limits_{i = 1}^{n}}{n} = c \not= \infty$。
>
> 探究数列 $\{c_n\},\{\dfrac{c_n}{n}\}$ 的收敛性。

能够举出反例。（等会写）
