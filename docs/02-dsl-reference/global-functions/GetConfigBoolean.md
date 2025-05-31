---
description: Get a boolean value from a configuration object.
sidebar_class_name: hidden
---

# GetConfigBoolean

> **_This function was added in DSL 1_**

<!--
---Return if the value under `key` is not false.
---
---If there is no value, `defaultValue` will be returned (if given).
---@param config userdata
---@param key string
---@param defaultValue? any
---@return boolean? value
function GetConfigBoolean(config, key, defaultValue) end
 -->

## Description

Return if the value under `key` is not _`false`_.

If there is no value, `defaultValue` will be returned (if given).

This function retrieves a boolean value from a configuration object based on the provided key. If the key does not exist or the value is not a boolean, it returns the specified default value if provided, or _`false`_ if no default is specified.

```lua
function GetConfigBoolean(config, key, defaultValue) --[[ ... ]] end
```

## Parameters

- `config`: _`userdata`_ - The configuration object from which to retrieve the value.
- `key`: _`string`_ - The key for which the boolean value is to be retrieved.
- `defaultValue?`: _`any`_ - (Optional) The value to return if the key does not exist or the value is not a boolean. If not provided, defaults to _`false`_.

## Return Values

- `value`: _`boolean?`_ - The boolean value associated with the key, or the default value if the key does not exist or is not a boolean.

## Example

```lua
local config = LoadConfigFile('my_config.ini')
-- highlight-next-line
local isFeatureEnabled = GetConfigBoolean(config, 'feature_enabled', false)
if isFeatureEnabled then
    print('Feature is enabled')
else
    print('Feature is disabled')
end
```
