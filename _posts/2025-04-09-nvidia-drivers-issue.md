---
layout: post
title: NVIDIA Driver Dependency Conflict Incident Report
date: 2025-04-09
description: Conflict of different versions of NVIDIA driver packages with multiple repository sources (Debian official and NVIDIA CUDA)
tags: linux
categories:
featured: true
---

# NVIDIA Driver Dependency Conflict Incident Report

## Incident Summary

A dependency conflict occurred when attempting to install NVIDIA drivers on a Debian system. The conflict arose from having multiple repository sources (Debian official and NVIDIA CUDA) providing different versions of NVIDIA driver packages.

## Root Cause

1. The system had two competing package sources:
   - Official Debian repository: nvidia-driver version 535.216.01-1~deb12u1
   - NVIDIA CUDA repository: nvidia-driver versions up to 570.124.06-1

2. The CUDA repository was added via `/etc/apt/sources.list.d/cuda-debian12-x86_64.list`

3. When attempting to install the driver, apt was unable to resolve dependencies because it was mixing package versions from both repositories.

## Resolution Steps

The issue was resolved by temporarily disabling the CUDA repository to ensure consistent package installation:

```bash
# Disable the CUDA repository
sudo mv /etc/apt/sources.list.d/cuda-debian12-x86_64.list /etc/apt/sources.list.d/cuda-debian12-x86_64.list.bak

# Update package index
sudo apt update

# Install the Debian version of the driver
sudo apt install nvidia-driver

# Verify installation
nvidia-smi
```

After installing the drivers from a single consistent source, the CUDA repository was re-enabled to install CUDA toolkit without driver components:

```bash
# Re-enable repository after driver install
sudo mv /etc/apt/sources.list.d/cuda-debian12-x86_64.list.bak /etc/apt/sources.list.d/cuda-debian12-x86_64.list
sudo apt update

# Install CUDA toolkit without the driver
sudo apt install cuda-toolkit
```

## Lessons Learned

1. **Repository Conflicts**: Multiple repositories providing the same packages can cause dependency conflicts, especially when they offer different versions.

2. **Driver-CUDA Compatibility**: NVIDIA drivers and CUDA toolkit versions must be compatible. Installing them from separate repositories can lead to version mismatches.

3. **Diagnostic Commands**: The following commands were essential for diagnosing the issue:
   ```bash
   apt-cache policy nvidia-driver
   apt-cache madison nvidia-driver
   ls -la /etc/apt/sources.list.d/
   ```

4. **Separation of Concerns**: It's often better to install drivers from the distribution's repositories and then add CUDA separately, rather than using NVIDIA's repositories for both.

## Prevention Strategies

1. **Pin Package Versions**: Use apt preferences to pin specific package versions when working with multiple sources.

2. **Document Repository Changes**: Maintain documentation when adding third-party repositories.

3. **Test in Isolation**: Test driver installations in isolation before adding CUDA repositories.

4. **Check Compatibility Matrix**: Always verify compatibility between NVIDIA driver versions and CUDA toolkit versions before installation.
