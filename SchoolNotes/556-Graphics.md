# 556 

## 09/21 Notes

#### Program Object

- Container for shaders
    - Can contain multiple shaders
    - Other GLSL functions
- Reading a Shader
    - shaders are added to the program object and compiled
    - Usual method of passing a shader is as a null-terminated string using the function:
    ```
    gl.shaderSource(fragShdr, fragElem.text);
    ```
#### 3D Applications

- In OpenGL, 2D applications are a special case of 3D Graphics
- Going 3D:
    - Not much changes
    - Use glVertex3*()
    - Have to worry about the order in which polygons are drawn or use hidden-surface removal 
    - Polygons should be simple, convex, fat

#### Sierpinski Gasket (2D)

- Create it: 
    - Start with a Triangle
    - Connect bisectors of sides and remove central triangle
    - Repeat
- Gasket as a Fractal
    - Consider the filled area and the perimeter of all the filled areas
    - The more divisions, area goes to 0, perimeter goes to infinity
    - Neither 2D or 3D, not an ordinary geometric object
    - Is is a *fractal* (fractional dimension) object

#### Gasket Program

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

#### Draw one Triangle

```
void triangle( GLfloat *a, GLfloat *b, GLfloat *c)

/* display one triangle */
{
    glVertex2fv(a);
    glVertex2fv(b);
    glVertex2fv(c);
}
```

#### Triangle Subdivision

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

#### Z-Buffer Algorithm

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

#### 09/21 Programming Assignment

- 




