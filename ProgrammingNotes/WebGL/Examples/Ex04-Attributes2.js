
// Vertex Shader Source Code
const vertexShaderSource = `#version 300 es

layout(location=0) in vec4 aPosition;
layout(location=1) in float aPointSize;
layout(location=2) in vec4 aColor;

out vec4 vColor;

void main()
{
    vColor = aColor;
    gl_Position = aPosition;
    gl_PointSize = aPointSize;
}
`;

// Fragment Shader Source Code
const fragmentShaderSource = `#version 300 es

precision mediump float;

in vec4 vColor;

out vec4 fragColor;

void main()
{
    fragColor = vColor;
}
`;

// Gets the Canvas
const gl = document.querySelector('canvas').getContext('webgl2');

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

// Location values for Uniforms
const aPositionLoc = 0;
const aPointSizeLoc = 1;
const aColorLoc = 2;

// Set Uniform Values
gl.vertexAttrib4f(aPositionLoc, 0, 0, 0, 1);
gl.vertexAttrib1f(aPointSizeLoc, 50);
gl.vertexAttrib4f(aColorLoc, 1, 0, 0, 1);

// Draw the Objects
gl.drawArrays(gl.POINTS, 0, 1);













