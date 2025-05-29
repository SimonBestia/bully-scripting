---
description: ...
sidebar_class_name: hidden
---

# AddScriptLoaderCallback

## Description
This function is used to retrieve the function environment from native scripts and is typically utilized for hooking or replacing functions in there. This function has been **deprecated** since DSL version 4 as it has been superseded by the **NativeScriptLoaded** event in RegisterLocalEventHandler function. However, it remains accessible for backward compatibility with legacy scripts.

```lua
function AddScriptLoaderCallback(callback) --[[ ... ]] end
```

## Parameters

- `callback`: _`function(name, env)`_

## Return Values

none.

## Example

Automatically pass the geography class

```lua
local Passed = false
AddScriptLoaderCallback(function(Name, Env)
  if Name == 'ClassGeography.lua' or Name == 'secnd/ClassGeography.lua' then
    -- Trigger auto-pass: hook into a function that is called after the minigame has started
    Env.ClassGeographyInvalidOperation = function()
      if not Passed then
        ClassGeographySuccess() -- only called once
        Passed = true
      end
      return ClassGeographyInvalidOperation()
    end

    -- Reset auto-pass: hook into a function that is called after the minigame has ended
    Env.MinigameEnableHUD = function(HUD)
      if not HUD then
        Passed = false
      end
      return MinigameEnableHUD(HUD)
    end
  end
end)
```

