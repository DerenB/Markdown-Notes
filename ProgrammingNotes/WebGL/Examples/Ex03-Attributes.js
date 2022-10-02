
// Vertex Shader Source Code
const vertexShaderSource = `#version 300 es

// Attributes coming in from the JS
in float aPointSize;
in vec2 aPosition;

// Attribute coming in to go out as Varying
in vec3 aColor;

// Varyings going out to the Fragment Shader
// Has to be same name as the fragment shader IN
out vec3 vColor;

void main()
{
    vColor = aColor;
    gl_PointSize = aPointSize;
    gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

// Fragment Shader Source Code
const fragmentShaderSource = `#version 300 es

precision mediump float;

// Varyings coming in from Vertex Shader
in vec3 vColor;

out vec4 fragColor;

void main()
{
    fragColor = vec4(vColor, 1.0);
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

// Get Color Attribute Location
const aColorLoc = gl.getAttribLocation(program, 'aColor');

/*
> Manually assign attribute locations: 
> Have to set up before gl.linkProgram(program)

const aPositionLoc = 0;
const aPointSizeLoc = 1;
const aColorLoc = 2;

> Bind the locations:
gl.bindAttribLocation(program, aPositionLoc, 'aPosition');
gl.bindAttribLocation(program, aPointSizeLoc, 'aPointSize');
gl.bindAttribLocation(program, aColorLoc, 'aColor');
*/

// Enable Color Attribute Location
gl.enableVertexAttribArray(aColorLoc);

// Create Buffer Data
const bufferData = new Float32Array([
    0.0,0.0,    100,        1,0,0,
    0.5,-0.8,  32,          0,1,0,
    -0.9,0.5,   50,         0,0,1,
]);

// Create a Buffer
const buffer = gl.createBuffer();

// Bind to Buffer
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

// Set Buffer data
gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);

// Position Attribute Data Pointer
gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 6 * 4, 0);

// PointSize Attribute Data Pointer
gl.vertexAttribPointer(aPointSizeLoc, 1, gl.FLOAT, false, 6 * 4, 2 * 4);

// Color Attribute Data Pointer
gl.vertexAttribPointer(aColorLoc, 3, gl.FLOAT, false, 6 * 4, 3 * 4);

// Draw one box
//gl.drawArrays(gl.POINTS, 0, 1);

// Draw three boxes
gl.drawArrays(gl.POINTS, 0, 3);

