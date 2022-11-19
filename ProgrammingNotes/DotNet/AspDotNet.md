# ASP.NET Notes

# Learning Resources:

- [Codecademy](https://www.codecademy.com/learn)

# Table of Contents


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [ASP.NET Notes](#aspnet-notes)
- [Learning Resources:](#learning-resources)
- [Table of Contents](#table-of-contents)
- [Definitions](#definitions)
- [Basics](#basics)
- [Folder Structure](#folder-structure)
- [View Page](#view-page)
    - [Structure](#structure)
    - [Variables from Page Model](#variables-from-page-model)
    - [Spaces & Codeblocks](#spaces--codeblocks)
    - [Conditionals](#conditionals)
- [Page Model](#page-model)
- [Page Model Methods](#page-model-methods)
    - [OnGet](#onget)
- [Sharing Pages](#sharing-pages)
    - [ViewStart](#viewstart)
    - [ViewImport](#viewimport)
- [Partials](#partials)
- [Routing](#routing)
    - [Customize URL](#customize-url)
    - [POST request](#post-request)
- [Redirecting](#redirecting)

<!-- /code_chunk_output -->

# Definitions

- **.NET**: an open source developer platform, created by Microsoft, for building many different types of applications.
  - the tool that lets you build and run C# programs
  - translates C# code into computer readable instructions
- **.NET Framework** - original version of .NET that only runs on Windows computers
- **.NET Core** - new cross-platform version of .NET that runs on Windows, MacOS, Linux
  - More flexible, Microsoft actively enhancing
- **ASP.NET**: "an open source web framework, for building modern web apps and services with .NET"
- Two approaches to building a web app: Model-View-Controller (MVC) or Razor Pages

[Back to Top](#table-of-contents)

# Basics

- Razor is a markup syntax for embedding server-based code into webpages
  - Consists of Razor markup, C#, HTML
  - Files containing Razor generally have a .cshtml file extension
- Every *page* has a "view page" as a .cshtml document
- Every view page has a *page model* called "model page" as a .cshtml.cs document

[Back to Top](#table-of-contents)

# Folder Structure

```
Razor App
  Startup.cs
  Program.cs
  RazorApp.sln
  ...
  Pages
    _ViewStart.cshtml
    MyPage.cshtml
    MyPage.cshtml.cs
    ...
    Shared
      _Layout.cshtml
      _MyPartial.cshtml
      ...
  Properties
```

[Back to Top](#table-of-contents)

# View Page

### Structure

- Requires "@page" as the first line. Indicates it as a Razor page
- File type of .cshtml
- Add "@model ModelPage" 2nd to connect to the model page
- Prepend C# code with "@"
```
@pages
@model DateModel
<h1>@DateTime.Now.ToShortDateString()</h1>
```

### Variables from Page Model

- Get variable values from the page model
```
@page
@model PizzaModel
<h5>Pizza for: @Model.Customer</h5>
<h5>User: @ViewData["username"]</h5>
```

### Spaces & Codeblocks

- C# code with spaces need paranthesis
- C# code blocks use brackets
```
@pages
<p>@(int age = 5)</p>
@{
    int num = 2;
}
```

### Conditionals

- Only the "if" in an if statement needs the "@" sign
- Same thing with switch statements, for, foreach, while
```
@if (age > 4) {
    // content
} else {
    // content
}
@switch(num) {
    
}
```

[Back to Top](#table-of-contents)

# Page Model

- view layer functionality uses logic in the page model
- File type of .cshtml.cs
- - Add `@model ModelPage` in the view page to connect to the model page

[Back to Top](#table-of-contents)

# Page Model Methods

### OnGet

- Handler Method
  - Methods that are executed as a result of a request
- Get request invokes the OnGet method
- Can assign values on page load
- ViewData
  - Creates a key/value pair that's accessible in the view page
```
public class UserModel : PageModel {
  public int age {get; set;}
  public void OnGet() {
    Age = 25;
    ViewData["username"] = "User";
  }
}
```

[Back to Top](#table-of-contents)

# Sharing Pages

### ViewStart

- Layout settings
- Cares about logic required for view pages
- Location of the main layout page in the `_ViewStart.cshtml` file
  - Automatically generated under /Pages
- Default layout file:
```
@{
  Layout = "_Layout";
}
```
- Directs the app to use the "_Layout" file as the main layout for all content
  - Layout file located at: /Pages/Shared
  - filed called: "_Layout.cshtml"
- Have to render the contents `@RenderBody()`

### ViewImport

- Cares about imports
- Includes directives that will become globally available
- Most Commonly included ones are added by default:
  - `@namespace`
  - `@using`
  - `@addTagHelpers`
- NameSpace
  - Organizes the code into  groups
  - Declares the root namespace for the Pages
  - Default for most projects: `@namespace YourProjectName.Pages`
  - Can have only 1 `namespace` directive per `ViewImports` file
  - Directive necessary for the models to work
- Using
  - Allows adding imports to all of the Pages instead of adding per page
  - Ex: if `@using Microsoft.Extensions.Localization;` is added to `Using`, every file will have it
- Add Tag Helper
  - Gives access to Tag Helpers throughout the pages
  - Default Directive:
  - `@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers`

[Back to Top](#table-of-contents)

# Partials

- HTML snippets
- Begin file name with underscore _
- `<partial name="_PartialName" />`
- Example:
  - Create the Partial file 
    - File Name: `_MyPartial.cshtml`
    - Code: `<div>Here's some content from a partial!</div>`
  - Add to the separate page:
```
<div>
  <h1>Welcome to My Page!</h1>
  <partial name="_MyPartial"/>
</div>
```
- The result after loading the partial:
```
<div>
  <h1>Welcome to My Page!</h1>
  <div>Here's some content from a partial!</div>
</div>
```

[Back to Top](#table-of-contents)

# Routing

### Customize URL

- default URL is defined by the filename
  - index.cshtml is at localhost:8000
- Add the custom URL after the `@page`
- Without '/':
  - `@page "Pirates"`
  - makes Privacy.cshtml: `localhost:8000/Privacy/Pirates`
- With "/":
  - `@page "/Pirates"`
  - makes Privacy.cshtml: `localhost:8000/Pirates`

### POST request

- Replace:
  - `localhost:8000/Days?day=1`
- With:
  - `localhost:8000/Days/1`
- By Adding:
  - `@page "/Days/{day}"`
- Add a "?" to make the route value optional
  - `@page "/Days/{day?}"`
- Add a contraint to the variable type
  - `@page "/Days/{day:int?}"`
- Change the OnGet value in the cshtml.cs by adding "?"
  - Makes the parameter optional, or nullable
  - `public void OnGet(int? day)`
- Convert the int to int?
  - `CurrentDay = day.Value;`

[Back to Top](#table-of-contents)

# Redirecting

- 

[Back to Top](#table-of-contents)


