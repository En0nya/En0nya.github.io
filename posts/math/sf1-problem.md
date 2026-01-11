## 数学分析(I) 杂题

### 几个特殊极限

+ $\lim\limits_{n\to \infty} \sqrt[n]{|a|} = 1$
+ $\lim\limits_{n \to \infty} \dfrac{a_1 + a_2 + a_3 + \cdots + a_n}{n} = A$
+ $\lim\limits_{n \to \infty} \dfrac{a_1b_n + a_2b_{n - 1} + a_3b_{n - 2} + \cdots + a_nb_1}{n} = AB$
+ $\lim\limits_{n \to \infty} \sqrt[n]{a_1a_2a_3\cdots a_{n}} = A$
+ $\lim\limits_{n \to \infty} \left(\dfrac{a^{\dfrac{1}{n}} + b^{\dfrac{1}{n}}}{2}\right)^{n} = \sqrt{ab}$
+ $\lim\limits_{n \to \infty} (a^n + b^n)^{\frac{1}{n}} = \max\{a, b\}$

### 第一次作业

[pdf](https://github.com/En0nya/Textbooks/blob/main/2025%E7%BA%A7%E6%9C%AC%E7%A7%91%E7%94%9F%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90%E4%BD%9C%E4%B8%9A%E9%A2%98(2025.10%E2%80%942026.1).pdf)

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

### 第二次作业

[pdf](https://github.com/En0nya/Textbooks/blob/main/2025%E7%BA%A7%E6%9C%AC%E7%A7%91%E7%94%9F%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90%E4%BD%9C%E4%B8%9A%E9%A2%98(2)(2025.10%E2%80%942026.1).pdf)

> T11 $x_1 = \sqrt{2}, x_{n + 1} = \dfrac{1}{2 + x_n}$，求证 $\{x_n\}$ 收敛并求极限。

> T13(3) $\lim\limits_{n \to \infty} \sin^2(\pi\sqrt{n^2 + n})$.

### 第三次作业

[pdf](https://github.com/En0nya/Textbooks/blob/main/2025%E7%BA%A7%E6%9C%AC%E7%A7%91%E7%94%9F%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90%E4%BD%9C%E4%B8%9A%E9%A2%98(3)(2025.10%E2%80%942026.1).pdf)

### 第四次作业

[pdf](https://github.com/En0nya/Textbooks/blob/main/2025%E7%BA%A7%E6%9C%AC%E7%A7%91%E7%94%9F%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90%E4%BD%9C%E4%B8%9A%E9%A2%98(4)(2025.10%E2%80%942026.1).pdf)

### 第五次作业

[pdf](https://github.com/En0nya/Textbooks/blob/main/2025%E7%BA%A7%E6%9C%AC%E7%A7%91%E7%94%9F%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90%E4%BD%9C%E4%B8%9A%E9%A2%98(5)(2025.10%E2%80%942026.1).pdf)

### 第六次作业

[pdf](https://github.com/En0nya/Textbooks/blob/main/2025%E7%BA%A7%E6%9C%AC%E7%A7%91%E7%94%9F%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90%E4%BD%9C%E4%B8%9A%E9%A2%98(6)(2025.10%E2%80%942026.1).pdf)

> T3：求 $a,b \text{ s.t. } \lim\limits_{x \to +\infty}\left[\dfrac{x^2+1}{x+1}-ax-b\right] = 0$

括号内：$\dfrac{(x^2 + 1) - (x + 1)(ax + b)}{x + 1} = \dfrac{(1-  a)x^2 - (a + b)x + (1 - b)}{x+1}$。

由于极限为 $0$。二次项系数显然为 $0 \Rightarrow a = 1$，否则

所以括号内：$\dfrac{-(b + 1)x + (1 - b)}{x+1}$

分子分母同时除 $x:\dfrac{-(b + 1) + \dfrac{1 - b}{x}}{1 + \dfrac{1}{x}}$

由于极限都存在分子分母分别求极限：$0 = \dfrac{-(b + 1)}{1} \Rightarrow b = -1$

> T4：讨论 Dirichlet 函数 $D(x) = \begin{cases}1, &x \in \mathbb{Q} \\ 0, &x \not\in \mathbb{Q} \end{cases}$ 的连续性

`TODO`

任取 $x_0 \in \mathbb{Q}$。

左右看起来没什么区别，直接算：

假设  $\lim\limits_{x \to x_0} D(x)$ 存在，根据 Heine 定理，$\forall \{x_n\} \to x_0, \lim\limits_{n \to \infty}D(x_n) = \lim\limits_{x \to x_0} D(x)= A$ 

分别取两列有理数无理数 $\{p_n\} \subset \mathbb{Q}, \{q_n\} \text{ s.t. } \{q_n\} \to x_0, \{p_n\} \to x_0$。

所以 $D(p_n) = 0, D(q_n) = 1$。

$0 \not= 1$ 所以根据 Heine 定理，$\lim\limits_{x \to x_0} D(x)$ 不存在。

所以在有理点不连续。

这就是经典的，利用有理数和无理数都是稠密的来从两边切入的技巧。

任取 $x_0 \in \mathbb{R/Q}$。

还是可以各取有理数无理数趋近于它。

> T9：$f(x) = [x]\sin x(\dfrac{1}{x}), g(x) = 2[x] - [2x]$ 不连续点的类型

对于 $f(x), x = 0$：

右极限：$\lim\limits_{x \to 0^+} [x]\sin(\dfrac{1}{x}) = 0$

原因是：$0 \le |[x] \sin(\dfrac{1}{x})| \le |[x]|$。

并且 $x \to 0^+$ 的时候 $|[x]| \to 0$。

考虑左极限，由于 $\sin(\dfrac{1}{x})$ 的左极限不存在但是 $[x]$ 的左极限存在，所以左极限不存在。

所以 $0$ 是 $f(x)$ 的第二类不连续点。

对于 $[x]$ 来说，所有整数点都是不连续的，这就导致 $f(x)$ 不连续。

且不连续点类型是第一类（左右倒是都可以算出来不过不相等`TODO`）

### 1

> 求 $\int \dfrac{xe^x}{(1 + x)^2}\text{d}x$

原积分 $=-\int x e^x \text{d}(\dfrac{1}{1 + x}) = - \dfrac{x e^x}{1 + x} + \int \dfrac{e^x + xe^x}{1 + x} \text{d}x$

$=-\dfrac{xe^x}{1 + x} + \int e^x \text{d}x = e^x - \dfrac{xe^x}{1 + x} + C$

### 2

> 求 $\int x\ln(1 + x^2)\arctan x \text{d}x$

这三个东西各去掉一个，发现不能让 $\ln(1 + x^2), \arctan x$ 在一起。

所以先尝试考虑 $\int x \ln(1 + x^2) \text{d}x = I$

$I = \dfrac{1}{2}\int \ln (1 + x^2)\text{d}(x^2) = \dfrac{1}{2} \int \ln(1 + x^2)\text{d}(1 + x^2)$

令 $t = 1 + x^2, I = \dfrac{1}{2} \int \ln t \text{d}t =\dfrac{1}{2}(t \ln t - t) + C = \dfrac{1}{2}[(1 + x^2)\ln(1 + x^2) - (1 + x^2)] + C$

令 $F(x) + C = I \Rightarrow [F(x) + C]^{\prime} = x \ln(1 + x^2)$

也就是 $\text{d}[F(x) + C] = x\ln(1 + x^2) \text{d}x$

那么原来的积分：

$= \int \arctan x \text{d}[F(x)] = f(x)\arctan x - \int f(x) \dfrac{1}{1 + x^2}\text{d}x$

设后面这部分积分为 $II$

$II = \dfrac{1}{2}\int \ln(1 + x^2) \text{d}x - \dfrac{1}{2}\int \text{d}x$

### 3

> 求 $\lim\limits_{x\to 0} \dfrac{x[(1 + x)^{\frac{1}{x}} - e]}{1 - \cos x}$

洛必达有点麻烦。

用 Taylor 展开。

$(1 + x)^{\frac{1}{x}}$ 肯定没法展开，所以 $= e^{\frac{1}{x}\ln(1 + x)}$。

上面这项展开就是 $e^{\frac{1}{x}[x - \frac{1}{2}x^2 + \frac{1}{3}x^3 + o(x^3)]}$

也就是 $e^{1 - \frac{1}{2}x + \frac{1}{3}x^2 + o(x^2)}$

展开到这个位置主要还是要用等价无穷小量代换。

所以原式中括号里面：$= e[e^{-\frac{1}{2}x + \frac{1}{3}x^2 + o(x^2)} - 1]$

再利用 $e^t = 1 + t + \dfrac{1}{2!}t^2 + o(t^2), (t \to 0)$

所以就是 $e\{-\dfrac{1}{2} + \dfrac{1}{3}x^2 + o(x^2) + \dfrac{1}{2}[-\dfrac{1}{2}x + \dfrac{1}{3}x^2 + o(x^2)]^2+ o_1(x)\}$

然后分子就是 $= -\dfrac{1}{2}x^2 + o(x^2)$ 

又因为 $1- \cos x \approx \dfrac{1}{2}x^2$

所以原极限 $=e \times -1 = -e$

### 5

> 如果 $f$ 在 $[a, b]$ 上二阶可导，$f(a) = f(b) = 0$。
>
> 证明 $\max\limits_{x \in [a, b]} |f(x)| \le \dfrac{(b - a)^2}{8} \max\limits_{x \in [a, b]}|f^{\prime\prime}(x)|$

$|f|$ 在 $[a, b]$ 上连续 $\Rightarrow |f|$ 在 $[a, b]$ 上一定有最大值。

又因为 $f(a) = f(b) = 0$，所以 $|f|$ 在 $(a, b)$ 上取到最大值。

且这个最大值 $f(x_0)$ 一定是 $f$ 的最值，根据 Fermat，$f^{\prime}(x_0) = 0$。 

然后利用 Taylor 定理展开 $f^{\prime}(x) = f(x_0) + f^{\prime}(x_0)(x - x_0) + \dfrac{1}{2!}f^{\prime\prime}(\xi)(x - x_0)^2$。

$x \in [a, b]$。

带入 $f(a),f(b)$

$f(a) = 0 = f(x_0) + \dfrac{1}{2}f^{\prime\prime}(\xi_1)(a - x_0)^2 = 0, a <\xi_1 < x_0$

$f(b) = 0 = f(x_0) + \dfrac{1}{2}f^{\prime\prime}(\xi_2)(b - x_0)^2 = 0, x_0 < \xi_2 < b$

由 $f(a)$ 可以知道 $|f(x_0)| = \dfrac{1}{2}|f^{\prime\prime}(\xi_1)| \cdot (a - x_0)^2 \le \dfrac{1}{2}\max\limits_{x\in [a, b]} |f^{\prime\prime}(x)|(a - x_0)^2$

同理 $|f(x_0)| \le \dfrac{1}{2}\max\limits_{x \in [a, b]}|f^{\prime\prime}(x)|(b - x_0)^2$

1. 如果 $x_0 \le \dfrac{a + b}{2}$，所以 $(b - x_0)^2 \ge (a - x_0)^2$

那么 $\max\limits_{x \in [a, b]} |f^{\prime\prime}(x)| \ge 2|f(x_0)|\dfrac{1}{(a - x_0)^2} \ge \dfrac{2|f(x)|}{(a - \dfrac{a + b}{2})^2} = \dfrac{8}{(b - a)^2}|f(x_0)|$

同理可以证明另外一个。

### 6

> 11.8 (2)

$f(x) = f(0) + f^{\prime}(0) x + \dfrac{1}{2} f^{\prime\prime}(0) x^2 + \dfrac{1}{3!} f^{(3)}(\eta)x^3$

$f(1) = 1 = f(0) + \dfrac{1}{2}f^{\prime\prime}(0) + \dfrac{1}{6}f^{(3)}(\eta_1)$

$f(-1) = 0 = f(0) + \dfrac{1}{2}f^{\prime\prime}(0) + \dfrac{1}{6}f^{(n)}(\eta_2)$

所以 $3 = \dfrac{f^{(3)}(\eta_1) + f^{(3)}(\eta_2)}{2}$

根据 Darboux 定理

$3 介于 f^{(3)}(\eta_1), f^{(3)}(\eta_2)$ 之间。

那么存在 $\xi \in (\eta_2, \eta_1) \text{ s.t. } f^{(3)}(\xi) = 3$

> 11.8 (3)

$f(x + h) = f(x) + f^{\prime}(x)h + \dfrac{1}{2}f^{\prime\prime}(x + \theta h)h^2$

那么由 Taylor 定理：

$f(x + h) = f(x) + f^{\prime}(x)h + \dfrac{1}{2}f^{\prime\prime}(x)h^2 + \dfrac{1}{3!}f^{(3)}(\xi)h^3$

两边一对比：

$f^{\prime\prime}(x  + \theta h) - f^{\prime\prime}(x) = \dfrac{1}{3}f^{(3)}(\xi)h$

然后这里用 Lagrange 中值定理就行了！

左边就是 $f^{(3)}(\eta)\theta h = \dfrac{1}{3}f^{(3)}(\xi)h$

其中 $\eta$ 介于 $x, x + \theta h$ 之间。

所以 $f^{(3)}(\eta)\theta = \dfrac{1}{3}f^{(3)}(\xi)$

令 $h \to 0, \eta \to x, \xi \to x$

由于连续，所以可以穿过极限：

$f^{(3)}(x)\theta = \dfrac{1}{3}f^{(3)}(x)$

如果有三阶导数不等于零，那么 $\theta = \dfrac{1}{3}$，矛盾。

所以三阶导数一定全为 $0$，则它必定为二次函数。

> 11.15

1) 

$x_n = \sin(x_{n - 1})$

$x_n \to 0, (n\to \infty)$。

$x_1 = \sin x_0 \in (0, 1) \Rightarrow x_2 = \sin x_1 \in (0,1) \Rightarrow x_n \in (0, 1)$

$x_n = \sin(x_{n - 1}) \le x_{n - 1} (\text{Jordan})$

设 $\lim\limits_{n \to \infty} x_n = A$。

$A = \sin A \Rightarrow A = 0$

2) 

求 $\lim\limits_{n \to \infty} n x_n^2$

用 Stolz

$n x_n^2 = \dfrac{n}{\dfrac{1}{x^2_n}}$

然后上面其实应该是 $x_n < x_{n - 1}$，这样才能符合 Stolz 的要求。

（中间省略）

$=\lim\limits_{n\to \infty}\dfrac{x^2_n \cdot x^2_{n - 1}}{x_{n - 1}^2 - x^2_n}$。

然后全部换成 $t = x_{n - 1}$

$\lim\limits_{t \to 0} \dfrac{(\sin t)^2 \cdot t^2}{t^2 - \sin^2 t}$

然后用 Taylor 定理或者洛必达。

3)

$\lim\limits_{n \to \infty} \left(\dfrac{x_{n + 1}}{x_n}\right)^{\dfrac{1}{x_n^2}} = A$

那么 $\ln A = \lim\limits_{n \to \infty}\dfrac{\ln(\dfrac{x_{n + 1}}{x_n})}{x^2_n} = \lim\limits_{n \to \infty} \dfrac{\ln(\dfrac{\sin(x_n)}{x_n})}{x^2_n}$

令 $t = x_n$ 即可。

然后洛必达。

### 7

> 11.9

对于这种

$\begin{cases}x = \phi(t) \\ y = \psi(t) \end{cases}$

的方程，要知道：

$\dfrac{\text{d}y}{\text{d}x} = \dfrac{\frac{\text{d}y}{\text{d}t}}{\frac{\text{d}x}{\text{d}t}} = \dfrac{\psi^{\prime}(t)}{\phi^{\prime}(t)} = f(t)$

并且：

$\dfrac{\text{d}^2y}{\text{d}x^2} = \dfrac{\text{d}(\frac{\text{d}y}{\text{d}x})}{\text{d}x} = \dfrac{\text{d}f}{\text{d}x} = \dfrac{\frac{\text{d}f}{\text{d}t}}{\frac{\text{d}x}{\text{d}t}}$

### 8

> 11.10(2)：计算数列极限：$\lim\limits_{n \to \infty} n \sin(2\pi e n!) = ?$

这非常麻烦

注意到这个 $n!$，很难不想到 Taylor 展开 $e$ 来抵消掉它。

因为 $e^x = 1 + x + \dfrac{1}{2!}x^2 + \dfrac{1}{3!}x^3 + \cdots + \dfrac{x^n}{n!} + \dfrac{e^{\xi}}{(n + 1)!}x^{n + 1}$

其中 $\xi \in (0, x)$

带入 $x = 1$

$e^x = 1 + 1 + \dfrac{1}{2!} + \dfrac{1}{3!} + \cdots + \dfrac{1}{n!} + \dfrac{e^{\xi}}{(n + 1)!}$

带进去看看

$2\pi e n! = 2\pi\left[n! + n^{\underline{n - 1}} + n^{\underline{n - 2}} + \dots + 1 + \dfrac{e^{\xi}}{n + 1}\right]$

前面一大坨全是整数，有这个 $2\pi$ 直接全部没有了。

所以原式 $= \lim\limits_{n \to \infty}n \sin (\dfrac{2\pi e^{\xi}}{n + 1})$，其中 $\xi \in (0, 1)$

这里用 Taylor 定理计算极限。

来利用 $\sin x = x - \dfrac{1}{3!} x^3 + o(x^4), (x \to 0)$

所以 $\sin(\dfrac{2\pi e^{\xi}}{n + 1}) = \dfrac{2\pi e^{\xi}}{n + 1} - \dfrac{1}{6}\left(\dfrac{2\pi e^{\xi}}{n + 1}\right)^3 + o(\dfrac{1}{(n + 1)^4}), (n \to \infty)$

（这个地方 $n \to \infty$ 是因为整体 $\to 0$）

乘上 $n$。

$n\sin(\dfrac{2\pi e^{\xi}}{n + 1}) = \dfrac{2n\pi e^{\xi}}{n + 1} - \dfrac{n}{6}\left(\dfrac{2\pi e^{\xi}}{n + 1}\right)^3 + no(\dfrac{1}{(n + 1)^4}), (n \to \infty)$

于是原极限 $= 2\pi e^{\xi}$

现在有个问题是，$\xi$ 怎么消不掉？

肯定必须要展开，所以问题可能是，**精度不够**

多展开一项，那么 $n\sin(2\pi e n!) = n\sin(\dfrac{2\pi}{n + 1} + \dfrac{2\pi e^{\xi}}{(n + 1)(n + 2)})$

$\sin$ 那边展开也要做点变化（多展开也没用），$\sin x = x + o(x^2), (x \to 0)$。

$n \sin x = n [\dfrac{2\pi}{n + 1} + \dfrac{2\pi e^{\xi}}{(n + 1) (n + 2)}] + n o(x^2)$。

所以 $n \to \infty$ 时，$n \sin (2\pi e n!) \to \lim\limits_{n \to \infty} \dfrac{2\pi n}{n + 1} = 2\pi$

### 9

> 11.10(3)：求数列极限: $\lim\limits_{n\to \infty}n\left[(1 + \dfrac{1}{n})^{n} - e\right]$

想用 Taylor 展开，直接这样没法做（？）

看到了 $1+ \dfrac{1}{n}$，所以想套个 $\ln$ 上去。

所以用对数恒等式：$(1 + \dfrac{1}{n})^n = e^{\ln(1 + \frac{1}{n})^n} = e^{n \ln (1 + \frac{1}{n})}$

由于 $\ln(1 + \dfrac{1}{n}) = \dfrac{1}{n} - \dfrac{1}{2}\dfrac{1}{n^2} + \dfrac{1}{3}\dfrac{1}{n^3} + o(\dfrac{1}{n^3})$

然后 $e^{n \ln(1 + \frac{1}{n})} = e \cdot e ^{-\frac{1}{2n}} \cdot e^{\frac{1}{3n^2}} \cdot e^{o(\frac{1}{n^2})}$

$= e(e ^{-\frac{1}{2n}} \cdot e^{\frac{1}{3n^2}} \cdot e^{o(\frac{1}{n^2})} - 1)$

然后展开 $e^x, x = -\dfrac{1}{2n} + \dfrac{1}{3n^2} + o(\dfrac{1}{n^2})$ 有：

$= (-\dfrac{1}{2n} + \dfrac{1}{3n^2} + o(\dfrac{1}{n^2})) + \dfrac{1}{2}(-\dfrac{1}{2n} + \dfrac{1}{3n^2} + o(\dfrac{1}{n^2}))^2 + o(\dfrac{1}{n^2})$

原式 $=-\dfrac{e}{2}$

### 10

> 11.12

构造函数 $F(x) = [f(x)]^2 + [f^{\prime}(x)]^2, x \in [-2, 2]$

$F(0) = 4$

显然 $F(x)$ 在 $[-2, 2]$ 上一阶可导，用中值定理就行了。

$F^{\prime}(x) = 2f^{\prime}(x)\left[ f(x) + f^{\prime\prime}(x)\right]$

这就来了，闹麻了，就是 $F^{\prime}(x) = 0$。

可能是 Roll 也可能直接是 Fermat。

但其实原题是 $(-\infty, +\infty)$ ，根本没有提示。

但并不能直接找到条件，那就分段呗，拉格朗日呗

在 $[-2, 0]$ 上：$\exists \xi_1 \text{ s.t. } F(0) - F(-2) = F^{\prime}(\xi_1) \cdot 2$

在 $[0, 2]$ 上，$\exists \xi_2 \text{ s.t. } F(2) - F(0) = F^{\prime}(\xi_2) \cdot 2$

还有个条件：$|f(x)| \le 1$，写成 $F$ 似乎没啥用，

在 $[-2, 0]$ 上：$\exists \xi_1 \text{ s.t. } f(0) - f(-2) = f^{\prime}(\xi_1) \cdot 2$

在 $[0, 2]$ 上，$\exists \xi_2 \text{ s.t. } f(2) - f(0) = f^{\prime}(\xi_2) \cdot 2$

显然可以得到 $|f^{\prime}(\xi_1)| \le 1, |f^{\prime}(\xi_1)| \le 1$

于是就有 $F(\xi_1) \le 2, F(\xi_2) \le 2$

不要忘了 $\xi_1 \in (-2, 0), \xi_2 \in (0, 2)$。

如果 $F(0)$ 就是 $F$ 在 $[-2, 2]$ 上的极值点，由 Fermat 可以证明原命题。

所以现在只需要说明 $F(2), F(-2) < 4$

但这样好像很难做，没有充足的条件来证明。

但我们转个脑子，我们发现 $0 \in (\xi_1, \xi_2)$。

那么就做完了。

### 11

> 11.16(4)

$\int \dfrac{\text{d}x}{e^x - e^{-x}}$

直接变量替换有点难受。

一个变换：$= \int \dfrac{e^x}{e^{2x}-1} \text{d}x$

就行了。

> 11.16(7)

$\int \dfrac{\text{d}x}{\sqrt{1 + e^{2x}}} = \int \dfrac{1}{e^x\sqrt{e^{-2x} + 1}}\text{d}x = \int -\dfrac{\text{d}(e^{-x})}{\sqrt{1 + (e^{-x})^2}}$

去掉根号可以用三角换元。

或者分步积分。

$= -\int \dfrac{\sec^2\theta}{\sec \theta} \text{d} \theta = -\int \sec \theta \text{d} \theta = -\int \dfrac{\text{d}\theta}{\cos \theta} = -\int \dfrac{\cos \theta \text{d}\theta}{\cos^2\theta} = -\int \dfrac{d(\sin \theta)}{1 - \sin^2 \theta}$

### 12

> 11.17(1) 令 $x^{\dfrac{4}{3}} = t$

> 11.17(2) 三角换元。

> 11.17(3) 分步积分

> 11.17(4) 万能公式

> 11.17(9)

$\int \dfrac{x^2 - 1}{x^4 + 1}\text{d}x$

$= \int \dfrac{1 - \dfrac{1}{x^2}}{x^2 + \dfrac{1}{x^2}} \text{d}x$

$= \int \dfrac{d(x + \dfrac{1}{x})}{(x + \dfrac{1}{x})^2 - 2}$。

换元，用有理函数（分式）来做。

> 11.17(12)

$\int \dfrac{x\text{d}x}{\sqrt{5 + x- x^2}}$。

还是要尝试消掉根号

$= \int \dfrac{x \text{d}x}{\sqrt{-(x ^2 - x + \dfrac{1}{4}) + \dfrac{21}{4}}}$

$= \int \dfrac{x \text{d}x}{\sqrt{-(x - \dfrac{1}{2})^2 + \dfrac{21}{4}}}$

$t = x - \dfrac{1}{2}$

$=\int \dfrac{(t + \dfrac{1}{2})\text{d}t}{\sqrt{\dfrac{21}{4} - t^2}}$

三角换元

$= \int \dfrac{(t + \dfrac{1}{2})\text{d}t}{\dfrac{\sqrt{21}}{2} \sqrt{1 - \dfrac{4}{21}t^2}} = \dfrac{2}{\sqrt{21}} \int \dfrac{(t + \dfrac{1}{2})\text{d}t}{\sqrt{1 - (\dfrac{2}{\sqrt{21}}t)}^2}$

$= \dfrac{2}{\sqrt{21}}\int \dfrac{(\dfrac{\sqrt{21}}{2}\sin \theta + \dfrac{1}{2}) \dfrac{\sqrt{21}}{2}\cos \theta \text{d}\theta}{\cos \theta}$

### 13

> 11.19(9)

$\int \dfrac{\text{d}x}{(1 + e^x)^2}$

令 $e^x = t$

$=\int \dfrac{\dfrac{1}{t}\text{d}t}{(1 + t)^2}$

然后化有理函数

$\dfrac{1}{t(1 + t^2)} = \dfrac{A}{t} + \dfrac{Bt + C}{1 + t^2}$。

对比系数解出 $A,B,C$ 即可。

### 14

> 7.10
>
> 是否找得到 $\mathbb R$ 上的连续函数 $f$，使得其与任何一条平行于水平线的直线有且仅有两个交点

答案是不存在。

任取 $\alpha \in \mathbb R$，则 $\exists a < b \text{ s.t. } f(a) = f(b) = \alpha$。

所以 $f$ 在 $[a, b]$ 上存在最大值 $M = f(x_0)$。

由于 $f$ 不是常值函数，所以 $M > f(a), f(b)$

根据假设，应该还有另一个点 $x_1 \not= x_0 \text{ s.t. } f(x_1) = M$

1) $x_1 \in (a, b)$

既然存在这样的 $x_1$，那么一定存在一个 $\beta$ 使得 $y = \beta$ 和它的交点大于两个。爆了

2) $x_1 \not\in (a, b)$。

类似的讨论，也能得到矛盾。
