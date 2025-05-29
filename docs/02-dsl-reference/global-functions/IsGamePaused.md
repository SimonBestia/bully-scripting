---
description: Checks if the game is... *paused*.
sidebar_class_name: hidden
---

# IsGamePaused

> **_This function was added in DSL 3_**

## Description

Checks if the game is... **_paused_**.

```lua
function IsGamePaused() --[[ ... ]] end
```

## Parameters

None.

## Return Values

- `paused`: _`boolean`_ - Returns _`true`_ if the game is paused, otherwise _`false`_.

## Example

```lua
if IsGamePaused() then
  print('The game is paused.')
else
  print('The game is not paused.')
end
```
