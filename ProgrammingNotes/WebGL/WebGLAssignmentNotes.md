# Assignment 2 Notes

# Table of Contents


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Assignment 2 Notes](#assignment-2-notes)
- [Table of Contents](#table-of-contents)
- [Classic OpenGL Transformation Pipeline](#classic-opengl-transformation-pipeline)

<!-- /code_chunk_output -->

# Classic OpenGL Transformation Pipeline

- Classic OpenGL pipeline
  - Two main stages of vertex transformation, each with its own transformation matrix
  - Built into the graphics hardware
  - Classic Pipeline:
    - $Vertices \rArr$ **Model View** $\rArr$ **Projection** $\rArr Vertices$
- Each vertex in the scene passes through two main stages of transformations:
  - **Model View Transformation** - translation, rotation, scaling of object, 3D viewing transformation
  - **Projection** - perspective or orthographic
- One global matrix internally for each of the two stages above:
  - $M_{modelview}$
  - $M_{projection}$

















