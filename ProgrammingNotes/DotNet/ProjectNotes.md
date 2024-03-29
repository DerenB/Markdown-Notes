
# Setup

### Guides

- [Bootstrap](https://getbootstrap.com/)
- [How to Develop an ASP.NET Core Application Using Visual Studio Code](https://www.syncfusion.com/blogs/post/how-to-develop-an-asp-net-core-application-using-visual-studio-code.aspx)
- [MVC vs. Razor Pages](https://learn.microsoft.com/en-us/dotnet/architecture/porting-existing-aspnet-apps/comparing-razor-pages-aspnet-mvc)
- [VSCode - Create Razor Pages](https://github.com/dotnet-presentations/aspnetcore-for-beginners/blob/main/Tutorial/1-Create%20a%20Razor%20Page/Create-a-Razorpage.md)
- [VSCode DotNet Library](https://learn.microsoft.com/en-us/dotnet/core/tutorials/library-with-visual-studio-code?pivots=dotnet-7-0)

### Installations Needed

- Install [Dotnet from  Microsoft](https://dotnet.microsoft.com/en-us/download/dotnet)
- Install [NodeJS](https://nodejs.org/en)

### Extensions

- C# (MS)
- HTML CSS Support
- Live Server
- Compile Hero
- NuGet Gallery
- SQL Server (MS)
    - SQL Database Projects (MS)
    - SQL Bindings (MS)
    - Data Workspace (MS)

# VSCode Project Setup

### Types of Projects

- Create C# Class Library
    - CMD: `dotnet new classlib -o <FolderName>`
- Create ASP.NET project
    - CMD: `dotnet new mvc --name <ProjectName>`
- Create Razor Pages Project
    - CMD: `dotnet new razor -o <ProjectName> -f net7.0`
- Create ASP.NET Core Web API
    - CMD: `dotnet new webapi --name <ProjectName>`
- Create Blazor Server
    - CMD: `dotnet new blazorserver --name <ProjectName>`
- Create Blazor Web Assembly
    - CMD: `dotnet new blazorwasm --name <ProjectName>`
- Run dotnet Project
    - CMD: `dotnet run`

### Project Creation

- Open folder that will be used
- Create a Solution
    - CMD: `dotnet new sln`
- Add Projects to solution
    - CMD: `dotnet sln add <ProjectFolder>/<ProjectFile>`
    - Ex1: `dotnet sln add DataLibrary/DataLibrary.csproj`
    - Ex2: `dotnet sln add DinerDB/DinerDB.sqlproj`
- Add a Project Reference
    - CMD: `dotnet add <ProjectFolder>/<ProjectFile> reference <ProjectFolder>/<ProjectFile>`
- List Solutions in Project
    - CMD: `dotnet sln <SolutionFileName> list
    - Exa: `dotnet sln MySolution.sln list`

### Add NuGet Packages

- View > Command Palette > NuGet: Open NuGet Gallery
- Search for NuGet packages, install to csproj file
- Add NuGet packages to the DLL:
```
<ItemGroup>
    <PackageReference Include="Package" Version="Version" />
    <PackageReference Include="Dapper" Version="2.0.123" />
</ItemGroup>
```

### Add DLL Packages

- Used for exporting the server files
- [Stack Overflow Answer](https://stackoverflow.com/questions/41381064/vscode-c-sharp-add-reference-to-custom-assembly)
- Open project file
    - Exa: `CashRazorPages.csproj`
- Add the following Code block:
```
<ItemGroup>
    <Reference Include="DLL FileName">
        <HintPath> Relative Path to DLL File </HintPath>
    </Reference>
    Ex:
    <Reference Include="DataLibrary.dll">
        <HintPath>BlazorServerDemoApp\DataLibrary.dll</HintPath>
    </Reference>
</ItemGroup>
```

### Build & Run Release

- Builds release version
    - CMD: `dotnet build -c release`
- Run release version
    - CMD: `dotnet run -c release`

# Razor Pages

- Add New Razor Page
    - CMD: `dotnet new page --name <FileName> --namespace <Namespace> --output <Directory>`
    - Exa: `dotnet new page --name Create --namespace CashRazorPages.Pages --output Pulls`

### Connection String 

- Local Host:
    - `"Default": "Data Source=localhost;Database=DinerDB;Integrated Security=sspi; TrustServerCertificate=True;"`

# Bootstrap

### Adding Bootstrap

- Option 1 - Downloading:
    - Download Bootstrap file from Bootstrap website
    - Add file to project
    - Link to the CSS and Script files
    - `<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">`
    - `<script src="bootstrap/js/bootstrap.bundle.min.js"></script>`
- Option 2 - CDN:
    - Use CDN links
    - Add links to CSS and Script pages
    - `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">`
    - `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>`
- Option 3 - NPM:
    - Imports bootstrap using NPM
    - Create the Json File
        - Command: `npm init -y`
    - Install Bootstrap
        - Command: `npm i bootstrap@5.3.0-alpha3`
- Option 4 - ASP.NET Core:
    - Create a new project (ex Blazor Server)
    - Location of Bootstrap files: wwwroot > lib > bootstrap > dist
- Option 5 - nuGet:
    - VSCode: Command > NuGet Gallery

### SCSS

- Use NPM to create JSON file and install bootstrap
- Create a `.scss` file
    - Add on the last line: `@import "../node_modules/bootstrap/scss/bootstrap.scss";` 
    - variable changes have to come before the import


