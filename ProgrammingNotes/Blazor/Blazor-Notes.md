
# Setup

### Guides

- [Bootstrap](https://getbootstrap.com/)
- [How to Develop an ASP.NET Core Application Using Visual Studio Code](https://www.syncfusion.com/blogs/post/how-to-develop-an-asp-net-core-application-using-visual-studio-code.aspx)
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

- Create a Solution
    - CMD: `dotnet new sln --name <SolutionName>`
- Add Projects to solution
    - CMD: `dotnet sln add <ProjectFolder>/<ProjectFile>`
    - Ex1: `dotnet sln add DataLibrary/DataLibrary.csproj`
- List Solutions in Project
    - CMD: `dotnet sln <SolutionFileName> list
    - Exa: `dotnet sln MySolution.sln list`

### Types of Projects

- Create C# Class Library
    - CMD: `dotnet new classlib -o <FolderName>`
- Create Blazor Server
    - CMD: `dotnet new blazorserver --name <ProjectName>`
- Create Blazor Web Assembly
    - CMD: `dotnet new blazorwasm --name <ProjectName>`
- Run dotnet Project
    - CMD: `dotnet run`

# Header Items

- Located in Pages > `_Host.cshtml`
- Items here apply to every page
- Use the brackets `<HeadContent></HeadContent>` on individual pages for individual head content