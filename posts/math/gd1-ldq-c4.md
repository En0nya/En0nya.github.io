## 高等代数(I) Chapter 4 矩阵

### 矩阵运算

+ 加减法：$A + B = C \iff C_{ij} = A_{ij} + B_{ij}$ 
    + 重要性质：$r(A + B) \le r(A) + r(B)$
+ 数乘：$kA = B \iff B_{ij} = kA_{ij}$
+ 乘法： $A_{(n \times s)}, B_{(s \times m)}; AB = C_{(n \times m)} \iff c_{ij} = \sum\limits_{k = 1}^{s} a_{ik} \times b_{kj}$
    + 矩阵乘法不具有对矩阵的交换律，有对数乘的交换律（$AB\not=BA, kAB = AkB$）
    + 具有结合律，分配律（$A(BC) = (AB)C, A(B + C) = AB + AC$（顺序不能乱））
    + 若 $A$ 为方阵，可以定义矩阵幂：$A^k = A\times \cdots \times A$
    + 定义 $A^0 = E_n$（$n$ 阶单位矩阵 $\begin{pmatrix}1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1\end{pmatrix}$），$kE$ 称为数量矩阵。
    + 由于矩阵乘法没有交换律，所以 $(AB)^k \not= A^k B^k$（本质是交换乘法次序） 
+ 转置：$A^T$
    + $(A + B)^T = A^T + B^T$
    + $(kA)^T = kA^T$
    + $(AB)^T = B^TA^T$（转置是行列反转，所以转置之后乘法次序也需要交换，称为穿脱原理）
    + $A^T = A$ 则称 $A$ 为对称矩阵，$A^T = -A$ 则称为反对称矩阵

$$\begin{pmatrix}a&b&c\\b&d&e\\c&e&f\end{pmatrix}$$

$$\begin{pmatrix}0&b&-c\\-b&0&e\\c&-e&0\end{pmatrix}$$

+ 矩阵乘法的逆用：

$(a_1 + 2a_2, a_2 + 3a_3, a_3 + 4a_1) = (a_1, a_2, a_3)\begin{pmatrix} 1 & 0 & 4\\ 2 & 1 & 0 \\ 0 & 3 & 1\end{pmatrix}$

+ 幂等矩阵 $A^2 = A \iff r(A) + r(E - A) = n$
+ 对合矩阵 $A^2 = E \iff r(E + A) + r(E - A) = n$

### 矩阵乘积的行列式和秩

#### 定理

> 若 $A, B$ 为数域 $P$ 上的两个 $n \times n$ 方阵。
>
> $\det A \cdot \det B = \det (AB)$

这是在 Laplace 定理实例中证明过的。

当然它可以推广到 $k$ 项的情况。

#### 定义 退化矩阵

> 如果 $A$ 为 $n$ 阶方阵，且 $\det A \not =0$ 则称 $A$ 是非退化的。
>
> 可以知道方阵非退化的充分必要条件是 $r(A) = n$ 即矩阵满秩。

可以得到推论：若 $A, B$ 至少有一个退化矩阵，则 $AB$ 为退化矩阵（此为充分必要条件）。

#### 定理 乘积的秩

> 如果 $A \times B = C$，则 $r(C) \le \min\{r(A), r(B)\}$。

$A, B$ 在秩这方面上没什么差别，只需要证明 $r(C)$ 小于其中一个，另一个同理。

不难想到形如 $r \le r$ 的形式在线性表示那部分出现过，所以：

设 $C$ 的列向量组为 $C_{i}$

由于 $c_{ij} = \sum\limits_{k = 1}^{n}a_{ik}\times b_{kj}$，这是 $C_{i}$ 的第 $j$ 个分量。

固定 $i$，所以可以写出 $C_{i} = \sum\limits_{k = 1}^{n}a_{ik}\times B_{k}, (i = 1,2,\cdots n)$

所以 $C$ 的列向量组可以被写作 $B$ 的列向量组的线性组合。

那么 $r(C) \le r(B)$，$A$ 同理得证。

### 矩阵的逆

由于定义了幂，不难想到若 $AB = E$，应该有 $B = A^{-1}$。

下面来定义这个 $A^{-1}$，有一个巧妙的构造。

假设 $A = \begin{pmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn}\end{pmatrix}$

构造 $A^{\star} = \begin{pmatrix}A_{11} & A_{12} & \cdots & A_{1n} \\ A_{21} & A_{22} & \cdots & A_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ A_{n1} & A_{n2} & \cdots & A_{nn}\end{pmatrix}^T$，这称为 $A$ 的伴随矩阵。

其中 $A_{ij}$ 为 $a_{ij}$ 的代数余子式

根据按行展开法则：

$AA^{\star} = A^{\star}A = \begin{pmatrix}d & 0 & \cdots & 0 \\ 0 & d & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & d\end{pmatrix}= d \cdot E, d = \det A$

那么可以知道 $A \cdot (\dfrac{A^{\star}}{d}) = E$

于是我们就找到了 $A^{-1}$，注意到 $d = 0$ 的时候等式不成立。

由于 $\det A \det A^{-1} = \det E = 1 \iff \det A^{-1} = \dfrac{1}{d}$

上述构造没有任何限制，故：

> $A$ 可逆的充分必要条件是 $A$ 非退化。

可以很容易的得到推论：$(AB)^{-1} = B^{-1}A^{-1}$。

只需要证明 $(AB)B^{-1}A^{-1} = E$ 就可以，根据结合律可以很容易证明。

#### Cramer 法则的第二种证法

对于 $AX = B$ 做如下变换：

$AX = A(A^{-1}B) \iff X = A^{-1}B$。（**注意**不要简单的把逆当作乘法逆运算，移过去的时候要使用恒等式 $B = A(A^{-1}B)$ 然后再两边消掉，否则顺序就是乱的了）

可以发现这样的变换是唯一的，所以解唯一，带入 $A^{-1}$ 之后就是 Cramer 法则的表达式。

#### 定理 乘积的秩和原秩的关系

> $A_{(s\times n)}, P_{(s \times s)}, Q_{(n \times n)}$，且 $P, Q$ 非退化。
>
> 则 $r(A) = r(PA) = r(AQ)$

$P, Q$ 非退化则 $P, Q$ 满秩。

由于 $r(PA) \le \min\{r(A), r(P)\} = r(A)$

且 $P \times A = PA \iff P\times A =P(P^{-1}PA) \iff A= P^{-1}(PA)$

所以 $r(A) \le r(PA)$

于是 $r(A) = r(PA)$

### 矩阵分块

假设有两个矩阵 $A, B$ 可以写作这样的形式（当然只要保证行列相等就行）：

$A = \begin{pmatrix}R_{11} & R_{12} & \cdots & R_{1n} \\ R_{21} & R_{22} & \cdots & R_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ R_{n1} & R_{n2} & \cdots & R_{nn}\end{pmatrix}, B = \begin{pmatrix}S_{11} & S_{12} & \cdots & S_{1n} \\ S_{21} & S_{22} & \cdots & S_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ S_{n1} & S_{n2} & \cdots & S_{nn}\end{pmatrix}$

其中 $R, S$ 都是一个个小矩阵（大小也不一定相等）。

那么我们可以把 $R, S$ 当作元素，直接做矩阵乘法，最后的结果是一致的。

这个只需要用矩阵乘法的定义展开一下结果矩阵就好。

注：

其实在推导矩阵的秩的定理的时候就用过矩阵分块了。

也就是：**矩阵的的行列向量组也是一种矩阵分块**

那么 $C = (A_1, A_2, A_3, \cdots A_n)\begin{pmatrix}B_1 \\ B_2 \\ B_3 \\ \vdots \\ B_n\end{pmatrix} = \begin{pmatrix}\sum\limits_{k = 1}^{n}a_{1k} \cdot B_1 \\ \sum\limits_{k = 1}^{n}a_{2k}\cdot B_2 \\ \vdots \\ \sum\limits_{k = 1}^{n}a_{nk}\cdot B_n \end{pmatrix}$

由此可以发现 $C$ 的行向量组就是 $B$ 的行向量组的一个线性组合。

反过来也一样，$C$ 的列向量组就是 $A$ 的列向量组的一个线性组合。

#### 准对角矩阵

我更想叫广义对角矩阵。

其实就是把对角矩阵的元素换成了矩阵。

可以得到几个性质：

如果 $A, B$ 的分块同阶，那么 $AB$ 的对角元素就是这俩的对角元素相乘。

加法更不用说。

并且 $A^{-1}$ 的对角元素就是对角元素各自的逆。

### 初等矩阵

#### 定义

> 初等矩阵就是单位矩阵 $E$ 经过一次初等行（列）变换得到的那些矩阵。

第一类：交换 $(i, j)$ 行

$$E_{i,j}=\begin{pmatrix}1&&&&&&\\&\ddots&&&&&\\&&0&\cdots&1&&\\&&\vdots&\ddots&\vdots&&\\&&1&\cdots&0&&\\&&&&&\ddots&\\&&&&&&1\end{pmatrix}$$

第二类：某行乘 $k$

$$E_i(k)=\begin{pmatrix}1&&&&\\&\ddots&&&\\&&k&&\\&&&\ddots&\\&&&&1\end{pmatrix}$$

第三类：某行加某行 $k$ 倍

$$E_{i,j}(k)=\begin{pmatrix}1&&&&&&\\&\ddots&&&&&\\&&1&\cdots&k&&\\&&&\ddots&\vdots&&\\&&&&1&&\\&&&&&\ddots&\\&&&&&&1\end{pmatrix}$$

#### 应用

> 对某个矩阵 $A_{(n \times m)}$ 做初等行变换
>
> 就等价于在矩阵左边乘上对应种类的初等矩阵。
>
> 做初等列变换，就等于在矩阵右边乘上对应种类的初等矩阵。

这是不难证明的。

#### 定义 矩阵等价

> $A, B$ 等价当且仅当 $A$ 可由 $B$ 经过一系列初等行变换得到。

#### 标准型

> 任意一个矩阵都和他的标准型 $\begin{pmatrix}E_r & 0\\ 0 & 0\end{pmatrix}$ 等价。

$r$ 为矩阵的秩。

长这样：

$$\begin{pmatrix}1&&&&\\&\ddots&&\\&&1&&\\&&&0&\\&&&&\ddots\\&&&&&0\end{pmatrix}$$

#### 推论

> 如果 $A, B$ 等价，那么存在一系列初等矩阵 $P_1 \sim P_p, Q_1 \sim Q_q \text{ s.t. }$
>
> $A = P_1P_2 \cdots P_p B Q_1Q_2\cdots Q_q$

这是显然的。

> $A$ 为 $n$ 阶可逆矩阵的充要条件是存在 $n$ 阶初等矩阵 $Q_1 \sim Q_q \text{ s.t.}$
>
> $A = Q_1 Q_2 \cdots Q_q$。

$n$ 阶可逆矩阵行列式不为零即满秩，所以 $A$ 的标准型必为单位矩阵。

那么只需要做初等行变换就行。

这也反过来说明可逆矩阵必可化为单位矩阵。

#### 更好的求逆方法

根据上面的几个推论。不难写出：

$P_1P_2\cdots P_p A = E \iff P_1P_2\cdots P_p A= A(A^{-1}E) \iff P_1P_2\cdots P_p = A^{-1}E = A^{-1}$

换句话说，用什么样的变换使得 $A$ 变为 $E$。

这些变换对应的矩阵乘积就是矩阵的逆。

于是可以得到一个更好的求逆方法：

写出一个 $n \times 2n$ 的矩阵：$\begin{pmatrix}A & E\end{pmatrix}$

左边乘上 $P_1P_2\cdots P_p$ 那么 $=\begin{pmatrix}P_1P_2\cdots P_p A & P_1P_2\cdots P_p E\end{pmatrix} = (E A^{-1})$。

于是我们只需要将这个矩阵的左边**通过初等行变换**化为单位矩阵，右边就是所求的逆。

### 习题记录和一些注意事项

#### 关于数乘

比如 $kA$，实际上是给每一行都乘了一个 $k$，所以计算结果的时候：

$|kA| = k^n|A|$

这点一定一定要注意！

包括 $|A|B$ 这种如果要你求 $||A|B|$ 也一定要记得 $|A|^n|B|$

#### 关于 det

$|AB| = |A||B| = \dfrac{1}{|AB|^{-1}}$

#### 重要结论

$r(A^{\star}) = \begin{cases}n & r(A) = n \\ 1 & r(A) = n - 1 \\ 0 & r(A) < n - 1\end{cases}$

证明：

1. $r(A) = n$：由于满秩所以可逆，进而 $A^{\star}$ 可逆所以满秩。
2. $r(A) = n - 1$：根据秩的定义，至少存在一个 $n - 1$ 阶子式不为零。
3. $r(A) < n - 1$：所有 $n - 1$ 阶子式都为零，自然余子式也是零。

#### 矩阵等于伴随矩阵

$+E, -E$ 都要考虑（因为式子是 $A^2 = |A|E$）

还要考虑零矩阵的情况。

#### AB = A + B 的推论

> $AB = A + B \iff AB = BA$

证明：$AB - A - B = 0 \iff AB - A - B + E = E \iff (A - E)(B - E) = E$

所以 $A - E, B - E$ 互逆，进而 $(B - E)(A - E) = E \iff BA - A - B + E = E \iff BA = A + B = AB$

这个题主要就像说明 $E$ 之于矩阵类似于 $1$ 之于实数那样可以空拆的地位。 

因式分解是常见操作：

#### 一个配方/因式分解实例

> $A^2 + A - 4E = 0$，求 $(A - E)^{-1}$

可以配方：$A^{2} + A - 2E = 2E \iff (A - E)(A + 2E) = 2E$

所以 $(A - E)^{-1} = \dfrac{A + 2E}{2}$

#### inv(A + B) 和 inv(A) + inv(B)

求逆的里边不能随便乱拆开的！

这里要算就只能按定义老老实实算。

$A^{-1} + B^{-1} = A^{-1}(A + B)B^{-1}$

若 $A, B, A + B$ 可逆那么：

$(A^{-1} + B^{-1})^{-1} = (A^{-1}(A + B)B^{-1})^{-1}$

这里有推广结论：乘积的逆就是逆反向相乘：

$=B^{-1^{-1}}(A + B)^{-1}A^{-1^{-1}} = B(A + B)^{-1}A$

加法里交换次序也可以知道原式 $= A(A + B)^{-1}B$
