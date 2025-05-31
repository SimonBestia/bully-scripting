---
description: Create a new thread in DSL.
sidebar_class_name: hidden
---

# CreateThread

## Description

> **_This function was added in DSL 1_**

:::info
This function replaces the existing [`CreateThread`](../../game-reference/global-functions/CreateThread).
:::

If DSL is not running or [`UseBaseGameScriptFunctions`](./UseBaseGameScriptFunctions) was called with _`true`_, the original function is used. Otherwise a **`GAME`** thread is created and added to the current script. These threads run directly after the base game's.

When creating a DSL script, `func` can be a string to refer to a function in the current script's environment. In this case, the name of the thread is also preserved to be shown in console messages or returned with [`GetThreadName`](./GetThreadName).

Any extra arguments (`...`) are passed to the thread function when the thread starts.

```lua
function CreateThread(func, ...) --[[ ... ]] end
```

## Parameters

- `func` - _`function`_ - The function to run in the thread. If a string is provided, it refers to a function in the current script's environment.
- `...`: _`any`_ - Optional. Additional arguments to pass to the thread function when it starts. These can be any Lua values, such as numbers, strings, tables, etc.

## Return Values

- `thread` - _`thread`_ - The thread that was created. This can be used to control the thread, such as pausing or stopping it.

## Example

```lua
CreateThread(function()
  print("This is a thread running in DSL!")
end)
```

## See Also

- DSL

  - [`UseBaseGameScriptFunctions`](./UseBaseGameScriptFunctions)
  - [`GetThreadName`](./GetThreadName)

- Game's Native

  - [`CreateThread`](../../game-reference/global-functions/CreateThread)
