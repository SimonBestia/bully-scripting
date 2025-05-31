---
description: Check if a keyboard key is currently pressed.
sidebar_class_name: hidden
---

# IsKeyPressed

> **_This function was added in DSL 1_**

## Description

Check if a keyboard key is currently pressed.

```lua
function IsKeyPressed(key) --[[ ... ]] end
```

## Parameters

- `key`: _`string`_ - The name of the key to check.

## Return Values

- `pressed`: _`boolean`_ - Returns _`true`_ if the key is currently pressed, otherwise _`false`_.

## Example

```lua
if IsKeyPressed('W') then
  print('W key is currently pressed!')
end
```

## See Also

- DSL
  - [`IsKeyBeingPressed`](./IsKeyBeingPressed) - Check if a key was just pressed.
  - [`IsKeyBeingReleased`](./IsKeyBeingReleased) - Check if a key was just released.
