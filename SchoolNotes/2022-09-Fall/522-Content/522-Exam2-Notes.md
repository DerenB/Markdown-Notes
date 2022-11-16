# 522 Exam 2 Notes

Chapters 3, 4, and TCP/UDP socket Programming

# Table of Contents

- [522 Exam 2 Notes](#522-exam-2-notes)
- [Table of Contents](#table-of-contents)
- [Socket Programming](#socket-programming)
    - [UDP](#udp)
    - [TCP](#tcp)
- [Framing](#framing)
    - [Byte Count](#byte-count)
    - [Byte Stuffing](#byte-stuffing)
    - [Bit Stuffing](#bit-stuffing)
- [Error Control](#error-control)
    - [Checksum](#checksum)
    - [Hamming Code](#hamming-code)
    - [Hamming Code Error Check](#hamming-code-error-check)
    - [CRC](#crc)
    - [CRC Error Check](#crc-error-check)
- [FEC vs ARQ](#fec-vs-arq)
    - [ARQ](#arq)
    - [FEC](#fec)
- [Multiple Access Protocols](#multiple-access-protocols)
    - [Pure Aloha](#pure-aloha)
    - [Slotted Aloha](#slotted-aloha)
    - [CSMA](#csma)
- [Bridges](#bridges)
- [********* Incomplete *********](#-incomplete-)
- [Socket Programming](#socket-programming-1)
- [Flow Control](#flow-control)
- [Keeping the pipe full](#keeping-the-pipe-full)
- [Channel Allocation](#channel-allocation)

# Socket Programming

### UDP

- User Datagram Protocol
- Data checksum
- best-effort

### TCP

- Transmission Control Protocol
- Data checksum
- Reliable byte-stream delivery
- Flow and congestion control


# Framing

### Byte Count

1) Count the number of data bits and add 1 (N+1)
2) Add the binary version of that number to the front of the data string

### Byte Stuffing

1) Add the FLAG to the end and the start
2) Add an ESC data bit before and occurrence of a FLAG or ESC data bit 

### Bit Stuffing

1) Add the FLAG to the end and the start
2) Add a "0" after every 5 sequential 1s

# Error Control

### Checksum

### Hamming Code

1) Add an "x" at the 1,2,4,8,16, etc, positions
2) Get the locations of the "1s"
3) Add up their binary values
4) Insert total into where the "x"s are in reverse order

### Hamming Code Error Check

1) Get the locations of the "1"s
2) Count the 1s in each column
   1) 0 for even number
   2) 1 for odd number
3) If all 0000, it's error free

### CRC

1) Create the polynomial
2) Add N-1 zeroes to end of the data string
   1) N is the length of the polynomial
3) Divide data string by the polynomial

### CRC Error Check

1) Divide result by polynomial
2) No remainder = no error

# FEC vs ARQ

### ARQ

- Automatic Repeat reQuest
- two-way communication between the transmitter and receiver to enable the re-transmission of lost IP packets

### FEC

- Forward Error Correction
- the transmission of enough additional redundant information with the primary data stream to reconstruct lost IP packets up to a certain extent

# Multiple Access Protocols

### Pure Aloha

- Any station can broadcast at any time on the same frequency
- collision detection through positive ack on a different frequency
- after collision, wait random time before trying again
- Pro
  - Simple
- Con
  - Inefficient under high traffic load

### Slotted Aloha

- twice as efficient as pure aloha
- low load wastes slots, high loads causes collisions

### CSMA

- Carrier Sense Multiple Access
- Improves on aloha by sensing the channel
  - won't send if user senses channel is busy
- Persistent - sends as soon as idle
- Nonpersistent - waits a random amount of time
- Being less persistent is better under high load

# Bridges

- Learning Bridges
- Spanning Tree Algorithm

# ********* Incomplete *********

# Socket Programming

- Functions associated with the client/server exchange

# Flow Control

- Stop-and-wait
- Sliding Window
  - GO-back-n
  - SRP

# Keeping the pipe full

# Channel Allocation










