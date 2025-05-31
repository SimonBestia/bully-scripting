---
description: Get a full path given a relative path.
sidebar_class_name: hidden
---

# GetScriptFilePath

> **_This function was added in DSL 8_**

## Description

<!--
---Get a full path given a relative path. Usually not needed, as most DSL functions expect the relative path. If no `filename` is given, then it's just as if `""` was used. A `fullpath` in this context is not a full system path, but rather just a path that is relative to `Bully.exe` rather than the running collection.
---@param filename? string
---@return string fullpath
function GetScriptFilePath(filename) end
 -->

Get a full path given a relative path.

Usually not needed, as most DSL functions expect the relative path.

`filename` is a relative path to the file.

A `fullpath` in this context is not a full system path, but rather just a path that is relative to `Bully.exe` rather than the running collection.

:::warning
The parameter `filename` is required in newer version of DSL, will throw an error if not provided.

Previously, this was optional.
:::

```lua
function GetScriptFilePath(filename) --[[ ... ]] end
```

## Parameters

- `filename`: _`string`_ - The relative path to the file. If not provided.

## Return Values

- `fullpath`: _`string`_ - The full path to the file, relative to `Bully.exe`.

## Example

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
