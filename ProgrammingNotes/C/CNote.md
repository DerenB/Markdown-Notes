# C Notes

# Table of Contents

- [C Notes](#c-notes)
- [Table of Contents](#table-of-contents)
- [Basics](#basics)
    - [Print to Console](#print-to-console)
    - [Explicit Conversion](#explicit-conversion)
- [Compilers](#compilers)
    - [GCC](#gcc)
- [Socket Programming](#socket-programming)
    - [Sockets](#sockets)
    - [Create Socket](#create-socket)
    - [Connect to Socket](#connect-to-socket)
    - [Receive Data](#receive-data)

# Basics

### Print to Console

```
printf("Content.\n");
```
- Add variables into the print statement
- %d or Di : int
- %f : double or float
- %c : char
```
int age = 99;
printf("I am %d years gold.", age);
```

### Explicit Conversion

```
a = (int)b;
```

# Compilers

### GCC

- GNU Compiler Collection
- Compile Code:
```
gcc fileName.c -o executableName
./executableName
```
- "gcc" runs the compiler application
- "-o executableName" is optional to name the file
  - Defaults to "a.out" if not used

# Socket Programming

### Sockets

- What are sockets
  - low level connection endpoint used for processing information across a network
  - Common networking protocols like HTTP, and FTP rely on sockets underneath to make connections
  - create a connection between any 2 computers 
  - Socket is a two-way endpoint
  - Can both send and receive information on any socket
- Client Socket Workflow
  - the client socket is created with a socket() call
    - result stored in an integer
    - how to call the socket 
    - - specify the type of socket
  - connected to a remote address with the connect() call
    - Specify the IP and the Port
    - Will get a return value if the connection was successful
  - Retrieve data with the recv() call
  - socket() $\rArr$ connect() $\rArr$ recv()
- Server Socket Workflow
  - Socket
    - Create a socket
  - Bind
    - bind socket to an IP and Port
    - where the socket will listen for connections
  - Listen
    - Listens for connections
  - Accept
    - allows to get another socket and perform these functions on the client side
  - socket() $\rArr$ bind() $\rArr$ listen() $\rArr$ accept()

### Create Socket

- socket(domain-of-the-socket, type-of-the-socket, protocol)
  - Domain:
    - internet sockets use AF_INET, constant that's defined elsewhere
  - Type
    - TCP - connection socket
    - UDP - datagram
  - Protocol
    - sometimes want to explicitly state the socket
- Example:
```
int network_socket;
network_socket = socket(AF_INET, SOCK_STREAM, 0);
```

### Connect to Socket

- connect(our-socket, cast-to-struct & pointer address, size-of-address)
```
int connection_status = connect(network_socket, (struct sockaddr *) & server_address, sizeof(server_address));
```

### Receive Data
- create string to hold receive data
- recv(our-socket, where-to-hold-the-data, size-of-data, flags)
```
char server_response[256]; //string to hold receive data
recv(network_socket, &server_response, sizeof(server_response), 0);
```








