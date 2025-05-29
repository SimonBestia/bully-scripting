---
description: Check if a `command` exists.
sidebar_class_name: hidden
---

# DoesCommandExist

> **_This function was added in DSL 1_**

## Description

Check if a `command` exists. This does not check if it is associated with the current script, but only if it exists at all.

```lua
function DoesCommandExist(command) --[[ ... ]] end
```

## Parameters

- `command`: _`string`_ - The name of the command to check for existence.

## Return Values

- `exist`: _`boolean`_ - Returns _`true`_ if the command exists, otherwise _`false`_.

## Example

```lua
if DoesCommandExist("my_command") then
    print("Command exists!")
else
    print("Command does not exist.")
end
```

## See Also

- DSL
  - [`SetCommand`](./SetCommand)
  - [`ClearCommand`](./ClearCommand)
