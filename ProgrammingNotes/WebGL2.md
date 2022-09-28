# WebGL

# Table of Contents

[Basics](#basics)
- Rasterization
- Functions
- Vertex Shader
- Fragment Shader
- Setup
- Send data to shaders

[Hello World Shaders](#hello-world)

[Project Setup](#project-setup)

# Basics

### Rasterization

- WebGL is a rasterization engine
- Rasterization: the process by which most modern display systems turn electronic data or signals into projected images
- Draws points, lines, triangles
- Runs on the GPU

### Functions

- Provide code in the form of pair of functions
- Vertex Shader Functions
- Fragment Shader Functions
- Written in stricly typed C/C++ language: GLSL (GL Shader Language)

### Vertex Shader

- Computes vertex positions
- Based on the positions the function outputs, WebGL can then rasterize various kinds of primitives
- Calls the fragment shader function when rasterizing

### Fragment Shader

- Computes a color for each pixel of the primitive currently being drawn

### Setup

- Most of WebGL API is about setting up state for these 2 functions to run
- For every item you want to draw: 
  - setup a bunch of state
  - execute a pair of functions by calling:
```
gl.drawArrays;
gl.drawElements;
```
  - Functions execute your shaders on the GPU

### Send Data to Shaders

- Four ways a shader can receive data:

#### Attributes, Buffers, Vertex Arrays

- Buffers: arrays of binary data you upload to the GPU
- Buffers contain positions, normals, texture coordinates, vertex colors, etc
- Attributes: used to specify how to pull data out of your buffers, and provide them to your vertex shader
- Buffers are not random access
- Vertex shader is executed a specified number of times
- Each time it's executed, the next value from each specified buffer is pulled out and assigned to an attribute
- Vertex Array Object (VAO): collection of the state of attributes, which buffers to use for each, and how to pull data

#### Unifroms

- Global variables you set before you execute the shader program

#### Textures

- Arrays of data you can randomly access in the shader program
- Most common thing to put in a texture is an image
- Just data, can contain something other than colors

#### Varyings

- A way for a vertex shader to pass data to a fragment shader.
- Depending on what is being rendered, the values set on a varying by a vertex shader

[Back to Top](#table-of-contents)

# Hello World Shaders

- WebGL only cares about: Clip Space Coordinates & Colors
- Clip Space Coordinates
  - From Vertex Shader
  - Always go from -1 to +1 no matter the canvas size
- Colors
  - From Fragment Shader

### Vertex Shader

- JS Sample:
```
// *** PSEUDO CODE!! ***
 
var positionBuffer = [
  0, 0, 0, 0,
  0, 0.5, 0, 0,
  0.7, 0, 0, 0,
];
var attributes = {};
var gl_Position;
 
drawArrays(..., offset, count) {
  var stride = 4;
  var size = 4;
  for (var i = 0; i < count; ++i) {
    // copy the next 4 values from positionBuffer to the a_position attribute
    const start = offset + i * stride;
    attributes.a_position = positionBuffer.slice(start, start + size);
    runVertexShader();
    ...
    doSomethingWith_gl_Position();
}
```
- positionBuffer - needs to be converted to binary data

### Fragment Shader

```
#version 300 es
 
// fragment shaders don't have a default precision so we need
// to pick one. highp is a good default. It means "high precision"
precision highp float;
 
// we need to declare an output for the fragment shader
out vec4 outColor;
 
void main() {
  // Just set the output to a constant reddish-purple
  outColor = vec4(1, 0, 0.5, 1);
}
```
- outColor declared as fragmetn shader's output
- Setting the color to vec4(R,G,B,Alpha)

[Back to Top](#table-of-contents)

# Project Setup

- Create a canvas
```
<canvas id="mycanvas"></canvas>
```

- Look up canvas in JS
```
var canvas = document.querySelector("#mycanvas");
```

- Create WebGL2Rendering Context
```
var gl = canvas.getContext("webgl2");
if(!gl) {
  // no webgl2
}
```

- Compile those shaders to put them on the GPU
- Need to put them into strings
- Most 3D engines generate GLSL shaders on the flay using various types of templates
```
var vertexShaderSource = `#version 300 es
 
// an attribute is an input (in) to a vertex shader.
// It will receive data from a buffer
in vec4 a_position;
 
// all shaders have a main function
void main() {
  // gl_Position is a special variable a vertex shader
  // is responsible for setting
  gl_Position = a_position;
}
`;
 
var fragmentShaderSource = `#version 300 es
 
// fragment shaders don't have a default precision so we need
// to pick one. highp is a good default. It means "high precision"
precision highp float;
 
// we need to declare an output for the fragment shader
out vec4 outColor;
 
void main() {
  // Just set the output to a constant reddish-purple
  outColor = vec4(1, 0, 0.5, 1);
}
`;
```
- "#version 300 es" **must be the very first line of the shader**
  - Tells WebGL2 to use the WebGL2 language called GLSL ES 3.00


[Back to Top](#table-of-contents)

# Class Notes

- 1 array for all locations
- 1 array for all colors
- Circle
  - Pick center of circle for first point
  - draw triangles to various points, starting at 3-clock and going counter-clockwise

