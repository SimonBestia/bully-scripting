---
description: Gets the model ID of a given ped.
sidebar_class_name: hidden
---

# PedGetModelId

> **_This function was added in DSL 5_**

## Description

Gets the model ID of a given ped.

This should be a valid ped handle, typically obtained from functions like [`PedGetTargetPed`](/docs/game-reference/global-functions/PedGetTargetPed) or [`PedIsValid`](/docs/game-reference/global-functions/PedIsValid).

:::warning
Passing a value other than number (string, boolean, table, function, etc...) will always return `0` as model ID.

But if you pass numbers that do not correspond to any valid ped (3.14 math.pi, -9999, etc...), it will throw an error.
:::

```lua
function PedGetModelId(ped) --[[ ... ]] end
```

## Parameters

- `ped`: _`integer`_ - The ped whose model ID you want to retrieve.

## Return Values

- `modelId`: _`integer`_ - The model ID of the specified ped.

## Example

```lua
local target = PedGetTargetPed(gPlayer)
if PedIsValid(target) then
  -- highlight-next-line
  print("Target Ped Model ID: " .. PedGetModelId(target))
end
```

## See Also

- Game's Native
  - [`PedGetTargetPed`](/docs/game-reference/global-functions/PedGetTargetPed)
  - [`PedIsValid`](/docs/game-reference/global-functions/PedIsValid)
