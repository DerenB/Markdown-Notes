/*
    Deren Bozer
    COSC-556 F22
    Assignment 1
*/

// Global Variables
let canvas;
let gl;

let circleShape;
let numberOfCircleVectors = 100;
var degPerTrig = (2 * Math.PI) / numberOfCircleVectors;

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

window.onload = function init() {
    // Gets the Canvas
    canvas = document.getElementById('mycanvas');
    gl = canvas.getContext('webgl2');

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

    // Enable Color Attribute Location
    gl.enableVertexAttribArray(aColorLoc);

    /* ***** Ellipse Data ****************************************** */

    // Create the ELLIPSE
    const ellipseShape = new Float32Array([
        -0.75,1.0,    0,        1,0,0,
        -0.55,0.7,  0,          0,0,1,
        -0.95,0.7,  0,         0,1,0,
    ]);

    // Create a ELLIPSE Buffer
    const ellipseBuffer = gl.createBuffer();

    // Bind to Buffer ELLIPSE
    gl.bindBuffer(gl.ARRAY_BUFFER, ellipseBuffer);

    // Set ELLIPSE Buffer data
    gl.bufferData(gl.ARRAY_BUFFER, ellipseShape, gl.STATIC_DRAW);

    // ELLIPSE Position Attribute Data Pointer
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 6 * 4, 0);
    // ELLIPSE PointSize Attribute Data Pointer
    gl.vertexAttribPointer(aPointSizeLoc, 1, gl.FLOAT, false, 6 * 4, 2 * 4);
    // ELLIPSE Color Attribute Data Pointer
    gl.vertexAttribPointer(aColorLoc, 3, gl.FLOAT, false, 6 * 4, 3 * 4);

    // Draw ELLIPSE
    // gl.drawArrays(gl.TRIANGLES, 0, 3);
    render(0);

    /* ***** Triangle Data ****************************************** */

    // Create the Triangle Buffer Data
    const triangleData = new Float32Array([
        0.0,1.0,    0,        1,0,0,
        0.20,0.7,  0,          0,0,1,
        -0.20,0.7,  0,         0,1,0,
    ]);

    // Create a Buffer for the Triangle
    const triangleBuffer = gl.createBuffer();

    // Bind to Buffer Triangle
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleBuffer);

    // Set Triangle Buffer data
    gl.bufferData(gl.ARRAY_BUFFER, triangleData, gl.STATIC_DRAW);

    // Triangle Position Attribute Data Pointer
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 6 * 4, 0);
    // Triangle PointSize Attribute Data Pointer
    gl.vertexAttribPointer(aPointSizeLoc, 1, gl.FLOAT, false, 6 * 4, 2 * 4);
    // Triangle Color Attribute Data Pointer
    gl.vertexAttribPointer(aColorLoc, 3, gl.FLOAT, false, 6 * 4, 3 * 4);

    // Draw Triangle
    //gl.drawArrays(gl.TRIANGLES, 0, 3);
    render(1);

    /* ***** Circle Data ****************************************** */

    const PI = 3.14159265358;

    // Create the Circle
    circleShape = new Float32Array([
        0.0,0.0,    0,        1,0,0,
        0.0,0.0,    0,        1,0,0,
    ]);

    // Create a Circle Buffer
    const circleBuffer = gl.createBuffer();

    // Bind to Buffer Circle
    gl.bindBuffer(gl.ARRAY_BUFFER, circleBuffer);

    // Set Circle Buffer data
    gl.bufferData(gl.ARRAY_BUFFER, circleShape, gl.STATIC_DRAW);

    // Circle Position Attribute Data Pointer
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 6 * 4, 0);
    // Circle PointSize Attribute Data Pointer
    gl.vertexAttribPointer(aPointSizeLoc, 1, gl.FLOAT, false, 6 * 4, 2 * 4);
    // Circle Color Attribute Data Pointer
    gl.vertexAttribPointer(aColorLoc, 3, gl.FLOAT, false, 6 * 4, 3 * 4);

    // Draw Circle
    // gl.drawArrays(gl.TRIANGLE_FAN, 0, 2);
    render(2);
}

function render(num) {
    switch(num) {
        case 0:
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            break;
        case 1:
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            break;
        case 2:
            // Add additional vertices
            for(var i = 0; i < numberOfCircleVectors; i++) {
                var index = 2*3 + i*3;
                var angle = degPerTrig * (i + 1);

                circleShape[index] = Math.cos(angle);
                circleShape[index+1] = Math.sin(angle);
                circleShape[index+2] = 0;
                circleShape[index+3] = 1;
                circleShape[index+4] = 0;
                circleShape[index+5] = 0;
                // console.log("Loop: " + circleShape);
            }  
            gl.drawArrays(gl.TRIANGLE_FAN, 0, 2); 
            break;
    }
}

