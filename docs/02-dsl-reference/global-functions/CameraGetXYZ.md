---
description: Returns the current camera position and its look-at coordinates.
sidebar_class_name: hidden
---

# CameraGetXYZ

> **_This function was added in DSL 10_**

## Description

Returns the current position of the camera and the coordinates it is looking at.

Useful for debugging or placing static cameras with [`CameraSetXYZ`](/docs/game-reference/global-functions/CameraSetXYZ).

```lua
function CameraGetXYZ() --[[ ... ]] end
```

## Parameters

None.

## Return Values

- `posX`: _`number`_ - The camera's X position.
- `posY`: _`number`_ - The camera's Y position.
- `posZ`: _`number`_ - The camera's Z position.
- `lookX`: _`number`_ - The X coordinate the camera is looking at.
- `lookY`: _`number`_ - The Y coordinate the camera is looking at.
- `lookZ`: _`number`_ - The Z coordinate the camera is looking at.

## Example

```lua
local posX, posY, posZ, lookX, lookY, lookZ = CameraGetXYZ()
print("Camera Position: X=" .. posX .. ", Y=" .. posY .. ", Z=" .. posZ)
print("Camera Look At Position: X=" .. lookX .. ", Y=" .. lookY .. ", Z=" .. lookZ)
```

## See Also

- Game's Native
  - [`CameraSetXYZ`](../../game-reference/global-functions/CameraSetXYZ) - Sets the camera position and its look-at in the game world.
