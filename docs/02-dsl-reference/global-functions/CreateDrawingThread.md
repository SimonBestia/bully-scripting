---
description: Creates a new thread specifically for drawing operations in the game.
sidebar_class_name: hidden
---

# CreateDrawingThread

> **_This function was added in DSL 1_**

## Description

Creates a new thread specifically for drawing operations in the game. This function allows you to run drawing tasks in a separate thread, which can help improve performance and responsiveness by offloading these tasks from the main game loop. It is particularly useful for rendering custom graphics or UI elements without interfering with the game's primary execution flow.

```lua
function CreateDrawingThread(func) --[[ ... ]] end
```

## Parameters

- `func`: _`function`_ - The function to be executed in a separate thread for drawing operations. This function should not return any value and is typically used to perform drawing tasks without blocking the main game thread.

## Return Values

- `thread`: _`thread`_- Returns a thread handle that can be used to manage the drawing thread. This handle can be used with functions like`TerminateThread` to stop the drawing operations when they are no longer needed.

## Example

```lua
local thread = CreateDrawingThread(function()
  while true do
    -- Drawing operations go here
    Wait(0) -- Yield to prevent blocking the main thread
  end
end)
```
