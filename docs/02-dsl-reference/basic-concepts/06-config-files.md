---
sidebar_position: 6
title: 'Config Files'
pagination_label: 'Config Files'
sidebar_label: 'Config Files'
description: 'Learn about the DSL, its purpose, and how it can help you in your projects.'
---

# Config Files

Config files in DSL are used to define various settings and behaviors for script collections. They allow you to specify when a collection should run, what requirements it has, and other custom values that can be accessed by scripts.

Starting from DSL 10, configuration files for mods are no longer generated automatically. Instead, you need to create one manually to specify your files, set up the mod, define custom keys, and list any requirements. You can create a new file named either config.txt (legacy naming convention) or config.ini (new naming convention), and define your configurations within it.

## Example

```ini
; DSL Configuration

auto_start: true
disable_scripts: false

require_version: 10
require_exact_version: 10
require_system_access: false
require_dependency: MyOtherMod
require_name: MyMod

main_script: main.lua
init_script: init.lua
pre_init_script: pre-init.lua

allow_on_server: true

act_file: AI.cat
cuts_file: 1-01.dat
trigger_file: MisTrig.dat
ide_file: default.idb
scripts_file: main.lur
world_file: MG_Biology.nft

; Mod Configuration

vertical_position: top
horizontal_position: right
scale: 1.5
font: Consolas
```
