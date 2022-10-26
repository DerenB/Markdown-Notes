# Graphics

Fall 2022
Evett

# Table of Contents

- [Graphics](#graphics)
- [Table of Contents](#table-of-contents)
- [10/19 Class Notes](#1019-class-notes)
    - [Orthogonal Projection Matrices](#orthogonal-projection-matrices)
    - [Orthogonal Matrix](#orthogonal-matrix)
    - [Oblique Projections](#oblique-projections)
    - [Perspective Projection Matrices](#perspective-projection-matrices)
- [10/24 Notes](#1024-notes)
- [Midterm Topics](#midterm-topics)

# 10/19 Class Notes

### Orthogonal Projection Matrices

- Normalization
  - Rather than derive a different projection matrix for each type of projection, we can convert all projections to orthogonal projections with the default view volume
  - this strategy allows us to use standard transformations in the pipeline and makes for efficient clipping
- Stay in 4-dimensional homogeneous coordinates through both the modelview and projection transformations
  - Both these transformations are non-singular
  - Default to identity matrices (orthogonal view)
- Normalization lets us clip against simple cube regardless of type of projection
- Delay final projection until end
  - Important for hidden-surface removal to retain depth information as long as possible

### Orthogonal Matrix

- Two steps:
  - Move center to origin (note that near and far are distances from the camera)
    - T(-(left+right)/2, -(bottom+top)/2,(near+far)/2)
  - Scale to have sides of length 2
    - S(2/(left-right),2/(top-bottom),2/(near-far))
- Final Projection:
  - Set $z=0$
  - Equivalent to the homogeneous coordinate transformation:
$$M_{orth}=\begin{bmatrix}
    1 & 0 & 0 & 0\\
    0 & 1 & 0 & 0\\
    0 & 0 & 0 & 0\\
    0 & 0 & 0 & 1\\
\end{bmatrix}$$
  - Hence, general orthogonal projection in 4D is $P=M_{orth}ST$

### Oblique Projections

- The OpenGL projection functions cannot produce general parallel projections 
- However, if we look at the example of the cube it appears that the cube has been sheared
- $Oblique Projection=Shear+Orthogonal Projection$
- Shear Matrix:
  - *xy* shear (*z* values unchanged)
$$H(\theta,\phi)=\begin{bmatrix}
    1 & 0 & -cot\theta & 0\\
    0 & 1 & -cot\phi & 0\\
    0 & 0 & 1 & 0\\
    0 & 0 & 0 & 1\\
\end{bmatrix}$$
- Projection Matrix
  - $P=M_{orth}H(\theta,\phi)$
- General Case:
  - $P=M_{orth}STH(\theta,\phi)$

### Perspective Projection Matrices

- Consider a simple perspective with the COP at the origin, the near clipping plane at $z=-1$ and a 90 degree field of view determined by the planes:
  - $x=\plusmn z$
  - $y=\plusmn z$
- Simple projection matrix in homogeneous coordinates:
$$M=\begin{bmatrix}
    1 & 0 & 0 & 0\\
    0 & 1 & 0 & 0\\
    0 & 0 & 1 & 0\\
    0 & 0 & -1 & 0\\
\end{bmatrix}$$

$$N=\begin{bmatrix}
    1 & 0 & 0 & 0\\
    0 & 1 & 0 & 0\\
    0 & 0 & \alpha & \beta\\
    0 & 0 & -1 & 0\\
\end{bmatrix}$$

- After perspective division, the point (x,y,z,1) goes to:
  - $x"=\frac{x}{z}$
  - $y"=\frac{y}{z}$
  - $Z"=-(\alpha+\frac{\beta}{z})$

[Back to Top](#table-of-contents)

# 10/24 Notes

$$\begin{bmatrix}
    1 & 0 & 0 & 0\\
    0 & 1 & 0 & 0\\
    0 & 0 & \alpha & \beta\\
    0 & 0 & -1 & 0\\
\end{bmatrix}*
\begin{bmatrix}
    x\\
    y\\
    z\\
    1\\
\end{bmatrix}=
\begin{bmatrix}
    x\\
    y\\
    \alpha z + \beta\\
    -z\\
\end{bmatrix}=
\begin{bmatrix}
    \frac{-x}{z}\\
    \frac{-y}{z}\\
    \frac{\alpha z+\beta}{-z}\\
    1\\
\end{bmatrix}$$

- $x"=\frac{-x}{z}$
- $y"=\frac{-y}{z}$
- $z"=-(\alpha+\frac{\beta}{z})$
- $w"=1$
- Require
  - $z=-1$
  - $z=far$
  - $x = \plusmn z \rArr x" \plusmn 1$
  - $y = \plusmn z \rArr y" \plusmn 1$
  - $z"_{near}=-(\alpha - \frac{\beta}{n}) \rArr \alpha=-\frac{n+f}{n-f}$
  - $z"_{far}=-(\alpha - \frac{\beta}{f}) \rArr \beta=\frac{-znf}{n-f}$
- If I set z = -near:
  - $-(-(\frac{n+f}{n-f})-\frac{-znf}{(n-f)n})$
  - $=-(\frac{n+f}{n-f}+\frac{zf}{n-f})$
  - $=\frac{n+f-2f}{n-f}$
  - $=\frac{n-f}{n-f}$
  - $=1=z$


[Back to Top](#table-of-contents)

# Midterm Topics

- Chapter 1
- Chapter 2
- Chapter 3 - html review
  - Skip: 3.8, 3.10
  - How to determine what object is clicked 
- Chapter 4
  - Skip: 4.13, 4.14
- Chapter 5
  - Hidden surface removal
  - Meshes
  - Skip: Shadows, shadow-maps






