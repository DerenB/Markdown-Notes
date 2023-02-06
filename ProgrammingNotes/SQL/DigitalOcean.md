
# Digital Ocean Setup

# URLs

[Digital Ocean Homepage](https://www.digitalocean.com/)
[MySQL Workbench](https://www.mysql.com/products/workbench/)

# Technologies Used

- L - Linux
- A - Apache
- M - MySQL
- P - PHP
- VSCode
  - Extension: SFTP by Natizyskunk
  - https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp
- MySQL Workbench

# Step 1: Create Account & Project

- Go to Digital Ocean, create a login
  - I used my GitHub account
- Create a New Project
  - Any Options

# Step 2: Create Droplet

- Select basic options
- Write down password for SSH

# Step 3: Test SSH Connection

- Use Terminal or Powershell
- Type: `ssh root@your-ip-address`
  - The IP address is the public IPv4 found at the main page of your droplet
- Type in the password saved from the droplet creation

# Step 4: Setup VSCode

- Set up VSCode for editing PHP files
- Install SFTP extension
- Open an empty directory in VSCode (or any directory where you want a local save of the project)
- Open the VSCode Command Pallette (CTRL-SHIFT-P / CMD-SHIFT-P)
- Run "SFTP: Config"
  - This Creates a "sftp.json" file for the SFTP extension
- Configure the "sftp.json": file
```
{
    "name": "Any name you want",
    "host": "Public IPv4 Address",
    "protocol": "sftp",
    "port": 22,
    "username": "root",
    "password":"Password from creating droplet",
    "remotePath": "/var/www/html",
    "uploadOnSave": true
}
```









