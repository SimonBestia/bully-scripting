---
description: Get the aspect ratio of a texture.
sidebar_class_name: hidden
---

# GetTextureAspectRatio

> **_This function was added in DSL 1_**

## Description

Get the aspect ratio of a `texture` created by [`CreateTexture`](./CreateTexture). This value is the same as dividing the `width` and `height` returned by [`GetTextureResolution`](./GetTextureResolution).

```lua
function GetTextureAspectRatio(texture) --[[ ... ]] end
```

## Parameters

- `texture`: _`userdata`_ - The texture to get the aspect ratio of.

## Return Values

- `aspectRatio`: _`number`_ - The aspect ratio of the texture.

## Example

```lua
local texture = CreateTexture('path/to/texture.png')
-- highlight-next-line
local aspectRatio = GetTextureAspectRatio(texture)
print('Aspect Ratio: ' .. aspectRatio) -- Outputs the aspect ratio of the texture
```

## See Also

- DSL
  - [`CreateTexture`](./CreateTexture)
  - [`GetTextureResolution`](./GetTextureResolution)
