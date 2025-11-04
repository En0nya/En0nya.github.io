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

但有一个问题：这个东西能够推 $(\sin x)^\prime = \cos x$（直接用定义求导数就能发现需要这个），而这是微积分的基础，圆的面积公式是通过积分做到的（割圆术），我们上面用了一个扇形的面积公式，这就循环论证了。

所以稍微会有点问题，要不然就只能承认某一个东西是公理，或者尝试用别的方法，一个比较直接的想法是用 $\sin$ 的级数定义，但我现在还不会。
