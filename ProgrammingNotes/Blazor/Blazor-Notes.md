
# Homework



# Setup

### Guides

- [Bootstrap](https://getbootstrap.com/)
- [How to Develop an ASP.NET Core Application Using Visual Studio Code](https://www.syncfusion.com/blogs/post/how-to-develop-an-asp-net-core-application-using-visual-studio-code.aspx)
- [VSCode DotNet Library](https://learn.microsoft.com/en-us/dotnet/core/tutorials/library-with-visual-studio-code?pivots=dotnet-7-0)
- https://github.com/dotnet-presentations/blazor-workshop/

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

# Routing

### Base Routing

- Page loads `/` which is found in Pages/`_Host.cshtml`
- Then `App.razor` is loaded with the given route
  - If the route exists, the page is loaded
  - If doesn't exist, the "NotFound" is loaded

### Create Routing

- Placed at the top of the .razor page
  - Ex: `@page "/weather"`
  - example.com/weather will direct to that file

### Multiple Routing

- Can have multiple `@page` at the top
- Any of the given routes will direct there

### Pass Parameters in Routing

- Can specify parameters in the route
  - Ex: `@page "/counter/{StarterValue:int}"`


# Header Items

- Located in Pages > `_Host.cshtml`
- Items here apply to every page
- Use the brackets `<HeadContent></HeadContent>` on individual pages for individual head content

# Components

- Create a new component
    - `dotnet new razorcomponent -n <FileName> -o <FileLocation>`
    - Ex: `dotnet new razorcomponent -n Todo -o Pages`
- Add components to a page using the file name
- Ex:
    - File Called: "Counter.razor"
    - Add as a component with `<Counter />`

### Namespace

- Can add components using a namespace
- Add a namespace to the razor component
    - Ex: `@namespace Components`
- Add the namespace to the `_Imports.razor` file
    - Ex: `@using Components`
- Add the component as normal
