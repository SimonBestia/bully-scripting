---
description: Get the current display resolution used by DSL's renderer.
sidebar_class_name: hidden
---

# GetDisplayResolution

> **_This function was added in DSL 1_**

## Description

Return the current display resolution used by DSL's renderer.

Although this shouldn't change during a normal play session, it is possible for another mod to resize the game.

:::tip
For this reason, it is often a good idea to get this value each frame you need it rather than once at setup.
:::

Also keep in mind that most render functions take [normalized coords](/docs/dsl-reference/basic-concepts/render-functions), meaning you will not usually need the actual resolution.

```lua
function GetDisplayResolution() --[[ ... ]] end
```

## Parameters

None.

## Return Values

- `width`: _`number`_ - The width of the display resolution.
- `height`: _`number`_ - The height of the display resolution.

## Example

```lua
local width, height = GetDisplayResolution()
print("Display resolution is " .. width .. "x" .. height)
```
