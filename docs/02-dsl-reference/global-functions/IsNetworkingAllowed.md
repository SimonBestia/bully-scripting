---
description: Check if networking is allowed in the user's DSL config.
sidebar_class_name: hidden
---

# IsNetworkingAllowed

> **_This function was added in DSL 5_**

## Description

Check if networking is allowed in the user's DSL config.

```lua
function IsNetworkingAllowed() --[[ ... ]] end
```

## Parameters

None.

## Return Values

- `allowed`: _`boolean`_ - _`true`_ if networking is enabled in the user's DSL config, otherwise _`false`_.

## Example

```lua
if IsNetworkingAllowed() then
  print('Networking is allowed in the DSL config.')
else
  print('Networking is not allowed in the DSL config.')
end
```
