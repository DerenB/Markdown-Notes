# Header

- Located in `Pages > _Host.cshtml`
- Has Head/Meta tags for every page
- Base URL
  - `<base href="~/"/>`
  - Sets the prefix for URLs
  - Don't include "~/" in any URL
- Imports CSS files

# Error Handling

### Non-existent page

- Error message located in App.razor

### Unhandled, Throw Exception

- In production, details won't be shown to user
- Can avoid with a Try-Catch
- Can edit the error message in `_Host.cshtml`
  - In the DIV with id "blazor-error-ui"
  - Gets shown any time Blazor has an unhandled exception

# Static Files

- Saved in the `wwwroot` directory

### CSS

- "bootstrap.min.css" and "site.css" are the base files
- They're imported in Pages > `_Host.cshtml`

# Logging 

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

# Pages



