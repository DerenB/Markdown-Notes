# WebGL

# Table of Contents

[Basics](#basics)
- Rasterization
- Functions
- Vertex Shader
- Fragment Shader
- Setup
- Send data to shaders

[Hello World](#hello-world)

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

# Hello World

- WebGL only cares about: Clip Space Coordinates & Colors
- Clip Space Coordinates
  - From Vertex Shader
  - Always go from -1 to +1 no matter the canvas size
- Colors
  - From Fragment Shader









[Back to Top](#table-of-contents)




