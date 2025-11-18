## 数学分析笔记 - zxf - Chapter 2

本章主要讨论函数极限和连续函数。

### 函数极限

考虑 $x$ 趋近于某一点 $x_0$ 时 $f(x)$ 趋近于什么。

一个观察是，想要知道这个值，只需要观察 $x_0$ **附近**（距离足够近）的一些点。

#### 定义 2.1 Epsilon-Delta 定义

记 $O(x_0, \delta) = (x_0 - \delta, x_0 + \delta)$。

> 假设函数 $f(x)$ 在 $x_0$ 的去心邻域 $O(x_0, \rho) / \{x_0\} = \{x:0 < |x - x_0| < \rho\}$ 上有定义。
>
> 如果 $\exists \delta \in \mathbb{R}, \delta \le \rho$ 使得：
>
> $\forall \epsilon > 0, \exists \delta = \delta(\epsilon) > 0, \text{ s.t. when } 0 < |x - x_0| < \delta: |f(x) - A| < \epsilon$。
>
> 那么则称 $f(x)$ 在 $x_0$ 点的极限存在，记为 $\lim\limits_{x \to x_0} f(x) = A$。

理解就是，当 $x$ 和 $x_0$ 靠的足够近的时候，$f(x)$ 和 $A$ 可以做到距离任意近。

注意：$\delta$ 应该 $\le \rho$ ，或者把 $\rho$ 换成 $\delta$ 然后交换第一二行的两句话。

#### 例题 2.1

> 1) $\lim\limits_{x \to 2} x^2 = 4$。
>
> 2) $\lim\limits_{x \to 1} \dfrac{x(x^2 - 1)}{x - 1} = 2$。
>
> 用定义证明这两个极限。

1)：

只需要证明：$\forall \epsilon, \exists \delta > 0, \text{ s.t. } 0 < |x - 2| < \delta: |x^2 - 4| < \epsilon$。

$|x^2 - 4| = |x - 2| |x + 2| < \delta |x + 2|$。

现在就是希望 $|x + 2| < M(\text{const})$。

类似于数列极限证明，我们固定 $\epsilon$，如果能找到这样的 $M$。

那么取 $\delta = \dfrac{\epsilon}{M}$ 即可做到 $\delta |x + 2| < \epsilon \Rightarrow |x^2 - 4| < \epsilon$。

由于只需要关心 $x_0$ 附近的一些 $x$。

那不妨只考虑 $|x - 2| < 1$ 的 $x$。

那么 $|x + 2| < 5$，取 $M = 5 \Rightarrow \delta = \dfrac{\epsilon}{5}$ 即可。

证明：

取 $\rho = 1$，显然 $f(x)$ 在 $O(2, 1)$ 上有定义。

此时有 $|x + 2| < 5 \Rightarrow |x - 2||x + 2| = |x^2 - 4| < 5|x- 2|$ 且 $\delta \le 1$。

$\forall \epsilon > 0$，取 $\delta = \min\{1, \dfrac{\epsilon}{5}\} \Rightarrow \delta|x - 2| < 5\delta < \epsilon$。

即：$\forall \epsilon > 0, \exists \delta = \min\{1, \dfrac{\epsilon}{5}\} \text{ s.t. when } 0 < |x - 2| < \delta: |x^2 - 4| < \epsilon$。

注记：同数列极限，这里说明 $\epsilon \in (0, 1)$ 也可以，然后就不用在极限里写 $\min$，不过本质相同。

2)：

要证明：$\forall \epsilon > 0, \exists \delta > 0, \text{ s.t. when } 0 < |x - 1| < \delta: |\dfrac{x(x^2 - 1)}{x - 1} - 2| < \epsilon$

也就是证 $|\dfrac{x(x^2 - 1)}{x - 1} - 2| = |x^2 + x - 2| = |x - 1||x + 2| < \epsilon$。

所以我希望 $|x + 2|$ 是一个常数，这里和上面就一样了。

证明：取 $\rho = \dfrac{1}{2}$。

$|\dfrac{x(x^2 - 1)}{x - 1}| = |x + 2||x - 1|, (x\not=1)$。

由于 $|x - 1| < \dfrac{1}{2} \Rightarrow \dfrac{1}{2} < x < \dfrac{3}{2} \Rightarrow |x + 2| < 3.5 < 4$。（只是为了方便）

$\forall \epsilon > 0, \text{let } \delta = \min\{\dfrac{1}{2}, \dfrac{\epsilon}{4}\} \Rightarrow$

$\forall \epsilon > 0, \exists \delta = \min\{\dfrac{1}{2}, \dfrac{\epsilon}{4}\} \text{ s.t. when } 0 < |x - 1| < \dfrac{1}{2}: |\dfrac{x(x^2 - 1)}{x - 1} - 2| < \epsilon$

#### 命题 2.1 唯一性

> 如果 $f(x)$ 在 $x_0$ 的极限存在，那么这个极限一定是唯一的

证明：和数列的证明完全一致。

#### 命题 2.2 保序性

> 如果 $\lim\limits_{x\to x_0} f(x) = A, \lim\limits_{x\to x_0} g(x) = B$。
>
> $f(x) > g(x), x \in O(x_0, \rho) / \{x_0\} \Rightarrow A > B$。

#### 命题 2.3 局部保号性

> $\lim\limits_{x \to x_0}f(x) = A \not= \infty$。
>
> $\lim\limits_{x \to x_0}g(x) = B \not= \infty$。
>
> 若 $A > B$，则：
>
> $\exists\delta > 0, \text{ s.t. when } 0 < |x - x_0| < \delta: f(x) > g(x)$。

证明：

+ $\forall \epsilon > 0, \lim\limits_{x \to x_0} f(x) = A \Rightarrow \exists \delta_1 > 0, \text{ s.t. when }0 < |x - x_0| < \delta_1: |f(x) - A| < \epsilon \Rightarrow f(x) > A - \epsilon$。

+ $\forall \epsilon > 0, \lim\limits_{x \to x_0} g(x) = B \Rightarrow \exists \delta_2 > 0, \text{ s.t. when }0 < |x - x_0| < \delta_2: |g(x) - B| < \epsilon \Rightarrow g(x) < B + \epsilon$。

取 $\epsilon = \dfrac{A - B}{2}, 当 \delta = \min\{\delta_1, \delta_2\}$ 时会有 $f(x) > \dfrac{A + B}{2} > g(x)$。

于是 $f(x) > g(x)$。

#### 命题 2.4 保号性推论：

> $\lim\limits_{x\to x_0} f(x) = A > 0 \Rightarrow \exists \delta > 0, \text{ s.t. when } 0 < |x - x_0| < \delta: f(x) > \dfrac{A}{2}$。

当 $g(x)$ 为常值函数，用命题 2.3 即可。

#### 命题 2.5 局部有界性

局部是因为要在 $x_0$ 附近。

> 若 $\lim\limits_{x \to x_0}f(x) = A$ 存在。
>
> 那么 $f(x)$ 在 $x_0$ 附近有界。
>
> 也就是：$\exists M > 0, \delta > 0, \text{ s.t. when } 0 < |x - x_0| < \delta: f(x) < M$ 

证明：$\forall \epsilon > 0, \exists \delta > 0, \text{ s.t. when} 0 < |x - x_0| < \delta: |f(x) - A| < \epsilon$。

于是 $|f(x)| = |f(x) - A + A| \le |f(x) - A| + |A| < \epsilon + |A|$。

特别的取 $\epsilon = 1\Rightarrow |f(x)| \le 1 + |A| = M$（此时也确定 $\delta$ 的值）

#### 命题 2.6 两边夹法则

> 如果 $h(x) \le f(x) \le g(x)$：
>
> $\lim\limits_{x \to x_0}h(x) = \lim\limits_{x \to x_0}g(x) = L \not=\infty \iff \lim\limits_{x \to x_0}f(x) = L$。

证明也是类似数列的。

#### 定理 2.1 

> $\lim\limits_{x \to 0} \dfrac{\sin x}{x} = 1$。

理解（并不是很严格）：

画单位圆，取一半，建系：

![img](../../medias/sf-2-1.png)

$S_{AOB} < S_{\mathop{AOC}\limits^\frown} < S_{DOC}$。

$\dfrac{1}{2}\sin x < \dfrac{1}{2}x < \dfrac{1}{2}\tan x \Rightarrow \cos x < \dfrac{\sin x}{x} < 1 |x| \in (0, \dfrac{\pi}{2})$。


于是 $\sin x < x < \tan x, (x \in (0, \dfrac{\pi}{2}))$。

$1 - 2\sin^2(\dfrac{x}{2}) < \dfrac{\sin x}{x} < 1$，由于 $|\sin(\dfrac{x}{2})| < |\dfrac{x}{2}|, |x| \in (0, \dfrac{\pi}{2})$。

所以 $\lim\limits_{x \to 0} |\sin(\dfrac{x}{2})| \le 0 \Rightarrow \lim\limits_{x \to 0} \sin^2(\dfrac{x}{2}) = 0 \Rightarrow \lim\limits_{x \to 0}(1 - \sin^2(\dfrac{x}{2})) = 1 - 0 = 1$

由两边夹法则：$\lim\limits_{x \to 0} \dfrac{\sin x}{x} = 1$

但有一个问题：这个东西能够推 $(\sin x)^\prime = \cos x$（直接用定义求导数就能发现需要知道 $\dfrac{\sin\Delta x}{\Delta x}$ 的极限），而这是微积分的基础，圆的面积公式是通过积分做到的（割圆术），我们上面用了一个扇形的面积公式，这就循环论证了。

所以稍微会有点问题，要不然就只能承认某一个东西是公理，或者尝试用别的方法，一个比较直接的想法是用 $\sin$ 的级数定义，但我现在还不会。

#### 命题 2.7 函数极限的四则运算

> 假设 $\lim\limits_{x \to x_0} f(x) = A, \lim\limits_{x \to x_0} g(x) = B; A, B \in \mathbb{R}$。
>
> 1) $\forall \alpha, \beta \in \mathbb{R} \Rightarrow \lim\limits_{x \to x_0} (\alpha f(x) + \beta g(x)) = \alpha A + \beta B$。
>
> 2) $\lim\limits_{x\to x_0}[f(x) g(x)] = A\cdot B$。
>
> 3) $g(x) \text{ has no zero point and } B \not = 0 \Rightarrow \lim\limits_{x \to x_0} [\dfrac{f(x)}{g(x)}] = \dfrac{A}{B}$。

证明和数列的证明差不多。

#### 例题 2.2
 
> $\alpha \in \mathbb{R}:\lim\limits_{x \to 0} \dfrac{\sin(\alpha x)}{x} = \alpha$。

证明：

当 $\alpha \not= 0$ 时，设 $\alpha x = t$。

且 $x \to 0 \iff t \to 0$。

故原式等价于：$\lim\limits_{t \to 0} \dfrac{\sin t}{\dfrac{t}{\alpha}} = \alpha \lim\limits_{t\to 0} \dfrac{\sin t}{t} = \alpha$ 。

#### 定理 2.1 Heine 定理

> 假设 $x_0 \in \mathbb{R}, \lim\limits_{x\to x_0} f(x) = A \not= \infty \iff \forall \{x_n\} \text{ s.t. } x_n \to x_0 (n \to \infty) \text{ and } x_n \not= x_0, \text{we would have } f(x_n) \to A (n\to \infty)$。

也称作函数极限和数列极限的关系。

意思就是，对于所有极限为 $x_0$ 的数列 $\{x_n\}$，有 $f(x_n) \to A$ 是 $\lim\limits_{x\to x_0} f(x) = A$ 的充要条件（这里和上面数学语言是反过来说的，不过无所谓）

证明：

$\Rightarrow$ 是简单的：设 $\lim\limits_{x \to x_0} f(x) = A$。

取数列 $\{x_n\} \text{ s.t. } \lim\limits_{n \to \infty} x_n = x_0 \text{ and } x_n \not= x_0$。

（不取等主要是由于不能保证 $f(x_0)$ 有定义）。

$\lim\limits_{x\to x_0} f(x) = A \iff \forall \epsilon > 0, \exists \delta > 0, \text{ s.t. when } 0 < |x - x_0| < \delta, |f(x) - A| < \epsilon$。

$\lim\limits_{n \to \infty} x_n = x_0$，对上述 $\delta > 0, \exists N, \text{ s.t. } \forall n > N, |x_n - x_0| < \delta$。

由上两行，$\forall \epsilon > 0, \exists N, \text{ s.t. } \forall n > N, |f(x_n) - A| < \epsilon$。

下证 $\Leftarrow$：

也就是对于任意一个 $\{x_n\} \to x_0(n\to \infty)$，被 $f$ 作用之后收敛于 $A$ 能推出 $f(x) \to A (x\to x_0)$。

由于是从特殊到一般所以考虑反证。

假设 $x\to x_0, f(x) \not\to A$（$f(x)$ 不趋近于 $A$）。

此命题等价于 $\exists \epsilon_0 > 0, \forall \delta > 0, \exists x \text{ s.t. } 0 < |x - x_0| < \delta: |f(x) - A| \ge \epsilon_0$。

+ 取 $\delta = 1$，则存在 $x_1 \text{ s.t. } 0 < |x_1 - x_0| < 1: |f(x_1) - A| \ge \epsilon_0$
+ 取 $\delta = \dfrac{1}{2}$，则存在 $x_2 \text{ s.t. } 0 < |x_2 - x_0| < \dfrac{1}{2}: |f(x_2) - A| \ge \epsilon_0$
+ $\cdots\cdots$
+ 取 $\delta = \dfrac{1}{n}$，则存在 $x_n \text{ s.t. } 0 < |x_n - x_0| < \dfrac{1}{n}: |f(x_n) - A| \ge \epsilon_0$

此时构造了数列 $\{x_n\} \text{ s.t. } x_n \not= x_0 \text{ and } \lim\limits_{n\to \infty} x_n = x_0$。

但是 $|f(x_n) - A| \ge \epsilon_0, \forall n$，这就说明 $\{f(x_n)\}$ 不可能收敛于 $A$，这与已知条件矛盾。

#### 例题 2.3 用 Heine 定理证明极限不存在

> 证明：$x\to 0, \cos(\dfrac{1}{x})$ 的极限不存在。

取数列 $\{x_n\} = \dfrac{1}{2n\pi}$。

显然其收敛于 $0$。$\cos(\dfrac{1}{x_n}) = \cos(2n\pi) = 0$。

若其极限存在，根据 Heine 定理，$A = 0$。

再取一个数列 $\{y_n\} = \dfrac{1}{(2n + 1)\pi}$，其极限还是 $0$。

然而 $\cos(\dfrac{1}{y_n}) = -1$。矛盾了，所以它一定不收敛。

### 函数的单侧极限

#### 定义 2.2 单侧极限

> 假设 $x_0 \in \mathbb{R}, \rho > 0, (x_0 - \rho, x_0) \subset D_f$。
>
> 如果 $\exists A \in \mathbb{R} \text{ s.t. } \forall \epsilon > 0, \exists \delta > 0 \text{ when } -\delta < x - x_0 < 0: |f(x) - A| < \epsilon$。
>
> 则称 $A$ 为 $f(x)$ 在 $x_0$ 点的左极限，记作 $\lim\limits_{x\to x_0^-} f(x) = A$。
> 
> 假设 $x_0 \in \mathbb{R}, \rho > 0, (x_0, x_0 + \rho) \subset D_f$。
>
> 如果 $\exists B \in \mathbb{R} \text{ s.t. } \forall \epsilon > 0, \exists \delta > 0 \text{ when } 0 < x - x_0 < \delta: |f(x) - B| < \epsilon$。
>
> 则称 $B$ 为 $f(x)$ 在 $x_0$ 点的右极限，记作 $\lim\limits_{x\to x_0^+} f(x) = B$。
>
> 推论：$\lim\limits_{x\to x_0} f(x) = C$ 存在，当且仅当 $f(x)$ 在 $x_0$ 处的左右极限存在且均等于 $C$。

#### 例题 2.4

> 函数 $f(x) = \begin{cases} \dfrac{\sin(2x)}{x},&(x > 0) \\ 1 - x,&(x < 0)\end{cases}$。

$\lim\limits_{x \to 0^+} f(x)= \lim\limits_{x \to 0^+} \dfrac{\sin(2x)}{x} = 2$。

$\lim\limits_{x \to 0^-} f(x)= \lim\limits_{x \to 0^-} (1 - x) = 1$。

所以 $\lim\limits_{x \to 0} f(x)$ 不存在（$x \to 0$ 意味着可以任意从左边或者右边趋近）。

#### 定义 2.3 无穷远点处的极限

> $\lim\limits_{x\to +\infty} f(x) = A \in \mathbb{R}$ 的定义：
>
> $\forall \epsilon > 0, \exists X > 0 \text{ s.t. when } x > X: |f(x) - A| < \epsilon$。
>
> $\lim\limits_{x\to -\infty} f(x) = B \in \mathbb{R}$ 的定义：
>
> $\forall \epsilon > 0, \exists X > 0 \text{ s.t. when } x < -X: |f(x) - B| < \epsilon$。
>
> tips: $\lim\limits_{x\to +\infty} f(x) = +\infty$ （尽管这样写不严谨）的意义：$\forall G > 0, \exists X \text{ s.t. when } x > X: f(x) > G$（正负号排列组合一下也很好写）。
>
> 也有当 $x \to +\infty$ 极限为一个数的那种，类似于 $\forall \epsilon > 0, \exists X \text{ s.t. when } x > X: |f(x) - A| < \epsilon$。

总之，如果要描述自变量充分大就模仿数列极限里 $n > N$。

如果要描述极限充分大就是模仿无穷大量定义，正负号注意一下就可以。

#### 例题 2.5

> $f(x) = e^{\frac{1}{x}}, (x \not = 0)$。
>
> 讨论 $\lim\limits_{x\to 0^+} f(x), \lim\limits_{x\to 0^-} f(x), \lim\limits_{x\to +\infty}f(x), \lim\limits_{x \to -\infty}f(x)$。

换元，令 $t = \dfrac{1}{x}$：

+ 当 $x \to 0^+ \iff t \to +\infty$。
+ 当 $x \to 0^- \iff t \to -\infty$。
+ 当 $x \to +\infty \iff t \to 0^+$。
+ 当 $x \to -\infty \iff t \to 0^-$。

1. $\lim\limits_{x \to 0^+} e^{\frac{1}{x}} = \lim\limits_{t \to +\infty} e^t = +\infty$。
2. $\lim\limits_{x \to 0^-} e^{\frac{1}{x}} = \lim\limits_{t \to -\infty} e^t = 0$。
3. $\lim\limits_{x \to +\infty} e^{\frac{1}{x}} = \lim\limits_{t \to 0^+} e^t = 1$
3. $\lim\limits_{x \to -\infty} e^{\frac{1}{x}} = \lim\limits_{t \to 0^-} e^t = 1$

#### 定理 2.2 e

> $\lim\limits_{x \to \infty}(1+\dfrac{1}{x})^x = e$。
>
> $\lim\limits_{x \to \infty}(1 - \dfrac{1}{x})^x = \dfrac{1}{e}$



证明：

先考虑证明：$\lim\limits_{x \to +\infty}(1 + \dfrac{1}{x})^x = e$。

由于 $[x] \le x \le [x] + 1$，于是可以转换为数列的情况。

想要使用 Heine 定理，但是我们没有办法列出所有的 $\{x_n\} \to \infty$。

所以放缩：

$\dfrac{1}{[x]} \ge \dfrac{1}{x} \ge \dfrac{1}{[x] + 1}$。

换句话说：

$\Rightarrow(1 + \dfrac{1}{[x] + 1}) \le (1 + \dfrac{1}{x}) \le (1 + \dfrac{1}{[x]})$

$\Rightarrow(1 + \dfrac{1}{[x] + 1})^x \le (1 + \dfrac{1}{x})^x \le (1 + \dfrac{1}{[x]})^x$

$\Rightarrow(1 + \dfrac{1}{[x] + 1})^x \le (1 + \dfrac{1}{x})^x \le (1 + \dfrac{1}{[x]})^x \le (1 + \dfrac{1}{x})^{[x] + 1}$

$\Rightarrow(1 + \dfrac{1}{[x] + 1})^{[x]} \le (1 + \dfrac{1}{[x] + 1})^x \le (1 + \dfrac{1}{x})^x \le (1 + \dfrac{1}{[x]})^x \le (1 + \dfrac{1}{x})^{[x] + 1}$

也就是

$\Rightarrow(1 + \dfrac{1}{[x] + 1})^{[x]} \le (1 + \dfrac{1}{x})^x \le (1 + \dfrac{1}{x})^{[x] + 1}$


令 $n = [x] \ge 1 \Rightarrow x \to +\infty \iff n \to \infty$。

$\lim\limits_{n \to \infty}(1 + \dfrac{1}{n + 1})^n = e \le (1 + \dfrac{1}{x})^x \le \lim\limits_{n \to \infty}(1 + \dfrac{1}{n})^{n + 1} = e$

换句话说 $\lim\limits_{x \to +\infty} (1 + \dfrac{1}{x})^x = e$。

然后证明 $\lim\limits_{x \to -\infty}(1 + \dfrac{1}{x})^x = e$。

令 $y = -x \Rightarrow y \to +\infty \text{ and } \lim\limits_{y \to \infty}(1 - \dfrac{1}{y})^{-y}$

由于 $(1 - \dfrac{1}{y})^{-y} = (\dfrac{y - 1}{y})^{-y} = (\dfrac{y}{y - 1})^y = (1 + \dfrac{1}{y - 1})^y$。

后者换个元提出一项，其极限就是 $e$ 所以就证完了。

□

tips1： $\lim\limits_{x \to 0}(1+x)^{\frac{1}{x}} = e$。

换元，左右两边极限都证明一下就行。

tips2：$\lim\limits_{x \to 0}(1 + ax)^{\frac{1}{x}}, a\in \mathbb{R} / \{0\} = \lim\limits_{t \to 0}(1 + t)^{\frac{a}{t}}, (t = ax)$

$= e^a$。

这一步需要用到函数 $f(x) = x^a$ 在 $(0, +\infty)$ 上的连续性，才能够把 $a$ 穿过极限拿出来。

意思就是 $\lim\limits_{x \to x_0}f(x) = f(\lim\limits_{x \to x_0} x)$

#### 定理 2.3 函数极限的 Cauchy 收敛原理

> 函数极限 $\lim\limits_{x \to x_0} f(x)$ 存在且有限 $(x_0 \in \mathbb{R})$ 的充分必要条件是：
> 
> 1) $\forall \epsilon > 0, \exists \delta, \text{ s.t. when }0 < |x_1 - x_0| < \delta, 0 < |x_2 - x_0| < \delta: |f(x_1) - f(x_2)| < \epsilon$。
>
> 函数极限 $\lim\limits_{x \to +\infty} f(x)$ 存在且有限 $(x_0 \in \mathbb{R})$ 的充分必要条件是：
>
> 2) $\forall \epsilon > 0, \exists X > 0 \text{ s.t. } \forall x_1, x_2 > X, |f(x_1) - f(x_2)| < \epsilon$


证明 1)：

证明 $\Rightarrow$：设 $\lim\limits_{x \to x_0} f(x) = A \not= \infty$。

有：$\forall \epsilon > 0, \exists \delta > 0, \text{ s.t. when } 0 < |x - x_0| < \delta: |f(x) - A| < \dfrac{\epsilon}{2}$

对于任意的 $x_1,x_2$，满足 $\begin{cases}0 < |x_1 - x_0| < \delta \\ 0 < |x_2 - x_0| < \delta \end{cases}$ 有 $\begin{cases}|f(x_1) - A| < \dfrac{\epsilon}{2} \\ |f(x_2) - A| < \dfrac{\epsilon}{2}\end{cases}$

插入一项：

$|f(x_1) - f(x_2)| \le |f(x_1) - A| + |f(x_2) - A| < \epsilon$

证明 $\Leftarrow$：用 Heine 定理

任取数列 $\{x_n\} \text{ s.t. } x_n \to x_0 (n \to \infty) \text{ and } x_n \not= x_0 (\forall n)$。

下证 $f(x_n)$ 是收敛的即可。

只需要证明 $\{f(x_n)\}$ 是 Cauchy 列：$\forall \epsilon > 0, \exists N \text{ s.t. when } n, m > N, |f(x_m) - f(x_n)| < \epsilon$

由假设：$\forall \epsilon > 0, \exists \delta \text{ s.t. when } 0 < |x - x_0| < \delta, 0 < |y - x_0| < \delta : |f(x) - f(y)| < \epsilon$。

而根据 $x_n \to x_0$ 可以知道对于 $\delta, \exists N, \text{ s.t. } \forall n > N, |x_n - x_0| < \delta$。

也就是说 $n, m > N$ 时 $x_n, x_m$ 都满足假设条件。

所以 $\{f(x_n)\}$ 是 Cauchy 列，其收敛，假设其收敛于 $B$（不一定等于 $A$）

再取 $\{y_n\} \not= \{x_n\}, \text{ s.t. } y_n \to x_0 (n \to \infty)$。

重复上面的操作，$\{f(y_n)\}$ 收敛，记 $f(y_n) \to C$。

下证 $B = C$。

由于 $\{x_n\} \to x_0 \text{ and } \{y_n\} \to x_0 (n \to \infty)$。

$\exists N, \text{ s.t. when } n > N: 0 < |x_n - x_0| < \delta, 0 < |y_n - x_0| < \delta$。

$\Rightarrow |f(x_n) - f(y_n)| < \epsilon$

由于 $\lim\limits_{n \to \infty} |x_n| = |\lim\limits_{n \to \infty} x_n|$（连续性）

两边取极限所以 $|B - C| \le \epsilon$。

换句话说 $|B - C|$ 可以做到任意小，$B = C$。

由于所有收敛于 $x_0$ 的数列都收敛于同一点即 $f(x_n) \to A (n \to \infty)$

由 Heine 定理，$\lim\limits_{x \to x_0}f(x) = A$。

□

### 连续函数

#### 定义 连续性

> 假设 $f$ 在 $x_0$ 的某个邻域 $O(x_0, \rho)$ 上有定义。
>
> 称 $f$ 在 $x_0$ 点连续，如果 $\lim\limits_{x \to x_0} f(x)$ 存在且等于 $f(x_0)$。

如果用 $\epsilon-\delta$ 定义的话 $|x - x_0| < \delta$ 即可，因为可以等于零。

左右连续是可以同理定义的。

> 假设 $f$ 在 $x_0$ 的某个邻域 $(x_0 - \delta, x_0]$ 上有定义。
>
> 称 $f$ 在 $x_0$ 点左连续，如果 $\lim\limits_{x \to x_0^-} f(x)$ 存在且等于 $f(x_0)$。
>
> 假设 $f$ 在 $x_0$ 的某个邻域 $[x_0, x_0 + \delta)$ 上有定义。
>
> 称 $f$ 在 $x_0$ 点右连续，如果 $\lim\limits_{x \to x_0^+} f(x)$ 存在且等于 $f(x_0)$。

注记：如果 $f(x)$ 在 $x_0$ 点连续，**当且仅当** $f(x)$ 在 $x_0$ 点既是左连续的又是右连续的。

注记：称 $f(x)$ 在 $I$ 上连续，如果 $\forall x_0 \in I, f$ 在 $x_0$ 点连续（如果是闭区间左右的话就只需要满足单侧极限）。

#### 例题 几个例子

> $f(x) = x$ 在 $(-\infty, +\infty)$ 上连续。

证明：要证明 $f(x) = x$ 在 $(-\infty, +\infty)$ 上连续，只需要证明，$f(x)$ 在任意一点 $x_0 \in \mathbb{R}$ 处是连续的。

也就是证明 $\forall \epsilon > 0, \exists \delta=\delta(\epsilon, x_0), \text{ s.t. when } |x - x_0| < \delta : |f(x) - f(x_0)| = |x - x_0| < \epsilon$

取 $\delta = \epsilon$ 即可。

> $g(x) = x^2$ 在 $(-\infty, +\infty)$ 上连续。

即证明 $\forall \epsilon > 0, \exists \delta = \delta(\epsilon, x_0) \text{ s.t. when } |x - x_0| < \delta: |g(x) - g(x_0)| = |x^2 - x_0^2| = |x - x_0||x + x_0| < \epsilon$

不妨只考虑 $x_0$ 的邻域 $(x_0 - 1, x_0 + 1)(\rho = 1)$。

所以 $|x + x_0| < 2x_0 + 1$，令 $\delta = \min\{\dfrac{\epsilon}{2x_0 + 1}, 1\}$ 即可。

> $f(x) = \dfrac{1}{x}$ 在 $(0, +\infty)$ 上连续。

只需要证明：$\forall \epsilon > 0, \exists \delta = \delta(\epsilon, x_0), \text{ s.t. when } |x - x_0| < \delta : |f(x) - f(x_0)| = |\dfrac{1}{x} - \dfrac{1}{x_0}| < \epsilon$

由于 $|\dfrac{1}{x} - \dfrac{1}{x_0}| = |\dfrac{x_0 - x}{xx_0}| = |\dfrac{x - x_0}{xx_0}|$。

然后 $|\dfrac{1}{xx_0}|$ 怎么弄成常数 $\le M$？用刚才那个 $\rho = 1$ 可能会让 $x < 0$，再取小一点还是不行。

取 $\rho = \epsilon$？$\Rightarrow x \in (x_0 - \epsilon, x_0 + \epsilon)$。

所以 $\dfrac{1}{xx_0} \le \dfrac{1}{x_0^2 - \epsilon x_0}$。

令 $\delta = \epsilon(x_0^2 - \epsilon x_0) = \epsilon x_0^2 - \epsilon^2x_0$ 吗？还是不行，这么做是想表示任意小，但问题是 $\epsilon$ 任意，也可能让 $x_0 - \epsilon < 0$。

换个思路，考虑满足 $|x - x_0| < \dfrac{x_0}{2}$ 的 $x$。

此时有：$\dfrac{x_0}{2} < x < \dfrac{3x_0}{2}$。

所以 $\dfrac{1}{xx_0} \le \dfrac{2}{x_0^2}$，于是取 $\delta = \dfrac{\epsilon x_0^2}{2}$ 即可。

> $f(x) = \sqrt x$ 在 $(0, +\infty)$ 上成立。

Method1：

要证 $\forall \epsilon > 0, \exists \delta = \delta(\epsilon, x_0), \text{ s.t. when } |x - x_0| < \delta : |f(x) - f(x_0)| = |\sqrt x - \sqrt{x_0}| < \epsilon$。

$|\sqrt x - \sqrt{x_0}| = |\dfrac{x - x_0}{\sqrt x + \sqrt {x_0}}|$。

换句话说希望 $|\dfrac{1}{\sqrt x + \sqrt{x_0}}|$ 为一个常数。

这里分开的且 $\sqrt x \ge 0$，那不直接扔掉就行了：$|\dfrac{1}{\sqrt x + \sqrt{x_0}}| < |\dfrac{1}{\sqrt{x_0}}|$。

取 $\delta = \epsilon \sqrt{x_0} > 0$ 即可。

Method2：

由 $a \ge b \ge 0 \Rightarrow \sqrt[n] a - \sqrt[n] b \le \sqrt[n]{a - b}$

有不等式：$|\sqrt x - \sqrt{x_0}| \le \sqrt{|x - x_0|}$。

取 $\delta = \epsilon^2$。

那么 $|\sqrt x - \sqrt{x_0}| \le \sqrt{|x - x_0|} \le \sqrt{\delta} < \sqrt{\epsilon^2} = \epsilon$。

> $f(x) = \sqrt x$ 在 $[0, 1]$ 上连续

由于已经证明了 $(0, +\infty) \Rightarrow (0, 1]$ 上连续。

只需要证明 $f(x)$ 在 $0$ 点右连续。

即 $\forall \epsilon > 0, \exists \delta \text{ s.t. when } 0 < x - 0 < \delta : |f(x) - f(0)| < \epsilon$。

也就是 $|\sqrt x| < \epsilon$。取 $\delta = \epsilon^2$ 即可。

> $f(x) = \sin x, g(x) = \cos x$ 在 $\mathbb{R}$ 上连续。

证明对于 $\forall x_0 \in \mathbb{R}$ 有：

$\forall \epsilon > 0, \exists \delta \text{ s.t. when } 0 < |x - x_0| < \delta : |f(x) - f(x_0)| = |\sin x - \sin x_0|< \epsilon$。

$|\sin x - \sin x_0| = |2\sin\dfrac{x - x_0}{2}\cos\dfrac{x + x_0}{2}|$

$\le 2|\sin \dfrac{x - x_0}{2}| \le 2 |\dfrac{x - x_0}{2}| = |x - x_0|$ 于是取 $\delta = \epsilon$。

（$|\sin t| \le |t|, t \in \mathbb{R}$）。

**注记**：以上几个例子都是从连续性定义出发，实质也就是证明某一个点的极限，思路自然也是通过找常数上界（利用 $\delta = \delta(\epsilon, x_0)$ 的性质）放缩来证明不等式成立。

之后会有关于连续函数四则运算还有反函数连续性的东西。

于是初等函数就只差指数函数和对数函数。

然而，有一个问题，$a^x$ 怎么定义？

先定义指数函数 $f(x) = a^x, a > 0 \land a \not= 1$，其中 $x \in \mathbb{R}$。

已经知道：

1) $a \ge 0, m, n \in \mathbb{N}+, a^{\frac{m}{n}} \equiv (a^{(\frac{1}{n})^m}), \text{ where } \sqrt[n] a$ 是 $a$ 的 $n$ 次算术平方根。

2) $a > 0, a^{-1} \equiv \dfrac{1}{a}, a^{-\frac{m}{n}} = \dfrac{1}{a^{\frac{m}{n}}}$。

3) $a \not= 0, a^0 = 1$.

于是：$a > 0$ 时，$a$ 的任意有理次方幂 $a^q, (q \in \mathbb{Q})$ 都有定义。

> 命题：$\forall a > 0, p, q \in \mathbb{Q} \Rightarrow$
> 
> 1) $a > 1, p > q \Rightarrow a^p > a^q$。
>
> 2) $0 < a < 1, p > q \Rightarrow a^p < a^q$。
>
> 3) 引理：$a > 1, p, q \in \mathbb{Q}, |p - q| < 1 \Rightarrow |a^p - a^q| \le a^q(a - 1)|p - q|$。
>
> 4) 引理：$a > 1, \{q_n\} \subset \mathbb{Q}$ 为 Cauchy 列；即 $\forall \epsilon > 0, \exists N \text{ s.t. when } n, m > N : |q_n - q_m| < \epsilon$，则 $\{a^{q_n}\}$ 也是 Cauchy 列。（由引理 3 + 收敛数列有界即可证明，不过在取常数那一步需要注意一下取的一个 $a^t$ 的 $t$ 需要是实数。）

定义：

> 设 $a > 0, x\in \mathbb{R}$，定义 $a^x \equiv \lim\limits_{n\to\infty}a^{q_n}, \text{ where } \lim\limits_{n\to \infty}\{q_n\} = x, q_n \in \mathbb{R}$。
>
> 设 $a \in (0, 1)，a^x \equiv \dfrac{1}{(\dfrac{1}{a})^x}$
>
> 注：上述定义中，$\{q_n\}$ 的选择是任意的（因为 $|a^{q_n} - a^{p_n}| \le C|p_n - q_n|$（引理三的不等式），同时取极限可以知道 $0 \le \lim\limits_{n\to \infty}|a^{q_n} - a^{p_n}| \le 0$，由于这两个**极限都存在**所以应当是相等的。）

命题：

> 假设 $a > 0, x, y \in \mathbb{R}$
> 
> 1) $a^x \cdot a^y = a^{x + y}$。
>
> 2) $a > 1, x > y \Rightarrow a^x > a^y$。
>
> 3) $a \in (0, 1), x > y, \Rightarrow a^x < a^y$。

证明：1)

取 $\{p_n\} \subset \mathbb{Q}, \{q_n\} \subset \mathbb{Q}, \text{ s.t. } p_n \to x, q_n \to y$。

那么 $a^x = \lim\limits_{n \to \infty} a^{p_n}; a^y = \lim\limits_{n \to \infty}a^{q_n}$

由此：$a^x \cdot a^y = \lim\limits_{n \to \infty}(a^{p_n} \cdot a^{q_n}) = \lim\limits_{n \to \infty}(a^{p_n + q_n})$（这步是因为只定义了有理数的幂运算）

又因为 $(p_n + q_n) \to (x + y)$。

取 $r_n = p_n + q_n \Rightarrow a^x\cdot a^y =  \lim\limits_{n\to \infty} a^{r_n} = a^{x + y}$。

证明：2)

取 $\{p_n\} \subset \mathbb{Q}, \{q_n\} \subset \mathbb{Q}, \text{ s.t. } p_n \to x, q_n \to y$。

那么 $a^x = \lim\limits_{n \to \infty} a^{p_n}; a^y = \lim\limits_{n \to \infty}a^{q_n}$

由于 $x > y \Rightarrow \exists N \text{ s.t. when } n > N, p_n > q_n \Rightarrow a^{p_n} > a^{p_n}$（保号性）

两边取极限，注意这个时候可能等。

$\lim\limits_{n \to \infty} a^{p_n} \ge \lim\limits_{n \to \infty} a^{q_n}$。

现在来排除相等的情况，反证。

在 $x, y$ 之间取两个有理数 $r, s$ 其中 $y < s < r < x$。（稠密性）

所以 $a_x \ge a_r \ge a_s \ge a_y$。

由于 $r, s$ 是有理数所以 $a_r > a_s$，于是就排除了相等的情况。

命题：

> 指数函数 $f(x) = a^x$ 是连续的。

证明：（只考虑 $a > 1$）

即证：$\forall x_0 \in D_f = \mathbb{R}, \forall \epsilon > 0, \exists \delta \text{ s.t. when } 0 < |x - x_0| < \delta : |f(x) - f(x_0)| = |a^x - a^{x_0}| < \epsilon$

由于 $|a^x - a^{x_0}| = |a^{x_0}||a^{x - x_0} - 1| \le |a^{x_0}|(a - 1)|x - x_0|$（由于定义了指数函数所以这个不等式对实数也成立了）

取 $\delta = \dfrac{\epsilon}{|a^{x_0}|(a - 1)}$ 就行（？）

好像不是这么证明的，想想有什么问题。下面是标准解答：

就是要证明 $\lim\limits_{x \to x_0} (a^{x - x_0} - 1) = 0$

令 $t = x - x_0 \iff \text{ prove: } \lim\limits_{t \to 0} a^t = 1$

先证明 $\lim\limits_{t \to 0^+} a^t= 1$，由于 $1 = a^0 < a^t \le a^{\frac{1}{[t^{-1}]}}$。

令 $n \equiv \dfrac{1}{[t^{-1}]} \ge 1 \Rightarrow a^{\frac{1}{n}} = \sqrt[n]a$。

当 $t \to 0^+$ 时，$n \to \infty$，两边同时取极限：$1 \le \lim\limits_{t \to 0^+} a^t \le \lim\limits_{n\to +\infty}\sqrt[n]a$。

所以 $\lim\limits_{t \to 0^+} a^t = 1$。

再证 $\lim\limits_{t \to 0^-} a^t = 1$，令 $s \equiv -t \Rightarrow s \to 0^+ \Rightarrow \lim\limits_{s \to 0^+} a^s = 1$，这是证明过了的。

所以 $\lim\limits_{t \to 0^-} a^t = \lim\limits_{s \to 0^+} a^{-s} = \lim\limits_{s \to 0^+} \left(\dfrac{1}{a^s}\right) = 1$。

（这里需要承认连续函数极限的四则运算，下面会写）

综上 $f(x) = a^x (a > 1)$ 是连续的。

定义：

> 设由于 $f(x)=a^x,(a > 0, a\not=1)$ 严格单调。
>
> 定义 $f^{-1}(x) = \log_ax$。
>
> 由指数函数的运算法则：有 $\begin{cases}a > 1, \log_a t \text{ up} \\ a \in (0, 1), \log_a t \text{ down} \\ \log_a(st) = \log_as + \log_at\end{cases}$

#### 命题 连续函数的四则运算

> 设 $f, g$ 在区间 $I$ 上连续。
>
> 1) $\forall \alpha, \beta \in \mathbb{R}, \alpha f + \beta g$ 在 $I$ 上连续
> 2) $(f\cdot g)(x)\equiv f(x)\cdot g(x)$ 在 $I$ 上连续
>
> 3) $g$ 在 $I$ 上没有零点，$(\dfrac{f}{g})(x) \equiv \dfrac{f(x)}{g(x)}$ 在 $I$ 上连续。

证明还是类似函数极限四则运算。（下来写一下线性变换这个）

#### 定理 反函数的连续性

> 若 $y = f(x)$ 在 $x \in [a, b]$ 上严格单调，且为连续的。
>
> 记 $f(a) = \alpha, f(b) = \beta$（此处认为递增）
>
> 则 $y \in [\alpha, \beta]$ 上存在反函数 $x = g(y)$ 且也为严格单调且连续。

tips：反函数单调性和原函数一致

证明：不妨设 $y = f(x)$ 严格递增且连续，下证 $x = g(y)$ 也是连续的。

即证，任取 $y_0 \in D_g; \forall \epsilon > 0, \exists \delta \text{ s.t. when } 0 < |y - y_0| < \delta: |g(y) - g(y_0)| < \epsilon$。

记 $x_0 = g(y_0) \iff y_0 = f(x_0)$。

由假设：$\forall x_0 \in D_f, \forall \delta > 0, \exists \eta \text{ s.t. when } 0 < |x - x_0| < \eta: |f(x) - f(x_0)| < \delta$。

带入 $f(x_0) = y_0$：

$\forall y_0 \in D_g, \forall \delta > 0, \exists \eta \text{ s.t. when } 0 < |g(y) - g(y_0)| < \eta: |y - y_0| < \delta$。

这也不对，好像没法反推回去。

考虑到：

$|g(y) - g(y_0)| < \epsilon \iff |x - x_0| < \epsilon \iff x_0 - \epsilon < x < x_0 + \epsilon$

$\iff f(x_0 - \epsilon) < f(x_0) < f(x_0 + \epsilon)$。

换句话说只需要 $f$ 单调递增。

但我们还需要 $0 < |y - y_0| < \delta$ 的条件。

继续：

$\iff f(x_0 - \epsilon) - f(x_0) < f(x) - f(x_0) < f(x_0 + \epsilon) + f(x_0)$

$\iff f(x_0 - \epsilon) - f(x_0) < y - y_0 < f(x_0 + \epsilon) + f(x_0) \cdots (@)$。


取 $\delta = \min\{f(x_0 + \epsilon) - f(x_0), f(x_0 - \epsilon) - f(x_0)\}$

这样，当 $|y - y_0| < \delta$ 时，会有 $f(x_0 - \epsilon) - f(x_0) < y - y_0 < f(x_0 + \epsilon) + f(x_0)$。

换句话说 $|y - y_0| < \delta \Rightarrow (@) \iff |g(y) - g(y_0)|$。

所以证完了。

#### 定理 复合函数的连续性

> 设 $u = g(x)$ 在 $x_0$ 是连续的，令 $u_0 = g(x_0)$。
>
> 设 $f(u)$ 在 $g(x_0)$ 点是连续的。 
>
> 则 $f o g \equiv f(g(x))$ 在 $x_0$ 点连续。

证明：

由题：$\forall \epsilon > 0, \exists \delta \text{ s.t. when } 0 < |x - x_0| < \delta : |g(x) - g(x_0)| = |u - u_0| < \epsilon$

又有 $\forall \eta > 0, \exists \sigma \text{ s.t. when } 0 < |u - u_0| < \sigma : |f(u) - f(u_0)| = |f(g(x)) - f(g(x_0))| < \eta$

证明还是考虑类似上面的把 $f, g$ 拿进去作用一下之后互推：

那也就是 $0 < |x - x_0| < \delta \Rightarrow |g(x) - g(x_0)| < \epsilon \iff |u - u_0| < \epsilon \Rightarrow 0 < |u - u_0| < \epsilon \Rightarrow |f(u) - f(u_0)| < \eta \iff |f(g(x)) - f(g(x_0))| < \eta$。

那么，$\forall \eta > 0, \exists \delta \text{ s.t. when } 0 < |x - x_0| < \delta: |f(g(x)) - f(g(x_0))| < \eta$。

#### 定义 幂函数

> $\forall \alpha \in \mathbb{R}, \forall x > 0$
>
> 定义 $x^\alpha$ 为 $x^\alpha \equiv e^{\ln x^\alpha} \equiv e^{\alpha \ln x}$。

由复合函数连续性，其为连续的。

注意这里 $\equiv$，我们并不假定 $x^\alpha$ 就一定是实数，只是按照这样的形式定义，虽然最后确实是实数。

#### 定理 基本初等函数

> 基本初等函数：
>
> 1) 常值函数 $f(x) = c$。
>
> 2) 三角函数 $f(x) = \sin x, \cos x, \tan x, \cdots$。
>
> 3) 反三角函数 $f(x) = \arcsin x, \arccos x, \arctan x, \cdots$。
>
> 4) 指数函数 $f(x) = a^x$。
>
> 5) 对数函数 $f(x) = \log_a x$
>
> 6) 幂函数 $f(x) = x^a$。
>
> 在定义域内均为连续的。

这六个都已经在上面证明过。

#### 定义 不连续点的分类

注意（极限存在默认不为无穷！）

> 1) 如果 $f$ 在 $x_0 \in \mathbb{R}$ 的左右极限都存在但不相等，那么 $x_0$ 为 $f$ 的第一类不连续点。
>
> 2) 如果 $f$ 在 $x_0 \in \mathbb{R}$ 的左右极限至少有一个不存在，那么 $x_0$ 为 $f$ 的第二类不连续点（无穷间断点）。
>
> 3) 如果 $f$ 在 $x_0 \in \mathbb{R}$ 的左右极限相等但不等于 $f(x_0)$，那么 $x_0$ 为 $f$ 的第三类不连续点（可去间断点）。

给几个例子：

1) $f(x) = \text{sgn}(x)$，$x = 0$ 处的左右极限存在不相等，所以是第一类。
2) $f(x) = \dfrac{1}{x}, g(x) = e^{\frac{1}{x}}$，$0$ 显然为 $x$ 的第二类不连续点。但 $g$ 的图像并不好画，直接分析：$\lim\limits_{x \to 0^+} e^{\frac{1}{x}} = +\infty, \lim\limits_{x \to 0^-} e^{\frac{1}{x}} = 0$，$0$ 也是 $g$ 的第二类不连续点。
3) $f(x) = \begin{cases}\dfrac{\sin x}{x}, &x \not= 0 \\ 0, &x = 0 \end{cases}$，$0$ 处的左右极限都是 $1 \not= f(0) = 0$，所以 $0$ 是 $f$ 的第三类不连续点。

#### 定理 Riemann 函数的连续性

> 设 Riemann 函数 $\zeta(x) = \begin{cases}\dfrac{1}{p} ,&x=\dfrac{q}{p}\\ 1, &x=0 \\0 , &x\in \mathbb{R / Q}\end{cases}$，
>
> 其中 $p \in \mathbb{N}+, q \in \mathbb{Z}/\{0\}, \gcd(p, q) = 1$
>
> 则 $\zeta(x)$ 在所有无理点连续，有理点间断。

证明：$\forall x_0 \in \mathbb{Q}$，下证 $\zeta$ 在 $x_0$ 处不连续，而 $\zeta(x_0) \not= 0$。

只需要证明 $\lim\limits_{x \to x_0} \zeta(x) \to 0$，但它的表达式很难写。那只能考虑反证。

假设 $\zeta(x)$ 在 $x_0$ 是连续的，由于无理数在实数轴上稠密，所以 $\exists \{x_n\} \subset \mathbb{R/Q} \text{ s.t. } x_n \to x_0 (n \to \infty)$。

两边极限一下：$\lim\limits_{n \to \infty}\zeta(x_n) = 0$。

由连续性：$\zeta(\lim\limits_{n \to \infty} x_n) = 0 = \zeta(x_0) \not= 0$，这是矛盾的，所以 $\zeta(x)$ 在有理点都是间断的。

下证 $\zeta$ 在 $\forall x_0 \in \mathbb{R/Q}$ 处是连续的。

先证明 $\zeta$ 在 $x_0 \in [0, 1] \cap \mathbb{R/Q}$ 处是连续的。

任取 $\epsilon > 0$，声明：使得 $\zeta (x) \ge \epsilon$ 的 $x \in [0, 1]$ 只有有限个，下面说明：

也就是：

+ $x = 0, \zeta(x) = 1 \ge \epsilon$ 的 $x$ 只有有限个
+ $x = \dfrac{q}{p}, \zeta(x) = \dfrac{1}{p} \ge \epsilon \iff 1 \le p \le \epsilon^{-1}$，这样的 $x$ 只有有限个。
+ $x \not\in \mathbb{Q}, \zeta(x) = 0$，这样的 $x$ 不存在。

设 $x = \dfrac{q}{p} \in [0, 1] \text{ s.t. } \zeta(x) \ge \epsilon \Rightarrow \dfrac{1}{p}\ge \epsilon \Rightarrow 0 < q < p \le\dfrac{1}{\epsilon}$

所以，满足 $\zeta(x) \ge \epsilon$ 的 $x$ 只有有限个（对于给定的 $\epsilon$）。

所以声明成立，由此，可以选择充分小的 $\delta > 0\text{ s.t. } (x_0 - \delta, x_0 + \delta)$ 中不含有使得 $\zeta(x) \ge \epsilon$ 的那些 $x$（因为这些 $x$ 是有限的）。

这就等价于 $\forall x: |x - x_0| < \delta \Rightarrow 0 \le \zeta(x) \le \epsilon \iff 0 \le \zeta(x) - \zeta(x_0) \le \epsilon$。

这就是 $x_0$ 处连续的条件，所以 $[0, 1]$ 上的都成立。

声明： $\zeta$ 是周期为 $1$ 的函数，下面说明：

+ 若 $x \in \mathbb{R/Q}, \zeta(x) = 0 \Rightarrow x+1 \in \mathbb{R/Q} \Rightarrow \zeta(x + 1) = 0$。
+ 若 $x = \dfrac{q}{p}, \zeta(x) = \dfrac{1}{p} \Rightarrow x + 1 = \dfrac{q + p}{p}$，由于 $\gcd(p, q) = 1 \Rightarrow \gcd(q + p, p) = 1$ 所以 $\zeta(x + 1) = \dfrac{1}{p}$。
+ 若 $x = 0, \zeta(0) = 1 = \zeta(0 + 1)$。

由此，$\zeta$ 在所有无理点都是连续的。

**Fun question**：能否找到在无理点间断，有理点连续的函数？

#### 命题

> 开区间 $(a, b)$ 上的单调函数的不连续点一定是第一类不连续点。
>
> 其中 $a \not= -\infty; b \not= +\infty$。

不妨假设单调递增。

考虑集合：$S = \{f(x): a < x < x_0\}$，其中 $x_0$ 为一任取的 $(a, b)$ 上 $f$ 的一个不连续点。

$S \not=\emptyset$，且 $\forall y \in S, y < f(x_0)$。

$S$ 有上界（由于单调），由确界原理，$S$ 一定有上确界 $\alpha$。

所以 $f(x) \le \alpha, \forall x \in (a, x_0)$。

$\forall \epsilon > 0, \exists y \in (a, x_0) \text{ s.t. } \alpha - \epsilon < f(y)$。

令 $\delta = x_0 - y$，当 $-\delta < x - x_0 < 0$ 时，$y < x < x_0$。

为什么要这样取？是为了利用单调性：

$f(y) - \alpha < f(x) - \alpha \le 0$，由于 $a - \epsilon < f(y)$。

$\Rightarrow |f(x) - \alpha| < \epsilon$。

上面这一些，等价于 $|f(x) - \alpha| < \epsilon, -\delta < x - x_0 < 0 \Rightarrow \lim\limits_{x \to x_0^-} f(x) = \alpha$。

同理，可以证明右极限也存在。

这就排除了第二类的可能性。

现在来排除第三类的可能性，画图可以知道它会违背单调的条件，下面来严谨说明：

若 $\lim\limits_{x \to x_0^-} f(x)= \lim\limits_{x \to x_0^+}f(x) \not=f(x_0)$。

若 $f(x_0) \not= \lim\limits_{x\to x_0} f(x)$，那么一定存在逆序对 $(x, y)$，和单调性矛盾。

综上，只应为第一类不连续点。

### 无穷大量、无穷小量的阶

#### 定义 无穷小量

> 如果 $x \to x_0$, $f(x) = 0$，则称当 $x \to x_0$ 时 $f(x)$ 为无穷小量（$x_0$ 可以取 $x_0^+, x_0^-,\infty$）。

#### 定义 无穷小量的比较

> 设 $x \to x_0$ 时，$u(x), v(x)$ 均为无穷小量，为比较其接近 $0$ 的速度：
>
> 1) 如果 $\lim\limits_{x \to x_0} \dfrac{u(x)}{v(x)} = 0$，则称 $u(x)$ 是关于 $v(x)$ 的高阶无穷小量，记为 $u(x) = o(v(x)), x \to x_0$。
> 
> 比如 $x^3 = o(x)$。
>
> 2) 若存在常数 $A > 0$ 使得在 $x_0$ 的某个去心邻域内有：$|\dfrac{u(x)}{v(x)}| \le A, 0 < |x - x_0| < \delta$，则称当 $x \to x_0$ 时，$\dfrac{u(x)}{v(x)}$ 有界，记作 $u(x) = O(v(x))$；如果还存在常量 $a > 0$ 使得在 $x_0$ 的某个去心邻域内有：$a \le |\dfrac{u(x)}{v(x)}| \le A, 0 < |x - x_0| < \delta$，则称 $x \to x_0$ 时，$u(x)$ 与 $v(x)$ 是同阶无穷小量；特别的，$\lim\limits_{x \to x_0}\dfrac{u(x)}{v(x)} = C \not=0$，则 $u(x), v(x)$ 为同阶无穷小量。
>
> 3) 若 $\lim\limits_{x \to x_0} \dfrac{u(x)}{v(x)} = 1$，则 $u(x), v(x)$ 为等价无穷小量，记为 $u(x) \approx v(x), x \to x_0$（用 $\sim$ 也可以）

#### 命题 等价无穷小量代换

> 当 $x \to 0$ 时，有
> 
> 1) $1 - \cos x \approx \dfrac{1}{2}x^2$
>
> 2) $\sin x \approx x$
>
> 3) $e^x - 1\approx x$
>
> 4) $\alpha \in \mathbb{R}, (1 + x)^{\alpha} - 1\approx \alpha x$。

（其实就是 Taylor 展开的前几项）

证明 3：

由 $\lim\limits_{x\to 0} (1 + \dfrac{1}{x})^x = e$。

由于 $\ln t$ 是连续的（极限和这个函数可以换顺序）

$\lim\limits_{x \to 0} [x\ln(1 + \dfrac{1}{x})] = 1 \Rightarrow \lim\limits_{x \to 0} \dfrac{\ln(1 + x)}{x} = 1$。

令 $y = e^x - 1, (y\to 0 \text{ when }x \to 0)$，所以 $\lim\limits_{x \to 0} \dfrac{e^x - 1}{x} = \lim\limits_{y \to 0} \dfrac{y}{\ln(1 + y)}$。

于是 $\lim\limits_{x \to 0} \dfrac{e^x - 1}{x} = 1$。

证明 4：用一下幂函数定义方式来做个代换。（还没证）

#### 定义 无穷大量

> 如果 $x \to x_0$ 时，$f(x) \to \infty$。
>
> 则称 $x \to x_0$ 时，$f(x)$ 为无穷大量。

#### 定义 无穷大量的比较

可以仿照无穷小量的比较来定义。

### 一致连续函数

#### 定义 一致连续

> 假设 $f$ 为定义在区间 $I$ 上的函数。
>
> 如果 $\forall \epsilon > 0, \exists \delta=\delta(\epsilon) \text{ s.t. } \forall x,y\in I, |x - y| \le \delta : |f(x) - f(y)| < \epsilon$。
>
> 则称 $f$ 在 $I$ 上一致连续。
>
> 其中 $\delta$ 只和 $\epsilon$ 有关，和 $I$ 中的点无关。
>
> 这个一致指的是 $\delta$ 一致。

例子：$f(x) = x$ 在 $\mathbb{R}$ 上一致连续，$g(x) = \sqrt x$ 在 $(0, +\infty)$ 上一致连续，$h(x) = \sin x$ 在 $\mathbb{R}$ 上一致连续。
