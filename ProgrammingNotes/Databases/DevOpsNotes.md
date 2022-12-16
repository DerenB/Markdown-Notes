# Database DevOps Notes

# Table of Contents


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Database DevOps Notes](#database-devops-notes)
- [Table of Contents](#table-of-contents)
- [Tools](#tools)
- [Create Project](#create-project)

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



