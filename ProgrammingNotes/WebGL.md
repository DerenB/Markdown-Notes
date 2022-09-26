# WebGL Notes

# Table of Contents

[Basic Steps](#basic-steps)
[Canvas & Context](#canvas-and-context)

# Basic Steps

### Step 1: Prepare the canvas and get WebGL rendering context

- Get the current HTML canvas object and obtain its WebGL rendering context

### Step 2: Define the geometry and store it in buffer objects

- We define the attributes of the geometry such as vertices, indices, color, etc., and store them in the JavaScript arrays. Then, we create one or more buffer objects and pass the arrays containing the data to the respective buffer object.

### Step 3: Create and Compile Shader programs

- We write vertex shader and fragment shader programs, compile them, and create a combined program by linking these two programs.

### Step 4: Associate the shader programs with buffer objects

- We associate the buffer objects and the combined shader program. 

### Step 5: Drawing the required object 

- This step includes operations such as clearing the color, clearing the buffer bit, enabling the depth test, setting the view port, etc. Then you need to draw the required primitives using one of the methods: **drawArrays()** or **drawElements()**.

[Return to Top](#webgl-notes)

# Canvas and Context

### Create the Canvas

- Create within the html body
```
<canvas id="myCanvas" width="500" height="500"></canvas>
```

### Get the WebGL Context

- Get the components for the JS file
```
var canvas = document.getElementById('myCanvas');

// canvas.getContext(contextType, contextAttributes);
var gl = canvas.getContext('experimental-webgl');
```

### Context Attributes

- Not required
- Parameter accepts boolean values:
    - Alpha: provides an alpha buffer to the canvas. Defaults to true
    - depth: a drawing buffer which contains a depth buffer of at least 16 bits. Defaults to true
    - stencil: a drawing buffer which contains a stencil buffer of at least 8 bits. Defaults to false
    - antialias: a drawing buffer which performs anti-aliasing. Defaults to true
    - premultipliedAlpha: a drawing buffer which contains colors with pre-multiplied alpha. DEfaults to true
    - preserveDrawingBuffer: the buffers will not be cleared and will preserve their values until cleared or overwritten. Defaults to false
```
var canvas = document.getElementById('canvas1');
var context = canvas.getContext('webgl', { antialias: false, stencil: true });
```

[Return to Top](#webgl-notes)