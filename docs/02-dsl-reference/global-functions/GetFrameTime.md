---
description: Returns the amount of time that has passed since the last frame in seconds.
sidebar_class_name: hidden
---

# GetFrameTime

> **_This function was added in DSL 1_**

## Description

Returns the amount of time that has passed since the last frame in seconds - delta time.

```lua
function GetFrameTime() --[[ ... ]] end
```

## Parameters

None.

## Return Values

- `frameTime`: _`number`_ - The amount of time that has passed since the last frame in seconds.

## Example

```lua
local frameTime = GetFrameTime()
print("Frame time: " .. frameTime .. " seconds")
```
