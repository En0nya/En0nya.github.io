## 数学分析笔记 - zxf - Chapter 1

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

#### 定义 1.1 Weierstrass / Epsilon-N：

> 设数列 $\left\{a_n\right\}_{n=1}^{\infty}$，实数 $L$，
> 如果 $\forall \epsilon > 0, \exists N \text{ s.t. }\forall n > N, |a_n - L| < \epsilon$，那么称 $L$ 为数列 $\left\{a_n\right\}$ 的**极限**，或者称 $\left\{a_n\right\}$ 收敛于 $L$。
>
> 记作 $\lim\limits_{n\to\infty}\left\{a_n\right\} = L$。


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

当我们需要证明 $\left\{a_n\right\}$ 不收敛于一个数 $L$ 的时候，我们只需要使用 1.1 的逆否命题：

$\exists \epsilon > 0, \forall N \text{ s.t. } \exists n > N, |a_n - L| \ge \epsilon$

即可。

当然另一种比较容易理解的就是假设收敛于 $L$ 然后反证。

#### 例题1.1

> 证明 $\lim\limits_{n \to \infty}(\dfrac{n}{n + 1} - 1) = 1$。

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

#### 定义 1.2 无穷小量

> 称 $\left\{x_n\right\}_{n=1}^{\infty}$ 为**无穷小量**。
>
> 如果 $\lim\limits_{n \to \infty}\left\{x_n\right\} = 0$。

举个例子，

$\left\{2^{-n}\right\}_{n=1}^{\infty}$

$\left\{\dfrac{1}{n}\right\}_{n = 1}^{\infty}$

$\left\{0\right\}_{n = 1}^{\infty}$

在 $n \to \infty$ 的时候极限都为 $0$，这几个**数列**都能称为无穷小量（最后一个是常值数列）。

#### 例题1.2

> 证明 $q \in \mathbb{R}, |q| < 1, \left\{q^n\right\}$ 为无穷小量。

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

#### 例题1.3

> $a > 1$，证明 $\lim\limits_{n \to \infty} \sqrt[n]{a} = 1$。

就是要证明，$\forall \epsilon > 0, \exists N \text{ s.t. } \forall n > N, |\sqrt[n]{a} - 1| < \epsilon$。

仍旧是需要找到 $n$ 和 $\epsilon$ 的关系，这里由于有个 $-1$，并没有那么好处理，当然直接暴力拆开绝对值讨论是可以的……不过很麻烦。

考虑换元！令 $x_n = \sqrt[n]{a} - 1$，原命题即证明 $\lim\limits_{n\to \infty}\left\{x_n\right\} = 0$

但有一个问题，$\lim\limits_{n \to \infty} \sqrt[n]{a} = 1$ 和 $\lim\limits_{n \to \infty} (\sqrt[n]{a} - 1) = 0$ 等价吗？

我们并没有对极限的加减乘除做出定义！所以我们来证明一下：

> **引理**：若 $\lim\limits_{n \to \infty}\left\{x_n\right\} = a, \lim\limits_{n \to \infty}\left\{y_n\right\} = b$，则 $\lim\limits_{n \to \infty}\left\{(x_n + y_n)\right\} = a + b$。

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

#### 例题 1.4

> 证明：$\lim\limits_{n \to \infty}\dfrac{3n^2 + 2n}{n^2 - 1} = 3$。

简单放缩即可，不再赘述。

#### 命题 1.2

> 收敛的数列的极限一定是唯一的。

证明：

设数列 $\lim\limits_{n \to \infty}\{x_n\} = a \land \lim\limits_{n\to \infty}{x_n} = b$。

其中 $a,b \in \mathbb{R}$，下证 $a = b$。

先用定义写一遍，$x_n \to a, (n \to \infty) \Rightarrow, \forall \epsilon > 0, \exists N_1 \text{ s.t. } \forall n > N_1, |x_n - a| < \epsilon$。

并且 $x_n \to b, (n \to \infty) \Rightarrow \forall \epsilon > 0, \exists N_2 \text{ s.t. } \forall n > N_2, |x_n - b| < \epsilon$。

当 $n > \max\{N_1, N_2\}$，两个不等式都成立。

考虑计算 $a, b$ 的距离，然后再做证明，

此时 $|a - b| = |(a - x_n) - (b - x_n)| \le |x_n - a| + |x_n - b| < 2\epsilon$。

由于 $\epsilon$ 是任意的，所以 $a = b$，否则一定无法满足任意。

#### 命题 1.3 有界性

> 收敛的数列一定是**有界的**。

证明：假设 $x_n$ 收敛于 $a, a \in \mathbb{R}$。

**有界**：就是证明 $\exists \text{A constant number }M > 0 \text{ s.t. } |x_n| \le M, \forall n \ge 1$。

特别的，可以取 $\epsilon = 1$，由于 $x_n \to a$，所以 $\exists N \text{ s.t. } |x_n - a| < 1, \forall n > N$。

这样做的目的是确定 $N$（因为由 $\epsilon$ 决定），进而找到值域。

由此可以得到 $|x_n| = |(x_n - a) + a|$，用一次绝对值不等式：

$|x_n| \le |x_n - a| + |a| < 1 + |a|, \forall n > N$。

取 $M = \max\{|x_1|, \dots, |x_{n - 1}|, 1 + |a|\}$。

所以此时就有 $\forall n \ge 1 ,|x_n| \le M$。

□

#### 命题 1.3 保序性

> 设 $x_n \to a \in \mathbb{R} \land y_n \to b \in \mathbb{R}(n \to \infty)$
> 
> 1. $\text{if }x_n \ge y_n \text{ and n is large enough}$，那么 $a \ge b$。（大于号也无所谓，比如 $\{\dfrac{2}{n}\}, \{\dfrac{1}{n}\}$ 的极限都是 $0$）
> 
> 2. 反过来一样吗？$a > b \Rightarrow \exists N \in \mathbb{N_+}\text{ s.t. } \forall n > N, x_n \ge y_n$。
> 
> 理解就是，$n$ 充分大的时候你 $x_n, y_n$ 都分别集中在 $a, b$ 附近，可以用 $a, b$ 代表它们，直接比较就行了。

证明第二条：

假设 $a > b$，开始用定义写：

$x_n \to a \Rightarrow, \forall \epsilon > 0, \exists N_1, \text{ s.t. } \forall n > N_1, |x_n - a| < \epsilon \iff a - \epsilon < x_n < a + \epsilon, (n > N_1)$。


$y_n \to b \Rightarrow, \forall \epsilon > 0, \exists N_2, \text{ s.t. } \forall n > N_2, |x_n - b| < \epsilon \iff b - \epsilon < y_n < b + \epsilon, (n > N_2)$。

我们画个图，就是希望 $b + \epsilon < a - \epsilon$。

由于只是存在性，所以取一个比较特殊的 $\epsilon = \dfrac{a - b}{2}$。

然后就有 $x_n > \dfrac{a + b}{2}, (n > N_1)\land y_n < \dfrac{a + b}{2}, (n > N_2)$。

当 $N = \max\{N_1, N_2\}$，就有 $x_n > y_n, (n > N)$。

□

然后证明第一条：

考虑反证，如果不成立，那么一定 $a < b$，用第二条可以知道此时

$\exists N \ge 1$，$x_n < y_n$，矛盾。

□

#### 命题 1.4 保序性推论

> 假设 $\lim\limits_{n\to\infty}\{x_n\} = a \in \mathbb{R}$
> 
> 1. 如果 $a > 0$，一定存在 $N_1 \in \mathbb{N_+}, \forall n>N_1, x_n > \dfrac{a}{2} > 0$。
> 
> 2. 如果 $a < 0$，一定存在 $N_2 \in \mathbb{N_+}, \forall n>N_2, x_n < \dfrac{a}{2} < 0$。

证明一个来看看，其实画个图就好了。

用定义写一下，$\forall \epsilon > 0, \exists N \text{ s.t. } n > N, |x_n - a| < \epsilon$。

特别的，取 $\epsilon = \dfrac{a}{2}$，可以知道 $\exists N_1, \forall n > N_1, |x_n - a| < \dfrac{a}{2}$。

然后有 $\dfrac{a}{2} < x_n < \dfrac{3a}{2}$。

□

第二个同理证明（等会写一下）

#### 命题 1.5 两边夹法则

（用来找数列的极限）

> 假设有三个数列 $x_n \le y_n \le z_n, (n = 1,2,3,\dots)$。
>
> 如果 $x_n \to a, z_n \to a (n \to \infty) \Rightarrow y_n \to a(n \to \infty)$

各自用定义写一下。

$\forall \epsilon > 0, \exists N \text{ s.t. } n > N, |x_n - a| < \epsilon, |z_n - a| < \epsilon$。

当 $n > N$ 时：

$a - \epsilon < x_n < a + \epsilon$

$a - \epsilon < z_n < a + \epsilon$

各取一边：

$a - \epsilon < x_n \le y_n \le z_n < a + \epsilon, (n > N)$。

所以就有 $|y_n - a| < \epsilon$

也就是 $\forall \epsilon > 0, \exists N \text{ s.t. } n > N, |y_n - a| < \epsilon$。

□

#### 例题 1.5

> 求 $\lim\limits_{n\to\infty}\left(\dfrac{1}{n^2 + 1} + \dfrac{2}{n^2 + 2} + \dots + \dfrac{n}{n^2 + n}\right)$。

考虑放缩：

$x_n \le \sum\limits_{i = 1}^{n}\dfrac{i}{n^2 + 1} = \dfrac{n(n + 1)}{2n^2 + 2}$，后者 $\lim = \dfrac{1}{2}$。

下界分母全部换成 $n^2 + n$，极限也是 $\dfrac{1}{2}$。

然后由两边夹法则直接证明了 $\lim\limits_{n\to\infty}\{x_n\} = \dfrac{1}{2}$。

#### 命题 1.6 数列极限的四则运算

> 设 $\lim\limits_{n\to\infty}\{x_n\} = a, \lim\limits_{n\to\infty}\{y_n\} = b, a,b\in \mathbb{R}$。
>
> 1. $\forall \alpha \in \mathbb{R}, \alpha x_n \to \alpha a$
>
> 2. $\forall x_n + y_n \to a+b$（上次证明过了） 
>
> 3. 一二结合就是线性结合：$\alpha x_n + \beta y_n \to \alpha a + \beta b$。
>
> 4. $x_ny_n \to ab$。
>
> 5. $\text{if }b\neq 0, \dfrac{x_n}{y_n} \to \dfrac{a}{b}$。

**注记**：$\lim\limits_{n\to\infty}(\sum\limits_{i = 1}^{n}\dfrac{1}{n})$。

为什么不能分开算？因为四则运算是有限项的运算，而这里令 $n\to \infty$，就不能够再分开了。

证明一下第四条：

写出定义（这里略去了，脑补即可）

当 $n > N$ 时，有 

$$
\begin{cases}
|x_n - a| < \epsilon \\
|y_n - b| < \epsilon
\end{cases}
$$

想要证明还是往定义写就行：

$|x_ny_n - ab| = |x_ny_n - ay_n + ay_n - ab| \le |y_n||x_n - a| + |a||x_n - b|$。

看起来好像做完了，但是 $|y_n|$ 是个变量，咋办？

用数列的有界性！这样就可以变成一个常数了。

由于 $y_n$ 收敛，所以 $\exists M > 0, \text{ s.t. } |y_n| \le M, \forall n \ge 1$。

然后就有 $|x_ny_n - ab| \le (M + |a|)\epsilon$，前面是个常数，于是整完了。

□

然后证明 5.


就 $y_n \to \dfrac{1}{b}$，

就，显然考虑 $\dfrac{x_n}{y_n}$ 是否有定义是有必要的。

由于 $b \neq 0$，不妨假设 $b > 0$ ，$b < 0$ 同理即可。

然后用推论， $y_n \to b > 0 \Rightarrow \exists N^\prime, \forall n > N^\prime, y_n > \dfrac{b}{2} > 0$，然后就没事了

于是现在继续用定义证明 $\dfrac{1}{y} \to \dfrac{1}{b}$

下面比较简单，直接做就行。

> 例题 1.4 推广：当 $a \in \mathbb{R_+}$，证明 $\lim\limits_{n\to \infty}\sqrt[n]{a} = 1$。

只需要证明 $a \in (0, 1)$ 就可以，转化一下问题，我们直接去 $b = \dfrac{1}{a}$

然后直接用一下运算法则就可以了。

### 无穷大量

#### 定义 1.2 无穷大量

> 如果 $\forall G > 0, \exists N \in \mathbb{N_+} \text{ s.t. } n > N, |x_n| > G$，那么称数列 $\{x_n\}$ 为无穷大量。
>
> 如果 $x_n > G$，那么称为正无穷大量。
> 
> 如果 $\forall G, x_n < -G$，则为负无穷大量。

注意和无穷小量区分。

一个比较值得注意的点是，如果一个数列是无穷大量，那么它**不是**极限趋近于无穷的量。

比如：

$$
x_n = 
\begin{cases}
n,&(n\equiv 1 (\mod 2)) \\
-n,&(n\equiv 0 (\mod 2))
\end{cases}
$$

#### 例题 1.6

> $\{x_n\}_{n = 1}^{\infty}$ 为一数列，且 $\lim\limits_{n \to \infty}\{x_n\} = a$，$a \in \mathbb{r} \cup \{+\infty, -\infty\}$。
>
> 那么 $\lim\limits_{n \to \infty}\left(\dfrac{\sum\limits_{i = 1}^{n}x_i}{n}\right) = a \in \mathbb{r}$。

1. 如果 $a\in \mathbb{R}$：

写定义：$x_n \to a \iff \forall \epsilon >0, \exists N, \forall n > N, |x_n - a| < \epsilon$。

平均数这个玩意儿没有什么比较好的处理方法，所以还是直接考虑用定义处理：

原命题即证明 $\forall \epsilon > 0, \exists N, \text{ s.t. } \forall n > N, |\dfrac{\sum\limits_{i = 1}^{n}x_i}{n} - a| < \epsilon$。

我们希望利用上面 $|x_n - a| < \epsilon$ 的条件来进行一些放缩，但是现在问题是由于这个条件需要满足 $n > N$，那么自然有一些项没法用到。

无妨，先直接拆，先用绝对值不等式搞开：

$|\dfrac{\sum\limits_{i = 1}^{n}x_i}{n} - a| =|\dfrac{\sum\limits_{i = 1}^{n}(x_i - a)}{n}| \le |\dfrac{\sum\limits_{i = 1}^{N}(x_i - a)}{n}| + |\dfrac{\sum\limits_{i = N + 1}^{n}(x_i - a)}{n}|$。

最左边用条件：

$<|\dfrac{\sum\limits_{i = 1}^{N}(x_i - a)}{n}| + (1 - \dfrac{N}{n})\epsilon$。

后者这个当 $n$ 足够大那就基本可以看作 $\epsilon$

前面咋办呢？其实不论 $x_i$ 怎么样，终究是被 $N$ 限制的有限项。

而且在此时的语境下我们可以直接认为 $N$ 是一个常数。

不妨记前面这一堆为 $C_N$，上式等于 $\dfrac{C_N}{n} + (1 - \dfrac{N}{n})\epsilon$，

于是显然，对于上面的 $\epsilon$，一定可以找到 $N^\prime$ 使得 $\dfrac{C_N}{n} < \epsilon, (n > N^\prime)$。

所以原式就 $< 2\epsilon$，可以证明。

2. 如果 $a = \infty$，只考虑 $+\infty$。

**注意**：此时我们不能说 $\{x_n\}$ 的极限是 $+\infty$，它是发散的，我们只是记作 $\lim\limits_{n \to +\infty}\{x_n\} = +\infty$。

换句话说在有 $\forall G > 0, \exists N, \text{ s.t. } n > N, x_n > G$ 的情况下，我们需要证明：

$\forall G > 0, \exists N, \text{ s.t. } n > M, \dfrac{\sum\limits_{i = 1}^{n}x_i}{n} > G$。

照葫芦画瓢的拆开做：

$\dfrac{\sum\limits_{i = 1}^{n}x_i}{n} = \dfrac{\sum\limits_{i = 1}^{N}x_i}{n} + \dfrac{\sum\limits_{i = N + 1}^{n}x_i}{n} > \dfrac{C_N}{n} + \dfrac{(n - N)G}{n} = \dfrac{C_N}{n} + (1 - \dfrac{N}{n})G$。

同理 $(1 - \dfrac{N}{n}) \to 1 (n \to \infty)$，所以又可以改写成

$> \dfrac{C_N}{n} + G$。

于是我们只需要对于 $\forall G > 0$，找到 $N^\prime \text{ s.t. } \forall n > N^\prime, \dfrac{C_N}{n} > G$。

但这是不可能的，因为 $\dfrac{C_N}{n} \to 0 (n \to \infty)$。

那怎么办？其实这个 $G$ 任意取没有问题，换句话说我们现在需要在形式上把不等式右边写作一个类似 $\lambda G$ 的形式。

于是其实只需要找到 $N^\prime \text{ s.t. } \forall n > N^\prime$ 有 $|\dfrac{C_N}{n}| < \dfrac{G}{2}$ 或者随便几分之几 $G$ 就行，然后：$-\dfrac{G}{2} < \dfrac{C_N}{n} < \dfrac{G}{2}$，带回上面的式子可以得到：

$\dfrac{C_N}{n} + G > \dfrac{G}{2}$，取 $H = \dfrac{G}{2}$，于是就能证明此种情况。

□

#### 命题 1.7 

> 设 $\{x_n\}_{n = 1}^{\infty}$，$x_n \neq 0,\forall n > 0$，则如果 $\{x_n\}$ 为无穷大量，$\iff \lim\limits_{n\to \infty}\dfrac{1}{x_n} = 0$。

证明：若 $\{x_n\}$ 为无穷大量则 $\forall G > 0, \exists N , \forall n > N, |x_n| > G \Rightarrow |\dfrac{1}{x_n}| < \dfrac{1}{G}(*)$。

下证 $\lim\limits_{n\to \infty}{x_n^{-1}} = 0$。

对于 $\forall \epsilon > 0$ 可以找到 $M > 0 \text{ s.t. } \dfrac{1}{M} < \epsilon$。

由 $(*)$，对于 $G = M$，存在相应的 $N \in \mathbb{N_+}$，当 $n > N$ 时， $|\dfrac{1}{x_n}| < \dfrac{1}{M} < \epsilon$。

此为充分性。

必要性：设 $\lim\limits_{n\to \infty}\{x_n^{-1}\} = 0$

那么 $\forall \epsilon > 0, \exists N \text{ s.t. } \forall n > N, |x_n^{-1} - 0| < \epsilon\cdots(@)$

换句话说 $|x_n| > \dfrac{1}{\epsilon}$。

下证：$\forall G > 0, \exists N, \forall n > N, |x_n| > G$。

对于任意 $G > 0$，我们可以找到一个 $\epsilon$，使得 $\dfrac{1}{\epsilon} > G$

由 $(@)$，存在相应的 $N \in \mathbb{N_+}$，使得 $|\dfrac{1}{x_0}| < \epsilon (n > N)$。

于是 $|x_n| > \dfrac{1}{\epsilon} > G$。

□

#### 命题 1.8

> $\{x_n\}_{n = 1}^{\infty}$ 为无穷大量，$\{y_n\}_{n = 1}^{\infty}$ 满足：$|y_n|$ 在某一项之后大于 $\delta$，其中 $\delta$ 为某个正常量。
>
> 则 $\{x_ny_n\}_{n = 1}^{\infty}$ 也为无穷大量。

主要的关键还是这个 $\delta$，说明 $y_n$ 存在一个界。

证明：

不妨假设 $\forall n > N, |y_n| > \delta$。

又有 $\{x_n\}$ 为无穷大量，那么 $\forall G > 0, \exists N^\prime, \forall n > N^\prime, |x_n| > G$。

$\{x_ny_n\}_{n=1}^{\infty}$ 为无穷大量，$\forall M > 0$，必存在 $G_0 > 0, \text{ s.t. } M < G_0\delta$，对于 $G = G_0$，存在与之对应的 $N^\prime, \forall n > N^\prime$，$|x_n| > G_0 > \dfrac{M}{\delta}$，当 $n > \max\{N, N^\prime\}$ 时，$|x_ny_n| > \delta|x_n| > \delta\dfrac{M}{\delta} = M$。



#### 定理 1.1 Stolz 定理
>
> 设 $\{y_n\}$ 从某一项开始满足如下条件：
>
> 1. $y_n$ 严格单调递增。
>
> 2. $y_n$ 是正无穷大量。
>
> 3. $\lim\limits_{n\to\infty}(\dfrac{x_n - x_{n - 1}}{y_n - y_{n - 1}}) = a$（可以为 $\infty$）
>
> 那么 $\lim\limits_{n\to \infty}\dfrac{x_n}{y_n} = a$

也可以叫离散形式的洛必达法则。

证明类似刚才的例题 1.6：

1. $a \neq \infty$，先设 $a = 0$

要证明 $\dfrac{x_n - x_{n - 1}}{y_n - y_{n- 1}} \to 0, \Rightarrow \dfrac{x_n}{y_n} \to 0 (n \to \infty)$。

假设当 $n > N_0$ 时，有 $y_n > y_{n - 1}$。

那么 $\forall \epsilon > 0, \exists N_1, \forall n > N_1, |\dfrac{x_n - x_{n - 1}}{y_n - y_{n - 1}}| < \epsilon$。

一个想法是希望通过累加来消掉差分以证明，所以我们把 $x,y$ 分开。

$\Rightarrow |x_n - x_{n - 1}| < \epsilon |y_n - y_{n - 1}|(n > N_1)$。

也就是 $n > \max\{N_0, N\}$，有 $|x_n - x_{n - 1}| < \epsilon (y_n - y_{n - 1})$。

累加可以得到：

$|x_n - x_N| < \epsilon(y_n -y_N), (n > N)$

由于 $y_n \to +\infty, (n \to \infty)$，换句话说 $\forall G> 0, \exists N\prime, \forall n > N\prime, y_n > G$。

那么可以找到 $N_2$，使得 $n > N_2, y_n > 1$（即取 $G = 1$）。

取 $N_3 = \max\{N, N_2\}$，那么当 $n > N_3$时：

$|\dfrac{x_n}{y_n} - \dfrac{x_N}{y_n}| < \epsilon(1 - \dfrac{y_N}{y_n}) < \epsilon, \Rightarrow |\dfrac{x_n}{y_n}| \le |\dfrac{x_n}{y_n} - \dfrac{x_N}{y_n}| + |\dfrac{x_N}{y_n}| < \epsilon + |\dfrac{x_N}{y_n}|$。

由于 $\lim\limits_{n\to\infty}\dfrac{x_N}{y_n} = 0$，对于上面的 $\epsilon > 0, \exists N_4 \in \mathbb{N_+},\forall n > N_4, |\dfrac{x_N}{y_n}| < \epsilon$， 当 $n > \max\{N_3, N_4\}$ 时会有：

$|\dfrac{x_n}{y_n}| < \epsilon + |\dfrac{x_N}{y_n}| < \epsilon + \epsilon = 2\epsilon$

当 $a \neq 0$。

通过极限的四则运算我们能直接把 $a$ 塞进去，这就是直接套用了。

$\lim\limits_{n\to \infty}\dfrac{x_n - x_{n - 1}}{y_n - y_{n-1}} = a \iff \lim\limits_{n \to \infty}\dfrac{(x_n - ay_n) - (x_{n - 1} - ay_{n - 1})}{y_n - y_{n - 1}} = 0$。

令 $z_n = x_n - y_n$。

$\iff \lim\limits_{n\to \infty}\dfrac{z_n - z_{n + 1}}{y_n - y_{n - 1}} = 0$。

由 $a = 0$ 的情况，$\Rightarrow \lim\limits_{n\to \infty}\dfrac{z_n}{y_n} = 0 \iff \lim\limits_{n\to \infty}\dfrac{x_n - ay_n}{y_n} = 0 \iff \lim\limits_{n\to\infty}(\dfrac{x_n}{y_n} - a) = 0 \iff \lim\limits_{n\to\infty}\dfrac{x_n}{y_n} = a$。

2. 考虑 $a = \infty$，只考虑 $+$。

换句话说证明 $\dfrac{x_n - x_{n - 1}}{y_n - y_{n - 1}} \to +\infty \Rightarrow \dfrac{x_n}{y_n} \to +\infty$。

能不能用上面的结论来做呢？

注意到 $\dfrac{y_n}{x_n} \to 0$ 似乎可以不严谨的导出 $\dfrac{x_n}{y_n} \to +\infty$。


所以就是证明 $\dfrac{y_n - y_{n - 1}}{x_n - x_{n - 1}} \to 0 \iff \dfrac{y_n}{x_n} \to 0 (n \to \infty)$

但我们需要单调和趋向无穷的条件，怎么办？


由于 $\dfrac{x_n - x_{n - 1}}{y_n - y_{n - 1}} \to +\infty$

$\forall G > 0, \exists N, \text{ s.t. } \forall n > N, \dfrac{x_n - x_{n - 1}}{y_n - y_{n - 1}} > G$。

特别的取 $G = 1$，有 $\dfrac{x_n - x_{n - 1}}{y_n - y_{n - 1}} > 1, (n > N)$。

想要把分母乘过去，那么需要 $n > \max\{N, N_0\} = N_1$。

那么 $x_n - x_{n-  1} > y_n - y_{n - 1} > 0 (n > N_1)$。

所以 $x_n > x_{n - 1}, (n > N_1)$

累加上上个式子：

$x_{n} - x_{N_1} > y_{n} - y_{N_1}$。

换句话说 $x_n > y_n + x_{N_1} - y_{N_1}$。

后者是常数，令 $n \to +\infty$，由于 $y_n \to +\infty$，所以 $x_n \to +\infty$。

所以此时 $x_n$ 某一项后单调递增且趋向无穷。

因为 $\dfrac{y_n - y_{n - 1}}{x_n - x_{n - 1}} \to 0 (n \to \infty)$，由 case1 的结论，可以知道 $0 < \dfrac{y_n}{x_n} \to 0(n\to\infty)$

于是可以知道 $\dfrac{x_n}{y_n}$ 为正无穷大量。

#### 例题 1.6 
 
> $\{x_n\}_{n = 1}^{\infty}$ 为一数列，且 $\lim\limits_{n \to \infty}\{x_n\} = a$，$a \in \mathbb{r} \cup \{+\infty, -\infty\}$。
>
> 那么 $\lim\limits_{n \to \infty}\left(\dfrac{\sum\limits_{i = 1}^{n}x_i}{n}\right) = a \in \mathbb{r}$。


令 $y_n = n$，令 $z_n = \sum\limits_{i = 1}^{n}x_i$。

要证明：$\dfrac{z_n}{y_n} \to a (n \to \infty)$

算一下差分：$\dfrac{z_n - z_{n - 1}}{y_n - y_{n - 1}} = \dfrac{x_n}{1}$。

于是应用 Stolz 定理，证毕。

#### 例题 1.7

> $\lim\limits_{n \to \infty} x_n = a \neq \infty$，且 $\lim\limits_{n\to\infty} y_n = b \neq \infty$。
> 
> 证明 $\lim\limits_{n\to\infty}\left(\dfrac{\sum\limits_{i = 1}^{n}(x_iy_{n - i+1})}{n}\right) = ab$

由上，我们可以有 $ab = a\lim\limits_{n\to\infty}\left(\dfrac{\sum\limits_{i = 1}^{n}y_i}{n}\right) = \lim\limits_{n\to\infty}\left(\dfrac{\sum\limits_{i = 1}^{n}ay_i}{n}\right)$。


只需要证明 $\lim\limits_{n\to\infty}\left(\dfrac{\sum\limits_{i = 1}^{n}(x_iy_{n - i+1})}{n}\right) = \lim\limits_{n\to\infty}\left(\dfrac{\sum\limits_{i = 1}^{n}ay_i}{n}\right)$ 相等。

（虽然有可能不存在）

我们想要证明 $\lim\limits_{n\to\infty} x = \lim\limits_{n\to\infty} y$ 其实就是证明 $\lim\limits_{n\to\infty} (x - y) = 0$ 存在。 

所以就是证明 $\lim\limits_{n\to\infty}\dfrac{1}{n}\left(\sum\limits_{i = 1}^{n}y_i(x_{n - i + 1} - a)\right) = 0$

这个证明和平均数比较像，直接分两段拆开。

$\forall \epsilon > 0, \exists N, \text{ s.t. } \forall n > N, |x_n - a| < \epsilon$。

于是就是要证明：$\lim\limits_{}\dfrac{1}{n}\left[\sum\limits_{i = 1}^{N}y_{n - i + 1}(x_i - a) + \sum\limits_{i = N + 1}^{n}y_{n -i + 1}(x_i - a)\right] = 0$。

记前一段为 $L$，后一段为 $R$。

对 $R$ 用很多次绝对值不等式然后在带入 $x$ 的条件，$n > N$：

$\dfrac{1}{n}|R| \le \dfrac{1}{n}\left(\sum\limits_{i = N + 1}^{n}|y_{n - i + 1}(x_i - a)|\right) < \dfrac{\epsilon\left[\sum\limits_{i = N + 1}^{n}|y_{n - i + 1}|\right]}{n} < \epsilon M (n - N) \dfrac{1}{n} < M\epsilon$，其中 $|y_i| \le M$。

于是这里就解决了。

对 $L$ 呢？

由于 $y_n$ 收敛其必有界 $M$，所以就是一坨 $\dfrac{C}{n}$ 的形式。

对上面的 $\epsilon > 0, \exists N_1, \text{ s.t. } \forall n > N_1, \dfrac{C}{n} < \epsilon$。

于是当 $n > \max\{N, N_1\}$，可以有原式 $< (M + 1)\epsilon$。

原命题证毕。

### 单调有界定理

#### 定义 1.2 上下确界

> 设 $S$ 为一数集且不为空集，若 $\exists$ 常量 $M > 0, \text{ s.t. } x \le M, \forall x \in S$，则称 $M$ 为 $S$ 的一个上界。
> 
> 如果 $x \ge m, \forall x \in S$，则称 $M$ 为 $S$ 的一个下界。
>
> 称 $S$ （若存在）的最大（小）的下（上）界为下（上）确界。
> 
> 分别记作 $\inf S(\sup S)$

#### 定理 1.2 确界原理

> 若 $S$ 为一个非空数集，如果 $S$ 有上界 $M$，那么 $S$ 必然有上确界 $\sup S$。
> 
> 如果 $S$ 有下界 $M$，那么 $S$ 必然有下确界 $\inf S$。

我们承认这个为公理（可以证明不过证明非常复杂，暂且不谈）

例：考虑一个数列 $\{1 - \dfrac{1}{n}\} = \{x_n\}$，显然 $x_n < 1 \land x_n \ge 0, \forall n > 0$。

所以 $1$ 是 $\{x_n\}$ 的一个上界，$0$ 为一个下界。

且 $\inf \{x_n\} = 0$，$\sup \{x_n\} = 1$。

比 $0$ 大一点比 $1$ 小一点都是很容易找到一个 $n$ 不满足条件的。

（注意到 $\{x_n\}$ 极限为 $1$，这也说明上下确界不一定 $\in S$）

注：如果 $\sup S = \beta \Rightarrow$

$1. \forall x\in S, x \le \beta$

$2. \forall \epsilon > 0, \exists x_0 \in S,\text{ s.t. } x_0 > \beta - \epsilon$（不再是上界）。

同理如果 $\inf S = \alpha \Rightarrow$

$1. \forall x\in S, x \ge \alpha$

$2. \forall \epsilon > 0, \exists x_0 \in S, \text{ s.t. }x_0 < \alpha - \epsilon$（不再是下界）。

#### 定理 1.3 单调有界定理

> 假设 $\{x_n\}$ 是单调递增有上界数列（递减有下界）
>
> 则：$\{x_n\}$ 一定是收敛的。

（从某一项开始单调是等价的）

证明：

$\forall n, x_n \le x_{n + 1}$。

由确界原理，$\{x_n\}$ 存在 $\sup \{x_n\} = \beta$。

即 $\forall \epsilon > 0, \exists N_0, \beta \ge \text{ s.t. } x_{N_0} > \beta - \epsilon$。

对于 $\forall n \ge N_0, \beta \ge x_n \ge x_{N_0} > \beta - \epsilon$。

$\Rightarrow \beta - \epsilon \le x_{n} \le \beta < \beta + \epsilon$。

所以 $x_n - \beta < \epsilon$ 当 $(n > N_{0})$。

所以 $\{x_n\}$ 收敛于 $\beta$。

□

换句话说，如果 $\{x_n\}$ 为单调递增有上界数列，那么其收敛于其上确界 $\sup \{x_n\}$。

#### 例题 1.8

> 假设数列 $x_1 = 1, x_{n + 1} = 1 + \dfrac{x_n}{1 + x_n}$。
>
> 证明 $x_n$ 是收敛的。

既然都放在这里了那么我们考虑用单调有界原理证明。

证明：

先做差 $x_{n + 1} - x_{n} = \dfrac{x_n}{1 + x_{n}} - x_n = \dfrac{1 + x_n - x_n^2}{1 + x_n}$。

画一个图像，分母一定大于零。

可以发现分子在 $x_n < \dfrac{\sqrt5 + 1}{2}$ 时大于零，否则小于零。

由于 $x_1 = 1$，且 $\dfrac{x_n}{1 + x_n} > 0$。

归纳一下，所以 $\forall n > 1, x_n > 1$。有下界。

尝试找到 $x_n$ 的一个上界。

$x_{n + 1} = 1 + \dfrac{x_n + 1 - 1}{1 + x_n} = 2 - \dfrac{1}{1 + x_n} < 2$。

这个放缩不够，因为 $\dfrac{1 + \sqrt 5}{2}$ 大概是 $1.6$。

不过也可以知道 $2$ 为一个上界。

换个思路做差

$x_{n + 1} - x_n= \dfrac{x_n}{1 + x_n} - \dfrac{x_{n - 1}}{1 + x_{n - 1}} = \dfrac{x_n + x_nx_{n - 1} - x_{n - 1} - x_nx_{n - 1}}{(1 + x_n)(1 + x_{n - 1})} = \dfrac{x_n - x_{n - 1}}{(1 + x_n)(1 + x_{n - 1})}$。

分母 $> 0$，考虑分子，

换句话说我们证明了两项之间差之符号存在一个连锁关系

那么根据归纳法，只需要说明 $x_1 < x_2$ 就能说明 $x_n$ 单调。

而 $1 < \dfrac{3}{2}$。于是 $x_n$ 单调且存在上界也就是存在上确界。

那么 $\{x_n\}$ 是收敛的。

□

当然这个极限是可以求出来的。

由于 $n$ 足够大时 $x_n \to L$，对式子两边取极限，当然 $x_{n + 1}\to L$。

$\lim\limits_{n\to\infty}x_{n + 1} = L = \lim\limits_{n\to\infty}(1 + \dfrac{x_n}{1+x_n}) = 1 + \dfrac{L}{1 + L}$。

所以 $L = \dfrac{1 + \sqrt 5}{2}$。

> “一个疑问，那如果这样递推定义的的话，我们做差找到上面一个方程接出来是否就是极限呢，可以证明吗，还是说就是这个”

#### 例题 1.9

> 设 $x_1 \in (0, 1), x_{n + 1} = x_{n}(1 - x_n)$。
>
> (1) 证明 $\{x_n\}$ 是收敛的并求极限。
>
> (2) 求 $\lim\limits_{n\to \infty}(nx_n)$。

(1) 证明：

$x_{n + 1} = x_n - x_n^2 \le x_n$，所以 $x_n$ 单调递减。

由于 $x_1 \in (0, 1) \Rightarrow x_2 = x_1(1 - x_1) \in (0, 1)$。

数学归纳法：$x_n\in (0, 1)$。

由单调有界定理，$x_n$ 是收敛的，假设收敛于 $L$。

两边同时极限：$\lim\limits_{n\to \infty}x_{n + 1} = \lim\limits_{n\to\infty}[x_n(1 - x_n)] = L(1 - L) = L$

换句话说 $L = 0$。

(2)：

如果分开之后会发现 $n\to \infty$，极限不存在，没法分开来做。

想想有没有什么办法，夹逼法则不好用。

考虑一下 Stolz 定理：

$nx_n = \dfrac{x_n}{\dfrac{1}{n}} = \dfrac{n}{\dfrac{1}{x_n}}$。

后面这个能直接用 Stolz 定理。

由 (1)，$x_n$ 严格单调递减。且 $\dfrac{1}{x_n} \to \infty$。

$\lim\limits_{n\to\infty}\dfrac{n - (n - 1)}{\dfrac{1}{x_n} - \dfrac{1}{x_{n - 1}}} = \lim\limits_{n\to\infty}\dfrac{x_nx_{n - 1}}{x_{n - 1} - x_n} = \lim\limits_{n\to\infty}\dfrac{x_nx_{n - 1}}{x_{n - 1}^2} = \lim\limits_{n\to\infty}\dfrac{x_n}{x_{n - 1}} = \lim\limits_{n\to\infty}(1 - x_{n - 1}) = 1 - \lim\limits_{n\to\infty}x_{n - 1} = 1$。

所以由 Stolz 定理：$\lim\limits_{n\to\infty}(nx_n) = 1$。

#### 例题 1.10

> 设 $x_1 = \sqrt2, x_{n + 1} = \sqrt{2x_n + 3}$。
>
> 证明 $\lim\limits_{n\to \infty}x_n = L$ 存在并求 $L$。

证明：

显然 $x_n > 0$，由于 $x_1 = \sqrt2, x_2 > \sqrt3 > 0, x_3 > \sqrt3 \dots$，也就是 $x_n > \sqrt3, \forall n > 1$。

这有一个下界，那我们很难不想它单调递减。

$x_{n + 1} - x_{n} = \dfrac{2(x_{n} - x_{n - 1})}{\sqrt{2x_n + 3} + \sqrt{2x_{n + 1} + 3}}$。

于是又是一个连锁的，但有点尬的是其实是单调递增的。

所以还是要找上界，猜测 $x_n \le 3, \forall n > 0$（两边取极限 $L = \sqrt{2L + 3}$）。

来，归纳：

当 $n = 1$ 的时候， $x_1 = \sqrt2 \le 3$。
假设 $n = k$，由 $x_k \le 3$。

当 $n = k + 1$，$x_{k + 1} = \sqrt{2x_k + 3} \le \sqrt{6 + 3} = 3$。

所以确实存在上界 $3$。

然后用单调有界原理可以证明 $x_n$ 收敛。

计算就是两边取极限，不过由于有根号所以没法直接做，我们此时还不知道根号是连续的。

我们平方一下就行：$L^2 = 2L + 3$。

#### 例题 1.11

> $\lim\limits_{n\to\infty}\dfrac{a^n}{n!} = 0, a\in \mathbb{R}$。
>
> （第一次作业里完全不会做哈哈。）

Case1：$|a| < 1$ 就是两边夹，很好做，这个我会。

$0 \le |\dfrac{a^n}{n!}| = \dfrac{a^n}{n!} \le \dfrac{1}{n!} \le \dfrac{1}{n} \to 0$。

Case2: $|a| > 1$：

不会做我就找特例看看！令 $a = 2$。

---



