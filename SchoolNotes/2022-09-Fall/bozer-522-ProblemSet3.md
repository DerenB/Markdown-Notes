Deren Bozer
COSC-522 F22
Problem Set 3

# Problem Set 3 (Chapter 3)

You must show all your work to get maximum credit.

1. Suppose the following sequence of **data** bits need to be transmitted as payload. Show the resulting binary sequence to be sent using the given framing techniques. Assume:
&nbsp;
    ESC: 11100000

    FLAG: 01111110

    **00111111 01111110 10011011 11100000 11111010 11111010 01111110**

a. (10 points) Byte count
    **Ans:**
```
8   Data

```

&nbsp;

b. (10 points) Byte stuffing
    **Ans:**
&nbsp;

    c. (10 points) Bit stuffing
    **Ans:**
&nbsp;

2. Suppose you are designing a sliding window protocol for a 100 Mbps half-duplex point-to-point link to a satellite, which has a 30 milliseconds one-way latency. Assuming that each frame carries 1000 bytes of data:

    a. (10 points) What is the link’s frame capacity?
    **Ans:**
&nbsp;

    b. (10 points) What is the minimum number of bits you will need for the sequence number field to maximize usage of the available bandwidth if the receiver does not buffer out-of-order frames?
    **Ans:**
&nbsp;

    c. (10 points) What is the minimum number of bits you will need for the sequence number field to maximize usage of the available bandwidth if the receiver buffers out-of-order frames?
    **Ans:**
&nbsp;


3. a. (10 points) Generate the Hamming-code for the following 12-bit  data string :

    **1 0 1 0 1 1 0 1 1 0 0 1**
    &nbsp;
    **Ans:**
&nbsp;
   b. (10 points) Show that the generated binary string does not have any errors. 
**Ans:**
&nbsp;


4.  a.(10 points) Suppose we want to transmit the 8-bit message 
&nbsp;
    **0 0 1 0 1 0 1 0**
    &nbsp;
    and protect it from errors using the CRC polynomial $x^{3}+x+1$. Use synthetic or polynomial long division to determine the binary string that should be transmitted. Show all intermediate steps in the division.
**Ans:**
&nbsp;

    b. (10 points) Show that the generated binary string does not have any errors.
**Ans:**
&nbsp;



