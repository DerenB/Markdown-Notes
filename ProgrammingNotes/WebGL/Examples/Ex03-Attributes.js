
// Vertex Shader Source Code
const vertexShaderSource = `#version 300 es

uniform float uPointSize;
uniform vec2 uPosition;

void main()
{
    gl_PointSize = uPointSize;
    gl_Position = vec4(uPosition, 0.0, 1.0);
}
`;

// Fragment Shader Source Code
const fragmentShaderSource = `#version 300 es

precision mediump float;

uniform int uIndex;
uniform vec4 uColors[3];

out vec4 fragColor;

void main()
{
    fragColor = uColors[uIndex];
}
`;

// Gets the Canvas
const canvas = document.getElementById('myCanvas');
const gl = canvas.getContext('webgl2');

// Gets the Program
const program = gl.createProgram();

// Create the Vertex Shader
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

// Error check the link
if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.log(gl.getShaderInfoLog(vertexShader));
    console.log(gl.getShaderInfoLog(fragmentShader));
}

// Uses the Program
gl.useProgram(program);

// Get Vertex Shader Uniform Locations
const uPointSizeLoc = gl.getUniformLocation(program, 'uPointSize');
const uPositionLoc = gl.getUniformLocation(program, 'uPosition');

// Get Fragment Shader Uniform Locations
const uIndexLoc = gl.getUniformLocation(program, 'uIndex');
const uColorsLoc = gl.getUniformLocation(program, 'uColors');

// Pass in values to Vertex Shader Uniforms
gl.uniform1f(uPointSizeLoc, 100);
gl.uniform2f(uPositionLoc, 0, -0.2);

// Pass in values to Fragment Shader Uniforms
gl.uniform1i(uIndexLoc, 1);
gl.uniform4fv(uColorsLoc, [
    1,0,0,1,
    0,1,0,1,
    0,0,1,1 
]);

// Draw the Objects
gl.drawArrays(gl.POINTS, 0, 1);













