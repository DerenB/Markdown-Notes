// Deren Bozer
// COSC-522 F22
// Project 1: UDP Calculator
// Server File

// Include items
#include <stdio.h>      /* for printf() and fprintf() */
#include <sys/socket.h> /* for socket() and bind() */
#include <arpa/inet.h>  /* for sockaddr_in and inet_ntoa() */
#include <stdlib.h>     /* for atoi() and exit() */
#include <string.h>     /* for memset() */
#include <unistd.h>     /* for close() */

#define ECHOMAX 255     /* Longest string to echo */

// void DieWithError(char *errorMessage);  /* External error handling function */

int main(int argc, char *argv[])
{
    int sock;                        /* Socket */
    struct sockaddr_in echoServAddr; /* Local address */
    struct sockaddr_in echoClntAddr; /* Client address */
    unsigned int cliAddrLen;         /* Length of incoming message */
    char echoBuffer[ECHOMAX];        /* Buffer for echo string */
    unsigned short echoServPort;     /* Server port */
    int recvMsgSize;                 /* Size of received message */
    float total = 0.0;
    
    if (argc != 2)         /* Test for correct number of parameters */
    {
        fprintf(stderr,"Usage:  %s <UDP SERVER PORT>\n", argv[0]);
        exit(1);
    }
    
    echoServPort = atoi(argv[1]);  /* First arg:  local port */
    
    /* Create socket for sending/receiving datagrams */
    if ((sock = socket(PF_INET, SOCK_DGRAM, IPPROTO_UDP)) < 0) {
        // DieWithError("socket() failed");
        printf("socket() failed");
        return -1;
    }
        
    /* Construct local address structure */
    memset(&echoServAddr, 0, sizeof(echoServAddr));   /* Zero out structure */
    echoServAddr.sin_family = AF_INET;                /* Internet address family */
    echoServAddr.sin_addr.s_addr = htonl(INADDR_ANY); /* Any incoming interface */
    echoServAddr.sin_port = htons(echoServPort);      /* Local port */
    
    /* Bind to the local address */
    if (bind(sock, (struct sockaddr *) &echoServAddr, sizeof(echoServAddr)) < 0) {
        // DieWithError("bind() failed");
        printf("bind() failed");
        return -1;
    }

    // Copy of the inbound string
    char inboundCopy[ECHOMAX] = "";
    
    for (;;) /* Run forever */
    {
        /* Set the size of the in-out parameter */
        cliAddrLen = sizeof(echoClntAddr);
        
        /* Block until receive message from a client */
        if ((recvMsgSize = recvfrom(sock, echoBuffer, ECHOMAX, 0,
        (struct sockaddr *) &echoClntAddr, &cliAddrLen)) < 0) {
            // DieWithError("recvfrom() failed");
            printf("recvfrom() failed");
            return -1;
        }

        // Preview what was sent
        printf("Inbound: %s \n", echoBuffer);

        // Copies inbound string
        strcpy(inboundCopy, echoBuffer);

        // Checks if it's a new math problem
        int newMathCheck;
        char* token1;
        char* token2;
        float valueOne;
        float valueTwo;
        if(inboundCopy[0] == '+' || inboundCopy[0] == '-' || inboundCopy[0] == '*' || inboundCopy[0] == '/') {
            newMathCheck = 0;
            // Gets second integer value
            token2 = inboundCopy + 1;
            valueTwo = atof(token2);
        } else {
            newMathCheck = 1;

            // Gets first integer value
            token1 = strtok(inboundCopy, "*/+-%");
            valueOne = atof(token1);

            // Gets second integer value
            token2 = strtok(NULL, "*/+-%");
            valueTwo = atof(token2);
        }

        // Checks to see what operator was entered
        char *pchAdd = strstr(echoBuffer, "+");
        char *pchSub = strstr(echoBuffer, "-");
        char *pchMul = strstr(echoBuffer, "*");
        char *pchDiv = strstr(echoBuffer, "/");

        // Does the calculations
        float output;
        if(pchAdd) {
            if(newMathCheck == 0) {
                printf("I will add %f by %f.\n", total, valueTwo);
                total = total + valueTwo;
            } else {
                printf("I will add %f by %f.\n", valueOne, valueTwo);
                total = valueOne + valueTwo;
            }
        } else if(pchSub) {
            if(newMathCheck == 0) {
                printf("I will subtract %f by %f.\n", total, valueTwo);
                total = total - valueTwo;
            } else {
                printf("I will subtract %f by %f.\n", valueOne, valueTwo);
                total = valueOne - valueTwo;
            }
        } else if(pchMul) {
            if(newMathCheck == 0) {
                printf("I will multiple %f by %f.\n", total, valueTwo);
                total = total * valueTwo;
            } else {
                printf("I will multiple %f by %f.\n", valueOne, valueTwo);
                total = valueOne * valueTwo;
            }
        } else if(pchDiv) {
            if(newMathCheck == 0) {
                printf("I will divide %f by %f.\n", total, valueTwo);
                total = total / valueTwo;
            } else {
                printf("I will divide %f by %f.\n", valueOne, valueTwo);
                total = valueOne / valueTwo;
            }
        } else {
            total = 0;
        }

        // Converts the output to a string
        char buf[ECHOMAX];
        gcvt(total, 7, buf);

        printf("%f \n", total);
        printf("Sending: %s \n", buf);

        printf("Handling client %s\n", inet_ntoa(echoClntAddr.sin_addr));
        
        /* Send received datagram back to the client */
        if (sendto(sock, buf, recvMsgSize, 0,
        (struct sockaddr *) &echoClntAddr, sizeof(echoClntAddr)) != recvMsgSize) {
            // DieWithError("sendto() sent a different number of bytes than expected");
            printf("sendto() sent a different number of bytes than expected.");
            return -1;
        }
            
    }
    /* NOT REACHED */
}








