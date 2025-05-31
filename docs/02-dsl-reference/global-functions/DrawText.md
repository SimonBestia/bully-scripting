---
description: Draws text on the screen.
sidebar_class_name: hidden
---

# DrawText

> **_This function was added in DSL 1_**

## Description

Draws text on the screen in normalized coordinates.

The text is drawn at the top-center of the screen by default, but can be positioned using the [`SetTextPosition`](./SetTextPosition). The text is rendered using the current font set by [`SetTextFont`](./SetTextFont).

The function returns the width and height of the drawn text in normalized coordinates, which can be used for further positioning or layout calculations.

```lua
function DrawText(text) --[[ ... ]] end
```

## Parameters

- `text`: _`string`_ - The text to draw on the screen.

## Return Values

- `width`: _`number`_ - The width of the drawn text in normalized coordinates.
- `height`: _`number`_ - The height of the drawn text in normalized coordinates.

## Example

```lua
local width, height = DrawText('Hello, world!')
```
