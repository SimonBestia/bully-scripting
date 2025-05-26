---
description: Creates a character at the specified location.
sidebar_class_name: hidden
---

# PedCreateXYZ

## Description

Creates a character at the specified location.

The ped will be tied to the current script so that it is cleaned up when the script terminates, and will of course be returned for you to script with.

```lua
function PedCreateXYZ(id, x, y, z) --[[ ... ]] end
```

## Parameters

- `id`: _`integer`_ - The ped's model ID.
- `x`: _`number`_ - The X coordinate of the location where the ped will be created.
- `y`: _`number`_ - The Y coordinate of the location where the ped will be created.
- `z`: _`number`_ - The Z coordinate of the location where the ped will be created.

## Return Values

- `ped`: _`integer`_ - The ID of the created ped (Not the model ID).

## Example

Spawn Algie (ID 4) at the specified coordinates

```lua
local ped = PedCreateXYZ(4, 12.3, 4.56, 15.5)
```
