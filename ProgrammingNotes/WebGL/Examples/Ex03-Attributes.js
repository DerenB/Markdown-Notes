
// Vertex Shader Source Code
const vertexShaderSource = `#version 300 es

in float aPointSize;
in vec2 aPosition;

void main()
{
    gl_PointSize = aPointSize;
    gl_Position = vec4(aPosition, 0.0, 1.0);
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

// Get Location of attributes
const aPositionLoc = gl.getAttribLocation(program, 'aPosition');
const aPointSizeLoc = gl.getAttribLocation(program, 'aPointSize');

// Enable Attribute Locations
gl.enableVertexAttribArray(aPositionLoc);
gl.enableVertexAttribArray(aPointSizeLoc);

// Create Buffer Data
const bufferData = new Float32Array([
    0.0,0.0,    100,
    0.5,-0.8,   32,
    -0.9,0.5,   50,
]);

// Create a Buffer
const buffer = gl.createBuffer();

// Bind to Buffer
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

// Set Buffer data
gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);

// Position Attribute Data conversion
gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 3 * 4, 0);

// PointSize Attribute Data conversion
gl.vertexAttribPointer(aPointSizeLoc, 1, gl.FLOAT, false, 3 * 4, 2 * 4);

// Draw one box
//gl.drawArrays(gl.POINTS, 0, 1);

// Draw three boxes
gl.drawArrays(gl.POINTS, 0, 3);

