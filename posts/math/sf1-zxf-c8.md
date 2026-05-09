## 数学分析(I) Chapter 8 数项级数

### 数项级数的收敛性

#### 定义 级数

> 假设 $\{x_{n}\}^{+\infty}$ 是一个实数列。
>
> 称 $\sum\limits_{n = 1}^{+\infty}x_{n}$ 为无穷级数。
>
> 此时称 $x_{n}$ 为该级数的通项，该级数的部分和序列定义为 $S_i = \sum\limits_{n = 1}^{i}x_{n}$。

#### 定义 收敛

> 称一个级数 $\sum\limits_{n = 1}^{\infty} x_{n}$ 收敛。
>
> 如果它的部分和序列 $\{S_n\}^{+\infty}$ 是收敛的，则称该级数收敛。
>
> 即 $\lim\limits_{n \to +\infty} S_n$ 存在。

也可以写成 $\lim\limits_{n \to +\infty}\sum\limits_{n = 1}^{n}x_{n}$

比如：

等比级数 $\sum\limits_{n = 0}^{+\infty} q^{n}$ 在 $|q| < 1$ 时收敛。

$S_n = \dfrac{1 (1 - q^{n - 1})}{(1 - q)} = \dfrac{1 - q^{n - 1}}{1 - q}, q\not = 1$

注：

1. 不收敛的级数称之为发散的。
2. 如果级数收敛，那么一定有 $x_n \to 0$，反之不然（因为 $x_n = S_n - S_{n - 1}$，反例为 $\dfrac{1}{n}$）。

当然这个反例也可以用广义积分来证明发散。

#### 例题

> 用广义积分证明：$\sum\limits_{n = 1}^{+\infty}\dfrac{1}{n^p}$ 收敛的充分必要条件为 $p > 1$。

令 $f(x) = \dfrac{1}{x^p}$。

由于 $f$ 在 $[1, +\infty)$ 上单调递减，所以 $\forall x \in [k, k + 1], k \in \mathbb N^{\star}$：

$\displaystyle\int_{k}^{k + 1}f(k + 1)\text{d}x \le \displaystyle\int_{k}^{k + 1}f(x)\text{d}x \le \displaystyle\int_{k}^{k + 1} f(k)\text{d}x$

所以 $f(k + 1) \le \displaystyle\int_{k}^{k + 1}f(x)\text{d}x \le f(k)$。

两边累加

$\sum\limits_{k = 2}^{n + 1}f(k) \le \displaystyle\int_{1}^{n + 1}f(x)\text{d}x \le \sum\limits_{k = 1}^{n}f(k)$

左边就是 $S_{n} - f(1)$

那么 $S_{n} \le \displaystyle\int_{1}^{n + 1}f(x)\text{d}x + f(1)$

进而 $S_{n}$ 有上界且单调递增，所以 $\{S_{n}\}$ 收敛进而级数收敛。

#### 定义 余项

> 称 $r_n = \sum\limits_{k = n + 1}^{+\infty}x_{k}$ 为级数 $\sum\limits_{n = 1}^{+\infty}x_{n}$ 的余项。
>
> 显然有：$\sum\limits_{n = 1}^{+\infty}x_{n}$ 收敛 $\iff r_{n} \to 0$。

#### 命题

> 若 $\sum\limits_{n = 1}^{+\infty}x_{n}$ 收敛，$\sum\limits_{n = 1}^{+\infty}y_{n}$ 收敛，则它们的线性组合 $\alpha\sum\limits_{n = 1}^{+\infty}x_{n} + \beta \sum\limits_{n = 1}^{+\infty}y_{n} = \sum\limits_{n = 1}^{n}(\alpha x_{n} + \beta y_{n})$ 也是收敛的。

证明：

$\lim\limits_{n \to +\infty}S_n = A, \lim\limits_{n \to +\infty} T_n = B$

那么：$R_{n} = \alpha S_{n} + \beta T_{n} \Rightarrow \lim\limits_{n \to +\infty}R_{n} = \alpha A + \beta B$

而 $\sum\limits_{n = 1}^{+\infty}x_{n} = A, \sum\limits_{n = 1}^{+\infty} y_{n} = B$。

所以 $\alpha \sum\limits_{n = 1}^{+\infty}x_{n} + \beta \sum\limits_{n = 1}^{+\infty}y_{n} = \alpha A + \beta B$。

这与 $\lim\limits_{n \to +\infty} R_{n}$ 结果相等，而 $R_{n}$ 就是它们的前 $n$ 项和。进而是收敛的。 

这里 $\sum\limits_{n = 1}^{+\infty}x_{n} = A$ 蕴含了 $\lim\limits_{n \to +\infty}S_{n} = A$

#### 命题

> 设 $\sum\limits_{n = 1}^{+\infty}x_{n}$ 收敛，则在其求和表达式中，任意添加括号得到的新级数也是收敛的
>
> 即收敛的级数满足加法的结合律

设 $\sum\limits_{n = 1}^{+\infty}x_{n}$ 收敛，即 $\sum\limits_{n = 1}^{+\infty} = x_1 + x_2 + x_3 + x_4 + x_5 + x_6 + \cdots$

设加括号之后的新级数 $\sum\limits_{n = 1}^{+\infty}y_{n}$ 为：

$(x_1 + x_2 + \cdots + x_{n_1}), (x_{n_1 + 1}, x_{n_1 + 2}, \cdots x_{n_2}), (x_{n_2 + 1}, x_{n_2 + 2}, \cdots x_{n_3}) \cdots$

下证 $\sum\limits_{n = 1}^{+\infty}x_{n} = \sum\limits_{n = 1}^{\infty}y_{n}$

$y_n$ 的部分和：$T_{1} = y_{1} = S_{n_1}, T_2 = y_1 + y_2 = S_{n_2}$

进而有：$T_{k} = S_{n_k}$，所以 $\{T_k\}$ 是 $\{S_{n_k}\}$ 进而是 $S_{n}$ 的子列。

根据子列收敛性，$T_{k}$ 收敛于 $S_{n}$ 同一点。

所以 $\sum\limits_{n = 1}^{+\infty} x_{n} = \sum\limits_{n = 1}^{+\infty}y_{n}$

### 数列的上下极限

#### 定义 极限点

> 设 $\{x_{n}\}^{\infty}$ 是有界的，若存在一个子列 $\{x_{n_k}\}^{\infty} \subset \{x_{n}\}^{\infty}$ 使得 $\lim\limits_{k \to +\infty} x_{n_k} = \xi$，则称 $\xi$ 为 $x_{n}$ 的一个极限点（聚点）。
>
> 对于无界数列，称 $+\infty\text{ or } -\infty$ 为 $\{x_{n}\}^{\infty}$ 的一个极限点。

例：$x_{n} = (-1)^{n}, y_n = \sin(\dfrac{n\pi}{2})$

$x_{2k} = 1, x_{2k + 1} = -1$ 所以 $+-1$ 为其极限点。

$y_{2k} = 0, y_{2k + 1} = 1 / -1 \Rightarrow y_{4k + 1} = 1, y_{4k + 3} = -1$，所以 $0, +-1$ 为其极限点。

#### 命题

> 假设 $\{x_{n}\}$ 是有界的，令 $E = \{\xi\}$ 为其极限点的集合。
>
> 那么 $H = \sup E, h = \inf E$ 都存在，进而 $H = \max E, h = \min E$

证明：

利用上确界的定义，$\exists \{\xi_k\} \subset E \text{ s.t. } \xi_k \to H$

+ $\xi_1 \in E \Rightarrow$ $\{x_n\}$ 有无穷多项属于 $(\xi_1 - 1, \xi_1 + 1)$，取其中一项 $x_{n_1}$。
+ $\xi_2 \in E \Rightarrow$ $\{x_n\}$ 有无穷多项属于 $(\xi_2 - \dfrac{1}{2}, \xi_2 + \dfrac{1}{2})$，取其中一项 $x_{n_2}, n_2 > n_1$。
+ $\cdots$
+ 进而 $|x_{n_k} - \xi_k| < \dfrac{1}{n}$，进而可以说明 $\{x_{n_k}\} \to H$，这表明 $H$ 也是一个极限点。

又因为 $H$ 是上确界，进而 $H = \max E$

这个取法和之前数列极限里是一致的。

#### 定义 上下极限

> $E$ 的最大值 $H$，即 $\{x_{n}\}^{\infty}$ 的最大极限点定义为 $\{x_{n}\}^{\infty}$ 的上极限，记作 $\limsup\limits_{n \to +\infty} x_n$。
>
> $E$ 的最小值 $h$，即 $\{x_{n}\}^{\infty}$ 的最小极限点定义为 $\{x_{n}\}^{\infty}$ 的下极限，记作 $\liminf\limits_{n \to +\infty} x_{n}$

#### 命题 上下极限与收敛

> $\{x_n\}^{\infty}$ 收敛的充分比较条件是 $\limsup\limits_{}, \liminf\limits_{}$ 存在且相等。

$\Rightarrow$：收敛的数列极限点唯一，那么 $|E| = 1$，进而 $\limsup\limits_{} = \lim\limits_{} = \liminf\limits_{}$

$\Leftarrow$：$\limsup\limits_{} = \liminf\limits_{} = A \in \mathbb R$

由于 $\min E = \max E$，进而 $|E| = 1, E = \{A\}$

$\Rightarrow \forall \{x_{n_k}\} \subset \{x_n\}, \{x_{n_k}\} \to A (n \to +\infty)\Rightarrow x_{n} \to A (n \to +\infty)$

#### 例题

+ $\limsup\limits_{n \to +\infty} \sin(\dfrac{n\pi}{2}) = 1$
+ $\liminf\limits_{n \to +\infty} (-1)^n = -1$
+ $\{x_n\} = \{-10, -5, 7, 3 + (-1)^n (n \ge 4)\}\Rightarrow \limsup\limits_{n \to +\infty}x_n = 4, \liminf\limits_{n \to +\infty}x_n = 2$

所以注意，上极限是所有子列**极限**的上确界

**区分子列和数列！**

#### 定义 函数的上下极限

> 对实值函数 $f$，同样可以定义上下极限。
>
> $\limsup\limits_{x \to x_0} f(x)$ 定义为:
>
> 设 $f$ 在非空集 $E$ 上有定义，$x_{0}$ 是 $E$ 的一个极限点。
>
> $\limsup\limits_{x \to x_0} f(x)= \sup \{\alpha : \exists \{x_n\}^{\infty} \subset E \text{ s.t. } x_n \to x_0 (n \to +\infty), f(x_n) \to \alpha, n \to +\infty\}$

这个定义方式和函数极限有点类似，都是用数列的极限来定义。

#### 命题

> 若 $\{x_n\}^{\infty}$ 为有界数列，则：$\limsup\limits_{n \to +\infty} x_{n} = H$ 当且仅当，$\forall \epsilon > 0$
>   1) $\exists N \in \mathbb N^{\star} \text{ s.t. } x_n < H + \epsilon, n > N$
>   2) $\{x_n\}$ 当中有无穷多项满足 $x_n > H - \epsilon$
>
> 若 $\{x_n\}^{\infty}$ 为有界数列，则：$\liminf\limits_{n \to +\infty} x_{n} = h$ 当且仅当，$\forall \epsilon > 0$
>
>   1) $\exists N \in \mathbb N^{\star} \text{ s.t. } x_n > h - \epsilon, n > N$
>   2) $\{x_n\}$ 中有无穷多项满足 $x_n < h + \epsilon$

证明 $\limsup\limits_{}$

$\Rightarrow$：设 $H$ 为 $\{x_n\}$ 的最大极限点，对于 $\epsilon > 0$，由极限点的定义，在 $[H + \epsilon, +\infty)$ 中最多只有有限个 $x_n$

（因为，如果有无穷多项，根据 Weierstrass 定理必存在收敛子列，那么一定会有一个不小于 $H + \epsilon$ 的极限点，这就和 $H$ 的假设矛盾。）

设其中最大下标为 $n_0$，那么 $n > n_0$ 时必有 $x_{n} < H + \epsilon$（就是补集，不要误以为数列是单调的），此时 (1) 得证。

根据定义，$\exists \{x_{n_k}\}^{\infty} \sub \{x_n\}$ 使得 $x_{n_k} \to H$

所以 $n > N$（数列极限定义里的那个 $N$）时，$x_n \in (H - \epsilon, H + \epsilon)$，这是无穷数列的尾巴，有无穷项，

所以，在开区间 $(H - \epsilon, H + \epsilon)$ 有 $\{x_{n_k}\}$ 的无穷多项进而可以证明 (2)

$\Leftarrow$：

由 (1)：$x_n < H + \epsilon, n < N$。

两边同时取上极限：$\limsup\limits_{n \to +\infty} x_n \le H + \epsilon$

根据 $\epsilon$ 的任意性，令其 $\to 0^{+}$，所以 $\limsup\limits_{n \to +\infty} \le H$

由 (2)：$\limsup\limits_{n \to +\infty}x_n \ge H - \epsilon$，这是因为由无穷多项都大于 $H - \epsilon$，那他们的极限点最大的那一个也应该大于这个数。

$\epsilon$ 趋近于零可以得到 $\limsup\limits_{n \to +\infty}x_n \ge H$，进而得到原式。

**注意不是所有项而是可以找到无穷多项**

#### 定理 上下极限的等价定义

> 有界数列 $\{x_n\}^{\infty}$ 的上下极限有如下等价定义。
>
> $\limsup\limits_{n \to +\infty} x_n = \lim\limits_{n \to +\infty}(\sup\limits_{k \ge n}\{x_k\})$
>
>
> $\liminf\limits_{n \to +\infty}x_{n} = \lim\limits_{n \to +\infty}(\inf\limits_{k \ge n}\{x_k\})$

证明：

$\forall n \ge 1$，令 $b_{n} = \sup\limits_{k \ge n}\{x_k\} = \sup\{x_{n + 1}, x_{n + 2}, \cdots\}$

于是 $\{b_{n}\}$ 有界，且单调递减（按这样的方式，数量变少了上确界不增）。

单调有界数列必是收敛数列，从而 $\lim\limits_{n \to +\infty}\{b_n\}$ 存在，记为 $H^{\star}$。

$a_{n}$ 同理定义，极限记为 $h^{\star}$

下证：若 $\xi$ 为 $\{x_{n}\}$ 的一个极限点，那么，$\xi \in [h^{\star}, H^{\star}]$

取 $\{x_{n_k}\} \subset \{x_{n}\} \text{ s.t. } x_{n_k} \to \xi$

利用 $\{a_n, b_n\}$ 的定义，那么 $a_{n_{k - 1}}\le x_{n_k}\le b_{n_{k - 1}}$

令 $k \to +\infty$，可以得到：$h^{\star} \le \lim\limits_{k \to +\infty}x_{n_k} \le H^{\star}$ 即得到所需要命题。

由于我们没法说明 $h^{\star}, H^{\star}$ 都是极限点，还需要再证明一下：

$\exists \{y_{n_k}\} \subset \{x_n\}\to h^{\star}, \{z_{n_k}\} \subset \{x_n\} \to H^{\star}$

+ $b_1 = \sup\limits_{k > 1}\{x_{k}\} \Rightarrow \exists n_1 \in \mathbb N \text{ s.t. } b_1-1 \le x_{n_{1}}\le b_{1}$
+ $b_{n_1} = \sup\limits_{k > n_1}\{x_{k}\} \Rightarrow \exists n_2 \in \mathbb N \text{ s.t. } b_{n_1} - \dfrac{1}{2} \le x_{n_2} \le b_{n_1}$
+ $\cdots$

重复操作可以得到 $\{b_{n_k}\} \subset \{b_n\}$ 且 $b_{n_{j - 1}} - \dfrac{1}{j} \le x_{n_{j}} \le b_{n_{j - 1}}$ 

令 $j \to +\infty$ 进而找到了一个 $\{x_{n_k}\} \to H^{\star}$。

另一个同理。

进而，我们甚至可以得到：

> $\limsup\limits_{n \to +\infty}x_{n} = \lim\limits_{n \to +\infty}\sup\limits_{k > n}\{x_k\} = \inf\limits_{n \ge 1}\{\sup\limits_{k > n}\{x_k\}\}$

这是因为单调递减的数列极限就是它的下确界。

#### 定理

> 设 $\{x_{n}\}^{\infty}, \{y_{n}\}^{\infty}$ 是两个有界数列
>
> 1) $\limsup\limits_{n \to +\infty}(x_{n} + y_{n}) \le \limsup\limits_{n \to +\infty}\{x_{n}\} + \limsup\limits_{n \to +\infty}\{y_{n}\}$（因为不是极限，只能取个小于等于）
>
> 2) $\liminf\limits_{n \to +\infty}(x_n + y_n) \ge \liminf\limits_{n \to +\infty}\{x_{n}\} + \liminf\limits_{n \to +\infty}\{y_n\}$
>
> 3) 若 $x_{n}$ 收敛，(1), (2) 可以取等号（因为此时上下极限相等等于极限）

证明：

(1) 分别设为 $A, B$

$\forall \epsilon > 0, \exists N \text{ s.t. } \begin{cases}x_n < A + \epsilon \\ y_n < B + \epsilon\end{cases}, n > N$

所以 $x_{n} + y_{n} < A + B + 2\epsilon, n > N$

左边取极限就可以证明。

(2) 同理。

(3) 也说明过了。

#### 命题 9

> 设 $\{x_{n}\}^{\infty}, \{y_{n}\}^{\infty}$ 是两个有界数列
>
> 1) $\limsup\limits_{n \to +\infty}(-x_n) = -\liminf\limits_{n \to +\infty}(x_n)$
>
> 2) $x_n \ge 0, y_{n} \ge 0$ 则：
>   $\begin{cases}\limsup\limits_{n \to +\infty}(x_ny_n) \le (\limsup\limits_{n \to +\infty}x_n)\cdot (\limsup\limits_{n \to +\infty}y_n) \\ \liminf\limits_{n \to +\infty}(x_ny_n) \ge (\liminf\limits_{n \to +\infty}x_n)\cdot (\liminf\limits_{n \to +\infty}y_n)\end{cases}$
>
> 3) 若 $x_{n}$ 收敛，则 (2) 中两不等式可以取等。

### 正项级数的收敛性

#### 定义

> 若级数 $\sum\limits_{n = 1}^{+\infty}x_{n}$ 满足 $x_{n} \ge 0,\forall n \ge 1$。
>
> 则称该级数为正项级数。

#### 命题

> 正项级数 $\sum\limits_{n = 1}^{+\infty}x_{n}$ 收敛的充分必要条件是：
>
> 其部分和序列 $\{S_{n}\}$ 有上界。
>
> 若部分和无上界则级数一定发散到正无穷。

证明：

设 $x_{n} \ge 0$，那么 $S_{n} \ge 0$，且 $\{S_{n}\}$ 单调递增。

那么 $\{S_{n}\}$ 有上界即其收敛，必要性即可证明。

反过来类似。

#### 命题 正项级数的比较判别法

> 设 $x_{n},y_{n} \ge 0$ 且存在常数 $c > 0 \text{ s.t. }$
>
> $n$ 足够大的时候 $x_{n} \le cy_{n}$
>
> 则 $\sum\limits_{n = 1}^{+\infty}y_{n}$ 收敛时，$\sum\limits_{n = 1}^{+\infty}x_{n}$ 也收敛。
>
> 且 $\sum\limits_{n = 1}^{+\infty}x_{n}$ 发散时，$\sum\limits_{n = 1}^{+\infty}y_{n}$ 也发散。

证明：

设 $\sum\limits_{n = 1}^{+\infty}y_{n}$ 收敛。

故 $\exists M > 0 \text{ s.t. } \sum\limits_{k = 1}^{n}y_{n} \le M$

所以 $\sum\limits_{k = 1}^{n}x_{n} \le \sum\limits_{k = 1}^{n}y_{n} \le cM$，进而 $\sum\limits_{n = 1}^{+\infty}x_{n}$ 的部分和单调递增有上界。

进而 $\sum\limits_{n = 1}^{+\infty}x_{n}$ 收敛。

$n$ 足够大的条件并不影响，因为可以把前面有限部分拿出来当作一个常数。

#### 例题

> 讨论级数 $\sum\limits_{n = 1}^{+\infty}\sin(\dfrac{\pi}{n}), \sum\limits_{n = 1}^{+\infty}\dfrac{\ln n}{n^2}$ 的收敛性。

第一个：

根据 Jordan 不等式：$\dfrac{2}{\pi}x\le \sin x \le x, x \in [0, \dfrac{pi}{2}]$

所以 $\sin(\dfrac{\pi}{n}) \ge \dfrac{2}{\pi}\cdot \dfrac{\pi}{n} = \dfrac{2}{n}$

因为 $\sum\limits_{n = 1}^{+\infty}\dfrac{2}{n}$ 发散，故原级数发散。


第二个：

由于 $\ln n \le \sqrt{n}$ 在 $n$ 足够大（$\ge 2$）时正确。

所以 $0 \le \dfrac{\ln n}{n^2} \le \dfrac{1}{n^{\frac{3}{2}}}$

而 $\sum\limits_{n = 1}^{+\infty}\dfrac{1}{n^{\frac{3}{2}}}$ 收敛，所以原级数收敛。


#### 命题 比较判别法的极限形式

> 设 $x_{n},y_{n} \ge 0$ 且存在常数 $c > 0 \text{ s.t. }$
>
> $\lim\limits_{n \to +\infty}\dfrac{x_n}{y_n} = L$
>
> 1) 若 $L \in (0, +\infty)$ 则 $\sum\limits_{n = 1}^{+\infty}x_{n}, \sum\limits_{n = 1}^{+\infty}y_{n}$ 收敛性一致。
>
> 2) 若 $L = 0$ 则 $\sum\limits_{n = 1}^{+\infty}y_{n}$ 收敛时，$\sum\limits_{n = 1}^{+\infty}x_{n}$ 也收敛。
>
> 3) 若 $L = +\infty$ 则 $\sum\limits_{n = 1}^{+\infty}y_{n}$ 发散时，$\sum\limits_{n = 1}^{+\infty}x_{n}$ 也发散。

只证明 (1)：

由于 $\forall \epsilon > 0, \exists N \text{ s.t. } n > N : |\dfrac{x_n}{y_n} - L| < \epsilon$

令 $\epsilon = \dfrac{L}{2}$ 所以 $0\le \dfrac{L}{2}y_{n} \le x_{n} \le \dfrac{3L}{2}y_{n}$

用两次比较判别法可以知道 $y_n$ 与 $x_n$ 同收敛。

#### 例题

> 讨论级数 $\sum\limits_{n = 1}^{+\infty}e^{\frac{1}{n^2}} - \cos(\dfrac{1}{n})$ 的收敛性。

可以得知它为正项级数。

想找阶数，所以 $e, \cos$ 这里用 Talyor 定理。

$$
\begin{cases}e^x = 1 + x + \dfrac{1}{2!}x^2 + \cdots + \dfrac{1}{n!}x^{n} + o(x^n) \\ \cos x = 1 - \dfrac{1}{2!}x^2 + \dfrac{1}{4!}x^4 + \cdots + \dfrac{(-1)^{n}}{(2n)!}x^{2n} + o(x^{2n})\end{cases}
$$

代回原式可以得到：

$=\dfrac{3}{2n^2}  + o(\dfrac{1}{n^2})$

所以取 $y_{n} = \dfrac{1}{n^2}$ 即可, $L = 1$。

所以原级数必定收敛。

#### 定理 Cauchy 判别法

> 设 $x_{n} \ge 0$，令 $r = \limsup\limits_{n \to +\infty}\sqrt[n]{x_{n}}$
>
> 若 $r < 1$ 则 $\sum\limits_{n = 1}^{+\infty}x_{n}$ 收敛
>
> 若 $r > 1$ 则 $\sum\limits_{n = 1}^{+\infty}x_{n}$ 发散。
>
> 否则没法使用。

本质就是比较判别法。

证明 (1)：

若 $r \in [0, 1)$，可以取 $q\in \mathbb R \text{ s.t. } 0 < r < q < 1$

根据条件：$\forall \epsilon>  0, \exists N \text{ s.t. } n > N : \sqrt[n]{x_{n}} < r + \epsilon$

令 $\epsilon = q - r$

进而 $x_{n}^{\frac{1}{n}} < q < 1 \iff x_{n} < q^n < 1$。

这是等比级数，所以只需要 $q < 1$ 即可。

(2)：

#### 引理

> 设 $x_{n} > 0$。
>
> 则 $\liminf\limits_{n \to +\infty} \dfrac{x_{n + 1}}{x_{n}} \le \liminf\limits_{n \to +\infty} \sqrt[n]{x_{n}} \le \limsup\limits_{n \to +\infty} \sqrt[n]{x_{n}} \le \limsup\limits_{n \to +\infty} \dfrac{x_{n + 1}}{x_{n}}$

先证明最后一个 $\le$

设 $\limsup\limits_{n \to +\infty}\dfrac{x_{n + 1}}{x_{n}} = A$

那么 $\forall \epsilon > 0, \exists N \text{ s.t. } n > N : \dfrac{x_{n + 1}}{x_{n}} < A + \epsilon$

做累乘可以得到：

$\dfrac{x_{n + 1}}{x_{N}} \le (A + \epsilon)^{n - N + 1}$

进而 $x_{n + 1} \le (A + \epsilon)^{n - N + 1}x_{N}$

$\Rightarrow x_{n} \le (A + \epsilon)^{n - N}x_{N}$

所以 $\sqrt[n]{x_{n}} \le (A + \epsilon)^{\frac{n - N}{n}} \sqrt[n]{x_{N}}$

两边同取上极限：$\limsup\limits_{n \to +\infty}\sqrt[n]{x_{n}} \le \limsup\limits_{n \to +\infty} (A + \epsilon)^{\frac{n - N}{n}} \sqrt[n]{x_{N}}$

左边 $\lim\limits_{} = (A + \epsilon) = \limsup$

令 $\epsilon \to 0$ 可以得到不等式。

#### 定理 d' Alembert 判别法

> 设 $x_{n} > 0$，那么：
>
> $\limsup\limits_{n \to +\infty} \dfrac{x_{n + 1}}{x_{n}} = R < 1$ 则级数 $\sum\limits_{n = 1}^{+\infty} x_{n}$收敛。 
>
> $\liminf\limits_{n \to +\infty} \dfrac{x_{n + 1}}{x_{n}} = R > 1$ 则级数 $\sum\limits_{n = 1}^{+\infty}x_{n}$ 发散。

证明：

根据引理和 Cauchy 判别法可得。

#### 例题

> 讨论 $\sum\limits_{n = 1}^{+\infty}\dfrac{n^n}{3^n\cdot n!}$ 的收敛性。

$\dfrac{\dfrac{(n + 1)^{n + 1}}{3^{n + 1} \cdot (n + 1)!}}{\dfrac{n^n}{3^n\cdot n!}} = \dfrac{(n + 1)^{n + 1}}{n^{n}} \cdot \dfrac{1}{3 (n + 1)} = \dfrac{1}{3}(1 + \dfrac{1}{n})^n$

$\lim\limits_{n \to +\infty}\dfrac{1}{3}(1 + \dfrac{1}{n})^n = \dfrac{e}{3} < 1$

根据 d'Alembert，故原级数收敛。

#### 定理 Raabe 判别法

> 设 $x_{n} > 0$，那么：
>
> 令 $R = \lim\limits_{n \to +\infty}n(\dfrac{x_{n}}{x_{n + 1}} - 1) = R$
>
> 则：
>
> 1) $R > 1$，级数 $\sum\limits_{n = 1}^{+\infty} x_{n}$ 收敛
>
> 2) $R < 1$，发散。
>
> 3) $R = 1$：该判别法不适用。

其本质上是对 d'Alembert 判别法中比值 $= 1$ 的一个强化。

思路是将其与 p-级数 做对比。

证明：

注意到 $\lim\limits_{n \to +\infty}n((\dfrac{n + 1}{n})^{p} - 1) = p$

当 $R > 1$ 时，不妨取 $1 < p < R$。

所以 $\lim\limits_{n \to +\infty}\dfrac{n((\dfrac{n + 1}{n})^p - 1)}{n(\dfrac{x_{n}}{x_{n + 1}} - 1)} = \dfrac{p}{R} < 1$

根据结论：若 $\lim\limits_{n \to +\infty}\dfrac{x_{n}}{y_{n}} = \lambda < 1$ 则 $\exists N, n > N: x_{n} < y_{n}$ 可以得到：

$(\dfrac{n + 1}{n})^p < \dfrac{x_{n}}{x_{n + 1}}$

进而 $\dfrac{\frac{1}{n^p}}{\frac{1}{(n + 1)^p}} < \dfrac{x_{n}}{x_{n + 1}}$

故 $\{\dfrac{x_{n}}{\frac{1}{n^p}}\}$ 单调递减有下界 $0$ 进而有界。

所以 $x_{n} \le C\cdot \dfrac{1}{n^p}$，根据比较判别法 $x_{n}$ 收敛。

$R < 1$ 的时候同理，取 $R < p < 1$ 就可。

#### 例题

> 讨论 $\sum\limits_{n = 1}^{+\infty}\dfrac{(2n)!!}{(2n - 1)!!} \cdot \dfrac{1}{(2n + 1)}$ 的收敛性。

$\dfrac{x_{n}}{x_{n + 1}} = \dfrac{\dfrac{(2n)!!}{(2n - 1)!!} \cdot \dfrac{1}{(2n + 1)}}{\dfrac{(2n + 2)!!}{(2n + 1)!!} \cdot \dfrac{1}{(2n + 3)}} = \dfrac{2n + 3}{2n + 1} \cdot \dfrac{(2n + 1)}{(2n + 2)} = \dfrac{2n + 3}{2n + 2}$

$\lim\limits_{n \to +\infty}n(1 + \dfrac{1}{2n + 2} - 1) = \dfrac{1}{2}$，根据 Raabe，原级数发散。

（似乎抄错题了，如果分子分母颠倒一下算出来是 $\dfrac{3}{2}$ 从而是收敛的）

#### 例题 广义积分和级数的关系

> 若 $p, q \in \mathbb R$，讨论 $\sum\limits_{n = 2}^{+\infty}\dfrac{1}{x^p(\ln x)^q}$ 的收敛性。

其实在 p-级数那里就写过了。

只要**充分远处** $f(x)$ 单调递减且非负，那么 $\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 的收敛性可以转化为 $\sum\limits_{n = a}^{+\infty}f(n)$ 的收敛性。

只需要任取 $k \in \mathbb N^{\star}, k \ge a$。

在 $[k, k + 1)$ 上 $f$ 单调进而：

$\displaystyle\int_{k}^{k + 1}f(k + 1)\text{d}x \le \displaystyle\int_{k}^{k + 1}f(x)\text{d}x \le \displaystyle\int_{k}^{k + 1}f(k)\text{d}x$

然后两边累加：

$\sum\limits_{k = a + 1}^{n + 1}f(n) \le \displaystyle\int_{a}^{n + 1} f(x)\text{d}x \le \sum\limits_{k = a}^{n}f(n)$

左边就是 $S_{n} - f(a)$，积分可以看做定值进而 $S_{n}$ 单调递减有下界，收敛。

反过来完全一样。

#### 例题

> 证明：
>
> 1) $\displaystyle\int_{0}^{+\infty}\dfrac{\text{d}x}{1 + x^2\sin^2 x}$ 是发散的
>
> 2) $\displaystyle\int_{0}^{+\infty}\dfrac{\text{d}x}{1 + x^4 \sin^2 x}$ 是收敛的。

如果直接用比较判别法会发现完全没辙。

问题是怎么对 $\sin^2 x$ 做一个比较好的估计

将其和级数联系起来：

$\displaystyle\int_{0}^{+\infty}\dfrac{\text{d}x}{1 + x^2\sin^2x} = \sum\limits_{0}^{+\infty}\displaystyle\int_{n\pi}^{(n + 1)\pi}\dfrac{\text{d}x}{1 + x^2\sin^2x}$

令 $t = x - n\pi, t \in [0, \pi]$

$=\displaystyle\sum\limits_{0}^{+\infty}\displaystyle\int_{0}^{\pi}\dfrac{\text{d}t}{1 + (t + n\pi)^2 \sin^2 t} \ge \sum\limits_{0}^{+\infty}\displaystyle\int_{0}^{\pi}\dfrac{\text{d}t}{1 + (t + n\pi)^2}$

然后发现怎么换都换不好，说明这个 $\sin t$ 可能还需要保留？

前者 $\ge \sum\limits_{0}^{+\infty}\displaystyle\int_{0}^{\pi}\dfrac{\text{d}t}{1 + (n\pi + \pi)^2 t^2} = \sum\limits_{n = 0}^{+\infty}\displaystyle\int_{0}^{\pi}\dfrac{\text{d}t}{1 + \pi^2t^2(n + 1)^2}$

$\ge \sum\limits_{n = 0}^{+\infty}\displaystyle\int_{0}^{\frac{1}{(n + 1)\pi}} \dfrac{\text{d}t}{1 + [\pi t(n + 1)]^2} \ge \sum\limits_{n = 0}^{+\infty}\displaystyle\int_{0}^{\frac{1}{(n + 1)\pi}} \dfrac{1}{2}\text{d}t = \dfrac{1}{2\pi}\sum\limits_{n = 0}^{+\infty}\dfrac{1}{n + 1}$

根据比较判别法，级数发散，可以说明原积分发散。

(2)

$=\sum\limits_{n = 0}^{+\infty}(\displaystyle\int_{0}^{\frac{\pi}{2}} + \displaystyle\int_{\frac{\pi}{2}}^{\pi})$

对前一部分用 Jordan 不等式：

$\le \sum\limits_{n = 0}^{+\infty}\displaystyle\int_{0}^{\frac{\pi}{2}} \dfrac{\text{d}t}{1 + (n\pi + t)^4(\dfrac{2}{\pi}t)^2} \le \sum\limits_{n = 0}^{+\infty}\displaystyle\int_{0}^{\frac{\pi}{2}} \dfrac{\text{d}t}{(n\pi + t)^4(\dfrac{2}{\pi}t)^2}$

---

在 $\displaystyle\sum\limits_{0}^{+\infty}\displaystyle\int_{0}^{\pi}\dfrac{\text{d}t}{1 + (t + n\pi)^2 \sin^2 t}$ 这一步直接换元：

令 $u = \tan t, \text{d}t = \dfrac{1}{1 + u^2}\text{d}u, \sin^2 t = \dfrac{u^2}{1 + u^2}$

$t$ 由 $0 \to \dfrac{\pi}{2}$, $u: 0 \to +\infty$，根据对称性：

$=\displaystyle\sum\limits_{n = 0}^{+\infty}2\displaystyle\int_{0}^{+\infty}\dfrac{\dfrac{1}{1 + u^2}\text{d}u}{1 + (n\pi + \pi)^2 \dfrac{u^2}{1 + u^2}}$

令 $k = (n\pi + \pi)$。

里面 $=2\displaystyle\int_{0}^{+\infty}\dfrac{\text{d}u}{(1 + u^2) + k^2u^2} = 2\displaystyle\int_{0}^{+\infty}\dfrac{\text{d}u}{1 + (1 + k^2)u^2}$

令 $v = \sqrt{1 + k^2}u, \text{d}v = \sqrt{1 + k^2}\text{d}u$

$=2\dfrac{1}{\sqrt{1 + k^2}}\displaystyle\int_{0}^{+\infty}\dfrac{\text{d}v}{1 + v^2} = \dfrac{1}{\sqrt{1 + k^2}} \pi \approx \dfrac{1}{n}$

根据比较判别法积分 (1) 发散，(2) 同理可得为 $\dfrac{1}{\sqrt{1 + k^4}}\pi$，收敛。

对于：$\displaystyle\int_{0}^{+\infty}\dfrac{\text{d}x}{1 + x^{\alpha}|\sin x|^{\beta}}$：

仍旧套用相同的方法，可以近似写成 $n^{-\frac{\alpha}{\beta}}$，

当 $\alpha > \beta$ 的时候原积分收敛。发散还需要另证。

### 一般项级数的收敛性

#### 定理 Cauchy 收敛原理

> 级数 $\sum\limits_{n = 1}^{+\infty}x_{n}$ 收敛的充分必要条件是：
> $\forall \epsilon > 0, \exists N \in \mathbb N^{\star}$，当 $m > n \ge N$ 时有 $|\sum\limits_{k = n + 1}^{m}x_{k}| < \epsilon$ 
证明：

级数收敛等价于部分和 $\{S_{n}\}$ 收敛。

所以可以改写成 $|S_{n} - S_{m}| < \epsilon$

#### 定理 Leibniz

> 设 $\{x_{n}\} \ge 0$, 称 $\sum\limits_{n = 1}^{+\infty}(-1)^{n + 1}x_{n}$ 为交错级数。
>
> 若 $x_{n}$ 单调递减，则称其为 Leibniz 级数。
>
> 对 Leibniz 级数，它是收敛的。

用 Cauchy 收敛原理即可。

$|\sum\limits_{k = n + 1}^{m}x_{k}| = |(x_{n + 1} - x_{n + 2}) + (x_{n + 3} - x_{n + 4}) + \cdots + (-1)^{m - n - 1}x_{m}|$

若 $m - n$ 是偶数：

奇数：

注：从证明可以得出结论：

若 $\sum\limits_{n = 1}^{+\infty}(-1)^{n + 1}x_{n}$ 为 Leibniz 级数：$|\sum\limits_{k = n + 1}^{m}x_{n}| \le x_{n + 1}$

#### 例题

> 证明 $\sum\limits_{n = 1}^{+\infty}(-1)^{n}\sin(\dfrac{1}{n})$ 收敛。

$\dfrac{1}{n} \le 1 < \dfrac{\pi}{2}$，故 $\sin (\dfrac{1}{n})$ 在 $[1, +\infty)$ 上单调递减。

根据 Leibniz 定理，级数收敛。


#### 例题

> 讨论 $\sum\limits_{n = 1}^{+\infty}\sin(\sqrt{n^2 + 1}\pi)$ 的收敛性。

一般的，$\sin(n\pi + \alpha) = (-1)^{n} \sin(\alpha)$

所以 $\sin(\sqrt{n^2 + 1}\pi) = \sin(n\pi + (\sqrt{n^2 + 1}\pi - n\pi)) = (-1)^{n} \sin(\sqrt{n^2 + 1}\pi - n\pi)$

而 $\sqrt{n^2 + 1} - n = \dfrac{n^2 + 1 - n^2}{\sqrt{n^2 + 1} + n}$ 在 $n$ 增大时递减。

所以根据 Leibniz 定理原级数收敛。

#### 引理 Abel 变换

> 设有数列 $\{a_{n}\}, \{b_{n}\}$，记 $B_{k} = \sum\limits_{n = 1}^{k}b_{n}$。
>
> 则 $\sum\limits_{k = 1}^{p}a_{k}b_{k} = a_{p}B_{p} + \sum\limits_{k = 1}^{p - 1}(a_{k + 1} - a_{k})B_{k}$

证明：

$=a_{1}b_{1} + \sum\limits_{k = 2}^{p}a_{k}b_{k} = a_{1}b_{1} + \sum\limits_{k = 2}^{p}a_{k}(B_{k} - B_{k - 1})$

$=a_{1}b_{1} + \sum\limits_{k = 2}^{p}a_{k}B_{k} - \sum\limits_{k = 1}^{p - 1}a_{k + 1}B_{k}$

$=a_{p}B_{p} + \sum\limits_{k = 1}^{p - 1}(a_{k + 1} - a_{k})B_{k}$

#### 引理 Abel 引理

> 设有数列 $\{a_{n}\}, \{b_{n}\}$，$B_{n}$ 为 $b_{n}$ 的部分和序列。
>
> 若 $B_{n}$ 有界即 $\exists M > 0 \text{ s.t. } \forall N, |B_{N}| \le M$，则：
>
> $|\sum\limits_{k = 1}^{p}a_{k}b_{k}| \le M(|a_{1}| + 2|a_{p}|)$

利用 Abel 变换容易证明。

#### 定理 Abel 判别法

> 若 $\{a_{n}\}$ 单调有界，$\sum\limits_{n = 1}^{+\infty}b_{n}$ 收敛，则 $\sum\limits_{n = 1}^{+\infty}a_{n}b_{n}$ 收敛。



#### 定理 Dirichlet 判别法

> 若 $\{a_{n}\}$ 单调递减趋于 $0$，$\sum\limits_{n = 1}^{+\infty}b_{n}$ 的部分和序列 $B_{n}$ 有界，则 $\sum\limits_{n = 1}^{+\infty}a_{n}b_{n}$ 收敛。

#### 例题

> 设 $\{a_{n}\}$ 单调趋于 $0$。
>
> 证明：
>
> 1) $\forall x \in \mathbb R$，级数 $\sum\limits_{n = 1}^{+\infty} a_{n}\sin(nx)$ 收敛。
>
> 2) $\forall x \in \mathbb R \ \{2k\pi : k \in \mathbb Z\}$，级数 $\sum\limits_{n = 1}^{+\infty}a_{n}\cos(nx)$ 收敛。

#### 例题

> 设 $\{x_{n}\}$ 是非负且单调递减的，且 $\{x_{n}\}$ 收敛。
>
> 证明 $\lim\limits_{n \to +\infty}nx_{n} = 0$

#### 例题

> 设 $\forall n \ge 1, x_{n} \ge 0$ 且 $x_{1} > 1$，$\sum\limits_{n = 1}^{+\infty}x_{n}$ 收敛。
>
> 证明：
>
> 1) $\sum\limits_{n = 1}^{+\infty}\dfrac{x_{n}}{S_{n}}$ 发散
>
> 2) $\sum\limits_{n = 1}^{+\infty}\dfrac{x_{n}}{(S_{n})^p}$ 发散，其中 $p > 1$ 为参数。
>
> 3) $\sum\limits_{n = 1}^{\infty}\dfrac{x_{n}}{S_{n}\ln S_{n}}$ 发散。
>
> 4) $\sum\limits_{n = 1}^{\infty}\dfrac{x_{n}}{S_{n}\ln^2 S_{n}}$ 收敛。

#### 例题

> 设 $\sum\limits_{n = 1}^{+\infty}x_{n}$ 收敛，$\forall n \ge 1, x_{n} > 0$。
>
> 记 $r_{n} = \sum\limits_{k = n + 1}^{+\infty}x_{k}$。
>
> 证明 
>
> 1) $\sum\limits_{n = 1}^{\infty}\dfrac{x_{n}}{\sqrt{r_{n}} \sqrt{r_{n - 1}}}$ 收敛。
>
> 2) $\sum\limits_{n = 1}^{+\infty}\dfrac{x_{n}}{r_{n - 1}}$ 发散。
>
> 3) $\sum\limits_{n = 1}^{+\infty}\dfrac{x_{n}}{\sqrt{r_{n - 1}}}$ 收敛。

#### 例题

> 设 $f$ 在 $[0, 1]$ 上二次连续可微，且 $\lim\limits_{x\to 0^{+}} \dfrac{f(x)}{x} = 0$。
>
> 证明：$\sum\limits_{n = 1}^{+\infty}f(\dfrac{1}{n})$ 绝对收敛。

#### 例题

> 证明 $\sum\limits_{n = 1}^{+\infty}\left[e - (1 + \dfrac{1}{1!} + \dfrac{1}{2!} + \dfrac{1}{3!} + \dfrac{1}{4!} + \cdots + \dfrac{1}{n!})\right]$ 收敛。
