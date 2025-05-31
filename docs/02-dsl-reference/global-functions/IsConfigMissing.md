---
description: Check if a config file is missing.
sidebar_class_name: hidden
---

# IsConfigMissing

> **_This function was added in DSL 1_**

## Description

Since [`LoadConfigFile`](./LoadConfigFile) still returns a valid `config` object when the requested config doesn't exist, you'll need to use this function to check if it actually exists or not.

```lua
function IsConfigMissing(config) --[[ ... ]] end
```

## Parameters

- `config`: _`userdata`_ - The config object to check.

## Return Values

- `missing`: _`boolean`_ - _`true`_ if the config is missing, _`false`_ otherwise.

## Example

```lua
local config = LoadConfigFile("my_config.ini")
-- highlight-next-line
if IsConfigMissing(config) then
    print("Config file is missing!")
else
    print("Config file loaded successfully!")
end
```

## See Also

- DSL
  - [`LoadConfigFile`](./LoadConfigFile)
