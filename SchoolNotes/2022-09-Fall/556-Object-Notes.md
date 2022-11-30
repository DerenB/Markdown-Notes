# Objects

# Table of Contents

- [Objects](#objects)
- [Table of Contents](#table-of-contents)
- [Required Matrices](#required-matrices)
- [Hierarchical Modelling](#hierarchical-modelling)
- [Imaging Applications](#imaging-applications)

# Required Matrices

- Rotation of Base: $R_{b}$
  - Apply $M=R_{b}$ to base
- Translate lower arm <u>relative</u> to base: $T_{lu}$
- Rotate lower arm around joint: $R_{lu}$
  - Apply $M=R_{b}T_{lu}R_{lu}$ to lower arm
- Translate upper arm <u>relative</u> to upper arm: $T_{uu}$
- Rotate upper arm around joint: $R_{uu}$
  - Apply $M=R_{b}T_{lu}R_{lu}T_{uu}R_{uu}$ to upper arm

# Hierarchical Modelling

- Stack-Based Traversal
  - Set model-view matrix to $M$ and draw Torso
  - Set model-view matrix to $MM_{h}$ and draw head
  - For left-upper arm need $MM_{lua}$ and so on
  - Rather that recomputing $MM_{lua}$ from scratch or using an inverse matrix, we can use a matrix stack to store M and other matrices as we traverse the tree

# Imaging Applications

- Fragment Shaders and Images
  - Suppose that we send a rectangle (two triangles) to the vertex shader and render it with an (n x m) texture map
  - 





