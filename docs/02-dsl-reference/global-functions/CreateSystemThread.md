---
description: Creates a new system thread that runs concurrently with the main game thread.
sidebar_class_name: hidden
---

# CreateSystemThread

> **_This function was added in DSL 1_**

## Description

Creates a new system thread that runs concurrently with the main game thread. This is useful for performing background tasks without blocking the main game loop.

Any extra arguments (`...`) are passed to the thread function when the thread starts.

```lua
function CreateSystemThread(func, ...) --[[ ... ]] end
```

## Parameters

- `func`: _`function`_ - The function to be executed in the new thread. This function should accept any additional arguments passed to `CreateSystemThread`.
- `...`: _`any`_ - Additional arguments that will be passed to the thread function when it starts. These can be any Lua values.

## Return Values

- `thread`: _`thread`_ - The thread object representing the newly created system thread.

## Example

```lua
local thread = CreateSystemThread(function(arg1, arg2)
  print('Thread started with arguments:', arg1, arg2)
  -- Perform background tasks here
end, 'Hello', 'World')
```
