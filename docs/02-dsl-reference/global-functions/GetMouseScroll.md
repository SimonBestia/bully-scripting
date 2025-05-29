---
description: Returns the scroll wheel value for the mouse.
sidebar_class_name: hidden
---

# GetMouseScroll

> **_This function was added in DSL 5_**

## Description

Returns the scroll wheel value for the mouse.

```lua
function GetMouseScroll() --[[ ... ]] end
```

## Parameters

None.

## Return Values

- `scroll`: _`number`_ - The scroll wheel value. Positive values indicate scrolling up, while negative values indicate scrolling down. A value of _`0`_ means no scrolling has occurred since the last call to this function.

## Example

```lua
local scroll = GetMouseScroll()
if scroll > 0 then
    print("Scrolled up: " .. scroll)
elseif scroll < 0 then
    print("Scrolled down: " .. scroll)
else
    print("No scrolling has occurred.")
end
```
