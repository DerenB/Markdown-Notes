# 556 Computer Graphics

Fall 2022
Matt Evett

## 08/31 Class Notes

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

## 09/19 Class Notes

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

## 09/21 Class Notes

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




