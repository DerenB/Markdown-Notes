# Objects

# Table of Contents

- [Objects](#objects)
- [Table of Contents](#table-of-contents)
- [Required Matrices](#required-matrices)
- [Hierarchical Modelling](#hierarchical-modelling)
- [Imaging Applications](#imaging-applications)
- [Rasterizer](#rasterizer)
- [Exam Review](#exam-review)

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

# Rasterizer

- WritePiexl(x,y,value)
  - Given: $X_{0}$, $X_{1}$, $Y_{0}$, $Y_{1}$
- Digital Differential Analyzer
  - Determine which pixels to turn on between 2 given points (make a line)
```
float dy = y1 - y0;
float dx = x1 - x0;
float m = dy / dx;
for (x = x0, y = y0; x <= x1; x++) {
  WritePixel(x, (int) floor(y + 0.5), value)
  y += m;
}
```
- Problems:
  - Slope has to be between 0 and 1
  - If it's bigger than 1, you will skip pixels
  - Can change calculations to the vertical line instead of the horizontal
- Bresenham's Algorithm
- Midpoint line algorithm

# Exam Review

- Review Slides
- Review Book
  - Chapter 1 (exclude 1.10)
  - Chapter 2
  - Chapter 3 (exclude 3.4, 3.8)
  - Chapter 4 (exclude 4.14, 4.15)
  - Chapter 5 (exclude 5.10, 5.11) (a lot of time)
  - Chapter 6 (exclude 6.11, 6.12) (a lot of time)
  - Chapter 7 (a lot of time)
  - Chapter 8 (exclude 8.8, 8.9)
  - Chapter 9
- Bresenham's Algorithm
- Midpoint Line Algorithm
- Robot Arm Rotation (9.3, 9.4), test example






