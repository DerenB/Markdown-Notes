
# 471 Chapter 2 Online Lectures

# Table of Contents


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [471 Chapter 2 Online Lectures](#471-chapter-2-online-lectures)
- [Table of Contents](#table-of-contents)
- [Relational Model](#relational-model)
    - [Formal Definition of Relational Data Model](#formal-definition-of-relational-data-model)

<!-- /code_chunk_output -->

# Relational Model

- Relation Database - a collection of tables
- Domain - a set of values of a certain data type
  - every field gets a value from it's domain
  - All the values within a domain are supposed to be atomic
- Degree of Relation (Degree of Table)  - Number of attributes in a table

### Formal Definition of Relational Data Model

- Data model composed of a number of relations:
  - S = { $R_{1}$, $R_{2}$, ... , $R_{X}$ }
  - X number of relations
  - This is the database schema
  - Database S is composed of R1, R2, etc
- Each relation is composed of N number of attributes
  - R ($A_{1}$, $A_{2}$, ... , $A_{N}$)
  - Degree = N
- Each relation has a data set
  - r = {$t_{1}$, $t_{2}$, $t_{3}$, ... , $t_{m}$}
  - m is total number of tuples in that table
- Each tuple can be defined as a set of values corresponding to the domain of an attribute
  - t = <$v_{1}$, $v_{2}$, ... , $v_{n}$>
- Each value belongs to the domain of it's attribute
  - $v_{i}\in domain(A_{i})$
  - V1 is an element of domain attribute1



