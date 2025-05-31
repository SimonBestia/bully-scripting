---
description: Check if a keyboard key was just pressed.
sidebar_class_name: hidden
---

# IsKeyBeingPressed

> **_This function was added in DSL 1_**

## Description

Check if a keyboard key was just pressed.

This should be a string representing the key, such as `'W'`, `'A'`, `'S'`, `'D'`, etc. The key names are **case-sensitive**.

```lua
function IsKeyBeingPressed(key) --[[ ... ]] end
```

## Parameters

- `key`: _`string`_ - The name of the key to check.

## Return Values

- `justPressed`: _`boolean`_ - Returns _`true`_ if the key was just pressed, otherwise _`false`_.

## Example

```lua
if IsKeyBeingPressed('W') then
  print('W key was just pressed!')
end
```

## See Also

- DSL
  - [`IsKeyPressed`](./IsKeyPressed) - Check if a key is being held down.
  - [`IsKeyBeingReleased`](./IsKeyBeingReleased) - Check if a key was just released.
