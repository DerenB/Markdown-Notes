/*
  Deren Bozer
  COSC-556 F22
  Lab 2: Rotating & Color Square
*/

"use strict";

var gl;

var theta = 0.0;
var thetaLoc;

var speed = 100;
var direction = true;

// Color Variables ******************************
let colorArray = [1,0,0];
let uColorsLoc;


window.onload = function init()
{
    var canvas = document.getElementById("gl-canvas");

    gl = canvas.getContext('webgl2');
    if (!gl) alert("WebGL 2.0 isn't available");

    //
    //  Configure WebGL
    //
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    //  Load shaders and initialize attribute buffers

    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram( program );

    var vertices = [
        vec2(0,  1),
        vec2(-1,  0),
        vec2(1,  0),
        vec2(0, -1)
    ];


    // Load the data into the GPU

    var bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

    // Associate out shader variables with our data buffer

    var positionLoc = gl.getAttribLocation( program, "aPosition" );
    gl.vertexAttribPointer( positionLoc, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray(positionLoc);

    thetaLoc = gl.getUniformLocation(program, "uTheta");

    // Initialize event handlers

    document.getElementById("slider").onchange = function(event) {
        speed = 100 - event.target.value;
    };
    document.getElementById("Direction").onclick = function (event) {
        direction = !direction;
    };

    // Uniform Color Location ******************************
    uColorsLoc = gl.getUniformLocation(program, 'uColors');

    // Random Color Generator ******************************
    function randomColorArray() {
      // Generates a random int between 0 - 255
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);

      // Displays the colors generated
      document.getElementById("results-red").innerHTML = red;
      document.getElementById("results-green").innerHTML = green;
      document.getElementById("results-blue").innerHTML = blue;

      // Divides the result by 255 and rounds the result to 2 decimal places
      red = (red / 255).toFixed(2);
      green = (green / 255).toFixed(2);
      blue = (blue / 255).toFixed(2);

      // Returns the results
      let outputArray = [red,green,blue];
      return outputArray;
    }

    // Change Color Button ******************************
    document.getElementById("ColorChanger").onclick = function (event) {
      // Gets the random colors
      let randomArrayResult = randomColorArray();

      // Assigns the random colors to the main array
      colorArray[0] = randomArrayResult[0];
      colorArray[1] = randomArrayResult[1];
      colorArray[2] = randomArrayResult[2];
    };

    document.getElementById("Controls").onclick = function( event) {
        switch(event.target.index) {
          case 0:
            direction = !direction;
            break;

         case 1:
            speed /= 2.0;
            break;

         case 2:
            speed *= 2.0;
            break;
       }
    };

    window.onkeydown = function(event) {
        var key = String.fromCharCode(event.keyCode);
        switch( key ) {
          case '1':
            direction = !direction;
            break;

          case '2':
            speed /= 2.0;
            break;

          case '3':
            speed *= 2.0;
            break;
        }
    };

    render();
};

function render()
{
    gl.clear( gl.COLOR_BUFFER_BIT );

    theta += (direction ? 0.1 : -0.1);
    gl.uniform1f(thetaLoc, theta);

    // Renders the colors ******************************
    gl.uniform4fv(uColorsLoc, [colorArray[0],colorArray[1],colorArray[2],1]);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    setTimeout(
        function () {requestAnimationFrame(render);},
        speed
    );
}
