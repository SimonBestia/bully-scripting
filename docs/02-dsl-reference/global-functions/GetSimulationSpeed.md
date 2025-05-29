---
description: Return the game's simulation speed.
sidebar_class_name: hidden
---

# GetSimulationSpeed

> **_This function was added in DSL 10_**

## Description

Return the game's simulation speed, where _`1.0`_ is the default and is used almost 100% of the time.

```lua
function GetSimulationSpeed() --[[ ... ]] end
```

## Parameters

None.

## Return Values

- `simulationSpeed`: _`number`_ - The current simulation speed of the game. The default value is _`1.0`_.

## Example

```lua
local speed = GetSimulationSpeed()
print("Current simulation speed: " .. speed)
```
