
# Project Creation

- Create Solution
- Add:
  - Create Blazor Server App
  - Create Class Library
- Add Project Reference
  - BlazorApp needs a reference to the Class Library
  - In Visual Studio:
    - Right Click "Dependencies" under Blazor Server Project
    - Add Project Reference
    - Check box next to Class Library

# Database Creation

- Add SQL Server Project
- Create Tables
- Publish Database
  - Right Click Project > Publish
  - Creates publish file that can be save

### Get Connection String

- Locate Database in the SQL Server Object Explorer
- Right Click Database > Properties
- Scroll to "Connection String", copy
- Add to Blazor `appsettings.json`
```
"ConnectionStrings": {
  "ConnectionName" : "ConnectionString"
}
```

# Class Library

- 



