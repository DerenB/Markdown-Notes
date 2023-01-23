
# Textbook - Chapter 1

# Table of Contents

- [Textbook - Chapter 1](#textbook---chapter-1)
- [Table of Contents](#table-of-contents)
- [Chapter Terms](#chapter-terms)
- [1.2 Purpose of Database System](#12-purpose-of-database-system)
- [1.3 View of Data](#13-view-of-data)
    - [Instances \& Schemas](#instances--schemas)
    - [Data Models](#data-models)

# Chapter Terms

- **Database** - the collection of data
- **Data Inconsistency** - various copies of the same data may no longer agree
- **Data Model** - a collection of conceptual tools for describing data, data relationships, data semantics, consistency constraints
- **DBMS** - Database Management System - collection of interrelated data and a set of programs to access those data
- **Instance** - the collection of information stored in the database at a particular moment, *instance* of the database
- **Physical Data Independence** - implementation of the simple structures at the logical level may involve complex physical-level structures, the user of the logical level does not need to be aware of the complexity
- **Schema** - overall design of the database. Changed infrequently, if at all
  - **Physical Schema** - describes the database design at the logical level
  - **Logical Schema** - describes the database design at the logical level
  - **Subschemas** - view level schemas, describe different views of the database

# 1.2 Purpose of Database System

- Disadvantages of keeping data in a file-processing system
  - Data redundancy
  - Data inconsistency
  - Difficulty in accessing data
  - Data isolation - data is scattered in various files
  - Integrity Problems 
  - Atomicity Problems
  - Concurrent-access anomalies
  - Security Problems

# 1.3 View of Data

- Data Abstraction
  - Physical Level
    - the lowest level of abstraction describes how the data are actually stored.
    - the physical level describes complex low-level data structures in detail
  - Logical Level
    - Describes what data are stored in the database
    - What relationships exist among those data
    - Describes the entire database in terms of a small number of relatively simple structures
    - Database admin must decide what info to keep in the database, use logical level abstraction
  - View Level
    - Highest level of abstraction
    - Describes only part of the entire database
    - Many users do not need all of this information, only need to access only a part of the database
```
type instructor = record
  ID: char(5);
  name: char(20);
  dept_name: char(20);
  salary: numeric(8,2);
end;
```
- Example
  - New record type called "instructor"
  - Has 4 fields
  - Each field has a name and type associated with it
  - Physical Level:
    - an instructor can be described as a block of consecutive storage locations
    - Compiler hides this level of detail from the programmers
  - Logical Level
    - Each record is described by a type definition
  - View Level
    - Users see a set of application programs that hide details of the data types

### Instances & Schemas

- Instance - the collection of information stored in the database at a particular moment, an instance of the database
- Schema - overall design of the database
  - Changed infrequently, if at all
- Example:
  - A schema corresponds to the variable declarations (along with associated type definitions) in a program
  - Each variable has a particular value at a given instant
  - The values of the variables in a program at a point in time correspond to an *instance* of a database schema
- **Physical Schema** - describes the database design at the logical level
- **Logical Schema** - describes the database design at the logical level
- **Subschemas** - view level schemas, describe different views of the database
- Logical Schema is the most important, in terms of its effect on application programs

### Data Models

- **Data Model** - a collection of conceptual tools for describing data, data relationships, data semantics, consistency constraints
- Provides a way to describe the design of a database at the physical, logical, and view levels




