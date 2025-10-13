## 数学分析笔记 - zxf - Chapter 1

约定：

- $\mathbb{R, Q, N, Z, N+}$ 分别代表全体实数，全体有理数，全体自然数，全体整数，全体正整数。
- $\forall, \exists, \exists!$ 分别代表对任意，存在，存在唯一。
- $e$ 为自然对数的底数，$\epsilon$ 表示一较小正数，$\delta$ 表示一正数。

Fun fact：其实极限（limits）是不可到达的，文学上说的挑战极限存在一点逻辑错误（（

### 数列极限

一个例子：现在有数列 $\{a_n\} = \dfrac{1}{n}, n = 1,2,3,\dots$。

当 $n$ 越来越大的时候，$a_n$ 会越来越接近 $0$，称 $0$ 为 $a_n$ 的极限。

这个说法没有本质上的错误，但是它过于描述性，我们需要用一个严谨一点的数学语言描述，应该怎么办？

考虑用到极限的距离来描述，$|a_n - 0|$ 在 $n$ 变大时越来越小。

这还是不够，思考一下，我们到底需要使用极限来做什么？

一种想法是由于 $n$ 越来越大的时候 $a_n$ 会几乎挤在一起，我们为了方便想要用一个固定的常数来代替他们，当然这样的代替是有代价的，代价就是会出现一点误差。

如果我们在这个“极限” $L$ （此处为 $0$）的附近限定一个区间，只会有极少数的元素落在区间外面，用数学的语言就是，给定一个误差 $\epsilon$，我们希望大部分的 $a_n$ 都满足 $|a_n - L| < \epsilon$，仅有部分 $n \le N$ 的 $a_n$ 不满足此条件，那么在可以接受这个误差 $\epsilon$ 的前提下我们就可以用 $L$ 来代表 $\{a_n\}$。

既然是要给定误差，那么这个极限肯定要对于任意 $\epsilon$ 都满足要求，能够找出一个 $N$ 使得 $a_n$ 在给定范围内。

于是我们便能得到一个严谨的定义：

> **定义 1.1**（Weierstrass / $\epsilon-N$ 定义）：
> 
> 设数列 $\{a_n\}_{n=1}^{\infty}$，实数 $L$，
> 如果 $\forall \epsilon > 0, \exists N \text{ s.t. }\forall n > N, |a_n - L| < \epsilon$，那么称 $L$ 为数列 $\{a_n\}$ 的**极限**，或者称 $\{a_n\}$ 收敛于 $L$。
>
> 记作 $\lim_{n \to \infty} \{a_n\} = L$。


说明：

$$
\begin{aligned}
\forall \epsilon, \exists N \text{ s.t. } \forall n > N, |a_n - L| < \epsilon \\
\forall \epsilon, \exists N \text{ s.t. } \forall n \geq N, |a_n - L| < \epsilon \\
\forall \epsilon, \exists N \text{ s.t. } \forall n \geq N, |a_n - L| \leq \epsilon \\
\forall \epsilon, \exists N \text{ s.t. } \forall n > N, |a_n - L| \leq \epsilon \\
\end{aligned}
$$

以上四式全部等价，原因很简单，由于对 $N$ 的限制是存在，我们只需要找到一个就行，是否取等只需要左右移动一下就行。

$\epsilon$ 则是任意，所以其实我们可以令 $\eta = \epsilon + 1$，然后把 $\eta$ 带入上面定义就行。

说明2：

当我们需要证明 $\{a_n\}$ 不收敛于一个数 $L$ 的时候，我们只需要使用 1.1 的逆否命题：

> $\exists \epsilon > 0, \forall N \text{ s.t. } \exists n > N, |a_n - L| \ge \epsilon$

即可。

**例题1**：证明 $\lim_{n \to \infty}(\dfrac{n}{n + 1} - 1) = 1$。

套用定义 1.1，我们只需要证明：

$\forall \epsilon > 0, \exists N \text{ s.t. } \forall n > N, |(1 - \dfrac{1}{n + 1}) - 1| < \epsilon$ 即可。

换句话说：$\dfrac{1}{n + 1} < \epsilon \iff n > \dfrac{1}{\epsilon} - 1$。

_证明_：

令 $N = [\dfrac{1}{\epsilon} - 1]$，则 $n > N$ 时有 $n > \dfrac{1}{\epsilon} - 1$，可得 $|(1 - \dfrac{1}{n + 1}) - 1| < \epsilon$ 恒成立。

其中 $[\,]$ 为高斯记号。

□

