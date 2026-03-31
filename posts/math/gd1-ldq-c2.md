## 高等代数(I) Chapter 2 线性方程组

### 高斯消元法

将线性方程组的系数和常数项写作一个增广矩阵。

然后利用矩阵的初等行变换：

1. 交换两行
2. 某行的 $k$ 倍加到某一行上
3. 某一行乘 $k$ 倍

可以将矩阵化为一个阶梯型矩阵，利用它可以解出方程组。

具体来说对于矩阵：

$$A = \begin{pmatrix}a_{11} & a_{12} & \cdots & a_{1n} & b_1\\ a_{21} & a_{22} & \cdots & a_{2n} & b_2\\ \vdots & \vdots & \ddots & \vdots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn}& b_n\end{pmatrix}$$

如果 $x_1$ 的系数全为 $0$，那么它是一个自由元，怎么取都行。

我们将 $x_1$ 的系数（如果为零就交换一个到上面来）通过初等行变换变成只有 $a_{11} = 0$

具体做法就是对于第 $i$ 行，加上第一行的 $-\dfrac{a_{1i}}{a_{11}}$ 倍。

就可以变成：

$$A = \begin{pmatrix}a_{11} & a_{12} & \cdots & a_{1n} & b_1\\ 0 & a_{22} & \cdots & a_{2n} & b_2\\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & a_{n2} & \cdots & a_{nn}& b_n\end{pmatrix}$$

此时等价于解 $x_2 \sim x_n$ 的方程，解出之后代回即可解出 $x_2$

然后对于 $x_i$ 的如法炮制，最后方程会形如

$$A = \begin{pmatrix}a_{11} & a_{12} & \cdots & a_{1n} & b_1\\ 0 & a_{22} & \cdots & a_{2n} & b_2\\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \cdots & a_{rn}& b_r \\ 0 & 0 & \cdots & 0 & b_{r + 1} \\ \vdots & \vdots & \vdots & \vdots & \vdots\end{pmatrix}$$

对于 $0 = 0$ 的这些行可以不用考虑，它们对应的 $x_i$ 也是自由元。

但如果出现 $0 = b_{r + i}\not=0$ 的行那么说明无解。

现在就有两种情况：

$r = n$，那么方程组有唯一解。

$r < n$，$x_{r + 1} \sim x_{n}$ 都是自由元，任意给一个值代回去求出 $x_1 \sim x_r$ 即可。

所以这种情况下本质是在求这样的一个方程组的解（这里是齐次线性方程组，一般线性方程组同理）：

$$\begin{cases}x_1 &= c_{1, r + 1}x_{r + 1} + c_{1, r + 2}x_{r + 2} + \cdots + c_{1, n}x_n \\ x_2 &= c_{2, r + 1}x_{r + 1} + c_{2,  r + 2}x_{r + 2} + \cdots + c_{2, n}x_n\\ &\vdots \\ x_r &= c_{r, r + 1}x_{r + 1} + c_{r, r + 2}x_{r + 2} + \cdots + c_{r, n}x_n \\ 0 &= 0 \\ &\vdots \\ 0 &= 0 \end{cases}$$

$c$ 是对应的化简之后的系数。

于是系数矩阵也可以写作：

$$\begin{pmatrix}1 & 0 & \cdots & 0 & -c_{1, r + 1} & \cdots & -c_{1, n} \\ 0 & 1 & \cdots & 0 & -c_{2, r + 1} & \cdots & -c_{2, n} \\ \vdots & \vdots & \ddots & \vdots & \vdots & \vdots & \vdots \\ 0 & 0 & \cdots & 1 & -c_{r, r + 1} & \cdots & -c_{r, n} \\ 0 & 0 & \cdots & 0 & 0 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots & \vdots & \vdots & \vdots \\ 0 & 0 & \cdots & 0 & 0 & \cdots & 0\end{pmatrix}$$

当然，在讨论其解的情况的时候可以不用消元，这就是接下来需要做的内容。

> **引理**：对于齐次线性方程组，若 $r < n$ 则其必有非零解（根据 Cramer 法则和高斯消元法可得）（未知数个数大于方程个数）
 

### 线性相关性

> **线性相关**：若对于向量组 $\alpha_1, \alpha_2, \alpha_3, \cdots \alpha_n$。
>
> 存在**不全为零**的系数 $k_1, k_2, k_3, \cdots, k_n$ 使得：
>
> $k_1\alpha_1 + k_2\alpha_2 +\cdots k_n\alpha_n = 0$。
>
> 那么称向量组 $\alpha_1, \alpha_2, \alpha_3, \cdots \alpha_n$ 线性相关。

反之，可以定义线性无关为：只有 $k$ 全为零时，向量组的线性组合才为 $0$

关于线性表出：

如果向量 $\alpha$ 是 $\beta_1, \beta_2, \cdots, \beta_n$ 的一个线性组合，那么称 $\alpha$ 可以被向量组线性表出。

如果向量组 $\alpha_1, \alpha_2, \alpha_3, \cdots \alpha_n$ 中的任意一个向量都可以被向量组$\beta_1, \beta_2, \cdots, \beta_n$ 线性表出，那么称向量组 $\alpha$ 可以被 $\beta$ 线性表出。

如果 $\alpha, \beta$ 可以相互被对方线性表出那么称两者等价，向量的等价具有自反性传递性和对称性。

> **线性相关的等价定义**（有一个定理）：如果向量组 $\alpha_1, \alpha_2, \alpha_3, \cdots \alpha_n$ 中的有一个向量可以被其余的向量线性表出，那么称向量组 $\alpha_1, \alpha_2, \alpha_3, \cdots \alpha_n$ 线性相关。

只需要令这个一个向量的 $k = -1$ 即可。

**几个推论**：

1) 如果向量组部分相关则整体相关（只需要让后面的部分 $k = 0$ 即可）
2) 如果向量组整体不相关则部分也不相关。
3) **哪一个定理**：如果 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}, \beta$ 线性相关，且 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}$ 线性无关，那么 $\beta$ 可以被 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}$ 线性表示且表示方式唯一。
4) 若向量组只有一个向量且它线性相关，那么 $\alpha = 0$。
5) $n$ 维单位向量组是线性无关的（显然）
6) 如果一个 $n$ 维向量组是线性无关的，那么给每一个向量加一维仍旧是线性无关的（线性相关则不一定）

### 线性方程组的向量表示

方程组的向量表示法：

$\begin{cases}a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = b_1 \\ a_{21}x_1 + a_{22}x_2 + a_{23}x_3 = b_2 \\ a_{31}x_1 + a_{32}x_2 + a_{33}x_3 = b_3\end{cases}$

可以写作：

$x_1 \begin{pmatrix}a_{11} \\ a_{21} \\ a_{31}\end{pmatrix} + x_2 \begin{pmatrix}a_{12} \\ a_{22} \\ a_{32}\end{pmatrix} + x_3 \begin{pmatrix}a_{13} \\ a_{23} \\ a_{33}\end{pmatrix} = \begin{pmatrix}b_1 \\ b_2 \\ b_3\end{pmatrix}$

也就是 $x_1\alpha_1 + x_2 \alpha_2 + x_3 \alpha_3 = \beta$

方程组有解等价于，$\beta$ 能被 $\alpha_1, \alpha_2, \alpha_3$ 线性表示

方程组解的个数就是 $\beta$ 能被向量组 $\alpha_1, \alpha_2, \alpha_3$ 线性表示的总数。

还有一种方程组的矩阵表示法：

$\begin{bmatrix}a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33}\end{bmatrix} \begin{pmatrix}x_1 \\ x_2 \\ x_3\end{pmatrix} = \begin{pmatrix}b_1 \\ b_2 \\ b_3\end{pmatrix}$

这里的乘法就是矩阵乘法了

$Ax = \beta$

当然也可以写作 $(\alpha_1, \alpha_2, \alpha_3)\begin{pmatrix}x_1 \\ x_2 \\ x_3\end{pmatrix} = \begin{pmatrix}b_1 \\ b_2 \\ b_3\end{pmatrix}$

### 线性相关和方程组的关系

对于 $s$ 维向量组 $\alpha_1, \alpha_2, \cdots, \alpha_n$，可以将其看作齐次线性方程组：

$x_1 \alpha_1 + x_2 \alpha_2 + \cdots + x_n\alpha_n = 0$

可以发现，**向量组线性相关等价于齐次线性方程组有非零解**。

那么，向量组线性无关等价于齐次线性方程组只有零解。

（注意，如果说矩阵一般都不会是方阵，这里就不能说 $\det$ 是否等于零了）

根据这个我们可以推出一个定理：

> **向量组的基本性质**：
>
> 对于向量组 $\alpha_{1} \sim \alpha_{r}, \beta_{1} \sim \beta_{s}$，如果 $\alpha$ 可以被 $\beta$ 线性表出。
>
> 且 $r > s$。
>
> 那么向量组 $\alpha$ 线性相关。

对于方程 $x_1\alpha_1 + x_2\alpha_2 + \cdots + x_n\alpha_n = 0$，将 $\beta$ 带入进去。

最后得到的方程会有 $r$ 个未知数，并且有 $s$ 个方程。

由于 $r > s$，根据上面关于齐次线性方程组的引理可以得到其有非零解进而 $\alpha$ 线性相关。

那么反过来，如果 $\alpha$ 可以被 $\beta$ 线性表出且 $\alpha$ 线性无关，那么 $r \le s$

可以再得到一个推论：

**任意 n + 1 个 n 维向量必相关**：

由于 $n$ 维单位向量可以表示任意一个 $n$ 维向量，而 $n + 1 > n$，那么推论成立。

### 秩

> **极大线性无关向量组**：对于向量组 $\alpha_1 \sim \alpha_n$，如果它的一个部分本身是线性无关的，并且从向量组中再添加一个进去（如果还有的话）就线性相关了，那么这个部分称作向量组的极大线性无关向量组

可以知道以下几点：

1) 任意极大线性无关向量组的向量个数必相等
2) 极大线性无关向量组和原向量组等价

我们称这个极大线性无关向量组的向量个数维与原向量组的**秩**

可以知道向量组本身是极大线性无关向量组的充要条件就是其向量个数等于其秩。

并且，等价的向量组必定有相同的秩

另外规定，极大线性无关向量组如果为零向量组，向量组的秩等于 $0$


### 矩阵的秩

矩阵的行向量组/列向量组的秩称为矩阵的行秩/列秩。

矩阵的最高阶**非零**子式的阶数称为矩阵的秩。

> **定理**：矩阵的秩 = 行秩 = 列秩

证明：

证明行秩 = 秩即可，列秩只需对 $A^T$ 再做一次就行。

根据定义，假设矩阵的秩为 $r$，那么存在 $r$ 阶非零子式使得所有 $r + 1$ 阶子式为 $0$。

取 $r$ 阶非零子式所在的这些行作为行向量组，由于子式非零所以对应的 $r$ 个长度为 $r$ 的向量线性无关，扩展后可以得到这 $r$ 个行向量线性无关。

那么 $r_r \ge r$。

而取 $r + 1$ 个行向量之后 $r + 1$ 阶子式必为 $0$，说明 $r_r \le r$。

综上 $r_r = r$

> **推论**：初等行变换不改变矩阵的秩

证明：

当然不改变行秩，进而不改变列秩不改变秩。

> **重要推论**：矩阵的秩等于其初等行变换过后得到的阶梯形矩阵的非零行数

证明：

初等行变换不改变矩阵的行秩，所以秩相等；

行阶梯形矩阵的全体非零行线性无关，且所有行均可由非零行线性表示，因此阶梯形的非零行数就是它的行秩；

从而原矩阵行秩等于阶梯非零行数。结合矩阵三秩相等，矩阵的秩等于行阶梯形的非零行数。


> **更重要推论**：如果矩阵初等行变换后得到的阶梯形的主元横坐标分别在 $i_1, i_2, \cdots i_r$，那么矩阵的第 $i_1, i_2, \cdots i_r$ 列构成矩阵列向量组的极大线性无关组

证明：

首先：**初等行变换不改变列向量的线性相关性。**

很简单因为如果 $\sum\limits_{k = 1}^{n}\alpha_kx_k = 0 \iff \sum\limits_{k = 1}^{n}\beta_kx_k$

所以只需要证明阶梯形矩阵主元对应列的那些向量线性无关就行了。

很显然由于主元左下角还有左边都是零，类比单位向量就可以知道线性无关。

然后只需要证明它能够表示其他向量就行，刚才证明了 $r$ 就是秩。

所以你加入一个向量就是线性相关的，那么这 $r + 1$ 个可以互表，自然新考虑的这个可以被选出的向量组表示。


> **推论**：如果矩阵 $A$ 是方阵，那么其行（列）向量组线性相关的条件是 $\det A = 0$，线性无关的条件是 $A\not=0$

证明：

当然这也是可以拿到齐次线性方程组的角度上来看的。

> **Cramer法则 & 逆定理**：
>
> 线性方程组 $\begin{cases}a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\ \cdots \\a_{n1}x_1 + a_{n2}x_2 + \cdots + a_{nn}x_n = b_n\end{cases}$ 有解的充分必要条件是：
>
> $A| = \begin{vmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn}\end{vmatrix} \not=0$

### 极大线性无关组的求法 - 筛选法

本质就是按列拼成一个矩阵然后做初等行变换化成阶梯形矩阵。

刚才证明了这不会改变矩阵的秩进而不会改变列秩。

之后取出每一个主元所在的列，找出对应的原向量，就是极大无关组了。

### 线性方程组有解判别定理

线性方程组可以表示为 $x_1\alpha_1 + x_2 \alpha_2 + \cdots + x_n\alpha_n = \beta$

其中 $\alpha_i = \begin{pmatrix}a_{1i}\\a_{2i}\\\vdots\\a_{si}\end{pmatrix}$

那么线性方程组有解等价于 $\beta$ 可以被 $\alpha_1 \sim \alpha_n$ 线性表示 

线性方程组有解的充要条件是：

其系数矩阵 $A$ 和增广矩阵 $\overline{A}$ 具有相同的秩

即：

$r\left(\begin{pmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn}\end{pmatrix}\right) = r\left(\begin{pmatrix}a_{11} & a_{12} & \cdots & a_{1n}  & b_{1}\\ a_{21} & a_{22} & \cdots & a_{2n} & b_2 \\ \vdots & \vdots & \ddots & \vdots & \vdots\\ a_{n1} & a_{n2} & \cdots & a_{nn} & b_{n}\end{pmatrix}\right)$

证明：

### 齐次线性方程组解的结构

根据上面的内容可以知道：

1. 齐次线性方程组只有零解 $\iff$ 系数矩阵 $A$ 的列向量组线性无关 $\iff r(A) = n$（未知数个数） $\iff A$ 是列满秩的。
2. 齐次线性方程组有非零解 $\iff$ 系数矩阵 $A$ 的列向量组线性相关 $\iff r(A) < n \iff A$ 不是列满秩的。

对于齐次线性方程组可以证明：**解的线性组合仍是齐次线性方程组的解**

证明：

> **基础解系**：对于齐次线性方程组的一组解 $\eta_1, \eta_2, \eta_3, \cdots \eta_t$，称其为齐次线性方程组的一个基础解系，如果：
>
> 1) 齐次线性方程组的任意一个解都可以表示为 $\eta_1, \eta_2, \eta_3, \cdots \eta_t$ 的一个线性组合。
>
> 2) $\eta_1, \eta_2, \eta_3, \cdots \eta_t$ 线性无关。

显然，**任意一个和基础解系等价的线性无关向量组都是基础解系**

其实基础解系就是想要找到个数最少的一组解向量使得它能表示出所有解向量。

那么可以看出，基础解系就是解向量组的**极大无关组**

并且基础解系所含解的个数等于 $n - r$，其中 $r$ 为系数矩阵的秩（可以发现 $n - r$ 就是自由元的个数）

如何求得齐次线性方程组的基础解系？

$r = n$ 的时候只有零解，根据消元法，考虑 $r < n$ 的情况。

本质就是解系数矩阵为：

$$\begin{pmatrix}1 & 0 & \cdots & 0 & -c_{1, r + 1} & \cdots & -c_{1, n} \\ 0 & 1 & \cdots & 0 & -c_{2, r + 1} & \cdots & -c_{2, n} \\ \vdots & \vdots & \ddots & \vdots & \vdots & \vdots & \vdots \\ 0 & 0 & \cdots & 1 & -c_{r, r + 1} & \cdots & -c_{r, n} \\ 0 & 0 & \cdots & 0 & 0 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots & \vdots & \vdots & \vdots \\ 0 & 0 & \cdots & 0 & 0 & \cdots & 0\end{pmatrix}$$

的一个方程。

我们将解写出来，设 $x$ 为齐次线性方程组的任意一解：

$$x = \begin{pmatrix}x_1 \\ \vdots \\ x_r \\ x_{r + 1} \\ \vdots \\ x_n \end{pmatrix} = \begin{pmatrix}c_{1, r + 1}x_{r + 1} + \cdots + c_{1, n}x_{n} \\ \vdots \\ c_{r, r + 1}x_{r + 1} + \cdots + c_{r, n}x_{n} \\ x_{r + 1} \\ \vdots \\ x_{n}\end{pmatrix}$$

将下面的自由元部分也用自由元 $x_{r + 1} \sim x_{n}$ 表示：

$$x = \begin{pmatrix}c_{1, r + 1}x_{r + 1} + c_{1, r + 2}x_{r + 2} \cdots + c_{1, n}x_{n} \\ \vdots \\ c_{r, r + 1}x_{r + 1} + c_{r, r + 2}x_{r + 2} + \cdots + c_{r, n}x_{n} \\ x_{r + 1} + 0x_{r + 2} + \cdots + 0x_{n} \\ \vdots \\ 0x_{r + 1} + 0x_{r + 2} + \cdots + x_{n}\end{pmatrix}$$

所以我们发现每一个解可以写作：

$$x = x_{r + 1}\begin{pmatrix}c_{1, r + 1} \\ c_{2, r+ 1} \\ \vdots \\ c_{r, r + 1} \\ 1 \\ 0 \\ \vdots \\ 0\end{pmatrix} + x_{r + 2}\begin{pmatrix}c_{1, r + 2} \\ c_{2, r+ 2} \\ \vdots \\ c_{r, r + 2} \\ 0 \\ 1 \\ \vdots \\ 0\end{pmatrix} + \cdots + x_{n} \begin{pmatrix}c_{1, n} \\ c_{2, n} \\ \vdots \\ c_{r, n} \\ 0 \\ 0 \\ \vdots \\ 1\end{pmatrix}$$

可以发现向量组 $\begin{pmatrix}c_{1, r + 1} \\ c_{2, r+ 1} \\ \vdots \\ c_{r, r + 1} \\ 1 \\ 0 \\ \vdots \\ 0\end{pmatrix},\begin{pmatrix}c_{1, r + 2} \\ c_{2, r+ 2} \\ \vdots \\ c_{r, r + 2} \\ 0 \\ 1 \\ \vdots \\ 0\end{pmatrix}\cdots ,\begin{pmatrix}c_{1, n} \\ c_{2, n} \\ \vdots \\ c_{r, n} \\ 0 \\ 0 \\ \vdots \\ 1\end{pmatrix}$ 满足条件：

1) 是原齐次线性方程组的解
2) 可以表示原方程组的任意解
3) 线性无关（这里相当于是从一个 $n - r$ 维单位向量组扩充而来的，自然是线性无关的）

故它是基础解系，原方程组的全体解即为其线性组合。

### 一般线性方程组解的结构

从齐次的出发：

称 

$$\begin{cases}a_{11}x_{1} + a_{12}x_{2} + \cdots + a_{1n}x_{n} = 0 \\ a_{21}x_{1} + a_{22}x_{2} + \cdots + a_{2n}x_n = 0\\ \cdots \\ a_{n1}x_{1} + a_{n2}x_{2} + \cdots  + a_{nn}x_{n} = 0\end{cases}$$

为

$$\begin{cases}a_{11}x_{1} + a_{12}x_{2} + \cdots + a_{1n}x_{n} = b_{1} \\ a_{21}x_{1} + a_{22}x_{2} + \cdots + a_{2n}x_n = b_{2}\\ \cdots \\ a_{n1}x_{1} + a_{n2}x_{2} + \cdots + a_{nn}x_{n} = b_{n}\end{cases}$$

的导出组。

现在我们已经可以求出导出组的全体解，只需要通过某种方式建立联系就行。

有一个很重要的东西需要注意：**非齐次线性方程组的解并没有线性性，即翻倍或者加和之后就不是方程的解了**

不难想到，原方程组的两个解 $\gamma_1, \gamma_2$之差一定是导出组的一组解 $\eta$。

所以如果我们知道原方程组的一组特解 $\gamma$，我们就可以通过取遍由 $\eta$ 组成的所有解来得到全体解，因为 $\gamma - \gamma^{\prime} = \eta \iff \gamma^{\prime} = \gamma - \eta$

所以原方程组的全体解为 $\gamma + k_1\eta_1 + k_2\eta_2 + \cdots k_t\eta_t$（由于 $k_i \in \mathbb R$ 所以前面是加减无所谓）

不难得到推论：

> 非齐次线性方程组由唯一解的充要条件是其导出组只有零解。

这个是好证明的，还有另外一个推论：

> $\gamma, \gamma + \eta_1, \gamma + \eta_2, \cdots + \gamma + \eta_t$ 有以下性质：
>
> 1) 线性无关
>
> 2) 它们是非齐次线性方程组的解向量组的极大线性无关组

证明只需要给每一个 $\eta$ 配一个 $\gamma$ 即可。
