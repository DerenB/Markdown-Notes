- Personal notes on Layout

# New Project Checklist =============================================

- Create a `Shared` directory
- Add a Blazor Component called `MainLayout.razor`
- Add the imports to `_Imports.razor`
  - `@using BlazorApp`
  - `@using BlazorApp.Shared`
- Make sure MainLayout is being called
  - Called in `App.razor`
  - Default line: `<RouteView RouteData="@routeData" DefaultLayout="@typeof(MainLayout)"/>`
- Need to import Bootstrap
  - Default Blazor project includes the files in wwwroot > css
  - Can add import strings to `_Host.cshtml`

# MainLayout Necessary Items =============================================

- Need to inherit the layout component
  - `@inherits LayoutComponentBase`
- Needs the body tag for where to render the body
  - `@Body`

# CSS Isolation =============================================

- Need to add a line to `_Host.cshtml` to have CSS isolation
  - Add: `<link href="ProjectName.styles.css" rel="stylesheet" />`
  - Change "ProjectName" to what you have