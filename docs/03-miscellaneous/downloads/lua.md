---
description: Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications.
---

# Lua

Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications.

Bully uses [Lua 5.0.2](https://www.lua.org/ftp/lua-5.0.2.tar.gz) with `LUA_NUMBER` set as a 4 byte floating point, and a few other differences that don't affect the way you'd compile or run scripts.

You can download a pre-compiled binary for the [compiler](/downloads/luac.exe) and stand-alone [interpreter](/downloads/lua.exe).

Both of these tools are **command line tools** made for Windows, meaning they will only run using Windows' command prompt. If you don't know how to use the command prompt, consider checking out the tutorial.

You can run `luac.exe` without passing any arguments to get the help dialogue.

The most common usage looks like `luac -o ArcRace1.lur source.lua`, which will compile `source.lua` into `ArcRace1.lur`.

You can run `lua.exe` by itself to run Lua in **interactive mode**, letting you write code that gets instantly executed.

You can also run a script by doing something like `lua script.lua`, where `script.lua` is the script you want to run.
