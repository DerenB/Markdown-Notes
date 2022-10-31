// Deren Bozer
// COSC-522 F22
// Project 1: UDP Calculator
// Server File

// Include items
#include <stdio.h>      // for printf() and fprintf()
#include <sys/socket.h> // for socket(), connect(), sendto(), and recvfrom()
#include <arpa/inet.h>  // for sockaddr_in and inet_addr()
#include <stdlib.h>     // for atoi() and exit()
#include <string.h>     // for memset()
#include <unistd.h>     // for close()
#include <math.h>       // for mod calculations

// Longest String Size
#define STRINGMAX 255

int main(int argc, char *argv[]) {
    // Variables
    int sock;                               //* Socket
    struct sockaddr_in mathServAddr;        //* Local address
    struct sockaddr_in clientAddr;          //* Client address
    unsigned int cliAddrLen;                //* Length of incoming message
    char inputStringBuffer[STRINGMAX];      //* Buffer for input string
    unsigned short mathServPort;            //* Server port
    int recvMsgSize;                        //* Size of received message
    float total = 0.0;                      // Float for running total
    
    // Test for correct number of arguments
    if (argc != 2) {
        fprintf(stderr,"Usage:  %s <UDP SERVER PORT>\n", argv[0]);
        exit(1);
    }
    
    // First arg:  local port
    mathServPort = atoi(argv[1]);  
    
    // Create socket for sending/receiving datagrams
    if ((sock = socket(PF_INET, SOCK_DGRAM, IPPROTO_UDP)) < 0) {
        printf("socket() failed");
        return -1;
    }
        
    // Construct local address structure
    memset(&mathServAddr, 0, sizeof(mathServAddr));     // Zero out structure
    mathServAddr.sin_family = AF_INET;                  // Internet address family
    mathServAddr.sin_addr.s_addr = htonl(INADDR_ANY);   // Any incoming interface
    mathServAddr.sin_port = htons(mathServPort);        // Local port
    
    // Bind to the local address
    if (bind(sock, (struct sockaddr *) &mathServAddr, sizeof(mathServAddr)) < 0) {
        printf("bind() failed");
        return -1;
    }

    // Copy of the inbound string
    char inboundCopy[STRINGMAX] = "";
    char quitString[STRINGMAX] = "exit";
    
    // Runs until user types CTRL-C
    for (;;) {
        // Set the size of the in-out parameter
        cliAddrLen = sizeof(clientAddr);
        
        // Block until receive message from a client
        if ((recvMsgSize = recvfrom(sock, inputStringBuffer, STRINGMAX, 0,
        (struct sockaddr *) &clientAddr, &cliAddrLen)) < 0) {
            printf("recvfrom() failed");
            return -1;
        }

        // Preview what was sent
        printf("---------- \n");
        printf("Inbound: %s \n", inputStringBuffer);

        // Copies inbound string
        strcpy(inboundCopy, inputStringBuffer);

        // Variables for completing the Math
        int newMathCheck;
        char* token1;
        char* token2;
        float valueOne;
        float valueTwo;

        // Checks if it's a new math problem
        if(inboundCopy[0] == '+' 
        || inboundCopy[0] == '-' 
        || inboundCopy[0] == '*' 
        || inboundCopy[0] == '/' 
        || inboundCopy[0] == '%') {
            newMathCheck = 0;
            // Gets second integer value
            token2 = inboundCopy + 1;
            valueTwo = atof(token2);
        } else {
            newMathCheck = 1;

            // Gets first integer value
            token1 = strtok(inboundCopy, "*/+-%%");
            valueOne = atof(token1);

            // Gets second integer value
            token2 = strtok(NULL, "*/+-%%");
            valueTwo = atof(token2);
        }

        // Checks to see what operator was entered
        char *pchAdd = strstr(inputStringBuffer, "+");
        char *pchSub = strstr(inputStringBuffer, "-");
        char *pchMul = strstr(inputStringBuffer, "*");
        char *pchDiv = strstr(inputStringBuffer, "/");
        char *pchMod = strstr(inputStringBuffer, "%");

        // Does the calculations
        float output;
        if(pchAdd) {
            if(newMathCheck == 0) {
                printf("I will add %f and %f.\n", total, valueTwo);
                total = total + valueTwo;
            } else {
                printf("I will add %f and %f.\n", valueOne, valueTwo);
                total = valueOne + valueTwo;
            }
        } else if(pchSub) {
            if(newMathCheck == 0) {
                printf("I will subtract %f from %f.\n", valueTwo, total);
                total = total - valueTwo;
            } else {
                printf("I will subtract %f from %f.\n", valueTwo, valueOne);
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
            if(valueTwo == 0) {
                printf("Can not divide by 0.");
            } else {
                if(newMathCheck == 0) {
                    printf("I will divide %f by %f.\n", total, valueOne);
                    total = total / valueTwo;
                } else {
                    printf("I will divide %f by %f.\n", valueOne, valueTwo);
                    total = valueOne / valueTwo;
                }
            }
        } else if(pchMod)  {
            if(valueTwo == 0) {
                printf("Can not divide by 0.");
            } else {
                if(newMathCheck == 0) {
                    printf("I will mod %f by %f.\n", total, valueOne);
                    total = fmod(total, valueTwo);
                } else {
                    printf("I will mod %f by %f.\n", valueOne, valueTwo);
                    total = fmod(valueOne, valueTwo);
                }
            }
        } else {
            total = 0;
        }

        // Converts the output to a string
        char buf[STRINGMAX];
        gcvt(total, 3, buf);

        // Print to console the outputs
        printf("New Total: %f \n", total);
        printf("Sending: %s \n", buf);
        printf("Handling client %s\n", inet_ntoa(clientAddr.sin_addr));
        printf("---------- \n\n");
        
        // Send received datagram back to the client
        if (sendto(sock, buf, recvMsgSize, 0,
        (struct sockaddr *) &clientAddr, sizeof(clientAddr)) != recvMsgSize) {
            printf("sendto() sent a different number of bytes than expected.");
            return -1;
        }
        
        // Clear the variable memory
        memset(inputStringBuffer, 0, 255);
    }
    // NOT REACHED
}








