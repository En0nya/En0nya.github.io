## 数学分析(I) Chapter 6 - 定积分

### 定义 定积分

> 设函数 $f$ 在闭区间 $[a, b]$ 上是有界的，在 $[a, b]$ 上任取分点 $x_0, x_1, x_2, \cdots, x_n$ 并作划分：
>
> $P: a = x_0 < x_1 < x_2 < \cdots < x_n = b$。
>
> 并在每个小区间 $x_{k - 1}, x_k$ 中取一点 $\xi_k$，记每个小区间长度为 $\Delta x_k = x_{k} - x_{k - 1}$。
>
> 令 $||P|| = \max\{\Delta x_k : k = 1,2,\cdots, n\}$，称为划分 $P$ 的范数
>
> 做和式 $\sum\limits_{k = 1}^{n}f(\xi_k)\Delta x_k$，当 $||P|| \to 0$，若极限 $\lim\limits_{||P|| \to 0}\sum\limits_{k = 1}^{n}f(xi_k)\Delta x_k$ 存在且与划分的方式 $\xi_k$ 有关，则称 $f$ 在 $[a, b]$ 上黎曼可积，其极限称 $f$ 在 $[a, b]$ 上的 Riemann 积分（定积分），记作 $I = \displaystyle\int_{a}^{b}f(x)\text{d}x$

注1：$||P|| \to 0$ 而不是 $n \to \infty$ 的原因是可能出现某一部分完全没有动，其它部分趋近无穷小的情况。

注2：$\displaystyle\int f(x)\text{d}x$ 和 $\displaystyle\int_{a}^{b}f(x)\text{d}x$ 一开始并没有直接关系，一个是逆运算一个是取极限，是牛顿莱布尼茨说明了二者的关联性。

注3：该和式称为划分 $P$ 的 Riemann 和。

注4：要求 $b \ge a$，若 $b < a$ 则 $\displaystyle\int_{a}^{b}f(x)\text{d}x$ 定义为 $-\displaystyle\int_{b}^{a}f(x)\text{d}(x)$

#### 例

> 判断 Dirichlet 函数 $D(x) = \begin{cases}1, x\in\mathbb Q \\ 0, x \in \mathbb Q\end{cases}$ 是否是 Riemann 可积的

取划分 $P: 0 = x_0 < x_1 < x_2 < \cdots < x_n = 1$。

作和式：$\sum\limits_{k = 1}^{n}D(\xi_k)\Delta x_k$。

若 $\xi_k$ 全部取有理数则 $\lim\limits_{||P|| \to 0} \sum\limits_{k = 1}^{n}D(\xi_k)\Delta x_k = 0$。

如果取无理数则 $=1$。

这说明和划分有关系，故 Dirichlet 函数不是 Riemann 可积的

### 定义 Darboux 和

> 设 $f$ 在 $[a, b]$ 上有界，设 $f$ 在 $[a,b]$ 上的上下确界分别为 $M, m$。
>
> 取 $[a,b]$ 的一个划分 $P : a = x_0 < x_1 < x_2 \cdots < x_n = b$
>
> 设 $f$ 在每一个小区间上的上下确界分别为 $M_k, m_k$.
>
> 即 $M_k = \sup\{f(x) : x \in [x_{k - 1}, x_k]\}, m_k = \inf \{f(x) : x \in [x_{k - 1}, x_{k}]\}$。
>
> 定义两个与 $P$ 相关的和式：
>
> $\overline{S}(P) = \sum\limits_{k = 1}^{n}M_k \Delta x_k, \underline{S}(P) = \sum\limits_{k = 1}^{n}m_k \Delta x_k$。
>
> 对于 $\forall \xi_k \in [x_{k - 1}, x_k]$ 有：
>
> $\underline{S}(P) = \sum\limits_{k = 1}^{n}m_k\Delta x_k \le \sum\limits_{k = 1}^{n}f(\xi_k)\Delta x_k \le \sum\limits_{k = 1}^{n}M_k \Delta x_k = \overline{S}(P)$
>
> 其中 $\overline{S}(P), \underline{S}(P)$ 分别称为 $f$ 关于划分 $P$ 的 Darboux 上和与下和。

Darboux 上和就是用几个“高估”的矩形面积逼近积分。

Darboux 下和就是用几个“低估”的矩形面积逼近积分。

可以看这张图：

![darboux.png](../../medias/Darboux.png)

灰色部分是上和，绿色部分是下和。

### 引理

> 在 $[a,b]$ 原有的分点中加入新的分点，则 Darboux 上和不增，下和不减。

证明：

Darboux 上和：$\sum\limits_{k = 1}^{n}M_k\Delta x_k$

在 $[x_{k - 1}, x_k]$ 中新加入一个分点 $d$，左右区间分别记为 $[l, d], [d, r]$

$\overline S(P)^{\prime} = \overline S(P) - M_k\Delta x_k + \sup\{f(x), x \in [l, d]\}(d - l) + \sup\{f(x), x \in [d, r]\}(r - d)$。

由于 $M_k \ge \sup\{f(x), x \in [l, d]\} + \sup\{f(x), x \in [d, r]\}, \Delta x_k = (d - l) + (r - d)$ 所以：

$\overline S(P)^{\prime} \le \overline S(P)$ 恒成立。

下和同理。

### 引理

> 对 $[a, b]$ 的所有划分，Darboux 上和作成的集合 $\{\overline{S}(P) | P 是 [a, b] 的划分\}$ 有下界 $m(b - a)$ 从而有下确界 $l$。
>
> 同样，下和作成的集合有上界 $M(b - a)$，从而有上确界 $L$。
>
> 其中 $M, m$ 为 $f$ 在 $[a, b]$ 上的上确界下确界。

$\sum\limits_{k = 1}^{n}M_k\Delta x_k \ge \sum\limits_{k = 1}^{n}m x_k = m(b - a)$。



### 引理

> 固定 $[a,b]$ 的两个划分 $P, Q$，总是会有 $\underline{S}(P) \le \overline{S}(Q)$ 从而：
>
> $\underline{S}(P) \le L \le l \le \overline{S}(Q)$
>
> 其中：$l = \inf\{\overline{S}(\Omega) | \Omega 是 [a,b] 的一个划分\}$
>
> $L = \sup \{\underline{S}(\Omega) | \Omega 是 [a,b] 的一个划分\}$

证明：

利用增加分点的引理将 $P, Q$ 合并为一个新的划分 $K$。可以知道：

$\begin{cases}\overline S(K) \le \overline S(Q), \overline S(K) \le \overline S(P) \\ \underline S(K) \ge \underline S(P), \underline S(K) \ge \underline S(Q)\end{cases}$

那么 $\underline S(P) \le \underline S(K) \le \overline S(Q)$。

接下来证明 $L \le l$：

固定 $Q$，让 $P$ 取 $[a, b]$ 的所有划分，因为任意划分 $P$ 的 Darboux 下和一定小于 $Q$ 的 Darboux 上和所以：

$L = \sup\{\underline S(P) : P 是 [a, b] 的划分\} \le \overline S(Q)$。

然后再让 $Q$ 取所有的划分，可以知道：$L \le l$
 
### 定理 Darboux 定理

> 对任意在 $[a, b]$ 上有界的函数 $f(x)$ 恒有：
>
> $\lim\limits_{||P|| \to 0}\underline{S}(P) = L, \lim\limits_{||P|| \to 0} \overline{S}(P) = l$
>
> 其中：
>
> $L = \sup \{\underline{S}(P) | P 是 [a,b] 的一个划分\}$
>
> $l = \inf\{\overline{S}(P) | P 是 [a,b] 的一个划分\}$

只讨论上和下确界和下和上确界的原因是上和上确界还有下和下确界是平凡的没有必要讨论。

这里的 $l$ 也可以写作 $I^{\star}$ 称为上积分，$L$ 也可以写作 $I_{\star}$ 称为下积分。

证明：

就是要证明 $\forall \epsilon > 0, \exists \delta \text{ s.t. } ||P|| < \delta : |\overline S(P) - l| < \epsilon$

设 $P$ 为 $[a, b]$ 的一个划分。

根据下确界的定义，$\exists P_\epsilon \text{ s.t. } P_{\epsilon} - \epsilon < l$。

设 $P_\epsilon$ 有 $N$ 个分点。

将 $P, P_\epsilon$ 合并得到新的划分 $Q$。

根据引理：$\begin{cases}\overline S(Q) \le \overline S(P) \\ \overline S(Q) \le \overline S(P_\epsilon)\end{cases}$

由于多一个分点，上和至多减少 $(M - m)||P||$，那么：$\overline S(Q) - \overline S(P) \le N(M - m)||P||$。

当 $||P|| \to 0$，不妨认为其 $< \delta$，取 $\delta = \dfrac{\epsilon}{N(M - m)}$

于是 $\overline S(P) - \overline S(Q) \le N(M - m)||P|| < \epsilon$。

因为 $\overline S(Q) \le \overline S(P_\epsilon) \le l + \epsilon$

所以 $\overline S(P) < \overline S(Q) + \epsilon \le l + 2\epsilon$

又因为 $l$ 是所有 $\overline S$ 的下确界所以有：

$l - \epsilon < l < \overline S(P) < l + \epsilon$，证毕。

证明思路大概就是，增加分点对上和的减少量在划分的范数很小的时候也很小，是可以被控制到不大于一个常数的，那么我随便找一个距离 $l$ 很近的划分 $P_\epsilon$，把它和 $P$ 合并起来，此时新的划分 $Q$ 就可以建立起 $P \to Q \to P_\epsilon \to l$ 这样的桥梁然后进行放缩得到结果。

### 定理 Riemann 可积的第一充分必要条件

> 设 $f$ 在 $[a,b]$ 上有界, $l, L$ 定义如上。
>
> 则 $f$ 在 $[a,b]$ 上 Riemann 可积（记作 $f \in R([a, b])$）的充分必要条件是：
>
> $L = l$，等价于 $\lim\limits_{||P|| \to 0} (\overline{S}(P) - \underline{S}(P)) = 0 \iff \lim\limits_{||P|| \to 0} \left[\sum\limits_{k = 1}^{n}(M_k - m_k)\Delta x_k\right] = 0$

证明：

必要性 $\Rightarrow$：

假设 $f$ 在 $[a, b]$ 上 Riemann 可积，那么：

对于 $[a, b]$ 的任意一个划分 $P: a = x_0 < x_1 < x_2 < \cdots < x_n = b$

以及任意一个点 $\xi_k \in [x_{k - 1}, x_k]$，

极限：$\lim\limits_{||P||\to 0}\sum\limits_{k = 1}^{n}(f(\xi_k))\Delta x_k = A$ 存在，且 $A$ 与 $[a, b]$ 的划分 $P$ 无关，也与 $\xi_k$ 的选择无关。

这个条件等价于：$\forall \epsilon > 0, \exists \delta > 0 \text{ s.t. } ||P|| < \delta : |\sum\limits_{k = 1}^{n}f(\xi_k)\Delta x_k - A| < \epsilon$

设 $M_k = \sup\{f(x): x \in [x_{k - 1}, x_k]\}, k = 1,2,3,\cdots,n$

根据上确界的定义，对前面的 $\epsilon > 0, \exists \eta_k \in [x_{k - 1}, x_k] \text{ s.t. } M_k - \epsilon < f(\eta_k) \le M_k$

即 $0 \le M_k - f(\eta_k) < \epsilon$

那么 $|\overline{S}(P) - \sum\limits_{k = 1}^{n} f(\eta_k)\Delta x_k|=|\sum\limits_{k = 1}^{n}\left[M_k - f(\eta_k)\right]\Delta x_k| \le (b-a)\epsilon$

上面的等价条件当然可以写作：$|\sum\limits_{k = 1}^{n}f(\eta_k)\Delta x_k - A| < \epsilon$

根据三角不等式：$|\overline{S}(P) - A| \le |\overline{S}(P) - \sum\limits_{k = 1}^{n}f(\eta_k)\Delta x_k| + |\sum\limits_{k = 1}^{n}f(\eta_k)\Delta x_k - A| < c \epsilon$。

当然，条件是 $||P|| < \delta$。

根据 $\epsilon \delta$ 语言，可以写出原式。

下和同理。

充分性 $\Leftarrow$：$\lim\limits_{||P|| \to 0} \overline{S}(P) = \lim\limits_{||P|| \to 0} \underline{S}(P) = A$

对于 $[a, b]$ 的任意一个划分 $P: a = x_0 < x_1 < x_2 < \cdots < x_n = b$，任取 $\xi_k \in [x_{k - 1}, x_k]$

显然可以得知：

和式：$\sum\limits_{k = 1}^{n}m_k\Delta x_k \le \sum\limits_{k = 1}^{n}f(\xi_k)\Delta x_k \le \sum\limits_{k = 1}^{n}M_k\Delta x_k$

前者就是下和，后者就是上和。

令 $||P|| \to 0$，只需要用两边夹法则就可以得到。

### 定理  Riemann 可积的第二充分必要条件

> 设 $f$ 在 $[a, b]$ 上有界。 
>
> 则：
>
> $f \in R([a, b]) \iff \forall \sigma, \epsilon > 0, \exists \delta > 0 \text{ s.t. when } P: a = x_0 < x_1 < x_2 < \cdots < x_n = b \text { satisify } ||P|| < \delta: \forall \text{ range s.t. }w_j \ge \epsilon, \text{the sum of length of these range} \le \sigma, w_j = M_j - m_j, j = 1,2,3,\cdots,n$
>
> 容易验证：$w_j = \sup \{|f(x) - f(y)| : x, y \in [x_{k - 1}, x_k]\}$

一个理解就是，这个函数如果要是 Riemann 可积，它大幅度震荡的地方非常小，变化相对来说比较平缓。

由此也可以看出连续函数一定是 Riemann 可积的。

中间的这个条件就是：$\sum\limits_{w_j \ge \epsilon}^{}\Delta x_j < \sigma$

它是从几何意义上给出了一个 Riemann 可积的描述。

必要性：$\Rightarrow$

假设 $f$ 是 Riemann 可积的，可以用第一充分必要条件：

$\forall \sigma, \epsilon > 0, \exists \delta > 0 \text{ s.t. } ||P|| < \delta : \sum\limits_{k = 1}^{n}(M_k - m_k)\Delta x_k < \epsilon$

可以发现这就是 $w_j\Delta x_k$

假设 $w_j \ge \epsilon$ 的这些区间为 $[x_{j_t - 1}, x_{j_t}], t = 1,2,3,\cdots s$

那么：

$\sum\limits_{w_j \ge \epsilon}^{}\Delta x_j = \sum\limits_{t = 1}^{s}\Delta x_{j_t}$

两边同乘 $\epsilon$：

$\epsilon \sum\limits_{w_j \ge \epsilon}^{}\Delta x_j = \epsilon\sum\limits_{t = 1}^{s}\Delta x_{j_t} \le \sum\limits_{t = 1}^{s}w_{j_t} \Delta x_{j_t}$

正数的部分求和一定小于整体：

$\le \sum\limits_{k = 1}^{n}w_k \Delta x_k < \epsilon$

然后发现会被消掉，希望后面能有 $\sigma$。

因为$\delta-\epsilon$ 语言的任意性，$\sigma$ 又是一个常数。

所以后面的 $\epsilon$ 改写为 $\sigma \epsilon$ 就可以证明。

充分性 $\Leftarrow$：

当 $\sum\limits_{w_j \ge \epsilon}^{}\Delta x_j < \sigma$ 时：

下证 $f$ 是 Riemann 可积的。

设这些小区间有：$[x_{j_t - 1}, x_{j_t}], t = 1,2,3,\cdots, s$

满足：$\sum\limits_{t = 1}^{s}\Delta x_{j_t} < \sigma$

只需要想办法写成第一充要条件的形式。

$= \sum\limits_{k = 1}^{n}w_k\Delta x_k = \sum\limits_{t = 1}^{s}w_{j_t}\Delta x_{j_t} + \sum\limits_{k \in\{1,2,3,\cdots n\} /\{j_1, j_2, \cdots j_s\}} w_k \Delta x_k < \sum\limits_{t = 1}^{s}(M - m)\Delta x_{j_t} + \epsilon\sum\limits_{k = 1}^{n}\Delta x_k$

这里放缩了两步，前者用了 $w_j \le M - m$，后者用了 $w_j < \epsilon$ 的条件再二次放大。

上面: $< (M - m)\sigma + (b - a)\epsilon$

也就是 $\forall \sigma, \epsilon > 0, \exists \delta > 0, ||P|| < \delta : \sum\limits_{k = 1}^{n}w_k\Delta x_k < (M - m)\sigma + (b - a)\epsilon$。

由于 $\sigma, \epsilon$ 的任意性，

可以知道 $\lim\limits_{||P|| \to 0} \sum\limits_{k = 1}^{n} w_k \Delta x_k = 0$。

### 定理  Riemann 可积的第三充分必要条件

> 假设 $f$ 在闭区间 $[a, b]$ 上有界
>
> 则: $f\in R([a, b])\iff$ 对于任意 $\eta > 0$，都能够找到一个 $[a, b]$ 的划分 $P: a = x_0 < x_1 < x_2 < \cdots < x_n = b$ 使得与之对应的振幅满足：
>
> $\sum\limits_{k = 1}^{n} w_k \Delta x_k < \eta$

证明：

$\Rightarrow$ 是显然的。

$\Leftarrow$：

$\forall \epsilon, \sigma > 0$，这里想要使用第二充要条件。

令 $\eta = \sigma \epsilon$。

由假设：存在划分 $P: a = x_0 < x_1 < x_2 < \cdots < x_n = b$ 使得：$\sum\limits_{k = 1}^{n} w_k\Delta x_k < \eta$

用第二充要条件，拿出来振幅比较大的：

$\sum\limits_{w_k \ge \epsilon}^{}\Delta \epsilon w_j \le \sum\limits_{k = 1}^{n}w_k\Delta x_k < \sigma \epsilon$

那么 $f$ 就是 Riemann 可积的。

---

实际使用的时候一般是：

$\forall \eta > 0, \exists \delta > 0, \text{ s.t. when } ||P|| < \delta : \sum\limits_{k = 1}^{n}w_k\Delta x_k < \eta$

当然这个也是有几何意义的：

### 命题

注意到谈论 Riemann 可积的时候都有“有界”这个前提。

是否能够去掉这个前提？

> 若 $f$ 在 $[a,b]$ 上 Riemann 可积，（即：存在一个常量 $A\in \mathbb R$，使得 $\forall \epsilon > 0, \exists \delta \text{ s.t. } \forall P: a=x_0 < x_1 < x_2 <\cdots < x_n = b, \text{ if } ||P|| < \delta \text{ then } |\sum\limits_{k = 1}^{n}f(\xi_k)\Delta x_k - A| < \epsilon$，其中 $\xi_k \in [x_{k - 1}, x_k], k = 1,2,\cdots, n$ 是任取的）
>
> 那么 $f$ 在 $[a, b]$ 上一定有界。
>
> 但是反之不然（反例：Dirichlet 函数）

只能考虑反证法：

假设 $f$ 在 $[a,b]$ 上是无界的。

想要证明 $f$ 不是 Riemann 可积的，那么就是证明 Riemann 可积的否命题：

$\forall B \in \mathbb R, \exists \epsilon_0 > 0, \text{ s.t. } \forall \delta > 0, \exists Q: a = x_0 < x_1 < x_2 < \cdots < x_n= b \text { and } \xi_k \in [x_{k - 1}, x_k], \text{ though } ||Q|| < \delta, |\sum\limits_{k = 1}^{n}f(\xi_k)\Delta x_k - B| \ge \epsilon_0$

由于 $f$ 无界，则必定存在某个小区间 $[x_{j -1}, x_{j}]$ 使得 $f$ 无界。

在这个小区间中，可以挑出一点 $\xi_j \in [x_{j - 1}, x_j] \text{ s.t. } |f(\xi_j)| > ?$（目前这里是随便取的，因为无界所以之后再来调也行） 

在其余的每个小区间，各取一点 $\xi_k \in [x_{k - 1}, x_k], k \not= j$。

$|\sum\limits_{k = 1}^{n} f(\xi_k)\Delta x_k - B|=|\sum\limits_{k \not= j}^{}f(\xi_k)\Delta x_k + f(\xi_j)\Delta x_j - B|$

$\ge |f(\xi_j)|\Delta x_j - |B| - |\sum\limits_{k \not=j}^{}f(\xi_k)\Delta x_k|$

因为这里是存在一个 $Q$，故划分是固定的，第三项是个常数 $C$。

那么上面的 $?$ 取 $\dfrac{|B| + 2|C|}{\Delta x_j}$。

这样对于这个 $\xi_j$，上式：

$> \dfrac{|B| + 2|C|}{\Delta x_j}\Delta x_j - |B| - |C| = |C|$。

由于 $|C|$ 是一个常数，那么就找到了 $\epsilon_0$。

### 可积函数类

#### 定理 闭区间连续函数

> 闭区间连续函数总是 Riemann 可积
>
> 即：$C([a, b]) \subset R([a, b])$

证明：

利用 Cantor 定理，闭区间上连续函数一定是一致连续的。

从而：$\forall \epsilon > 0, \exists \delta=\delta(\epsilon) \text{ s.t. } x, y\in[a, b], |x - y| < \delta : |f(x) - f(y)| < \epsilon$

很容易想到使用第一充要条件来判定

任取 $[a, b]$ 的一个划分 $P$，当 $||P|| = \max\{\Delta x_k : k = 1,2,3,\cdots n\} < \delta$ 时：

根据一致连续：一定会有 $|f(x) - f(y)| < \epsilon, \forall x, y \in [x_{k-1}, x_{k}]$

那么 $\sum\limits_{k = 1}^{n}(M_k - m_k)\Delta x_k \le \epsilon\sum\limits_{k = 1}^{n}\Delta x_k = \epsilon(b - a)$。

那么就证完了。

#### 定理 有限间断点

> 在 $[a, b]$ 上仅有有限个间断点的有界函数也是 Riemann 可积的。

证明：

考虑归纳法：

只需要证明 $[a, b]$ 上仅有一个间断点。

分三种情况：

$c = a, c \in (a, b), c = b$。

其实本质没有任何区别，考虑 $c = b$。

想用第三充要条件来做。

任取 $0 < \epsilon < b - a$，取 $\eta$ 满足 $\eta < \epsilon < b - a$。

设 $m < f(x) < M$。

由：$f$ 在 $[a, b - \eta]$ 在 $[a, b]$ 上 Riemann 可积。

所以存在 $[a, b]$ 的一种划分 $P: a=x_0 < x_1 < x_2 < \cdots < x_n = b - \eta \text{ s.t. } \sum\limits_{k = 1}^{n}w_k\Delta x_k < \epsilon$

设 $f$ 在 $[b - \eta, b]$ 上的振幅为 $w$，则 $w(b - (b - \eta)) = w\eta < b$

有：

$\sum\limits_{k = 1}^{n}w_k\Delta x_k + w\eta < \epsilon + (M - m)\eta$

于是证完了。

#### 定理 闭区间单调函数

> 闭区间 $[a, b]$ 上的单调函数是 Riemann 可积的。

证明，不妨认为 $f$ 在 $[a, b]$ 上单调递增。

$\forall \epsilon > 0$，任取 $[a, b]$ 的一个划分 $P: a= x_0 < x_1 < x_2 < \cdots < x_n = b$。

$\sum\limits_{k = 1}^{n}w_k \Delta x_k = \sum\limits_{k = 1}^{n}(f(x_k) - f(x_{k - 1}))\Delta x_k \le \sum\limits_{k = 1}^{n}[f(b) - f(a)]\Delta x_k = \left[f(b) - f(a)\right]\left(b - a\right)$

然后发现这个放缩不够彻底：

$\le \sum\limits_{k = 1}^{n}[f(x_k) - f(x_{k - 1})]\cdot ||P|| < \delta \sum\limits_{k = 1}^{n}[f(x_k) - f(x_{k - 1})] = [f(b) - f(a)]\delta < \epsilon$

#### 定理 Riemann 函数

> $\zeta(x) =\begin{cases}\dfrac{1}{p},x = \dfrac{p}{q} \\ 1, x = 0 \\ 0, x \in \mathbb R / \mathbb Q\end{cases}$ 是 Riemann 可积的

证明：

由于 $\zeta(x)$ 在 $\mathbb R$ 上是以 $1$ 为周期的函数。

由于 $\forall \epsilon > 0$ 在 $[0, 1]$ 上，使得 $\zeta(x) \ge \epsilon$ 的$x$ 只有有限个，设为 $y_1, y_2, \cdots y_N$，$N$ 和 $\epsilon$ 有关。

这里用第二充要条件。

任取 $\sigma > 0$，对于 $[0, 1]$ 的任意一个划分 $P: 0 = x_0 < x_1 < x_2 < \cdots < x_n = 1$。

当 $||P|| < \delta = \dfrac{\sigma}{2N}$ 时：根据 $\ge \epsilon$ 的那些小区间就是包含 $y_1, y_2,\cdots y_n$ 的那些区间。

这些小区间最多有 $2N$ 个，所以

$\sum\limits_{w_k \ge \epsilon}^{} \Delta x_k \le \sum\limits_{w_k \ge \epsilon}^{}||P|| \le 2N ||P|| < \sigma$

证毕。

#### 定理 复合函数

> 若 $f \in R([a, b]), g \in R([\alpha, \beta])$ 且 $g$ 的值域包含在 $f$ 中，那么 $f(g(x)) \in R([\alpha, \beta])$。

### Riemann 积分的性质

#### 命题

> 若 $f\in R([a, b]), \forall c \in \mathbb R, cf \in R([a, b])$，且 $\displaystyle\int\limits_{a}^{b} cf(x)\text{d}x = c\displaystyle\int_{a}^{b}\text{d}x$。

设划分 $P: a=x_0 < x_1 < x_2 < \cdots < x_n=b$，

在第 $k$ 个小区间 $[x_{k-1},x_k]$ 上：$M_k = \sup f$，$m_k = \inf f$，$w_k = M_k - m_k$。

先看 $c\ge 0$：

对 $cf$：$\sup (cf) = cM_k$，$\inf (cf) = cm_k$，

振幅 $w_k(cf) = cM_k - cm_k = c w_k$。

Darboux 上和、下和：

$\overline{S}_{cf}(P) = \sum cM_k\Delta x_k = c\sum M_k\Delta x_k = c\overline{S}_f(P)$

$\underline{S}_{cf}(P) = \sum cm_k\Delta x_k = c\sum m_k\Delta x_k = c\underline{S}_f(P)$

因为 $f$ 可积，对任意 $\epsilon > 0$，存在划分 $P$ 使得 $\overline{S}_f(P) - \underline{S}_f(P) < \frac{\epsilon}{|c| + 1}$，

于是 $\overline{S}_{cf}(P) - \underline{S}_{cf}(P)
= c\big(\overline{S}_f(P) - \underline{S}_f(P)\big) < \epsilon$，

所以 $cf$ 可积。

$c < 0$：

此时 $\sup (cf) = c m_k$，$\inf (cf) = c M_k$，

振幅仍然满足：$w_k(cf) = |c| w_k$，

$\overline{S}_{cf}(P) - \underline{S}_{cf}(P)
= |c|\big(\overline{S}_f(P) - \underline{S}_f(P)\big) < \epsilon$，

依然可积。

#### 命题

> 若 $f, g \in R([a, b])$，则 $(f+-g) \in R([a, b])$ 且 $\displaystyle\int_{a}^{b}(f(x) +- g(x))\text{d}x = \displaystyle\int_{a}^{b}f(x)\text{d}x + \displaystyle\int_{a}^{b}g(x)\text{d}x$

显然。

#### 命题

> 若 $f, g \in R([a,b])$，则 $fg\in R([a, b])$。

可积函数必有界，设 $|f|\le M,\quad |g|\le M$

取划分：$P: a= x_0 < x_1 < x_2 < \cdots < x_n=b$

在 $[x_{k-1},x_k]$ 上任取两点 $x\prime,x\prime\prime$：

$|f(x\prime)g(x\prime)-f(x\prime\prime)g(x\prime\prime)| \le |f(x\prime)||g(x\prime)-g(x\prime\prime)| + |g(x\prime\prime)||f(x\prime)-f(x\prime\prime)|\le M w_k(g) + M w_k(f)$

因此 $w_k(fg) \le M\big(w_k(f)+w_k(g)\big)$

于是 $\sum w_k(fg)\Delta x_k
\le M\left( \sum w_k(f)\Delta x_k + \sum w_k(g)\Delta x_k \right)$

因为 $f,g$ 可积，对任意 $\epsilon>0$，可取同一划分 $P$，使得

$\sum w_k(f)\Delta x_k < \frac{\epsilon}{2M},\quad\sum w_k(g)\Delta x_k < \frac{\epsilon}{2M}$

代入得

$\sum w_k(fg)\Delta x_k < \epsilon$

所以 $fg$ 可积。

#### 命题

> 若 $f\in R([a, b])$，则 $|f| \in R([a, b])$，反之不然。

由绝对值不等式：
$\big|\,|f(x^\prime)| - |f(x^{\prime\prime})|\,\big| \le |f(x^\prime) - f(x^{\prime\prime})|$，

所以 $w_k(|f|) \le w_k(f)$。

于是 $\sum w_k(|f|)\Delta x_k \le \sum w_k(f)\Delta x_k$。

因为 $f$ 可积，对任意 $\epsilon>0$，存在 $P$ 使得 $\sum w_k(f)\Delta x_k < \epsilon$，

从而 $\sum w_k(|f|)\Delta x_k < \epsilon$，

故 $|f|$ 可积。

反例：$f(x) = \begin{cases}1, x \in \mathbb Q \\ 0, x \not\in \mathbb Q\end{cases}$

#### 命题

> 若 $a < c < b, f\in R([a,c]), f\in R([c, b])$，则 $f \in R([a, b])$ 且 $\displaystyle\int_{a}^{c}f(x)\text{d}x + \displaystyle\int_{c}^{b}f(x)\text{d}x = \displaystyle\int_{a}^{b}f(x)\text{d}x$，反之亦然。

先证明 $\Rightarrow$：

设 $f\in R([a,b])$。

对 $[a,c]$ 的任意划分 $P_1$，可扩充为 $[a,b]$ 的划分 $P$。

由 $f$ 在 $[a,b]$ 可积，对任意 $\epsilon>0$，存在 $P$ 使得

$\overline{S}(P) - \underline{S}(P) < \epsilon$，

限制在 $[a,c]$ 上的和自然更小，故 $f\in R([a,c])$。

同理 $f\in R([c,b])$。

然后 $\Leftarrow$：

设 $P_1: a=x_0 < x_1 < x_2 <\cdots < x_m=c; P_2: c=x_0 < x_1 < x_2 <\cdots < x_n=b$，令 $P=P_1\cup P_2$，则 $P$ 是 $[a,b]$ 的划分：

$P: a=x_0 < x_1 < x_2 <\dots < x_m = c < \cdots < x_{m+n}=b$。

因为 $f\in R[a,c],R[c,b]$，对任意 $\epsilon>0$，可取 $P_1,P_2$ 使得

$\overline{S}(P_1)-\underline{S}(P_1) < \frac{\epsilon}{2}$，$\overline{S}(P_2)-\underline{S}(P_2) < \frac{\epsilon}{2}$。

对整个区间：
$\overline{S}(P) = \overline{S}(P_1)+\overline{S}(P_2)$，

$\underline{S}(P) = \underline{S}(P_1)+\underline{S}(P_2)$，

所以 $\overline{S}(P) - \underline{S}(P) < \epsilon$ 证毕。


由 Darboux 定理，令 $||P|| \to 0$：

$\overline{S}(P)\to \displaystyle\int_{a}^{b} f$，$\overline{S}(P_1)\to \displaystyle\int_{a}^{c} f$，$\overline{S}(P_2)\to \displaystyle\int_{c}^{b} f$，

而 $\overline{S}(P) = \overline{S}(P_1) + \overline{S}(P_2)$，所以

$\displaystyle\int_{a}^{b} f = \displaystyle\int_{a}^{c} f + \displaystyle\int_{c}^{b} f$。
