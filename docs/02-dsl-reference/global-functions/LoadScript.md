---
description: Load a *DSL* script into the current script's environment.
sidebar_class_name: hidden
---

# LoadScript

> **_This function was added in DSL 1_**

## Description

Load a **DSL** script into the current script's environment.

:::info
This differs from [`StartScript`](./StartScript) as _loading_ a script means it will load into the current script rather than fully 'starting' a new script.
:::

This can basically be thought of as the DSL version of [`ImportScript`](/docs/game-reference/global-functions/ImportScript) (though you can still use [`ImportScript`](/docs/game-reference/global-functions/ImportScript) to load scripts from `Scripts.img`).

`name` is given as a relative path.

```lua
function LoadScript(name) --[[ ... ]] end
```

## Parameters

- `name`: _`string`_ - The name of the script to load.

## Return Values

None.

## Example

```lua
LoadScript("scripts/my_script.lua")
```

## See Also

- DSL
  - [`StartScript`](./StartScript)
- Game's Native
  - [`ImportScript`](./ImportScript)
