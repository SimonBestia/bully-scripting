---
description: Creates a visual effect (like fire, lightning, or smoke) at the specified location.
sidebar_class_name: hidden
---

# EffectCreate

## Description

Creates a visual effect at the specified location.

This function is typically used to spawn environmental effects such as fire, lightning, smoke, or sparks. The effect is tied to the current script and will be automatically removed when the script ends.

```lua
function EffectCreate(effectName, x, y, z) --[[ ... ]] end
```

## Parameters

- `effectName `: _`string`_ – The name of the effect to be created (e.g., "GymFire", "ElectrocuteLRG", "ToiletExplode").
- `x`: _`number`_ – The X coordinate where the effect will be created.
- `y`: _`number`_ – The Y coordinate where the effect will be created.
- `z`: _`number`_ – The Z coordinate where the effect will be created.

## Return Values

- `effect`: _`string`_ - The name of the effect you want to create

## Example

Create a fire effect in Jimmy's room

```lua
local fire = EffectCreate("GymFire", -490.65, 313.77, 31.40)
```
