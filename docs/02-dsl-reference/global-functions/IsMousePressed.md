---
description: Check if a mouse button is currently pressed.
sidebar_class_name: hidden
---

# IsMousePressed

> **_This function was added in DSL 5_**

## Description

Check if a mouse button is currently pressed.

Mouse buttons are in the range of `[0,3]` for a total of 4 buttons.

- _`0`_: Left mouse button
- _`1`_: Right mouse button
- _`2`_: Middle mouse button (scroll wheel)
- _`3`_: Extra mouse button (if available)

```lua
function IsMousePressed(button) --[[ ... ]] end
```

## Parameters

- `button`: _`0|1|2|3`_ - The mouse button to check.

## Return Values

- `pressed`: _`boolean`_ - _`true`_ if the specified mouse button is currently pressed, otherwise _`false`_.

## Example

```lua
if IsMousePressed(0) then
  print('Left mouse button is currently pressed.')
end
```

## See Also

- DSL
  - [`IsMouseBeingPressed`](./IsMouseBeingPressed)
  - [`IsMouseBeingReleased`](./IsMouseBeingReleased)
