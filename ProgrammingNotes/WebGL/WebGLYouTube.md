# WebGL Notes

- Following this YouTube playlist for the basics:
- [YouTube Link](https://www.youtube.com/playlist?list=PLPbmjY2NVO_X1U1JzLxLDdRn4NmtxyQQo)

# Table of Contents

- [WebGL Notes](#webgl-notes)
- [Table of Contents](#table-of-contents)
- [Basic Setup](#basic-setup)
    - [Canvas](#canvas)
    - [Context](#context)
    - [Program](#program)
    - [Draw the Objects](#draw-the-objects)
- [Shaders](#shaders)
    - [Vertex Shader](#vertex-shader)
    - [Fragment Shader](#fragment-shader)
- [Precision](#precision)
- [Uniforms](#uniforms)
    - [Basics](#basics)
    - [Locations](#locations)
- [Attributes](#attributes)
- [Element Arrays & Draw Elements](#element-arrays--draw-elements)
- [Objects, Targets, Binding](#objects-targets-binding)
- [Textures](#textures)
- [Debugging](#debugging)
    - [Link Error](#link-error)

# Basic Setup

- Absolute Basic WebGL setup:
  - HTML Canvas element
  - WebGL rendering context (gl)
  - WebGL program linking 2 compiled shaders 

### Canvas

- Create the Canvas in the HTML:
```
<canvas id="mycanvas" width="" height=""></canvas>
```
- Rendering Context
  - Usually called "gl"
  - Ubiquitous
  - The interface used to issue WebGL commands
  - Includes all functions, rendering, etc
  - Can have multiple rendering context

### Context

- Add the canvas to JS and get the context
```
const canvas = document.querySelector('mycanvas');
const gl = canvas.getContext('webgl2');
```

### Program

- WebGL Program
  - Normally in own function
    - Most WebGL has multiple programs
  - gl.useProgram is how to switch between programs
  - With only 1 program, still need 'useProgram' to use WebGL
```
// Gets the program
const program = gl.createProgram();

// Links the program
gl.linkProgram(program);

// Uses the program
gl.useProgram(program);
```

### Draw the Objects
```
gl.drawArrays(gl.POINTS, 0, 1);
```

[Return to Top](#table-of-contents)

# Shaders

- Vertex Shader & Fragment Shader Path:
  - Create Shader
  - Set GLSL Source
  - Compile Shader
  - Attach to Program
  - Link Program 
  - Useable Program

### Vertex Shader

- Create Vertex Shader:
```
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);
gl.attachShader(program, vertexShader);
```
- Create Vertex Shader Source Code:
  - First line must be "#version 300 es" or nothing will work
```
const vertexShaderSource = `#version 300 es

void main()
{

}
`;
```

### Fragment Shader

- Create Fragment Shader:
```
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);
gl.attachShader(program, fragmentShader);
```
- Create Fragment Shader Source Code:
```
const fragmentShaderSource = `#version 300 es

void main()
{

}
`;
```

[Return to Top](#table-of-contents)

# Precision

- Where to draw the line between performance and numerical accuracy
- JavaScript Numbers:
  - External: always 64-bit, double precision floating-point
  - Internal: may initially be 16-bit integers for faster execution
- Have to specify precision in **fragment shaders** or in **floats**
- Variables with default precisions:
  - Vertex Shaders
    - float
    - int
    - sampler2D
    - samplerCube
  - Fragment Shaders
    - int
    - sampler2D
    - samplerCube
- Floats
  - generally use **mediump** for precision
  - can be changed later based on performance

[Return to Top](#table-of-contents)

# Uniforms

### Basics

- Global Variables
- Defined in the shaders
- Set in the JavaScript
- Vertex & Fragment shaders can share uniforms or have separate uniforms
- During a draw call, the value remains constant for the shaders
  - To change the uniform value, you can only do it in a separate draw call
  - Makes uniform not a good choice when there are a lot

### Locations

- Help to connect the JavaScript (CPU execution) to the compiled WebGL program (GPU execution)
- getAttributeLocation - returns a Number
- getUniformLocation - returns an Object
- Location won't change when compiled, only needs to be asked once

[Return to Top](#table-of-contents)

# Attributes

[Return to Top](#table-of-contents)

# Element Arrays & Draw Elements

[Return to Top](#table-of-contents)

# Objects, Targets, Binding

[Return to Top](#table-of-contents)

# Textures

[Return to Top](#table-of-contents)

# Debugging

### Link Error

- How to check if there is an error linking the program
- Checking the log is "expensive" so only check if there's an error
```
// Error check the link
if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.log(gl.getShaderInfoLog(vertexShader));
    console.log(gl.getShaderInfoLog(fragmentShader));
}
```

[Return to Top](#table-of-contents)



