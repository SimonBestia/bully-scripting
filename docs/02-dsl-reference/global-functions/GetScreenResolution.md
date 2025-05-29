---
description: Get the size of the primary monitor.
sidebar_class_name: hidden
---

# GetScreenResolution

> **_This function was added in DSL 5_**

## Description

Get the size of the primary monitor.

Primarily intended for centering the window during the `UpdateWindow` event.

```lua
function GetScreenResolution() --[[ ... ]] end
```

## Parameters

None.

## Return Values

- `width`: _`number`_ - The width of the primary monitor in pixels.
- `height`: _`number`_ - The height of the primary monitor in pixels.

## Example

```lua
local width, height = GetScreenResolution()
print("Screen Resolution: " .. width .. "x" .. height)
```
