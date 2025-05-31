---
description: Check if system access is unrestricted.
sidebar_class_name: hidden
---

# IsSystemAccessAllowed

> **_This function was added in DSL 1_**

## Description

Check if system access is unrestricted.

This is used to determine if the script has permission to perform certain actions that require elevated privileges, such as accessing system files or making network requests.

```lua
function IsSystemAccessAllowed() --[[ ... ]] end
```

## Parameters

None.

## Return Values

- `allowed`: _`boolean`_ - _`true`_ if system access is unrestricted, otherwise _`false`_.

## Example

```lua
if IsSystemAccessAllowed() then
  print('System access is allowed.')
else
  print('System access is restricted.')
end
```
