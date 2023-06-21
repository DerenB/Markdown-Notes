# Header ==================================================

- Located in `Pages > _Host.cshtml`
- Has Head/Meta tags for every page
- Base URL
  - `<base href="~/"/>`
  - Sets the prefix for URLs
  - Don't include "~/" in any URL
- Imports CSS files

# Error Handling ==================================================

### Non-existent page

- Error message located in App.razor

### Unhandled, Throw Exception

- In production, details won't be shown to user
- Can avoid with a Try-Catch
- Can edit the error message in `_Host.cshtml`
  - In the DIV with id "blazor-error-ui"
  - Gets shown any time Blazor has an unhandled exception

# Static Files ==================================================

- Saved in the `wwwroot` directory

### CSS

- "bootstrap.min.css" and "site.css" are the base files
- They're imported in Pages > `_Host.cshtml`

# Logging ==================================================

- Started by Program.cs > CreateBuilder
- settings set in appsettings.json
- Have to have log statements in code

### Log Levels (High to Lowest level)

- Critical
  - Has to be seen
  - Beyond an error, fatal problem
- Error
- Warning
- Information
- Debug
  - 
- Trace
  - Just for debugging purposes
  - A lot of them

# Pages ==================================================

### _Host.cshtml

- Starting Point: `_Host.cshtml`
- App is rendered with 1 line:
  - `<component type="typeof(App)" render-mode="ServerPrerendered"/>`
  - Calls the `App.razor` file
- Can add custom CSS or JS files here, will work across website

### App.Razor

- Next: `App.razor`
- Loads `MainLayout.razor`

### MainLayout.razor

- Next: `MainLayout.razor`
- Includes layout components that should be across the whole website
  - Navigation bar
  - Side panel
  - Footer


### NavMenu.razor

- Highlight active navigation item
  - Exact match
    - `<NavLink class="nav-link" href="" Match="NavLinkMatch.All">`
    - The Match.All looks if the URL is an exact match to the page information
    - Example for `@page "/counter"`
      - Works: website.com/counter
      - Doesn't work: website.com/counter/23
  - Prefix match
    - `<NavLink class="nav-link" href="" Match="NavLinkMatch.Prefix">`
    - Match.Prefix just tries to match the start of the URL
    - Example for `@page "/counter"`
      - Works: website.com/counter
      - Works: website.com/counter/23

# Creating Pages ==================================================

- Create a Razor Component in `Pages` directory
- Add a `@page` at the top 
  - this is the URL direction
  - `@page "/test"` will direct from "website.com/test"
- Can use sub directories

# Page Code Support ==================================================

- Public variables need an `[Inject]`
```
[Inject]
public int num = 0;
```

### Inherit from separate CS file

- Create CS file
  - Add `using Microsoft.AspNetCore.Components`
  - Add the interface: `public class Name : ComponentBase`
  - Ex: `public class CounterBase : ComponentBase`
  - Make sure variables are protected, not private
- Add the Inheritance to the .razor page
  - `@inherits Name`
  - Ex: `@inherits CounterBase`

### Partial Class

- Alternative method using partial class
- Create a `.cs` file with the same name as the `.razor` file
- Put "partial" in the class declaration in the `.cs` file
  - `public partial class ClassName`

# Razor Syntax ==================================================

- Razor escape character: `@`
  - Ex: `<p>@@Twitter Handle</p>`
- Use parenthesis for code injection with spaces
  - Ex: `@(var1 + var2)`
- Use curly braces for multiline code
  - @{}


### Render HTML

- Render in Blazor:
  - `@((MarkupString)"<h1>Content</h1>")`
- Render in Razor:
  - `@html.Raw()

