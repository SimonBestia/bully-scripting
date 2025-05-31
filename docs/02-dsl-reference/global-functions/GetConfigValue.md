---
description: Return the raw value associated with `key` as a string.
sidebar_class_name: hidden
---

# GetConfigValue

> **_This function was added in DSL 1_**

## Description

Return the raw value associated with `key` as a string. If there is no value, `defaultValue` will be returned (if given).

```lua
function GetConfigValue(config, key, defaultValue) --[[ ... ]] end
```

## Parameters

- `config`: _`userdata`_ - The configuration object to query.
- `key`: _`string`_ - The key to look up in the configuration.
- `defaultValue?`: _`any`_ - (Optional) The value to return if the key does not exist in the configuration. If not provided, `nil` will be returned.

## Return Values

- `value`: _`string?`_ - The raw value associated with the key as a string, or `nil` if the key does not exist and no default value is provided. If a default value is provided, it will return that instead.

## Example

```lua
local config = LoadConfigFile('my_config.ini')
-- highlight-next-line
local serverName = GetConfigValue(config, 'server_name', 'Default Server')
if serverName then
  print('Server Name: ' .. serverName)
else
  print('Server Name not set, using default value.')
end
```
