# Donut Tutorial

- Blender Guru : YouTube
- 16 Video Playlist : [First Video](https://youtu.be/nIoXOplUvAw)

# Base Donut

1. Add Base shape (torus): `SHIFT + A` > *Mesh* > shape
2. Adjust Settings in the Bottom Left
   1. Window goes away when you click off of shape
   2. Guru recommends:
      1. Major Segment: 48
      2. Minor Segment: 16
      3. Major Radius: 0.91
      4. Minor Radius: 0.61
3. Scale Donut down to size
   1. Guru recommends Dimensions: (0.1, 0.1, 0.0403)
4. Apply Scale
   1. Scale should always be (1,1,1)
   2. Hit `CTRl + A` > *Scale*

# Base Shading 

1. Change Shading
   1. `RMB` object
   2. *Shade Smooth* : smooths edges 
   3. *Shade Flat* : blocky base version

# Sub Surface modification

- AKA. Subsurf modifier
1. Click the Wrench icon, called *Modifier Properties*
2. Click *Add Modifier* > Subdivision Surface
3. Levels Viewport: increases the number of division times
   1. Higher levels increase render time

# Edit Mode

### Add Lumps to Donut

1. In Edit Mode, use Vertex Select
2. Toggle Proportional Editing
   1. KeyB: `O`
   2. Circle Icon at top
3. Grab/Scale now moves vertices around selection
4. If not working, adjust size with scroll wheel
   1. Roll Up: Decrease selection 
   2. Roll Down: Increase Selection
5. Move in Same Direction
   1. Used to scale only in the direction the faces are facing
   2. "Shrink and Fatten" Tool
   3. KeyB: `ALT + S`


# Add the Icing

- Toggle Orthographic mode: `NumPad 5`
- Look straight at the donut: `NumPad 1`
- Edit Mode
- Select half of the donut vertices
  - Can't select vertices through solid objects
  - Have to toggle X-Ray: `ALT + Z`
  - Square Icon in top right
- Duplicate the top half: `SHIFT + D`
  - Right Click to leave duplication where it started
- Have to separate duplication from original
  - Hit `P`
  - Click "By Selection"

# Rename Objects

- Double click object in the scene selection
- With Object selected in the viewport: `F2`

# Add Solidify modifier

- adds thickness
- Set "Offset" to 1
- Set "Thickness" to 0.0025
- Order of the modifiers matters
  - Applied from top to bottom
  - Move the solidify above the Subdivision

# Add Drips to Icing

- Hide Modifier in Edit Mode
  - In the modifier panel, click "Edit Mode"
  - This hides the modification in edit mode
  - Switching back to Object mode shows it again
