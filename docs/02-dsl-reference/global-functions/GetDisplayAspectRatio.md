---
description: Return the current display aspect ratio.
sidebar_class_name: hidden
---

# GetDisplayAspectRatio

> **_This function was added in DSL 1_**

## Description

Return the current aspect ratio. This value is the same as dividing the `width` and `height` returned by [`GetDisplayResolution`](./GetDisplayResolution).

```lua
function GetDisplayAspectRatio() --[[ ... ]] end
```

## Parameters

None.

## Return Values

- `aspectRatio`: _`number`_ - The current display aspect ratio, calculated as `width / height`.

## Example

```lua
local aspectRatio = GetDisplayAspectRatio()
print("Current Display Aspect Ratio: " .. aspectRatio)
```

## See Also

- DSL
  - [`GetDisplayResolution`](./GetDisplayResolution)
