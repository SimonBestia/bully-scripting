---
description: Checks if a ped has line of sight to an object or ped.
sidebar_class_name: hidden
---

# PedCanSeeObject

## Description

Checks if a ped has line of sight to an object or ped.

```lua
function PedCanSeeObject(ped, object, visionType) --[[ ... ]] end
```

## Parameters

- `ped`: _`integer`_ - The ped performing the vision check.
- `object`: _`integer`_ - The object or ped to be checked for visibility.
- `visionType`: _`integer`_ - The type of vision check. 2 is most commonly used, but this has something to do with how sight is checked.

## Return Values

- `state`: _`boolean`_ - Returns true if the ped can see the object, otherwise false.

## Example

```lua
function main()
    print("Testing ped line of sight detection...")
    
    -- Get position 5 meters in front of the player
    local ped_x, ped_y, ped_z = PedGetOffsetInWorldCoords(gPlayer, 0, 5, 0)
    
    -- Create a ped to test line of sight with
    local test_ped = PedCreateXYZ(75, ped_x, ped_y, ped_z)
    
    print("Test ped created. Monitoring line of sight...")
    
    -- Continuous line of sight monitoring
    while true do
        -- Check if the test ped can see the player
        -- Third argument (2) = object type for peds
        if PedCanSeeObject(test_ped, gPlayer, 2) then
            print("The ped can see the player!")
        else
            print("The ped cannot see the player (blocked or out of view)")
        end
        
        -- You can also test the reverse - if player can see the ped
        if PedCanSeeObject(gPlayer, test_ped, 2) then
            print("Player can see the test ped!")
        else
            print("Player cannot see the test ped")
        end
        
        -- Wait 100ms before next check
        Wait(100)
    end
end
```
