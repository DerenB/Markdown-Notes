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
- Have to turn on Snap mode
  - Can hold `CTRL` while moving an object
  - Or Toggle on at the top center U-Magnet 
- Next to the magnet, can change what type of snapping
- Set to "Face Nearest"
- Check "Snap to Same Target" checkbox

# Multiple Windows

- Method 1
  - Hover mouse over edge of window (double arrow cursor)
  - Right click
  - Split horizontal or vertical
  - Click cursor wherever on screen
- Method 2
  - Move cursor to top right corner
  - Cursor turns into crosshair
  - Drag and click

# Apply Modifier

- Move to the top of the modifier window
- Click dropdown arrow > Apply
- Add another sub surface modifier at the bottom after applying other

# Add Icing Drips

- Select vertices
- Extrude with `E` to drag down

# Add Donut Center Crease

- Apply sub surface modifier to donut
- Hide icing
- Hold `ALT` and click the center ring to select all vertices around donut
- Click `S` and drag inward

# Snap Icing

- Icing now floating on top of center crease
- Add modifier "Shrinkwrap" to fix
- Place at top of modifier list
- Use eye drop on donut to specify what to shrink to

# Sculpting

- Have to clear out the modifiers (apply them)
- Open "Sculpting" tab at top
- Shortcuts
  - Change Radius: `F`
  - Change Strength: `SHIFT + F`
- Sculpt Tools
  - "Grab": `G` - grab and pull out
  - Inflate: `I` - bulbous
    - Have to set brush to "Airbrush"
    - Click "Tool" on right
    - Stroke > Stroke Method > Airbrush
- Can go back to Layout mode and add another subdivision modifier if things get too jagged

# Render Camera Positioning

- Snap Camera to current view: `CTRL + ALT + NumPad`
- Using View:
  - Open toolbar with `N`
  - Click `View` tab
  - `View Lock` Section
  - Check `Lock Camera to View` box
  - The camera is now pinned to viewport
  - Any panning and rotating of the view moves the camera

# Render Engine

- Blender comes with Cycles and Eevee render engines
- Eevee
  - a real time render engine
- Cycles
  - Slower than Eevee (in real time)
  - an "offline" render engine
  - Ray Tracer / Path tracer
  - Calculates light bouncing
- Set up GPU Render
  - Top > Edit > Preferences
  - System Tab
  - Cuda / OptiX (NVIDIA choices)
  - Use "OptiX" if you have both
