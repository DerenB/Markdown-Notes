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

# MainLayout Necessary Items

- Need to inherit the layout component
  - `@inherits LayoutComponentBase`
- Needs the body tag for where to render the body
  - `@Body`