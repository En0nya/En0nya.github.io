## 数学分析(I) Chapter 7 广义积分

### 广义积分的定义 & 计算

#### 定义 积分区间为无穷的广义积分

> 设 $a \in \mathbb R$ 为常量，$f$ 在 $[0, +\infty)$ 上有定义。
>
> 若 $\forall A > a$，$f$ 在 $[a, A]$ 上 Riemann 可积，且 $\lim\limits_{A \to +\infty}\displaystyle\int_{a}^{A}f(x)\text{d}x$ 存在且有限。
> 
> 那么称 $f$ 在 $[0, +\infty)$ 上的广义积分收敛。
>
> 记作 $\displaystyle\int_{a}^{+\infty}f(x)\text{d}x = \lim\limits_{A \to +\infty}\displaystyle\int_{a}^{A}f(x)\text{d}x$，即为积分区间为无穷的广义积分。

注记：

1) 可以类比定义 $\displaystyle\int_{-\infty}^{a}f(x)\text{d}x$，左极限存在即可。
2) 如果不存在则称为广义积分发散
3) $\displaystyle\int_{-\infty}^{+\infty}f(x)\text{d}x = \lim\limits_{A \to +\infty, B \to -\infty} \displaystyle\int_{B}^{A}f(x)\text{d}x$，如果右边极限存在且有限则称广义积分收敛。
4) 之后只有 $\displaystyle\int_{a}^{+\infty}f(x)\text{d}x, \displaystyle\int_{-\infty}^{a}f(x)\text{d}x$ 均收敛才称 $\displaystyle\int_{-\infty}^{+\infty}f(x)\text{d}x$ 收敛。

#### 例题

> $P \in \mathbb R$  判断 $\displaystyle\int_{1}^{+\infty}\dfrac{1}{x^p} \text{d}x$ 的收敛性

任取 $A > 1$，$\displaystyle\int_{1}^{A}\dfrac{1}{x^p}\text{d}x = \begin{cases}\dfrac{1}{1 - p}x^{1 - p}\vert_{1}^A =\dfrac{A^{1 - p} - 1}{1 - p} &p \not=1\\ \ln A &p = 1\end{cases}$

1) $P = 1$，$\ln A$ 发散，极限不存在
2) $P < 1$，原式发散，极限不存在。
3) $P > 1$，原式 $\lim = \dfrac{1}{1 - p}$

故当 $P > 1$ 时，原广义积分收敛。

#### 定义 有限区间上无界函数的广义积分

> 对于 $a, b \in \mathbb R$，若 $b$ 是 $f$ 的一个奇点（在 $b$ 的左邻域上无界）
>
> 且对于 $\forall 0 < y < b - a$，$f$ 在 $[a, b - y]$ 上 Riemann 可积，从而有界。
>
> 且极限 $\lim\limits_{y \to 0^+} \displaystyle\int_{a}^{b - y}f(x)\text{d}x$ 存在，那么称广义积分 $\displaystyle\int_{a}^{b}f(x)\text{d}x$ 收敛。
>
> 同理可以定义以 $a$ 为奇点的广义积分 $\displaystyle\int_{a}^{b}f(x)\text{d}x = \lim\limits_{y \to 0^+} \displaystyle\int_{a + y}^{b}f(x)\text{d}x$

补充：称 $b$ 为 $f$ 的奇点，如果 $f$ 在 $b$ 点无定义。例如 $f(x) = \dfrac{1}{x}, b = 0$

其实本质就是函数趋向无穷的那个临界点。

注记：

1) 如果 $c \in [a, b]$ 是 $f$ 的一个奇点，对于广义积分 $\displaystyle\int_{a}^{b}f(x)\text{d}x$，考虑 $\displaystyle\int_{a}^{b}f(x)\text{d}x = \displaystyle\int_{a}^{c}f(x)\text{d}x + \displaystyle\int_{c}^{b}f(x)\text{d}x$
    
    规定当两项同时收敛时，$\displaystyle\int_{a}^{b}f(x)\text{d}x$ 收敛。

    将这样的广义积分叫做无界函数的广义积分 / 积分区间上有奇点的广义积分 / 瑕积分。

#### 例题

> $p \in \mathbb R$，判断 $\displaystyle\int_{0}^{1}\dfrac{1}{x^p}\text{d}x$ 的收敛性。

$0$ 是 $\dfrac{1}{x^p}$ 的一个奇点。那么取 $0 < y < 1$：

$= \lim\limits_{y \to 0^+}\displaystyle\int_{0 + y}^{1}\dfrac{1}{x^p}\text{d}x = \begin{cases}\dfrac{1 - y^{1 - p}}{1 - p}, &p\not=0 \\ -\ln y &p=0\end{cases}$

所以 $p < 1$ 的时候 $\displaystyle\int_{0}^{1}\dfrac{1}{x^p}\text{d}x$ 收敛。

由此我们也可以看出，$\displaystyle\int_{0}^{+\infty}\dfrac{1}{x^p} = \displaystyle\int_{0}^{1} + \displaystyle\int_{1}^{+\infty}$ 总是发散的，因为前后两个广义积分并不能同时收敛。

#### 两种积分的互换

两种积分本质上是统一的。

可以这么理解，前一种广义积分的奇点在无穷远处，后一种在有限区间的端点

我们只需要令 $x = \dfrac{1}{t}$ 即可：

$\displaystyle\int_{a}^{+\infty}f(x)\text{d}x = \displaystyle\int_{\frac{1}{a}}^{0}f(\dfrac{1}{t})\text{d}(\dfrac{1}{t}) = \displaystyle\int_{0}^{\frac{1}{a}}f(\dfrac{1}{t})\cdot \dfrac{1}{t^2}\text{d}t$

奇点就从 $+\infty$ 变为 $0$ 了。

两种积分定义里都是只写了一边/端点为奇点的情况。

所以区间内/正负无穷的情况就是两个拼起来。

#### 定义 Cauchy 主值

> 若 $\lim\limits_{A \to +\infty} \displaystyle\int_{-A}^{A}f(x)\text{d}x$ 存在。
>
> 那么称 $\lim\limits_{A \to +\infty} \displaystyle\int_{-A}^{A}f(x)\text{d}x$ 为 $\displaystyle\int_{-\infty}^{+\infty}f(x)\text{d}x$ 的 Cauchy 主值。
>
> 记作 $(\mathrm{C.P.V.})\displaystyle\int_{-\infty}^{+\infty}f(x)\text{d}x = \lim\limits_{A \to +\infty}\displaystyle\int_{A}^{-A}f(x)\text{d}x$
>
> 对于区间内有奇点的广义积分，则是 $(\mathrm{C.P.V.})\displaystyle\int_{a}^{b}f(x)\text{d}x = \lim\limits_{\epsilon \to 0^+} \displaystyle\int_{a}^{c - \epsilon}f(x)\text{d}x + \displaystyle\int_{c + \epsilon}^{b}f(x)\text{d}x$

可以证明的是：

若 $\displaystyle\int_{-\infty}^{+\infty}f(x)\text{d}x$ 收敛，那么 $(\mathrm{C.P.V.})\displaystyle\int_{-\infty}^{+\infty}f(x)\text{d}x = \displaystyle\int_{-\infty}^{+\infty}f(x)\text{d}x = \lim\limits_{A \to +\infty, B \to -\infty}\displaystyle\int_{B}^{A}f(x)\text{d}x$

但是反过来，$(\mathrm{C.P.V.})$ 存在不代表原式收敛。

反例：

$\displaystyle\int_{-1}^{1}f(x)\text{d}x = \displaystyle\int_{-1}^{0}f(x)\text{d}x + \displaystyle\int_{0}^{1}f(x)\text{d}x$，这两边并不是**同时**收敛的，因为极限里控制变量是两个。

但是 $(\mathrm{C.P.V.})$ 则是同一个，根据奇函数的性质：

$(\mathrm{C.P.V.})\displaystyle\int_{-1}^{1}f(x)\text{d}x = 0$。

#### 例题

> 计算 $\displaystyle\int_{0}^{+\infty}\dfrac{\text{d}x}{1 + x^2}, \displaystyle\int_{0}^{+\infty}\dfrac{\text{d}x}{(1 + x^2)(1 + x^{2026})}$

1) $=\lim\limits_{A \to +\infty}\displaystyle\int_{0}^{A}\dfrac{\text{d}x}{1 + x^2} = \lim\limits_{A \to +\infty}\arctan x\vert_{0}^{A} = \dfrac{\pi}{2} - \lim\limits_{A \to +\infty}\arctan x = \dfrac{\pi}{2}$

2) 这种 $0 \sim +\infty$，分子有 $(2 + x^{\alpha})$ 的，很多时候都会用倒数代换。

令 $I =$ 原式，$t = \dfrac{1}{x} \Rightarrow I = \displaystyle\int_{+\infty}^{0}\dfrac{d(\dfrac{1}{t})}{(1 + (\dfrac{1}{t})^2)(1 + (\dfrac{1}{t})^{2026})}$ 

$= \displaystyle\int_{0}^{+\infty}\dfrac{t^{2026}}{(1 + t^2)(1 + t^{2026})}\text{d}t$

将 $t$ 换成 $x$，和 $I$ 相加可以得到：$2I = \displaystyle\int_{0}^{+\infty}\dfrac{1}{(1 + x^2)}\text{d}x = \dfrac{\pi}{2}$

### 广义积分收敛性的判别法

#### 定理 Cauchy 收敛原理

> 设 $f$ 在 $[a, + \infty)$ 上没有奇点。
>
> $\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 收敛 $\iff \forall \epsilon > 0, \exists A > a \text{ s.t. } A_2 > A_1 \ge A : |\displaystyle\int_{A_1}^{A_2}f(x)\text{d}x| < \epsilon$

证明：

$\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 收敛就是 $\lim\limits_{A \to +\infty}\displaystyle\int_{a}^{A}f(x)\text{d}x$ 存在。

用 N-L：$\lim\limits_{A \to +\infty} |F(A) - F(a)|$ 存在即 $\lim\limits_{A \to +\infty}F(A)$ 存在。

转写成 $\delta - \epsilon$ 语言：

$\forall \epsilon > 0, \exists N, \forall A_2 > A_1 \ge N, |F(A_2) - F(A_1)| < \epsilon$

展开后就是原式。

理解：

可以和数列收敛对比，意义就是：

**只要充分靠近奇点的任意一小段积分都能任意小，整个积分就收敛。**

注：不收敛可以类比写出：设 $f$ 在 $[a, +\infty)$ 上没有奇点。

$f$ 的广义积分不收敛 $\iff \exists \epsilon_0, \forall A > a, \exists A_2 > A_1 \ge A, |\displaystyle\int_{A_1}^{A_2}f(x)\text{d}x|\ge \epsilon_0$

#### 定义 绝对收敛

> 设 $f$ 在 $[a, +\infty)$ 上无奇点，且 $\forall [a, b] \subset [a, +\infty), f \in R([a, b])$。
>
> 如果广义积分 $\displaystyle\int_{a}^{+\infty}|f(x)|\text{d}x$ 收敛，则称 $\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 绝对收敛。

有什么用？

#### 命题

> 若 $\displaystyle\int_{a}^{+\infty}|f(x)|\text{d}x$ 收敛，则 $\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 必收敛。
>
> 反之不然。

证明：

先绝对值再积分之后绝对值小于 $\epsilon$ 只能够 $\Rightarrow$ 不绝对值积分之后绝对值小于 $\epsilon$

写一下等价条件就可以。

#### 定义 条件收敛

> 收敛但不绝对收敛的广义积分，称为条件收敛的广义积分。

#### 定理 比较判别法

> 设 $f$ 在 $[a, +\infty)$ 上无奇点，$\forall [a, b] \subset [a, +\infty), f \in R([a, b])$。
>
> 存在常量 $c > 0 \text{ s.t. } 0 \le f(x) \le c \psi(x), x \in [a, +\infty)$。
>
> 则：
>
> 当 $\displaystyle\int_{a}^{+\infty}\psi(x)\text{d}x$ 收敛时，$\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 也收敛。
>
> 当 $\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 发散时，$\displaystyle\int_{a}^{+\infty}\psi(x)\text{d}x$ 也发散。

两个都是充分条件。证明只需要直接写定义然后用这个 $c$ 把 $\epsilon$ 变成 $c\epsilon$ 就可以了。

#### 定理 比较判别法的极限形式

> 设 $[a, +\infty)$ 上恒有 $f(x) \ge 0, \psi(x) \ge 0$，且 $\lim\limits_{x \to +\infty}\dfrac{f(x)}{\psi(x)} = L$ 则：
>
> 1) 若 $0 < L < +\infty$，则 $\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 收敛 $\iff \displaystyle\int_{a}^{+\infty}\psi(x)\text{d}x$ 收敛
>
> 2) 若 $L = 0$，则当 $\displaystyle\int_{a}^{+\infty}\psi(x)\text{d}x$ 收敛时，$\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 收敛（$f$ 更低阶，没法推 $\psi$）
>
> 3) 若 $L = \infty$，则当 $\displaystyle\int_{a}^{+\infty}\psi(x)\text{d}x$ 发散时，$\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 发散（$f$ 更高阶，$\psi$ 发散则 $f$ 也发散）。

其实非常直观，肯定想转化成比较判别法。

证明 (1)：

根据 $\lim\limits_{x \to +\infty} \dfrac{f(x)}{\psi(x)} = L \Rightarrow \forall \epsilon > 0, \exists N \text{ s.t. } x > N : |\dfrac{f(x)}{\psi(x)} - L| < \epsilon$

取 $\epsilon = \dfrac{L}{2}$，那么 $\dfrac{L}{2}\psi(x) \le f(x) \le \dfrac{3L}{2}\psi(x)$

$\displaystyle\int_{N}^{+\infty}\psi(x)\text{d}x$ 收敛显然说明 $\displaystyle\int_{a}^{+\infty}\psi(x)\text{d}x$ 收敛。

那么由于 $\dfrac{L}{2}\psi(x) \le f(x)$，根据比较判别法可以得到一边。

另外一边也是同理

(2)：

取 $\epsilon = 1$ 可以得到 $0 \le f(x) < \psi(x)$。

比较判别法即可。

(3)：

反转一下，变成 $0 \le \psi(x) < f(x)$。

比较判别法即可。

#### 推论 Cauchy 判别法的极限形式（p-积分）

> 设 $a > 0; f(x) \ge 0, x \in [a, +\infty)$，且  $\lim\limits_{x \to +\infty}\dfrac{f(x)}{\frac{1}{x^p}} = L$，则：
>
> 1) $p > 1$ 且 $0 \le L < +\infty$ 时，$\displaystyle\int_{a}^{+\infty}\dfrac{1}{x^p}\text{d}x$ 收敛，有 $\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 收敛。
>
> 2) $p \le 1$ 且 $0 < L < +\infty$ 时，$\displaystyle\int_{a}^{+\infty}\dfrac{1}{x^p}$ 发散，有 $\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 发散

#### 例题

> 讨论 $\displaystyle\int_{0}^{+\infty}\dfrac{\sin(x^2)}{x^2 + 1}\text{d}x$ 的收敛性。

奇点为 $+\infty$。

由于 $0 \le |\dfrac{\sin(x^2)}{x^2 + 1}| \le |\dfrac{1}{x^2 + 1}|$

而 $\displaystyle\int_{0}^{+\infty}\dfrac{1}{x^2 + 1}\text{d}x$ 根据 $p$ 积分推论可以知道是收敛的，所以原积分收敛。

#### 例题

> 讨论 $\displaystyle\int_{1}^{+\infty}\dfrac{\text{d}x}{\sqrt[3]{2x^4 + 2x^2 + 6x + 10}}$ 的收敛性。

奇点为 $+\infty$。

当 $x \to +\infty$ 时，$\lim\limits_{x\to +\infty} \dfrac{\dfrac{1}{\sqrt[3]{2x^4 + 2x^2 + 6x + 10}}}{\dfrac{1}{\sqrt[3]{2x^4}}} = 1$，故原积分收敛性与：

$\displaystyle\int_{1}^{+\infty}\dfrac{\text{d}x}{\sqrt[3]{2x^4}}$ 相同，而根据 $p$ 积分推论该积分收敛。

故原积分收敛。

#### 定理 Abel 判别法

> 设 $f, g$ 在 $[a, +\infty)$ 上均无奇点。
>
> 若  $\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 收敛，$g(x)$ 在 $[a, +\infty)$ 上单调有界，则 $\displaystyle\int_{a}^{+\infty}f(x)g(x)\text{d}x$ 收敛。

证明：

由 Cauchy 收敛原理：$\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 收敛 $\iff \forall \epsilon > 0, \exists A \text{ s.t. } A_2 > A_1 \ge A : |\displaystyle\int_{A_1}^{A_2}f(x)\text{d}x| < \epsilon$

由积分第二中值定理：

$\exists \xi \in [A_1, A_2] \text{ s.t. } |\displaystyle\int_{A_1}^{A-2}f(x)g(x)\text{d}x| = |g(A_1)\displaystyle\int_{A_1}^{\xi}f(x)\text{d}x + g(A_2)\displaystyle\int_{\xi}^{A_2}f(x)\text{d}x|$

由于 $g(x)$ 单调有界，令 $M = \sup\{g(x)\}, x \in [A_1, A_2]$。

则 $\le M|\displaystyle\int_{A_1}^{\xi}f(x)\text{d}x + \displaystyle\int_{\xi}^{A_2}f(x)\text{d}x| < 2M\epsilon$

根据 Cauchy 收敛原理，原命题正确。

#### 定理 Dirichlet 判别法

> 设 $f, g$ 在 $[a, +\infty)$ 上均无奇点。
> 
> 若 $F(x) = \displaystyle\int_{a}^{x}f(t)\text{d}t$ 有界，即 $\exists c > 0 \text{ s.t. } |\displaystyle\int_{a}^{x}f(t)\text{d}t| \le c$。
>
> 且 $g(x)$ 在 $[a, +\infty)$ 上单调, $\lim\limits_{x \to +\infty}g(x) = 0$，则 $\displaystyle\int_{a}^{+\infty}f(x)g(x)\text{d}x$ 收敛。

证明：

$\forall A_2 > A_1 \ge a, |\displaystyle\int_{A_1}^{A_2}f(x)\text{d}x| = |\displaystyle\int_{a}^{A_2}f(x)\text{d}x - \displaystyle\int_{a}^{A_1}f(x)\text{d}x| \le 2c$

由积分第二中值定理，$\exists \xi \in [A_1, A_2] \text{ s.t. } |\displaystyle\int_{A_1}^{A_2}f(x)g(x)\text{d}x| \le 2c(|g(A_1)| + |g(A_2)|)$。

由于 $\lim\limits_{x \to +\infty}g(x) = 0$，那么 $\forall \epsilon > 0, \exists A \text{ s.t. } x > A : |g(x)| < \epsilon$

所以 $A_2 > A_1 \ge A$ 时，$\displaystyle\int_{A_1}^{A_2}f(x)g(x)\text{d}x \le 4c\epsilon$，故其收敛。

#### 例题

> 证明 $\displaystyle\int_{1}^{+\infty}\dfrac{\sin x}{x}\text{d}x$ 收敛

由于 $[1, +\infty)$ 上 $\displaystyle\int_{1}^{+\infty}\sin x\text{d}x$ 有界即 $\displaystyle\int_{1}^{+\infty}\sin x \text{d}x\le 2$。

而 $\dfrac{1}{x}$ 单调递减趋近于 $0$，根据 Dirichlet 判别原积分收敛。

#### 例题

> 证明 $\displaystyle\int_{1}^{+\infty}\dfrac{\sin x}{x}\text{d}x$ 条件收敛。

前一个例题已经证明了收敛，现在证明不绝对收敛。

即证明：$\displaystyle\int_{1}^{+\infty}|\dfrac{\sin x}{x}|\text{d}x$ 发散。

那两个判别法只能说明收敛，没法说明发散，所以还是要用定义 / Cauchy 收敛原理 / 比较判别法。

那么：

$0 \le |\sin x| \le 1 \iff \sin^2 x \le |\sin x|$。

所以 $\displaystyle\int_{1}^{+\infty}|\dfrac{\sin x}{x}|\text{d}x \ge \displaystyle\int_{1}^{+\infty}\dfrac{\sin^2 x}{x}\text{d}x$

而 $\sin^2 x = \dfrac{1 - \cos 2x}{2}$

所以 $= \displaystyle\int_{1}^{+\infty}\dfrac{1}{2x}\text{d}x + \displaystyle\int_{1}^{+\infty}\dfrac{\cos 2x}{2x}\text{d}x$。

后者根据 Dirichlet 可以知道收敛。前者根据 $p$ 积分，发散。

故积分发散，根据比较判别法可以知道原积分发散，进而 $\displaystyle\int_{1}^{+\infty}\dfrac{\sin x}{x}\text{d}x$ 条件收敛。

#### 定理 Cauchy 收敛原理（瑕积分）

> 设 $b \not = 0$ 为 $f$ 在 $[a, b)$ 上的唯一奇点，则：
> 
> 广义积分 $\displaystyle\int_{a}^{b}f(x)\text{d}x$ 收敛 $\iff \forall \epsilon > 0, \exists \delta > 0, \text{ s.t. } \eta_1, \eta_2 \in (0, \delta) : |\displaystyle\int_{b - \eta_1}^{b - \eta_2} f(x)\text{d}x| < \epsilon$ 

证明：

广义积分收敛 $\iff \lim\limits_{t \to 0^+} \displaystyle\int_{a}^{b - t}f(x)\text{d}x$ 收敛

$\iff \lim\limits_{t \to 0^+} F(t)$ 存在

$\iff \forall \epsilon > 0, \exists \delta > 0 \text{ s.t. } \eta_1, \eta_2 \in (0, \delta) : |F(\eta_2) - F(\eta_1)| < \epsilon$

那么 $|\displaystyle\int_{b - \eta_1}^{b - \eta_1}f(x)\text{d}x| = |F(\eta_2) - F(\eta_1)| < \epsilon$，证毕。

#### 定理 Cauchy 收敛原理的极限形式（瑕积分）

> 设 $b \not = 0$ 为 $f$ 在 $[a, b)$ 上的唯一奇点，且 $f(x)\ge 0, x \in [a, b)$。
>
> 且 $\lim\limits_{x \to b^-} \dfrac{f(x)}{\frac{1}{(x - b)^p}} = L$ 则：
>
> 1) 若 $p < 1, 0 \le L < +\infty$，则 $\displaystyle\int_{a}^{b}f(x)\text{d}x$ 收敛。
> 
> 2) 若 $p \ge 1, 0 \le L < +\infty$，则 $\displaystyle\int_{a}^{b}f(x)\text{d}x$ 发散。

证明：

$\displaystyle\int_{a}^{b}\dfrac{\text{d}x}{(x - b)^p}$，令 $t = x - b$

$\displaystyle\int_{a - b}^{0}\dfrac{\text{d}t}{t^p} = -\displaystyle\int_{0}^{a - b}\dfrac{\text{d}t}{t^p}$（P 积分的形式）

瑕点变为 $t = 0$。

用定义：$= \lim\limits_{\epsilon \to 0^+} \displaystyle\int_{\epsilon}^{a - b}\dfrac{\text{d}t}{t^p} = \lim\limits_{\epsilon \to 0^+}\dfrac{t^{1 - p}}{1 - p}\vert_{\epsilon}^{a} = \dfrac{a^{1 - p}}{1 - p} - \lim\limits_{\epsilon \to 0+}\dfrac{\epsilon^{1 - p}}{1 - p}$

$p = 1$ 时发散，$p > 1$ 时原式发散，$p < 1$ 时原式才收敛。

注：

对于两类广义积分，Cauchy 收敛原理判定收敛性的这个 $p$ 是完全相反的。

因为最后用定义写出来的时候变量趋向的点不同，在无穷远处希望的是**更快的减少**，有限瑕点处希望是**更慢的增长**。

但是当 $p = 1$ 的时候都是发散的。

#### 例题

（很重要）

> 设 $p > 0$。
>
> 讨论 $\displaystyle\int_{0}^{\frac{1}{3}}\dfrac{\text{d}x}{x^p\ln x}$ 的收敛性。

令 $\ln x = t, x = e^t$，那么 $\text{d}t = \dfrac{1}{x}\text{d}x \iff \text{d}x = e^t\text{d}t$


#### 例题

> 设 $p \in \mathbb R$。
>
> 讨论 $\displaystyle\int_{0}^{1}\dfrac{1}{x^p}\sin(\dfrac{1}{x})\text{d}x$ 的收敛性。

#### 定理 极限在无穷远点为零的充分条件 

> 设 $f$ 在 $[a, +\infty)$ 上没有奇点。
>
> 且广义积分 $\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 收敛则：
>
> 1) 若 $\lim\limits_{x \to +\infty}f(x) = L \in \mathbb R$ 存在，则 $L = 0$；
>
> 2) 若 $f$ 在 $[a ,+\infty)$ 上具有一阶连续导数，且 $\displaystyle\int_{a}^{+\infty}f^{\prime}(x)\text{d}x$ 也是收敛的，$\lim\limits_{x \to +\infty}f(x) = 0$
>
> 3) 若 $f$ 在 $[a, +\infty)$ 上一致连续，则 $\lim\limits_{x \to +\infty}f(x) = 0$

证明 (1)：

假设 $L \not = 0$，不妨认为 $L > 0$。

那么 $\forall \epsilon > 0, \exists N > a \text{ s.t. } x > N : |f(x) - L| < \epsilon$

特别的，取 $\epsilon = \dfrac{L}{2}$，则 $x > N : |f(x)| > \dfrac{L}{2}$。

任取 $A > a$，取 $A_{1} = \max\{A, N\}, A_2 = A_1 + 1,$ 满足 $A_2 > A_1 \ge A$

于是 $|\displaystyle\int_{A_1}^{A_1 + 1}f(x)\text{d}x| \ge \dfrac{L}{2} = \epsilon_0$

这就说明，$\exists \epsilon_0, \forall A, \exists A_2 > A_1 \ge A : |\displaystyle\int_{A_1}^{A_2}f(x)\text{d}x| \ge \epsilon_0$。这也就说明矛盾。

证明：(2) 利用归结原则（Heine 定理）

$\lim\limits_{x \to +\infty}f(x) = 0$，由 (1) 只需要证明 $\lim\limits_{x \to +\infty}f(x)$ 存在

$\lim\limits_{x \to +\infty}f(x) = L \in \mathbb R \iff \forall \{x_n\} \to +\infty, \lim\limits_{n \to +\infty}f(x_n) \to L$

由 Cauchy 收敛原理 $\displaystyle\int_{a}^{+\infty}f^{\prime}(x)\text{d}x \iff \forall \epsilon > 0, \exists A > a \text{ s.t. } A_2 > A_1 \ge A : |\displaystyle\int_{A_1}^{A_2}f^{\prime}(x)\text{d}x| < \epsilon$

即 $|f(A_2) - f(A_1)| < \epsilon$

特别的，可以任取 $\forall \{x_n\} \to +\infty$ 使得，$\exists N\in\mathbb{Z+} \text{ s.t. } m, n > N : x_m > x_n > A$

那么显然 $|f(x_m) - f(x_n)| < \epsilon$，根据数列的 Cauchy 收敛原理这说明 $\{f(x_n)\}$ 收敛。

这里不需要证明收敛于 $0$，只要说明存在性就行，利用 Heine 定理：

那么 $\lim\limits_{x \to +\infty} = 0$

证明 (3)：

仍旧只需要证明极限存在，也可以反证法证明 $= 0$。

反证，$\exists \epsilon_0$（后略）

由一致连续的条件：$\forall \epsilon > 0, \exists \delta=\delta(\epsilon) \text{ s.t. } x, y \in [a, +\infty), |x - y| < \delta : |f(x) - f(y)| < \epsilon$

对于上面的 $\epsilon_0$，$\exists \delta_0 > 0, \forall x, y \ge a, |x - y| < \delta_0 : |f(x) - f(y)|\le \epsilon_0 / 2$

任取 $A$，取 $X = A$，存在相应的 $x_0 \ge X$ 满足 $|f(x_0)| \ge \epsilon_0$

对于 $(x_0 - \delta, x_0 + \delta)$ 中的 $x$ 必有 $|f(x) - f(x_0)| < \epsilon_0 / 2$

所以可以得到 $|f(x)| \ge \epsilon / 2$

取 $A_1 = x_0 - \delta, A_2 = x_0 + \delta \Rightarrow |\displaystyle\int_{A_1}^{A_2}f(x)\text{d}x| = \epsilon\delta$

这里 $A_1 < A$ 了，所以稍微修改一下 $\delta$ 的取值，可以取 $\delta \in (0, 1)$，然后 $X = A + 1$

由 Cauchy 收敛原理，矛盾。

注：不可以只是连续，反例：$\displaystyle\int_{1}^{+\infty}\sin(x^2)\text{d}x$ 收敛，但是 $\lim\limits_{x \to +\infty}\sin(x^2)$ 不存在。

### 广义积分收敛性判别 例题

#### 例题 1

> 讨论广义积分 $\displaystyle\int_{0}^{+\infty}\dfrac{\text{d}x}{1 + x|\sin  x|}$ 的收敛性

函数除了无穷远点无奇点。

$0 \le |\sin x| \le 1$，所以 $\dfrac{1}{1 + x|\sin x|} \ge \dfrac{1}{1 + x}$

后者在 $[0, +\infty)$ 上的广义积分是发散的，根据比较判别法可以知道原积分发散

#### 例题 2

> 假设 $p, q > 0$，讨论广义积分 $\displaystyle\int_{1}^{+\infty}\dfrac{x^q}{1 + x^p}\text{d}x$ 的收敛性。

函数除了无穷远点没有奇点

所以其实本质和 $\displaystyle\int_{1}^{+\infty}\dfrac{x^q}{x^p}$ 差不多。

用比较判别法的极限形式就好。

考虑 $\lim\limits_{x \to +\infty}\dfrac{\dfrac{x^q}{1 + x^p}}{\dfrac{x^q}{x^p}}$ 即可。

$= \lim\limits_{x \to +\infty}\dfrac{x^p}{1 + x^p} = \lim\limits_{x \to +\infty}\dfrac{1}{1 + x^p} = 1 \in (0, +\infty)$

所以其收敛性和 $\dfrac{x^q}{x^p}$ 的广义积分一致。

这就是 p 积分，当且仅当 $p - q > 1$ 的时候收敛。

#### 例题 3

> 设 $p, q > 0$，讨论：
> 
> $\displaystyle\int_{2}^{+\infty}\dfrac{\text{d}x}{x^p(\ln x)^q}$ 的收敛性。

函数除了无穷远点没有奇点。

注意到 $p = 1$ 的时候积分可以算出来，$t =\ln x \Rightarrow \displaystyle\int_{\ln 2}^{+\infty} \dfrac{\text{d}t}{t^q}$，其收敛等价于 $q > 1$

考虑 $p > 1$，这里有一个小技巧（小技巧在哪儿）：

设 $p = 1 + \delta, \delta > 0$，由于 $\ln x<< x^\alpha (x \to +\infty)$

用比较判别法：

$\lim\limits_{x \to +\infty}\dfrac{\dfrac{1}{x^{1 + \delta}(\ln x)^q}}{\dfrac{1}{x^{1 + \delta}}} = \lim\limits_{x\to+\infty} \dfrac{1}{(\ln x)^q} = 0$

然而 $\displaystyle\int_{2}^{+\infty}\dfrac{\text{d}x}{x^{1 + \delta}}$ 已经是收敛的，所以原式收敛。和 $q$ 没有关系。

那么 $p \ge 1, q > 0$ 时，原积分总是收敛的。

$0 < p < 1$ 时，大概猜就是发散的，找一个发散的给它比，$x^p$ 的话不太够，弄一个 $\dfrac{p + 1}{2}$。

$\lim\limits_{x \to +\infty}\dfrac{}{} = \lim\limits_{x\to\infty}\dfrac{x^{\frac{1 - p}{2}}}{(\ln x)^q} = +\infty$

所以积分发散。

#### 例题 4

> 设 $p, q \in \mathbb R, q > 0$（没有 $q > 0$ 的话情况会非常多）
>
> 讨论 $\displaystyle\int_{0}^{+\infty}\dfrac{x^p\sin x}{1 + x^q}\text{d}x$ 的收敛性（包括条件收敛 / 绝对收敛）。

分两种情况讨论，一种有奇点一种没有，每种情况里先证明收敛性再证明是否绝对收敛。

1) $p \ge 0$ 时，此时积分区间上没有奇点。

先讨论原积分的收敛性 $\dfrac{x^p}{1 + x^q} \sin x$。

观察形式可以想到使用 Dirichlet 判别法，因为：

$\forall A > 0, |\displaystyle\int_{0}^{A}\sin x \text{d}x| \le 2$

另外一个则需要单调且无限处极限为 $0$，这是例题 2 就做过的，当 $x$ 充分大的时候，它的收敛性和 $\dfrac{x^p}{x^q} = \dfrac{1}{x^{q - p}}$ 一致（同阶）。

所以当 $q > p$ 时，$\dfrac{x^p}{1 + x^q}$ 在 $x$ 足够大时单调递减趋于零（这满足 Dirichlet 的条件（充分大时单调也可以））。

说明一下：$(\dfrac{x^p}{1 + x^q})^{\prime} = \dfrac{px^{p - 1} + px^{p - 1 + q} - qx^{q - 1 + p}}{(1  + x^q)^2} = \dfrac{x^{p - 1}(p + px^q - qx^q)}{(1 + x^q)^2}$

$=\dfrac{x^{p - 1}[p + x^q(p - q)]}{(1 + x^q)^2}$所以 $q > p$，$x$ 充分大时它小于零。

所以根据 Dirichlet 判别法，当 $p \ge 0, q > p$ 时原积分收敛。

目前只得到了一个充分条件，所以考虑 $0 \le q \le p$ 时的收敛性。

猜测他是发散的。这里没什么别的判别方法，所以用 Cauchy 收敛原理。

即：$\exists \epsilon_0, \forall A > 0, \exists A_2 \ge A_1 > A \text{ s.t. } |\displaystyle\int_{A_1}^{A_2}\dfrac{x^p}{1 + x^q}\sin x\text{d}x| \ge \epsilon_0$

所以就是要找这个大于某一个数，$\sin x$ 有界的很好找，就看前面部分就行。

所以这里取 $A_2 = 2n\pi + \dfrac{\pi}{2}, A_2 = 2n\pi + \dfrac{\pi}{6}$

那么 $|\displaystyle\int_{A_1}^{A_2}\sin x\text{d}x| \ge \dfrac{\pi}{6} \ge \dfrac{1}{2}$

而 $\dfrac{x^p}{1 + x^q} \ge \dfrac{x^p}{2x^q} = \dfrac{1}{2x^{q - p}} \ge \dfrac{1}{2} \cdot 1, x \in [A_1, A_2]$ 这是显然的。

所以 $|\displaystyle\int_{A_1}^{A_2} \dfrac{x^p}{1 + x^q}\sin x\text{d}x| \ge \displaystyle\int_{A_1}^{A_2} \dfrac{x^p}{1 + x^q}\sin x\text{d}x \ge \displaystyle\int_{A_1}^{A_2} \dfrac{1}{2} \cdot \dfrac{1}{2}\text{d}x = \dfrac{\pi}{12} = \epsilon_0$

根据 Cauchy 收敛原理，$p \ge 0, q \le p$ 时，原积分发散。

现在应该讨论绝对收敛性。

前面部分本来就是非负的，所以讨论 $\displaystyle\int_{0}^{+\infty}\dfrac{x^p}{1 + x^q}|\sin x| \text{d}x$。

由于 $\displaystyle\int_{0}^{+\infty}\dfrac{x^p}{1 + x^q}|\sin x| \text{d}x \le \displaystyle\int_{0}^{+\infty}\dfrac{x^p}{1 + x^q} \text{d}x = \displaystyle\int_{0}^{1}\dfrac{x^p}{1 + x^q} \text{d}x + \displaystyle\int_{1}^{+\infty}\dfrac{x^p}{1 + x^q}\text{d}x$

拆一项主要是为了避免产生奇点。

前一项总是收敛的，后一项收敛的条件已经做过了 $q - p > 1$，根据比较判别法可以得到原积分收敛需要 $q - p > 1$。

类似的，还需要说明 $q - p\le 1\iff 0 \le q \le 1 + p$ 时，原积分不是绝对收敛的。

之前也提过这个例子，由于 $\sin x$ 加了绝对值非负，所以可以比较判别法：

$\displaystyle\int_{0}^{+\infty}\dfrac{x^p}{1 + x^q} |\sin x|\text{d}x \ge \displaystyle\int_{0}^{+\infty}\dfrac{x^p}{1 + x^q} \sin^2x\text{d}x = \dfrac{1}{2}\displaystyle\int_{0}^{+\infty}\dfrac{x^p}{1 + x^q}(1 - \cos(2x))\text{d}x$

$=\dfrac{1}{2}\displaystyle\int_{0}^{+\infty}\dfrac{x^p}{1 + x^q}\text{d}x - \dfrac{1}{2}\displaystyle\int_{0}^{+\infty}\dfrac{x^p}{1 + x^q}\cos(2x)\text{d}x$

前一项当 $q - p \le 1$ 时发散（刚才写过了），后一项根据 Dirichlet 可以知道收敛，一减之后就是发散的。

所以，当 $0 < q \le 1 + p$ 时，原积分发散。

那么，原积分绝对收敛 $\iff q > p + 1$

原积分收敛 $\iff q > p$

2) $p < 0$ 时

先讨论收敛性，此时原积分有奇点 $0, +\infty$

将原积分写为 $\displaystyle\int_{0}^{1} + \displaystyle\int_{1}^{+\infty} = I + II$

分别讨论它们的收敛性就行

$I = \displaystyle\int_{0}^{1}\dfrac{x^p}{1 + x^q}\sin x\text{d}x$。

当 $x \to 0$ 时，$\sin x \approx x \Rightarrow \lim\limits_{x \to 0} \dfrac{\dfrac{x^p\sin x}{1 + x^q}}{\dfrac{x^{p + 1}}{1 + x^q}} = 1$

所以只需要考虑 $\displaystyle\int_{0}^{1}\dfrac{x^{p + 1}}{1 + x^q}\text{d}x$ 的收敛性，由于 $0 < \dfrac{x^{p + 1}}{1 + x^q} \le x^{p + 1} \iff 0 \le \dfrac{x^{p + 1}}{2} < \dfrac{x^{p + 1}}{1 + x^q} \le x^{p + 1}$

那么原积分收敛等价于 $\displaystyle\int_{0}^{1}x^{p + 1}\text{d}x$ 收敛，改写成 p 积分可以知道 $I$ 收敛的充分条件为 $-p - 1 < 1 \iff 0 > p > -2$

当然其实是充分必要条件（因为这就是 p 积分收敛的充分必要条件）。

然后考虑 $II$ 的充分性

$II = \displaystyle\int_{1}^{+\infty}\dfrac{x^p}{1 + x^q}\sin x\text{d}x$

仍旧用 Dirichlet 判别法，$\forall A > 0, |\displaystyle\int_{1}^{A}\sin x\text{d}x| \le 2$。

然后当 $x \to +\infty$ 时，前一项单调递减趋于 $0$。

所以 $p < 0$ 时 $II$ 无论如何都收敛。

于是可以得到：$-2 < p < 0$ 时，原积分收敛（当 $p \le -2$ 时 $I$ 发散，所以这其实是充分必要条件）。

即：$-2 < p < 0 \iff$ 原积分收敛。

现在讨论绝对收敛性（在 $-2 < p < 0$ 的条件下）

$\displaystyle\int_{0}^{+\infty}\dfrac{x^p}{1 + x^q}|\sin x|\text{d}x = \displaystyle\int_{0}^{1}\dfrac{x^p}{1 + x^q}\sin x \text{d}x + \displaystyle\int_{1}^{+\infty}\dfrac{x^p}{1 + x^q}|\sin x|\text{d}x$

前一项就是 $I$，后一项记为 $III$，$I$ 收敛的充分必要条件就是前提条件。

所以只需要讨论 $III$ 的收敛性。

$III \le \displaystyle\int_{1}^{+\infty}\dfrac{x^p}{1 + x^q}\text{d}x$

令 $t = -p \Rightarrow \displaystyle\int_{1}^{+\infty}\dfrac{1}{x^t + x^{t + q}}\text{d}x$

当 $x \to +\infty$ 时 $x^{t + q}$ 起决定作用。

用比较判别法：$\lim\limits_{x\to +\infty}\dfrac{\dfrac{1}{x^t + x^{t + q}}}{\dfrac{1}{x^{t + q}}} = \lim\limits_{x \to +\infty}\dfrac{x^{t + q}}{x^t + x^{t + q}} = 1$

而 $\displaystyle\int_{1}^{+\infty}\dfrac{1}{x^{t + q}}\text{d}x$ 收敛的充分条件就是 $t + q > 1 \iff q - p > 1$

还需要说明必要性

当 $q - p \le 1$ 时 $\displaystyle\int_{1}^{+\infty}\dfrac{x^p}{1 + x^q}|\sin x|\text{d}x \ge \dfrac{1}{2}\displaystyle\int_{1}^{+\infty}\dfrac{x^p}{1 + x^q}\text{d}x - \dfrac{1}{2}\displaystyle\int_{1}^{+\infty}\dfrac{x^p}{1 + x^q}\cos(2x)\text{d}x$

$q - p \le 1$ 时后者总是收敛，前者总是发散。

所以 $III$ 收敛的充分必要条件就是 $q - p > 1$。

于是：原积分绝对收敛 $\iff \begin{cases}-2 < p < 0 \\ q > p + 1\end{cases}$

#### 例题 5

> 设 $p \in \mathbb R$，讨论 $\displaystyle\int_{0}^{+\infty}\dfrac{e^{\sin x}\sin(2x)}{x^p}\text{d}x$ 的收敛性

#### 例题 6

> 设 $p \in \mathbb R$，讨论 $\displaystyle\int_{0}^{+\infty}\dfrac{\sin(x + \dfrac{1}{x})}{x^{p}}\text{d}x$ 的收敛性。

#### 例题 7

> 设 $p, q \in \mathbb R$，讨论 $\displaystyle\int_{0}^{+\infty}x^p\sin(x^q)\text{d}x$ 的收敛性

#### 例题 8

> 讨论 $\displaystyle\int_{0}^{1}x^p(\ln x)^q\text{d}x$ 的收敛性

#### 例题 9

> 设 $f$ 在 $[a, +\infty]$

#### 例题 10

> 设 $[a, +\infty)$ 上 $f(x)$ 单调递减且 $\displaystyle\int_{a}^{+\infty}f(x)\text{d}x$ 收敛。
>
> 证明：$\lim\limits_{x \to +\infty}xf(x) = 0$

由条件：$\lim\limits_{A \to +\infty}\displaystyle\int_{a}^{A}f(x)\text{d}x$ 存在。

这等价于积分的尾巴为 $0$：$\lim\limits_{A \to +\infty}\displaystyle\int_{A}^{+\infty}f(x)\text{d}x = 0$ 

还等价于 Cauchy 收敛原理：$\forall \epsilon > 0, \exists A > a, \text{ s.t. } A_2 > A_2 \ge A : |\displaystyle\int_{A_1}^{A_2}f(x)\text{d}x|< \epsilon$

题目所想要证明的也是 $xf(x) < \epsilon$ 这样的，所以用 Cauchy 收敛原理：

$\forall \epsilon > 0, \exists A \ge 1, \forall \dfrac{x}{2} \ge A$ 有：$|\displaystyle\int_{\frac{x}{2}}^{x}f(t)\text{d}t| < \epsilon$

$1\le \dfrac{x}{2} \le t \le x$

$f(x) \le f(t) \le f(\dfrac{x}{2})$

先证明：$f(t) \ge 0, \forall t \ge a$

若不然则 $\exists x_1 \ge a \text{ s.t. } f(x_1) < 0$ 则：

$f(t) < f(x_1) < 0, t \ge x_1$：那么 $\displaystyle\int_{x_1}^{+\infty}f(t)\text{d}t \le \displaystyle\int_{x_1}^{+\infty}f(x_1)\text{d}t = -\infty$，这与收敛矛盾。

于是，$\epsilon > \displaystyle\int_{\frac{x}{2}}^{x}f(t)\text{d}t \ge \displaystyle\int_{\frac{x}{2}}^{x}f(x)\text{d}t \ge \dfrac{x}{2}f(x) \ge 0$

进而可以证明 $|xf(x)| < \epsilon$

#### 例题 11

> 设 $f$ 在 $[0, +\infty)$ 的有限子区间 $[0, b]$ 上 Riemann 可积。
>
> 且 $\lim\limits_{x \to +\infty}f(x)=  \alpha$，证明：
>
> $\lim\limits_{t \to 0+} \left[t\displaystyle\int_{0}^{+\infty}e^{-tx} f(x)\text{d}x\right] = \alpha$

这个方法叫做拟合法，就是，等号两边形式不一样于是尝试写成一样的。

或者说常见于极限里套积分的题目。

思路：做一个改写：$\alpha = t\displaystyle\int_{0}^{+\infty}\alpha e^{-tx}\text{d}x$（这步算一下就知道是对的）

取个极限移到左边

那么只要证明 $\lim\limits_{t \to 0+} t\displaystyle\int_{0}^{+\infty}\left[f(x)e^{-tx} - \alpha e^{-tx}\right]\text{d}x = 0$

即证 $\lim\limits_{t \to 0^+} t\displaystyle\int_{0}^{+\infty}[f(x) - \alpha] e^{-tx}\text{d}x = 0$

由于 $\lim\limits_{}f(x) = \alpha \iff \forall \epsilon > 0, \exists A > 0 \text{ s.t. } x \ge A : |f(x) - \alpha| < \epsilon$

那么 $\left|t\displaystyle\int_{0}^{+\infty}[f(x) - \alpha] e^{-tx}\text{d}x\right| = \left|t\displaystyle\int_{0}^{A} + t\displaystyle\int_{A}^{+\infty}\right|$

$\le t\displaystyle\int_{0}^{A}|f(x) - \alpha| e^{-tx}\text{d}x + t\displaystyle\int_{A}^{+\infty}|f(x) - \alpha| e^{-tx}\text{d}x = I + II$

+ 对于 $II$：$< \epsilon t\displaystyle\int_{A}^{+\infty}e^{-tx}\text{d}x = \epsilon \displaystyle\int_{A}^{+\infty}e^{-tx}d(tx) =\epsilon \displaystyle\int_{tA}^{+\infty}e^{-y}\text{d}t$

$= \epsilon(e^{-tA} - 0)$。

由于括号内小于 $1$, $II < \epsilon$

**注意**：这里本质是先求积分再取极限，所以本质是固定 $t$ 之后来做积分。

+ 对于 $I$：根据题目条件 $f(x) - \alpha$ 在 $[0, A]$ 上 Riemann 可积进而有界。    

所以 $\exists M \text{ s.t. } |f(x) - \alpha| \le M, \forall x \in [0, A]$

故 $I \le t \displaystyle\int_{0}^{A}M e^{-tx}\text{d}x$，同理可得：

$I < M(1 - e^{-tA})$

+ 对整体：

令 $t \to 0^+$，原极限 $\le \epsilon + M(1 - e^{-tA}) =\epsilon + 0$

这是因为 $A$ 这里实质上不变。由极限任意性，原极限 $= 0$
