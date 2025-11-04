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

#### 例题 1.1

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

#### 例题 1.2

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

#### 例题 1.3

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

#### 命题 1.1

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

#### 命题 1.2 有界性

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

> 设 $\lim\limits_{n\to\infty}\{x_n\} = a$。
> 
> $\lim\limits_{n\to\infty}\{y_n\} = b, a,b\in \mathbb{R}$。
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

#### 定义 1.3 无穷大量

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

> $\{x_n\}_{n = 1}^{\infty}$ 为一数列。
>
> 且 $\lim\limits_{n \to \infty}\{x_n\} = a, a \in \mathbb{r} \cup \{+\infty, -\infty\}$。
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

> 设 $\{x_n\}_{n = 1}^{\infty}, x_n \neq 0,\forall n > 0$。
> 
> 如果 $\{x_n\}$ 为无穷大量，
> 
> $\iff \lim\limits_{n\to\infty}\dfrac{1}{x_n} = 0$。

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

> $\{x_n\}_{n = 1}^{\infty}$ 为无穷大量。
> 
> $\{y_n\}_{n = 1}^{\infty}$ 满足：
> 
> $|y_n|$ 在某一项之后大于 $\delta$，其中 $\delta$ 为某个正常量。
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

#### 例题 1.7 
 
> $\{x_n\}_{n = 1}^{\infty}$ 为一数列。
> 
> 且 $\lim\limits_{n \to \infty}\{x_n\} = a, a \in \mathbb{r} \cup \{+\infty, -\infty\}$。
>
> 那么 $\lim\limits_{n \to \infty}\left(\dfrac{\sum\limits_{i = 1}^{n}x_i}{n}\right) = a \in \mathbb{r}$。


令 $y_n = n$，令 $z_n = \sum\limits_{i = 1}^{n}x_i$。

要证明：$\dfrac{z_n}{y_n} \to a (n \to \infty)$

算一下差分：$\dfrac{z_n - z_{n - 1}}{y_n - y_{n - 1}} = \dfrac{x_n}{1}$。

于是应用 Stolz 定理，证毕。

#### 例题 1.8

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

#### 定义 1.4 上下确界

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

#### 例题 1.9

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

#### 例题 1.10

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

#### 例题 1.11

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

#### 例题 1.12

> $\lim\limits_{n\to\infty}\dfrac{a^n}{n!} = 0, a\in \mathbb{R}$。
>
> （第一次作业里完全不会做哈哈。）

Case1：$|a| < 1$ 就是两边夹，很好做，这个我会。

$0 \le |\dfrac{a^n}{n!}| = \dfrac{a^n}{n!} \le \dfrac{1}{n!} \le \dfrac{1}{n} \to 0$。

Case2: $|a| > 1$：

不会做我就找特例看看！令 $a = 2$。

#### 例题 1.13 关于 e

非常重要：

> $x_n = (1 + \dfrac{1}{n})^n$。
>
> 则 $x_n$ 收敛，且 $\lim\limits_{n\to\infty}\{x_n\} = e$。
>
> $e \sim 2.71828$，称之为自然对数的底数。

（这也是复利的表达式）

证明：

$x_n = (1 + \dfrac{1}{n})^n = \sum\limits_{n = 0}^{n}\dbinom{n}{i}(\dfrac{1}{n})^i = 1 + 1 + \dfrac{n(n + 1)}{2}\dfrac{1}{n^2} + \cdots$。

$= 1 + 1 + \dfrac{1}{2!}(1 - \dfrac{1}{n}) + \dfrac{1}{3!}(1 - \dfrac{1}{n})(1 - \dfrac{2}{n}) + \cdots < 1 + 1 + \dfrac{1}{2!} + \dfrac{1}{3!} + \cdots + \dfrac{1}{n!}$。

对 $n \ge 2$：

$(1 + \dfrac{1}{n})^n < 1 + 1 + \dfrac{1}{2!} + \dfrac{1}{3!} + \cdots + \dfrac{1}{n!} \le 1 + 1 + \dfrac{1}{2 \times 1} + \dfrac{1}{3 \times 2} + \cdots + \dfrac{1}{n(n - 1)}$。

$= 1 + 1 + (1 - \dfrac{1}{2}) + (\dfrac{1}{2} - \dfrac{1}{3}) + \cdots + (\dfrac{1}{n - 1} - \dfrac{1}{n}) = 3 - \dfrac{1}{n} \le 3$。

于是我们找到了一个上界。

下界也能找到：$2$。

现在我们只需要说明 $x_n$ 是单调的就能够证明 $x_n$ 收敛。 

列出表达式：

$x_n = 1 + 1 + \dfrac{1}{2!}(1 - \dfrac{1}{n}) + \dfrac{1}{3!}(1- \dfrac{1}{n})(1 - \dfrac{2}{n}) + \cdots$

$x_{n + 1} = 1 + 1 + \dfrac{1}{2!}(1 - \dfrac{1}{n + 1}) + \dfrac{1}{3!}(1- \dfrac{1}{n + 1})(1 - \dfrac{2}{n + 1}) + \cdots$

由于 $1 - \dfrac{1}{n} < 1 - \dfrac{1}{n + 1}, 1 - \dfrac{2}{n} < 1 - \dfrac{2}{n + 1}, \cdots$。

所以 $x_n < x_{n + 1}, \forall n \ge 1$。

由单调有界定理：$x_n$ 收敛。

> 注：$(1 + \dfrac{1}{n})^n$ 是单调递增地趋向于 $e$，所以 $(1 + \dfrac{1}{n})^n \le e, \forall n \ge 1$。

其实应该取严格小于，当我们能够证明 $e$ 为无理数的时候就可以取了。

不过我们要承认：$e \in (2, 3), e\not\in \mathbb{Q}$。

由此可以说明，$\mathbb{Q}$ 对极限运算是不封闭的。

类似的，可以证明 $(1 + \dfrac{1}{n})^{n + 1}$ 是单调递减的，且有下界，并且也收敛于 $e$，证明方式只需要拆一个 $(1 + \dfrac{1}{n})$ 出来。

（注意这里是可以拆开的，并不是说因为 $n \to \infty$ 就不能拆了，这里只是拆开了一项，没有影响）

由此也可以推出：$(1 + \dfrac{1}{n})^n < e < (1 + \dfrac{1}{n})^{n + 1}$，取对数还能推出别的几个不等式

（不过其实现在我们都还不知道 $e^x, \ln x$ 这几个**函数**是怎么定义的，这里由于是数列所以不需要关心是否连续，但如果是函数就需要考虑一下了）。

一种可行的定义方式：$e^x = \lim\limits_{n\to \infty}(1 + \dfrac{x}{n})^n$。

证明极限存在就略去了，$x$ 为正为负的时候要分开说明（负数部分稍微有点困难）。

另一种定义方式是直接使用级数：$\sum\limits_{n = 0}^{\infty}\dfrac{x^n}{n!} = e^x$

注记：$(1 + \dfrac{1}{n})^n < e < (1 + \dfrac{1}{n})^{n + 1} \iff n\ln(1 + \dfrac{1}{n}) < 1 < (n + 1)\ln(1 + \dfrac{1}{n}) \iff \dfrac{1}{n + 1} < \ln(1 + \dfrac{1}{n}) < \dfrac{1}{n}, \forall n \ge 1$。

#### 例题 1.14

> 设 $x_n = \sum\limits_{i = 1}^{n} \dfrac{1}{i} - \ln n$。
>
> 证明 $x_n$ 收敛。

还是用单调有界定理：

$x_{n + 1} = 1 + \dfrac{1}{2} + \dfrac{1}{3} + \cdots + \dfrac{1}{n} + \dfrac{1}{n + 1} - \ln(n + 1)$。

$x_{n} = 1 + \dfrac{1}{2} + \dfrac{1}{3} + \cdots + \dfrac{1}{n} - \ln(n)$。

$x_{n + 1} - x_n = \dfrac{1}{n + 1} - \ln(1 + \dfrac{1}{n})$

然后这就是上面注记里面那个不等式，所以 $x_{n + 1} - x_n < 0$。

所以是单调递减的。

于是只需要说明存在下界，用注记中的不等式直接累加：

$$
\begin{aligned}
\ln(1 + 1) &< 1 \\
\ln(1 + \dfrac{1}{2}) &< \dfrac{1}{2} \\
\ln(1 + \dfrac{1}{3}) &< \dfrac{1}{3} \\
\cdots \\
\ln(1 + \dfrac{1}{n}) &< \dfrac{1}{n}
\end{aligned}
$$

所以 $\sum\limits_{i = 1}^{n}\dfrac{1}{i} > \ln(n + 1) \Rightarrow x_n > \ln(1 + \dfrac{1}{n}) > \dfrac{1}{n + 1} > 0$。

于是有下界 $0$，就证明了收敛性。 

### 实数基本定理

#### 定理 1.4 闭区间套定理

> 假设一列闭区间 $\{[a_n, b_n]\}$ 满足。
>
> 1. $[a_{n + 1}, b_{n + 1}] \subset [a_n, b_n]$。
>
> 2. $(b_n - a_n) \to 0 (n\to \infty)$。
>
> 那么称这个闭区间列为闭区间套。
>
> 且，存在唯一的一点 $\xi \in [a_n, b_n] \cap \mathbb{R}, (\forall n \ge 1), 且 a_n \to \xi \land b_n \to \xi$。
>
> 或者写作 $\bigcap\limits_{i = 1}^{\infty} [a_i, b_i] = \xi \in \mathbb{R}$。

证明：利用单调有界定理。

+ $a_1 \le a_2 \le a_3 \le \dots \le a_{n + 1} \le b_{1}$，$a_n$ 单调递增有上界。
+ $b_1 \ge b_2 \ge b_3 \ge \dots \ge b_{n + 1} \ge a_{1}$，$b_n$ 单调递减有下界。

所以 $\lim\limits_{n\to\infty} \{a_n\}, \lim\limits_{n\to \infty}\{b_n\}$ 都存在。

分别记为 $\xi_1, \xi_2$，显然 $a_n \le \xi_1, b_n \ge \xi_2$。

即证 $\xi_1 = \xi_2$。

如果它们都落在这些区间内那就很好办，但我们还不能说明这一点。

我们换个思路：

$\xi_2 = \lim\limits_{n\to\infty}\{b_n\} = \lim\limits_{n\to\infty}(b_n - a_n + a_n) = \lim\limits_{n\to\infty}(b_n - a_n) + \lim\limits_{n\to\infty}\{a_n\} = 0 + \xi_1$

所以 $a_n \le \xi \le b_n (\forall n)$

下证 $\xi$ 是唯一的。

反证，若还有 $\eta$ 满足 $\eta \in [a_n, b_n], \forall n, a_n \to \eta, b_n \to \eta$。

此时我们用一下刚才那个想法，由于 $\xi, \eta$ 都在所有的闭区间内。

那么 $0 \le |\xi - \eta| \le b_n - a_n \to 0(n\to \infty)$

换句话说 $|\xi - \eta| = 0$，那么 $\xi = \eta$

#### 定义 1.5 可数集

> 设 $A$ 为一个非空数集。
>
> 如果 $A$ 中的元素可以按照某种规则进行排序，比如 $\{a_1, a_2, a_3, a_4 \dots\}$。
>
> 那么称 $A$ 为可数集。

#### 命题 1.9 有理数集可数

> 全体有理数 $\mathbb{Q}$ 是可数的。

证明：$\mathbb{Q} = \{0, \pm \dfrac{1}{1}, \pm\dfrac{2}{1}, \pm \dfrac{1}{2}, \pm \dfrac{3}{1}, \pm\dfrac{1}{3}, \pm\dfrac{4}{1}, \pm\dfrac{3}{2}, \pm\dfrac{2}{3}, \pm\dfrac{1}{4}, \cdots\}$。

#### 命题 1.10 实数集不可数

> 全体实数 $\mathbb{R}$ 是不可数的。

证明：

考虑反证，假设 $\mathbb{R}$ 可数。

则 $\mathbb{R} = \{x_1, x_2, x_3, \cdots\}$。

画在实轴上。

取闭区间 $[a_1, b_1] \text{ s.t. } x_1 \not\in [a_1, b_1]$，这是总能做到的。

将区间三等分，$[a_1, \dfrac{2a_1 + b_1}{3}], [\dfrac{2a_1 + b_1}{3}, \dfrac{a_1 + 2b_1}{3}], [\dfrac{a_1 + 2b_1}{3}, b_1]$。

我们构造一个闭区间套：

$x_n \not\in [a_n, b_n], \forall n$。

$[a_{n + 1}, b_{n + 1}] \subset [a_n, b_n]$（取三等分中间那部分）。

且 $\lim\limits_{n\to\infty} (b_n - a_n) = 0$。

并且 $\bigcap\limits_{i = 1}^{\infty}[a_i, b_i] = \xi \in \mathbb{R}$。

由于 $\forall n, x_n \not\in [a_n, b_n]$，所以 $\xi \not\in \mathbb{R}$，矛盾。

#### 定义 1.6 子列

> 设 $\{x_n\}$ 为一个数列，而 $n_1 < n_2 < n_3 < \cdots < n_k < \cdots$ 是一列单调增加的正整数。
>
> 那么 $\{x_{n_1}, x_{n_2}, \cdots x_{n_k}, \cdots\}$ 为 $\{x_{n}\}$ 的子列。

注：$n_k \ge k$。

#### 命题 1.11 子列的收敛性

> 如果原来的数列是收敛于 $a$ 的 $\iff$ 那么其所有子列收敛于 $a$。

证明：任取子列 $\{x_{n_k}\} \subset \{x_n\}$。

$\forall \epsilon > 0, \exists N \text{ s.t. } \forall n > N, |x_n - a| < \epsilon$

当 $k \ge N$ 时，有 $n_k \ge k \ge N$，所以 $|x_{n_k} - a| < \epsilon$，即 $\forall \epsilon > 0, \exists N, \text{ s.t. } \forall k > N, |x_{n_k} - a| < \epsilon$。

□（充分性）

必要性之后证明。

> 推论：如果数列 $\{x_n\}$ 有两个子列 $\{x_{n_{k1}}\}, \{x_{n_{k2}}\}$ 分别收敛于不同的极限点，那么 $\{x_n\}$ 一定不收敛。

#### 定理 1.5 Bolzano-Weierstrass 定理/致密性定理

> 有界的数列一定存在收敛的子列

比如 $\sin(\dfrac{n\pi}{2})$。

使用闭区间套定理：

假设 $x_n$ 是有界的，$a_1 \le x_n \le b_1, \forall n \ge 1$。

把 $[a_1, b_1]$ 等分为 $[a_1, \dfrac{a_1 + b_1}{2}], [\dfrac{a_1 + b_1}{2}, b_1]$。

其中至少存在一个闭区间包含 $\{x_n\}$ 中的无穷多项，选出这个区间记为 $[a_2, b_2]$，然后递归的选下去。

换句话说构造一个闭区间套，每个闭区间都包含无穷多项。

+ $[a_n, b_n] \subset [a_{n - 1}, b_{n - 1}]\subset \cdots \subset[a_1, b_1]$。

+ $b_n - a_n = \dfrac{b_{n - 1} - a_{n - 1}}{2}$。

+ $\forall [a_n, b_n] \text{ includes infinity elements of } \{x_n\}$

接下来从 $[a_1, b_1]$ 中选出一项 $x_{n_1}$。

然后从 $[a_2, b_2] / \{x_{n_1}\}$ 中选出第二项 $x_{n_2}$，且 $n_1 < n_2$。

...

从 $[a_k, b_k] / \{x_{n_1}, x_{n_2}, \cdots, x_{n_{k - 1}}\}$ 记作 $x_{n_k}$，（仍旧保证下标严格单调）。


由闭区间套定理，$\exists ! \xi \in [a_n, b_n], (\forall n)\text{ s.t. } a_n \to \xi \land b_n \to \xi$。

令 $k \to \infty$，

由两边夹法则：$a_k \le x_k \le b_k \Rightarrow x_k \to \xi$。

所以存在一个 $\{x_n\}$ 的子列收敛于 $\xi$。

#### 命题 1.12 致密性定理的推论

自然而然可以考虑一下无界。

> 设 $\{x_n\}$ 为无界数列，那么一定存在 $\{x_{n_k}\} \subset \{x_n\}$，使得：
>
> $\{|x_{n_k}|\} \to +\infty (k \to \infty)$（发散）。

证明，由于 $\forall M > 0, \exists \text{infinity elements} \in \{x_n\} \text{ s.t. their absolute value are greater than } M$。

+ 1 不是 $\{x_n\}$ 的界，那么 $\exists n_1 \text{ s.t. } |x_{n_1}| > 1$。

+ 显然 $\{x_n\} / \{x_1, x_2, \cdots, x_{n_1}\}$ 无界，
    + 所以可以取 $x_{n_2}(n_2 > n_2), |x_{n_2}| > 2$。

然后往下依次取。

$|x_{n_k}| > k$，两边令 $k \to \infty$：

那么 $|x_{n_k}|$ 是正无穷大量。

#### 定理 1.6 Cauchy收敛原理

> 数列 $\{x_n\}$ 收敛：
>
> $\iff \forall \epsilon > 0, \exists N, \text{ when } m, n \ge N, |x_n - x_m| < \epsilon$。

一个比较直观的理解是 $n, m$ 足够大之后都集中在一块，距离可以做到任意小。

还可以推出不收敛的条件：$\exists \epsilon > 0, \forall N, \exists m, n \ge N \text{ s.t. } |x_n - x_m| > \epsilon$

证明：

先证明 $\Rightarrow$：假设 $\{x_n\}$ 收敛于 $x \in \mathbb{R}$。

由定义：$\forall \epsilon > 0, \exists N, \forall n > N |x_n - x| < \dfrac{\epsilon}{2}$。

当 $m > N, |x_m - x| < \dfrac{\epsilon}{2}$。

所以，当 $m, n \ge N$ 时，有 $|x_n - x_m| = |(x_n - x) - (x_m - x)| \le |x_n - x| + |x_m - x| < \epsilon$。

再证明 $\Leftarrow$：

先证明 $x_n$ 是有界的，再用 Weierstrass 定理证明 $x_n$ 收敛。

证明有界的话，取个特殊的 $\epsilon = 1$（因为界需要是个特定常数，不能是一个任取的 $\epsilon$），换句话说：

$\epsilon = 1, \exists N_0, \text{ s.t. } \forall m, n \ge N_0, |x_n - x_m| < 1$。

特别的，$|x_n - x_{N_0}| < 1 ,(n > N_0)$。

使用绝对值不等式：$|x_n| = |x_n - x_{N_0} + x_{N_0}| \le |x_n - x_{N_0}| + |x_{N_0}| < 1 + |x_{N_0}|$。

所以 $|x_n| \le \max\{|x_1|, |x_2|, |x_3|, \cdots, |x_{N_0 - 1} |, 1 + |x_{N_0}|\} = M$。

（后半我都能代替了，然后前半是有限项）

换句话说 $\{x_n\}$ 有界。

由致密性定理，$\exists \{x_{n_k}\} \subset \{x_n\} \text{ s.t. } \lim\limits_{k\to \infty}\{x_{n_k}\} = a \in \mathbb{R}$。

现在希望证明 $x_n$ 收敛，一个空拆：$x_n - a= x_n - x_{n_k} + x_{n_k} - a$。

后面是收敛于零，证明 $x_n - x_{n_k} \to 0$ 就行。

由已知条件：$\forall \epsilon > 0, \exists N, \forall n, m \ge N, |x_n - x_m| < \epsilon$。

当 $n, k > N, n_k \ge k > N \Rightarrow |x_n - x_{n_k}| < \epsilon$。

由于 $\{x_{n_k}\} \to a (k\to \infty)$。

对上面的 $\epsilon$ 来说，$\exists N^\prime, \forall k > N^\prime, |x_{n_k} - a| < \epsilon$。

取 $N_1 = \max\{N, N^\prime\}$，

当 $n > N_1, k > N_1$ 时：

$|x_n - a| \le |x_n - x_{n_k}| + |x_{n_k} - a| < 2\epsilon$

□

#### 例题 1.15 一个应用

> 证明：$\{x_n\} = 1 - \dfrac{1}{2} + \dfrac{1}{3} - \dfrac{1}{4} + \cdots + \dfrac{(-1)^{n - 1}}{n}$ 是收敛的

证明：

$\forall \epsilon > 0, \forall m > n \ge 1$。

则：$|x_m - x_n| = |\dfrac{(-1)^{n + 1}}{n} + \dfrac{(-1)^{n + 1}}{n + 2} + \cdots + \dfrac{(-1)^{m - 1}}{m}|$

提一下：$= |\dfrac{1}{n + 1} - \dfrac{1}{n + 2} + \dfrac{1}{n + 1} + \cdots + \dfrac{(-1)^{m - n - 1}}{m}|$。

Case1：如果 $m - n - 1$ 是奇数，此时有偶数项

上式 $< \dfrac{1}{n + 1}$。

只需要拉出来两两配对就能证明。

Case2：如果 $m - n - 1$ 是偶数，此时有奇数项

同理，上式 $< \dfrac{1}{n + 1}$。

由于 $\lim\limits_{n \to \infty}\dfrac{1}{n + 1} = 0$。

所以 $\forall \epsilon > 0, \exists N, \text{ s.t. } \forall n > N, \dfrac{1}{n + 1} < \epsilon$。

也就是 $|x_m - x_n| < \dfrac{1}{n + 1} < \epsilon$。

由 Cauchy 收敛原理，$\{x_n\}$ 收敛。

#### 定理 1.7 压缩映射原理

> 设 $\{x_n\}$ 满足：
>
> $|x_{n + 1} - x_n| \le r \times |x_n - x_{n - 1}|, 0 < r < 1$
>
> 则 $\{x_n\}$ 收敛。

一个直观理解就是两项之间的距离越来越短。

> 注意 $r = 1$ 时，就算 $|x_{n + 1} - x_n| < |x_n - x_{n - 1}|$ 也不能保证 $x_n$ 收敛。
> 
> 反例：$x_n = \sum\limits_{i = 1}^{n}\dfrac{1}{i}$。

证明（压缩映射原理）：

任取 $\forall m > n \in \mathbb{N}$

想要用 Cauchy 来证明，所以我们在中间插入：

$x_m - x_n = (x_m - x_{m - 1}) + (x_{m - 1} - x_{m - 2}) + \cdots + (x_{n + 1} - x_n)$。

加绝对值，利用 $r^{t}|x_2 - x_1|$ 放缩：

$|x_m - x_n| = |(x_m - x_{m - 1}) + (x_{m - 1} - x_{m - 2}) + \cdots + (x_{n + 1} - x_n)| \le |x_{n + 1} - x_{n}| + \cdots + |x_{m} - x_{m - 1}| \le r^{n - 1} |x_2 - x_1| + r^n |x_2 - x_1| + \cdots + r^{m - 2}|x_2 - x_1|$。

记 $|x_2 - x_1| = a$。

后面 $= a\sum\limits_{i = n - 1}^{m - 2}r^{i} = a\dfrac{r^{n - 1}(1 - r^{m - n - 2})}{1 - r}$。

$r < 1 \Rightarrow$。

上面：$< a\dfrac{r^{n - 1}}{1 - r} = \dfrac{a}{r(1 - r)}r^n$。

由于 $|r| < 1$，所以 $\lim\limits_{n\to\infty}r^n = 0$。

所以 $\forall \epsilon, \exists N, \text{ s.t. } \forall n > N,|r^n| < \epsilon$。

所以 $|x_m - x_n| < \dfrac{a}{r(1 - r)}\epsilon = C\epsilon$。

$C$ 是常数，由 Cauchy 收敛原理，$x_n$ 收敛。

当然，从上面这里 $r^n$ 取极限，可以知道 $r$ 不能取 $1$。

#### 定义 1.7 Cauchy 列/基本列

> 如果 $\{x_n\}$ 满足：
>
> $\forall \epsilon > 0, \exists N, \forall m > n \ge N, |x_n - x_m| < \epsilon$。
>
> 称 $\{x_n\}$ 为 Cauchy 列/基本列

#### 例题 1.16

> $x_1 = 3, x_{n + 1} = 3 + \dfrac{4}{x_n}$。
>
> 证明：$\{x_n\}$ 收敛。

单调有界可以做，（类似第二次作业的 T11，需要奇偶讨论）。

来用用压缩映射原理：

证明：

$x_{n + 1} - x_n = 3 + \dfrac{4}{x_n} - 3 - \dfrac{4}{x_{n - 1}} = \dfrac{4(x_{n - 1} - x_n)}{x_n x_{n - 1}}$。

全部上个绝对值

$|x_{n + 1} - x_n| = |3 + \dfrac{4}{x_n} - 3 - \dfrac{4}{x_{n - 1}}| = |\dfrac{4(x_{n - 1} - x_n)}{x_n x_{n - 1}}| \le \dfrac{4}{9}|x_{n} - x_{n - 1}|, \forall n \ge 2$。

使用压缩映射原理。

（归纳证明一下 $x_n \ge 3$ 需要）

#### 定义 1.8 覆盖

> 假设 $E$ 是由一族（可能可数，可能不可数的东西放一起）区间构成的集合。
>
> $A$ 为另外一个集合。
>
> 如果 $\forall x \in A, \exists I \in E, \text{ s.t. } x \in I$，那么称：
>
> $E$ 能够覆盖 $A$。

#### 定理 1.8 有限开覆盖定理

> 如果一族开区间构成的集合 $E$ 覆盖一个闭区间 $I$。
>
> 那么，总可以从 $E$ 中选取有限个开区间使得它们覆盖 $I$。

证明：

用 Cauchy 收敛原理证明（Weierstrass 其实更简单）：

构造集合：$\mathbf{F} = \{[s,t]: [s,t] \text{ could be covered by limited open intervals in } E\}$。

下证：$I \in \mathbf{F}$，（这个构造是个常用方法）考虑反证（不要求 $\mathbf{F}$ 非空）：

假设 $I = [a,b] \not\in \mathbf{F}$。

Claim：一定存在 $x_1 \in I, \text{ s.t. } [x_1 - 1, x_1 + 1] \cap I \not\in \mathbf{F}$。

下面说明为什么一定存在这样的 $x_1$。

若不然，则 $[x - 1, x + 1] \cap I \in \mathbf{F}, \forall x \in I$。

画图：

```
|-----|-----|-----|-------|
x1-1  a    x1    x1+1     b
```

特别的，取 $x = a$。

```
|-----|-----|-----|
a-1   a    a+1    b
```

根据此时的条件：$[a, a+1] \text{ or } I \in \mathbf{F}$，

如果是 $I \in \mathbf{F}$，那么和最早的假设矛盾，。

如果是 $[a, a+1] \in \mathbf{F}$。

由于是 $\forall x$，

再取 $x = a + 1 \Rightarrow [a, a + 2] \text{ or } I \in \mathbf{F}$，

如果是 $I$，矛盾。

然后这样递归的取下去，经过有限 $t$ 步之后，$a + t > b$ 换句话说 $[a,b] \in \mathbf{F}$。

这是与最初 $I \not\in \mathbf{F}$ 的假设矛盾的

所以，**一定存在** $x_1 \in I, \text{ s.t. } [x_1 - 1, x_1 + 1] \cap I \not\in \mathbf{F}$。

同样的，我们可以取到 $x_2 \in [a_1, b_1], \text{ s.t. } [x_2 - \dfrac{1}{2}, x_2 + \dfrac{1}{2}] \cap I \not\in \mathbf{F}$。

更进一步，可以取 $x_n \in [a_{n - 1}, b_{n - 1}], \text{ s.t. } [x_n - \dfrac{1}{n}, x_n + \dfrac{1}{n}] \cap I \not\in\mathbf{F}$。

由于 $\forall m > n, [a_m, b_m] \subset [a_n, b_n]; x_m, x_n \in [a_{n - 1}, b_{n - 1}] \Rightarrow |x_m - x_n| < \dfrac{2}{n - 1},(n > 1)$。

由 Cauchy 收敛原理，$\{x_n\}$ 收敛，设收敛于 $\xi$。

显然，$\xi \in [a, b]$，换句话说 $\exists (\alpha, \beta) \in E \text{ s.t. } \xi \in (\alpha, \beta)$。

由于 $x_n \to \xi (n \to \infty) \Rightarrow \exists N \text{ s.t. } [x_N - \dfrac{1}{N}, x_N + \dfrac{1}{N}] \subset (\alpha, \beta)$（$N$ 要去足够大，这里就是闭区间套定理的形式）。

换句话说 $[a_N, b_N] = [x_N - \dfrac{1}{N}, x_N - \dfrac{1}{N}] \cap [a_{N - 1}, b_{N - 1}] \subset [\alpha, \beta]$。

所以 $[a_N, b_N] \in \mathbf{F}$，矛盾，一直向上追溯，得到 $I \not\in \mathbf{F}$ 不成立。

所以 $[a, b]$ 可以被 $E$ 中有限个开区间覆盖。

> 注记：$I$ 不能改为闭区间，$E$ 不能不是开区间族。

#### Ex. 六大实数定理的闭环

现在已经做到：

确界原理 -> 单调有界原理 -> 闭区间套定理 -> Weierstrass 定理 -> Cauchy 收敛原理 -> 有限开区间覆盖定理

为了做到闭环：我们需要使用有限开区间覆盖定理证明确界原理。

> 确界原理：若非空数集 $S$ 存在上界 $M$，则 $\sup S$ 必然存在，下界同理。

假设 $S$ 为一个非空实数集，并且有上界 $M$。

下证其存在 $\sup S$，考虑反证。

任取 $x_0 \in S \Rightarrow x_0 \le M$。

若 $x_0 = M$ 则 $\sup S = M$。

反之：定义闭区间 $[x_0, M] = I$，设 $S$ 无最小上界。

那么 $\forall x \in I$，只有两种情况：

Case1：若 $x$ 为 $S$ 的一个上界，由于 $x$ 不是最小上界。

因此，存在更小上界 $x_1$，从而 $\exists x$ 的某个小邻域 $(x - \delta_x, x + \delta_x) \text{ s.t. } \forall y \in (x - \delta_x, x + \delta_x); \forall t \in S, t < y$。

Case2：若 $x$ 不是 $S$ 的一个上界，自然存在 $x_2 \in S \text{ s.t. } x_2 > x$。

所以存在某个小邻域 $(x - \delta_x, x + \delta_x)$，其中所有元素都不是 $S$ 的上界。

令 $x_0$ 取遍 $[x_0, M]$ 中所有点，产生一个开区间族 $O = \{(x_n - \delta_{x_n}), x_n + \delta_{x_n}\}$。

$O$ 要么是 Case1 要么是 Case2，换句话说某个邻域内的点应该为同一类。

且 $[x_0, M]$ 被 $O$ 覆盖，由有限开覆盖定理。

可以找到有限个开区间 $O_1, O_2, \cdots O_n$ 使得其覆盖 $[x_0, M]$。

显然 $M$ 所在的开区间是 Case1，（且可以假设这个开区间被选中，没选中加进去也无所谓）

经过有限步的推导，可以说明 $x_0$ 那个邻域属于 Case1，所以它是 $S$ 的上界。 

于是就矛盾了，这就说明 $S$ 中所有点都是它的上界，如果是单点集的话那最小上界就存在，否则不存在。
