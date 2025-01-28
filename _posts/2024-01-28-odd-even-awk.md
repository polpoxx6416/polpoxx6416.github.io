---
layout: post
title: Odd-Even file partitionning using sed and awk
date: 2015-07-15 15:09:00
description: Useful command 
tags: code command-line
categories: 
featured: true
---

I had to run a simulation and because I was printing the internal state of my system and the observed state, I had to separate both in 2 files.

```shell
./simulation | sed '1d;$d' | awk 'NR%2==1 {print > "odd_lines.txt"; next} {print > "even_lines.txt"}'
```
- `sed '1d;$d'`:
    - `1d` deletes the first line
    - `$d` deletes the last line
- `awk 'NR%2==1 {print > "odd_lines.txt"; next} {print > "even_lines.txt"}'`:
    - `NR%2==1` current line number (Number of Record) mod 2
