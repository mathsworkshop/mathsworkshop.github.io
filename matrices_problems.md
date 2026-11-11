@@@ kernel-of-a-matrix.md
---
title: Kernel of a matrix
category: linear/matrices
level: l1
difficulty: 2
tags: kernel, rank
date: 2026-10-31
---

## Statement

Let $A=\begin{pmatrix}1&2&3\\2&4&6\end{pmatrix}$. Find the rank of $A$, and a basis of its kernel.

## Hint

Compare the two rows.

## Solution

The second row is twice the first, so the rows span a line and $\operatorname{rank}A=1$.

The kernel is the set of $(x,y,z)\in\mathbb{R}^3$ with $x+2y+3z=0$ (the second equation is a multiple of the first). Writing $x=-2y-3z$,
$$(x,y,z)=y\,(-2,1,0)+z\,(-3,0,1).$$

So $\{(-2,1,0),(-3,0,1)\}$ is a basis of $\ker A$, which has dimension $2=3-\operatorname{rank}A$, as the rank–nullity theorem predicts.
@@@ matrix-operations-basic.md
---
title: Matrix addition and scalar multiplication
category: linear/matrices
level: lycee
difficulty: 1
tags: matrix operations, addition, scalar multiplication
date: 2026-11-03
---

## Statement

Let
$$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \qquad B = \begin{pmatrix} 0 & -1 \\ 2 & 5 \end{pmatrix}.$$
Compute $A+B$, $3A$, and $2A - 3B$.

## Hint

Add matrices entry by entry; multiply each entry by the scalar.

## Solution

**Sum.**
$$A+B = \begin{pmatrix} 1+0 & 2-1 \\ 3+2 & 4+5 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 5 & 9 \end{pmatrix}.$$

**Scalar multiple.**
$$3A = \begin{pmatrix} 3 & 6 \\ 9 & 12 \end{pmatrix}.$$

**Linear combination.**
$$2A = \begin{pmatrix} 2 & 4 \\ 6 & 8 \end{pmatrix}, \qquad 3B = \begin{pmatrix} 0 & -3 \\ 6 & 15 \end{pmatrix},$$
so
$$2A - 3B = \begin{pmatrix} 2 & 7 \\ 0 & -7 \end{pmatrix}.$$

@@@ matrix-multiplication-basic.md
---
title: Matrix multiplication
category: linear/matrices
level: lycee
difficulty: 2
tags: matrix multiplication, non-commutativity
date: 2026-11-03
---

## Statement

Let
$$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \qquad B = \begin{pmatrix} 2 & 0 \\ 1 & -1 \end{pmatrix}.$$
Compute $AB$ and $BA$. Are they equal?

## Hint

The entry $(i,j)$ of $AB$ is the dot product of row $i$ of $A$ with column $j$ of $B$.

## Solution

**Product $AB$.**
$$AB = \begin{pmatrix} 1\cdot2+2\cdot1 & 1\cdot0+2\cdot(-1) \\ 3\cdot2+4\cdot1 & 3\cdot0+4\cdot(-1) \end{pmatrix} = \begin{pmatrix} 4 & -2 \\ 10 & -4 \end{pmatrix}.$$

**Product $BA$.**
$$BA = \begin{pmatrix} 2\cdot1+0\cdot3 & 2\cdot2+0\cdot4 \\ 1\cdot1+(-1)\cdot3 & 1\cdot2+(-1)\cdot4 \end{pmatrix} = \begin{pmatrix} 2 & 4 \\ -2 & -2 \end{pmatrix}.$$

**Conclusion.** $AB \neq BA$: matrix multiplication is not commutative.


@@@ matrix-transpose-properties.md
---
title: Properties of the transpose
category: linear/matrices
level: l1
difficulty: 2
tags: transpose, properties, matrix operations
date: 2026-11-03
---

## Statement

Let $A, B$ be matrices of compatible sizes and $\lambda \in \mathbb{R}$. Prove that
$$(A+B)^T = A^T + B^T, \qquad (\lambda A)^T = \lambda A^T, \qquad (AB)^T = B^T A^T.$$

## Hint

For the third identity, compare the entry $(i,j)$ on both sides using the definition of matrix product.

## Solution

**First identity.** The entry $(i,j)$ of $(A+B)^T$ is the entry $(j,i)$ of $A+B$, which is $a_{ji}+b_{ji}$. This is exactly the sum of the entries $(i,j)$ of $A^T$ and $B^T$.

**Second identity.** The entry $(i,j)$ of $(\lambda A)^T$ is $\lambda a_{ji} = \lambda (A^T)_{ij}$.

**Third identity.** The entry $(i,j)$ of $(AB)^T$ is the entry $(j,i)$ of $AB$:
$$(AB)_{ji} = \sum_k a_{jk} b_{ki}.$$
The entry $(i,j)$ of $B^T A^T$ is
$$\sum_k (B^T)_{ik}(A^T)_{kj} = \sum_k b_{ki} a_{jk}.$$
The two sums are equal (same terms, reordered), so $(AB)^T = B^T A^T$.

@@@ matrix-inverse-2x2.md
---
title: Inverse of a 2Ã—2 matrix
category: linear/matrices
level: l1
difficulty: 2
tags: inverse, determinant, 2x2 matrices
date: 2026-11-03
---

## Statement

Compute the inverse of
$$A = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}.$$

## Hint

For $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, if $ad-bc \neq 0$ then
$$A^{-1} = \frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}.$$

## Solution

**Determinant.** $\det A = 3\cdot2 - 5\cdot1 = 6 - 5 = 1$.

Since $\det A \neq 0$, $A$ is invertible and
$$A^{-1} = \frac{1}{1}\begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix} = \begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}.$$

**Verification.**
$$AA^{-1} = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix} = \begin{pmatrix} 6-5 & -15+15 \\ 2-2 & -5+6 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}.$$

@@@ matrix-inverse-3x3.md
---
title: Inverse of a 3Ã—3 matrix by row reduction
category: linear/matrices
level: l1
difficulty: 4
tags: inverse, Gaussian elimination, 3x3 matrices
date: 2026-11-03
---

## Statement

Compute the inverse of
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}.$$

## Hint

Apply Gaussian elimination to the augmented matrix $[A \mid I]$ until the left block becomes the identity.

## Solution

**Augmented matrix.**
$$\left(\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 0 & 1 & 4 & 0 & 1 & 0 \\ 5 & 6 & 0 & 0 & 0 & 1 \end{array}\right).$$

**Elimination.** $L_3 \leftarrow L_3 - 5L_1$:
$$\left(\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 0 & 1 & 4 & 0 & 1 & 0 \\ 0 & -4 & -15 & -5 & 0 & 1 \end{array}\right).$$
$L_3 \leftarrow L_3 + 4L_2$:
$$\left(\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 0 & 1 & 4 & 0 & 1 & 0 \\ 0 & 0 & 1 & -5 & 4 & 1 \end{array}\right).$$
$L_1 \leftarrow L_1 - 3L_3$, $L_2 \leftarrow L_2 - 4L_3$:
$$\left(\begin{array}{ccc|ccc} 1 & 2 & 0 & 16 & -12 & -3 \\ 0 & 1 & 0 & 20 & -15 & -4 \\ 0 & 0 & 1 & -5 & 4 & 1 \end{array}\right).$$
$L_1 \leftarrow L_1 - 2L_2$:
$$\left(\begin{array}{ccc|ccc} 1 & 0 & 0 & -24 & 18 & 5 \\ 0 & 1 & 0 & 20 & -15 & -4 \\ 0 & 0 & 1 & -5 & 4 & 1 \end{array}\right).$$

**Conclusion.**
$$A^{-1} = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix}.$$

@@@ matrix-determinant-3x3-sarrus.md
---
title: Determinant of a 3Ã—3 matrix by Sarrus' rule
category: linear/matrices
level: lycee
difficulty: 2
tags: determinant, Sarrus rule, 3x3 matrices
date: 2026-11-03
---

## Statement

Compute the determinant of
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 10 \end{pmatrix}.$$

## Hint

Use Sarrus' rule: sum the three downward diagonals and subtract the three upward diagonals.

## Solution

**Sarrus' rule.**
$$\det A = 1\cdot5\cdot10 + 2\cdot6\cdot7 + 3\cdot4\cdot8 - 3\cdot5\cdot7 - 1\cdot6\cdot8 - 2\cdot4\cdot10.$$
Compute:
$$\det A = 50 + 84 + 96 - 105 - 48 - 80 = 230 - 233 = -3.$$

**Remark.** The matrix is invertible since $\det A \neq 0$.

@@@ matrix-determinant-properties.md
---
title: Using determinant properties
category: linear/matrices
level: l1
difficulty: 3
tags: determinant, row operations, properties
date: 2026-11-03
---

## Statement

Compute
$$\Delta = \begin{vmatrix} 1 & a & a^2 \\ 1 & b & b^2 \\ 1 & c & c^2 \end{vmatrix}.$$

## Hint

Subtract the first row from the other two, then factor $b-a$ and $c-a$.

## Solution

**Row operations.** $L_2 \leftarrow L_2 - L_1$, $L_3 \leftarrow L_3 - L_1$:
$$\Delta = \begin{vmatrix} 1 & a & a^2 \\ 0 & b-a & b^2-a^2 \\ 0 & c-a & c^2-a^2 \end{vmatrix}.$$

**Factoring.** $b^2-a^2 = (b-a)(b+a)$ and $c^2-a^2 = (c-a)(c+a)$, so
$$\Delta = \begin{vmatrix} 1 & a & a^2 \\ 0 & b-a & (b-a)(b+a) \\ 0 & c-a & (c-a)(c+a) \end{vmatrix}.$$
Factor $(b-a)$ from the second row and $(c-a)$ from the third:
$$\Delta = (b-a)(c-a)\begin{vmatrix} 1 & a & a^2 \\ 0 & 1 & b+a \\ 0 & 1 & c+a \end{vmatrix}.$$

**Expansion.** Expanding along the first column:
$$\Delta = (b-a)(c-a)\begin{vmatrix} 1 & b+a \\ 1 & c+a \end{vmatrix} = (b-a)(c-a)(c+a-b-a) = (b-a)(c-a)(c-b).$$

**Conclusion.** This is the Vandermonde determinant:
$$\Delta = (b-a)(c-a)(c-b).$$

@@@ matrix-invertibility-parameter.md
---
title: Invertibility depending on a parameter
category: linear/matrices
level: l1
difficulty: 3
tags: invertibility, parameter, determinant
date: 2026-11-03
---

## Statement

For which real values of $m$ is the matrix
$$A_m = \begin{pmatrix} m & 1 & 1 \\ 1 & m & 1 \\ 1 & 1 & m \end{pmatrix}$$
invertible?

## Hint

Compute $\det A_m$ by adding all rows to the first, then factoring.

## Solution

**Row operation.** $L_1 \leftarrow L_1 + L_2 + L_3$:
$$\det A_m = \begin{vmatrix} m+2 & m+2 & m+2 \\ 1 & m & 1 \\ 1 & 1 & m \end{vmatrix} = (m+2)\begin{vmatrix} 1 & 1 & 1 \\ 1 & m & 1 \\ 1 & 1 & m \end{vmatrix}.$$

**Column operations.** $C_2 \leftarrow C_2 - C_1$, $C_3 \leftarrow C_3 - C_1$:
$$\det A_m = (m+2)\begin{vmatrix} 1 & 0 & 0 \\ 1 & m-1 & 0 \\ 1 & 0 & m-1 \end{vmatrix} = (m+2)(m-1)^2.$$

**Conclusion.** $A_m$ is invertible if and only if $m \neq -2$ and $m \neq 1$.

@@@ matrix-rank-computation.md
---
title: Computing the rank of a matrix
category: linear/matrices
level: l1
difficulty: 3
tags: rank, Gaussian elimination, row reduction
date: 2026-11-03
---

## Statement

Compute the rank of
$$A = \begin{pmatrix} 1 & 2 & 3 & 4 \\ 2 & 4 & 7 & 9 \\ 0 & 0 & 1 & 1 \end{pmatrix}.$$

## Hint

Perform Gaussian elimination and count the number of nonzero rows in the row echelon form.

## Solution

**Elimination.** $L_2 \leftarrow L_2 - 2L_1$:
$$\begin{pmatrix} 1 & 2 & 3 & 4 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 1 & 1 \end{pmatrix}.$$
$L_3 \leftarrow L_3 - L_2$:
$$\begin{pmatrix} 1 & 2 & 3 & 4 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}.$$

**Conclusion.** There are two nonzero rows, so $\operatorname{rank}(A) = 2$.

@@@ matrix-rank-parameter.md
---
title: Rank depending on a parameter
category: linear/matrices
level: l1
difficulty: 4
tags: rank, parameter, Gaussian elimination
date: 2026-11-03
---

## Statement

Determine the rank of
$$A_m = \begin{pmatrix} 1 & 1 & m \\ 1 & m & 1 \\ m & 1 & 1 \end{pmatrix}$$
depending on the real parameter $m$.

## Hint

Compute the determinant first to find when the rank is $3$, then study the special values.

## Solution

**Determinant.** Adding all rows to the first and factoring:
$$\det A_m = (m+2)(m-1)^2.$$

**Case $m \neq -2$ and $m \neq 1$.** $\det A_m \neq 0$, so $\operatorname{rank}(A_m) = 3$.

**Case $m = 1$.** All entries are $1$, so every row is equal. The rank is $1$.

**Case $m = -2$.**
$$A_{-2} = \begin{pmatrix} 1 & 1 & -2 \\ 1 & -2 & 1 \\ -2 & 1 & 1 \end{pmatrix}.$$
The sum of the three rows is $0$, so the rows are linearly dependent. The first two rows are not proportional, so the rank is $2$.

**Conclusion.**
$$\operatorname{rank}(A_m) = \begin{cases} 3 & \text{if } m \neq -2 \text{ and } m \neq 1, \\ 2 & \text{if } m = -2, \\ 1 & \text{if } m = 1. \end{cases}$$

@@@ matrix-gauss-jordan-system.md
---
title: Solving a linear system by Gauss-Jordan
category: linear/matrices
level: lycee
difficulty: 3
tags: linear system, Gauss-Jordan, row reduction
date: 2026-11-03
---

## Statement

Solve the system
$$\begin{cases} x + 2y + z = 4 \\ 2x + 5y - z = 7 \\ x + y + 3z = 6 \end{cases}$$

## Hint

Write the augmented matrix and reduce it to row echelon form.

## Solution

**Augmented matrix.**
$$\left(\begin{array}{ccc|c} 1 & 2 & 1 & 4 \\ 2 & 5 & -1 & 7 \\ 1 & 1 & 3 & 6 \end{array}\right).$$

**Elimination.** $L_2 \leftarrow L_2 - 2L_1$, $L_3 \leftarrow L_3 - L_1$:
$$\left(\begin{array}{ccc|c} 1 & 2 & 1 & 4 \\ 0 & 1 & -3 & -1 \\ 0 & -1 & 2 & 2 \end{array}\right).$$
$L_3 \leftarrow L_3 + L_2$:
$$\left(\begin{array}{ccc|c} 1 & 2 & 1 & 4 \\ 0 & 1 & -3 & -1 \\ 0 & 0 & -1 & 1 \end{array}\right).$$

**Back-substitution.** From the third row, $z = -1$. From the second, $y - 3(-1) = -1$, so $y = -4$. From the first, $x + 2(-4) + (-1) = 4$, so $x = 13$.

**Conclusion.** $(x,y,z) = (13, -4, -1)$.

@@@ matrix-cramers-rule.md
---
title: Cramer's rule
category: linear/matrices
level: l1
difficulty: 3
tags: Cramer's rule, determinant, linear system
date: 2026-11-03
---

## Statement

Solve using Cramer's rule:
$$\begin{cases} 2x + y = 5 \\ x + 3y = 10 \end{cases}$$

## Hint

For a system $AX = B$ with $\det A \neq 0$, the solution is $x_i = \det A_i / \det A$, where $A_i$ is $A$ with column $i$ replaced by $B$.

## Solution

**Determinant.**
$$\det A = \begin{vmatrix} 2 & 1 \\ 1 & 3 \end{vmatrix} = 6 - 1 = 5.$$

**Determinants $A_1$ and $A_2$.**
$$\det A_1 = \begin{vmatrix} 5 & 1 \\ 10 & 3 \end{vmatrix} = 15 - 10 = 5, \qquad \det A_2 = \begin{vmatrix} 2 & 5 \\ 1 & 10 \end{vmatrix} = 20 - 5 = 15.$$

**Solution.**
$$x = \frac{\det A_1}{\det A} = \frac{5}{5} = 1, \qquad y = \frac{\det A_2}{\det A} = \frac{15}{5} = 3.$$

**Verification.** $2\cdot1+3=5$ and $1+3\cdot3=10$. Correct.

@@@ matrix-system-parameter.md
---
title: A linear system with a parameter
category: linear/matrices
level: l1
difficulty: 4
tags: linear system, parameter, discussion
date: 2026-11-03
---

## Statement

Discuss and solve, depending on the real parameter $m$:
$$\begin{cases} x + y + z = 3 \\ x + 2y + 3z = 6 \\ x + 3y + mz = 9 \end{cases}$$

## Hint

Compute the determinant of the coefficient matrix and discuss according to its value.

## Solution

**Determinant.**
$$\det A = \begin{vmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 3 & m \end{vmatrix}.$$
$L_2 \leftarrow L_2 - L_1$, $L_3 \leftarrow L_3 - L_1$:
$$\det A = \begin{vmatrix} 1 & 1 & 1 \\ 0 & 1 & 2 \\ 0 & 2 & m-1 \end{vmatrix} = (m-1) - 4 = m - 5.$$

**Case $m \neq 5$.** The system has a unique solution. Solving:
$$x = \frac{3}{2}, \quad y = 0, \quad z = \frac{3}{2} - \frac{m}{2} + \frac{m}{2} = \frac{3}{2} - \frac{m-5}{2} \cdot 0 = \frac{3}{2}.$$
Wait, let us solve carefully. From the first equation, $x = 3 - y - z$. Substituting into the second and third, and solving the resulting $2 \times 2$ system, we find $y = 0$ and $z = \frac{3}{2}$ only if $m$ is such that the system is consistent. Actually, we solve directly: subtracting the first equation from the second gives $y + 2z = 3$, and subtracting the first from the third gives $2y + (m-1)z = 6$. From the first of these, $y = 3 - 2z$. Substituting into the second: $2(3-2z) + (m-1)z = 6$, i.e. $6 - 4z + (m-1)z = 6$, i.e. $(m-5)z = 0$. So if $m \neq 5$, $z = 0$, then $y = 3$, then $x = 0$. Thus $(x,y,z) = (0,3,0)$.

**Case $m = 5$.** The last equation becomes $x + 3y + 5z = 9$. The system is
$$\begin{cases} x + y + z = 3 \\ x + 2y + 3z = 6 \\ x + 3y + 5z = 9 \end{cases}$$
Subtracting consecutive equations gives $y + 2z = 3$ in both cases, so the third equation is a consequence of the first two. The system reduces to
$$\begin{cases} x + y + z = 3 \\ y + 2z = 3 \end{cases}$$
The solutions are $(x,y,z) = (3 - y - z, y, z)$ with $y = 3 - 2z$, i.e. $(x,y,z) = (0, 3-2z, z)$, $z \in \mathbb{R}$.

**Conclusion.**
- If $m \neq 5$: unique solution $(0,3,0)$.
- If $m = 5$: infinitely many solutions $(0, 3-2t, t)$, $t \in \mathbb{R}$.

@@@ matrix-powers-diagonal.md
---
title: Powers of a diagonal matrix
category: linear/matrices
level: l1
difficulty: 2
tags: diagonal matrix, powers, induction
date: 2026-11-03
---

## Statement

Let $D = \operatorname{diag}(\lambda_1,\ldots,\lambda_n)$. Show that $D^k = \operatorname{diag}(\lambda_1^k,\ldots,\lambda_n^k)$ for all $k \ge 1$.

## Hint

Prove by induction on $k$, using the fact that the product of two diagonal matrices is diagonal.

## Solution

**Base case.** For $k=1$, $D^1 = D = \operatorname{diag}(\lambda_1,\ldots,\lambda_n)$.

**Inductive step.** Assume $D^k = \operatorname{diag}(\lambda_1^k,\ldots,\lambda_n^k)$. Then
$$D^{k+1} = D^k D = \operatorname{diag}(\lambda_1^k,\ldots,\lambda_n^k)\operatorname{diag}(\lambda_1,\ldots,\lambda_n) = \operatorname{diag}(\lambda_1^{k+1},\ldots,\lambda_n^{k+1}).$$

**Conclusion.** The formula holds for all $k \ge 1$.

@@@ matrix-powers-nilpotent.md
---
title: Powers of a nilpotent matrix
category: linear/matrices
level: l1
difficulty: 3
tags: nilpotent, powers, induction
date: 2026-11-03
---

## Statement

Let
$$N = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}.$$
Compute $N^2$, $N^3$, and $N^k$ for all $k \ge 3$.

## Hint

Multiply $N$ by itself and observe the shift of the $1$'s.

## Solution

**$N^2$.**
$$N^2 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$

**$N^3$.**
$$N^3 = N^2 N = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$

**Conclusion.** $N^3 = 0$, hence $N^k = 0$ for all $k \ge 3$. The matrix $N$ is nilpotent of index $3$.

@@@ matrix-powers-companion.md
---
title: Powers of a companion matrix
category: linear/matrices
level: l1
difficulty: 4
tags: companion matrix, powers, recurrence
date: 2026-11-03
---

## Statement

Let
$$A = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}.$$
Compute $A^k$ for all $k \ge 1$.

## Hint

Compute $A^2$, $A^3$, and guess a pattern involving the Fibonacci numbers. Prove by induction.

## Solution

**First powers.**
$$A^2 = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix},$$
$$A^3 = A^2 A = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 2 & 3 \end{pmatrix}.$$

**Pattern.** The entries are Fibonacci numbers $F_0=0, F_1=1, F_2=1, F_3=2, F_4=3, \ldots$:
$$A^k = \begin{pmatrix} F_{k-1} & F_k \\ F_k & F_{k+1} \end{pmatrix}.$$

**Induction.** Base case $k=1$: $A = \begin{pmatrix} F_0 & F_1 \\ F_1 & F_2 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$. Correct. Inductive step:
$$A^{k+1} = A^k A = \begin{pmatrix} F_{k-1} & F_k \\ F_k & F_{k+1} \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} F_k & F_{k-1}+F_k \\ F_{k+1} & F_k+F_{k+1} \end{pmatrix}.$$
Using $F_{k-1}+F_k = F_{k+1}$ and $F_k+F_{k+1} = F_{k+2}$, we get
$$A^{k+1} = \begin{pmatrix} F_k & F_{k+1} \\ F_{k+1} & F_{k+2} \end{pmatrix}.$$

**Conclusion.** The formula holds for all $k \ge 1$.

@@@ matrix-eigenvalues-2x2.md
---
title: Eigenvalues and eigenvectors of a 2Ã—2 matrix
category: linear/matrices
level: l1
difficulty: 3
tags: eigenvalues, eigenvectors, characteristic polynomial
date: 2026-11-03
---

## Statement

Find the eigenvalues and eigenvectors of
$$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}.$$

## Hint

The characteristic polynomial is $\det(A - \lambda I) = 0$. For each eigenvalue, solve $(A - \lambda I)v = 0$.

## Solution

**Characteristic polynomial.**
$$\det(A - \lambda I) = \begin{vmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{vmatrix} = (4-\lambda)(3-\lambda) - 2 = \lambda^2 - 7\lambda + 10.$$
The roots are $\lambda_1 = 2$ and $\lambda_2 = 5$.

**Eigenvector for $\lambda = 2$.**
$$A - 2I = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}.$$
The kernel is spanned by $v_1 = (1,-2)$.

**Eigenvector for $\lambda = 5$.**
$$A - 5I = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}.$$
The kernel is spanned by $v_2 = (1,1)$.

**Conclusion.** Eigenvalues $2$ and $5$, with eigenvectors $(1,-2)$ and $(1,1)$ respectively.

@@@ matrix-eigenvalues-3x3.md
---
title: Eigenvalues of a 3Ã—3 matrix
category: linear/matrices
level: l1
difficulty: 4
tags: eigenvalues, characteristic polynomial, trace and determinant
date: 2026-11-03
---

## Statement

Find the eigenvalues of
$$A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}.$$

## Hint

Observe that the sum of each row is $4$, so $4$ is an eigenvalue. Then use the trace and determinant to find the others.

## Solution

**First eigenvalue.** The vector $(1,1,1)^T$ satisfies $A(1,1,1)^T = (4,4,4)^T$, so $\lambda_1 = 4$ is an eigenvalue.

**Trace and determinant.** $\operatorname{tr}(A) = 6$, $\det(A) = 4$ (computed by Sarrus or by recognizing the pattern).

**Characteristic polynomial.** Since $4$ is an eigenvalue, the polynomial factors as $(4-\lambda)(\lambda^2 - 2\lambda + 1)$ or similar. Using $\operatorname{tr}(A) = \lambda_1 + \lambda_2 + \lambda_3 = 6$, we get $\lambda_2 + \lambda_3 = 2$. Using $\det(A) = \lambda_1 \lambda_2 \lambda_3 = 4$, we get $\lambda_2 \lambda_3 = 1$. Hence $\lambda_2 = \lambda_3 = 1$.

**Conclusion.** The eigenvalues are $4, 1, 1$.

@@@ matrix-diagonalization-2x2.md
---
title: Diagonalizing a 2Ã—2 matrix
category: linear/matrices
level: l1
difficulty: 4
tags: diagonalization, eigenvalues, change of basis
date: 2026-11-03
---

## Statement

Diagonalize
$$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}.$$

## Hint

Find the eigenvalues and eigenvectors (see the previous exercise), then write $A = PDP^{-1}$.

## Solution

**Eigenvalues and eigenvectors.** From the previous exercise, the eigenvalues are $2$ and $5$, with eigenvectors $v_1 = (1,-2)$ and $v_2 = (1,1)$.

**Matrices $P$ and $D$.**
$$P = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}, \qquad D = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}.$$

**Inverse of $P$.** $\det P = 1\cdot1 - 1\cdot(-2) = 3$, so
$$P^{-1} = \frac13\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}.$$

**Conclusion.** $A = PDP^{-1}$ with the matrices above. Consequently,
$$A^k = PD^kP^{-1} = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}\begin{pmatrix} 2^k & 0 \\ 0 & 5^k \end{pmatrix}\frac13\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}.$$

@@@ matrix-diagonalization-3x3.md
---
title: Diagonalizing a 3Ã—3 matrix
category: linear/matrices
level: l1
difficulty: 4
tags: diagonalization, eigenvalues, eigenvectors
date: 2026-11-03
---

## Statement

Diagonalize
$$A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}.$$

## Hint

Use the eigenvalues $4, 1, 1$ found earlier. Find an eigenvector for each, and check that the eigenspace for $\lambda=1$ has dimension $2$.

## Solution

**Eigenvalue $4$.** Eigenvector $v_1 = (1,1,1)$.

**Eigenspace for $\lambda=1$.**
$$A - I = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}.$$
The kernel has dimension $2$, spanned by $v_2 = (1,-1,0)$ and $v_3 = (1,0,-1)$.

**Diagonalization.**
$$P = \begin{pmatrix} 1 & 1 & 1 \\ 1 & -1 & 0 \\ 1 & 0 & -1 \end{pmatrix}, \qquad D = \begin{pmatrix} 4 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}.$$
Since the columns of $P$ are linearly independent, $P$ is invertible and $A = PDP^{-1}$.

**Conclusion.** $A$ is diagonalizable. Moreover,
$$A^k = P\begin{pmatrix} 4^k & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}P^{-1}.$$

@@@ matrix-diagonalization-criterion.md
---
title: When is a matrix diagonalizable?
category: linear/matrices
level: l1
difficulty: 4
tags: diagonalization, eigenspaces, multiplicity
date: 2026-11-03
---

## Statement

Let $A$ be an $n \times n$ matrix. Show that $A$ is diagonalizable if and only if the sum of the dimensions of its eigenspaces equals $n$.

## Hint

A diagonalization $A = PDP^{-1}$ means that the columns of $P$ form a basis of eigenvectors.

## Solution

**Forward direction.** If $A = PDP^{-1}$ with $D$ diagonal, then the columns of $P$ are eigenvectors of $A$ (since $AP = PD$). They form a basis of $\mathbb{R}^n$, so the sum of the dimensions of the eigenspaces is at least $n$. But each eigenspace is a subspace, and their sum is direct (eigenspaces for distinct eigenvalues are in direct sum). So the sum of dimensions is exactly $n$.

**Converse.** Conversely, if the sum of the dimensions of the eigenspaces equals $n$, choose a basis of each eigenspace. The union of these bases has $n$ vectors, and since eigenspaces for distinct eigenvalues are in direct sum, the union is a basis of $\mathbb{R}^n$. In this basis, the matrix of $A$ is diagonal. So $A$ is diagonalizable.

**Remark.** This criterion is equivalent to saying that the characteristic polynomial of $A$ splits and the algebraic multiplicity of each eigenvalue equals its geometric multiplicity.

@@@ matrix-diagonalization-parameter.md
---
title: Diagonalizability depending on a parameter
category: linear/matrices
level: l1
difficulty: 5
tags: diagonalization, parameter, characteristic polynomial
date: 2026-11-03
---

## Statement

For which real values of $a$ is the matrix
$$A = \begin{pmatrix} 1 & a \\ 0 & 2 \end{pmatrix}$$
diagonalizable?

## Hint

The matrix is upper triangular, so the eigenvalues are $1$ and $2$. Since they are distinct, $A$ is always diagonalizable.

## Solution

**Eigenvalues.** Since $A$ is upper triangular, the characteristic polynomial is $(1-\lambda)(2-\lambda)$, so the eigenvalues are $1$ and $2$.

**Diagonalizability.** The two eigenvalues are distinct, so their eigenspaces each have dimension $1$, and the sum is $2$. By the criterion, $A$ is diagonalizable for all $a \in \mathbb{R}$.

**Explicit diagonalization.** For $\lambda = 1$, solve $(A-I)v = 0$: $v_1 = (1,0)$. For $\lambda = 2$, solve $(A-2I)v = 0$: $v_2 = (a,1)$ (or $(a,1)$ if $a \neq 0$, $(0,1)$ if $a=0$). These two eigenvectors are linearly independent for all $a$, so $A = PDP^{-1}$ with
$$P = \begin{pmatrix} 1 & a \\ 0 & 1 \end{pmatrix}, \qquad D = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}.$$

@@@ matrix-symmetric-orthogonal-diagonalization.md
---
title: Orthogonal diagonalization of a symmetric matrix
category: linear/matrices
level: l1
difficulty: 5
tags: symmetric matrix, orthogonal diagonalization, spectral theorem
date: 2026-11-03
---

## Statement

Orthogonally diagonalize
$$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}.$$

## Hint

Find the eigenvalues, then orthonormalize the eigenvectors using Gram-Schmidt.

## Solution

**Eigenvalues.** $\det(A - \lambda I) = (2-\lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = (\lambda-1)(\lambda-3)$, so the eigenvalues are $1$ and $3$.

**Eigenvectors.** For $\lambda = 1$: $v_1 = (1,-1)$. For $\lambda = 3$: $v_2 = (1,1)$. These are already orthogonal.

**Normalization.** $\|v_1\| = \sqrt2$, $\|v_2\| = \sqrt2$, so
$$u_1 = \frac{1}{\sqrt2}\begin{pmatrix} 1 \\ -1 \end{pmatrix}, \qquad u_2 = \frac{1}{\sqrt2}\begin{pmatrix} 1 \\ 1 \end{pmatrix}.$$

**Orthogonal matrix $Q$.** Let
$$Q = \frac{1}{\sqrt2}\begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}.$$
Then $Q^T Q = I$ and
$$Q^T A Q = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}.$$

**Conclusion.** $A = Q \operatorname{diag}(1,3) Q^T$ with $Q$ orthogonal.

@@@ matrix-block-multiplication.md
---
title: Block multiplication
category: linear/matrices
level: l1
difficulty: 3
tags: block matrices, multiplication, structure
date: 2026-11-03
---

## Statement

Let
$$M = \begin{pmatrix} A & B \\ 0 & C \end{pmatrix}$$
be a block matrix where $A$ and $C$ are square and invertible. Show that $M$ is invertible and compute $M^{-1}$ in block form.

## Hint

Look for an inverse of the form $\begin{pmatrix} X & Y \\ 0 & Z \end{pmatrix}$ and solve the block equations.

## Solution

**Setup.** Let $M^{-1} = \begin{pmatrix} X & Y \\ 0 & Z \end{pmatrix}$ (the lower-left block must be zero because the product with the lower-left block of $M$ is zero and the upper blocks are invertible). Then
$$MM^{-1} = \begin{pmatrix} AX+0 & AY+BZ \\ 0 & CZ \end{pmatrix} = \begin{pmatrix} I & 0 \\ 0 & I \end{pmatrix}.$$

**Solving.** From $CZ = I$, we get $Z = C^{-1}$. From $AX = I$, we get $X = A^{-1}$. From $AY + BZ = 0$, we get $Y = -A^{-1}BZ = -A^{-1}BC^{-1}$.

**Conclusion.**
$$M^{-1} = \begin{pmatrix} A^{-1} & -A^{-1}BC^{-1} \\ 0 & C^{-1} \end{pmatrix}.$$

@@@ matrix-determinant-block-triangular.md
---
title: Determinant of a block triangular matrix
category: linear/matrices
level: l1
difficulty: 3
tags: block matrices, determinant, triangular structure
date: 2026-11-03
---

## Statement

Show that for block triangular matrices,
$$\det\begin{pmatrix} A & B \\ 0 & C \end{pmatrix} = \det(A)\det(C),$$
where $A$ and $C$ are square.

## Hint

Use the fact that block triangular matrices form a subalgebra, and reduce to the case where $A$ and $C$ are triangular by an appropriate base change, or use the Leibniz formula.

## Solution

**Reduction.** It suffices to prove the result when $A$ and $C$ are upper triangular (any matrix can be put in triangular form by a base change, and the determinant is unchanged under conjugation). In that case, the block matrix is upper triangular with diagonal entries those of $A$ and $C$, so its determinant is the product of its diagonal entries, which is $\det(A)\det(C)$.

**Leibniz formula.** Alternatively, the determinant is a sum over permutations $\sigma$ of the block index set. A permutation that contributes a nonzero term must preserve each block (since the lower-left block is zero), so it splits as $\sigma = \sigma_A \oplus \sigma_C$. Summing over such $\sigma$ gives $\det(A)\det(C)$.

**Conclusion.** The formula holds for all block triangular matrices.

@@@ matrix-trace-properties.md
---
title: Properties of the trace
category: linear/matrices
level: l1
difficulty: 2
tags: trace, cyclic property, similarity invariance
date: 2026-11-03
---

## Statement

Show that the trace satisfies:
1. $\operatorname{tr}(A+B) = \operatorname{tr}(A) + \operatorname{tr}(B)$;
2. $\operatorname{tr}(AB) = \operatorname{tr}(BA)$ for matrices of compatible sizes;
3. $\operatorname{tr}(P^{-1}AP) = \operatorname{tr}(A)$ for $P$ invertible.

## Hint

For (2), write $\operatorname{tr}(AB) = \sum_i (AB)_{ii} = \sum_{i,j} a_{ij}b_{ji}$ and swap the order of summation.

## Solution

**1.** Immediate from the definition: $\operatorname{tr}(A+B) = \sum_i (a_{ii}+b_{ii}) = \sum_i a_{ii} + \sum_i b_{ii}$.

**2.** 
$$\operatorname{tr}(AB) = \sum_i \sum_j a_{ij}b_{ji} = \sum_j \sum_i b_{ji}a_{ij} = \operatorname{tr}(BA).$$

**3.** Using (2) with $A = P^{-1}A$ and $B = P$:
$$\operatorname{tr}(P^{-1}AP) = \operatorname{tr}((P^{-1}A)P) = \operatorname{tr}(P(P^{-1}A)) = \operatorname{tr}(A).$$

**Conclusion.** The trace is linear, invariant under cyclic permutations, and invariant under similarity.

@@@ matrix-similarity-invariants.md
---
title: Similarity invariants
category: linear/matrices
level: l1
difficulty: 3
tags: similarity, characteristic polynomial, trace, determinant
date: 2026-11-03
---

## Statement

Show that similar matrices have the same characteristic polynomial, trace, and determinant.

## Hint

If $B = P^{-1}AP$, compute $\det(B - \lambda I)$ by factoring $P$ and $P^{-1}$.

## Solution

**Characteristic polynomial.**
$$\det(B - \lambda I) = \det(P^{-1}AP - \lambda I) = \det(P^{-1}(A - \lambda I)P) = \det(P^{-1})\det(A - \lambda I)\det(P) = \det(A - \lambda I).$$
So the characteristic polynomials coincide.

**Trace and determinant.** The trace is the coefficient of $\lambda^{n-1}$ in the characteristic polynomial (up to sign), and the determinant is the constant term (up to sign). Since the characteristic polynomials coincide, the trace and determinant coincide.

**Conclusion.** Similar matrices share the characteristic polynomial, the trace, and the determinant.

@@@ matrix-cholesky-2x2.md
---
title: Cholesky factorization of a 2Ã—2 matrix
category: linear/matrices
level: l1
difficulty: 4
tags: Cholesky, positive definite, factorization
date: 2026-11-03
---

## Statement

Find the Cholesky factorization $A = LL^T$ of
$$A = \begin{pmatrix} 4 & 2 \\ 2 & 5 \end{pmatrix}.$$

## Hint

Look for $L = \begin{pmatrix} a & 0 \\ b & c \end{pmatrix}$ and solve $LL^T = A$.

## Solution

**Setup.**
$$LL^T = \begin{pmatrix} a & 0 \\ b & c \end{pmatrix}\begin{pmatrix} a & b \\ 0 & c \end{pmatrix} = \begin{pmatrix} a^2 & ab \\ ab & b^2+c^2 \end{pmatrix}.$$

**Identification.** $a^2 = 4$, so $a = 2$ (positive). $ab = 2$, so $b = 1$. $b^2+c^2 = 5$, so $c^2 = 4$, $c = 2$ (positive).

**Conclusion.**
$$L = \begin{pmatrix} 2 & 0 \\ 1 & 2 \end{pmatrix}.$$

**Verification.**
$$LL^T = \begin{pmatrix} 2 & 0 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 4 & 2 \\ 2 & 5 \end{pmatrix}.$$

@@@ matrix-lu-decomposition.md
---
title: LU decomposition
category: linear/matrices
level: l1
difficulty: 4
tags: LU decomposition, Gaussian elimination, factorization
date: 2026-11-03
---

## Statement

Find the LU decomposition of
$$A = \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 3 \\ 8 & 7 & 9 \end{pmatrix}.$$

## Hint

Perform Gaussian elimination without pivoting and track the multipliers.

## Solution

**First step.** $L_2 \leftarrow L_2 - 2L_1$, $L_3 \leftarrow L_3 - 4L_1$. Multipliers: $\ell_{21} = 2$, $\ell_{31} = 4$.
$$A \to \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 3 & 5 \end{pmatrix}.$$

**Second step.** $L_3 \leftarrow L_3 - 3L_2$. Multiplier: $\ell_{32} = 3$.
$$A \to \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 2 \end{pmatrix}.$$

**Conclusion.**
$$L = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 4 & 3 & 1 \end{pmatrix}, \qquad U = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 2 \end{pmatrix}.$$

**Verification.** $LU = A$, as can be checked directly.

@@@ matrix-qr-gram-schmidt.md
---
title: QR factorization by Gram-Schmidt
category: linear/matrices
level: l1
difficulty: 5
tags: QR factorization, Gram-Schmidt, orthogonalization
date: 2026-11-03
---

## Statement

Find the QR factorization of
$$A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}.$$

## Hint

Apply Gram-Schmidt to the columns of $A$.

## Solution

**Columns.** $a_1 = (1,1,0)$, $a_2 = (1,0,1)$.

**First vector.** $q_1 = a_1 / \|a_1\| = (1,1,0)/\sqrt2$.

**Projection.** $\langle a_2, q_1 \rangle = (1\cdot1 + 0\cdot1 + 1\cdot0)/\sqrt2 = 1/\sqrt2$. The orthogonal part is
$$a_2 - \langle a_2, q_1 \rangle q_1 = (1,0,1) - \frac12(1,1,0) = (1/2, -1/2, 1).$$
Normalize: $\|a_2 - \langle a_2, q_1 \rangle q_1\| = \sqrt{1/4+1/4+1} = \sqrt{3/2}$. So
$$q_2 = \sqrt{2/3}\,(1/2, -1/2, 1) = (1/\sqrt6, -1/\sqrt6, \sqrt{2/3}).$$

**Matrices $Q$ and $R$.**
$$Q = \begin{pmatrix} 1/\sqrt2 & 1/\sqrt6 \\ 1/\sqrt2 & -1/\sqrt6 \\ 0 & \sqrt{2/3} \end{pmatrix}, \qquad R = \begin{pmatrix} \sqrt2 & 1/\sqrt2 \\ 0 & \sqrt{3/2} \end{pmatrix}.$$

**Conclusion.** $A = QR$ with $Q$ having orthonormal columns and $R$ upper triangular.

@@@ matrix-singular-value-decomposition-2x2.md
---
title: Singular value decomposition of a 2Ã—2 matrix
category: linear/matrices
level: l1
difficulty: 5
tags: SVD, singular values, orthogonal matrices
date: 2026-11-03
---

## Statement

Compute the singular value decomposition of
$$A = \begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix}.$$

## Hint

The singular values are the square roots of the eigenvalues of $A^T A$.

## Solution

**Compute $A^T A$.**
$$A^T A = \begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix}\begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix} = \begin{pmatrix} 9 & 0 \\ 0 & 4 \end{pmatrix}.$$

**Singular values.** The eigenvalues are $9$ and $4$, so the singular values are $\sigma_1 = 3$ and $\sigma_2 = 2$.

**SVD.** $A = U\Sigma V^T$ with $U$ and $V$ orthogonal. Here $A$ is already diagonal, so we can take
$$U = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}, \qquad \Sigma = \begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}, \qquad V = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}.$$
Then $U\Sigma V^T = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix} = A$.

**Conclusion.** The singular values are $3$ and $2$, and the SVD is given above.

@@@ matrix-kernel-image-theorem.md
---
title: Rank-nullity theorem
category: linear/matrices
level: l1
difficulty: 3
tags: rank-nullity, kernel, image
date: 2026-11-03
---

## Statement

Let $A$ be an $m \times n$ matrix representing a linear map $f: \mathbb{R}^n \to \mathbb{R}^m$. Show that
$$\dim(\ker A) + \operatorname{rank}(A) = n.$$

## Hint

Choose a basis of $\ker A$, extend it to a basis of $\mathbb{R}^n$, and show that the images of the added vectors form a basis of $\operatorname{Im} A$.

## Solution

**Basis of the kernel.** Let $(u_1,\ldots,u_k)$ be a basis of $\ker A$. Extend it to a basis $(u_1,\ldots,u_k,v_1,\ldots,v_{n-k})$ of $\mathbb{R}^n$.

**Images of the $v_j$.** The vectors $A v_1,\ldots,A v_{n-k}$ span $\operatorname{Im} A$: indeed, any vector in $\mathbb{R}^n$ is a combination of the $u_i$ and the $v_j$, and the $u_i$ are killed by $A$.

**Independence.** Suppose $\sum_j \alpha_j A v_j = 0$. Then $A(\sum_j \alpha_j v_j) = 0$, so $\sum_j \alpha_j v_j \in \ker A$. Since the $v_j$ are linearly independent from the $u_i$, this forces $\alpha_j = 0$ for all $j$.

**Conclusion.** The $A v_j$ form a basis of $\operatorname{Im} A$, so $\operatorname{rank}(A) = n - k = n - \dim(\ker A)$, i.e. $\dim(\ker A) + \operatorname{rank}(A) = n$.

@@@ matrix-kernel-image-example.md
---
title: Kernel and image of a matrix
category: linear/matrices
level: l1
difficulty: 3
tags: kernel, image, basis
date: 2026-11-03
---

## Statement

Find a basis for the kernel and image of
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 1 & 2 & 3 \end{pmatrix}.$$

## Hint

The rows are all proportional to $(1,2,3)$, so the rank is $1$.

## Solution

**Rank.** The three rows are all multiples of $(1,2,3)$, so $\operatorname{rank}(A) = 1$.

**Image.** A basis of the image is the single nonzero column, i.e. $(1,2,1)$ (first column). So $\operatorname{Im} A = \operatorname{span}((1,2,1))$.

**Kernel.** Solve $Ax = 0$: $x_1 + 2x_2 + 3x_3 = 0$. The solutions are $(x_1,x_2,x_3) = (-2s-3t, s, t)$ with $s,t \in \mathbb{R}$. A basis is $(-2,1,0)$ and $(-3,0,1)$.

**Conclusion.** $\dim(\ker A) = 2$, $\dim(\operatorname{Im} A) = 1$, and $2+1=3$, consistent with the rank-nullity theorem.

@@@ matrix-change-of-basis.md
---
title: Change of basis
category: linear/matrices
level: l1
difficulty: 3
tags: change of basis, transition matrix, similarity
date: 2026-11-03
---

## Statement

Let $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ and let $\mathcal{B}' = ((1,1),(1,-1))$. Compute the matrix of the linear map associated with $A$ in the basis $\mathcal{B}'$.

## Hint

The transition matrix $P$ has columns the vectors of $\mathcal{B}'$. The new matrix is $P^{-1}AP$.

## Solution

**Transition matrix.**
$$P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}.$$

**Inverse.** $\det P = -1 - 1 = -2$, so
$$P^{-1} = -\frac12\begin{pmatrix} -1 & -1 \\ -1 & 1 \end{pmatrix} = \frac12\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}.$$

**New matrix.**
$$P^{-1}AP = \frac12\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}.$$
Compute:
$$\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} 3 & 1 \\ 3 & -1 \end{pmatrix},$$
then
$$\frac12\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 3 & 1 \\ 3 & -1 \end{pmatrix} = \frac12\begin{pmatrix} 6 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}.$$

**Conclusion.** In the basis $\mathcal{B}'$, the matrix is $\operatorname{diag}(3,1)$.

@@@ matrix-minimal-polynomial.md
---
title: The minimal polynomial of a matrix
category: linear/matrices
level: l1
difficulty: 4
tags: minimal polynomial, characteristic polynomial, diagonalizability
date: 2026-11-03
---

## Statement

Compute the minimal polynomial of
$$A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}.$$

## Hint

The characteristic polynomial is $(X-2)^2$. The minimal polynomial divides it, so it is either $X-2$ or $(X-2)^2$.

## Solution

**Characteristic polynomial.** Since $A$ is upper triangular with diagonal entries $2$, $\chi_A(X) = (X-2)^2$.

**Test $X-2$.** Compute $A - 2I = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \neq 0$. So $X-2$ is not the minimal polynomial.

**Test $(X-2)^2$.** $(A-2I)^2 = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}^2 = 0$. So $(X-2)^2$ annihilates $A$.

**Conclusion.** The minimal polynomial is $\mu_A(X) = (X-2)^2$. The matrix is not diagonalizable because the minimal polynomial has a multiple root.

@@@ matrix-orthogonal-projection.md
---
title: Orthogonal projection onto a subspace
category: linear/matrices
level: l1
difficulty: 4
tags: orthogonal projection, projection matrix, orthonormal basis
date: 2026-11-03
---

## Statement

Let $V = \operatorname{span}((1,1,0),(0,1,1))$ in $\mathbb{R}^3$. Compute the matrix of the orthogonal projection onto $V$.

## Hint

Build an orthonormal basis of $V$ using Gram-Schmidt, then use $P = QQ^T$ where $Q$ has the orthonormal basis as columns.

## Solution

**Orthonormalization.** $u_1 = (1,1,0)/\sqrt2$. The projection of $(0,1,1)$ onto $u_1$ is $\langle (0,1,1), u_1 \rangle u_1 = (1/\sqrt2) \cdot (1,1,0)/\sqrt2 = (1/2)(1,1,0)$. The orthogonal part is
$$(0,1,1) - (1/2)(1,1,0) = (-1/2, 1/2, 1).$$
Norm: $\sqrt{1/4+1/4+1} = \sqrt{3/2}$. So $u_2 = \sqrt{2/3}(-1/2,1/2,1) = (-1/\sqrt6, 1/\sqrt6, \sqrt{2/3})$.

**Projection matrix.** $P = u_1 u_1^T + u_2 u_2^T$:
$$u_1 u_1^T = \frac12\begin{pmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \qquad u_2 u_2^T = \frac16\begin{pmatrix} 1 & -1 & -\sqrt{12}/2 \\ -1 & 1 & \sqrt{12}/2 \\ -\sqrt{12}/2 & \sqrt{12}/2 & 4 \end{pmatrix}.$$
After simplifying (and using $\sqrt{12}/2 = \sqrt3$):
$$P = \frac16\begin{pmatrix} 4 & 2 & -3 \\ 2 & 4 & 3 \\ -3 & 3 & 4 \end{pmatrix}.$$

**Verification.** $P$ is symmetric, $P^2 = P$, and $P$ fixes $V$ (check on the generators).

@@@ matrix-gram-schmidt-example.md
---
title: Gram-Schmidt orthogonalization
category: linear/matrices
level: l1
difficulty: 3
tags: Gram-Schmidt, orthogonalization, orthonormal basis
date: 2026-11-03
---

## Statement

Apply Gram-Schmidt to the vectors $v_1 = (1,1,0)$, $v_2 = (1,0,1)$, $v_3 = (0,1,1)$ in $\mathbb{R}^3$.

## Hint

At each step, subtract from $v_k$ its projection onto the previously constructed orthonormal vectors.

## Solution

**Step 1.** $u_1 = v_1 / \|v_1\| = (1,1,0)/\sqrt2$.

**Step 2.** Projection of $v_2$ onto $u_1$: $\langle v_2, u_1 \rangle = 1/\sqrt2$. So
$$w_2 = v_2 - (1/\sqrt2)u_1 = (1,0,1) - (1/2)(1,1,0) = (1/2,-1/2,1).$$
Norm: $\sqrt{1/4+1/4+1} = \sqrt{3/2}$, so $u_2 = (1/\sqrt6, -1/\sqrt6, \sqrt{2/3})$.

**Step 3.** Projections of $v_3$:
$$\langle v_3, u_1 \rangle = 1/\sqrt2, \qquad \langle v_3, u_2 \rangle = (-1+1+2)/\sqrt6 = 2/\sqrt6.$$
So
$$w_3 = v_3 - (1/\sqrt2)u_1 - (2/\sqrt6)u_2 = (0,1,1) - (1/2)(1,1,0) - (1/3)(1,-1,2) = (1/6, 5/6, 1/3).$$
Norm: $\sqrt{1/36+25/36+4/36} = \sqrt{30}/6$, so $u_3 = \sqrt{6/5}(1/6, 5/6, 1/3) = (1/\sqrt{30}, 5/\sqrt{30}, 2/\sqrt{30})$.

**Conclusion.** The orthonormal basis is
$$u_1 = \frac{1}{\sqrt2}(1,1,0), \quad u_2 = \frac{1}{\sqrt6}(1,-1,2), \quad u_3 = \frac{1}{\sqrt{30}}(1,5,2).$$

@@@ matrix-positive-definite.md
---
title: Positive definiteness of a symmetric matrix
category: linear/matrices
level: l1
difficulty: 4
tags: positive definite, Sylvester criterion, eigenvalues
date: 2026-11-03
---

## Statement

Show that
$$A = \begin{pmatrix} 2 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 2 \end{pmatrix}$$
is positive definite.

## Hint

Use Sylvester's criterion (leading principal minors) or compute the eigenvalues.

## Solution

**Leading principal minors.**
- $\Delta_1 = 2 > 0$.
- $\Delta_2 = \begin{vmatrix} 2 & -1 \\ -1 & 2 \end{vmatrix} = 4 - 1 = 3 > 0$.
- $\Delta_3 = \det A = 2(4-1) - (-1)(-2) = 6 - 2 = 4 > 0$.

**Conclusion.** By Sylvester's criterion, $A$ is positive definite.

**Alternative (eigenvalues).** The eigenvalues are $2$, $2-\sqrt2$, $2+\sqrt2$, all positive. So $A$ is positive definite.

@@@ matrix-quadratic-form-reduction.md
---
title: Reducing a quadratic form
category: linear/matrices
level: l1
difficulty: 4
tags: quadratic form, reduction, completing the square
date: 2026-11-03
---

## Statement

Reduce the quadratic form
$$Q(x,y) = x^2 + 4xy + 5y^2$$
by completing the square.

## Hint

Write $Q$ as $(x+2y)^2 + \ldots$ and identify the remaining terms.

## Solution

**Completing the square.**
$$Q(x,y) = x^2 + 4xy + 5y^2 = (x+2y)^2 + y^2.$$

**Change of variables.** Let $u = x+2y$ and $v = y$. Then $Q = u^2 + v^2$, which is a positive definite quadratic form.

**Signature.** The signature is $(2,0,0)$: two positive squares, no negative, no zero.

**Remark.** The associated symmetric matrix is $\begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix}$, whose eigenvalues are $3 \pm 2\sqrt2$, both positive, confirming positive definiteness.

@@@ matrix-quadratic-form-signature.md
---
title: Signature of a quadratic form
category: linear/matrices
level: l1
difficulty: 4
tags: quadratic form, signature, diagonalization
date: 2026-11-03
---

## Statement

Determine the signature of the quadratic form
$$Q(x,y,z) = xy + yz + zx.$$

## Hint

Use the change of variables $u = x+y+z$, $v = x-y$, $w = y-z$, or diagonalize the symmetric matrix.

## Solution

**Symmetric matrix.**
$$A = \frac12\begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}.$$

**Eigenvalues.** The eigenvalues of the matrix $\begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}$ are $2$ (eigenvector $(1,1,1)$) and $-1$ (multiplicity $2$, eigenspace $x+y+z=0$). So the eigenvalues of $A$ are $1$ (multiplicity $1$) and $-1/2$ (multiplicity $2$).

**Signature.** One positive, two negative. Signature: $(1,2,0)$.

**Remark.** In the basis $(1,1,1)$, $(1,-1,0)$, $(1,0,-1)$, the form becomes $u^2 - \frac12 v^2 - \frac12 w^2$.

@@@ matrix-cayley-hamilton.md
---
title: The Cayley-Hamilton theorem
category: linear/matrices
level: l1
difficulty: 4
tags: Cayley-Hamilton, characteristic polynomial, matrix powers
date: 2026-11-03
---

## Statement

Verify the Cayley-Hamilton theorem for
$$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}.$$

## Hint

The characteristic polynomial is $\chi_A(X) = X^2 - 4X + 3$. Show $\chi_A(A) = 0$.

## Solution

**Characteristic polynomial.** $\chi_A(X) = \det(A - XI) = (2-X)^2 - 1 = X^2 - 4X + 3$.

**Compute $\chi_A(A)$.** We have
$$A^2 = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}^2 = \begin{pmatrix} 5 & 4 \\ 4 & 5 \end{pmatrix}.$$
Then
$$\chi_A(A) = A^2 - 4A + 3I = \begin{pmatrix} 5 & 4 \\ 4 & 5 \end{pmatrix} - \begin{pmatrix} 8 & 4 \\ 4 & 8 \end{pmatrix} + \begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}.$$

**Conclusion.** $\chi_A(A) = 0$, confirming Cayley-Hamilton.

**Application.** This gives $A^2 = 4A - 3I$, which allows computing any power of $A$ by recurrence.

@@@ matrix-linear-recurrence.md
---
title: A linear recurrence and matrix powers
category: linear/matrices
level: l1
difficulty: 4
tags: linear recurrence, diagonalization, matrix powers
date: 2026-11-03
---

## Statement

Let $(u_n)$ be defined by $u_0 = 0$, $u_1 = 1$, and $u_{n+2} = 3u_{n+1} - 2u_n$. Express the vector $(u_{n+1}, u_n)^T$ as $A^n (u_1, u_0)^T$, then compute $A^n$ by diagonalization.

## Hint

The companion matrix is $A = \begin{pmatrix} 3 & -2 \\ 1 & 0 \end{pmatrix}$. Diagonalize it.

## Solution

**Matrix form.**
$$\begin{pmatrix} u_{n+1} \\ u_n \end{pmatrix} = \begin{pmatrix} 3 & -2 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} u_n \\ u_{n-1} \end{pmatrix} = A^n \begin{pmatrix} u_1 \\ u_0 \end{pmatrix}.$$

**Eigenvalues.** $\det(A - \lambda I) = (3-\lambda)(-\lambda) + 2 = \lambda^2 - 3\lambda + 2 = (\lambda-1)(\lambda-2)$, so $\lambda_1 = 1$, $\lambda_2 = 2$.

**Eigenvectors.** For $\lambda=1$: $v_1 = (1,1)$. For $\lambda=2$: $v_2 = (2,1)$.

**Diagonalization.**
$$A = P\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}P^{-1}, \qquad P = \begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}, \quad P^{-1} = \begin{pmatrix} -1 & 2 \\ 1 & -1 \end{pmatrix}.$$

**Power.** 
$$A^n = P\begin{pmatrix} 1 & 0 \\ 0 & 2^n \end{pmatrix}P^{-1} = \begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 2^n \end{pmatrix}\begin{pmatrix} -1 & 2 \\ 1 & -1 \end{pmatrix}.$$
Compute:
$$A^n = \begin{pmatrix} -1+2^{n+1} & 2-2^{n+1} \\ -1+2^n & 2-2^n \end{pmatrix}.$$

**Conclusion.** $u_n = (A^n)_{21} u_1 + (A^n)_{22} u_0 = (2^n - 1)\cdot1 + 0 = 2^n - 1$.

**Verification.** $u_0 = 0$, $u_1 = 1$, $u_2 = 3$, $u_3 = 7$: matches $2^n - 1$.
@@@ inverse-of-a-2x2-matrix.md
---
title: Inverse of a 2×2 matrix
category: linear/matrices
level: lycee
difficulty: 1
tags: inverse, determinants
date: 2026-10-31
---

## Statement

Show that $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$ is invertible and compute $A^{-1}$.

## Hint

For $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ with determinant $\Delta=ad-bc\ne0$, the inverse is $\frac1\Delta\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$.

## Solution

$\det A=1\cdot4-2\cdot3=-2\ne0$, so $A$ is invertible, and
$$A^{-1}=\frac1{-2}\begin{pmatrix}4&-2\\-3&1\end{pmatrix}=\begin{pmatrix}-2&1\\\tfrac32&-\tfrac12\end{pmatrix}.$$

@@@ inverting-i-minus-a.md
---
title: Inverting I − A
category: linear/matrices
level: l2
difficulty: 2
tags: matrices, nilpotent
date: 2026-10-31
---

## Statement

Let $A$ be a square matrix with $A^2=0$. Show that $I-A$ is invertible and give its inverse.

## Hint

Multiply $I-A$ by $I+A$.

## Solution

Using $A^2=0$,
$$(I-A)(I+A)=I-A^2=I\qquad\text{and}\qquad(I+A)(I-A)=I-A^2=I.$$

So $I-A$ is invertible and $(I-A)^{-1}=I+A$.


@@@ matrix-operations-basic.md
---
title: Matrix addition and scalar multiplication
order: 1
category: linear/matrices
level: lycee
difficulty: 1
tags: matrix operations, addition, scalar multiplication
date: 2026-11-03
---

## Statement

Let
$$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \qquad B = \begin{pmatrix} 0 & -1 \\ 2 & 5 \end{pmatrix}.$$
Compute $A+B$, $3A$, and $2A - 3B$.

## Hint

Add matrices entry by entry; multiply each entry by the scalar.

## Solution

Sum.
$$A+B = \begin{pmatrix} 1+0 & 2-1 \\ 3+2 & 4+5 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 5 & 9 \end{pmatrix}.$$

Scalar multiple.
$$3A = \begin{pmatrix} 3 & 6 \\ 9 & 12 \end{pmatrix}.$$

Linear combination.
$$2A = \begin{pmatrix} 2 & 4 \\ 6 & 8 \end{pmatrix}, \qquad 3B = \begin{pmatrix} 0 & -3 \\ 6 & 15 \end{pmatrix},$$
so
$$2A - 3B = \begin{pmatrix} 2 & 7 \\ 0 & -7 \end{pmatrix}.$$

@@@ matrix-multiplication-basic.md
---
title: Matrix multiplication
order: 2
category: linear/matrices
level: lycee
difficulty: 2
tags: matrix multiplication, non-commutativity
date: 2026-11-03
---

## Statement

Let
$$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \qquad B = \begin{pmatrix} 2 & 0 \\ 1 & -1 \end{pmatrix}.$$
Compute $AB$ and $BA$. Are they equal?

## Hint

The entry $(i,j)$ of $AB$ is the dot product of row $i$ of $A$ with column $j$ of $B$.

## Solution

Product $AB$.
$$AB = \begin{pmatrix} 1\cdot2+2\cdot1 & 1\cdot0+2\cdot(-1) \\ 3\cdot2+4\cdot1 & 3\cdot0+4\cdot(-1) \end{pmatrix} = \begin{pmatrix} 4 & -2 \\ 10 & -4 \end{pmatrix}.$$

Product $BA$.
$$BA = \begin{pmatrix} 2\cdot1+0\cdot3 & 2\cdot2+0\cdot4 \\ 1\cdot1+(-1)\cdot3 & 1\cdot2+(-1)\cdot4 \end{pmatrix} = \begin{pmatrix} 2 & 4 \\ -2 & -2 \end{pmatrix}.$$

Conclusion. $AB \neq BA$: matrix multiplication is not commutative.

@@@ matrix-transpose-properties.md
---
title: Properties of the transpose
order: 3
category: linear/matrices
level: l1
difficulty: 2
tags: transpose, properties, matrix operations
date: 2026-11-03
---

## Statement

Let $A, B$ be $m\times n$ matrices and $\lambda \in \mathbb{R}$. Prove that
$$(A+B)^T = A^T + B^T, \qquad (\lambda A)^T = \lambda A^T.$$
Let moreover $A$ be $m \times n$ and $B$ be $n \times p$. Prove that
$$(AB)^T = B^T A^T.$$

## Hint

For the third identity, compare the entry $(i,j)$ on both sides using the definition of the matrix product.

## Solution

First identity. The entry $(i,j)$ of $(A+B)^T$ is the entry $(j,i)$ of $A+B$, which is $a_{ji}+b_{ji}$. This is exactly the sum of the entries $(i,j)$ of $A^T$ and $B^T$.

Second identity. The entry $(i,j)$ of $(\lambda A)^T$ is $\lambda a_{ji} = \lambda (A^T)_{ij}$.

Third identity. Both sides are $p \times m$ matrices ($AB$ is $m\times p$, and $B^T A^T$ is $(p\times n)(n\times m)$). The entry $(i,j)$ of $(AB)^T$ is the entry $(j,i)$ of $AB$:
$$(AB)_{ji} = \sum_{k=1}^n a_{jk} b_{ki}.$$
The entry $(i,j)$ of $B^T A^T$ is
$$\sum_{k=1}^n (B^T)_{ik}(A^T)_{kj} = \sum_{k=1}^n b_{ki} a_{jk}.$$
The two sums have the same terms, so $(AB)^T = B^T A^T$.

@@@ matrix-inverse-2x2.md
---
title: Inverse of a 2x2 matrix
order: 4
category: linear/matrices
level: l1
difficulty: 2
tags: inverse, determinant, 2x2 matrices
date: 2026-11-03
---

## Statement

Compute the inverse of
$$A = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}.$$

## Hint

For $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, if $ad-bc \neq 0$ then
$$A^{-1} = \frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}.$$

## Solution

Determinant. $\det A = 3\cdot2 - 5\cdot1 = 6 - 5 = 1$.

Since $\det A \neq 0$, $A$ is invertible and
$$A^{-1} = \frac{1}{1}\begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix} = \begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}.$$

Verification.
$$AA^{-1} = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix} = \begin{pmatrix} 6-5 & -15+15 \\ 2-2 & -5+6 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}.$$
For square matrices, $AA^{-1} = I$ already implies $A^{-1}A = I$.

@@@ matrix-determinant-3x3-sarrus.md
---
title: Determinant of a 3x3 matrix by Sarrus' rule
order: 5
category: linear/matrices
level: lycee
difficulty: 2
tags: determinant, Sarrus rule, 3x3 matrices
date: 2026-11-03
---

## Statement

Compute the determinant of
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 10 \end{pmatrix}.$$

## Hint

Use Sarrus' rule: sum the three downward diagonals and subtract the three upward diagonals. (Sarrus' rule is specific to $3\times3$ matrices.)

## Solution

Sarrus' rule.
$$\det A = 1\cdot5\cdot10 + 2\cdot6\cdot7 + 3\cdot4\cdot8 - 3\cdot5\cdot7 - 1\cdot6\cdot8 - 2\cdot4\cdot10.$$
Compute
$$\det A = 50 + 84 + 96 - 105 - 48 - 80 = 230 - 233 = -3.$$

Remark. The matrix is invertible since $\det A \neq 0$.

@@@ matrix-determinant-properties.md
---
title: Using determinant properties
order: 6
category: linear/matrices
level: l1
difficulty: 3
tags: determinant, row operations, properties, Vandermonde
date: 2026-11-03
---

## Statement

Compute
$$\Delta = \begin{vmatrix} 1 & a & a^2 \\ 1 & b & b^2 \\ 1 & c & c^2 \end{vmatrix}.$$

## Hint

Subtract the first row from the other two, then factor $b-a$ and $c-a$.

## Solution

Row operations. $R_2 \leftarrow R_2 - R_1$, $R_3 \leftarrow R_3 - R_1$ (these do not change the determinant):
$$\Delta = \begin{vmatrix} 1 & a & a^2 \\ 0 & b-a & b^2-a^2 \\ 0 & c-a & c^2-a^2 \end{vmatrix}.$$

Factoring. $b^2-a^2 = (b-a)(b+a)$ and $c^2-a^2 = (c-a)(c+a)$, so the second row is $(b-a)\cdot(0,\,1,\,b+a)$ and the third row is $(c-a)\cdot(0,\,1,\,c+a)$. By linearity of the determinant in each row (no division is involved, so this is valid even if $b=a$ or $c=a$):
$$\Delta = (b-a)(c-a)\begin{vmatrix} 1 & a & a^2 \\ 0 & 1 & b+a \\ 0 & 1 & c+a \end{vmatrix}.$$

Expansion. Expanding along the first column:
$$\Delta = (b-a)(c-a)\begin{vmatrix} 1 & b+a \\ 1 & c+a \end{vmatrix} = (b-a)(c-a)\big((c+a)-(b+a)\big) = (b-a)(c-a)(c-b).$$

Conclusion. This is the Vandermonde determinant:
$$\Delta = (b-a)(c-a)(c-b).$$
In particular $\Delta \neq 0$ if and only if $a$, $b$, $c$ are pairwise distinct.

@@@ matrix-invertibility-parameter.md
---
title: Invertibility depending on a parameter
order: 7
category: linear/matrices
level: l1
difficulty: 3
tags: invertibility, parameter, determinant
date: 2026-11-03
---

## Statement

For which real values of $m$ is the matrix
$$A_m = \begin{pmatrix} m & 1 & 1 \\ 1 & m & 1 \\ 1 & 1 & m \end{pmatrix}$$
invertible?

## Hint

Compute $\det A_m$ by adding all rows to the first, then factoring.

## Solution

Row operation. $R_1 \leftarrow R_1 + R_2 + R_3$ (the determinant is unchanged):
$$\det A_m = \begin{vmatrix} m+2 & m+2 & m+2 \\ 1 & m & 1 \\ 1 & 1 & m \end{vmatrix} = (m+2)\begin{vmatrix} 1 & 1 & 1 \\ 1 & m & 1 \\ 1 & 1 & m \end{vmatrix}.$$

Column operations. $C_2 \leftarrow C_2 - C_1$, $C_3 \leftarrow C_3 - C_1$ (the determinant is unchanged):
$$\det A_m = (m+2)\begin{vmatrix} 1 & 0 & 0 \\ 1 & m-1 & 0 \\ 1 & 0 & m-1 \end{vmatrix} = (m+2)(m-1)^2,$$
since the last matrix is lower triangular.

Conclusion. $A_m$ is invertible if and only if $\det A_m \neq 0$, i.e. if and only if $m \neq -2$ and $m \neq 1$.

@@@ matrix-inverse-3x3.md
---
title: Inverse of a 3x3 matrix by row reduction
order: 8
category: linear/matrices
level: l1
difficulty: 4
tags: inverse, Gaussian elimination, 3x3 matrices
date: 2026-11-03
---

## Statement

Compute the inverse of
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}.$$

## Hint

Apply Gauss-Jordan elimination to the augmented matrix $[A \mid I]$ until the left block becomes the identity.

## Solution

Augmented matrix.
$$\left(\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 0 & 1 & 4 & 0 & 1 & 0 \\ 5 & 6 & 0 & 0 & 0 & 1 \end{array}\right).$$

Elimination. $R_3 \leftarrow R_3 - 5R_1$
$$\left(\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 0 & 1 & 4 & 0 & 1 & 0 \\ 0 & -4 & -15 & -5 & 0 & 1 \end{array}\right).$$
$R_3 \leftarrow R_3 + 4R_2$
$$\left(\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 0 & 1 & 4 & 0 & 1 & 0 \\ 0 & 0 & 1 & -5 & 4 & 1 \end{array}\right).$$
$R_1 \leftarrow R_1 - 3R_3$, $R_2 \leftarrow R_2 - 4R_3$
$$\left(\begin{array}{ccc|ccc} 1 & 2 & 0 & 16 & -12 & -3 \\ 0 & 1 & 0 & 20 & -15 & -4 \\ 0 & 0 & 1 & -5 & 4 & 1 \end{array}\right).$$
$R_1 \leftarrow R_1 - 2R_2$
$$\left(\begin{array}{ccc|ccc} 1 & 0 & 0 & -24 & 18 & 5 \\ 0 & 1 & 0 & 20 & -15 & -4 \\ 0 & 0 & 1 & -5 & 4 & 1 \end{array}\right).$$

Conclusion.
$$A^{-1} = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix}.$$

Verification. Row by row, $AA^{-1}$ gives
$$\begin{pmatrix} -24+40-15 & 18-30+12 & 5-8+3 \\ 20-20 & -15+16 & -4+4 \\ -120+120 & 90-90 & 25-24 \end{pmatrix} = I.$$

@@@ matrix-rank-computation.md
---
title: Computing the rank of a matrix
order: 9
category: linear/matrices
level: l1
difficulty: 3
tags: rank, Gaussian elimination, row reduction
date: 2026-11-03
---

## Statement

Compute the rank of
$$A = \begin{pmatrix} 1 & 2 & 3 & 4 \\ 2 & 4 & 7 & 9 \\ 0 & 0 & 1 & 1 \end{pmatrix}.$$

(Convention: the rank of a matrix is the dimension of its column space; it equals the dimension of its row space, which is the number of nonzero rows in any row echelon form.)

## Hint

Perform Gaussian elimination and count the number of nonzero rows in the row echelon form.

## Solution

Elimination. $R_2 \leftarrow R_2 - 2R_1$
$$\begin{pmatrix} 1 & 2 & 3 & 4 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 1 & 1 \end{pmatrix}.$$
$R_3 \leftarrow R_3 - R_2$
$$\begin{pmatrix} 1 & 2 & 3 & 4 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}.$$

Conclusion. Elementary row operations do not change the row space, and the nonzero rows of an echelon matrix are linearly independent. There are two nonzero rows, so $\operatorname{rank}(A) = 2$.

@@@ matrix-rank-parameter.md
---
title: Rank depending on a parameter
order: 10
category: linear/matrices
level: l1
difficulty: 4
tags: rank, parameter, determinant
date: 2026-11-03
---

## Statement

Determine the rank of
$$A_m = \begin{pmatrix} 1 & 1 & m \\ 1 & m & 1 \\ m & 1 & 1 \end{pmatrix}$$
depending on the real parameter $m$.

## Hint

Compute the determinant first to find when the rank is $3$, then study the special values.

## Solution

Determinant. $R_1 \leftarrow R_1 + R_2 + R_3$ gives a first row $(m+2)(1,1,1)$, so
$$\det A_m = (m+2)\begin{vmatrix} 1 & 1 & 1 \\ 1 & m & 1 \\ m & 1 & 1 \end{vmatrix}.$$
Now $C_2 \leftarrow C_2 - C_1$, $C_3 \leftarrow C_3 - C_1$:
$$\begin{vmatrix} 1 & 0 & 0 \\ 1 & m-1 & 0 \\ m & 1-m & 1-m \end{vmatrix} = (m-1)(1-m) = -(m-1)^2.$$
Hence
$$\det A_m = -(m+2)(m-1)^2.$$

Case $m \neq -2$ and $m \neq 1$. $\det A_m \neq 0$, so $\operatorname{rank}(A_m) = 3$.

Case $m = 1$. All entries are $1$, so every row is equal to $(1,1,1)$. The rank is $1$.

Case $m = -2$.
$$A_{-2} = \begin{pmatrix} 1 & 1 & -2 \\ 1 & -2 & 1 \\ -2 & 1 & 1 \end{pmatrix}.$$
The sum of the three rows is $0$, so the rows are linearly dependent and $\operatorname{rank} \le 2$. The first two rows are not proportional, so $\operatorname{rank} \ge 2$. The rank is $2$.

Conclusion.
$$\operatorname{rank}(A_m) = \begin{cases} 3 & \text{if } m \neq -2 \text{ and } m \neq 1, \\ 2 & \text{if } m = -2, \\ 1 & \text{if } m = 1. \end{cases}$$

@@@ matrix-gauss-jordan-system.md
---
title: Solving a linear system by Gauss-Jordan
order: 11
category: linear/matrices
level: lycee
difficulty: 3
tags: linear system, Gauss-Jordan, row reduction
date: 2026-11-03
---

## Statement

Solve the system
$$\begin{cases} x + 2y + z = 4 \\ 2x + 5y - z = 7 \\ x + y + 3z = 6 \end{cases}$$

## Hint

Write the augmented matrix and reduce it to reduced row echelon form (Gauss-Jordan).

## Solution

Augmented matrix.
$$\left(\begin{array}{ccc|c} 1 & 2 & 1 & 4 \\ 2 & 5 & -1 & 7 \\ 1 & 1 & 3 & 6 \end{array}\right).$$

Forward elimination. $R_2 \leftarrow R_2 - 2R_1$, $R_3 \leftarrow R_3 - R_1$
$$\left(\begin{array}{ccc|c} 1 & 2 & 1 & 4 \\ 0 & 1 & -3 & -1 \\ 0 & -1 & 2 & 2 \end{array}\right).$$
$R_3 \leftarrow R_3 + R_2$, then $R_3 \leftarrow -R_3$
$$\left(\begin{array}{ccc|c} 1 & 2 & 1 & 4 \\ 0 & 1 & -3 & -1 \\ 0 & 0 & 1 & -1 \end{array}\right).$$

Backward elimination. $R_1 \leftarrow R_1 - R_3$, $R_2 \leftarrow R_2 + 3R_3$
$$\left(\begin{array}{ccc|c} 1 & 2 & 0 & 5 \\ 0 & 1 & 0 & -4 \\ 0 & 0 & 1 & -1 \end{array}\right).$$
$R_1 \leftarrow R_1 - 2R_2$
$$\left(\begin{array}{ccc|c} 1 & 0 & 0 & 13 \\ 0 & 1 & 0 & -4 \\ 0 & 0 & 1 & -1 \end{array}\right).$$

Conclusion. There is a pivot in each column, so the solution is unique: $(x,y,z) = (13, -4, -1)$.

Verification. $13 - 8 - 1 = 4$, $26 - 20 + 1 = 7$, $13 - 4 - 3 = 6$.

@@@ matrix-cramers-rule.md
---
title: Cramer's rule
order: 12
category: linear/matrices
level: l1
difficulty: 3
tags: Cramer's rule, determinant, linear system
date: 2026-11-03
---

## Statement

Solve using Cramer's rule:
$$\begin{cases} 2x + y = 5 \\ x + 3y = 10 \end{cases}$$

## Hint

For a system $AX = B$ with $\det A \neq 0$, the solution is $x_i = \det A_i / \det A$, where $A_i$ is $A$ with column $i$ replaced by $B$.

## Solution

Determinant.
$$\det A = \begin{vmatrix} 2 & 1 \\ 1 & 3 \end{vmatrix} = 6 - 1 = 5 \neq 0,$$
so Cramer's rule applies.

Determinants $\det A_1$ and $\det A_2$.
$$\det A_1 = \begin{vmatrix} 5 & 1 \\ 10 & 3 \end{vmatrix} = 15 - 10 = 5, \qquad \det A_2 = \begin{vmatrix} 2 & 5 \\ 1 & 10 \end{vmatrix} = 20 - 5 = 15.$$

Solution.
$$x = \frac{\det A_1}{\det A} = \frac{5}{5} = 1, \qquad y = \frac{\det A_2}{\det A} = \frac{15}{5} = 3.$$

Verification. $2\cdot1+3=5$ and $1+3\cdot3=10$.

@@@ matrix-system-parameter.md
---
title: A linear system with a parameter
order: 13
category: linear/matrices
level: l1
difficulty: 4
tags: linear system, parameter, discussion
date: 2026-11-03
---

## Statement

Discuss and solve, depending on the real parameter $m$:
$$\begin{cases} x + y + z = 3 \\ x + 2y + 3z = 6 \\ x + 3y + mz = 9 \end{cases}$$

## Hint

Compute the determinant of the coefficient matrix and discuss according to its value. Look at the right-hand side: how does it relate to the columns of the coefficient matrix?

## Solution

Determinant. With $R_2 \leftarrow R_2 - R_1$, $R_3 \leftarrow R_3 - R_1$:
$$\det A = \begin{vmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 3 & m \end{vmatrix} = \begin{vmatrix} 1 & 1 & 1 \\ 0 & 1 & 2 \\ 0 & 2 & m-1 \end{vmatrix} = (m-1) - 4 = m - 5.$$

A particular solution for every $m$. The second column of the coefficient matrix is $(1,2,3)^T$ and the right-hand side is $(3,6,9)^T = 3\,(1,2,3)^T$. Hence $(x,y,z) = (0,3,0)$ is a solution for every value of $m$.

Case $m \neq 5$. $\det A \neq 0$, so the system has exactly one solution (Cramer). By the previous paragraph it is $(0,3,0)$.

Case $m = 5$. Subtracting the first equation from the second gives $y + 2z = 3$; subtracting the second from the third gives $y + 2z = 3$ again. The third equation is therefore a consequence of the first two, and the system is equivalent to
$$\begin{cases} x + y + z = 3 \\ y + 2z = 3 \end{cases}$$
Taking $z = t$ as a free parameter: $y = 3 - 2t$, and $x = 3 - y - z = 3 - (3-2t) - t = t$.

Verification for $m=5$. For $(t, 3-2t, t)$: $t + (3-2t) + t = 3$; $t + 2(3-2t) + 3t = 6$; $t + 3(3-2t) + 5t = 9$.

Conclusion.
- If $m \neq 5$: unique solution $(x,y,z) = (0,3,0)$.
- If $m = 5$: infinitely many solutions $(x,y,z) = (t, 3-2t, t)$, $t \in \mathbb{R}$ (a line through $(0,3,0)$ with direction $(1,-2,1)$).

@@@ matrix-powers-diagonal.md
---
title: Powers of a diagonal matrix
order: 14
category: linear/matrices
level: l1
difficulty: 2
tags: diagonal matrix, powers, induction
date: 2026-11-03
---

## Statement

Let $D = \operatorname{diag}(\lambda_1,\ldots,\lambda_n)$. Show that $D^k = \operatorname{diag}(\lambda_1^k,\ldots,\lambda_n^k)$ for all $k \ge 1$.

## Hint

Prove by induction on $k$, using the fact that the product of two diagonal matrices is diagonal.

## Solution

Product of diagonal matrices. If $D = \operatorname{diag}(d_i)$ and $D' = \operatorname{diag}(d'_i)$, then $(DD')_{ij} = \sum_k d_i\delta_{ik}\, d'_k\delta_{kj} = d_i d'_i \delta_{ij}$, so $DD' = \operatorname{diag}(d_i d'_i)$.

Base case. For $k=1$, $D^1 = D = \operatorname{diag}(\lambda_1,\ldots,\lambda_n)$.

Inductive step. Assume $D^k = \operatorname{diag}(\lambda_1^k,\ldots,\lambda_n^k)$. Then
$$D^{k+1} = D^k D = \operatorname{diag}(\lambda_1^k,\ldots,\lambda_n^k)\operatorname{diag}(\lambda_1,\ldots,\lambda_n) = \operatorname{diag}(\lambda_1^{k+1},\ldots,\lambda_n^{k+1}).$$

Conclusion. The formula holds for all $k \ge 1$.

@@@ matrix-powers-nilpotent.md
---
title: Powers of a nilpotent matrix
order: 15
category: linear/matrices
level: l1
difficulty: 3
tags: nilpotent, powers
date: 2026-11-03
---

## Statement

Let
$$N = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}.$$
Compute $N^2$, $N^3$, and $N^k$ for all $k \ge 3$.

## Hint

Multiply $N$ by itself and observe the shift of the $1$'s.

## Solution

$N^2$.
$$N^2 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$

$N^3$.
$$N^3 = N^2 N = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$

Conclusion. $N^3 = 0$, hence for $k \ge 3$, $N^k = N^{k-3}N^3 = 0$. Since $N^2 \neq 0$, the matrix $N$ is nilpotent of index exactly $3$.

@@@ matrix-powers-companion.md
---
title: Powers of a companion matrix
order: 16
category: linear/matrices
level: l1
difficulty: 4
tags: companion matrix, powers, recurrence, Fibonacci
date: 2026-11-03
---

## Statement

Let $(F_k)_{k\ge0}$ be the Fibonacci sequence: $F_0 = 0$, $F_1 = 1$, $F_{k+1} = F_k + F_{k-1}$ for $k \ge 1$. Let
$$A = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}.$$
Compute $A^k$ for all $k \ge 1$.

## Hint

Compute $A^2$, $A^3$, and guess a pattern involving the Fibonacci numbers. Prove it by induction.

## Solution

First powers.
$$A^2 = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix},$$
$$A^3 = A^2 A = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 2 & 3 \end{pmatrix}.$$

Pattern. With $F_0=0, F_1=1, F_2=1, F_3=2, F_4=3, \ldots$ we conjecture
$$A^k = \begin{pmatrix} F_{k-1} & F_k \\ F_k & F_{k+1} \end{pmatrix}.$$

Induction. Base case $k=1$: $A = \begin{pmatrix} F_0 & F_1 \\ F_1 & F_2 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$. Inductive step:
$$A^{k+1} = A^k A = \begin{pmatrix} F_{k-1} & F_k \\ F_k & F_{k+1} \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} F_k & F_{k-1}+F_k \\ F_{k+1} & F_k+F_{k+1} \end{pmatrix}.$$
Using $F_{k-1}+F_k = F_{k+1}$ and $F_k+F_{k+1} = F_{k+2}$, we get
$$A^{k+1} = \begin{pmatrix} F_k & F_{k+1} \\ F_{k+1} & F_{k+2} \end{pmatrix}.$$

Conclusion. The formula holds for all $k \ge 1$.

@@@ matrix-rank-nullity-theorem.md
---
title: Rank-nullity theorem
order: 17
category: linear/matrices
level: l1
difficulty: 4
tags: rank-nullity, kernel, image
date: 2026-11-03
---

## Statement

Let $A$ be a real $m \times n$ matrix, viewed as the linear map $f: \mathbb{R}^n \to \mathbb{R}^m$, $x \mapsto Ax$. Let $\operatorname{rank}(A) = \dim \operatorname{Im} A$. Show that
$$\dim(\ker A) + \operatorname{rank}(A) = n.$$

## Hint

Choose a basis of $\ker A$, extend it to a basis of $\mathbb{R}^n$, and show that the images of the added vectors form a basis of $\operatorname{Im} A$.

## Solution

Basis of the kernel. Let $(u_1,\ldots,u_k)$ be a basis of $\ker A$ (with $k = 0$ if $\ker A = \{0\}$). Extend it to a basis $(u_1,\ldots,u_k,v_1,\ldots,v_{n-k})$ of $\mathbb{R}^n$ (incomplete basis theorem; if $k = n$ there is nothing to add).

Spanning. Let $y \in \operatorname{Im} A$, say $y = Ax$. Write $x = \sum_i \beta_i u_i + \sum_j \alpha_j v_j$. Since $Au_i = 0$, we get $y = \sum_j \alpha_j A v_j$. So $Av_1,\ldots,Av_{n-k}$ span $\operatorname{Im} A$.

Independence. Suppose $\sum_j \alpha_j A v_j = 0$. Then $A\big(\sum_j \alpha_j v_j\big) = 0$, so $\sum_j \alpha_j v_j \in \ker A$, i.e. $\sum_j \alpha_j v_j = \sum_i \beta_i u_i$ for some scalars $\beta_i$. Thus
$$\sum_i \beta_i u_i - \sum_j \alpha_j v_j = 0,$$
and since $(u_1,\ldots,u_k,v_1,\ldots,v_{n-k})$ is a basis, all $\beta_i$ and all $\alpha_j$ vanish.

Conclusion. $(Av_1,\ldots,Av_{n-k})$ is a basis of $\operatorname{Im} A$, so $\operatorname{rank}(A) = n-k = n - \dim(\ker A)$, i.e. $\dim(\ker A) + \operatorname{rank}(A) = n$.

@@@ matrix-kernel-image-example.md
---
title: Kernel and image of a matrix
order: 18
category: linear/matrices
level: l1
difficulty: 3
tags: kernel, image, basis
date: 2026-11-03
---

## Statement

Find a basis for the kernel and the image of
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 1 & 2 & 3 \end{pmatrix}.$$

## Hint

The rows are all proportional to $(1,2,3)$, so the rank is $1$.

## Solution

Rank. Row 2 is $2\times$ row 1 and row 3 equals row 1, so $\operatorname{rank}(A) = 1$.

Image. The columns are $c_1 = (1,2,1)^T$, $c_2 = 2c_1$, $c_3 = 3c_1$. They are all multiples of $c_1 \neq 0$, so $\operatorname{Im} A = \operatorname{span}(c_1)$ and a basis of the image is $\big((1,2,1)^T\big)$.

Kernel. Since the second and third rows are multiples of the first, $Ax = 0$ is equivalent to the single equation $x_1 + 2x_2 + 3x_3 = 0$. The solutions are $(x_1,x_2,x_3) = (-2s-3t,\, s,\, t)$ with $s,t \in \mathbb{R}$, i.e. $s(-2,1,0)^T + t(-3,0,1)^T$. These two vectors are linearly independent (look at the last two coordinates), so a basis of the kernel is $\big((-2,1,0)^T, (-3,0,1)^T\big)$.

Conclusion. $\dim(\ker A) = 2$, $\dim(\operatorname{Im} A) = 1$, and $2+1=3$, consistent with the rank-nullity theorem.

@@@ matrix-trace-properties.md
---
title: Properties of the trace
order: 19
category: linear/matrices
level: l1
difficulty: 2
tags: trace, cyclic property, similarity invariance
date: 2026-11-03
---

## Statement

Show that the trace satisfies
1. $\operatorname{tr}(A+B) = \operatorname{tr}(A) + \operatorname{tr}(B)$ for $A, B$ of size $n \times n$;
2. $\operatorname{tr}(AB) = \operatorname{tr}(BA)$ for $A$ of size $m \times n$ and $B$ of size $n \times m$;
3. $\operatorname{tr}(P^{-1}AP) = \operatorname{tr}(A)$ for $A$ of size $n\times n$ and $P$ an invertible $n \times n$ matrix.

## Hint

For (2), write $\operatorname{tr}(AB) = \sum_i (AB)_{ii} = \sum_{i,j} a_{ij}b_{ji}$ and swap the order of summation.

## Solution

1. $\operatorname{tr}(A+B) = \sum_i (a_{ii}+b_{ii}) = \sum_i a_{ii} + \sum_i b_{ii}$.

2. Here $AB$ is $m\times m$ and $BA$ is $n \times n$, and
$$\operatorname{tr}(AB) = \sum_{i=1}^m \sum_{j=1}^n a_{ij}b_{ji} = \sum_{j=1}^n \sum_{i=1}^m b_{ji}a_{ij} = \operatorname{tr}(BA).$$

3. Put $C = P^{-1}A$. By (2) applied to $C$ and $P$,
$$\operatorname{tr}(P^{-1}AP) = \operatorname{tr}(CP) = \operatorname{tr}(PC) = \operatorname{tr}(PP^{-1}A) = \operatorname{tr}(A).$$

Conclusion. The trace is linear, invariant under cyclic permutations of a product of two matrices, and invariant under similarity.

@@@ matrix-eigenvalues-2x2.md
---
title: Eigenvalues and eigenvectors of a 2x2 matrix
order: 20
category: linear/matrices
level: l1
difficulty: 3
tags: eigenvalues, eigenvectors, characteristic polynomial
date: 2026-11-03
---

## Statement

Find the (real) eigenvalues and the eigenspaces of
$$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}.$$

## Hint

The eigenvalues are the roots of $\det(A - \lambda I)$. For each eigenvalue, solve $(A - \lambda I)v = 0$.

## Solution

Characteristic polynomial.
$$\det(A - \lambda I) = \begin{vmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{vmatrix} = (4-\lambda)(3-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = (\lambda-2)(\lambda-5).$$
The eigenvalues are $\lambda_1 = 2$ and $\lambda_2 = 5$.

Eigenspace for $\lambda = 2$. $A - 2I = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}$, so $(A-2I)v=0 \iff 2x + y = 0$. Hence $E_2 = \operatorname{span}(v_1)$ with $v_1 = (1,-2)^T$.

Eigenspace for $\lambda = 5$. $A - 5I = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}$, so $(A-5I)v=0 \iff y = x$. Hence $E_5 = \operatorname{span}(v_2)$ with $v_2 = (1,1)^T$.

Conclusion. The eigenvalues are $2$ and $5$; the eigenvectors are the nonzero multiples of $(1,-2)^T$ (for $2$) and of $(1,1)^T$ (for $5$).

@@@ matrix-eigenvalues-3x3.md
---
title: Eigenvalues of a 3x3 matrix
order: 21
category: linear/matrices
level: l1
difficulty: 4
tags: eigenvalues, characteristic polynomial, trace and determinant
date: 2026-11-03
---

## Statement

Find the eigenvalues of
$$A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}.$$

## Hint

The matrix $A - \lambda I$ has $2-\lambda$ on the diagonal and $1$ elsewhere. Add all rows to the first one, then factor.

## Solution

Characteristic polynomial. Put $a = 2 - \lambda$. Then
$$\det(A - \lambda I) = \begin{vmatrix} a & 1 & 1 \\ 1 & a & 1 \\ 1 & 1 & a \end{vmatrix}.$$
With $R_1 \leftarrow R_1 + R_2 + R_3$ the first row becomes $(a+2)(1,1,1)$, so
$$\det(A-\lambda I) = (a+2)\begin{vmatrix} 1 & 1 & 1 \\ 1 & a & 1 \\ 1 & 1 & a \end{vmatrix} = (a+2)\begin{vmatrix} 1 & 0 & 0 \\ 1 & a-1 & 0 \\ 1 & 0 & a-1 \end{vmatrix} = (a+2)(a-1)^2,$$
using $C_2 \leftarrow C_2 - C_1$, $C_3 \leftarrow C_3 - C_1$. Returning to $\lambda$:
$$\chi_A(\lambda) = (4-\lambda)(1-\lambda)^2.$$

Conclusion. The eigenvalues are $4$ (simple) and $1$ (double).

@@@ matrix-diagonalization-2x2.md
---
title: Diagonalizing a 2x2 matrix
order: 22
category: linear/matrices
level: l1
difficulty: 4
tags: diagonalization, eigenvalues, change of basis
date: 2026-11-03
---

## Statement

Diagonalize
$$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$$
and deduce a closed formula for $A^k$.

## Hint

Find the eigenvalues and eigenvectors, then write $A = PDP^{-1}$.

## Solution

Eigenvalues and eigenvectors. $\chi_A(\lambda) = \lambda^2 - 7\lambda + 10 = (\lambda-2)(\lambda-5)$. For $\lambda=2$: $A-2I = \begin{pmatrix} 2&1\\2&1\end{pmatrix}$, kernel spanned by $v_1 = (1,-2)^T$. For $\lambda = 5$: $A - 5I = \begin{pmatrix} -1&1\\2&-2\end{pmatrix}$, kernel spanned by $v_2 = (1,1)^T$.

Matrices $P$ and $D$.
$$P = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}, \qquad D = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}.$$
$\det P = 1\cdot1 - 1\cdot(-2) = 3 \neq 0$, so the eigenvectors are independent and $P$ is invertible:
$$P^{-1} = \frac13\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}.$$

Verification. $PD = \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix}$ and
$$PDP^{-1} = \frac13\begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix}\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix} = \frac13\begin{pmatrix} 12 & 3 \\ 6 & 9 \end{pmatrix} = A.$$

Powers. Since $A^k = PD^kP^{-1}$,
$$A^k = \frac13\begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}\begin{pmatrix} 2^k & 0 \\ 0 & 5^k \end{pmatrix}\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix} = \frac13\begin{pmatrix} 2^k + 2\cdot5^k & -2^k + 5^k \\ -2\cdot2^k + 2\cdot5^k & 2\cdot2^k + 5^k \end{pmatrix}.$$

@@@ matrix-diagonalization-3x3.md
---
title: Diagonalizing a 3x3 matrix
order: 23
category: linear/matrices
level: l1
difficulty: 4
tags: diagonalization, eigenvalues, eigenvectors
date: 2026-11-03
---

## Statement

Diagonalize
$$A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$$
and compute $A^k$.

## Hint

The characteristic polynomial is $(4-\lambda)(1-\lambda)^2$ (add all rows to the first row of $A-\lambda I$, then factor). Find an eigenvector for $4$, and check that the eigenspace for $1$ has dimension $2$.

## Solution

Eigenvalues. $\chi_A(\lambda) = (4-\lambda)(1-\lambda)^2$, so the eigenvalues are $4$ and $1$ (double).

Eigenvalue $4$. $A(1,1,1)^T = (4,4,4)^T$, so $v_1 = (1,1,1)^T$.

Eigenspace for $\lambda=1$.
$$A - I = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}$$
has rank $1$, so its kernel $\{x+y+z=0\}$ has dimension $2$, spanned by $v_2 = (1,-1,0)^T$ and $v_3 = (1,0,-1)^T$ (they are not proportional).

Diagonalization.
$$P = \begin{pmatrix} 1 & 1 & 1 \\ 1 & -1 & 0 \\ 1 & 0 & -1 \end{pmatrix}, \qquad D = \begin{pmatrix} 4 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}.$$
$\det P = 1\cdot(1) - 1\cdot(-1) + 1\cdot(1) = 3 \neq 0$, so $P$ is invertible, with
$$P^{-1} = \frac13\begin{pmatrix} 1 & 1 & 1 \\ 1 & -2 & 1 \\ 1 & 1 & -2 \end{pmatrix}$$
(one checks $P^{-1}P = I$), and $A = PDP^{-1}$.

Conclusion. $A$ is diagonalizable and
$$A^k = P\begin{pmatrix} 4^k & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}P^{-1}.$$

Remark (explicit form). Write $A = I + J$ with $J$ the all-ones matrix. Since $J^2 = 3J$, we have $J^j = 3^{j-1}J$ for $j \ge 1$, and the binomial formula (valid because $I$ and $J$ commute) gives
$$A^k = I + \frac{4^k - 1}{3}\,J.$$

@@@ matrix-diagonalization-criterion.md
---
title: When is a matrix diagonalizable
order: 24
category: linear/matrices
level: l1
difficulty: 4
tags: diagonalization, eigenspaces, multiplicity
date: 2026-11-03
---

## Statement

Let $\mathbb{K} = \mathbb{R}$ or $\mathbb{C}$ and let $A$ be an $n \times n$ matrix with entries in $\mathbb{K}$. For $\lambda \in \mathbb{K}$ let $E_\lambda = \ker(A - \lambda I) \subset \mathbb{K}^n$ (the eigenspaces are the nonzero $E_\lambda$). Call $A$ diagonalizable (over $\mathbb{K}$) if $A = PDP^{-1}$ with $P \in GL_n(\mathbb{K})$ and $D$ diagonal.

Show that $A$ is diagonalizable if and only if $\sum_\lambda \dim E_\lambda = n$, the sum running over the eigenvalues $\lambda \in \mathbb{K}$ of $A$.

## Hint

A diagonalization $A = PDP^{-1}$ means that the columns of $P$ form a basis of eigenvectors. You will need the fact that eigenspaces for distinct eigenvalues are in direct sum; prove it first.

## Solution

Lemma. Let $\lambda_1,\ldots,\lambda_r$ be distinct and $w_i \in E_{\lambda_i}$ with $w_1 + \cdots + w_r = 0$. Then all $w_i = 0$. (So the sum of the eigenspaces is direct.)

Proof of the lemma, by induction on $r$. For $r=1$ it is trivial. For $r \ge 2$, apply $A - \lambda_r I$ to the relation: since $(A-\lambda_r I)w_i = (\lambda_i - \lambda_r)w_i$ and $(A - \lambda_r I)w_r = 0$, we get $\sum_{i<r}(\lambda_i - \lambda_r) w_i = 0$ with $(\lambda_i-\lambda_r)w_i \in E_{\lambda_i}$. By the induction hypothesis, $(\lambda_i-\lambda_r)w_i = 0$, hence $w_i = 0$ for $i<r$ because $\lambda_i \neq \lambda_r$. Then $w_r = 0$ too. $\square$

Consequently $\sum_\lambda \dim E_\lambda = \dim\big(\bigoplus_\lambda E_\lambda\big) \le n$.

($\Rightarrow$) Suppose $A = PDP^{-1}$. Then $AP = PD$, so the $j$-th column $p_j$ of $P$ satisfies $Ap_j = d_j p_j$: it is an eigenvector. For each eigenvalue $\lambda$, let $n_\lambda$ be the number of indices $j$ with $d_j = \lambda$. The corresponding columns are linearly independent vectors of $E_\lambda$, so $n_\lambda \le \dim E_\lambda$. Since $\sum_\lambda n_\lambda = n$, we get $n \le \sum_\lambda \dim E_\lambda \le n$, hence equality.

($\Leftarrow$) Suppose $\sum_\lambda \dim E_\lambda = n$. Choose a basis of each $E_\lambda$ and take the union: it has $n$ vectors and is linearly independent by the Lemma (a relation among them splits into relations inside each $E_\lambda$ summing to zero, so each part vanishes, and each part is a relation in a basis). So it is a basis of $\mathbb{K}^n$ made of eigenvectors. Let $P$ be the matrix with these vectors as columns; then $AP = PD$ with $D$ diagonal, i.e. $A = PDP^{-1}$.

Remark. Equivalently (using the standard inequality $\dim E_\lambda \le$ algebraic multiplicity of $\lambda$, not proved here): $A$ is diagonalizable over $\mathbb{K}$ if and only if its characteristic polynomial splits over $\mathbb{K}$ and $\dim E_\lambda$ equals the algebraic multiplicity of $\lambda$ for each eigenvalue $\lambda$.

@@@ matrix-diagonalization-parameter.md
---
title: Diagonalizability depending on a parameter
order: 25
category: linear/matrices
level: l1
difficulty: 3
tags: diagonalization, parameter, eigenspaces
date: 2026-11-03
---

## Statement

For which real values of $a$ is the matrix
$$A = \begin{pmatrix} 1 & a \\ 0 & 2 \end{pmatrix}$$
diagonalizable (over $\mathbb{R}$)? Give an explicit diagonalization.

## Hint

Find the eigenvalues, then compute the dimension of each eigenspace as a function of $a$.

## Solution

Eigenvalues. $A$ is upper triangular, so $\chi_A(\lambda) = (1-\lambda)(2-\lambda)$ and the eigenvalues are $1$ and $2$.

Eigenspaces.
- $A - I = \begin{pmatrix} 0 & a \\ 0 & 1 \end{pmatrix}$: $(A-I)v = 0 \iff y = 0$. So $E_1 = \operatorname{span}\big((1,0)^T\big)$, of dimension $1$ for every $a$.
- $A - 2I = \begin{pmatrix} -1 & a \\ 0 & 0 \end{pmatrix}$: $(A-2I)v = 0 \iff x = ay$. So $E_2 = \operatorname{span}\big((a,1)^T\big)$, of dimension $1$ for every $a$.

Conclusion. $\dim E_1 + \dim E_2 = 2 = n$ for every $a \in \mathbb{R}$, so $A$ is diagonalizable for all real $a$ (this also follows from the fact that eigenvectors for distinct eigenvalues are independent).

Explicit diagonalization.
$$P = \begin{pmatrix} 1 & a \\ 0 & 1 \end{pmatrix}, \quad P^{-1} = \begin{pmatrix} 1 & -a \\ 0 & 1 \end{pmatrix}, \quad D = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix},$$
and indeed $PDP^{-1} = \begin{pmatrix} 1 & 2a \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 1 & -a \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & a \\ 0 & 2 \end{pmatrix} = A$.

Remark. The situation is different for $\begin{pmatrix} 1 & a \\ 0 & 1 \end{pmatrix}$: there the only eigenvalue is $1$ and $\dim E_1 = 1$ if $a \neq 0$, so the matrix is diagonalizable only for $a = 0$. Distinct eigenvalues are what make the present matrix diagonalizable for every $a$.

@@@ matrix-similarity-invariants.md
---
title: Similarity invariants
order: 26
category: linear/matrices
level: l1
difficulty: 3
tags: similarity, characteristic polynomial, trace, determinant
date: 2026-11-03
---

## Statement

Let $A, B$ be $n \times n$ matrices with $B = P^{-1}AP$ for some invertible $P$. Show that $A$ and $B$ have the same characteristic polynomial, the same trace, and the same determinant.

## Hint

Compute $\det(B - \lambda I)$ by factoring $P^{-1}$ and $P$. For the trace, use $\operatorname{tr}(XY) = \operatorname{tr}(YX)$.

## Solution

Characteristic polynomial. Since $P^{-1}(\lambda I)P = \lambda I$,
$$\det(B - \lambda I) = \det\big(P^{-1}(A - \lambda I)P\big) = \det(P^{-1})\det(A - \lambda I)\det(P) = \det(A - \lambda I),$$
because $\det(P^{-1})\det(P) = \det(I) = 1$. So the characteristic polynomials coincide.

Determinant. The same computation gives $\det B = \det(P^{-1})\det(A)\det(P) = \det A$ (equivalently, set $\lambda = 0$ in the equality of characteristic polynomials).

Trace. For any square matrices $X, Y$, $\operatorname{tr}(XY) = \sum_{i,j} x_{ij}y_{ji} = \operatorname{tr}(YX)$. Hence $\operatorname{tr}(B) = \operatorname{tr}\big((P^{-1}A)P\big) = \operatorname{tr}\big(P(P^{-1}A)\big) = \operatorname{tr}(A)$.

Remark. Alternatively, the trace is $(-1)^{n-1}$ times the coefficient of $\lambda^{n-1}$ in $\det(A - \lambda I)$ (a standard consequence of the Leibniz expansion), so equality of the characteristic polynomials already forces equality of traces.

Conclusion. Similar matrices share the characteristic polynomial, the trace, and the determinant.

@@@ matrix-change-of-basis.md
---
title: Change of basis
order: 27
category: linear/matrices
level: l1
difficulty: 3
tags: change of basis, transition matrix, similarity
date: 2026-11-03
---

## Statement

Let $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ and let $f$ be the linear map of $\mathbb{R}^2$ whose matrix in the canonical basis is $A$. Let $\mathcal{B}' = \big((1,1)^T,\,(1,-1)^T\big)$. Compute the matrix of $f$ in the basis $\mathcal{B}'$.

## Hint

The transition matrix $P$ has as columns the vectors of $\mathcal{B}'$. The new matrix is $P^{-1}AP$.

## Solution

Transition matrix.
$$P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}.$$

Inverse. $\det P = -1 - 1 = -2$, so
$$P^{-1} = -\frac12\begin{pmatrix} -1 & -1 \\ -1 & 1 \end{pmatrix} = \frac12\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}.$$

New matrix.
$$AP = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} 3 & 1 \\ 3 & -1 \end{pmatrix},$$
$$P^{-1}AP = \frac12\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 3 & 1 \\ 3 & -1 \end{pmatrix} = \frac12\begin{pmatrix} 6 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}.$$

Conclusion. In the basis $\mathcal{B}'$ the matrix of $f$ is $\operatorname{diag}(3,1)$.

Remark. This was predictable: $A(1,1)^T = 3(1,1)^T$ and $A(1,-1)^T = 1\cdot(1,-1)^T$, so the vectors of $\mathcal{B}'$ are eigenvectors of $A$ for the eigenvalues $3$ and $1$.

@@@ matrix-cayley-hamilton.md
---
title: The Cayley-Hamilton theorem
order: 28
category: linear/matrices
level: l1
difficulty: 4
tags: Cayley-Hamilton, characteristic polynomial, matrix powers
date: 2026-11-03
---

## Statement

The Cayley-Hamilton theorem states that every square matrix $A$ satisfies $\chi_A(A) = 0$, where $\chi_A$ is its characteristic polynomial.

1. Verify the theorem for $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.
2. Prove it for an arbitrary $2\times2$ matrix.

## Hint

For (1), the characteristic polynomial is $\chi_A(X) = X^2 - \operatorname{tr}(A)X + \det(A)$. For (2), compute $A^2 - (a+d)A + (ad-bc)I$ entry by entry.

## Solution

(1) Characteristic polynomial. $\chi_A(X) = \det(A - XI) = (2-X)^2 - 1 = X^2 - 4X + 3$.

Compute $\chi_A(A)$. We have
$$A^2 = \begin{pmatrix} 5 & 4 \\ 4 & 5 \end{pmatrix}, \qquad \chi_A(A) = A^2 - 4A + 3I = \begin{pmatrix} 5 & 4 \\ 4 & 5 \end{pmatrix} - \begin{pmatrix} 8 & 4 \\ 4 & 8 \end{pmatrix} + \begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}.$$

Application. $A^2 = 4A - 3I$, which allows computing any power of $A$ by recurrence (for instance $A^3 = 4A^2 - 3A = 13A - 12I$).

(2) General $2 \times 2$ case. Let $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, so $\chi_A(X) = X^2 - (a+d)X + (ad-bc)$. Then
$$A^2 = \begin{pmatrix} a^2+bc & b(a+d) \\ c(a+d) & bc+d^2 \end{pmatrix}, \qquad (a+d)A = \begin{pmatrix} a^2+ad & b(a+d) \\ c(a+d) & ad+d^2 \end{pmatrix},$$
so
$$A^2 - (a+d)A = \begin{pmatrix} bc - ad & 0 \\ 0 & bc - ad \end{pmatrix} = -(ad-bc)I,$$
that is $\chi_A(A) = 0$.

Conclusion. Cayley-Hamilton holds for the given matrix, and for every $2\times 2$ matrix. (Part (1) alone is a verification, not a proof of the theorem in general.)

@@@ matrix-minimal-polynomial.md
---
title: The minimal polynomial of a matrix
order: 29
category: linear/matrices
level: l2
difficulty: 4
tags: minimal polynomial, characteristic polynomial, diagonalizability
date: 2026-11-03
---

## Statement

The minimal polynomial $\mu_A$ of a square matrix $A$ is the monic polynomial of least degree such that $\mu_A(A) = 0$. Compute the minimal polynomial of
$$A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix},$$
and decide whether $A$ is diagonalizable.

## Hint

The characteristic polynomial is $(X-2)^2$. Test whether $(X-2)^2$ annihilates $A$, and whether a monic divisor of smaller degree does.

## Solution

Characteristic polynomial. $A$ is upper triangular with diagonal entries $2$, so $\chi_A(X) = (X-2)^2$.

Annihilating polynomial. $A - 2I = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ and $(A-2I)^2 = 0$. So $(X-2)^2$ annihilates $A$. Therefore $\mu_A$ divides $(X-2)^2$ (the set of annihilating polynomials is an ideal generated by $\mu_A$), and the monic divisors of $(X-2)^2$ are $1$, $X-2$ and $(X-2)^2$.

Elimination. $1(A) = I \neq 0$, and $(X-2)(A) = A - 2I \neq 0$. Hence $\mu_A(X) = (X-2)^2$.

Diagonalizability. The only eigenvalue of $A$ is $2$. If $A$ were diagonalizable, $A = P(2I)P^{-1} = 2I$, contradicting $A - 2I \neq 0$. So $A$ is not diagonalizable.

Remark. This is an instance of the general criterion: a matrix is diagonalizable over $\mathbb{K}$ if and only if its minimal polynomial is split with simple roots over $\mathbb{K}$. Here $\mu_A$ has the double root $2$.

@@@ matrix-linear-recurrence.md
---
title: A linear recurrence and matrix powers
order: 30
category: linear/matrices
level: l1
difficulty: 4
tags: linear recurrence, diagonalization, matrix powers
date: 2026-11-03
---

## Statement

Let $(u_n)_{n\ge0}$ be defined by $u_0 = 0$, $u_1 = 1$, and $u_{n+2} = 3u_{n+1} - 2u_n$. Express the vector $(u_{n+1}, u_n)^T$ as $A^n (u_1, u_0)^T$, then compute $A^n$ by diagonalization and deduce $u_n$.

## Hint

The companion matrix is $A = \begin{pmatrix} 3 & -2 \\ 1 & 0 \end{pmatrix}$. Diagonalize it.

## Solution

Matrix form. Let $X_n = (u_{n+1}, u_n)^T$. For $n \ge 0$,
$$X_{n+1} = \begin{pmatrix} u_{n+2} \\ u_{n+1} \end{pmatrix} = \begin{pmatrix} 3u_{n+1} - 2u_n \\ u_{n+1} \end{pmatrix} = \begin{pmatrix} 3 & -2 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} u_{n+1} \\ u_n \end{pmatrix} = AX_n.$$
By induction, $X_n = A^n X_0 = A^n (u_1, u_0)^T$.

Eigenvalues. $\det(A - \lambda I) = (3-\lambda)(-\lambda) + 2 = \lambda^2 - 3\lambda + 2 = (\lambda-1)(\lambda-2)$, so $\lambda_1 = 1$, $\lambda_2 = 2$.

Eigenvectors. For $\lambda=1$: $A-I = \begin{pmatrix} 2&-2\\1&-1\end{pmatrix}$, $v_1 = (1,1)^T$. For $\lambda=2$: $A-2I = \begin{pmatrix} 1&-2\\1&-2\end{pmatrix}$, $v_2 = (2,1)^T$.

Diagonalization.
$$A = P\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}P^{-1}, \qquad P = \begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}, \quad P^{-1} = \begin{pmatrix} -1 & 2 \\ 1 & -1 \end{pmatrix}.$$

Power.
$$A^n = P\begin{pmatrix} 1 & 0 \\ 0 & 2^n \end{pmatrix}P^{-1} = \begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 2^n \end{pmatrix}\begin{pmatrix} -1 & 2 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} -1+2^{n+1} & 2-2^{n+1} \\ -1+2^n & 2-2^n \end{pmatrix}.$$

Conclusion. $u_n$ is the second component of $A^n(u_1,u_0)^T = A^n(1,0)^T$, i.e. the entry $(A^n)_{21}$:
$$u_n = 2^n - 1.$$

Verification. $u_0 = 0$, $u_1 = 1$, $u_2 = 3$, $u_3 = 7$ agree with $2^n - 1$. Directly, $2^{n+2}-1 = 3(2^{n+1}-1) - 2(2^n-1)$.

@@@ matrix-block-triangular-inverse.md
---
title: Inverse of a block triangular matrix
order: 31
category: linear/matrices
level: l1
difficulty: 3
tags: block matrices, inverse, triangular structure
date: 2026-11-03
---

## Statement

Let
$$M = \begin{pmatrix} A & B \\ 0 & C \end{pmatrix}$$
be a block matrix where $A$ is $p \times p$ and invertible, $C$ is $q \times q$ and invertible, $B$ is $p \times q$, and $0$ is the $q \times p$ zero block. Show that $M$ is invertible and compute $M^{-1}$ in block form.

## Hint

Look for an inverse of the form $\begin{pmatrix} X & Y \\ 0 & Z \end{pmatrix}$ and solve the block equations; then verify.

## Solution

Finding the candidate. Let $N = \begin{pmatrix} X & Y \\ W & Z \end{pmatrix}$ with blocks of compatible sizes and suppose $MN = I$. The block product gives
$$MN = \begin{pmatrix} AX + BW & AY + BZ \\ CW & CZ \end{pmatrix} = \begin{pmatrix} I & 0 \\ 0 & I \end{pmatrix}.$$
From $CW = 0$ and $C$ invertible, $W = 0$. Then $CZ = I$ gives $Z = C^{-1}$; $AX = I$ gives $X = A^{-1}$; and $AY + BZ = 0$ gives $Y = -A^{-1}BC^{-1}$.

Verification (this is what proves the claim). Put
$$N = \begin{pmatrix} A^{-1} & -A^{-1}BC^{-1} \\ 0 & C^{-1} \end{pmatrix}.$$
Then
$$MN = \begin{pmatrix} AA^{-1} & -AA^{-1}BC^{-1} + BC^{-1} \\ 0 & CC^{-1} \end{pmatrix} = \begin{pmatrix} I & 0 \\ 0 & I \end{pmatrix},$$
$$NM = \begin{pmatrix} A^{-1}A & A^{-1}B - A^{-1}BC^{-1}C \\ 0 & C^{-1}C \end{pmatrix} = \begin{pmatrix} I & 0 \\ 0 & I \end{pmatrix}.$$

Conclusion. $M$ is invertible and
$$M^{-1} = \begin{pmatrix} A^{-1} & -A^{-1}BC^{-1} \\ 0 & C^{-1} \end{pmatrix}.$$

@@@ matrix-determinant-block-triangular.md
---
title: Determinant of a block triangular matrix
order: 32
category: linear/matrices
level: l1
difficulty: 4
tags: block matrices, determinant, triangular structure
date: 2026-11-03
---

## Statement

Let $A$ be $p \times p$, $B$ be $p \times q$, $C$ be $q \times q$, and let $0$ denote the $q \times p$ zero block. Show that
$$\det\begin{pmatrix} A & B \\ 0 & C \end{pmatrix} = \det(A)\det(C).$$
(No invertibility assumption is made.)

## Hint

Factor the block matrix as a product of two simpler block matrices, or use the Leibniz formula.

## Solution

First proof (factorization). Let $I_p, I_q$ be identity matrices. One checks directly that
$$\begin{pmatrix} A & B \\ 0 & C \end{pmatrix} = \begin{pmatrix} I_p & 0 \\ 0 & C \end{pmatrix}\begin{pmatrix} A & B \\ 0 & I_q \end{pmatrix}.$$
By multiplicativity of the determinant it suffices to show $\det\begin{pmatrix} I_p & 0 \\ 0 & C \end{pmatrix} = \det C$ and $\det\begin{pmatrix} A & B \\ 0 & I_q \end{pmatrix} = \det A$.

- In the first matrix, the first column is $(1,0,\ldots,0)^T$. Expanding along it gives the determinant of the same kind of matrix with $I_{p-1}$ in place of $I_p$; repeating $p$ times gives $\det C$.
- In the second matrix, the last row is $(0,\ldots,0,1)$. Expanding along it gives the determinant of the same kind of matrix with $I_{q-1}$; repeating $q$ times gives $\det A$.

Second proof (Leibniz). Let $n = p+q$ and $M = (m_{ij})$ the block matrix. Then $\det M = \sum_{\sigma \in S_n} \operatorname{sgn}(\sigma)\prod_{i=1}^n m_{i\sigma(i)}$. Since $m_{ij} = 0$ for $i > p$ and $j \le p$, a term can be nonzero only if $\sigma(i) > p$ for every $i > p$, i.e. $\sigma$ maps $\{p+1,\ldots,n\}$ into itself. A map from a finite set into itself that is injective is bijective, so $\sigma$ preserves $\{p+1,\ldots,n\}$, hence also $\{1,\ldots,p\}$. Such a $\sigma$ is a pair $(\sigma', \sigma'')$ with $\sigma' \in S_p$ and $\sigma''$ a permutation of $\{p+1,\ldots,n\}$, and $\operatorname{sgn}(\sigma) = \operatorname{sgn}(\sigma')\operatorname{sgn}(\sigma'')$. The corresponding term is
$$\operatorname{sgn}(\sigma')\prod_{i\le p} a_{i\sigma'(i)} \cdot \operatorname{sgn}(\sigma'')\prod_{i>p} c_{i-p,\,\sigma''(i)-p},$$
which involves no entry of $B$. Summing over all such pairs, the sum factors as $\det(A)\det(C)$.

Conclusion. $\det\begin{pmatrix} A & B \\ 0 & C \end{pmatrix} = \det(A)\det(C)$. In particular, when $A$ and $C$ are invertible, so is $M$ (consistent with the previous exercise).

@@@ matrix-gram-schmidt-example.md
---
title: Gram-Schmidt orthogonalization
order: 33
category: linear/matrices
level: l1
difficulty: 3
tags: Gram-Schmidt, orthogonalization, orthonormal basis
date: 2026-11-03
---

## Statement

In $\mathbb{R}^3$ with the standard inner product, apply Gram-Schmidt to $v_1 = (1,1,0)^T$, $v_2 = (1,0,1)^T$, $v_3 = (0,1,1)^T$.

## Hint

Check first that the vectors are linearly independent. At each step, subtract from $v_k$ its projection onto the previously constructed orthonormal vectors.

## Solution

Independence. $\det\begin{pmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix} = 1(0-1) - 1(1-0) + 0 = -2 \neq 0$, so the vectors are linearly independent and Gram-Schmidt does not break down (no $w_k$ will be zero).

Step 1. $u_1 = \dfrac{v_1}{\|v_1\|} = \dfrac{1}{\sqrt2}(1,1,0)^T$.

Step 2. $\langle v_2, u_1 \rangle = \frac{1}{\sqrt2}$. So
$$w_2 = v_2 - \langle v_2, u_1\rangle u_1 = (1,0,1)^T - \tfrac12(1,1,0)^T = \left(\tfrac12, -\tfrac12, 1\right)^T.$$
$\|w_2\| = \sqrt{\frac14+\frac14+1} = \sqrt{\frac32}$, so $u_2 = \frac{1}{\sqrt6}(1,-1,2)^T$.

Step 3. $\langle v_3, u_1\rangle = \frac{1}{\sqrt2}$ and $\langle v_3, u_2 \rangle = \frac{0-1+2}{\sqrt6} = \frac{1}{\sqrt6}$. So
$$w_3 = v_3 - \tfrac{1}{\sqrt2}u_1 - \tfrac{1}{\sqrt6}u_2 = (0,1,1)^T - \tfrac12(1,1,0)^T - \tfrac16(1,-1,2)^T = \left(-\tfrac23, \tfrac23, \tfrac23\right)^T.$$
$\|w_3\| = \sqrt{\frac{12}{9}} = \frac{2}{\sqrt3}$, so $u_3 = \frac{1}{\sqrt3}(-1,1,1)^T$.

Conclusion. The orthonormal basis is
$$u_1 = \frac{1}{\sqrt2}(1,1,0)^T, \quad u_2 = \frac{1}{\sqrt6}(1,-1,2)^T, \quad u_3 = \frac{1}{\sqrt3}(-1,1,1)^T.$$

Verification. $\langle u_1,u_2\rangle = \frac{1-1+0}{\sqrt{12}} = 0$, $\langle u_1,u_3\rangle = \frac{-1+1+0}{\sqrt6} = 0$, $\langle u_2,u_3\rangle = \frac{-1-1+2}{\sqrt{18}} = 0$, and each vector has norm $1$.

@@@ matrix-orthogonal-projection.md
---
title: Orthogonal projection onto a subspace
order: 34
category: linear/matrices
level: l1
difficulty: 4
tags: orthogonal projection, projection matrix, orthonormal basis
date: 2026-11-03
---

## Statement

In $\mathbb{R}^3$ with the standard inner product, let $V = \operatorname{span}\big((1,1,0)^T,(0,1,1)^T\big)$. Compute the matrix of the orthogonal projection onto $V$.

## Hint

Build an orthonormal basis of $V$ using Gram-Schmidt, then use $P = QQ^T$ where $Q$ has the orthonormal basis as columns. As a check, $V$ is also the orthogonal complement of a single vector.

## Solution

Orthonormalization. $u_1 = \frac{(1,1,0)^T}{\sqrt2}$. The projection of $(0,1,1)^T$ onto $u_1$ is $\langle (0,1,1)^T, u_1 \rangle u_1 = \frac{1}{\sqrt2}\cdot\frac{(1,1,0)^T}{\sqrt2} = \frac12(1,1,0)^T$. The orthogonal part is
$$(0,1,1)^T - \tfrac12(1,1,0)^T = \left(-\tfrac12, \tfrac12, 1\right)^T,$$
of norm $\sqrt{\frac14+\frac14+1} = \sqrt{\frac32}$. So $u_2 = \sqrt{\tfrac23}\left(-\tfrac12, \tfrac12, 1\right)^T = \frac{1}{\sqrt6}(-1,1,2)^T$.

Projection matrix. $P = u_1 u_1^T + u_2 u_2^T$ with
$$u_1 u_1^T = \frac12\begin{pmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \qquad u_2 u_2^T = \frac16\begin{pmatrix} 1 & -1 & -2 \\ -1 & 1 & 2 \\ -2 & 2 & 4 \end{pmatrix}.$$
Combining the terms:
$$P = \frac16\begin{pmatrix} 4 & 2 & -2 \\ 2 & 4 & 2 \\ -2 & 2 & 4 \end{pmatrix}.$$

Verification. $P$ is symmetric, and $P(1,1,0)^T = \frac16(6,6,0)^T = (1,1,0)^T$, $P(0,1,1)^T = \frac16(0,6,6)^T = (0,1,1)^T$, so $P$ fixes $V$. Since $P = QQ^T$ with $Q^TQ = I$, we get $P^2 = Q(Q^TQ)Q^T = P$ and $\operatorname{Im}P \subset V$.

Alternative. The vector $n = (1,-1,1)^T$ is orthogonal to both $(1,1,0)^T$ and $(0,1,1)^T$, so $V = n^\perp$ and
$$P = I - \frac{nn^T}{n^Tn} = I - \frac13\begin{pmatrix} 1 & -1 & 1 \\ -1 & 1 & -1 \\ 1 & -1 & 1 \end{pmatrix},$$
which is the same matrix.

@@@ matrix-qr-gram-schmidt.md
---
title: QR factorization by Gram-Schmidt
order: 35
category: linear/matrices
level: l2
difficulty: 4
tags: QR factorization, Gram-Schmidt, orthogonalization
date: 2026-11-03
---

## Statement

Find the (reduced) QR factorization $A = QR$ of
$$A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \\ 0 & 1 \end{pmatrix},$$
where $Q$ is $3\times 2$ with orthonormal columns and $R$ is $2\times2$ upper triangular with positive diagonal entries.

## Hint

Apply Gram-Schmidt to the columns of $A$; the entries of $R$ are the norms and inner products computed along the way.

## Solution

Columns. $a_1 = (1,1,0)^T$, $a_2 = (1,0,1)^T$. They are not proportional, hence linearly independent, so the factorization exists.

First vector. $r_{11} = \|a_1\| = \sqrt2$ and $q_1 = \dfrac{a_1}{r_{11}} = \dfrac{1}{\sqrt2}(1,1,0)^T$.

Projection. $r_{12} = \langle a_2, q_1 \rangle = \dfrac{1}{\sqrt2}$. The orthogonal part is
$$a_2 - r_{12}q_1 = (1,0,1)^T - \tfrac12(1,1,0)^T = \left(\tfrac12, -\tfrac12, 1\right)^T,$$
of norm $r_{22} = \sqrt{\frac14+\frac14+1} = \sqrt{\frac32}$. So
$$q_2 = \sqrt{\tfrac23}\left(\tfrac12, -\tfrac12, 1\right)^T = \left(\tfrac{1}{\sqrt6}, -\tfrac{1}{\sqrt6}, \tfrac{2}{\sqrt6}\right)^T.$$

Matrices $Q$ and $R$.
$$Q = \begin{pmatrix} \frac{1}{\sqrt2} & \frac{1}{\sqrt6} \\ \frac{1}{\sqrt2} & -\frac{1}{\sqrt6} \\ 0 & \frac{2}{\sqrt6} \end{pmatrix}, \qquad R = \begin{pmatrix} \sqrt2 & \frac{1}{\sqrt2} \\ 0 & \sqrt{\frac32} \end{pmatrix}.$$

Verification. First column of $QR$: $\sqrt2\, q_1 = (1,1,0)^T = a_1$. Second column: $\frac{1}{\sqrt2}q_1 + \sqrt{\frac32}\,q_2 = \left(\frac12,\frac12,0\right)^T + \left(\frac12,-\frac12,1\right)^T = (1,0,1)^T = a_2$.

Conclusion. $A = QR$ with $Q$ having orthonormal columns and $R$ upper triangular with positive diagonal (this factorization is unique under these conditions).

@@@ matrix-symmetric-orthogonal-diagonalization.md
---
title: Orthogonal diagonalization of a symmetric matrix
order: 36
category: linear/matrices
level: l2
difficulty: 3
tags: symmetric matrix, orthogonal diagonalization, spectral theorem
date: 2026-11-03
---

## Statement

Orthogonally diagonalize
$$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix},$$
i.e. find an orthogonal matrix $Q$ and a diagonal matrix $D$ with $A = QDQ^T$.

## Hint

Find the eigenvalues and eigenvectors. For a symmetric matrix, eigenvectors for distinct eigenvalues are automatically orthogonal, so normalizing them is enough here (Gram-Schmidt would only be needed inside an eigenspace of dimension at least $2$).

## Solution

Eigenvalues. $\det(A - \lambda I) = (2-\lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = (\lambda-1)(\lambda-3)$, so the eigenvalues are $1$ and $3$.

Eigenvectors. For $\lambda = 1$: $A - I = \begin{pmatrix} 1&1\\1&1\end{pmatrix}$, $v_1 = (1,-1)^T$. For $\lambda = 3$: $A - 3I = \begin{pmatrix} -1&1\\1&-1\end{pmatrix}$, $v_2 = (1,1)^T$. They are orthogonal: $\langle v_1,v_2\rangle = 1 - 1 = 0$.

Normalization. $\|v_1\| = \|v_2\| = \sqrt2$, so
$$u_1 = \frac{1}{\sqrt2}\begin{pmatrix} 1 \\ -1 \end{pmatrix}, \qquad u_2 = \frac{1}{\sqrt2}\begin{pmatrix} 1 \\ 1 \end{pmatrix}.$$

Orthogonal matrix $Q$. Let
$$Q = \frac{1}{\sqrt2}\begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}.$$
Then $Q^TQ = \frac12\begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} = I$. Moreover
$$AQ = \frac{1}{\sqrt2}\begin{pmatrix} 1 & 3 \\ -1 & 3 \end{pmatrix}, \qquad Q^TAQ = \frac12\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 3 \\ -1 & 3 \end{pmatrix} = \frac12\begin{pmatrix} 2 & 0 \\ 0 & 6 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}.$$

Conclusion. $A = Q\operatorname{diag}(1,3)Q^T$ with $Q$ orthogonal.

@@@ matrix-lu-decomposition.md
---
title: LU decomposition
order: 37
category: linear/matrices
level: l1
difficulty: 4
tags: LU decomposition, Gaussian elimination, factorization
date: 2026-11-03
---

## Statement

Find the LU decomposition of
$$A = \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 3 \\ 8 & 7 & 9 \end{pmatrix},$$
with $L$ unit lower triangular and $U$ upper triangular.

## Hint

Perform Gaussian elimination without pivoting and keep track of the multipliers.

## Solution

First step. $R_2 \leftarrow R_2 - 2R_1$, $R_3 \leftarrow R_3 - 4R_1$. Multipliers $\ell_{21} = 2$, $\ell_{31} = 4$.
$$A \to \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 3 & 5 \end{pmatrix}.$$

Second step. $R_3 \leftarrow R_3 - 3R_2$. Multiplier $\ell_{32} = 3$.
$$A \to \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 2 \end{pmatrix}.$$

The pivots $2, 1, 2$ are nonzero, so no row exchange was needed. Since $U = E_{32}E_{31}E_{21}A$ with $E_{ij}$ the elementary matrices of the steps, $A = E_{21}^{-1}E_{31}^{-1}E_{32}^{-1}U = LU$, and the product of the inverses is the unit lower triangular matrix containing the multipliers.

Conclusion.
$$L = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 4 & 3 & 1 \end{pmatrix}, \qquad U = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 2 \end{pmatrix}.$$

Verification.
$$LU = \begin{pmatrix} 2 & 1 & 1 \\ 4 & 2+1 & 2+1 \\ 8 & 4+3 & 4+3+2 \end{pmatrix} = \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 3 \\ 8 & 7 & 9 \end{pmatrix} = A.$$

@@@ matrix-cholesky-2x2.md
---
title: Cholesky factorization of a 2x2 matrix
order: 38
category: linear/matrices
level: l2
difficulty: 4
tags: Cholesky, positive definite, factorization
date: 2026-11-03
---

## Statement

Show that
$$A = \begin{pmatrix} 4 & 2 \\ 2 & 5 \end{pmatrix}$$
is symmetric positive definite, and find its Cholesky factorization $A = LL^T$ with $L$ lower triangular with positive diagonal entries.

## Hint

Use the leading principal minors (Sylvester's criterion). Then look for $L = \begin{pmatrix} a & 0 \\ b & c \end{pmatrix}$ with $a, c > 0$ and solve $LL^T = A$.

## Solution

Positive definiteness. $A$ is symmetric, $\Delta_1 = 4 > 0$ and $\Delta_2 = \det A = 20 - 4 = 16 > 0$, so $A$ is positive definite by Sylvester's criterion. (A Cholesky factorization with positive diagonal exists and is unique exactly for such matrices.)

Setup.
$$LL^T = \begin{pmatrix} a & 0 \\ b & c \end{pmatrix}\begin{pmatrix} a & b \\ 0 & c \end{pmatrix} = \begin{pmatrix} a^2 & ab \\ ab & b^2+c^2 \end{pmatrix}.$$

Identification. $a^2 = 4$ and $a>0$ give $a = 2$. $ab = 2$ gives $b = 1$. $b^2+c^2 = 5$ gives $c^2 = 4$, and $c > 0$ gives $c = 2$.

Conclusion.
$$L = \begin{pmatrix} 2 & 0 \\ 1 & 2 \end{pmatrix}.$$

Verification.
$$LL^T = \begin{pmatrix} 2 & 0 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 4 & 2 \\ 2 & 5 \end{pmatrix}.$$

@@@ matrix-positive-definite.md
---
title: Positive definiteness of a symmetric matrix
order: 39
category: linear/matrices
level: l2
difficulty: 4
tags: positive definite, Sylvester criterion, eigenvalues
date: 2026-11-03
---

## Statement

Show that
$$A = \begin{pmatrix} 2 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 2 \end{pmatrix}$$
is positive definite.

## Hint

$A$ is symmetric. Use Sylvester's criterion (leading principal minors), or compute the eigenvalues, or write $x^TAx$ as a sum of squares.

## Solution

Method 1: Sylvester's criterion (applicable because $A$ is symmetric). The leading principal minors are
- $\Delta_1 = 2 > 0$;
- $\Delta_2 = \begin{vmatrix} 2 & -1 \\ -1 & 2 \end{vmatrix} = 4 - 1 = 3 > 0$;
- $\Delta_3 = \det A = 2\begin{vmatrix} 2 & -1 \\ -1 & 2 \end{vmatrix} - (-1)\begin{vmatrix} -1 & -1 \\ 0 & 2 \end{vmatrix} = 2\cdot3 + (-2) = 4 > 0$.

All are positive, so $A$ is positive definite.

Method 2: sum of squares. For $x = (x_1,x_2,x_3)^T$,
$$x^TAx = 2x_1^2 + 2x_2^2 + 2x_3^2 - 2x_1x_2 - 2x_2x_3 = x_1^2 + (x_1-x_2)^2 + (x_2-x_3)^2 + x_3^2 \ge 0,$$
and equality forces $x_1 = 0$, $x_1 = x_2$, $x_2 = x_3$, $x_3 = 0$, i.e. $x = 0$.

Method 3: eigenvalues. With $a = 2-\lambda$, $\det(A-\lambda I) = a(a^2-1) - a = a(a^2-2)$, so $a \in \{0, \pm\sqrt2\}$ and the eigenvalues are $2$, $2-\sqrt2$, $2+\sqrt2$, all positive. A symmetric matrix with positive eigenvalues is positive definite.

@@@ matrix-quadratic-form-reduction.md
---
title: Reducing a quadratic form
order: 40
category: linear/matrices
level: l2
difficulty: 4
tags: quadratic form, reduction, completing the square
date: 2026-11-03
---

## Statement

Reduce the quadratic form
$$Q(x,y) = x^2 + 4xy + 5y^2$$
to a sum of squares by completing the square, and determine its signature.

## Hint

Write $Q$ as $(x+2y)^2 + \ldots$ and identify the remaining terms.

## Solution

Completing the square.
$$Q(x,y) = x^2 + 4xy + 5y^2 = (x+2y)^2 + y^2.$$

Change of variables. Let $u = x+2y$ and $v = y$. This change of variables is invertible ($x = u - 2v$, $y = v$), and $Q = u^2 + v^2$.

Signature. There are two positive squares and no negative one, so the signature is $(2,0)$ (this pair is well defined by Sylvester's law of inertia), and $Q$ is positive definite.

Remark. The associated symmetric matrix is $\begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix}$, with trace $6$ and determinant $1$, so its characteristic polynomial is $\lambda^2 - 6\lambda + 1$ and its eigenvalues are $3 \pm 2\sqrt2$, both positive (their product is $1>0$ and their sum is $6>0$), confirming positive definiteness.

@@@ matrix-quadratic-form-signature.md
---
title: Signature of a quadratic form
order: 41
category: linear/matrices
level: l2
difficulty: 4
tags: quadratic form, signature, diagonalization
date: 2026-11-03
---

## Statement

Determine the signature of the quadratic form
$$Q(x,y,z) = xy + yz + zx.$$

## Hint

Either diagonalize the symmetric matrix of $Q$, or use $Q = \tfrac12\big((x+y+z)^2 - (x^2+y^2+z^2)\big)$ and complete squares.

## Solution

Method 1: eigenvalues. The symmetric matrix of $Q$ is
$$A = \frac12\begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix} = \frac12(J - I),$$
where $J$ is the all-ones matrix. For $J - I$: the vector $(1,1,1)^T$ satisfies $(J-I)(1,1,1)^T = 2(1,1,1)^T$, and every vector $w$ with $x+y+z=0$ satisfies $Jw = 0$, so $(J-I)w = -w$. The plane $x+y+z=0$ has dimension $2$, so the eigenvalues of $J-I$ are $2$ (multiplicity $1$) and $-1$ (multiplicity $2$), and those of $A$ are $1$ (multiplicity $1$) and $-\frac12$ (multiplicity $2$). Since $A$ is symmetric, it is orthogonally diagonalizable, and in an orthonormal basis of eigenvectors with coordinates $(s,t,r)$,
$$Q = s^2 - \tfrac12 t^2 - \tfrac12 r^2.$$
One positive and two negative squares: signature $(1,2)$.

Method 2: completing squares. Put $u = x+y+z$, $v = x-y$, $w = y-z$. This change of variables is invertible (its matrix has determinant $3$), with $x = \frac{u+2v+w}{3}$, $y = \frac{u-v+w}{3}$, $z = \frac{u-v-2w}{3}$. A direct computation gives $x^2+y^2+z^2 = \frac{u^2}{3} + \frac23(v^2+vw+w^2)$, hence
$$Q = \frac{u^2}{3} - \frac13(v^2 + vw + w^2) = \frac{u^2}{3} - \frac13\Big(v + \frac w2\Big)^2 - \frac{w^2}{4}.$$
Again one positive and two negative squares, in the independent linear forms $u$, $v + \frac w2$, $w$.

Conclusion. The signature is $(1,2)$ (rank $3$, so $Q$ is nondegenerate and indefinite).

@@@ matrix-singular-value-decomposition-2x2.md
---
title: Singular value decomposition of a 2x2 matrix
order: 42
category: linear/matrices
level: l2
difficulty: 3
tags: SVD, singular values, orthogonal matrices
date: 2026-11-03
---

## Statement

Compute a singular value decomposition $A = U\Sigma V^T$ of
$$A = \begin{pmatrix} 3 & 0 \\ 4 & 5 \end{pmatrix},$$
with $U, V$ orthogonal and $\Sigma$ diagonal with decreasing nonnegative entries.

## Hint

The singular values are the square roots of the eigenvalues of $A^TA$; the columns of $V$ are orthonormal eigenvectors of $A^TA$; and $u_i = Av_i/\sigma_i$.

## Solution

Compute $A^TA$.
$$A^TA = \begin{pmatrix} 3 & 4 \\ 0 & 5 \end{pmatrix}\begin{pmatrix} 3 & 0 \\ 4 & 5 \end{pmatrix} = \begin{pmatrix} 25 & 20 \\ 20 & 25 \end{pmatrix}.$$

Singular values. Its eigenvalues are $25 \pm 20$, i.e. $45$ and $5$, with orthonormal eigenvectors $v_1 = \frac{1}{\sqrt2}(1,1)^T$ and $v_2 = \frac{1}{\sqrt2}(1,-1)^T$. So $\sigma_1 = \sqrt{45} = 3\sqrt5$ and $\sigma_2 = \sqrt5$.

Left singular vectors. $Av_1 = \frac{1}{\sqrt2}(3, 9)^T$, so $u_1 = \frac{Av_1}{\sigma_1} = \frac{1}{\sqrt{10}}(1,3)^T$. $Av_2 = \frac{1}{\sqrt2}(3,-1)^T$, so $u_2 = \frac{Av_2}{\sigma_2} = \frac{1}{\sqrt{10}}(3,-1)^T$. They are orthonormal: $\langle u_1, u_2\rangle = \frac{3-3}{10} = 0$ and $\|u_i\| = 1$.

Conclusion.
$$U = \frac{1}{\sqrt{10}}\begin{pmatrix} 1 & 3 \\ 3 & -1 \end{pmatrix}, \qquad \Sigma = \begin{pmatrix} 3\sqrt5 & 0 \\ 0 & \sqrt5 \end{pmatrix}, \qquad V = \frac{1}{\sqrt2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}.$$

Verification. $U\Sigma = \frac{1}{\sqrt{10}}\begin{pmatrix} 3\sqrt5 & 3\sqrt5 \\ 9\sqrt5 & -\sqrt5 \end{pmatrix}$ and, since $V^T = V$,
$$U\Sigma V^T = \frac{\sqrt5}{\sqrt{20}}\begin{pmatrix} 3+3 & 3-3 \\ 9-1 & 9+1 \end{pmatrix} = \frac12\begin{pmatrix} 6 & 0 \\ 8 & 10 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 4 & 5 \end{pmatrix} = A.$$

Remark. The SVD is not unique: replacing $(u_i, v_i)$ by $(-u_i, -v_i)$ for one index gives another valid decomposition, while the singular values $3\sqrt5 \ge \sqrt5$ are uniquely determined. (For a diagonal matrix such as $\operatorname{diag}(3,-2)$ the singular values are simply $3$ and $2$, the absolute values of the diagonal entries.)
