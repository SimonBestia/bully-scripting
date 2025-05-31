---
description: Get the number associated with a key in a config.
sidebar_class_name: hidden
---

# GetConfigNumber

> **_This function was added in DSL 1_**

## Description

Return the number associated with `key` if it can be converted. Otherwise, `defaultValue` will be returned (if given).

The number can be expressed using hexadecimal if it is preceded by _`0x`_ in the config.

Returns the number associated with `key` in the given `config` if it can be converted to a number. If the key does not exist or cannot be converted, it returns `defaultValue` if provided, or _`nil`_ otherwise.

```lua
function GetConfigNumber(config, key, defaultValue) --[[ ... ]] end
```

## Parameters

- `config`: _`userdata`_ - The configuration object from which to retrieve the value.
- `key`: _`string`_ - The key for which the number value is to be retrieved.
- `defaultValue?`: _`any`_ - (Optional) The value to return if the key does not exist or cannot be converted to a number. If not provided, defaults to _`nil`_.

## Return Values

- `value`: _`number?`_ - The number associated with the key, or the default value if the key does not exist or cannot be converted.

## Example

```lua
local config = LoadConfigFile('my_config.ini')
-- highlight-next-line
local maxPlayers = GetConfigNumber(config, 'max_players', 16)
if maxPlayers then
  print('Max players allowed: ' .. maxPlayers)
else
  print('Max players not set or invalid, using default value.')
end
```
