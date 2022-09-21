
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

$$T(DGRAM) = \frac{N*K}{B} + \frac{D}{P} + (\frac{K}{B} + \frac{D}{P}) * (H - 1)$$

$$T(DGRAM) = ((N + H - 1) * \frac{K}{B}) + (H * \frac{D}{P})$$

### **Virtual Circuit Packet Switching**
$$T_{VC} = S + T_{DGRAM}$$

