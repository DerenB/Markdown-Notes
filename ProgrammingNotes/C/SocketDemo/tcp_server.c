#include <stdio.h>
#include <stdlib.h>

#include <sys/socket.h>
#include <sys/types.h>

#include <netinet/in.h>
#include <unistd.h>

int main() {
    // Create the string for the data to be sent
    char server_message[256] = "You have reached the server!";

    // Create the server socket
    int server_socket;
    server_socket = socket(AF_INET, SOCK_STREAM, 0);

    // Define the server address structure
    struct sockaddr_in server_address;
    server_address.sin_family = AF_INET;
    server_address.sin_port = htons(9002);
    server_address.sin_addr.s_addr = INADDR_ANY;

    // bind the socket to our specified IP and Port
    bind(server_socket, (struct sockaddr*) &server_address, sizeof(server_address));

    // Listen for connection
    listen(server_socket, 5);

    // Integer for holding the client socket
    int client_socket;

    // Accept
    client_socket = accept(server_socket, NULL, NULL);

    // Send the message to the client socket
    send(client_socket, server_message, sizeof(server_message), 0);

    // Close the socket
    close(server_socket);

    return 0;
}