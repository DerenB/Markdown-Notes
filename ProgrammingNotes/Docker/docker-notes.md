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

### Process for starting a new Image

- Stop the currently running container
  - `docker stop {ContainerID}`
- Build a new image with a new tag/version number
  - `docker build -t {NewImageName}:{YourTag} .`
- Run the new Image in a new Container 
  - `docker run --name {NewContainerName} -p 8080:80 {NewImageName}`

### Cleanup Docker

- Remove 1 unneeded container: `docker rm {ContainerID}`
- Remove all containers: `docker rm $(docker ps -a -q)`
- Remove 1 unneeded image: `dockerm rmi {ImageId}`
- Remove all Images: `docker rmi $(docker images -q)`

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
- List only Image IDs: `docker images -q`
- List all Containers: `docker ps -a`
- List only Container IDs: `docker ps -a -q`

### Image Commands

- Build an image: `docker build -t {NameYourImage}:{YourTag} .`
- Run an Image: `docker run -dit --name {NameYourContainer} -p 8080:80 {ImageName}`

### Container Commands

- Start Container: `docker start {ContainerID}`
- Stop Container: `docker stop {ContainerID}`
- Restart Container: `docker restart {ContainerID}`
- Remove 1 unneeded container `docker rm {ContainerID}`
- Remove all containers: `docker rm $(docker ps -a -q)`

# Start Docker Container

### Port Mapping

- Part Mapping is done in the build run command:
  - `docker run -dit --name {NameYourContainer} -p 8080:80 {ImageName}`
- The `-p` is the port mapping parameter
- The `8080` is any local internal port you want to use
- The `80` is the external port

### Detach Console

- Detaching the Console is part of the build run command
  - `docker run -dit --name {NameYourContainer} -p 8080:80 {ImageName}`
- The `-dit` detaches the console
- Without it, the console where you ran the build command opens the docker command console
- CTRL-C closes the command console

### HTTPD

- Pull the image
  - `docker pull httpd`
- In the project folder, create a file called: `Dockerfile` (case sensitive)
- Within the `Dockerfile` add: 
  - `FROM httpd:2.4`
  - `COPY {FromThisLocation} {LocationToCopyToInImage}`
  - `COPY ./HTML/ /usr/local/apache2/htdocs/`
- Build the Docker Image
  - Don't forget the period "." at the end
  - Will show up in the Docker Desktop under Images
  - `docker build -t {NameYourImage}:{YourTag} .`
  - `docker build -t my-apache2 .`
- Run the Docker Image
  - Will show up in the Docker Desktop under Containers 
  - `docker run -dit --name {NameYourContainer} -p 8080:80 {ImageName}`
  - `docker run -dit --name my-running-app -p 8080:80 my-apache2`

### Alpine

- Pull the image
  - `docker pull alpine`
- Within the `Dockerfile` add: 
  - `FROM httpd:alpine`
  - `COPY {FromThisLocation} {LocationToCopyToInImage}`
  - `COPY ./HTML/ /usr/local/apache2/htdocs/`
- Build the Docker Image
  - Don't forget the period "." at the end
  - Will show up in the Docker Desktop under Images
  - `docker build -t {NameYourImage}:{YourTag} .`
  - `docker build -t my-apache2:1.0.0 .`
- Run the Docker Image
  - Will show up in the Docker Desktop under Containers 
  - `docker run -dit --name {NameYourContainer} -p 8080:80 {ImageName}`
  - `docker run -dit --name my-running-app -p 8080:80 my-apache2`
