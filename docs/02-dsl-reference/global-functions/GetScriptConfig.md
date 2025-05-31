---
description: Returns the `config` object belonging to the current collection.
sidebar_class_name: hidden
---

# GetScriptConfig

> **_This function was added in DSL 5_**

## Description

Returns the `config` object belonging to the current collection.

It will behave just like the one returned by [`LoadConfigFile`](./LoadConfigFile).

```lua
function GetScriptConfig() --[[ ... ]] end
```

## Parameters

None.

## Return Values

- `config`: _`userdata`_ - The `config` object belonging to the current collection.

## Example

```lua
-- highlight-next-line
local config = GetScriptConfig()
if IsConfigMissing(config) then
    print("Config is missing!")
else
    print("Config is loaded successfully!")
end
```
