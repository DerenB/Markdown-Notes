Deren Bozer
COSC-522 F22
Project 1: UDP Calculator
Readme File

### Platform

- Created locally on a Mac with Apple Silicon
- Runs on MacOS, don't know about Linux
- Used the gcc compiler

### Compile the Server File:

> gcc UDPServer.c -o UDPServer

### Compile the Client File:

> gcc UDPClient.c -o UDPClient

### Execute Server File

> ./UDPServer PORT
- I used port "9002" while testing

### Execute Client File

> ./UDPClient 127.0.0.1 PORT "Operations"
- The operations have to be in double quotes
- Accepts either two integers or one integer 
- Operations available:
  - +, -, *, /, %
- Examples:
  - ./UDPClient 127.0.0.1 9002 "3*4"
  - ./UDPClient 127.0.0.1 9002 "100%3"
  - ./UDPClient 127.0.0.1 9002 "+4"

### Quit Server

> exited with CTRL-C

### Overall results:

- This was my first time using C. I've minimally used C++ in the past but never on such a large scale. My 341 class did not use C.
- Most things seem to work. The only thing I couldn't get working is single integer decimal results. When I ran things like "/3" or "%5", the values after the decimal wouldn't output on the client side. The server displayed the correct value at least.
- Doing two integer operations such as "100%3" worked just fine.

### Sources:

- Modified files downloaded from EMU Canvas > Modules > Socket Programming - Sample Code:
  - UDPEchoClient.c
  - UDPEchoServer.c
- Watched this video to learn about sockets but it was TDP. Just learned more about the logic of sockets:
  - https://youtu.be/LtXEMwSG5-8
- Referenced this website article to learn more about UDP sockets but ended up not using much:
  - https://www.educative.io/answers/how-to-implement-udp-sockets-in-c
- Various articles on https://www.geeksforgeeks.org/ and https://stackoverflow.com/ to learn C syntax. No code was pulled from these websites.



