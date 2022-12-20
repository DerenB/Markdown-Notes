# Database DevOps Notes

# Table of Contents


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Database DevOps Notes](#database-devops-notes)
- [Table of Contents](#table-of-contents)
- [Tools](#tools)
- [Create Project](#create-project)
- [Create Database Tables, Views, Stored Procedures](#create-database-tables-views-stored-procedures)
- [Create Foreign Keys](#create-foreign-keys)
- [Publish Database](#publish-database)

<!-- /code_chunk_output -->

# Tools

- Visual Studio, Community Edition
- Azure DevOps
  - Azure Repos
  - Azure Pipelines - sets up CI/CD process

# Create Project

- Project Type: **SQL Server Database Project**
- Sample Structure
  - Add folders at root
    - DBO
      - named after the schema, default is "dbo"
    - PublishProfiles
      - Something used to publish database locally
  - Add folders within dbo folder
    - Views
    - StoredProcedures
    - Tables
    - Folder structures only for human readability, not database structure
  - Add SQL Server Object Explorer Tab
    - View $\rArr$ SQL Server Object Explorer

# Create Database Tables, Views, Stored Procedures

- Add a **Table**:
  1) Right Click Folder where table should be saved
  2) Add > Table
  3) SQL Server > Tables and Views > Table (should default to this selection)
  4) Add
- T-SQL syntax:
  - Add columns using T-SQL 
  - [ColumnName] variableType properties,
  - `[Id] INT NOT NULL PRIMARY KEY IDENTITY,`
  - `[FirstName] NVARCHAR(50) NOT NULL,`
- Add a **View**:
  1) Right Click Folder where View should be saved
  2) Add > View
- Add a **Stored Procedure**:
  1) Right Click Folder where table should be saved
  2) Add > Stored Procedure

# Create Foreign Keys

- Create Key using interface:
  - Open Table
  - Design Tab > Foreign Keys > Right Click > Add New Foreign Key
  - Set Foreign Key Name
- Edit Key values using T-SQL:
  - Syntax:
  - `CONSTRAINT [ForeignKeyName] FOREIGN KEY (CurrentTableColumnName) REFERENCES ForeignTable(ForeignTableColumnName)`
  - Example:
  - `CONSTRAINT [FK_LocationVisit_Location] FOREIGN KEY (LocationId) REFERENCES [Location](Id)`
    - FK_LocationVisit_Location - key name
    - Goes into the "LocationId" column of the current table
    - Looks for the "Location" table
    - Looks for the "Id" column in the "Location" table

# Publish Database

- Only used for local Database testing, not production db
- Public Script: the script that will run to create database forms
- How to Publish:
  1) Right Click database in Solution Explorer
  2) Public..
  3) Create connection string
     1) Click Target database connection: > Edit..
     2) Browse > Local > Select database location
  4) Save with "Save Profile As.."
     1) Saves a public script
     2) Can be re-used without having to keep setting up settings
     3) <u>**Don't**</u> add this file to source control






