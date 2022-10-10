# Notes on Matrices

# Table of Contents

- [Notes on Matrices](#notes-on-matrices)
- [Table of Contents](#table-of-contents)
- [Matrix Rules](#matrix-rules)
    - [Transpose](#transpose)
- [Matrix Addition](#matrix-addition)
- [\end{bmatrix}](#endbmatrix)
- [Matrix Multiplication](#matrix-multiplication)
- [Transpose](#transpose-1)
- [\end{bmatrix}^{T}](#endbmatrixt)

# Matrix Rules

### Transpose

- Where A and B are matrices
$$(A*B)^{T} = B^{T}*A^{T}$$

# Matrix Addition

- Matrices have to be the same size

$$\begin{bmatrix}
    4 & 5\\
    6 & 7\\
\end{bmatrix}
+
\begin{bmatrix}
    1 & 2\\
    3 & 4\\
\end{bmatrix}
=
\begin{bmatrix}
    5 & 7\\
    10 & 11\\
\end{bmatrix}
$$

# Matrix Multiplication

$$\begin{bmatrix}
    A & B & C\\
    D & E & F\\
\end{bmatrix}
*
\begin{bmatrix}
    1 & 4\\
    2 & 5\\
    3 & 6\\
\end{bmatrix}$$

$$==$$

$$AA=(A*1)+(B*2)+(C*3)$$
$$BB=(A*4)+(B*5)+(C*6)$$
$$CC=(D*1)+(E*2)+(F*3)$$
$$DD=(D*4)+(E*5)+(F*^)$$

$$==$$

$$\begin{bmatrix}
    AA & BB\\
    CC & DD\\
\end{bmatrix}$$

# Transpose

$$\begin{bmatrix}
    A & B & C\\
    D & E & F\\
\end{bmatrix}^{T}
=
\begin{bmatrix}
    A & D\\
    B & E\\
    C & F\\
\end{bmatrix}$$






