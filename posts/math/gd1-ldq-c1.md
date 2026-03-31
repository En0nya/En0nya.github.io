## 高等代数(I) Chapter 1 行列式

由于高等代数记笔记相对于数分要麻烦很多。

所以这部分笔记都是课后做的思维整理。

### 行列式定义

行列式的引入一开始是为了给出 $n$ 元线性方程的公式解。

对于二元和三元的情况较为简洁。

例如 $\begin{cases}a_{11}x_1 + a_{12}x_2 = b_1 \\ a_{21}x_1 + a_{22}x_2 = b_2\end{cases}$

当 $a_{11}a_{22} - a_{12}a_{21} \not=0$ 时其解为 $x_1 = \dfrac{b_1a_{22} - b_2a_{12}}{a_{11}a_{22}-a_{12}a_{21}}, x_2 = \dfrac{a_{11}b_2 - a_{12}b_1}{a_{11}a_{22}-a_{12}a_{21}}$

定义 $\begin{vmatrix}a_{11} & a_{12} \\a_{21} & a_{22}\end{vmatrix}$ 为二阶行列式。

一般的：定义 $n$ 阶行列式为：

$D_n = \begin{vmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn}\end{vmatrix} = \sum\limits_{j_1,j_2,j_3,\cdots,j_n}^{}(-1)^{\tau(j_1,j_2,j_3,\cdots,j_n)} a_{1j_1} a_{2j_2}a_{3j_3}\cdots a_{nj_n}$

也就是行列式中所有处在不同行不同列的 $n!$ 组元素之积的和，$\tau$ 表示逆序数。

可以类比的认为，$n$ 阶行列式不等于零 $\iff$ 对应的线性方程组有唯一解

### 排列

> **性质**：排列中两元素交换位置一定改变 $\tau$ 的奇偶性。

先考虑相邻的情况，可以发现逆序对只改变 $1$。

考虑不相邻的情况，本质就是多个相邻交换构成的，显然交换次数一定是奇数次。

### 特殊行列式

1. （主）对角行列式：除了主对角线的元素均为 $0$，其值等于主对角线上的元素之积。

$$\begin{vmatrix}a_{11} & 0 & \cdots & 0 \\ 0 & a_{22} & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & a_{nn}\end{vmatrix}$$

2. 反对角行列式：反对角线的元素不为 $0$ 其余均为 $0$。值的负号取决于 $(-1)^{\dfrac{n(n-1)}{2}}$。

可以发现这就是冒泡排序的最坏情况。

3. 上三角行列式：主对角线下方均为 $0$，其值等于主对角线的元素乘积。

$$\begin{vmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ 0 & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & a_{nn}\end{vmatrix}$$

4. 下三角行列式：同理。

5. 反上三角行列式：类比反对角行列式。

6. 反下三角行列式：同理。

7. 转置：$D=\begin{vmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn}\end{vmatrix}$，称 $D^T = \begin{vmatrix}a_{11} & a_{21} & \cdots & a_{n1} \\ a_{12} & a_{22} & \cdots & a_{n2} \\ \vdots & \vdots & \ddots & \vdots \\ a_{1n} & a_{2n} & \cdots & a_{nn}\end{vmatrix}$ 为 $D$ 的转置行列式，可以发现值不变。

### 行列式的特殊性质

1. 行与列的地位相等：$D = D^T$
2. 交换两行，符号取反：$D = -D^{\prime}$

    本质和排列相同。
3. 某一行有公因子 $k$ 可以提出 $D = kD^{\prime}$

    其实就是按行展开然后提取这一行的公因子然后变回去 $=ka_{i1}A_{i1} + ka_{i2}A_{i2} + \cdots + ka_{in}A_{in}$

    $A_{ij}$ 表示所有会和 $a_{ij}$ 相乘的那一坨元素提出 $a_{ij}$ 之后的代数和（其实就是代数余子式）
4. 行列式中某一行为零则行列式为零 $D = 0$

    根据(3)提出 $0$ 就行了。

5. 某一行如果可以写作 $a_i + b_i$ 的形式那么可以拆成两个新行列式 $D = D_a + D_b$。

    可以类比(3)，按行展开，$(a_{ij} + b_{ij})A_{ij}$然后乘法分配律即可。

6. 如果某两行成比例则行列式为零 $D = 0$

    先提出 $k$ 变成相等的情况，现在考虑行列式的计算式。

    可以发现在计算选择元素时等价于交换这两行，那么如果我先选 $i$ 再选 $j$，必然会有结果仅有符号相反的先选 $j$ 再选 $i$ 的结果，于是两两抵消。

7. 某一行的 $k$ 倍加到另外一行，结果不变 $D = D$。

    加到另外一行之后可以根据 (5) 把它们拆开，拆开后第二项满足 (6) 故等于原行列式

### 行列式的计算

初等行变换：

1. 交换两行
2. 某一行乘 $k$ 倍（$k \in \mathbb P, k\not=0$）
3. 某一行加上某一行的 $k$ 倍。

初等行变换需要是可逆的

通过初等行变换可以将任意一个矩阵变为阶梯形矩阵：

1. 全零行在矩阵的最下方
2. 所有非零行第一个非零元素（主元）的左下角均为零。

$$\begin{bmatrix}0&1&2&3&5\\0&0&4&7&9\\0&0&0&0&0\end{bmatrix}$$

进一步可以化为最简形矩阵：非零行主元为 $1$ 且主元所在列其他元素均为 $0$

$$\begin{bmatrix}0&1&0&3&5\\0&0&1&7&9\\0&0&0&0&0\end{bmatrix}$$

标准型：

$A = (a_{ij})_{m\times n}$，称 $\begin{vmatrix}E_r &  0\\ 0 & 0\end{vmatrix}$ 为 $A$ 的标准型。

阶梯形/最简形方阵的行列式是好计算的。

所以行列式计算的原理就是化成阶梯形或者最简形然后再算。

### 行列式的计算(2) - 按行展开

思路就是每一行提出公因子 $k$ 里面的思路，将行列式写作：

$\det A = a_{i1}A_{i1} + a_{i2}A_{i2} + \cdots + a_{in}A_{in}$ 的形式。

$A_{ij}$ 是 $a_{ij}$ 的代数余子式，等于 $(-1)^{i + j}M_{ij}$。

其中 $M_{ij}$ 是划掉第 $i$ 行 $j$ 列之后构成的新行列式，可以发现这就是行列式计算式中所有包含 $a_{ij}$ 项的那一部分提出公因子后的代数和。

于是上面的式子可以表述为：**行列式的值等于某一行元素和它对应的代数余子式之积的和**。

当然也可以倒过来写新行列式。

> **展开法则**：用于快速计算行列式
>
> 如果 $a_{ij}\not=0$ 且它所在行/列的其他元素均为 $0$ 那么 $\det D = a_{ij}A_{ij}$

证明是简单的，直接利用定义展开（因为实际上按行展开是展开法则的推论）。

> **不匹配**：行列式的某一行元素乘上和它对应的另外一行的代数余子式之和为零

**倒着**把这个式子写作一个新的行列式就可以发现存在相同行。

### 行列式的计算(3) - 加边法

补一个 $(1, 0, 0, \cdots 0)$ 或者 $\begin{pmatrix}1 \\ 0 \\ 0 \\ \vdots \\ 0\end{pmatrix}$ 然后再做。

### 行列式的计算(4) - 分析因子法

通过带入使得行列式 $= 0$ 的 $x$，结合行列式展开式的次数利用待定系数法即可。

### Vandermonde 行列式


$$V_n = \begin{vmatrix}1 & 1 & \cdots & 1 \\ x_1 & x_2 & \cdots & x_n \\ \vdots & \vdots & \ddots & \vdots \\ x_{1}^n & x_{2}^n & \cdots & x_{n}^n\end{vmatrix} = \prod\limits_{n \ge i \ge j \ge 1}(x_i - x_j)$$

如何证明？

考虑数学归纳法。

$n = 2$ 明显成立，考虑 $n$ 成立推广到 $n + 1$。

所以想要消掉一行或者一列，这里让第 $i$ 行减去 $x_1$ 倍的第 $i - 1$ 行。

于是行列式将会变成：

$$V_n = \begin{vmatrix}1 & 1 & \cdots & 1 \\ 0 & x_2 - x_1 & \cdots & x_n - x_1 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & (x_2 - x_1)x_{2}^{n - 1} & \cdots & (x_n - x_1)x_{n}^{n - 1}\end{vmatrix} = \prod\limits_{n \ge i \ge j \ge 1}(x_i - x_j)$$

于是第一行第一列就被消掉了，剩下的部分吗，每一列提出 $x_i - x_1$ 即可。

### 放大版三角行列式

> 若行列式形如 $\begin{vmatrix}A & 0 \\ C & D\end{vmatrix}$。
>
> 则 $\det = \det A \cdot \det D$

做法也是归纳法。

### Cramer 法则

对于线性方程组可以写出它的系数矩阵：

$$A = \begin{pmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn}\end{pmatrix}$$

> Cramer 法则：
>
> 如果 $\det A \not=0$ 那么方程组有唯一解。可表示为 $x_i = \dfrac{d_i}{\det A}$，其中 $d_i$ 表示将第 $i$ 列换做方程的常数项 $b_1, b_2, \cdots, b_n$ 的行列式的值。

$$d_i = \begin{vmatrix}a_{11} & a_{12} & \cdots a_{1i-1} & b_{1} & a_{1i + 1} \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots a_{2i-1} & b_{2} & a_{2i + 1} \cdots & a_{2n} \\ \vdots & \vdots & \vdots & \vdots & \vdots & \vdots\\ a_{n1} & a_{n2} & \cdots a_{ni-1} & b_{n} & a_{ni + 1} \cdots & a_{nn}\end{vmatrix}$$

> **齐次**线性方程组：常数项 $b_i$ 均为 $0$。

显然线性方程组总是有解 $(0, 0, \cdots, 0)$，称为零解。

根据 Cramer 法则，$\det A\not=0$，方程组应当有唯一解，那么齐次线性方程组的唯一解就是零解。

如果 $\det A = 0$，方程组有非零解。

### Laplace 定理（行列式的乘法规则）

$k$ 阶子式：对于行列式 $D$，选定 $k$ 行 $k$ 列，这些交叉位置上的 $k^2$ 个元素按原次序组成的行列式 $M$。

$k$ 阶子式的余子式：$M$ 的余子式等于 $D$ 删去这 $k$ 行 $k$ 列之后构成的行列式 $M^{\prime}$。

代数余子式：$A = (-1)^{i_{1} + i_{2} + \cdots + i_{k} + j_{1} + j_{2} + \cdots + j_{k}}M^{\prime}$

> **引理**：对于 $D$ 中的任意一个子式 $M$，$MA$ 中任意一项都为 $D$ 的展开式中的一项且符号相同。

> **Laplace**：任取 $D$ 中的 $k$ 行，这 $k$ 行的所有元素组成的所有 $k$ 阶子式和其代数余子式之积的和等于 $D$。
>
> 即：$D = M_{1}A_{1} + M_{2}A_{2} + \cdots M_{t}A_{t}$

根据引理，又因为这 $t$ 个子式不会有重复项，只需要证明两边项数相等即可。

即证明 $n! = t \cdot k!$，这是显然的。

Laplace 定理用于计算不是那么方便，主要还是在证明当中使用，比如接下来的定理：

### 行列式的乘法定理（本质就是矩阵乘法）

$$A = \begin{vmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn}\end{vmatrix}, B = \begin{vmatrix}b_{11} & b_{12} & \cdots & b_{1n} \\ b_{21} & b_{22} & \cdots & b_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ b_{n1} & b_{n2} & \cdots & b_{nn}\end{vmatrix}$$

$$|A||B| = |C| \text{ s.t. } C = \begin{vmatrix}c_{11} & c_{12} & \cdots & c_{1n} \\ c_{21} & c_{22} & \cdots & c_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ c_{n1} & c_{n2} & \cdots & c_{nn}\end{vmatrix}$$

其中 $c_{ij} = \sum\limits_{k = 1}^{n}a_{ik}\cdot b_{kj}$

可以用 Laplace 定理证明，只需要构造这样一个行列式：

$$D = \begin{vmatrix}A & 0 \\ X & B\end{vmatrix} \text{ s.t. } X = \begin{vmatrix}-1 & 0 & \cdots & 0 \\ 0 & -1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & -1\end{vmatrix}$$

做一些初等行变换就可以让 $0$ 那一部分变成 $C$，取前 $n$ 行用 Laplace 定理即可证明。
