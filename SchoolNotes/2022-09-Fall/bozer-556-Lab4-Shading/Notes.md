# Lab 4 Notes

[Assignment](https://emunix.emich.edu/~mevett/GraphicsCourse/Labs/ReginaLab_Lighting_1/www.cs.uregina.ca/Links/class-info/315/WebGL2/Lab6/index.html)

# Table of Contents

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Lab 4 Notes](#lab-4-notes)
- [Table of Contents](#table-of-contents)
- [Shading Language Details](#shading-language-details)
    - [Vector Components](#vector-components)
    - [Structured Data](#structured-data)
    - [Arrays](#arrays)
    - [Vertex Property Interpolation](#vertex-property-interpolation)

<!-- /code_chunk_output -->

# Shading Language Details

### Vector Components

- vectors sent to the shaders typically represent colors, vertex coordinates, surface normals, texture coordinates
- GLSL provides special accessors to refer to the components:
  - r, g, b, a - used for colors. red, green, blue, alpha (blend factor)
  - x, y, z, w - used for spacial coordintaes like vectors and points
  - s, t, p, q - used for texture lookups
- Built in Functions:
  - `max(val1, val2)` - returns the greater of the two values
  - `min(val1, val2)` - returns the lesser of the two values
  - `pow(val1, val2)` - returns val1 raised to the power of val2
  - `sqrt(val)` - returns the square root
  - `normalize(vec)` - returns a vector of unit length in the direction of vector vec
  - `length(vec)` - returns the length of vector
  - `dot(vec1, vec2)` - calculates the dot product of vec1 and vec2
  - `cross(vec1, vec2)` - calculates the cross product of vec1 and vec2

### Structured Data

- Simple data type collections
- Do not support member functions
- Define structure:
```
struct _light {
  vec4 position;
  vec4 color;
}
```
- Instances of structures declared:
  - `_light light1;`
- Dot notation to access data
- Entire structure can't be accessed at once
- Initialize Structure:
```
_light light2 = _light(
  vec4(1.0,1.0,1.0,0.0),
  vec4(1.0,0.0,1.0,1.0)
);
```

### Arrays

- Similar to C++ arrays
- must be indexed by a constant valued expression, unless the array is a uniform

### Vertex Property Interpolation












