---
description: Get the game's current internal resolution.
sidebar_class_name: hidden
---

# GetInternalResolution

## Description

Get the game's current internal resolution.

You may be looking for [`GetDisplayResolution`](./GetDisplayResolution) instead.

```lua
function GetInternalResolution() --[[ ... ]] end
```

## Parameters

None.

## Return Values

- `width`: _`number`_ - The width of the internal resolution.
- `height`: _`number`_ - The height of the internal resolution.

## Example

```lua
local width, height = GetInternalResolution()
print("Internal Resolution: " .. width .. "x" .. height)
```

## See Also

- DSL
  - [`GetDisplayResolution`](./GetDisplayResolution)
