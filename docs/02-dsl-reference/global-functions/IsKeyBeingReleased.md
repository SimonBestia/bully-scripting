---
description: Check if a keyboard key was just released.
sidebar_class_name: hidden
---

# IsKeyBeingReleased

## Description

Check if a keyboard key was just released.

```lua
function IsKeyBeingReleased(key) --[[ ... ]] end
```

## Parameters

- `key`: _`string`_ - The name of the key to check.

## Return Values

- `justReleased`: _`boolean`_ - Returns _`true`_ if the key was just released, otherwise _`false`_.

## Example

```lua
if IsKeyBeingReleased('W') then
  print('W key was just released!')
end
```

## See Also

- DSL
  - [`IsKeyBeingPressed`](./IsKeyBeingPressed) - Checks if a key was just pressed.
  - [`IsKeyPressed`](./IsKeyPressed) - Checks if a key is currently pressed.
