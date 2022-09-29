
// Vertex Shader Source Code
const vertexShaderSource = `#version 300 es

in float aPointSize;
in vec2 aPosition;
in vec3 aColor;

out vec3 vColor;

void main()
{
    vColor = aColor;
    gl_PointSize = aPointSize;
    gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

// Fragment Shader Source Code
const fragmentShaderSource = `#version 300 es

precision mediump float;

in vec3 vColor;

out vec4 fragColor;

void main()
{
    fragColor = vec4(vColor, 1.0);
}`;

// Gets the Canvas & Context
const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl2');

// Sets up the program
const program = gl.createProgram();

// Create Vertex Shader
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);
gl.attachShader(program, vertexShader);

// Create the Fragment Shader
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);
gl.attachShader(program, fragmentShader);

// Link the Program
gl.linkProgram(program);

// Check if the link fails
if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.log(gl.getShaderInfoLog(vertexShader));
    console.log(gl.getShaderInfoLog(fragmentShader));
}

// Switches between GL programs
gl.useProgram(program);

// Sets the Square locations & colors
const bufferData = new Float32Array([
    0,0,   150,    1,1,1,
    0,0,   125,     0,0,0,
    0,0,   100,     1,1,1,
    0,0,   75,     0,0,0,
    0,0,   50,     1,1,1,
    0,0,   25,     0,0,0,
]);

// Get the Uniform Locations
const uPositionLoc = gl.getUniformLocation(program, 'uPosition');
const uPointSizeLoc = gl.getUniformLocation(program, 'uPointSize');

// Get the color Unifrom Locations
const uIndexLoc = gl.getUniformLocation(program, 'uIndex');
const uColorsLoc = gl.getUniformLocation(program, 'uColors');

// Set the Uniform Items
gl.uniform1f(uPointSizeLoc, 100);
gl.uniform2f(uPositionLoc, 0, -0.2);

// Set the Color Uniform Items
gl.uniform1i(uIndexLoc, 2);
gl.uniform4fv(uColorsLoc, [
    1,0,0,1,
    0,1,0,1,
    0,0,1,1
]);

// Get Attribute Locations
const aPositionLoc = gl.getAttribLocation(program, 'aPosition');
const aPointSizeLoc = gl.getAttribLocation(program, 'aPointSize');
const aColorLoc = gl.getAttribLocation(program, 'aColor');

gl.enableVertexAttribArray(aPositionLoc);
gl.enableVertexAttribArray(aPointSizeLoc);
gl.enableVertexAttribArray(aColorLoc);

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);

gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 6 * 4, 0);
gl.vertexAttribPointer(aPointSizeLoc, 1, gl.FLOAT, false, 6 * 4, 2 * 4);
gl.vertexAttribPointer(aColorLoc, 3, gl.FLOAT, false, 6 * 4, 3 * 4);

// Draw the shapes
gl.drawArrays(gl.POINTS, 0, 6);

// Optional Second Point
// Set a second set of Unifrom Items
gl.uniform1f(uPointSizeLoc, 25);
gl.uniform2f(uPositionLoc, 0.8, -0.6);
// Draw the second set of shapes
gl.drawArrays(gl.POINTS, 0, 1);
















