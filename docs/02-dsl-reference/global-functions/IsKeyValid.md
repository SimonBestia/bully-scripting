---
description: Check if a keyboard key is valid.
sidebar_class_name: hidden
---

# IsKeyValid

> **_This function was added in DSL 4_**

## Description

Check if a keyboard key is valid without raising an error.

This function translates the `key` just like [`IsKeyPressed`](./IsKeyPressed) and returns a boolean indicating whether the key is valid.

```lua
function IsKeyValid(key) --[[ ... ]] end
```

## Parameters

- `key`: _`string`_ - The name of the key to check.

## Return Values

- `valid`: _`boolean`_ - Whether the key is valid.

## Example

```lua
-- Valid
local key1 = 'F5'
if IsKeyValid(key1) then
  print(key1 .. ' is a valid key!') -- Gets printed
else
  print(key1 .. ' is not a valid key.')
end

-- Not valid
local key2 = 'something'
if IsKeyValid(key2) then
  print(key2 .. ' is a valid key!')
else
  print(key2 .. ' is not a valid key.') -- Gets printed
end
```

## See Also

- DSL
  - [`IsKeyPressed`](./IsKeyPressed)
