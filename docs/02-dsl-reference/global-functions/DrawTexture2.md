---
description: ...
sidebar_class_name: hidden
---

# DrawTexture2

## Description

This function is used to draw a texture, pretty much similar to DrawTexture, but the origin point is centered instead of top-left corner. It also supports image rotation from 0 to 360 degrees.

```lua
function DrawTexture2(texture, x, y, width, height, rotation, red, green, blue, alpha) --[[ ... ]] end
```

## Parameters

- `texture`: _`userdata`_ - The returned value from CreateTexture function.
- `x`: _`number`_ - X screen coordinate (0 - 1)
- `y`: _`number`_ - Y screen coordinate (0 - 1)
- `width`: _`number`_ - Texture width (0 - 1)
- `height`: _`number`_ - Texture height (0 - 1)
- `rotation`: _`number`_ - Rotation in degree (0 - 360)
- `red`: _`number`_ - RGBA format (0 - 255)
- `green`: _`number`_ - RGBA format (0 - 255)
- `blue`: _`number`_ - RGBA format (0 - 255)
- `alpha`: _`number`_ - RGBA format (0 - 255)

Starting from DSL 7, the red, green, blue, and alpha arguments are optional. If omitted, DSL will use the default value (255).

## Return Values

None.

## Example

Drawing image with 90 degrees rotated and adjusted its width to be proportional to the screen's aspect ratio.
```lua
local Texture_UserData = CreateTexture('MyProfilePicture.png')
local Texture_AspectRatio = GetTextureDisplayAspectRatio(Texture_UserData)
while true do
  DrawTexture2(Texture_UserData, 0.5, 0.5, 0.15 * Texture_AspectRatio, 0.15, 90, 255, 50, 50, 255)
  Wait(0)
end
```

Drawing image without respect to the screen's aspect ratio (real width).
```lua
local Texture_UserData = CreateTexture('MyProfilePicture.png')
while true do
  DrawTexture2(Texture_UserData, 0.5, 0.5, 0.15, 0.15, 90, 255, 50, 50, 255)
  Wait(0)
end
```
