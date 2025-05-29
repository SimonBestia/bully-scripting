---
description: Iterates over all values in a configuration object for a given key.
sidebar_class_name: hidden
---

# AllConfigValues

> **_This function was added in DSL 1_**

## Description

Iterates over all values in a configuration object for a given key. This function is useful for retrieving all values associated with a specific key in a configuration, allowing for easy access to multiple values without needing to know the exact structure of the configuration.

```lua
function AllConfigValues(config, key) --[[ ... ]] end
```

## Parameters

- `config`: _`userdata`_ - The configuration object to iterate over.
- `key`: _`string`_ - The key to look up in the configuration.

## Return Values

- `iterator`: _`function`_ - An iterator function that returns the next value in the configuration for the given key.

## Example

...

<!--
AI Suggestions...

```lua
local config = {
    settings = {
        theme = "dark",
        language = "en",
        notifications = true,
    },
    user = {
        name = "John Doe",
        age = 30,
    }
}
local function AllConfigValues(config, key)
    return coroutine.wrap(function()
        for k, v in pairs(config) do
            if k == key then
                coroutine.yield(v)
            elseif type(v) == "table" then
                for sub_k, sub_v in pairs(v) do
                    if sub_k == key then
                        coroutine.yield(sub_v)
                    end
                end
            end
        end
    end)
end
local values = AllConfigValues(config, "theme")
for value in values do
    print(value) -- Output: dark
end
``` -->

## See Also

...
