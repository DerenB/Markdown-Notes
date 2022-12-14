#version 300 es
precision highp float;

out vec4 fragColor;
uniform vec2 iResolution;
uniform float iTime;
uniform vec2 iMouse;

/*
 * Deren Bozer
 * COSC-556 F22
 * Lab 4 - Shading
 * Modified version of LE3_ShaderPlay.frag
 * Shadertoy for absolute beginners
*/

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    /* Default Code
    // Normalized pixel coordinates (from 0 to 1)
    
    vec2 uv = fragCoord/iResolution.xy;   
    // Time varying pixel color
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));

    // Output to screen
    fragColor = vec4(col,1.0);
    */
    
    // ********** Code from Video **********
    vec2 uv = fragCoord.xy / iResolution.xy;

    uv -= 0.5;
    uv.x *= iResolution.x/iResolution.y;

    float d = length(uv);
    float r = 0.3;

    float c = smoothstep(r, r-0.01, d);

    if(d < 0.3) {
        c = 1.0;
    } else {
        c = 0.0;
    }

    fragColor = vec4(vec3(c), 1.0);
}

// main - just calls the ShaderToy mainImage to help with code compatibility
void main() 
{ 
    mainImage(fragColor, gl_FragCoord.xy);
}




