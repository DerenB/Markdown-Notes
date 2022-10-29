// Deren Bozer
// COSC-522 F22
// Project 1: UDP Calculator
// Client File

// Include items
#include <stdio.h>      // for printf() and fprintf()
#include <sys/socket.h> // for socket(), connect(), sendto(), and recvfrom()
#include <arpa/inet.h>  // for sockaddr_in and inet_addr()
#include <stdlib.h>     // for atoi() and exit()
#include <string.h>     // for memset()
#include <unistd.h>     // for close()

// Longest String Size
#define STRINGMAX 255

int main(int argc, char *argv[]) {
    // Variables
    int clientSocket;                   // Client Socket descriptor
    struct sockaddr_in echoServAddr;    // Server address
    struct sockaddr_in fromAddr;        // Source address of client
    unsigned short mathServerPort;      // Math Server Port
    unsigned int fromSize;              // In-out of address size for recvfrom()
    char *serverIP;                     // IP address of server
    char *inputString;                  // String to send to echo server
    char stringBuffer[STRINGMAX+1];     // Buffer for receiving echoed string
    int inputStringLen;                 // Length of string to echo
    int respStringLen;                  // Length of received response
    
    // Test for correct number of arguments
    if ((argc < 3) || (argc > 4)) {
        fprintf(stderr,"Usage: %s <Server IP> [<Port>] [Operation]\n", argv[0]);
        exit(1);
    }
    
    // First arg: server IP address (dotted quad)
    serverIP = argv[1];           
    
    // Third arg: string to echo
    inputString = argv[3];       
    
    // Check input length
    if ((inputStringLen = strlen(inputString)) > STRINGMAX) {
        printf("Echo word too long.");
        return -1;
    }  
    
    // Assigns the Port
    if (argc == 4) {
        // Use given port, if any
        mathServerPort = atoi(argv[2]);  
    } else {
        // 7 is the well-known port for the echo service
        mathServerPort = 7;  
    }

    // Create a datagram/UDP socket
    if ((clientSocket = socket(PF_INET, SOCK_DGRAM, IPPROTO_UDP)) < 0) {
        printf("socket() failed.");
        return -1;
    }
    
    // Construct the server address structure
    memset(&echoServAddr, 0, sizeof(echoServAddr));      // Zero out structure
    echoServAddr.sin_family = AF_INET;                   // Internet addr family
    echoServAddr.sin_addr.s_addr = inet_addr(serverIP);  // Server IP address
    echoServAddr.sin_port   = htons(mathServerPort);     // Server port
    
    // Send the string to the server
    if (sendto(clientSocket, inputString, inputStringLen, 0, 
    (struct sockaddr *) &echoServAddr, sizeof(echoServAddr)) != inputStringLen) {
        printf("sendto() sent a different number of bytes than expected.");
        return -1;
    }
    
    // Recv a response
    fromSize = sizeof(fromAddr);
    if ((respStringLen = recvfrom(clientSocket, stringBuffer, STRINGMAX, 0,
    (struct sockaddr *) &fromAddr, &fromSize)) != inputStringLen) {
        printf("recvfrom() failed");
        return -1;
    }
    
    if (echoServAddr.sin_addr.s_addr != fromAddr.sin_addr.s_addr)
    {
        fprintf(stderr,"Error: received a packet from unknown source.\n");
        exit(1);
    }
    
    // Print out the result of the operation
    printf("Result: %s \n", stringBuffer);
    
    // null-terminate the received data
    stringBuffer[respStringLen] = '\0';
    
    // Closes the socket and exits
    close(clientSocket);
    exit(0);
}






