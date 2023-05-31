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
