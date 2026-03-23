## 高等代数(I) Chapter 1 行列式

### 行列式定义

行列式的引入一开始是为了给出 $n$ 元线性方程的公式解。

对于二元和三元的情况较为简洁。

例如 $\begin{cases}a_{11}x_1 + a_{12}x_2 = b_1 \\ a_{21}x_1 + a_{22}x_2 = b_2\end{cases}$

当 $a_{11}a_{22} - a_{12}a_{21} \not=0$ 时其解为 $x_1 = \dfrac{b_1a_{22} - b_2a_{12}}{a_{11}a_{22}-a_{12}a_{21}}, x_2 = \dfrac{a_{11}b_2 - a_{12}b_1}{a_{11}a_{22}-a_{12}a_{21}}$

定义 $\begin{vmatrix}a_{11} & a_{12} \\a_{21} & a_{22}\end{vmatrix}$ 为二阶行列式。

一般的：定义 $n$ 阶行列式为：

> $D_n = \begin{vmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn}\end{vmatrix} = \sum\limits_{j_1,j_2,j_3,\cdots,j_n}^{}(-1)^{\tau(j_1,j_2,j_3,\cdots,j_n)} a_{1j_1} a_{2j_2}a_{3j_3}\cdots a_{nj_n}$

也就是行列式中所有处在不同行不同列的 $n!$ 组元素之积的和。

其中 $\tau$ 表示逆序数。

### 特殊行列式

1. （主）对角行列式：除了主对角线的元素均为 $0$，其值等于主对角线上的元素之积。

$\begin{vmatrix}a_{11} & 0 & \cdots & 0 \\ 0 & a_{22} & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & a_{nn}\end{vmatrix}$

2. 反对角行列式：反对角线的元素不为 $0$ 其余均为 $0$。值的负号取决于 $(-1)^{\dfrac{n(n-1)}{2}}$。

可以发现这就是冒泡排序的最坏情况。

3. 上三角行列式：主对角线下方均为 $0$，其值等于主对角线的元素乘积。

$\begin{vmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ 0 & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & a_{nn}\end{vmatrix}$

4. 下三角行列式：同理。

5. 反上三角行列式：类比反对角行列式。

6. 反下三角行列式：同理。

7. 转置：$D=\begin{vmatrix}a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn}\end{vmatrix}$，称 $D^T = \begin{vmatrix}a_{11} & a_{21} & \cdots & a_{n1} \\ a_{12} & a_{22} & \cdots & a_{n2} \\ \vdots & \vdots & \ddots & \vdots \\ a_{1n} & a_{2n} & \cdots & a_{nn}\end{vmatrix}$ 为 $D$ 的转置行列式，可以发现值不变。

### 行列式的特殊性质

1. $D = D^T$（这也说明行列式的行与列的地位对等）

2. $D\;\underrightarrow{kr_i} D_1, D_1 = kD$（这里意思是给某一行乘上 $k$，相应的也可以提出来）

3. $D\;\underrightarrow{r_i \Leftrightarrow r_j} D_1, D_1 = -D$，这里是交换两行。

4. 若 $r_i = r_j, D = 0$。

5. 若 $r_i = kr_j, D = 0$。

6. 若 $r_i = 0, D = 0$（显然的，因为每一项都会至少取到一个 $0$）

7. 若 $r_i = r_x + r_y$，则 $D = D_x + D_y$，其中 $D_x$ 为 $r_i$ 变为 $r_x$ 之后的 $D$（行列式可以拆分）

8. $D\;\underrightarrow{r_i + kr_j} D_1, D_1 = D$（某一行 $k$ 倍加到另外一行行列式不变）

### 例 1

> 多项式 $f(x) = \begin{vmatrix}x&x&1&2x\\1&x&2&-1\\2&1&x&1\\2&-1&1&x\end{vmatrix}$ 中 $x^3$ 的系数

直接用定义非常麻烦。

所以尝试先干掉一些元素，想要简单那么就把 $x$ 尽量减少。

$r_1 - 2r_4$ 然后 $r_1 - r_2$。

这样主对角线只有一个 $x-5$ 和三个 $x$，所以系数只能是 $-5$。

### 例 2

> 设 $D_n = \det(a_{i,j}), \text{ s.t. } a_{i,j} = -a_{j,i}$。
>
> 称其为反对称行列式，求证奇数阶反对称行列式 $=0$

显然主对角线元素 $a_{i,i} = 0$。

设出行列式：

一个想法就是想办法弄一个负号出来，并且后面还是他本身。

那就尝试提出公因子。

可以发现：$D_n = (-1)^{n} D_n^T$。（每一行提出一个 $-1$ 就得到了转置，而 $D = D^T$）。

可知 $n$ 为奇数的时候反对称行列式 $=0$

### 例 3 （行列式的第一类通用算法）

> 计算行列式 $\begin{vmatrix}-2 &5 &-1 &3 \\ 1 &-4 &2 &-3 \\ 2 &1 &5 &-1 \\ 3 &3 &2 &4\end{vmatrix}$

先把第二行换到第一行（记得带上负号）（这步主要是为了避免分数），然后通过加减一列一列的化为上三角行列式。

$=-\begin{vmatrix}1 &-4 &2 &-3 \\ 0 &-3 &3 &-3 \\ 0 &0 &10 &-4 \\ 0 &0 &0 &\frac{12}{5}\end{vmatrix}$

### 例 4（拆分）

> 求证：$\begin{vmatrix}ax + by &ay + bz &az+bx \\ ay + bz &az + bx &ax+by \\ az+bx &ax+by &ay+bz\end{vmatrix} =$

注意拆的时候是只拆一列

拆掉之后形如 $a\begin{vmatrix}x &ay + bz &az+bx \\ y &az + bx &ax+by \\ z &ax+by &ay+bz\end{vmatrix} + b\begin{vmatrix}y &ay + bz &az+bx \\ z &az + bx &ax+by \\ x &ax+by &ay+bz\end{vmatrix}$

然后用第一列的 $-b$ 倍干掉后面的部分就可以了。

### 例 5

> 计算 $\begin{vmatrix}a^2 &(a+1)^2 &(a+2)^2 &(a+3)^2 \\ b^2 &(b + 1)^2 &(b + 2)^2 &(b+3)^2\\ c^2 &(c+1)^2 &(c+2)^2 &(c+3)^2 \\ d^2 &(d+1)^2 &(d+2)^2 &(d+3)^2\end{vmatrix}$

一看就是第一列 $-1$ 倍加到后面三列。

于是形如

$\begin{vmatrix}a^2 & 2a+1 & 4a+4 & 6a + 9\end{vmatrix}$

发现第三列减掉第二列和第三列成比例：

$\begin{vmatrix}a^2 & 2a+1 & 2a+3 & 6a + 9\end{vmatrix}$

故为零行列式。

### 例 6

> $计算 \begin{vmatrix}a_1 - b_1 &a_1-b_2 &\cdots &a_1-b_n \\ a_2 - b_1 &a_2-b_2 &\cdots &a_2-b_n \\ \cdots &\cdots &\cdots &\cdots \\ a_n - b_1 &a_n-b_2 &\cdots &a_n-b_n\end{vmatrix}$

操作一下可以发现其为零行列式。

### 矩阵的定义

> $s\times n$ 个元素排成的 $s$ 行 $n$ 列的数表。
>
> 矩阵的元均为数域 $P$ 中的元素，则称为 $P$ 上的矩阵。
>
> $a_{i,i}$ 称为对角元。
>
> $s = n$ 的矩阵称为 $n$ 阶方阵（$A_n$）。
>
> $n$ 阶单位矩阵（$E_n/I_n$）：对角元为 $1$ 其它均为 $0$。
>
> $n$ 阶行列式称为方阵 $A$ 的行列式，记作 $|A| / \det A$
>
> 若两个矩阵 $s = s, n = n$ 则称为同型矩阵。
>
> 更进一步，对应位置相等则称为相等矩阵。
>
> $n$ 阶 零矩阵也可以记作 $0$（所以在这种意义上 $0\not=0$）。

### 矩阵的初等变换

初等行变换：

1. $kr_i, (k\not=0, k \in P)$
2. $r_i + kr_j (k \in P)$ （$k$ 倍的第 $j$ 行加到 $i$ 行）
3. $swap(r_i, r_j)$。

注意，每一种初等变换应当是可逆的，所以 1 中 $k\not=0$。

并且它的逆变换也应该为初等变换。

初等列变换（同理）

### （行）阶梯型矩阵

> 1. 全为 $0$ 的行在矩阵下方
> 2. 非零行首个非零元素（主元）的左下方的元素全为零

可以证明，任何矩阵经过初等行变换可以将其化成阶梯型矩阵。

证明：

设 $A = (a_{i,j})_{m\times n}$

若 $c_1$ 存在一个非零元，交换至 $(1, 1)$ 即可。

$r_2, \cdots r_n$ 加上适当倍数 $r_1$ 可以将 $c_1$ 化为 $\begin{bmatrix}a^\prime_{1,1}\\0\\0\\\cdots\\0\end{bmatrix}$

然后递归处理子矩阵 $(2, 2) \sim (m, n)$。

若 $c_1$ 全为 $0$，则对第一个不全为 $0$ 的列操作即可。

阶梯形矩阵显然不唯一。

例如：

$\begin{bmatrix}0&1&2&3&5\\0&0&4&7&9\\0&0&0&0&0\end{bmatrix}$

### （行）最简形

> 1. 是阶梯型矩阵。
> 2. 主元为 $1$ 且主元所在列的其他元素全都为 $0$

$\begin{bmatrix}0&1&0&3&5\\0&0&1&7&9\\0&0&0&0&0\end{bmatrix}$

### 标准型

$A = (a_{ij})_{m\times n}$，称 $\begin{vmatrix}E_r &  0\\ 0 & 0\end{vmatrix}$ 为 $A$ 的标准型。

### 行列式计算

原理就是任意方阵 $A$ 经过初等行变换为阶梯型矩阵 $J$，且 $\det A =k\det J, (k\not=0)$

### 例

> $\begin{vmatrix}1&2&2&\cdots&2\\2&2&2&\cdots&2 \\ 2&2&3&\cdots&2\\\cdots&\cdots&\cdots&\cdots&\cdots\\2&2&2&\cdots&n\end{vmatrix}$

全部减去第二行，发现这就变成了一个。

### 行列式按一行（列）展开（降阶）

把行列式整个展开，我们想要降阶，于是提出公因子：

$\begin{bmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{bmatrix} = a_{11}\begin{bmatrix}a_{22}&a_{23}\\a_{32}&a_{33}\end{bmatrix} - a_{12}\begin{bmatrix}a_{21}&a_{23}\\a_{31}&a_{33}\end{bmatrix} + a_{13}\begin{bmatrix}a_{21}&a_{22}\\a_{31}&a_{32}\end{bmatrix}$

现在的问题就是要把符号也写明白，很容易发现和 $i + j$ 奇偶性相关。

### 余子式

> 在 $D_{n} = \det(a_{ij})$ 中，把 $a_{ij}$所在的行列划去，剩下的元素按原有位置形成的 $n-1$ 阶行列式称为元素 $a_{ij}$ 的余子式，记为 $M_{ij}$。
>
> 称 $A_{ij} = (-1)^{i + j}M_{ij}$ 为 $a_{ij}$ 的代数余子式。

注意：余子式和元素大小无关，只和元素位置有关。

### 展开法则

> $D_n = \det(a_{ij})$ 中，若 $i$ 行中除了 $a_{i,j}$ 都为 $0$。
>
> 那么 $D_n = a_{i,j}A_{i,j}$。

先证明 $m = n$ 的情况

因为是字母，用直接计算的办法无法确定分母是否为 $0$，所以直接用定义做。

然后再证明一般情况

### 例

$D=\begin{vmatrix}1+x&1&1&1\\1&1-x&1&1\\1&1&1+y&1\\1&1&1&1-y\end{vmatrix}$

看到加号还是考虑拆分。

法二：

### 定理 （展开法则的扩展）

> 行列式等于它任意一行的所有元素与其对应代数余子式的乘积之和。
>
> 即：$D = a_{i1}A_{i1} + a_{i2}A_{i2} + \cdots + a_{in}A_{in}$

先考虑研究低阶的情况，例如三阶：

$\begin{vmatrix}a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33}\end{vmatrix}$

想要化成能用展开法则的样子：

于是空拆：

$\begin{vmatrix}a_{11} & a_{12} & a_{13} \\ a_{21}+0 & 0+a_{22} & 0 +a_{23} \\ a_{31} & a_{32} & a_{33}\end{vmatrix} = \begin{vmatrix}a_{11} & a_{12} & a_{13} \\ a_{21} & 0 & 0 \\ a_{31} & a_{32} & a_{33}\end{vmatrix} + \begin{vmatrix}a_{11} & a_{12} & a_{13} \\ 0 & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33}\end{vmatrix}$

前者可以直接用展开法则，后者同理处理可以证明。

$n$ 阶方法一致。

### 推论

> 行列式中任意一行的各元素与另一行对应元素的代数余子式乘积之和等于 $0$
>
> 即：$0 = a_{i1}A_{j1} + a_{i2}A_{j2} + \cdots + a_{in}A_{in}$

仍旧考虑三阶特例：

可以逆推，$a_{21}A_{31}$ 可以看作：

$\begin{vmatrix}a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{21} & 0 & 0\end{vmatrix}$

另外几个同理

$a_{22}A_{32} = \begin{vmatrix}a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ 0 & a_{22} & 0\end{vmatrix},a_{23}A_{33}=\begin{vmatrix}a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ 0 & 0 & a_{23}\end{vmatrix}$

于是把这三个加起来就变成了：

$\begin{vmatrix}a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{21} & a_{22} & a_{23}\end{vmatrix} = 0$

### 例

> $\begin{vmatrix}1 & 2 & 3 & 4 \\ 2 & 3 & 4 & 1 \\  3& 4 & 1 &2  \\ 4 & 1 & 2 & 3\end{vmatrix} = D, A_{14} + 2A_{24} + 3A_{34} + 4A_{44} =$

法一：可以注意到这里就是按第四列展开，但是元素是第一列的，于是应该等于 $0$

法二：直接把后面的展开式重新写成一个行列式然后观察值，可以发现是一个零行列式

> $\begin{vmatrix}a & b & c & d \\ c & b & d & a \\  d& b & c &a  \\ a & b & d & c\end{vmatrix} = D, A_{14} + 2A_{24} + 3A_{34} + 4A_{44} =$

直接重新写成行列式，可以发现第二列第四列成比例。

> $\begin{vmatrix}3 & 1 & -1 & 2 \\ -5 & 1& 3 & -4\\ 2 & 0 & 1 &-1  \\ 1 & -5 & 3 & -3\end{vmatrix} =$

注意到 $a_{32} = 0$，于是我们可以把第三行化成只有一个元 $\not=0$ 然后按第三行展开。

$\begin{vmatrix}5 & 1 & -1 & 1 \\ -11 & 1& 3 & -1\\ 0 & 0 & 1 &0  \\ -5 & -5 & 3 & 0\end{vmatrix} = 1 \times(-1)^{3 + 3}\begin{vmatrix}5 & 1 & 1 \\ -11 & 1 & 1 \\ -5 & -5 & 0\end{vmatrix}$

对于这个新的行列式可以直接算了，也可以再重复一次这个过程变成二阶。

### 思考题

> 设 $D_n = \begin{vmatrix}1 & 1 & \cdots & 1 \\ a_{21} & 2 & \cdots & 2 \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & n\end{vmatrix}$，求其所有代数余子式之和。

$n! = D_n = \\ A_{11} + A_{12} + \cdots + A_{1n} +\\A_{21} + A_{22} + \cdots + A_{2n} + \\ A_{n1} + A_{n2} + \cdots + A_{nn}$

可以发现第一行已经知道是 $n!$，后面的可以看作按照第一行的元素展开，都是 $0$。

所以 $\sum =0$

### 范德蒙德行列式

$V_n = \begin{vmatrix}1 & 1 & \cdots & 1 \\ x_1 & x_2 & \cdots & x_n \\ \vdots & \vdots & \ddots & \vdots \\ x_{1}^n & x_{2}^n & \cdots & x_{n}^n\end{vmatrix} = \prod\limits_{n \ge i \ge j \ge 1}(x_i - x_j)$

证明：

考虑数学归纳法，$n = 2$ 显然成立。

假设 $n = n - 1$ 时成立：

那么想要降阶。

这里倒着从下往上做，用倒数第一行减去倒数第二行 $x_1$ 倍。

$V_n = \begin{vmatrix}1 & 1 & \cdots & 1 \\ x_1 & x_2 & \cdots & x_n \\ \vdots & \vdots & \ddots & \vdots \\ 0 & x_{2}^{n-2}(x_2 - x_1) & \cdots & x_{n}^{n-2}(x_n - x_1)\end{vmatrix}$

然后每一行都同理：

于是变成：

$V_n = \begin{vmatrix}1 & 1 & \cdots & 1 \\ 0 & x_2 - x_1 & \cdots & x_n - x_1\\ \vdots & \vdots & \ddots & \vdots \\ 0 & x_{2}^{n-2}(x_2 - x_1) & \cdots & x_{n}^{n-2}(x_n - x_1)\end{vmatrix}$


于是就可以第一列展开，再提出 $(x_2 - x_1)(x_3 - x_1)\cdots(x_n - x_1)$ 的公因子：

那么有 $V_n = \prod\limits_{i = 2}(x_i - x_1)V_{n - 1}$

不过注意这个 $V_{n - 1}$ 是 $x_2$ 开始的，但是本质相同。

于是就证明了范德蒙德行列式。

### 例

> $\begin{vmatrix}1 & 2 &3  &4  \\ 1 & 2^2  & 3^2 & 4^2 \\ 1 & 2^3 & 3^3 & 4^3 \\ 5 & 4 & 3 & 2\end{vmatrix}$

注意到 $r_4 + r_1 = 6\; 6\; 6\; 6$。

那么提出公因子 $6$ 再把第四行交换到第一行，这就是标准的范德蒙德行列式。

> $\begin{vmatrix} 1 & 1 & 1 & 1 \\ a & b & c & d \\ a^2& b^2 & c^2 & d^2 \\ a^4 & b^4 & c^4 & d^4\end{vmatrix} =$

实在不知道怎么做，于是暴力的插进去一行，但是同样的要补一列，还要能建立联系。

$D^{\prime} = \begin{vmatrix}x^0 & 1 & 1 & 1 & 1 \\x & a & b & c & d \\x^2 & a^2& b^2 & c^2 & d^2\\x^3 & a^3 & b^3 & c^3 & d^3 \\x^4 & a^4 & b^4 & c^4 & d^4\end{vmatrix}= \\(a-x)(b-x)(c-x)(d-x)\\(b-a)(c-a)(d-a)\\(c-b)(d-b)\\(d-c)$

可以发现 $D = D^{\prime}$ 的 $M_{41}$

由于 $D^{\prime} = A_{11} + xA_{21} + x^2 A_{31} + x^3 A_{41} + x^4 A_{51}$

这两个式子的 $x$ 同次幂系数应该相同。

$x^3A_{41}$ 的系数应该是：$(-a-b-c-d)\cdot (b-a)(c-a)(d-a)(c-b)(d-b)(d-c)$

所以 $A_{41} = (-1)^{4 + 1}M_{41} \Rightarrow M_{41} = (a + b + c + d)\cdot(b-a)(c-a)(d-a)(c-b)(d-b)(d-c)$。

### 数学归纳法计算行列式

> 如果 $A,B,C$，它们构成了一个新的行列式：
> 
> $D = \begin{vmatrix}A & 0 \\ B & C\end{vmatrix}$。
> 
> 那么 $\det D = \det A\cdot \det C$

证明：让 $A$ 的阶数从 $1$ 开始，然后做数学归纳法

$m - 1$ 成立，$m$ 的情况直接按照第一行展开： 

$D = a_{11}A_{11} + a_{12}A_{12} + \cdots + a_{1m}A_{1m}$

然后发现这些余子式其实都是四分块构成下三角，就很容易写出结果了。

以及 $B$ 和 $0$ 可以都不是行列式。

如果构成的是反下三角的话直接交换过去就行了。

### 加边法（升阶）

计算：

> $\begin{vmatrix} 1+x_1^2 & x_1x_2 & \cdots & x_1x_n \\ x_2x_1 & 1 + x_2^2 & \cdots & x_2x_n \\ \vdots & \vdots & \ddots & \vdots \\ x_nx_1 & x_nx_2 & \cdots & 1 + x_{n}^2\end{vmatrix} =$

直接加第一行：$[1, 0, 0, 0 \cdots 0]$，可以发现第一列元素不管怎么变都是原行列式，所以可以把第一列写成 $[1, x_1, x_2, \cdots x_n]$。

那么 $c_2 - x_1c_1, c3-x_2c_1 \cdots c_{n + 1} - x_nc_1$。

这样行列式就变成：

$\begin{vmatrix}1 & -x_1 & \cdots & -x_{n} \\ x_{1} & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ x_{n} & 0 & \cdots & 1\end{vmatrix}$

这种称为鸡爪型行列式，可以很容易的变成上三角/下三角。

一行一行按 $x_i$ 倍加到第一行就变成下三角了。

于是原式 $= 1 + \sum\limits_{i = 1}^{n}x_i^2$

### 例子

### 递推法

> 计算 $D_{2n} = \begin{vmatrix}A & B \\ C & D\end{vmatrix}$
>
> 其中 $A, D$ 主对角线分别为 $a, d$，$B, C$ 反对角线分别是 $b, c$ 其他位置是 $0$

直接按第一行展开：

$D_{2n} = aA_{11} + bA_{1,2n}$

然后下面的余子式部分存在只有一个非零元素 $d(c)$ 的行（列）。

于是：

$D_{2n} = adD_{2(n - 1)} - bcD_{2(n-1)}$

递推可得：$D_{2n} = (ad - bc)^{n - 1}D_{2} = (ad - bc)^n$

递推法基本要先展开

当然递推法可以用不同的方式展开再解方程

### 例子

### Laplace 法则

### 克拉默 法则

### 高斯消元法

处理带未知数的行列式的时候一般都想要提出公因子

### n 维向量空间

线性方程组要化成阶梯形才能判断有效方程

能够不化阶梯形直接判断？

$n$ 元线性方程可以写做有序行向量：$(a_1, a_2, \cdots a_n, b)$

那么方程组就是一个有序向量组。

定义：

> 数域 $P$ 上的 $n$ 个数组成的有序数组称为数域 $P$ 上的一个 $n$ 维向量。，$a_i$ 称为其的第 $i$ 个分量。
>
> 一般用 $\alpha, \beta, \gamma$ 表示。
>
> 分为行向量列向量, $(a_1, a_2, \cdots, a_n), \begin{pmatrix}a_1 \\ a_2 \\ \vdots \\ a_n\end{pmatrix}$。
>
> 一般默认向量为列向量。

如果 $\alpha, \beta$ 两个向量的对应分量皆相等，那么 $\alpha = \beta$

分量全为 $0$ 的向量称为零向量，记作 $0$。（所以可能 $0\not=0$）

运算：

- $\alpha + \beta$ 就是对应分量相加 $(a_1 + b_1, a_2 + b_2, \cdots, a_n + b_n)$

- 数乘：$k\alpha$ 就是每个分量乘上 $k$

向量的加法和数乘称为向量的线性运算，它们需要满足以下条件（此处实质是在定义加法和乘法）。

交换律：$\alpha + \beta = \beta + \alpha$

结合律：$\alpha + (\beta + \gamma) = (\alpha + \beta) + \gamma$

有零元：$\alpha + 0 = \alpha$

有负元：$\alpha + (-\alpha) = 0$

数对向量结合律 $k(\alpha + \beta) = k\alpha + k\beta$

向量对数分配律 $(k + l)\alpha = k\alpha + l\alpha$

数因子结合律 $k(l\alpha) = (kl)\alpha$

单位律：$1 \alpha = \alpha$

若 $k\not=0, \alpha\not=0, k\alpha\not=0$

### 向量运算的应用

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

### 向量空间

> 数域 $P$ 上全体 $n$ 维向量与它们的线性运算称为数域 $P$ 上的 $n$ 维向量空间 $P^n$

### 线性组合

> 设 $\beta_1, \beta_2, \beta_3 \cdots \beta_s \in P^n$。
>
> 若 $\forall k_1, k_2, \cdots k_s \in P$，$\alpha = k_1\beta_1 + k_2\beta_2 + \cdots + k_s\beta_s$。
>
> 那么称 $\alpha$ 为向量组 $\beta_1, \beta_2, \cdots, \beta_s$ 的一个线性组合
>
> 也称 $\alpha$ 能被向量组线性表示。

注：若 $\alpha = k\beta$，称 $\alpha$ 与 $\beta$ 称比例

零向量 $0$ 可以由任意向量组线性表示

向量组中任意向量都可以被向量组线性表示。

任意 $n$ 维向量都可以由向量组 $\epsilon_1 = (1, 0, \cdots 0), \epsilon_2 = (0, 1, \cdots 0), \cdots \epsilon_n = (0, 0, \cdots 1)$ 表示。

$\alpha = a_1\epsilon_1 + a_2\epsilon_2 + \cdots a_n\epsilon_n$

称 $\epsilon_1, \epsilon_2, \cdots, \epsilon_n$ 为 $n$ 维单位坐标向量组（类比退化到二维的单位坐标向量）。

### 一个考研题的例子

### 线性相关

> 设 $\alpha_1, \alpha_2, \cdots \alpha_s \in P^n, (s\ge 1)$
>
> 若存在不全为零的 $P$ 中的数 $\lambda_1, \lambda_2, \cdots, \lambda_s \text{ s.t. }$
>
> $\lambda_1 \alpha_1 + \lambda\alpha_2 + \cdots + \lambda_s \alpha_s = 0$
> 
> 则称 $\alpha_1, \alpha_2, \cdots, \alpha_s$ 线性相关，否则称其线性无关

线性相关等价于系数不全为零，线性组合等于零

### 线性无关

> 设 $\alpha_1, \alpha_2, \cdots \alpha_s \in P^n, (s\ge 1)$
>
> 不存在不全为零的 $P$ 中的数 $\lambda_1, \lambda_2, \cdots, \lambda_s \text{ s.t. }$
>
> $\lambda_1 \alpha_1 + \lambda\alpha_2 + \cdots + \lambda_s \alpha_s = 0$
> 
> 则称 $\alpha_1, \alpha_2, \cdots, \alpha_s$ 线性无关

只有系数全为零，才有线性组合等于零

注：

1. 为什么要叫线性相关无关：除平凡情况 $x_1\alpha_1 + x_2\alpha_2 + \cdots + x_s\alpha_s = 0$ 此式是否成立，如果成立，就说明这些向量 $\alpha_i$ 存在一个关于线性组合的关系。
2. 任意向量组要么线性相关要么线性无关（定义中有“否则”）
3. 和线性方程组的关系：如果 $\alpha_1, \alpha_2, \alpha_3$ 线性相关，那么对应的齐次线性方程组存在非零解 $x_1, x_2, x_3$。若 $A = (\alpha_1, \alpha_2, \alpha_3)$ 为方阵，那么 $\det A = 0$；
    
    如果线性无关则只有零解，若 $A = (\alpha_1, \alpha_2, \alpha_3)$ 为方阵，那么 $\det A \not= 0$
4. 如何判定：
    1. 假设线性组合 $x_1\alpha_1 + x_2 \alpha_2 + \cdots x_n\alpha_n=0$
    2. 写出对应的齐次方程组（向量形式）
    3. 解方程组

    或者：
    - 假设 $= 0$。
    - 算系数。
    - 判断系数不全为零

### 例

> 若向量组只有一个向量 $\alpha$。
>
> $\alpha$ 线性相关等价于 $k\not=0, k\alpha = 0 \iff \alpha = 0$

> 若向量组有两个向量 $\alpha, \beta$。
>
> $\alpha, \beta$ 线性相关等价于对应分量成比例。

证明，设 $\alpha, \beta$ 线性相关。

等价于：$\exists k_1, k_2$ 不全为 $0$ 使得 $k_1\alpha + k_2 \beta = 0$.

不妨设 $k_1\not=0$ 那么 $\alpha = -\dfrac{k_2}{k_1}\beta$

> $n$ 维单位坐标向量组是线性无关的。

因为你 $i$ 这个位置只有一个 $\not=0$ 的，没有办法做抵消，那么一定线性无关。

### 例

> 设 $A$ 是 $n$ 阶矩阵，若存在正整数 $k$ 使得 $A^kx = 0$ 有解向量 $\alpha$ 并且 $A^{k - 1}\alpha \not=0$ 证明 $\alpha, A\alpha, \cdots A^{k - 1}\alpha$ 线性无关。

$l_0 \alpha + l_1 A\alpha + \cdots + l_{k - 1}A^{k - 1}\alpha = 0$。

为了利用已知条件 $A^k\alpha = 0$。

两边同乘 $A$ 然后变成 $l_0A\alpha + l_1 A^2\alpha + \cdots l_{k - 2}A^{k - 1}\alpha = 0$

那么最后得到 $l_{0}A^{k - 1}\alpha= 0$。

那么 $A^{k - 1}\alpha\not= 0 \Rightarrow l_0 = 0$，以此类推 $l_i = 0$。

那么向量组线性无关。

### 3-3.2.9

继续用定义，假设向量组线性无关。

### 相关性判定定理

（有一个定理）

> 向量组线性相关 $\iff$ 向量组中至少有一个向量能够有其余向量线性表示

证明：

$\Rightarrow$

$\Leftarrow$

推论：（哪一个定理）

> 已知 $\alpha_1, \alpha_2, \cdots, \alpha_m, \beta$ 线性相关。
>
> 钦定 $\alpha_1, \alpha_2, \cdots, \alpha_m$ 线性无关。
>
> 那么 $\beta$ 可以被 $\alpha_1, \alpha_2, \cdots, \alpha_m$ 线性表示且表示方式唯一。

证明

推论2：（部分相关则整体相关）

> 向量组 $\alpha_1, \alpha_2, \cdots \alpha_m$线性相关。
>
> 向量组 $\alpha_1, \alpha_2, \cdots, \alpha_m, \alpha_{m + 1}, \cdots \alpha_n$ 线性相关。

其逆否命题就是整体不相关，则部分不相关。

特例：含零向量的向量组线性相关（其它系数全部为 $0$，零向量系数不为 $0$ 即可）。

### 例


