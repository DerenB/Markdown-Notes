
# AppSettings Locations

- If a setting is in a top level, it won't be in the lower levels
- 5 standard locations:
1. Command Line app settings
2. Environment Variables
3. User Secrets 
4. Environment Specific json files
   1. AppSettings.Development.json files
5. AppSettings.json

# Inject Settings

- Inject the configuration settings into Razor page
- Add the Using statement to the `_Imports.razor` page
  - `@using Microsoft.Extensions.Configuration`
- Add a inject statement to the razor page
  - `@inject IConfiguration _config`
- Both steps can be done in one at the inject statement
  - `@inject Microsoft.Extensions.Configuration.IConfiguration _config`

# Connection String

- Set the Connection String in Settings
  - Connection is singular
  - String is plural
```
{
   "ConnectionStrings: {
      "Default": "connection"
   }
}
```
- Retrieve the Connection String in a Razor page
```
connectionString = _config.GetConnectionString("Default");
```

# Get Setting Values

- Can be used in a razor page to retrieve settings
- Razor Page:
```
@code {
    string mySetting = "";
    string subSetting = "";

    protected override void OnInitialized() {
        mySetting = _config.GetValue<string>("MySetting");
        subSetting = _config.GetValue<string>("MainSetting:SubSetting");
    }
}
```
- AppSettings.json:
```
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "MySetting": "This is my setting in appsettings.json",
  "MainSetting": {
    "SubSetting": "This is the sub setting."
  }
}
```

# AppSettings.Development

- Overrides the AppSettings file
- Not a required file
- Can be used for testing
- Examples:
  - Testing log out for inactivity
  - Staying logged in for longer than normal
  - Sending test emails

# User Secrets 

- How to set up in VSCode:
  - 
- Will override both AppSettings and AppSettings.Development
- Not Encrypted, stored in plain text 
- Don't store too sensitive data
- DO:
  - Local user password
  - Local database password
- DON'T
  - Credit Card Numbers

### VSCode Use

- Install Extension: `.NET Core User Secrets`
- Right Click `.csproj` file
- Click Manage User Secrets
- Pop-up prompt asking if you would like one generated 

### Visual Studio Use

- Right Click `.csproj` file
- Click Manage User Secrets

# Environments

- Properties > launchSettings.json
- web servers configured here
- Environmental Variable
  - Sets the environment to launch with when the app runs
  - Defaults to production


### Create an Environment

- Create a json file such as `application.Staging.json`
- Set the `ISS Express: environmentVariable` to `Staging`

# Options

- Create a custom section in `appsettings.json`
```
"EmailSettings": {
  "EnableEmailSystem": true,
  "EmailTimeoutInSeconds": 30,
  "EmailServers": ["ServerA", "ServerB", "ServerC"]
}
```
- Create an Options Folder
  - Add the constructor class file
  - Use the naming convention `CustomNameOptions.cs`
  - Exa; `EmailSettingsOptions.cs`
- Create the class
```
namespace BasicDemo.Options {
  public class EmailSettingsOptions {
    public bool EnableEmailSystem { get; set; }
    public int EmailTimeoutInSeconds { get; set; }
    public List<string> EmailServers { get; set; }
  }
}
```
- Add the using statement to the `_Imports.razor` file
  - `@using BasicDemo.Options`

