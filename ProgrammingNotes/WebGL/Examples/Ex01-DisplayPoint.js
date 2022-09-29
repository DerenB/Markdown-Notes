
// Vertex Shader Source Code
const vertexShaderSource = `#version 300 es

void main()
{
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 150.0;
}
`;

// Fragment Shader Source Code
const fragmentShaderSource = `#version 300 es

precision mediump float;

out vec4 fragColor;

void main()
{
    fragColor = vec4(1.0, 0.0, 0.0, 1.0);
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

// Draw the Objects
gl.drawArrays(gl.POINTS, 0, 1);













