## 数学分析笔记 - zxf - Chapter 1

本篇里有一定的数学公式渲染错误，例如数列的 $\left\{\right\}$ 可能不会显示，多行公式仅有一行，会尽快修好。

约定：

- $\mathbb{R, Q, N, Z, N+}$ 分别代表全体实数，全体有理数，全体自然数，全体整数，全体正整数。
- $\forall, \exists, \exists!$ 分别代表对任意，存在，存在唯一。
- $e$ 为自然对数的底数，$\epsilon$ 表示一较小正数，$\delta$ 表示一正数。

Fun fact：其实极限（limits）是不可到达的，文学上说的挑战极限存在一点逻辑错误（（

### 数列极限

一个例子：现在有数列 $\left\{a_n\right\} = \dfrac{1}{n}, n = 1,2,3,\dots$。

当 $n$ 越来越大的时候，$a_n$ 会越来越接近 $0$，称 $0$ 为 $a_n$ 的极限。

这个说法没有本质上的错误，但是它过于描述性，我们需要用一个严谨一点的数学语言描述，应该怎么办？

考虑用到极限的距离来描述，$|a_n - 0|$ 在 $n$ 变大时越来越小。

这还是不够，思考一下，我们到底需要使用极限来做什么？

一种想法是由于 $n$ 越来越大的时候 $a_n$ 会几乎挤在一起，我们为了方便想要用一个固定的常数来代替他们，当然这样的代替是有代价的，代价就是会出现一点误差。

如果我们在这个“极限” $L$ （此处为 $0$）的附近限定一个区间，只会有极少数的元素落在区间外面，用数学的语言就是，给定一个误差 $\epsilon$，我们希望大部分的 $a_n$ 都满足 $|a_n - L| < \epsilon$，仅有部分 $n \le N$ 的 $a_n$ 不满足此条件，那么在可以接受这个误差 $\epsilon$ 的前提下我们就可以用 $L$ 来代表 $\left\{a_n\right\}$。

既然是要给定误差，那么这个极限肯定要对于任意 $\epsilon$ 都满足要求，能够找出一个 $N$ 使得 $a_n$ 在给定范围内。

于是我们便能得到一个严谨的定义：

> **定义 1.1**（Weierstrass / $\epsilon-N$ 定义）：
> 
> 设数列 $\left\{a_n\right\}_{n=1}^{\infty}$，实数 $L$，
> 如果 $\forall \epsilon > 0, \exists N \text{ s.t. }\forall n > N, |a_n - L| < \epsilon$，那么称 $L$ 为数列 $\left\{a_n\right\}$ 的**极限**，或者称 $\left\{a_n\right\}$ 收敛于 $L$。
>
> 记作 $\lim\limits_{n\to\infty}\left\{a_n\right\} = L$。


说明：

$$
\begin{align}
\forall \epsilon, \exists N \text{ s.t. } \forall n > N, |a_n - L| < \epsilon \\
\forall \epsilon, \exists N \text{ s.t. } \forall n \geq N, |a_n - L| < \epsilon \\
\forall \epsilon, \exists N \text{ s.t. } \forall n \geq N, |a_n - L| \leq \epsilon \\
\forall \epsilon, \exists N \text{ s.t. } \forall n > N, |a_n - L| \leq \epsilon \\
\end{align}
$$

以上四式全部等价，原因很简单，由于对 $N$ 的限制是存在，我们只需要找到一个就行，是否取等只需要左右移动一下就行。

$\epsilon$ 则是任意，所以其实我们可以令 $\eta = \epsilon + 1$，然后把 $\eta$ 带入上面定义就行。

说明2：

当我们需要证明 $\left\{a_n\right\}$ 不收敛于一个数 $L$ 的时候，我们只需要使用 1.1 的逆否命题：

$\exists \epsilon > 0, \forall N \text{ s.t. } \exists n > N, |a_n - L| \ge \epsilon$

即可。

> **例题1.1**：证明 $\lim\limits_{n \to \infty}(\dfrac{n}{n + 1} - 1) = 1$。

套用定义 1.1，我们只需要证明：

$\forall \epsilon > 0, \exists N \text{ s.t. } \forall n > N, |(1 - \dfrac{1}{n + 1}) - 1| < \epsilon$ 即可。

换句话说：$\dfrac{1}{n + 1} < \epsilon \iff n > \dfrac{1}{\epsilon} - 1$。

_证明_：

令 $N = [\dfrac{1}{\epsilon} - 1]$，则 $n > N$ 时有 $n > \dfrac{1}{\epsilon} - 1$，可得 $|(1 - \dfrac{1}{n + 1}) - 1| < \epsilon$ 恒成立。

其中 $\left[\,\right]$ 为高斯记号。

□

为了保险有时候会在 $N$ 的取值上再加一保证其为正整数，但我这里定义里本身就没有声明 $N$ 一定为正整数所以可以不用。

> 记：数列的极限与其靠前的有限项**无关**

这个是显然的，本身极限就是在 $n$ 足够大时考虑，举个例子，我们有数列：$\left\{1,1,4,5,1,4,19,19,810,\dfrac{1}{10},\dfrac{1}{11}\dots\dfrac{1}{n}\dots\right\}$，其极限为 $0$，和前面几项没有关系。

tips: $\left\{1,2,3,4,5,\infty,7,8,\dots\right\}$ 这东西有问题，$\infty$ 并不是实数，不能放到数列里面，自然也不能用来反驳这个注记。

> **定义 1.2**：称 $\left\{x_n\right\}_{n=1}^{\infty}$ 为**无穷小量**。
> 如果 $\lim\limits_{n \to \infty}\left\{x_n\right\} = 0$。

举个例子，$\left\{2^{-n}\right\}_{n=1}^{\infty},\left\{\dfrac{1}{n}\right\}_{n = 1}^{\infty},\left\{0\right\}_{n = 1}^{\infty}$

在 $n \to \infty$ 的时候极限都为 $0$，这几个**数列**都能称为无穷小量（最后一个是常值数列）。

> **例题1.2**：证明 $q \in \mathbb{R}, |q| < 1, \left\{q^n\right\}$ 为无穷小量。

换句话说就是要证明 $\lim\limits_{n \to \infty}\left\{q^n\right\} = 0$。

写出定义：

$\forall \epsilon > 0, \exists N\text{ s.t. }n > N, |q^n - 0| < \epsilon$。

首先注意到 $q = 0$ 的时候就直接是无穷小量了，不需要证明。

考虑 $q\neq 0$ 时，我们注意到，此时 $q$ 虽然有可能是负数，但是其绝对值在 $(0, 1)$ 的范围内所以它是从正负两边同时逼近极限，极限是存在的。

我们想要证明极限，就需要找到 $n$ 和 $\epsilon$ 的关系：

$|q^n| = |q|^n < \epsilon$，两边同时取对数：$n\ln|q| < \ln\epsilon$。

由于 $\ln |q|$ 一定为负数，所以有 $n > \dfrac{\ln\epsilon}{\ln|q|}$。

只需要令 $N = [\dfrac{\ln\epsilon}{\ln|q|}]$ 即可。

但我们注意到一个严重的问题，我们只考虑了 $\ln|q|$ 的正负，那 $\ln\epsilon$ 呢？

当 $\epsilon \in (0, 1)$ 的时候显然是没问题的，但是当 $\epsilon \ge 1$ 的时候， $N$ 的取值可能会取到负数，怎么办呢？

其实我们只需要考虑 $\epsilon \in (0, 1)$ 就行，因为如果更小的 $\epsilon$ 能够满足，更大的显然也能满足。

所以证明如下：

_证明_：

原命题即：$\lim\limits_{n \to \infty}\left\{q^n\right\} = 0 \iff \forall \epsilon > 0, \exists N \text{ s.t. } \forall n > N, |q^n - 0| < \epsilon$。

当 $q = 0$ 时，原序列即 $\{0\}_{n = 1}^{\infty}$，命题成立。

当 $q \neq 0$ 时，取 $N = [\dfrac{\ln\epsilon}{\ln|q|}]$，此时有 $n \ln|q| < \ln\epsilon$。

即 $\forall \epsilon \in (0, 1), \forall n > N, |q^n - 0| < \epsilon$。

当 $\epsilon \geq 1$ 时，取 $\eta \in (0, 1)$，令 $N = [\dfrac{\ln\eta}{\ln|q|}]$，则 $n \ln|q| < \ln\eta < \ln\eta + 1 \leq \ln\epsilon$。

综上可知，$\forall \epsilon > 0, \forall n > N |q^n - 0| < \epsilon \iff \lim\limits_{n\to \infty}\left\{q_n\right\}$。

□

> **例题1.3**：$a > 1$，证明 $\lim\limits_{n \to \infty} \sqrt[n]{a} = 1$。

就是要证明，$\forall \epsilon > 0, \exists N \text{ s.t. } \forall n > N, |\sqrt[n]{a} - 1| < \epsilon$。

仍旧是需要找到 $n$ 和 $\epsilon$ 的关系，这里由于有个 $-1$，并没有那么好处理，当然直接暴力拆开绝对值讨论是可以的……不过很麻烦。

考虑换元！令 $x_n = \sqrt[n]{a} - 1$，原命题即证明 $\lim\limits_{n\to \infty}\left\{x_n\right\} = 0$

但有一个问题，$\lim\limits_{n \to \infty} \sqrt[n]{a} = 1$ 和 $\lim\limits_{n \to \infty} (\sqrt[n]{a} - 1) = 0$ 等价吗？

我们并没有对极限的加减乘除做出定义！所以我们来证明一下：

> **引理 1.1**：若 $\lim\limits_{n \to \infty}\left\{x_n\right\} = a, \lim\limits_{n \to \infty}\left\{y_n\right\} = b$，则 $\lim\limits_{n \to \infty}\left\{(x_n + y_n)\right\} = a + b$。

_证明_：

由 $\lim\limits_{n \to \infty}\left\{x_n\right\} = a \iff \forall \epsilon > 0, \exists N_1 \text{ s.t. } \forall n > N_1, |x_n - a| < \epsilon$。

同理 $\forall \epsilon > 0, \exists N_2 \text{ s.t. } \forall n > N_2, |y_n - b| < \epsilon$。

令 $N = \max\left\{N_1, N_2\right\}$，有：

$\forall \epsilon > 0, \forall n > N, |x_n - a| < \epsilon \text{ } \land \text{ } |y_n - b| < \epsilon$。

又因为 $|(x_n + y_n) - (a + b)| \leq |x_n - a| + |y_n - b| < 2\epsilon$，有 $\forall \eta > 0, \exists N \text{ s.t. } \forall n > N, |(x_n + y_n) - (a + b)| < \eta$。

□

**注意**：这显然是一个充分条件，因为 $(x_n + y_n)$ 存在极限不代表其分别存在极限。

现在我们可以写出：$a = (1 + x_n)^n$，要想找到 $n$ 和 $\epsilon$ 的关系，我们只需要通过 $x_n$ 这个桥梁即可。

直接取对数建立不起什么关系，但我们想到，就算是找关系也不一定需要找最严格的下界，因为只关心存在性，我们不妨调整范围，使用放缩。

用二项式定理展开后一项：$a = \sum\limits_{i = 0}^{n}\dbinom{n}{n - i}x_n^i$。

取第二项 $n x_n$，$a > nx_n$，所以 $x_n < \dfrac{a}{n}$，这里又怎么办呢？

时刻注意我们的 $n$ 是取一个非常大的值，我们考虑用 $\left\{\dfrac{a}{n}\right\}$ 的极限来代替。

由例题1.1，可以知道其为一个无穷小量, 换句话说 $\forall \epsilon, \exists N \text{ s.t. } \forall n > N, |\dfrac{a}{n} - 0| < \epsilon \iff \dfrac{a}{n} < \epsilon$。

而 $0 < x_n < \dfrac{a}{n}$，换句话说：

$\forall \epsilon, \exists N \text{ s.t. } \forall n > N, |x_n - 0| < \epsilon \iff \left\{x_n\right\}$ 为无穷小量。

结合引理即可证明本例题，证明过程略。

**注意**：这里证明使用放缩的时候其实应该标注 $n \ge 1$，但默认如此所以略去，如果在证明时取了第三项（例如证明 $\lim\limits_{n \to \infty}\sqrt[n]{n} = 1$ 时），应该标注 $n \geq 2$ 并讨论 $n = 1$。

> **例题 1.4**，证明：$\lim\limits_{n \to \infty}\dfrac{3n^2 + 2n}{n^2 - 1} = 3$。

简单放缩即可，不再赘述。
