# Troobleshooting Wifi on Linux

My system is a dual boot btw Debian and my network manager is NetworkManager.

Here is a listof command I ran to understand where were the issues (I suspected that My device was constinuously switching btw 5GHz and 2.4GHz bandwiths)

```shell
systemctl status NetworkManager
sudo nano /etc/NetworkManager/NetworkManager.conf
```

This showed me that my network interfaces weren't properly managed by NetworkManager... Oops... So I set the value of `[ifupdown]` to `true`.

Of course one `sudo systemctl restart NetworkManager`.

```shell
paulb@debian:~$ nmcli device status
DEVICE        TYPE      STATE                   CONNECTION
wlo1          wifi      connected               mybox-****
lo            loopback  connected (externally)  lo
docker0       bridge    connected (externally)  docker0
p2p-dev-wlo1  wifi-p2p  disconnected            --
```

So it appeared that it wasn't an issue about bandwiths but rather about IPv6...

I just set `nmcli connection modify "mybox" ipv6.method "disabled"` the connection and it worked very fine !

I just ran into [this super website](https://www.dedoimedo.com/computers/linux-nm-ipv6-disable.html) that helped me a lot to understand what was under the hood.

## USEFUL TIPS

```shell
sudo journalctl -fu NetworkManager #interactive view of the journal
nmcli -f ALL device wifi show #shows wifi password and QRcode
nmcli connection down "mybox"
nmcli connection up "mybox" #cli connection
```

## GOOD RESOURCE

- https://www.dedoimedo.com/computers/linux-nm-ipv6-disable.html
- https://www.dedoimedo.com/greatest_sites.html
