---
description: Draws a rectangle on the screen.
sidebar_class_name: hidden
---

# DrawRectangle

> **_This function was added in DSL 1_**

## Description

Draws a rectangle on the screen with the specified position, size, and color.

Position and size in normalized coords, relative to the screen, 0-1.

```lua
function DrawRectangle(x, y, width, height, red, green, blue, alpha) --[[ ... ]] end
```

## Parameters

- `x`: _`number`_ - The x-coordinate of the rectangle's top-left corner (0-1).
- `y`: _`number`_ - The y-coordinate of the rectangle's top-left corner (0-1).
- `width`: _`number`_ - The width of the rectangle (0-1).
- `height`: _`number`_ - The height of the rectangle (0-1).
- `red`: _`number`_ - The red component of the rectangle's color (0-255).
- `green`: _`number`_ - The green component of the rectangle's color (0-255).
- `blue`: _`number`_ - The blue component of the rectangle's color (0-255).
- `alpha`: _`number`_ - The alpha component of the rectangle's color (0-255).

## Return Values

None.

## Example

Draws a red rectangle at (10%, 10%) with size (20%, 20%)

```lua
DrawRectangle(0.1, 0.1, 0.2, 0.2, 255, 0, 0, 255)
```
