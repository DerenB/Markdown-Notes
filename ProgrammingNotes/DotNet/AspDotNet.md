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
- [View Page](#view-page)
    - [Structure](#structure)
    - [Spaces & Codeblocks](#spaces-codeblocks)
    - [Conditionals](#conditionals)
- [Page Model](#page-model)
- [Page Model Methods](#page-model-methods)
    - [OnGet](#onget)

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

# View Page

### Structure

- Requires "@page" as the first line. Indicates it as a Razor page
- Add "@model ModelPage" 2nd to connect to the model page
- Prepend C# code with "@"
```
@pages
@model DateModel
<h1>@DateTime.Now.ToShortDateString()</h1>
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
- - Add "@model ModelPage" in the view page to connect to the model page

[Back to Top](#table-of-contents)

# Page Model Methods

### OnGet

- Handler Method
  - Methods that are executed as a result of a request
- Get request invokes the OnGet method

[Back to Top](#table-of-contents)















