# Dependency Injection

# What is it

- Dependency: when a class depends on other classes
  - Ex: Class A has references to class B in the code. Class A is dependent on class B
- Process
  - Classes ask DI system what classes they need
  - DI uses Interfaces like a contract per class 
  - Declares the dependencies at the start of the class

# Why is it important

- Loose coupling of resources
- Easier unit testing
- Modular upgrades possible
- Dependencies are obvious 
- Promotes good design patterns 

# Scope

### Transient

- New instance every time it is requested 
- Can inject the same class multiple times on the same page, each will be a different instance

### Singleton

- Opposite of Transient
- Creates only 1 instance for the entire App, for the entire life of the instance
- Opening the link in a tab new or browser will have the same value
- Memory will never be released

### Scoped

- In between Transient and Singleton
- Per scope, it adds a single instance
- Every time a server request is made, a scope is made
  - Everywhere that scope occurs, it will be the same value
- Safe way to share information across a website without sharing across domains

# User Interface 

### VSCode Interface Creation

1) Place cursor over class
2) Hit `CTRL + .`
3) Click "Extract Interface"
4) Place cursor over new interface class
5) Hit `CTRL + .`
6) Click "Move 'Interface' to a new file

### Add Interface to Dependency Injection

- Modify the `Program.cs` file
- Change the services line
  - Code: `builder.Services.AddScoped<Interface,BaseClass>();`
  - Ex: `builder.Services.AddScoped<IDemo,Demo>();`
  - Whenever an "IDemo" is asked for, return a "Demo"

### Why use an interface

- Only have to replace the base class in one location
- Replaced in the Program.cs file
- Example:
  - Current Line: `builder.Services.AddScoped<IDemo,Demo>();`
  - New Line: `builder.Services.AddScoped<IDemo,UtcDemo>();`
  - The same interface returns the new class of `UtcDemo`

# Register Group of Services

- Can move a group of services to a separate class file
- 1 - Create a class at the root
- Class with usings:
```
using BlazorServerDemo.Data;
using Microsoft.Extensions.DependencyInjection;

namespace BlazorServerDemo {
    public static class DemoDISetup {
        public static IServiceCollection AddDemoInfo(this IServiceCollection services) {
            services.AddTransient<IDemo,Demo>();
            services.AddTransient<ProcessDemo>();
            return services;
        }
    }
}
```
- In `Program.cs`, add the class to the builder services
- `builder.Services.AddDemoInfo();`
