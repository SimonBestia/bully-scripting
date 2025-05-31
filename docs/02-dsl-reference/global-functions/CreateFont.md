---
description: Creates a font object from a file.
sidebar_class_name: hidden
---

# CreateFont

> **_This function was added in DSL 1_**

## Description

Creates a font object from a file.

```lua
function CreateFont(fontFile) --[[ ... ]] end
```

## Parameters

- `fontFile` - _`string`_ - The path to the font file. This should be a valid file path to a font file (e.g., `.ttf` or `.otf`).

## Return Values

- `userdata`: _`userdata`_ - Returns a font object that can be used in drawing functions.

## Example

```lua
local font = CreateFont('path/to/font.ttf')
```
