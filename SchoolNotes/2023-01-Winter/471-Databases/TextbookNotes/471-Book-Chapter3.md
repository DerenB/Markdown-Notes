
# 471 Book Notes Chapter 3

# Table of Contents


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [471 Book Notes Chapter 3](#471-book-notes-chapter-3)
- [Table of Contents](#table-of-contents)
- [Overview of SQL](#overview-of-sql)
- [SQL Data Definition](#sql-data-definition)
    - [Basic Types](#basic-types)
    - [Basic Schema Definition](#basic-schema-definition)

<!-- /code_chunk_output -->

# Overview of SQL

- DDL - Data-definition Language - SQL DDL provides commands for defining relation schemas, deleting relations, modifying relation schemas
- DML - Data-manipulation Language - SQL DML provides the ability to query information from the database and to insert tuples into, delete tuples from, and modify tuples in the database 
- Integrity - the SQL DDL includes commands for specifying integrity constraints that the data stored int he database must satisfy
- View Definition - the SQL DDL includes commands for defining views
- Transaction Control - SQL includes commands for specifying the beginning and ending transactions
- Embedded SQL + Dynamic SQL - embedded and dynamic SQL define how SQL statements can be embedded within general-purpose programming languages, such as C, C++, Java
- Authorization - the SQL DDL includes commands for specifying access rights to relations and views

# SQL Data Definition

- The set of relations in a database must be specified to the system by means of a DDL
- DDL allows for specification of a set of relations and info about relations
  - Schema for each relation
  - Types of values associated with each attribute
  - Integrity constraints
  - Set of indices to be maintained for each relation
  - Security and authorization information for each relation
  - Physical storage structure of each relation on disk

### Basic Types

- **char(n)** - fixed-length character string with user-specified length *n*. The full form, **character varying**, is equivalent.
  - Extra length is filled with space characters
  - White space added to end affects A=B comparison, almost always use varchar
- **varchar(n)** - a variable-length character string with user-specified maximum length *n*. The full form, **character varying**, is equivalent.
- **int** - an integer, same as **integer**
- **smallint** - a small integer, machine dependent subset of integer type
- **numeric(p,d)** - fixed point number with user specified precision. Number consists of **p** digits (plus a sign) and **d** of the **p** digits are to the right of the decimal point
  - Example: numeric(3,1) allows for 44.5, not 44.54
- **real, double precision** - floating-point and double-precision floating-point numbers with machine-dependent precision
- **float(n)** - floating-point number, with precision of at least *n* digits

### Basic Schema Definition

- Define a SQL relation by using the **create table** command
- General Format:
```
create table TableName
    AttributeName1 Type1,
    AttributeName2 Type2,
    (Integrity Constraints);
```
- Example:
```
create table department
    (dept_name varchar(20),
    building varchar(15),
    budget numeric(12,2),
    primary key (dept_name));
```
- Example that creates a relation *department* in the database
  - Has 3 attributes: dept_name, building, budget
  - Specifies the primary key
- **Integrity Constraints** options:
  - **Primary Key**
    - Required to be non-null
    - Required to be unique
    - Optional, best practice to always have a primary key
    - Format: `primary key (AttributeName)`
    - Example: `primary key (dept_name)`
  - **Foreign Key**
    - Format: `foreign key(AttributeName) references (TableName)`
    - Example: `foreign key(dept_name) references department`
  - **not null**
    - Format: `AttributeName Type not null`
    - Example: `name varchar(20) not null`




