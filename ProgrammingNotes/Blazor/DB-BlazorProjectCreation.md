
# Create Files

1. Create Solution File
   1. CMD: `dotnet new sln`
   2. Name defaults to Parent Directory name
   3. Solutions without default name can't add server to project
2. Create Blazor Server App (empty) project
   1. CMD: `dotnet new blazorserver-empty --name BlazorApp`
3. Create Class Library project
   1. CMD: `dotnet new classlib --name SupportLibrary`
4. Create Database project
   1. Done in the "Database Projects" tab in VSCode
5. Add Projects to Solution
   1. CMD: `dotnet sln add .\ProjectDatabase\ProjectDatabase.sqlproj`
   2. CMD: `dotnet sln add .\BlazorApp\BlazorApp.csproj`
   3. CMD: `dotnet sln add .\SupportLibrary\SupportLibrary.csproj`

# Setup Class Library

1. Delete default class `Class1.cs`
2. Add reference to the class library to Blazor App **need to test**
   1. Add to Blazor Project File: *BlazorApp* > *BlazorApp.csproj*
```
<ItemGroup>
    <ProjectReference Include="..\SupportLibrary\SupportLibrary.csproj" />
</ItemGroup>
```
1. Create a "`Data`" directory
   1. Data services in this directory
2. Create a "`DataAccess`" directory
   1. Directly talks to the database
   2. Not exposed outside of the support library for internal use
   3. Not in dependency injection 

# Set up Database

1. Create the directory structure
   1. Create directory "`dbo`"
   2. In DBO create directory "`Stored Procedures`"
   3. In DBO create directory "`Tables`"
2. Create the Tables
   1. Right Click Tables Directory > Add Table
   2. Add scripts for table columns
3. Publish Database
   1. Right click database in Database Projects tab
   2. Publish
   3. Publish to an existing SQL server
   4. Don't use profile
   5. Click default
   6. Click the corresponding file name
   7. Publish
   8. Check in SSMS that it was published
4. Add the connection string
   1. Open `appsettings.json` in the blazor project 
   2. Add this codeblock to connect to the database
```
"ConnectionStrings": {
   "SQLDB": "Data Source=localhost;Database=ProjectDatabase;IntegratedSecurity=sspi;TrustServerCertificate=True;"
}
```

# Setup the Blazor Project

1. Create a `Shared` Directory
   1. To this Create `MainLayout.razor`
2. Add the imports to `_Imports.razor`
   1. CMD: `@using ProjectName`
   2. CMD: `@using ProjectName.Shared`
   3. EX: `@using BlazorApp`
   4. EX: `@using BlazorApp.Shared`
3. Make sure MainLayout is being called
   1. Called in `App.razor`
   2. Default line: `<RouteView RouteData="@routeData" DefaultLayout="@typeof(MainLayout)"/>`
4. Add Bootstrap imports
   1. Add import strings to *Pages* > *_Host.cshtml*
   2. Local files downloaded can be added to 

# Setup Models

1. Add a `Model` directory to *SupportLibrary*
2. In `Model` add your Models as CS classes
   1. Example: CashPullModel.cs
   2. Model variables should match the database table variables
   3. Extract the interface for the model class
      1. 


# Layout Items / CSS Isolation

- Main Layout
  - Need to inherit the layout component
    - `@inherits LayoutComponentBase`
  - Need the body tag for where to render the body
    - `@body`
- CSS Isolation
  - Need to add a line to `_Host.cshtml` to enable CSS Isolation
  - Add: `<link href="ProjectName.styles.css" rel="stylesheet" />`
  - Ex: `<link href="BlazorApp.styles.css" rel="stylesheet" />`


