# 556 Computer Graphics

Fall 2022
Matt Evett

- [556 Computer Graphics](#556-computer-graphics)
- [08/31 Class Notes](#0831-class-notes)
- [09/19 Class Notes](#0919-class-notes)
- [09/21 Class Notes](#0921-class-notes)
    - [Program Object](#program-object)
    - [3D Applications](#3d-applications)
    - [Sierpinski Gasket (2D)](#sierpinski-gasket-2d)
    - [Gasket Program](#gasket-program)
    - [Draw one Triangle](#draw-one-triangle)
    - [Triangle Subdivision](#triangle-subdivision)
    - [Z-Buffer Algorithm](#z-buffer-algorithm)
- [10/05 Class Notes](#1005-class-notes)
    - [Basic Elements](#basic-elements)
    - [Scalars](#scalars)
    - [Vectors](#vectors)
    - [Points](#points)
    - [Affine Spaces](#affine-spaces)
    - [Parametric Form](#parametric-form)
    - [Convexity](#convexity)
    - [Planes](#planes)
    - [Normals](#normals)
- [10/05 Notes - Representation](#1005-notes---representation)
    - [Linear Independence](#linear-independence)
    - [Dimension](#dimension)
    - [Coordinate System](#coordinate-system)
    - [Homogeneous Coordinates](#homogeneous-coordinates)

# 08/31 Class Notes

- 1970s - 1980s
  - Raster Graphics - array (raster) of picture elements (pixels) in frame buffer
  - IFIPS - GKS European, ISO 2D standard
- 1990s - 2000s
  - OpenGL API
- 2000s - 2010s
  - Photorealism
  - Graphics Cards
- Generic Flat Panel Display
  - Vertical Grid / Light Emitting Elements / Horizontal Grid
- Brief WebGL intro
  - Each application contains at least 2 files: 1 html, 1 JS
    - HTML includes utilities, shaders
    - JS defines the model, does most of the graphics
- Change from 1.0 to 2.0
  - WebGL uses an earlier version of GLSL which is the default
  - Attribute in vertex shader vs in variable
- Three-color Theory
  - Human visual system has two types of sensors
    - Rods - monochromatic, night vision
    - Cones - color sensitive, three types of cones, only three values (the tristimulus values) are sent to the brain

# 09/19 Class Notes

- Coordinate Systems and Shaders
    - Vertex shader must output in clip coordinates
    - Input to fragment shader from rasterizer is in window coordinates
    - Application can provide certex data in any coordinate system but shader must eventually produce gl_position in clip coordinates
- Default view is Orthographic Viewing
- Don’t have to use the entire window for the viewport
    ```
    gl.viewport(x,y,w,h)
    ```
- Naming Conventions
    - aPosition, aColor, etc - attributes passed to a vertex shader have names beginning with “a” in both the application and the shader
    - vColor - variable variables begin with “v” are defined in the vertex shader
    - fColor - variable variables begin with “f” 
- Attributes determine the appearance of objects
    - Color (points, lines, polygons)
    - Size & Width (points, lines)
    - Stipple Pattern (lines, polygons)
    - Polygon mode
        - Display as filled, solid color or shaded
        - Display edges
        - Display vertices

# 09/21 Class Notes

### Program Object

- Container for shaders
    - Can contain multiple shaders
    - Other GLSL functions
- Reading a Shader
    - shaders are added to the program object and compiled
    - Usual method of passing a shader is as a null-terminated string using the function:
    ```
    gl.shaderSource(fragShdr, fragElem.text);
    ```
### 3D Applications

- In OpenGL, 2D applications are a special case of 3D Graphics
- Going 3D:
    - Not much changes
    - Use glVertex3*()
    - Have to worry about the order in which polygons are drawn or use hidden-surface removal 
    - Polygons should be simple, convex, fat

### Sierpinski Gasket (2D)

- Create it: 
    - Start with a Triangle
    - Connect bisectors of sides and remove central triangle
    - Repeat
- Gasket as a Fractal
    - Consider the filled area and the perimeter of all the filled areas
    - The more divisions, area goes to 0, perimeter goes to infinity
    - Neither 2D or 3D, not an ordinary geometric object
    - Is is a *fractal* (fractional dimension) object

### Gasket Program

```
#include <GL/glut.h>
/* initial triangle */

GLfloat v[3][2] = {
    {-1.0, -0.58},
    {1.0, -0.58},
    {0.0, 1.15}
};

int n; /* number of recursive steps */
```

### Draw one Triangle

```
void triangle( GLfloat *a, GLfloat *b, GLfloat *c)

/* display one triangle */
{
    glVertex2fv(a);
    glVertex2fv(b);
    glVertex2fv(c);
}
```

### Triangle Subdivision

```
void divide_triangle(GLfloat *a, GLfloat *b, GLfloat *c, int m)
{
    /* triangle subdivision using vertex numbers */
    point2 v0, v1, v2;
    int j;
    if(m>0) {
        for(j=0; j<2; j++) v0[j]=(a[j]+b[j])/2;
        for(j=0; j<2; j++) v1[j]=(a[j]+c[j])/2;
        for(j=0; j<2; j++) v2[j]=(b[j]+c[j])/2;
        divide_triangle(a, v0, v1, m-1);
        divide_triangle(c, v1, v2, m-1);
        divide_triangle(b, v2, v0, m-1);
    } else {
        triangle(a,b,c);
    }
    /* draw triangle at end of recursion */
}
```

### Z-Buffer Algorithm

- the algorithm uses an extra buffer, the z-buffer, to store depth information as geometry travels down the pipeline
- Depth buffer is required to be available in WebGL
- It must be:
    - Enabled:
    ```
    gl.enable(gl.DEPTH_TEST)
    ```
    - Cleared in for each render
    ```
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    ```

# 10/05 Class Notes

### Basic Elements

- Cartesian Approach
  - Locations in space p=(x,y,z)
  - nonphysical
  - points exist regardless of the location of an arbitrary coordinate system

### Scalars

- 3 Basic elements
  - Scalars, Vectors, Points
- Defined as members of sets which can be combined by two operations (addition and multiplication) obeying some fundamental axioms 
- Real and complex number systems under the ordinary rules
- Have no geometric properties

### Vectors

- A vector is a quantity with two attributes
  - Direction
  - Magnitude
- Examples
  - Force
  - Velocity 
  - Directed line segments
- Vector Operations
  - Every vector has an inverse
  - Every vector can be multiplied by a scalar
  - There is a zero vector. Zero magnitude, undefined orientation
  - The sum of any two vectors is a vector
    - Use head-to-tail axiom
- Linear Vector Spaces
  - Mathematical system for manipulating vectors
  - Operations:
    - Scalar-vector multiplication 
$$u=\alpha v$$
    - Vector-vector addition
$$w=u+v$$
- Vectors Lack Position
  - vector spaces insufficient for geometry, need points

### Points

- Location in space
- Operations allowed between points and vectors
  - Point-point subtraction yields a vector
  - Equivalent to point-vector addition

### Affine Spaces

- Point + a vector space
- Operations
  - Vector-vector addition
  - Scalar-vector multiplication
  - Point-vector addition
  - Scalar-scalar operations
- For any point define:
  - 1 * P = p
  - 0 * P = 0 (zero vector)

### Parametric Form

- This form is known as the parametric form of the line
  - More robust and general than other forms
  - Extends to curves and surfaces
- Two-dimensional forms
  - Explicit: $$y=mx+b$$
  - Implicit: $$ax+by+c=0$$
  - Parametric: 
$$x(\alpha)=\alpha x_{0}+(1-\alpha)x_{1}$$
$$y(\alpha)=\alpha y_{0}+(1-\alpha)y_{1}$$

- If $\alpha \ge$ 0, then P($\alpha$) is the *ray* leaving $P_{0}$ in the direction **d**
- If we use two points to define v, then:
  - $P(\alpha)=Q+\alpha (R-Q)$
  - $=Q+\alpha v$
  - $=\alpha R+(1-\alpha)Q$
  - For $0 \le \alpha \le 1$ we get all the points on the *line segment* joining R and Q

### Convexity

- An object is *convex* iff for any two points in the object all points on the line segment between these points are also in the object
- Curves are one parameter entities of the form $P(\alpha)$ where the function is nonlinear
- Surfaces are formed from two-parameter functions $P(\alpha, \beta)$
  - Linear functions give planes and polygons

### Planes

- A plane can be defined by a point and two vectors or by three points
  - $P(\alpha,\beta)=R+\alpha u+\beta v$
  - $P(\alpha,\beta)=R+\alpha(Q-R)+\beta(P-Q)$
- Representation of all points on a plane
  - $T(\alpha,\beta)=P_{0}+\alpha u+\beta v$

### Normals

- Every plane has a vector n normal (perpendicular, orthogonal) to it
- From point-two vector form defining the plane, we know we can use the cross product to find n=u*v and the equivalent form


# 10/05 Notes - Representation

### Linear Independence

- A set of vectors, is linearly independent if the vectors add up to 0
- If a set of vectors is linearly independent, we cannot represent one in terms of the others
- If a set of vectors is linearly dependent, at least one can be written in terms of the others

### Dimension

- In a vector space, the maximum number of linearly independent vectors is fixed and is called the dimension of the space
- In an n-dimensional space, any set of n linearly independent vectors may form a *basis* for the space
- Given a basis $v_{1}, v_{2}, ...,v_{n}$, any vector *v* can be written as:
- $v=\alpha_{1}v_{1}+\alpha_{2}v_{2}+...+\alpha_{n}v_{n}$

### Coordinate System

- Consider a basis of vectors
- A vector is written: $v=\alpha_{1}v_{1}+\alpha_{2}v_{2}+...+\alpha_{n}v_{n}$
- The list of scalars is the *representation* of *v* with respect to the given basis
- We can write the representation as a row or column array of scalars
- $a=[\alpha_{1},\alpha_{2},\alpha_{n}]^{T}$
- A coordinate system is insufficient to represent points
  - Vectors will have a **0** at the end
  - $v=[\alpha_{1}\alpha_{2}\alpha_{3} 0]^{T}$
  - Points will have a **1** at the end
  - $p=[\beta_{1}\beta_{2}\beta_{3}1]^{T}$

$$X=\begin{bmatrix}
    1 & x_{1}\\
    1 & x_{2}\\
    1 & x_{3}\\
\end{bmatrix}$$

### Homogeneous Coordinates

- The homogeneous coordinates form for a three dimensional point [x y z] is given as:
  - $p=[x' y' z' w]^{T}=[wx \space wy \space wz \space w]^{T}$
- All homogeneous coordinates are key to all computer graphics systems
  - All standard transformations (rotation, translation, scaling) can be implemented with matrix multiplications using 4x4 matrices
  - Hardware pipeline works with 4 dimensional representations
  - For orthographic viewing, we can maintain w=0 for vectors and w=1 for points









