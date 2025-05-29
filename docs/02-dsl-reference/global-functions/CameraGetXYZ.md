---
description: Returns the current position of the camera in the game world.
sidebar_class_name: hidden
---

# CameraGetXYZ

> **_This function was added in DSL 10_**

## Description

Returns the current position of the camera in the game world.

```lua
function CameraGetXYZ() --[[ ... ]] end
```

## Parameters

None.

## Return Values

- `x`: _`number`_ - The X coordinate of the camera position.
- `y`: _`number`_ - The Y coordinate of the camera position.
- `z`: _`number`_ - The Z coordinate of the camera position.

## Example

```lua
local x, y, z = CameraGetXYZ()
print("Camera Position: X=" .. x .. ", Y=" .. y .. ", Z=" .. z)
```

## See Also

<!-- DSL -->

<!-- - [`CameraGetRotation`](./CameraGetRotation) - Returns the current rotation of the camera. -->

- Game's Native
  - [`CameraSetXYZ`](../../game-reference/global-functions/CameraSetXYZ) - Sets the camera position in the game world.
