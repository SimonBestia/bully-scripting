---
description: Moves a ped without moving the player.
sidebar_class_name: hidden
---

# PedSetPosSimple

> **_This function was added in DSL 5_**

## Description

Moves a ped without moving the player.

Normally this is not needed and you can use [`PedSetPosXYZ`](/docs/game-reference/global-functions/PedSetPosXYZ) unless you are moving a ped with the `PLAYER1` faction.

```lua
function PedSetPosSimple(ped, x, y, z) --[[ ... ]] end
```

## Parameters

- `ped`: _`integer`_ - The ped to move.
- `x`: _`number`_ - The X coordinate to move the ped to.
- `y`: _`number`_ - The Y coordinate to move the ped to.
- `z`: _`number`_ - The Z coordinate to move the ped to.

## Return Values

None.

## Example

...
