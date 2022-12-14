#include <stdio.h>
#include <stdlib.h>

#include <sys/types.h>
#include <sys/socket.h>

#include <netinet/in.h>
#include <unistd.h>

int main() {

    // Create the socket
    int network_socket;
    network_socket = socket(AF_INET, SOCK_STREAM, 0);

    // Specify an address for the socket
    struct sockaddr_in server_address;
    server_address.sin_family = AF_INET;
    server_address.sin_port = htons(9002);
    server_address.sin_addr.s_addr = INADDR_ANY; //same as connecting to 0.0.0.0

    // Connect to another Socket
    // connect(our-socket, cast-to-struct & pointer address, size-of-address)
    int connection_status = connect(network_socket, (struct sockaddr *) & server_address, sizeof(server_address));
    
    // Connection Error Message
    if (connection_status == -1) {
        printf("There was an error making a connection to the remote socket \n\n");
    }

    // Receive data from the server
    char server_response[256]; //string to hold receive data
    // recv(our-socket, where-to-hold-the-data, size-of-data, flags)
    recv(network_socket, &server_response, sizeof(server_response), 0);

    // Print out received data
    printf("The server sent the data: %s \n",server_response);

    // Close the socket
    close(network_socket);

    return 0;
}