---
description: Get the resolution of a texture.
sidebar_class_name: hidden
---

# GetTextureResolution

> **_This function was added in DSL 1_**

## Description

Get the resolution of a `texture`. Keep in mind that textures are drawn using [normalized coords](/docs/dsl-reference/basic-concepts/render-functions), so you will not usually need the actual resolution.

```lua
function GetTextureResolution(texture) --[[ ... ]] end
```

## Parameters

- `texture`: _`userdata`_ - The texture to get the resolution of.

## Return Values

- `width`: _`number`_ - The width of the texture.
- `height`: _`number`_ - The height of the texture.

## Example

```lua
local texture = CreateTexture('example.png')
-- highlight-next-line
local width, height = GetTextureResolution(texture)
print('Texture resolution: ' .. width .. 'x' .. height)
```

## See Also

- DSL
  - [`CreateTexture`](./CreateTexture)
