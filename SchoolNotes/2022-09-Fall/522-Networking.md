
# 522 - Computer Networking Principles

- Fall 2022
- Elsa Poh

# Table of Contents

- [522 - Computer Networking Principles](#522---computer-networking-principles)
- [Table of Contents](#table-of-contents)
- [09-21 Notes](#09-21-notes)
    - [Switching Strategies](#switching-strategies)
    - [End-to-end Delays / Circuit Switching](#end-to-end-delays--circuit-switching)
    - [Message Switching](#message-switching)
    - [Datagram Packet Switching](#datagram-packet-switching)
    - [Virtual Circuit Packet Switching](#virtual-circuit-packet-switching)
    - [Example](#example)
    - [Socket Programming Files](#socket-programming-files)
    - [Socket Programming Notes](#socket-programming-notes)
- [10/05 Notes - Data Link Layer](#1005-notes---data-link-layer)
    - [Frames](#frames)
      - [Possible Services](#possible-services)
    - [Framing Methods](#framing-methods)
      - [Framing-Byte Count](#framing-byte-count)
      - [Framing-Flag bytes with Byte Stuffing](#framing-flag-bytes-with-byte-stuffing)
      - [Framing-Bit Stuffing](#framing-bit-stuffing)
    - [EX) Data Link Layer](#ex-data-link-layer)
    - [Data Link Protocols](#data-link-protocols)

# 09-21 Notes

### Switching Strategies
- **B**: bit rate (bits per second)
- **M**: message size (bits)
- **N**: number of packets
- **O**: overhead bits (bits)
- **K**: packet size including overhead (bits)
- **P**: propagation rate (meters per second)
- **D**: length of one hop (meters)
- **H**: number of hops
- **S**: setup time for CKT switching and virtual packet switching (seconds)

### End-to-end Delays / Circuit Switching

- Call setup
- Transmission Delay - how long it will take to transmission based off of (message size / bit rate)
- Propagation Delay - (distance / Propagation Rate)
$$T_{ckt} = S + \frac{M}{B} + (H * \frac{D}{P})$$

### Message Switching

$$T_{MSG} = H * (\frac{M}{B} + \frac{D}{P})$$

### Datagram Packet Switching

$$T_{DGRAM} = \frac{N*K}{B} + \frac{D}{P} + (\frac{K}{B} + \frac{D}{P}) * (H - 1)$$

$$T_{DGRAM} = ((N + H - 1) * \frac{K}{B}) + (H * \frac{D}{P})$$

### Virtual Circuit Packet Switching

$$T_{VC} = S + T_{DGRAM}$$

### Example
- Message size = 1 Mbits
- Bit rate = 100 Mbps
- Packet Size = 10 kbits
- Packet Overhead = 200 bits
- Prop Rate = 2.8 * 10<sup>8</sup> m/sec
- Length of 1 hop = 2 km
- Number of hops = 5 hops
- Setup Time = 0.2 msec

- Step 1:
$$T_{CKT} = S + \frac{M}{B} + (H * \frac{D}{P})$$
$$T_{CKT} = 0.2*10^{-3}sec + \frac{1 * 2^{20} bits}{100 * 10^{6} bits/sec} + \frac{5 * 2*10^{3}meters}{2.8*10^{8}meters/sec}$$
$$T_{CKT} = 0.01072 sec$$

- Step 2:
$$N = \frac{M}{K-O}$$
$$N = \frac{1 * 2^{22} bits}{(10 * 2^{10} bits) - 200 bits}$$
$$N = 104.44 = 105 packets$$

- Step 3:
$$T_{DGRAM} = (105 + 5 - 1) * (\frac{10,240bits}{1*10^{6}bits/sec}) + (5*(\frac{2*10^{3}meters}{2.8*10^{8}meters/sec}))$$
$$T_{DGRAM} = 0.0111 sec$$

- Step 4:
$$T_{VC} = 0.2*10^{-3}sec + T_{DGRAM} = 1.1162sec$$

- Step 5:
$$T_{MSG} = 5*((\frac{1*2^{20}bits}{100*10^{6}bits/sec})+(\frac{2*10^{3}meters}{2.8*10^{8}meters/sec}))$$

### Socket Programming Files

- Files > Doc Sharing > Socket Programming > Sample Socket Code.zip
- TCPEchoClient.c
- TCPEchoServer.c
- UDPEchoClient.c
- UDPEchoServer.c
- HandleTCPClient.c

### Socket Programming Notes

- IP Address
    - Datagram (packet) protocol
    - 32-bit identifier 
    - Dotted-quad: 192.118.56.25
    - Identifies a host interface 
- Transport Protocols
    - Add services on top of IP
    - User Datagram Protocol (UDP)
        - Data checksum
        - Best-effort
    - Transmission Control Protocol (TCP)
        - Data checksum
        - Reliable byte-stream delivery

# 10/05 Notes - Data Link Layer

- Responsible for delivering frames of information over a single link
  - Handles transmission errors and regulates the flow of data

### Frames

- Link layer accepts packets from the network layer, and encapsulates them into frames that it sends using the physical layer; reception is the opposite process
  - ![](images/522-classnotes-image1.png)

#### Possible Services

- Unacknowledged connectionless service 
  - Frame is sent with no connection / error recovery
  - Ethernet is example
- Acknowledged connectionless service
  - Frame is sent with retransmissions if needed
  - Example is 802.11
- Acknowledged connection-oriented service
  - Connection is set up; rare

### Framing Methods

- Byte Count
- Flag bytes with byte stuffing
- Flag bits with bit stuffing
- Physical layer coding violations
  - Use non-data symbol to indicate frame

#### Framing-Byte Count

- Frame begins with a count of the number of bytes in it
- Simple but difficult to resynchronize after an error

#### Framing-Flag bytes with Byte Stuffing

- Special flag bytes delimit frames; occurrences of flags in the data must be stuffed (escaped)
  - Longer but easy to resynchronize after error
  
#### Framing-Bit Stuffing

- Stuffing done at the bit level
  - Frame flag has six consecutive 1s (not shown)
  - On transmit, after five 1s in the data, a 0 is added
  - On receive, a 0 after five 1s is deleted

### EX) Data Link Layer

- Chapter 3, question 2 problem
- The following character encoding is used in a data link protocol:
  - A: 0100 0111
  - B: 1110 0011
  - FLAG: 0111 1110
  - ESC: 1110 0000
- Show the bit sequence transmitted (in binary) for the four-character frame A B ESC FLAG when each of the following framing methods is used:
- (a) Byte Count:
```
5           A           B           Esc         Flag
0000 0101   0100 0111   1110 0011   1110 0000   0111 1110
```
- (b) Flag bytes with byte stuffing:
- Add flag at start and end
```
FLAG    A   B   ESC     FLAG    FLAG
```
- (c)
- Every time you see 5 ones, the next bit is a zero 
```
FLAG A B ESC FLAG FLAG
```

### Data Link Protocols

- to provide, establish, and maintain effective communications
  - Error Control: specification of how a station checks frames for errors and what it does if it finds them
    - Forward Error Correction
    - Automatic Repeat Request
  - Flow Control: protocol that regulates the exchange of information between two devices








