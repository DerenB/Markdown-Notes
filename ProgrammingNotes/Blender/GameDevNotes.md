
# Blender 

# Controls

### Navigation

- Rotate around scene: `Middle Mouse Button`
- Move Left/Right around scene: `L-SHIFT + Middle Mouse Button`
- Set Camera to current view: `CTRL + ALT + NumPad 0`
- Zoom
  - Option 1: `Mouse Wheel`
  - Option 2: `L-CTRL + Mouse Movement`
- NumPad Views
  - Front View: `1`
  - Side View: `3`
  - Top View: `7`
  - Bottom View: `9`
  - Reverse/Flip any view: `CTRL + number`
  - Toggle Orthographic / Perspective View: `5`
  - Camera View: `0`
- Center on Nodes: `HOME`

### Windows

- Toolbar: `T`
- Transform: `N`

# Random Notes

- Grid
  - White Lines / Large Squares: 1 meter wide
  - Grey Lines / Small Squares: 10cm wide

# Objects

### Adding Objects

- Add > Mesh
  - Adds it to the current location of the 3D marker
  - Keyboard Shortcut for Add menu: `L-SHIFT + A`
- Move 3D Marker: `L-SHIFT + RMB`
- Delete Object
  - Select object with `LMB`
  - Remove with `DEL`

### Moving Objects

- Grab Object: `G`
- Place Object After Grab: `LMB`
- Move Object After Grab:
  - Free Move: `Mouse Movement`
  - Lock on the x-axis: `X`
  - Lock on the y-axis: `Y`
  - Lock on the z-axis: `Z`
- Rotate: `R`
- Scale: `S`
- Cancel Changes: `RMB`

# Viewports

- X-Ray - see through everything: `ALT + Z`
- Wireframe - see wire outlines of objects
- Solid - solid faces
- Material Preview
- Rendered

# Render

### Render Engines

- Eevee
  - fast rendering system
  - not completely accurate to real life
- Cycles
  - Slow rendering, might start grainy

### Render Properties

- Change Render Resolution/Dimensions
  - Output Properties side button
  - Format
  - Set Resolution X and Y
  - Can click 3 dots at top of section for preset dimensions

### Change Render Background

- [Background Images](https://polyhaven.com/)
- Shader Editor > Top Right set to `World`
- Add > Texture > Environmental Texture
- Open HRI file

# Materials

- Have to be in ViewPorts: Material Preview or Render to see materials
- Shader Editor
  - Click Editor Type Button (top left, sphere)
  - Click NEW at top to add a shader

### Smooth out object
- Right click object
- Shade Smooth
- Keep object shape:
  - Right Menu > Object Data Properties > Normals
  - Check Auto Smooth
  - This smooths the edges of the shape but keeps the defined borders

### Principled BSDF

- Base Color: Changes the shader base
- Metallic: 0 No Metal -> 1 All Metal
- Roughness: 0 Smooth -> 1 Rough

# Light

### Settings

- Select Light Object
- Right Menu > Object Data Properties

### Light Types

- Point - shines in all directions from point
- Sun - Arbitrary light, acts like real world sun
- Spotlight - spot light
- Area - big flat light

# Edit Mode

- Selection Object, click drop down menu at top, select "Edit Mode"
- `Tab` will toggle between object and edit modes

### Geometry Selection

- `ALT + LMB` to select all edges in face

#### Vertex Select

- Next to Edit Mode drop down
- KeyB Shortcut: `1`
- Select Vertices 

#### Edge Select

- Next to Edit Mode drop down
- KeyB Shortcut: `2`
- Select Edge of shape

#### Face Select

- Next to Edit Mode drop down
- KeyB Shortcut: `3`
- Select face of shape

### Extrude

- While in Face Select, can extrude additional topography
  - KeyB: `E`
- Don't go inside other objects with extrude

### Inset

- KeyB: `I`
- Opposite of Extrude 

### Loop Cut

- KeyB: `CTRL + R`
- Left Click where you want to place the Loop Cut
  - Left Click Again where you want the cut to be
  - Right Click if you want it exactly in the middle