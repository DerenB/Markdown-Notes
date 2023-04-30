
# Setup

### Guides

- [Bootstrap](https://getbootstrap.com/)
- [How to Develop an ASP.NET Core Application Using Visual Studio Code](https://www.syncfusion.com/blogs/post/how-to-develop-an-asp-net-core-application-using-visual-studio-code.aspx)
- [MVC vs. Razor Pages](https://learn.microsoft.com/en-us/dotnet/architecture/porting-existing-aspnet-apps/comparing-razor-pages-aspnet-mvc)
- [VSCode - Create Razor Pages](https://github.com/dotnet-presentations/aspnetcore-for-beginners/blob/main/Tutorial/1-Create%20a%20Razor%20Page/Create-a-Razorpage.md)

### Extensions / Installations Needed

- Install [Dotnet from  Microsoft](https://dotnet.microsoft.com/en-us/download/dotnet)
- Install [NodeJS](https://nodejs.org/en)
- C#
- HTML CSS Support
- Live Server
- Compile Hero

### Commands

- Create ASP.NET project
    - Command: `dotnet new mvc --name <ProjectName>`
- Create Razor Pages Project
    - Command: `dotnet new razor -o <ProjectName> -f net7.0`
- Run dotnet Project
    - Command: `dotnet run`

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

# VSCode Project Setup

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

### Add NuGet Packages

- View > Command Palette > NuGet: Open NuGet Gallery
- Search for NuGet packages, install to csproj file

### Build & Run Release

- Builds release version
    - CMD: `dotnet build -c release`
- Run release version
    - CMD: `dotnet run -c release`
