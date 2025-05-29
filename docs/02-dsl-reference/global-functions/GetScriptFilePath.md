---
description: Get a full path given a relative path.
sidebar_class_name: hidden
---

# GetScriptFilePath

> **_This function was added in DSL 8_**

<!--
---Get a full path given a relative path. Usually not needed, as most DSL functions expect the relative path. If no `filename` is given, then it's just as if `""` was used. A `fullpath` in this context is not a full system path, but rather just a path that is relative to `Bully.exe` rather than the running collection.
---@param filename? string
---@return string fullpath
function GetScriptFilePath(filename) end
 -->

## Description

Get a full path given a relative path.

Usually not needed, as most DSL functions expect the relative path.

If no `filename` is given, then it's just as if `""` was used.

A `fullpath` in this context is not a full system path, but rather just a path that is relative to `Bully.exe` rather than the running collection.

```lua
function GetScriptFilePath(filename) --[[ ... ]] end
```

## Parameters

- `filename?`: _`string`_ - (Optional) The relative path to the file. If not provided, it defaults to an empty string.

## Return Values

- `fullpath`: _`string`_ - The full path to the file, relative to `Bully.exe`.

## Example

:::danger

# TODO

Different behavior on DSL 10! It will return the full path relative to the collection root, not the script root.

The parameter `filename` is also required in DSL 10, and it will throw an error if not provided.

:::

### Standalone Collection

`_derpy_script_loader/scripts/my_mod.lua`

```lua
local fullPath1 = GetScriptFilePath("file1.txt")
print(fullPath1) --> _derpy_script_loader/scripts/file1.txt

local fullPath2 = GetScriptFilePath("folder2/file2.txt")
print(fullPath2) --> _derpy_script_loader/scripts/folder2/file2.txt
```

### Normal Collection

`_derpy_script_loader/scripts/MyMod/main.lua`

```lua
local fullPath1 = GetScriptFilePath("file1.txt")
print(fullPath1) --> _derpy_script_loader/scripts/MyMod/file1.txt

local fullPath2 = GetScriptFilePath("folder2/file2.txt")
print(fullPath2) --> _derpy_script_loader/scripts/MyMod/folder2/file2.txt
```
