# Docker Notes

# Basics

- Structured with layers upon layers (DRY)
- Eliminates repetition
- Works on every machine
- Quick recovery
- Deploys Anywhere
- Easily Scales
- Fast
- NOT a virtual machine
- Open Source

# Terms

- Image 
  - snapshot of DLLs, files, describing a layer. 
  - Read Only Operating System
  - Starting point for creating the application container
  - Like a class file in C#
- Container - built off an image
  - Where the application is run
  - Does the operations as if it was an OS
- Host - what is running docker
  - Can be your personal computer
  - Can have multiple images and multiple containers running
- Docker Hub - the central place where all base images live

# Docker Commands

- List Images: `docker images` 
- List Containers: `docker ps -a`


