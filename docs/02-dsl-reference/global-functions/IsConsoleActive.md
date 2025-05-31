---
description: Checks if the console is currently opened.
sidebar_class_name: hidden
---

# IsConsoleActive

> **_This function was added in DSL 1_**

## Description

Checks if the console is currently opened.

:::tip
Primarily intended for scripts to be able to limit certain inputs when the console is in focus.
:::

```lua
function IsConsoleActive() --[[ ... ]] end
```

## Parameters

None.

## Return Values

- `active`: _`boolean`_ - Returns _`true`_ if the console is currently opened, otherwise _`false`_.

## Example

```lua
if IsConsoleActive() then
  print('The console is currently active.')
else
  print('The console is not active.')
end
```
