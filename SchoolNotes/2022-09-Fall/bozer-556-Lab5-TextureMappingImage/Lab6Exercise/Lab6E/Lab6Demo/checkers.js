// This variable will store the WebGL rendering context
var gl;

var points =
[
    //Square
    -2.0, -1.0,  0.0,
    -2.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
     
    -2.0, -1.0,  0.0,
     0.0,  1.0,  0.0,
     0.0, -1.0,  0.0,
     
    //Triangle
     0.0, -1.0,  0.0,
     2.0, -1.0,  0.0,
     1.0,  1.0,  0.0
 ];

var texCoords =
[
     //Square
     0.0, 0.0,
     0.0, 1.0,
     1.0, 1.0,
     
     0.0, 0.0,
     1.0, 1.0,
     1.0, 0.0,
     
     //Triangle
     0.0, 0.0,
     1.0, 0.0,
     0.0, 1.0
 ];

/*	Create checkerboard texture	*/
var	checkImageWidth = 64;
var	checkImageHeight = 64;
var checkImage;

function makeCheckImage() {
    var i, j, c, idx = 0;
    checkImage = new Uint8Array(checkImageHeight*checkImageWidth*4);
    
    for (i = 0; i < checkImageHeight; i++)
    {
        for (j = 0; j < checkImageWidth; j++)
        {
            c = ( ( ((i&0x8)==0) ^ ((j&0x8)==0) ) )*255;
            checkImage[idx++] = c;
            checkImage[idx++] = c;
            checkImage[idx++] = c;
            checkImage[idx++] = 255;
        }
    }
}

function makeDiagonalImage() {
    var i, j, c, idx = 0;
    checkImage = new Uint8Array(checkImageHeight*checkImageWidth*4);
    
    for (i = 0; i < checkImageHeight; i++)
    {
        for (j = 0; j < checkImageWidth; j++)
        {
            if ( i > j ) c = 255;
            else c = 0;
            checkImage[idx++] = c;
            checkImage[idx++] = c;
            checkImage[idx++] = c;
            checkImage[idx++] = 255;
        }
    }
}


var texName, texName2;

var p;
var mv;
var pLoc;
var mvLoc;


window.onload = function init() {
    // Set up a WebGL Rendering Context in an HTML5 Canvas
    var canvas = document.getElementById("gl-canvas");
    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL isn't available");
    }
    
    //  Configure WebGL
    gl.clearColor(0.5,0.5,0.5, 1.0);
    
    console.log(gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
    //  Load shaders and initialize attribute buffers
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);
    
    // Set up data to draw
    //***Vertices***
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vertexBuffer );
    gl.bufferData( gl.ARRAY_BUFFER,  flatten(points), gl.STATIC_DRAW );
    program.vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer( program.vPosition, 3, gl.FLOAT, gl.FALSE, 0, 0 );
    gl.enableVertexAttribArray( program.vPosition );
    
    //***Texture Coordinates***
    var texCoordsBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, texCoordsBuffer );
    gl.bufferData( gl.ARRAY_BUFFER,  flatten(texCoords), gl.STATIC_DRAW );
    program.vTexCoord = gl.getAttribLocation(program, "vTexCoord");
    gl.vertexAttribPointer( program.vTexCoord, 2, gl.FLOAT, gl.FALSE, 0, 0 );
    gl.enableVertexAttribArray( program.vTexCoord );
    
    
    // Get addresses of transformation uniforms
    projLoc = gl.getUniformLocation(program, "p");
    mvLoc = gl.getUniformLocation(program, "mv");
    
    //Set up viewport
    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    
    //Set up projection matrix
    p = perspective(60.0, gl.viewportWidth/gl.viewportHeight, 1.0, 30.0);
    gl.uniformMatrix4fv(projLoc, gl.FALSE, flatten(p));
    
    //tell WebGL that the texture data will be packed tightly in memory
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    
    //generate a checkerboard image into checkImage array in System RAM
    makeCheckImage();
        
    //Tell shader to use texture unit 0
    gl.uniform1i(gl.getUniformLocation(program, "tex"), 0);
    
    //Make texture unit 0 active so that the texture binds to it
    gl.activeTexture(gl.TEXTURE0);
    
    //Create a texture name
    texName = gl.createTexture();
    
    //Bind the texture
    gl.bindTexture(gl.TEXTURE_2D, texName);
    
    //Set texture parameters
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    
    //Load texture data into WebGL from System RAM
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, checkImageWidth, checkImageHeight,
                  0, gl.RGBA, gl.UNSIGNED_BYTE, checkImage);
    
    
    // Or draw just before the next repaint event
    requestAnimFrame(render);
};


function render() {
    // clear the screen
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    // draw
    gl.uniformMatrix4fv(mvLoc, gl.FALSE, flatten(translate(0,0,-3.6)));
    gl.drawArrays(gl.TRIANGLES, 0, 9);
    
    requestAnimFrame(render);
}