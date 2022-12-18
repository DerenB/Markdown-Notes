# Database DevOps Notes

# Table of Contents


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Database DevOps Notes](#database-devops-notes)
- [Table of Contents](#table-of-contents)
- [Tools](#tools)
- [Create Project](#create-project)
- [Create Database Tables](#create-database-tables)
- [Create Foreign Keys](#create-foreign-keys)

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

# Create Database Tables

- Add a table:
  1) Right Click Folder where table should be saved
  2) Add > Table
  3) SQL Server > Tables and Views > Table (should default to this selection)
  4) Add
- T-SQL syntax:
  - Add columns using T-SQL 
  - [ColumnName] variableType properties,
  - `[Id] INT NOT NULL PRIMARY KEY IDENTITY,`
  - `[FirstName] NVARCHAR(50) NOT NULL,`

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


