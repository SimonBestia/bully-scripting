---
description: Draws a texture on the screen.
sidebar_class_name: hidden
---

# DrawTexture

> **_This function was added in DSL 1_**

## Description

Draws a texture on the screen at a specified position and size, with optional color and transparency adjustments.

The texture is defined by a _`userdata`_ object created with [`CreateTexture`](./CreateTexture).

:::info
Keep the general rules of rendering in mind. Use [`GetTextureDisplayAspectRatio`](./GetTextureDisplayAspectRatio) to preserve the aspect ratio of the texture.
:::

The position and size are specified as percentages of the screen dimensions, allowing for flexible placement and scaling. `x` and `y` define the top left of the rectangle.

```lua
function DrawTexture(texture, x, y, width, height, red, green, blue, alpha) --[[ ... ]] end
```

## Parameters

- `texture`: _`userdata`_ - The texture to draw. This should be a valid texture created with [`CreateTexture`](./CreateTexture).
- `x`: _`number`_ - The X coordinate of the top-left corner of the rectangle where the texture will be drawn. This value should be between _`0`_ and _`1`_, representing a percentage of the screen width.
- `y`: _`number`_ - The Y coordinate of the top-left corner of the rectangle where the texture will be drawn. This value should be between _`0`_ and _`1`_, representing a percentage of the screen height.
- `width`: _`number`_ - The width of the rectangle where the texture will be drawn. This value should be between _`0`_ and _`1`_, representing a percentage of the screen width.
- `height`: _`number`_ - The height of the rectangle where the texture will be drawn. This value should be between _`0`_ and _`1`_, representing a percentage of the screen height.
- `red?`: _`number`_ - (Optional) The red component of the color to apply to the texture. This value should be between _`0`_ and _`255`_. Defaults to _`255`_.
- `green?`: _`number`_ - (Optional) The green component of the color to apply to the texture. This value should be between _`0`_ and _`255`_. Defaults to _`255`_.
- `blue?`: _`number`_ - (Optional) The blue component of the color to apply to the texture. This value should be between _`0`_ and _`255`_. Defaults to _`255`_.
- `alpha?`: _`number`_ - (Optional) The alpha component of the color to apply to the texture. This value should be between _`0`_ and _`255`_. Defaults to _`255`_.

## Return Values

None.

## Example

```lua
local texture = CreateTexture('path/to/texture.png')
local x, y = 0.5, 0.5
local w, h = 0.2, 0.2
local r, g, b, a = 255, 255, 255, 255
-- highlight-next-line
DrawTexture(texture, x, y, w, h, r, g, b, a)
```

## See Also

- DSL
  - [`CreateTexture`](./CreateTexture)
  - [`DrawTexture2`](./DrawTexture2)
