@@@ linear-map-definition-check.md
---
title: Checking linearity
order: 1
category: linear/linear-maps
level: lycee
difficulty: 1
tags: linear map, definition, examples
date: 2026-11-03
---

## Statement

Determine whether each map is linear:

(a) $f:\mathbb{R}^2\to\mathbb{R}^2$, $f(x,y)=(2x-y,\ x+3y)$;
(b) $g:\mathbb{R}^2\to\mathbb{R}$, $g(x,y)=xy$;
(c) $h:\mathbb{R}\to\mathbb{R}$, $h(x)=x+1$;
(d) $k:\mathbb{R}^2\to\mathbb{R}^2$, $k(x,y)=(x^2,\,y)$.

## Hint

A map $\varphi$ is linear if $\varphi(u+v)=\varphi(u)+\varphi(v)$ and $\varphi(\lambda u)=\lambda\varphi(u)$ for all vectors $u,v$ and scalars $\lambda$. A quick necessary condition is $\varphi(0)=0$ (take $\lambda=0$); it is not sufficient.

## Solution

**(a)** For $(x,y),(x',y')\in\mathbb{R}^2$ and $\lambda\in\mathbb{R}$:
$$f(\lambda(x,y))=(2\lambda x-\lambda y,\ \lambda x+3\lambda y)=\lambda f(x,y),$$
$$f\big((x,y)+(x',y')\big)=\big(2(x+x')-(y+y'),\ (x+x')+3(y+y')\big)=f(x,y)+f(x',y').$$
So $f$ is linear.

**(b)** $g(2,2)=4$ but $2g(1,1)=2$, so $g(2\cdot(1,1))\neq 2g(1,1)$. Not linear. (In general $g(\lambda x,\lambda y)=\lambda^2xy$.)

**(c)** $h(0)=1\neq0$, whereas a linear map satisfies $h(0)=h(0\cdot 0)=0\cdot h(0)=0$. Not linear.

**(d)** $k(2,0)=(4,0)$ but $2k(1,0)=(2,0)$, so homogeneity fails. Not linear. (Note that $k(0,0)=(0,0)$: the condition $\varphi(0)=0$ is necessary but not sufficient. The same remark applies to (b).)

**Conclusion.** Only (a) is linear.

@@@ linear-map-matrix.md
---
title: Matrix of a linear map
order: 2
category: linear/linear-maps
level: lycee
difficulty: 2
tags: matrix representation, canonical basis, linear map
date: 2026-11-03
---

## Statement

Let $f:\mathbb{R}^3\to\mathbb{R}^2$ be defined by $f(x,y,z)=(x+2y,\ 3y-z)$. Write the matrix of $f$ in the canonical bases.

## Hint

The columns of the matrix are the images of the canonical basis vectors.

## Solution

**Images.**
$$f(1,0,0)=(1,0), \qquad f(0,1,0)=(2,3), \qquad f(0,0,1)=(0,-1).$$

**Matrix.** These are the columns:
$$A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 3 & -1 \end{pmatrix}.$$

**Check.** $A\,(x,y,z)^T = (x+2y,\ 3y-z)^T$, which is $f(x,y,z)$.

@@@ linear-map-kernel-basic.md
---
title: Computing a kernel
order: 3
category: linear/linear-maps
level: l1
difficulty: 2
tags: kernel, linear map, basis
date: 2026-11-03
---

## Statement

Let $f:\mathbb{R}^3\to\mathbb{R}^3$ be defined by $f(x,y,z)=(x+y,\ y+z,\ x+2y+z)$. Compute $\ker f$.

## Hint

Solve $f(x,y,z)=(0,0,0)$.

## Solution

**System.**
$$x+y=0, \qquad y+z=0, \qquad x+2y+z=0.$$
From the first equation, $x=-y$; from the second, $z=-y$. The third equation then reads $-y+2y-y=0$, which is automatically satisfied (it is the sum of the first two).

**Kernel.**
$$\ker f=\{(-y,\ y,\ -y):\ y\in\mathbb{R}\}=\operatorname{span}\big((-1,1,-1)\big).$$

**Check.** $f(-1,1,-1)=(0,\,0,\,-1+2-1)=(0,0,0)$.

**Conclusion.** $\ker f$ is the line spanned by $(-1,1,-1)$. In particular $f$ is not injective.

@@@ linear-map-kernel-basis-3x3.md
---
title: Basis of a kernel
order: 4
category: linear/linear-maps
level: l1
difficulty: 3
tags: kernel, basis, linear map
date: 2026-11-03
---

## Statement

Let $f:\mathbb{R}^3\to\mathbb{R}^3$ have matrix
$$A = \begin{pmatrix} 1 & 1 & 2 \\ 2 & 2 & 4 \\ 1 & 0 & 1 \end{pmatrix}.$$
Find a basis of $\ker f$.

## Hint

Row-reduce $A$ and solve $Ax=0$.

## Solution

**Row reduction.** $R_2\leftarrow R_2-2R_1$ and $R_3\leftarrow R_3-R_1$:
$$\begin{pmatrix} 1 & 1 & 2 \\ 0 & 0 & 0 \\ 0 & -1 & -1 \end{pmatrix}.$$
Swapping $R_2$ and $R_3$:
$$\begin{pmatrix} 1 & 1 & 2 \\ 0 & -1 & -1 \\ 0 & 0 & 0 \end{pmatrix}.$$
The rank is $2$.

**Solving $Ax=0$.** The second row gives $-y-z=0$, i.e. $y=-z$. The first row gives $x=-y-2z=z-2z=-z$. Hence
$$(x,y,z)=(-z,\,-z,\,z)=z\,(-1,-1,1).$$

**Check.** $A(-1,-1,1)^T=(-1-1+2,\ -2-2+4,\ -1+0+1)^T=(0,0,0)^T$.

**Conclusion.** $\ker f=\operatorname{span}\big((-1,-1,1)\big)$; a basis is $\big((-1,-1,1)\big)$ and $\dim\ker f=1$.

@@@ linear-map-image-basic.md
---
title: Computing an image
order: 5
category: linear/linear-maps
level: l1
difficulty: 2
tags: image, linear map, generators
date: 2026-11-03
---

## Statement

Let $f:\mathbb{R}^2\to\mathbb{R}^3$ be defined by $f(x,y)=(x+y,\ x-y,\ 2x)$. Compute $\operatorname{Im} f$ and its dimension.

## Hint

The image is spanned by the images of a basis of $\mathbb{R}^2$.

## Solution

**Generators.** Since $(x,y)=x(1,0)+y(0,1)$, we have $f(x,y)=xf(1,0)+yf(0,1)$, so $\operatorname{Im} f=\operatorname{span}\big(f(1,0),f(0,1)\big)$ with
$$f(1,0)=(1,1,2), \qquad f(0,1)=(1,-1,0).$$

**Independence.** These two vectors are not proportional, so they are linearly independent.

**Conclusion.** $\operatorname{Im} f=\operatorname{span}\big((1,1,2),(1,-1,0)\big)$, a plane in $\mathbb{R}^3$, of dimension $2$.

**Remark (equation of the plane).** For every $(x,y)$, the image $(X,Y,Z)=f(x,y)$ satisfies $X+Y-Z=(x+y)+(x-y)-2x=0$. The plane $\{X+Y-Z=0\}$ has dimension $2$ and contains $\operatorname{Im} f$, which also has dimension $2$, so $\operatorname{Im} f=\{(X,Y,Z): X+Y-Z=0\}$.

@@@ linear-map-rank-basic.md
---
title: Rank of a linear map
order: 6
category: linear/linear-maps
level: l1
difficulty: 3
tags: rank, image dimension, matrix
date: 2026-11-03
---

## Statement

Let $f:\mathbb{R}^3\to\mathbb{R}^3$ be defined by
$$f(x,y,z)=(x+2y,\ 2x+4y,\ 3x+6y+z).$$
Compute $\operatorname{rank}(f)$ (the dimension of $\operatorname{Im} f$) and $\dim\ker f$.

## Hint

Write the matrix and row-reduce.

## Solution

**Matrix.**
$$A = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 4 & 0 \\ 3 & 6 & 1 \end{pmatrix}.$$

**Row reduction.** $R_2\leftarrow R_2-2R_1$ gives a zero row, and $R_3\leftarrow R_3-3R_1$ gives
$$\begin{pmatrix} 1 & 2 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}.$$
There are two nonzero rows, so $\operatorname{rank}(f)=2$.

**Kernel.** $Ax=0$ means $x+2y=0$ and $3x+6y+z=0$, hence $z=0$ and $x=-2y$: $\ker f=\operatorname{span}\big((-2,1,0)\big)$.

**Conclusion.** $\operatorname{rank}(f)=2$ and $\dim\ker f=1$, so $2+1=3=\dim\mathbb{R}^3$.

@@@ linear-map-rank-nullity.md
---
title: Rank-nullity theorem on an example
order: 7
category: linear/linear-maps
level: l1
difficulty: 3
tags: rank-nullity, rank, kernel dimension
date: 2026-11-03
---

## Statement

Let $f:\mathbb{R}^4\to\mathbb{R}^3$ be the linear map with matrix
$$A = \begin{pmatrix} 1 & 2 & 3 & 1 \\ 2 & 4 & 6 & 3 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$
Compute $\operatorname{rank}(f)$ and $\dim\ker f$ independently, and check the rank-nullity theorem.

## Hint

Row-reduce $A$ to find the rank, and solve $Ax=0$ directly to find the kernel.

## Solution

**Rank.** $R_2\leftarrow R_2-2R_1$:
$$\begin{pmatrix} 1 & 2 & 3 & 1 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$
$R_3\leftarrow R_3-R_2$:
$$\begin{pmatrix} 1 & 2 & 3 & 1 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}.$$
There are two nonzero rows, so $\operatorname{rank}(f)=2$. (Consistently, the columns $c_2=2c_1$ and $c_3=3c_1$ are redundant, while $c_1=(1,2,0)^T$ and $c_4=(1,3,1)^T$ are not proportional, so $\operatorname{Im} f=\operatorname{span}(c_1,c_4)$ has dimension $2$.)

**Kernel.** The reduced system is $x_4=0$ and $x_1+2x_2+3x_3+x_4=0$, i.e. $x_4=0$ and $x_1=-2x_2-3x_3$. Therefore
$$\ker f=\{(-2s-3t,\ s,\ t,\ 0): s,t\in\mathbb{R}\}=\operatorname{span}\big((-2,1,0,0),\,(-3,0,1,0)\big).$$
These two vectors are independent (look at the 2nd and 3rd coordinates), so $\dim\ker f=2$.

**Conclusion.** $\operatorname{rank}(f)=2$ and $\dim\ker f=2$, and $2+2=4=\dim\mathbb{R}^4$: the rank-nullity theorem is verified on this example.

@@@ linear-map-injective.md
---
title: An injective linear map
order: 8
category: linear/linear-maps
level: l1
difficulty: 3
tags: injectivity, kernel, linear map
date: 2026-11-03
---

## Statement

Let $f:\mathbb{R}^2\to\mathbb{R}^3$ be defined by $f(x,y)=(x+y,\ x-y,\ 2x)$. Show that $f$ is injective.

## Hint

A linear map is injective if and only if its kernel is $\{0\}$ (because $f(u)=f(v)\iff f(u-v)=0$). Compute $\ker f$.

## Solution

**Kernel.** Solve $x+y=0$, $x-y=0$, $2x=0$. Adding the first two equations gives $2x=0$, so $x=0$, and then $y=0$.

**Conclusion.** $\ker f=\{0\}$, so $f$ is injective. By rank-nullity, $\operatorname{rank}(f)=2-0=2$, which agrees with the plane found as the image of this same map in the exercise on computing an image.

@@@ linear-map-surjective.md
---
title: A surjective linear map
order: 9
category: linear/linear-maps
level: l1
difficulty: 3
tags: surjectivity, rank, linear map
date: 2026-11-03
---

## Statement

Let $f:\mathbb{R}^3\to\mathbb{R}^2$ be defined by $f(x,y,z)=(x+y,\ y+z)$. Show that $f$ is surjective, and compute $\ker f$.

## Hint

Find a preimage of an arbitrary vector $(a,b)$.

## Solution

**Surjectivity.** For any $(a,b)\in\mathbb{R}^2$, $f(a,0,b)=(a+0,\ 0+b)=(a,b)$. So $f$ is surjective.

**Kernel.** $x+y=0$ and $y+z=0$ give $y=-x$ and $z=-y=x$, so $\ker f=\operatorname{span}\big((1,-1,1)\big)$.

**Conclusion.** $f$ is surjective, $\operatorname{rank}(f)=2$, $\dim\ker f=1$, and $2+1=3=\dim\mathbb{R}^3$.

@@@ linear-map-isomorphism.md
---
title: An isomorphism
order: 10
category: linear/linear-maps
level: l1
difficulty: 3
tags: isomorphism, inverse, linear map
date: 2026-11-03
---

## Statement

Let $f:\mathbb{R}^2\to\mathbb{R}^2$ be defined by $f(x,y)=(2x+y,\ x-y)$. Show that $f$ is an isomorphism and compute $f^{-1}$.

## Hint

Show that $\ker f=\{0\}$, or compute the inverse of the matrix of $f$.

## Solution

**Matrix.**
$$A = \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}, \qquad \det A = -2-1=-3\neq0.$$
So $A$ is invertible and $f$ is an isomorphism.

**Inverse.**
$$A^{-1} = -\frac13\begin{pmatrix} -1 & -1 \\ -1 & 2 \end{pmatrix} = \frac13\begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix},$$
so $f^{-1}(u,v)=\tfrac13\,(u+v,\ u-2v)$.

**Verification.**
$$f\left(\frac{u+v}{3}, \frac{u-2v}{3}\right) = \left(\frac{2(u+v)+(u-2v)}{3},\ \frac{(u+v)-(u-2v)}{3}\right)=(u,v).$$
Since $A$ is square, this already gives $f^{-1}\circ f=\mathrm{id}$ as well.

@@@ linear-map-endomorphism-inverse.md
---
title: Inverse of an endomorphism
order: 11
category: linear/linear-maps
level: l1
difficulty: 3
tags: inverse, endomorphism, matrix inverse
date: 2026-11-03
---

## Statement

Let $f:\mathbb{R}^3\to\mathbb{R}^3$ have matrix
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 0 & 0 & 1 \end{pmatrix}.$$
Show that $f$ is an isomorphism and compute $f^{-1}(x,y,z)$.

## Hint

$A$ is upper triangular with nonzero diagonal entries, hence invertible. Solve $f(x',y',z')=(x,y,z)$ by back-substitution.

## Solution

**Invertibility.** $\det A = 1\cdot1\cdot1=1\neq0$, so $A$ is invertible and $f$ is an isomorphism.

**Inverse.** Solve $A(x',y',z')^T=(x,y,z)^T$:
$$x'+2y'+3z'=x, \qquad y'+4z'=y, \qquad z'=z.$$
Back-substituting: $z'=z$; $y'=y-4z$; $x'=x-2y'-3z'=x-2(y-4z)-3z=x-2y+5z$.

**Conclusion.**
$$f^{-1}(x,y,z)=(x-2y+5z,\ y-4z,\ z), \qquad A^{-1}=\begin{pmatrix} 1 & -2 & 5 \\ 0 & 1 & -4 \\ 0 & 0 & 1 \end{pmatrix}.$$

**Check.** Row by row, $AA^{-1}$ gives $\begin{pmatrix} 1 & -2+2 & 5-8+3 \\ 0 & 1 & -4+4 \\ 0 & 0 & 1 \end{pmatrix}=I$.

@@@ linear-map-matrix-composition.md
---
title: Composition and matrix product
order: 12
category: linear/linear-maps
level: l1
difficulty: 3
tags: composition, matrix product, representation
date: 2026-11-03
---

## Statement

Let $f:\mathbb{R}^n\to\mathbb{R}^m$ and $g:\mathbb{R}^m\to\mathbb{R}^p$ be linear maps with matrices $A$ (of size $m\times n$) and $B$ (of size $p\times m$) in the canonical bases. Show that the matrix of $g\circ f$ in the canonical bases is $BA$.

## Hint

The matrix of a linear map is the unique matrix $M$ with $\varphi(x)=Mx$ for all $x$; compute $g(f(x))$ with the matrix product.

## Solution

**Uniqueness of the matrix.** If $Mx=M'x$ for all $x$, then taking $x=e_j$ (canonical basis vector) shows that the $j$-th columns of $M$ and $M'$ coincide. So a linear map has exactly one matrix in the canonical bases.

**Matrix action.** For $x\in\mathbb{R}^n$, $f(x)=Ax\in\mathbb{R}^m$ and $g(y)=By\in\mathbb{R}^p$. By associativity of the matrix product,
$$(g\circ f)(x)=g(f(x))=B(Ax)=(BA)x.$$
Thus $BA$ (of size $p\times n$) satisfies the defining property of the matrix of $g\circ f$.

**Conclusion.** Composition of linear maps corresponds to multiplication of matrices, in the same order: $\operatorname{Mat}(g\circ f)=\operatorname{Mat}(g)\operatorname{Mat}(f)$.

@@@ linear-map-composition.md
---
title: Composition of linear maps
order: 13
category: linear/linear-maps
level: l1
difficulty: 3
tags: composition, matrix product, linear maps
date: 2026-11-03
---

## Statement

Let $f:\mathbb{R}^2\to\mathbb{R}^3$ have matrix
$$A=\begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 1 & 0 \end{pmatrix},$$
and $g:\mathbb{R}^3\to\mathbb{R}^2$ have matrix
$$B=\begin{pmatrix} 1 & 0 & 1 \\ 2 & 1 & 0 \end{pmatrix}.$$
Compute the matrix of $g\circ f$.

## Hint

The matrix of $g\circ f$ is $BA$.

## Solution

**Product.**
$$BA = \begin{pmatrix} 1 & 0 & 1 \\ 2 & 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1+0+1 & 2+0+0 \\ 2+0+0 & 4+1+0 \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 2 & 5 \end{pmatrix}.$$

**Check on the basis.** $f(1,0)=(1,0,1)$ and $g(1,0,1)=(1+1,\ 2)=(2,2)$: first column. $f(0,1)=(2,1,0)$ and $g(2,1,0)=(2,\ 4+1)=(2,5)$: second column.

**Conclusion.** The matrix of $g\circ f$ is $\begin{pmatrix} 2 & 2 \\ 2 & 5 \end{pmatrix}$.

@@@ linear-map-kernel-composition.md
---
title: Kernel of a composition
order: 14
category: linear/linear-maps
level: l1
difficulty: 3
tags: composition, kernel, inclusion
date: 2026-11-03
---

## Statement

Let $f:E\to F$ and $g:F\to G$ be linear maps. Show that $\ker f\subseteq\ker(g\circ f)$, with equality if and only if $\ker g\cap\operatorname{Im} f=\{0\}$ (that is, if and only if the restriction of $g$ to $\operatorname{Im} f$ is injective). In particular, equality holds if $g$ is injective.

## Hint

Note that $\ker(g\circ f)=\{x\in E: f(x)\in\ker g\}$.

## Solution

**Inclusion.** If $x\in\ker f$, then $f(x)=0$, so $(g\circ f)(x)=g(0)=0$.

**Equality if $\ker g\cap\operatorname{Im} f=\{0\}$.** Let $x\in\ker(g\circ f)$. Then $f(x)\in\ker g$ and $f(x)\in\operatorname{Im} f$, so $f(x)\in\ker g\cap\operatorname{Im} f=\{0\}$, i.e. $x\in\ker f$.

**Converse.** Suppose $\ker f=\ker(g\circ f)$ and let $w\in\ker g\cap\operatorname{Im} f$, say $w=f(x)$. Then $g(f(x))=g(w)=0$, so $x\in\ker(g\circ f)=\ker f$, hence $w=f(x)=0$.

**Special case.** If $g$ is injective, $\ker g=\{0\}$, so $\ker g\cap\operatorname{Im} f=\{0\}$.

**Conclusion.** $\ker f\subseteq\ker(g\circ f)$, with equality exactly when $\ker g\cap\operatorname{Im} f=\{0\}$.

@@@ linear-map-image-composition.md
---
title: Image of a composition
order: 15
category: linear/linear-maps
level: l1
difficulty: 4
tags: composition, image, inclusion
date: 2026-11-03
---

## Statement

Let $f:E\to F$ and $g:F\to G$ be linear maps.

1. Show that $\operatorname{Im}(g\circ f)\subseteq\operatorname{Im} g$.
2. Show that equality holds if and only if $\operatorname{Im} f+\ker g=F$. Deduce that equality holds when $f$ is surjective.
3. Show by an example that surjectivity (or injectivity) of $g$ is **not** enough for equality.

## Hint

The image of $g\circ f$ is $g(\operatorname{Im} f)$. For (2), if $g(y)=g(y')$ then $y-y'\in\ker g$.

## Solution

**(1)** $\operatorname{Im}(g\circ f)=g(\operatorname{Im} f)\subseteq g(F)=\operatorname{Im} g$.

**(2) Equality $\Leftarrow$.** Assume $\operatorname{Im} f+\ker g=F$ and let $w\in\operatorname{Im} g$, say $w=g(y)$. Write $y=y_f+k$ with $y_f\in\operatorname{Im} f$ and $k\in\ker g$. Then $w=g(y_f)+g(k)=g(y_f)\in g(\operatorname{Im} f)$.

**Equality $\Rightarrow$.** Assume $g(\operatorname{Im} f)=g(F)$ and let $y\in F$. Then $g(y)=g(y_f)$ for some $y_f\in\operatorname{Im} f$, so $k:=y-y_f\in\ker g$ and $y=y_f+k\in\operatorname{Im} f+\ker g$.

**Surjective $f$.** If $\operatorname{Im} f=F$, then $\operatorname{Im} f+\ker g=F$, so $\operatorname{Im}(g\circ f)=\operatorname{Im} g$.

**(3) Counterexample.** Take $f:\mathbb{R}\to\mathbb{R}$, $f=0$, and $g=\mathrm{id}_{\mathbb{R}}$ (which is both injective and surjective). Then $\operatorname{Im}(g\circ f)=\{0\}\neq\mathbb{R}=\operatorname{Im} g$. Here $\operatorname{Im} f+\ker g=\{0\}\neq\mathbb{R}$, as predicted by (2).

**Conclusion.** In general $\operatorname{Im}(g\circ f)\subseteq\operatorname{Im} g$, with equality exactly when $\operatorname{Im} f+\ker g=F$ (in particular when $f$ is surjective), and not merely when $g$ is surjective or injective.

@@@ linear-map-rank-inequality.md
---
title: Rank inequality for a composition
order: 16
category: linear/linear-maps
level: l1
difficulty: 4
tags: rank, composition, inequality
date: 2026-11-03
---

## Statement

Let $E,F,G$ be finite-dimensional vector spaces and $f:E\to F$, $g:F\to G$ linear maps. Show that
$$\operatorname{rank}(g\circ f)\ge\operatorname{rank}(f)+\operatorname{rank}(g)-\dim F.$$

## Hint

Apply rank-nullity to the restriction of $f$ to the subspace $f^{-1}(\ker g)=\{x\in E: f(x)\in\ker g\}$.

## Solution

**Kernel of the composition.** $\ker(g\circ f)=\{x: g(f(x))=0\}=f^{-1}(\ker g)$.

**Dimension bound.** Let $N=f^{-1}(\ker g)$ and let $h:N\to\ker g$ be the restriction of $f$ to $N$ (it takes values in $\ker g$ by definition of $N$). Then $\ker h=\ker f$, because $\ker f\subseteq N$. By rank-nullity applied to $h$,
$$\dim N=\dim\ker f+\dim\operatorname{Im} h\le\dim\ker f+\dim\ker g.$$
Thus $\dim\ker(g\circ f)\le\dim\ker f+\dim\ker g$.

**Inequality.** By rank-nullity for $g\circ f$, $f$ and $g$:
$$\operatorname{rank}(g\circ f)=\dim E-\dim\ker(g\circ f)\ge\dim E-\dim\ker f-\dim\ker g,$$
and $\dim E-\dim\ker f=\operatorname{rank}(f)$, $-\dim\ker g=\operatorname{rank}(g)-\dim F$. Hence
$$\operatorname{rank}(g\circ f)\ge\operatorname{rank}(f)+\operatorname{rank}(g)-\dim F.$$

**Conclusion.** This is Sylvester's rank inequality. For matrices $A\in\mathcal{M}_{p,n}$, $B\in\mathcal{M}_{n,q}$ it reads $\operatorname{rank}(AB)\ge\operatorname{rank}A+\operatorname{rank}B-n$.

@@@ linear-map-matrix-rank-invariance.md
---
title: Rank is invariant under invertible multiplications
order: 17
category: linear/linear-maps
level: l1
difficulty: 3
tags: rank, invertible matrices, invariance
date: 2026-11-03
---

## Statement

Let $A\in\mathcal{M}_{m,n}(\mathbb{R})$, $P\in GL_m(\mathbb{R})$, $Q\in GL_n(\mathbb{R})$, and recall $\operatorname{rank}(M)=\dim\operatorname{Im} M$. Show that
$$\operatorname{rank}(PA)=\operatorname{rank}(A), \qquad \operatorname{rank}(AQ)=\operatorname{rank}(A), \qquad \operatorname{rank}(PAQ)=\operatorname{rank}(A).$$

## Hint

Multiplication by an invertible matrix is an isomorphism, hence preserves dimensions of subspaces.

## Solution

**$PA$.** $\operatorname{Im}(PA)=P(\operatorname{Im} A)$. Since $x\mapsto Px$ is an isomorphism of $\mathbb{R}^m$, it maps the subspace $\operatorname{Im} A$ onto a subspace of the same dimension. Thus $\operatorname{rank}(PA)=\operatorname{rank}(A)$.

**$AQ$.** Since $Q$ is invertible, $Q(\mathbb{R}^n)=\mathbb{R}^n$, so $\operatorname{Im}(AQ)=A(Q(\mathbb{R}^n))=A(\mathbb{R}^n)=\operatorname{Im} A$. Thus $\operatorname{rank}(AQ)=\operatorname{rank}(A)$.

**$PAQ$.** Apply the first result to the matrix $AQ$, then the second: $\operatorname{rank}(P(AQ))=\operatorname{rank}(AQ)=\operatorname{rank}(A)$.

**Conclusion.** The rank is unchanged by left and right multiplication by invertible matrices.

@@@ linear-map-change-of-basis.md
---
title: Change of basis for a linear map
order: 18
category: linear/linear-maps
level: l1
difficulty: 4
tags: change of basis, matrix representation, similarity
date: 2026-11-03
---

## Statement

Let $f:\mathbb{R}^2\to\mathbb{R}^2$ have matrix $A=\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ in the canonical basis. Compute the matrix of $f$ in the basis $\mathcal{B}=\big((1,1),(1,-1)\big)$.

## Hint

Let $P$ be the matrix whose columns are the vectors of $\mathcal{B}$ written in the canonical basis. If $X'$ are the coordinates of a vector in $\mathcal{B}$, its canonical coordinates are $X=PX'$. The matrix of $f$ in $\mathcal{B}$ is $P^{-1}AP$.

## Solution

**Why $P^{-1}AP$.** Let $x$ have coordinates $X'$ in $\mathcal{B}$ and $X=PX'$ in the canonical basis. Then $f(x)$ has canonical coordinates $AX=APX'$, hence coordinates $P^{-1}APX'$ in $\mathcal{B}$.

**Matrix $P$.**
$$P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, \qquad \det P=-2, \qquad P^{-1} = \frac12\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}.$$

**New matrix.**
$$AP=\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} 3 & 1 \\ 3 & -1 \end{pmatrix},$$
$$P^{-1}AP=\frac12\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 3 & 1 \\ 3 & -1 \end{pmatrix} = \frac12\begin{pmatrix} 6 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}.$$

**Conclusion.** In $\mathcal{B}$ the matrix of $f$ is $\operatorname{diag}(3,1)$. This is expected: $f(1,1)=3(1,1)$ and $f(1,-1)=(1,-1)$, so the vectors of $\mathcal{B}$ are eigenvectors for the eigenvalues $3$ and $1$.

@@@ linear-map-similarity-properties.md
---
title: Invariants under similarity
order: 19
category: linear/linear-maps
level: l1
difficulty: 3
tags: similarity, trace, determinant, rank, characteristic polynomial
date: 2026-11-03
---

## Statement

Two $n\times n$ matrices $A$ and $B$ are similar if $B=P^{-1}AP$ for some invertible $P$. Show that similar matrices have the same rank, trace, determinant, and characteristic polynomial.

## Hint

For the rank, use the invariance under multiplication by invertible matrices. For the trace, use $\operatorname{tr}(XY)=\operatorname{tr}(YX)$. For the determinant and characteristic polynomial, use multiplicativity of $\det$.

## Solution

**Rank.** By the invariance of the rank under left and right multiplication by invertible matrices, $\operatorname{rank}(P^{-1}AP)=\operatorname{rank}(A)$.

**Trace.** For square matrices, $\operatorname{tr}(XY)=\sum_{i,j}x_{ij}y_{ji}=\operatorname{tr}(YX)$. With $X=P^{-1}$ and $Y=AP$:
$$\operatorname{tr}(B)=\operatorname{tr}\big(P^{-1}(AP)\big)=\operatorname{tr}\big((AP)P^{-1}\big)=\operatorname{tr}(A).$$

**Determinant.** $\det B=\det(P^{-1})\det(A)\det(P)=\det(A)$, since $\det(P^{-1})\det(P)=\det(I)=1$.

**Characteristic polynomial.** Since $P^{-1}(\lambda I)P=\lambda I$,
$$\det(B-\lambda I)=\det\big(P^{-1}(A-\lambda I)P\big)=\det(A-\lambda I).$$

**Conclusion.** Rank, trace, determinant, and characteristic polynomial are invariants of the similarity class. In particular they are attributes of an endomorphism, independent of the chosen basis.

@@@ linear-map-projection.md
---
title: A linear projection
order: 20
category: linear/linear-maps
level: l1
difficulty: 2
tags: projection, idempotence, kernel and image
date: 2026-11-03
---

## Statement

Let $p:\mathbb{R}^2\to\mathbb{R}^2$ be defined by $p(x,y)=(x,0)$. Show that $p$ is linear, compute $\ker p$ and $\operatorname{Im} p$, and verify $p\circ p=p$.

## Hint

$p$ keeps the first coordinate and kills the second.

## Solution

**Linearity.** Let $u=(x,y)$, $v=(x',y')$ and $\lambda,\mu\in\mathbb{R}$. Then
$$p(\lambda u+\mu v)=p(\lambda x+\mu x',\ \lambda y+\mu y')=(\lambda x+\mu x',\ 0)=\lambda(x,0)+\mu(x',0)=\lambda p(u)+\mu p(v).$$

**Kernel.** $p(x,y)=0\iff x=0$, so $\ker p=\{(0,y)\}=\operatorname{span}\big((0,1)\big)$, the $y$-axis.

**Image.** $\operatorname{Im} p=\{(x,0): x\in\mathbb{R}\}=\operatorname{span}\big((1,0)\big)$, the $x$-axis.

**Idempotence.** $p(p(x,y))=p(x,0)=(x,0)=p(x,y)$.

**Conclusion.** $p$ is the projection onto the $x$-axis parallel to the $y$-axis, and $\mathbb{R}^2=\ker p\oplus\operatorname{Im} p$.

@@@ linear-map-symmetry.md
---
title: A linear symmetry
order: 21
category: linear/linear-maps
level: l1
difficulty: 2
tags: symmetry, involution, linear map
date: 2026-11-03
---

## Statement

Let $s:\mathbb{R}^2\to\mathbb{R}^2$ be defined by $s(x,y)=(y,x)$. Show that $s$ is linear and $s\circ s=\mathrm{id}$. Find its eigenvalues and eigenspaces.

## Hint

Direct check; for the eigenspaces, solve $s(v)=\pm v$.

## Solution

**Linearity.** $s(\lambda(x,y))=(\lambda y,\lambda x)=\lambda s(x,y)$ and $s\big((x,y)+(x',y')\big)=(y+y',\ x+x')=s(x,y)+s(x',y')$.

**Involution.** $s(s(x,y))=s(y,x)=(x,y)$, so $s\circ s=\mathrm{id}$.

**Eigenspaces.** $s(v)=v\iff y=x$: $E_1=\operatorname{span}\big((1,1)\big)$. $s(v)=-v\iff y=-x$: $E_{-1}=\operatorname{span}\big((1,-1)\big)$. The vectors $(1,1)$ and $(1,-1)$ are independent, so $\mathbb{R}^2=E_1\oplus E_{-1}$ and $s$ is diagonalizable with eigenvalues $1$ and $-1$.

**Conclusion.** $s$ is a linear involution (the reflection across the line $y=x$, parallel to the direction $(1,-1)$).

@@@ linear-map-nilpotent.md
---
title: A nilpotent endomorphism
order: 22
category: linear/linear-maps
level: l1
difficulty: 3
tags: nilpotent, kernel, image
date: 2026-11-03
---

## Statement

Let $f:\mathbb{R}^3\to\mathbb{R}^3$ be defined by $f(x,y,z)=(y,z,0)$. Show that $f$ is linear, compute $f^2$ and $f^3$, and describe $\ker f$ and $\operatorname{Im} f$.

## Hint

Apply $f$ repeatedly.

## Solution

**Linearity.** Each coordinate of $f(x,y,z)$ is a linear form in $(x,y,z)$ (namely $y$, $z$, $0$), so $f$ is linear.

**Powers.** $f^2(x,y,z)=f(y,z,0)=(z,0,0)$ and $f^3(x,y,z)=f(z,0,0)=(0,0,0)$. So $f^3=0$ while $f^2\neq0$: $f$ is nilpotent of index exactly $3$.

**Kernel.** $f(x,y,z)=0\iff y=z=0$, so $\ker f=\operatorname{span}\big((1,0,0)\big)$, of dimension $1$.

**Image.** $\operatorname{Im} f=\{(y,z,0)\}=\operatorname{span}\big((1,0,0),(0,1,0)\big)$, of dimension $2$.

**Check.** $\dim\ker f+\dim\operatorname{Im} f=1+2=3$.

**Conclusion.** $f$ is nilpotent of index $3$, and $\ker f=\operatorname{span}(e_1)\subsetneq\operatorname{Im} f=\operatorname{span}(e_1,e_2)$. In particular $\ker f\cap\operatorname{Im} f\neq\{0\}$.

@@@ linear-map-kernel-image-sum.md
---
title: Kernel and image of an endomorphism - when are they supplementary?
order: 23
category: linear/linear-maps
level: l1
difficulty: 4
tags: kernel, image, direct sum, endomorphism
date: 2026-11-03
---

## Statement

Let $f:E\to E$ be a linear endomorphism of a finite-dimensional space $E$.

1. Show that if $f$ is invertible, then $E=\ker f\oplus\operatorname{Im} f$.
2. Show by an example that the converse is false.
3. Show that the following are equivalent: (i) $\ker f\cap\operatorname{Im} f=\{0\}$; (ii) $\ker f^2=\ker f$; (iii) $E=\ker f\oplus\operatorname{Im} f$.

## Hint

For (3), note that $\ker f\subseteq\ker f^2$ always. Use rank-nullity for (i)$\Rightarrow$(iii).

## Solution

**(1)** If $f$ is invertible, then $\ker f=\{0\}$ and $\operatorname{Im} f=E$, so $\ker f+\operatorname{Im} f=E$ and $\ker f\cap\operatorname{Im} f=\{0\}$.

**(2)** On $\mathbb{R}^2$, let $p(x,y)=(x,0)$. Then $\ker p=\operatorname{span}((0,1))$, $\operatorname{Im} p=\operatorname{span}((1,0))$ and $\mathbb{R}^2=\ker p\oplus\operatorname{Im} p$, but $p$ is not invertible. (Any projection onto a proper subspace works.) So $E=\ker f\oplus\operatorname{Im} f$ does not imply that $f$ is invertible.

**(3) (i)$\Rightarrow$(ii).** Let $x\in\ker f^2$. Then $f(x)\in\ker f\cap\operatorname{Im} f=\{0\}$, so $x\in\ker f$. With $\ker f\subseteq\ker f^2$, we get $\ker f^2=\ker f$.

**(ii)$\Rightarrow$(i).** Let $w\in\ker f\cap\operatorname{Im} f$, say $w=f(y)$. Then $f^2(y)=f(w)=0$, so $y\in\ker f^2=\ker f$ and $w=f(y)=0$.

**(i)$\Rightarrow$(iii).** By the dimension formula for a sum, $\dim(\ker f+\operatorname{Im} f)=\dim\ker f+\dim\operatorname{Im} f-\dim(\ker f\cap\operatorname{Im} f)=\dim\ker f+\dim\operatorname{Im} f=\dim E$ (rank-nullity). So $\ker f+\operatorname{Im} f=E$, and the sum is direct since the intersection is $\{0\}$.

**(iii)$\Rightarrow$(i).** A direct sum has trivial intersection.

**Conclusion.** Invertibility implies $E=\ker f\oplus\operatorname{Im} f$, but not conversely. The decomposition holds exactly when $\ker f\cap\operatorname{Im} f=\{0\}$, equivalently $\ker f^2=\ker f$. For the nilpotent map of the previous exercise, $\ker f\cap\operatorname{Im} f\neq\{0\}$, so the decomposition fails there.

@@@ linear-map-orthogonal-projection.md
---
title: Projection onto a subspace
order: 24
category: linear/linear-maps
level: l1
difficulty: 4
tags: orthogonal projection, linear map, kernel and image
date: 2026-11-03
---

## Statement

Let $F\subseteq\mathbb{R}^n$ be a subspace with orthonormal basis $(u_1,\ldots,u_k)$ for the standard inner product. Define $p(x)=\sum_{i=1}^k\langle x,u_i\rangle u_i$. Show that $p$ is linear, compute $\ker p$ and $\operatorname{Im} p$, and check $p^2=p$.

## Hint

Linearity of $p$ comes from linearity of the inner product in its first variable. For the kernel, use the fact that the $u_i$ are linearly independent and span $F$.

## Solution

**Linearity.** For $x,y\in\mathbb{R}^n$ and $\lambda\in\mathbb{R}$:
$$p(x+\lambda y)=\sum_i\big(\langle x,u_i\rangle+\lambda\langle y,u_i\rangle\big)u_i=p(x)+\lambda p(y).$$

**Image.** $p(x)$ is a combination of the $u_i$, so $\operatorname{Im} p\subseteq F$. Conversely, if $x\in F$, its expansion in the orthonormal basis is $x=\sum_i\langle x,u_i\rangle u_i=p(x)$, so $x\in\operatorname{Im} p$. Hence $\operatorname{Im} p=F$, and $p$ is the identity on $F$.

**Kernel.** The $u_i$ are linearly independent (orthonormal), so $p(x)=0\iff\langle x,u_i\rangle=0$ for all $i$. Since the $u_i$ span $F$, this holds iff $x\perp F$. Hence $\ker p=F^\perp$.

**Idempotence.** $p(x)\in F$ and $p$ is the identity on $F$, so $p(p(x))=p(x)$.

**Conclusion.** $p$ is the orthogonal projection onto $F$: $\operatorname{Im} p=F$, $\ker p=F^\perp$, $p^2=p$. Moreover $x=p(x)+(x-p(x))$ with $p(x)\in F$ and $x-p(x)\in\ker p=F^\perp$ (because $p(x-p(x))=p(x)-p^2(x)=0$), so $\mathbb{R}^n=F\oplus F^\perp$.

@@@ linear-map-matrix-kernel-image-relation.md
---
title: Kernel and image of $A$ and $A^T$
order: 25
category: linear/linear-maps
level: l1
difficulty: 4
tags: kernel, image, transpose, orthogonal complement
date: 2026-11-03
---

## Statement

Let $A\in\mathcal{M}_{m,n}(\mathbb{R})$. Show that
$$\ker A=(\operatorname{Im} A^T)^\perp, \qquad \operatorname{Im} A=(\ker A^T)^\perp,$$
where the orthogonal complements are taken in $\mathbb{R}^n$ and $\mathbb{R}^m$ respectively (standard inner products). Deduce that $\operatorname{rank}A=\operatorname{rank}A^T$.

## Hint

Use the identity $\langle Ax,y\rangle=\langle x,A^Ty\rangle$, and the fact that $(W^\perp)^\perp=W$ for every subspace $W$ of $\mathbb{R}^k$.

## Solution

**Two standard facts.**

(i) $\langle Ax,y\rangle=\sum_i\big(\sum_ja_{ij}x_j\big)y_i=\sum_jx_j\big(\sum_ia_{ij}y_i\big)=\langle x,A^Ty\rangle$.

(ii) For a subspace $W\subseteq\mathbb{R}^k$: extending an orthonormal basis of $W$ shows $\mathbb{R}^k=W\oplus W^\perp$, so $\dim W^\perp=k-\dim W$. Also $W\subseteq(W^\perp)^\perp$, and both have dimension $\dim W$, hence $(W^\perp)^\perp=W$.

**First identity.** For $x\in\mathbb{R}^n$:
$$x\in\ker A\iff Ax=0\iff\langle Ax,y\rangle=0\ \forall y\in\mathbb{R}^m\iff\langle x,A^Ty\rangle=0\ \forall y\in\mathbb{R}^m.$$
The last condition says that $x$ is orthogonal to every vector $A^Ty$, i.e. to $\operatorname{Im} A^T$. Hence $\ker A=(\operatorname{Im} A^T)^\perp$.

**Second identity.** Apply the first identity to $A^T$ (whose transpose is $A$): $\ker A^T=(\operatorname{Im} A)^\perp$. Taking orthogonal complements and using (ii): $(\ker A^T)^\perp=\operatorname{Im} A$.

**Rank.** By (ii), $\dim\ker A=\dim(\operatorname{Im} A^T)^\perp=n-\operatorname{rank}A^T$. By rank-nullity, $\dim\ker A=n-\operatorname{rank}A$. Hence $\operatorname{rank}A=\operatorname{rank}A^T$ (row rank equals column rank).

**Conclusion.** Both identities hold, and they imply $\operatorname{rank}A=\operatorname{rank}A^T$.

@@@ linear-map-nonzero-eigenvalue.md
---
title: Eigenvectors and injectivity
order: 26
category: linear/linear-maps
level: l1
difficulty: 3
tags: eigenvectors, injectivity, kernel
date: 2026-11-03
---

## Statement

Let $f:E\to E$ be a linear endomorphism. Show that $f$ is injective if and only if $0$ is not an eigenvalue of $f$.

## Hint

$0$ is an eigenvalue iff there is a nonzero $v$ with $f(v)=0$, i.e. $\ker f\neq\{0\}$.

## Solution

**Injectivity and kernel.** A linear map is injective iff $\ker f=\{0\}$: indeed $f(u)=f(v)\iff f(u-v)=0\iff u-v\in\ker f$.

**$0$ is an eigenvalue $\iff\ker f\neq\{0\}$.** By definition, $0$ is an eigenvalue iff there exists $v\neq0$ with $f(v)=0\cdot v=0$, i.e. iff $\ker f$ contains a nonzero vector.

**Conclusion.** $f$ is injective $\iff\ker f=\{0\}\iff0$ is not an eigenvalue.

**Remark.** If $E$ is finite-dimensional, injective is equivalent to invertible (rank-nullity), so $f$ is invertible iff $0$ is not an eigenvalue.

@@@ linear-map-diagonalization-criterion.md
---
title: Diagonalizability and the sum of eigenspaces
order: 27
category: linear/linear-maps
level: l1
difficulty: 4
tags: diagonalization, eigenspaces, dimension
date: 2026-11-03
---

## Statement

Let $\mathbb{K}=\mathbb{R}$ or $\mathbb{C}$, and let $f:E\to E$ be a linear endomorphism of an $n$-dimensional $\mathbb{K}$-vector space. For $\lambda\in\mathbb{K}$ put $E_\lambda=\ker(f-\lambda\,\mathrm{id})$. Call $f$ diagonalizable if $E$ has a basis of eigenvectors of $f$ (equivalently, the matrix of $f$ in some basis is diagonal).

Show that $f$ is diagonalizable if and only if $\sum_\lambda\dim E_\lambda=n$, the sum running over the eigenvalues $\lambda\in\mathbb{K}$ of $f$.

## Hint

First show that eigenspaces for distinct eigenvalues are in direct sum. Then compare a basis of eigenvectors with the eigenspaces.

## Solution

**Lemma.** If $\lambda_1,\ldots,\lambda_r$ are distinct and $w_i\in E_{\lambda_i}$ satisfy $w_1+\cdots+w_r=0$, then all $w_i=0$.

*Proof, by induction on $r$.* The case $r=1$ is trivial. For $r\ge2$, apply $f-\lambda_r\,\mathrm{id}$: it maps $w_i$ to $(\lambda_i-\lambda_r)w_i\in E_{\lambda_i}$ and kills $w_r$. So $\sum_{i<r}(\lambda_i-\lambda_r)w_i=0$, and by induction $(\lambda_i-\lambda_r)w_i=0$, hence $w_i=0$ for $i<r$ (as $\lambda_i\neq\lambda_r$). Then $w_r=0$. $\square$

Consequently the sum of the eigenspaces is direct and $\sum_\lambda\dim E_\lambda=\dim\bigoplus_\lambda E_\lambda\le n$.

**($\Rightarrow$)** Let $(b_1,\ldots,b_n)$ be a basis of eigenvectors, with $f(b_j)=d_jb_j$. For each eigenvalue $\lambda$, let $n_\lambda$ be the number of $j$ with $d_j=\lambda$. These $b_j$ are independent vectors of $E_\lambda$, so $n_\lambda\le\dim E_\lambda$. Since $\sum_\lambda n_\lambda=n$, we get $n\le\sum_\lambda\dim E_\lambda\le n$, hence equality.

**($\Leftarrow$)** Suppose $\sum_\lambda\dim E_\lambda=n$. Choose a basis of each $E_\lambda$ and let $\mathcal{B}$ be the union of these bases: it has $n$ vectors. It is linearly independent: a vanishing combination groups into one vector $w_\lambda\in E_\lambda$ per eigenvalue with $\sum_\lambda w_\lambda=0$; by the Lemma every $w_\lambda=0$, and then all coefficients vanish because each family is a basis of $E_\lambda$. So $\mathcal{B}$ is a basis of $E$ made of eigenvectors, and $f$ is diagonalizable.

**Conclusion.** $f$ is diagonalizable iff $\sum_\lambda\dim E_\lambda=\dim E$.

@@@ linear-map-invariant-subspace.md
---
title: Invariant subspaces
order: 28
category: linear/linear-maps
level: l1
difficulty: 2
tags: invariant subspace, endomorphism, restriction
date: 2026-11-03
---

## Statement

Let $f:E\to E$ be a linear endomorphism and $F$ a subspace of $E$. We say $F$ is $f$-invariant if $f(F)\subseteq F$. Show that if $F$ is $f$-invariant, the restriction $f|_F:F\to F$ is a well-defined linear map. Show also that every eigenspace of $f$ is $f$-invariant.

## Hint

For $x\in F$, $f|_F(x)=f(x)$ lies in $F$ by invariance. Linearity is inherited from $f$.

## Solution

**Well-defined.** If $x\in F$, then $f(x)\in f(F)\subseteq F$, so $f|_F$ really maps $F$ into $F$.

**Linearity.** For $x,y\in F$ and $\lambda\in\mathbb{R}$: $f|_F(x+\lambda y)=f(x+\lambda y)=f(x)+\lambda f(y)=f|_F(x)+\lambda f|_F(y)$.

**Eigenspaces.** Let $x\in E_\lambda=\ker(f-\lambda\,\mathrm{id})$, so $f(x)=\lambda x$. Then $f(x)=\lambda x\in E_\lambda$ because $E_\lambda$ is a subspace. In particular, the line spanned by an eigenvector is $f$-invariant.

**Conclusion.** $f|_F$ is a well-defined linear endomorphism of $F$, and eigenspaces are invariant.

**Remark (block form).** If $(b_1,\ldots,b_k)$ is a basis of $F$ completed to a basis of $E$, then $f(b_j)\in F$ for $j\le k$, so the matrix of $f$ has the block form $\begin{pmatrix} A' & * \\ 0 & A'' \end{pmatrix}$, where $A'$ is the matrix of $f|_F$.

@@@ linear-map-quotient-induced.md
---
title: Induced map on a quotient
order: 29
category: linear/linear-maps
level: l2
difficulty: 3
tags: quotient space, induced map, well-defined
date: 2026-11-03
---

## Statement

Let $f:E\to E$ be a linear endomorphism and $F$ an $f$-invariant subspace. Recall that the quotient $E/F$ is the set of classes $[x]=x+F$, with $[x]=[y]\iff x-y\in F$, and vector space operations $[x]+\lambda[y]=[x+\lambda y]$. Show that $f$ induces a well-defined linear map $\bar f:E/F\to E/F$ by $\bar f([x])=[f(x)]$.

## Hint

Show that if $[x]=[y]$, then $[f(x)]=[f(y)]$.

## Solution

**Well-defined.** Suppose $[x]=[y]$. Then $x-y\in F$. Since $F$ is $f$-invariant, $f(x-y)=f(x)-f(y)\in F$, i.e. $[f(x)]=[f(y)]$. So the class $[f(x)]$ depends only on the class $[x]$, and $\bar f$ is well-defined.

**Linearity.**
$$\bar f\big([x]+\lambda[y]\big)=\bar f\big([x+\lambda y]\big)=[f(x+\lambda y)]=[f(x)+\lambda f(y)]=[f(x)]+\lambda[f(y)]=\bar f([x])+\lambda\bar f([y]).$$

**Conclusion.** $\bar f$ is a well-defined linear endomorphism of $E/F$, called the map induced by $f$ on the quotient. Invariance of $F$ is exactly what is needed for well-definedness.

**Remark.** In the block form of the previous exercise, $\bar f$ is represented by the block $A''$.
