
# 522 - Computer Networking Principles

# 09-21 Notes

### **Switching Strategies**
- **B**: bit rate (bits per second)
- **M**: message size (bits)
- **N**: number of packets
- **O**: overhead bits (bits)
- **K**: packet size including overhead (bits)
- **P**: propagation rate (meters per second)
- **D**: length of one hop (meters)
- **H**: number of hops
- **S**: setup time for CKT switching and virtual packet switching (seconds)

### **End-to-end Delays / Circuit Switching**
- Call setup
- Transmission Delay - how long it will take to transmission based off of (message size / bit rate)
- Propagation Delay - (distance / Propagation Rate)
$$T_{ckt} = S + \frac{M}{B} + (H * \frac{D}{P})$$

### **Message Switching**
$$T_{MSG} = H * (\frac{M}{B} + \frac{D}{P})$$

### **Datagram Packet Switching**

$$T_{DGRAM} = \frac{N*K}{B} + \frac{D}{P} + (\frac{K}{B} + \frac{D}{P}) * (H - 1)$$

$$T_{DGRAM} = ((N + H - 1) * \frac{K}{B}) + (H * \frac{D}{P})$$

### **Virtual Circuit Packet Switching**
$$T_{VC} = S + T_{DGRAM}$$

### **Example**
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

### **Socket Programming Files**

- Files > Doc Sharing > Socket Programming > Sample Socket Code.zip
- TCPEchoClient.c
- TCPEchoServer.c
- UDPEchoClient.c
- UDPEchoServer.c
- HandleTCPClient.c

### **Socket Programming Notes**

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


# 09/26 Notes - Sockets

- Both Client and Server have to make their own socket 


