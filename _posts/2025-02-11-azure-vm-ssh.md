---
layout: post
title: Git Reminder
date: 2025-02-01
description: A good git tutorial and some command that may be useful
tags: formatting
categories:
featured: true
---

Ok today I wanted to connect myself to my azure vm running debian bookworm but I have ssh hardened it following [this]() very good tutorial.
The issue is that I have a brand new computer and I've reset the previous one... And yes I have lost my ssh key to connect to my vm... Thus I have to find a way to add a new ssh public key so that I connect myself with my new computer.

I have installed azure cli instead of using the webportal and now I have to execute a command inside the vm.

Here is the magic command I went with :

```shell
az vm run-command invoke -g myResourceGroup -n myVm --command-id RunShellScript --scripts echo "pub-key" >> 'path/to/keys"
```

It returns a JSON like this:

```json
{
  "value": [
    {
      "code": "ProvisioningState/succeeded",
      "displayStatus": "Provisioning succeeded",
      "level": "Info",
      "message": "Enable succeeded: \n[stdout]\n\n[stderr]\nls: cannot access '.ssh/': No such file or directory\n",
      "time": null
    }
  ]
}
```

and BOOM:

```shell
 ____   ___  _     ___   ____ ____   __     ____  __
|  _ \ / _ \| |   / _ \ / ___/ ___|  \ \   / /  \/  |
| |_) | | | | |  | | | | |   \___ \   \ \ / /| |\/| |
|  __/| |_| | |__| |_| | |___ ___) |   \ V / | |  | |
|_|    \___/|_____\___/ \____|____/     \_/  |_|  |_|

user@vm:~$

```

Now I just have to edit `.ssh/config` and add a new known host and the specifications such as `HostName`, `IdentityFile`, `Port`.

NB: useful to parse json from command line with `| jq -r .name`.
