# WebGL

# Table of Contents

[Basics](#basics)

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

- Four ways 

[Back to Top](#table-of-contents)













