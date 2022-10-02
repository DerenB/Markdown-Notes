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
    - [Get Uniform Location](#get-uniform-location)
    - [Pass Data to Uniform](#pass-data-to-uniform)
    - [Shader vs JavaScript Uniform Tables](#shader-vs-javascript-uniform-tables)
    - [Multiple Draws](#multiple-draws)
    - [Uniform Example](#uniform-example)
- [Attributes](#attributes)
    - [Attribute Basics](#attribute-basics)
    - [Attribute Path](#attribute-path)
    - [Attribute Locations](#attribute-locations)
    - [Enable Attributes](#enable-attributes)
    - [Attribute Data](#attribute-data)
- [Buffers](#buffers)
    - [Create Buffer](#create-buffer)
    - [Bind Buffer](#bind-buffer)
    - [Create Buffer Data](#create-buffer-data)
    - [Set Buffer Data](#set-buffer-data)
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
- Canvas + Context shorthand:
```
const gl = document.querySelector('canvas').getContext('webgl2');
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

### Get Uniform Location

```
const varibaleNameLoc = gl.getUniformLocation(program, 'uniformName');

const uPositionLoc = gl.getUniformLocation(program, 'uPosition');
const uPointSizeLoc = gl.getUniformLocation(program, 'uPointSize');
```

### Pass Data to Uniform

```
// '###' after 'uniform' various by data type 
gl.uniform###(variableNameLoc, value);

gl.uniform1f(uPointSizeLoc, 100);
gl.uniform2f(uPositionLoc, 0, -0.2);
```
### Shader vs JavaScript Uniform Tables

- **Floats:**

| Shader 	| JavaScript               	|
|--------	|--------------------------	|
| float  	| gl.uniform1f(p, a)       	|
| vec2   	| gl.uniform2f(p, a,b)     	|
| vec3   	| gl.uniform3f(p, a,b,c)   	|
| vec4   	| gl.uniform4f(p, a,b,c,d) 	|

- **Integers:**

| Shader  	| JavaScript               	|
|---------	|--------------------------	|
| int     	| gl.uniform1i(p, a)       	|
| ivec2   	| gl.uniform2i(p, a,b)     	|
| ivec3   	| gl.uniform3i(p, a,b,c)   	|
| ivec4   	| gl.uniform4i(p, a,b,c,d) 	|
| sampler 	| gl.uniform1i(p, s)       	|

- **Unsigned ints:**

| Shader 	| JavaScript               	|
|--------	|--------------------------	|
| uint   	| gl.uniform1u(p, a)       	|
| uvec2  	| gl.uniform2u(p, a,b)     	|
| uvec3  	| gl.uniform3u(p, a,b,c)   	|
| uvec4  	| gl.uniform4u(p, a,b,c,d) 	|

- **Matrices:**

| Shader 	| JavaScript                               	|
|--------	|------------------------------------------	|
| mat2   	| gl.uniformMatrix2fv(p, [4 value array])  	|
| mat3   	| gl.uniformMatrix3fv(p, [9 value array])  	|
| mat4   	| gl.uniformMatrix4fv(p, [16 value array]) 	|

### Multiple Draws

- To do multiple draws, duplicate the uniform lines & draw lines

### Uniform Example

- Example of adding a uniform to the vertex shader
```
// Vertex Shader Source
const vertexShaderSource = `#version 300 es

uniform float uPointSize;
uniform vec2 uPosition;

void main()
{
  gl_PointSize = uPointSize;
  gl_Position = vec4(uPosition, 0.0, 1.0);
}
`;

// Get the Uniform Location
const uPositionLoc = gl.getUniformLocation(program, 'uPosition');
const uPointSizeLoc = gl.getUniformLocation(program, 'uPointSize');

// Pass in values to Uniforms
gl.uniform1f(uPointSizeLoc, 100);
gl.uniform2f(uPositionLoc, 0, -0.2);

// Draw the points
gl.drawArrays(gl.POINTS, 0, 1);
```

[Return to Top](#table-of-contents)

# Attributes

### Attribute Basics

- Can pull data from array buffers
- Quick & Efficient
- Allows many different primitive types
- Uniform vs. Attribute differences:
  - Uniforms
    - Available in vertex and fragment shaders
    - Cannot be changed during draw call
  - Attributes
    - Available only in vertex shaders
    - Changes for every vertex in the buffer
- Limited to at least 16 attributes, more than 16 is risky
  - Look up max attribute count:
```
gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
```
- Vertices limit: over 65,000

### Attribute Path

- Vertex Shader
  - Attributes comes **in** from the JavaScript
  - Varyings go **out** to the Fragment shader
- Fragment Shader
  - Varyings come **in**
  - Resulting information goes **out** to frame buffer & canvas

### Attribute Locations

- Attribute locations are just numbers
- Read with:
```
gl.getAttribLocation()

const aPositionLoc = gl.getAttribLocation(program, 'aPosition');
```
- Connect the JavaScript to the parts of the shaders that change
- Does not change over the life of the program
- Can declare attribute location
  - Can only be done before linking with shaders

### Enable Attributes

- After locations found, they have to be enabled
- Done only once, typically after binding to a buffer
```
gl.enableVertexAttribArray(aPositionLoc);
gl.enableVertexAttribArray(aPointSizeLoc);
```

### Attribute Data

- Attribute Data in **Shaders**
  - Simple declarations
  - Floats or made of Floats
- Attribute Data in **JavaScript**
  - Chain of interleving data types
  - Different Datatypes
  - Including 8-bit and 16-bit integers
- Use Attribute Pointer to tell WebGL how to unravel array buffer data into what the shader needs
```
gl.vertexAttribPointer(LocationVariable, size:number, type:number, normalized: boolean, stride: number, offset: number);
gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 3 * 4, 0);
gl.vertexAttribPointer(aPointSizeLoc, 1, gl.FLOAT, false, 3 * 4, 2 * 4);
```
- Size (x,y) is 2
- Stride
  - number of bytes in each set of vertex data
  - 3 floats, each float contains 4 bytes (3 * 4)
- Offset: position of attribute 
  - Ex: first attribute = 0, takes 2 spaces
  - Second attribute = 2 * 4. 2 spaces for first attribute, times 4 bytes

[Return to Top](#table-of-contents)

# Buffers

### Create Buffer

- Need a buffer to hold data, and bind buffer to a target
```
const buffer = gl.createBuffer();
```

### Bind Buffer

```
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

### Create Buffer Data

```
// Creates a single point at center (0,0) size 100
const bufferData = new Float32Array([
    0,0,    100,
]);
```

### Set Buffer Data

- Can specify size of data in bytes, or send data in directly


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



