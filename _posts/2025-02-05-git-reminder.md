---
layout: post
title: Git Reminder
date: 2025-02-01
description: A good git tutorial and some command that may be useful
tags: formatting
categories:
featured: true
---

[One very good tutorial](https://beej.us/guide/bggit/html/split/index.html) to check and to grow.
[Quick reference](https://beej.us/guide/bggit/html/split/quick-reference.html#reverting)

- To create a local branch and set remote tracking: `git switch -c <branch>` with `<branch>` being also a remote origin or it creates it
- `git pull` makes in this order `git fetch` to fetch remotes changes and `git merge` to merge them in local branch so be careful => better to just fetch
- in case of destructing the project (test before merging to main especially in CI/CD context...) `git switch -c recovery-branch <commit_hash>` => creates the new branch (fail if branhc-name already exists, -C to overwrite)
- `$ git switch --detach HEAD~3` to go to the commit (third previous)
- in case of failure of a `git switch main` `git merge <branch-name> #into main` =>
  - fix conflicts and run `git commit`.
  - Use `git merge --abort` to abort the merge.
- oh.. forking is all about separating the push repo from the fetch repo
- `git fetch --prune` to remove remote branches that have been deleted remotely
- `git push origin --delete topic99` remote tracking branch on the repo
- Changing the git states of the files:
  - Untracked → `git add foo.txt` → Staged (as “new file”)
  - Modified → `git add foo.txt` → Staged
  - Modified → `git restore foo.txt` → Unmodified
  - Unmodified → edit foo.txt → Modified (with your favorite editor)
  - Staged → `git commit` → Unmodified
  - Staged → `git restore --staged foo.txt` → Modified #allow to remove the file from the commit
- Example to remove the file from the repo but keep it locally

```shell
$ ls
  foo.txt
$ git rm --cached foo.txt
  rm 'foo.txt'
$ git status
  On branch main
  Changes to be committed:
    (use "git restore --staged <file>..." to unstage)
      deleted:    foo.txt
  Untracked files:
    (use "git add <file>..." to include in what will be committed)
      foo.txt
$ ls
  foo.txt
```

- Multiple states at ones: check [here](https://beej.us/guide/bggit/html/split/file-states.html#files-in-multiple-states)
- To diff the staged version with the previous commit: `git diff --staged`
- Reminder: A `git status` or `git diff` only shows files that differ between your working tree and the stage.
- ACHTUNG: git diff always compares the working tree to the stage.
- git diff can compare two branches: `$ git diff main topic`
- `git mv foo.txt bar.txt` to rename files (no more git rm, add...)
- `git restore foo.txt` after a staged renaming with mv to restore and clean status (otherwise with `git restore --staged` makes a `git rm`)
- if restoring with a specific commit: `$ git restore --source=1c9bf foo.txt` be careful about adding it back and committing it !
- [typo] for typo
