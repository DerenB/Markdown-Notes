/*
    Deren Bozer
    COSC-556 F22
    Assignment 1
    Part 1
*/

// Global Variables
let canvas;
let gl;

// Vertex Shader Source Code
const vertexShaderSource = `#version 300 es

// Attribute coming in from the JS
in vec4 aPosition;

// Attribute coming in to go out as Varying
in vec3 aColor;

// Varyings going out to the Fragment Shader
// Has to be same name as the fragment shader IN
out vec3 vColor;

void main()
{
    vColor = aColor;
    gl_Position = aPosition;
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

    // Get the Canvas & Context
    canvas = document.getElementById('mycanvas');
    gl = canvas.getContext('webgl2');
    if(!gl) { 
        alert("WebGL 2.0 isn't available"); 
    }

    // Get the Prorgam
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

    // Get Attribute Locations
    const aPositionLoc = gl.getAttribLocation(program, 'aPosition');
    const aColorLoc = gl.getAttribLocation(program, 'aColor');

    // Enable Attribute Location
    gl.enableVertexAttribArray(aPositionLoc);
    gl.enableVertexAttribArray(aColorLoc);

    /* ******************** Create The Eclipse ******************** */

    // Eclipse Variables
    let eclipseVertexLimit = 360;
    let eclipseDegPerTrig = (2 * Math.PI) / eclipseVertexLimit;

    // Eclipse starting point
    let eclipseArrayData = [
        -0.75,0.75,  0,  1,0,0,
        -0.75,0.75,  0,  1,0,0,
    ];

    // Loop to create the vertices
    for(let i = 2; i < eclipseVertexLimit; i++) {
        let index = (i*3) + (i*3);
        let angle = eclipseDegPerTrig * (i + 1);

        eclipseArrayData[index] = ((Math.cos(angle))/6)-0.75;
        eclipseArrayData[index+1] = ((Math.sin(angle))/9)+0.75;
        eclipseArrayData[index+2] = 0;
        eclipseArrayData[index+3] = 1;
        eclipseArrayData[index+4] = 0;
        eclipseArrayData[index+5] = 0;
    }

    // Create Float32Array from Circle Vertices
    const eclipseData = new Float32Array(eclipseArrayData);

    // Create a Buffer for the Circle
    const eclipseBuffer = gl.createBuffer();

    // Bind to Buffer Circle
    gl.bindBuffer(gl.ARRAY_BUFFER, eclipseBuffer);

    // Set Circle Buffer data
    gl.bufferData(gl.ARRAY_BUFFER, eclipseData, gl.STATIC_DRAW);

    // Circle Position Attribute Data Pointer
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 6 * 4, 0);

    // Circle Color Attribute Data Pointer
    gl.vertexAttribPointer(aColorLoc, 3, gl.FLOAT, false, 6 * 4, 3 * 4);

    // Render the Circle
    render(2,eclipseData.length/6);

    /* ******************** Create The Circle ******************** */

    /* ******************** Create The Triangle ******************** */

    // Triangle Data Points
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

    // Triangle Color Attribute Data Pointer
    gl.vertexAttribPointer(aColorLoc, 3, gl.FLOAT, false, 6 * 4, 3 * 4);

    // Render the Triangle
    render(1,3);

    /* ******************** Create The Triangle ******************** */

    /* ******************** Create The Circle ******************** */

    // Circle Variables
    let circleVertexLimit = 255;
    let degPerTrig = (2 * Math.PI) / circleVertexLimit;

    // Circle red color shifting
    let colorShiftIncrement = (1/circleVertexLimit);
    let currentRedColor = 1;

    // Circle starting point
    let circleArrayData = [
        0.75,0.75,  0,  1,0,0,
        0.75,0.75,  0,  1,0,0,
    ];

    // Loop to create the vertices
    for(let i = 2; i < circleVertexLimit; i++) {
        let index = (i*3) + (i*3);
        let angle = degPerTrig * (i + 1);

        currentRedColor -= colorShiftIncrement;

        circleArrayData[index] = ((Math.cos(angle))/6)+0.75;
        circleArrayData[index+1] = ((Math.sin(angle))/6)+0.75;
        circleArrayData[index+2] = 0;
        circleArrayData[index+3] = currentRedColor;
        circleArrayData[index+4] = 0;
        circleArrayData[index+5] = 0;
    }

    // Create Float32Array from Circle Vertices
    const circleData = new Float32Array(circleArrayData);

    // Create a Buffer for the Circle
    const circleBuffer = gl.createBuffer();

    // Bind to Buffer Circle
    gl.bindBuffer(gl.ARRAY_BUFFER, circleBuffer);

    // Set Circle Buffer data
    gl.bufferData(gl.ARRAY_BUFFER, circleData, gl.STATIC_DRAW);

    // Circle Position Attribute Data Pointer
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 6 * 4, 0);

    // Circle Color Attribute Data Pointer
    gl.vertexAttribPointer(aColorLoc, 3, gl.FLOAT, false, 6 * 4, 3 * 4);

    // Render the Circle
    render(2,circleData.length/6);

    /* ******************** Create The Circle ******************** */

    /* ******************** Create The Squares ******************** */
    let squareColorLoop = 1;
    // Loop for calling the Vertex generating function
    for(let i = 0.0; i < 0.7; i+=0.1) {
        squareColorLoop == 1 ? squareColorLoop = 0 : squareColorLoop = 1;
        createSquareVertices(i,squareColorLoop);
    }

    // Function for creating the square vertices
    function createSquareVertices(num,color) {
        const squareData = new Float32Array([
            -0.7+num,   0.5-num,    0,  color,color,color,
            0.7-num,    0.5-num,    0,  color,color,color,
            0.7-num,    -0.9+num,   0,  color,color,color,
            -0.7+num,   -0.9+num,   0,  color,color,color,
        ]);

        createSquare(squareData);
    }

    // Function for creating the Squares
    function createSquare(vertices) {
        // Create a Buffer for the Squares
        const squareBuffer = gl.createBuffer();
    
        // Bind to Buffer Squares
        gl.bindBuffer(gl.ARRAY_BUFFER, squareBuffer);
    
        // Set Squares Buffer data
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    
        // Squares Position Attribute Data Pointer
        gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 6 * 4, 0);
    
        // Squares Color Attribute Data Pointer
        gl.vertexAttribPointer(aColorLoc, 3, gl.FLOAT, false, 6 * 4, 3 * 4);
    
        // Render the Squares
        render(3,4);
    };
    /* ******************** Create The Squares ******************** */

};

function render(num, shapeLength) {
    switch(num) {
        case 1:
            gl.drawArrays(gl.TRIANGLES, 0, shapeLength);
            break; 
        case 2:
            gl.drawArrays(gl.TRIANGLE_FAN, 0, shapeLength);
            break;
        case 3:
            gl.drawArrays(gl.TRIANGLE_FAN, 0, shapeLength);
            break;
    }
};










