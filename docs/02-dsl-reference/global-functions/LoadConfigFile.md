---
description: Load a config file.
sidebar_class_name: hidden
---

# LoadConfigFile

> **_This function was added in DSL 1_**

## Description

Load a [config file](../basic-concepts/config-files) given a [relative path](../basic-concepts/relative-paths).

A valid `config` object is always returned, even if it is missing. It will just behave like an empty config file.

:::tip
You can check if a config is missing using [`IsConfigMissing`](./IsConfigMissing).
:::

```lua
function LoadConfigFile(filename) --[[ ... ]] end
```

## Parameters

- `filename` - _`string`_ - The relative path to the config file to load. If the file does not exist, an empty config object is returned.

## Return Values

- `config`: _`userdata`_ - A config object.

## Example

```lua
-- highlight-next-line
local config = LoadConfigFile("my_config.ini")
if IsConfigMissing(config) then
    print("Config file is missing!")
else
    print("Config file loaded successfully!")
end
```

## See Also

- DSL
  - [`IsConfigMissing`](./IsConfigMissing)
