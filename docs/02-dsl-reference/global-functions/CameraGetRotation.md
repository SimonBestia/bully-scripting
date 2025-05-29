---
description: Returns the current rotation angles of the camera in the game world.
sidebar_class_name: hidden
---

# CameraGetRotation

> **_This function was added in DSL 10_**

## Description

Returns the current rotation angles of the camera in the game world.

```lua
function CameraGetRotation() --[[ ... ]] end
```

## Parameters

None.

## Return Values

- `pitch`: _`number`_ - The pitch angle of the camera.
- `roll`: _`number`_ - Always zero (0).
- `yaw`: _`number`_ - The yaw angle of the camera.

## Example

```lua
local pitch, roll, yaw = CameraGetRotation()
print(pitch, roll, yaw)
```
