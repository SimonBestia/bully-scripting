---
description: Get the ratio that should be used to draw a texture without affecting its aspect ratio.
sidebar_class_name: hidden
---

# GetTextureDisplayAspectRatio

## Description

Get the ratio that should be used to draw a `texture` without affecting its aspect ratio. This value is the same as dividing the texture's aspect ratio by the display's aspect ratio.

For the reasons described in [`GetDisplayResolution`](./GetDisplayResolution), you should call this function each frame it is needed rather than just once at setup.

```lua
function GetTextureDisplayAspectRatio(texture) --[[ ... ]] end
```

## Parameters

- `texture`: _`userdata`_ - The texture to get the display aspect ratio for.

## Return Values

- `aspectRatio`: _`number`_ - The aspect ratio of the texture relative to the display resolution.

## Example

```lua
local texture = CreateTexture('path/to/texture.png')
-- highlight-next-line
local aspectRatio = GetTextureDisplayAspectRatio(texture)
print('Display Aspect Ratio: ' .. aspectRatio) -- Outputs the display aspect ratio of the texture
```

## See Also

- DSL
  - [`CreateTexture`](./CreateTexture)
  - [`GetDisplayResolution`](./GetDisplayResolution)
