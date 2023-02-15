
# Chapter 4 Lectures

# Set Operations

- Union, Intersect, Except (minus)
  - Each operation automatically eliminates
  - Use between 2 select statements
```
SELECT FROM WHERE // table 1
UNION | INTERSECT | EXCEPT
SELECT FROM WHERE // table 2 ;
```
- The two tables must meet the following criteria
  - Same number of attributes
  - Same domains
  - Attributes of resulting table come from table 1
  - Referred to as "**Union Compatible Properties**"

### Examples

- Find courses that ran in Fall 2009 or in Spring 2010
```
(SELECT course_id FROM section
WHERE sem = "Fall" AND year = 2009)
UNION
(SELECT course_id FROM section
WHERE sem = "Spring" AND year = 2010);
```

- Find courses that ran in Fall 2009 and in Spring 2010
```
(SELECT course_id FROM section
WHERE sem = "Fall" AND year = 2009)
INTERSECT
(SELECT course_id FROM section
WHERE sem = "Spring" AND year = 2010);
```

- Find courses that ran in Fall 2009 but not in Spring 2010
```
(SELECT course_id FROM section
WHERE sem = "Fall" AND year = 2009)
EXCEPT
(SELECT course_id FROM section
WHERE sem = "Spring" AND year = 2010);
```

# Handling Nulls

- If an arithmetic operation is done on a NULL value, the result will always be NULL
- Comparison on NULL values will always result in "Unknown" (not the same as NULL)
- Table for Comparison:
```
X         Y         AND     OR
TRUE      UNKNOWN   UK      TRUE
FALSE     UNKNOWN   FALSE   UK
UNKNOWN   UNKNOWN   UK      UK
```

- `IS NULL` or `IS NOT NULL` operators can be used to find null values

# Multiple Table Queries

- Specify every source table in the `FROM`

### Natural Join

# Group By

- Typically you include the Group-By attribute in the Selection clause
- Don't include attributes that aren't parting of the Grouping clause 
- Don't include attributes that creates a single result from an arithmetic function

# Sub-Query

- Option 1:
```
SELECT
FROM (select ...)
WHERE
```

- Option 2 (more common):
```
SELECT
FROM
WHERE (select ...)
```

# Views

- in some cases, it is not desirable for all users to see the entire logical model 
- Consider a person who needs to know an instructors name and department, but not salary
  - This person should see a relation described in SQL by:
    - `SELECT ID, name, dept_name`
    - `FROM instructor;`
- A view provides a mechanism to hide certain data from the view of certain users
- Any relation that is not of the conceptual model but is made visible to a user as a "virtual relation" is called a **view**

### View Creation

```
CREATE VIEW Dependent-Names AS (
  SELECT essn, dependent_name
  FROM dependent
);
```
- Not precomputed
- Not temporary table
- Should Not let the view be updated
  - Won't update the database, just the view
- Calling the view:
```
SELECT *
FROM Dependent-Names;
```

### Materialized View

- Used if a view is accessed frequently
- Used if fast response is necessary
```
CREATE MATERIALIZED VIEW Dependent-Names AS (
  SELECT essn, dependent_name
  FROM dependent
);
```

# Integrity Constraints

- Integrity constraints guard against accidental damage to the database, by ensuring that authorized changes to the database do not result in a lose of data consistency
- Examples:
  - Not Null
  - Primary Key
  - Unique
  - default
  - check (P), where P is a predicate
    - Ex: `CHECK (semester IN ('Fall','Winter','Spring','Summer'))`

### Referential Integrity

- Ensures that a value that appears in one relation for a given set of attributes, also appears for a certain set of attributes in another relation
- 

### Cascade Delete / Update

- Example:
```
CREATE TABLE course (
  ...
  dept_name varchar(20)
  FOREIGN KEY (dept_name) REFERENCES department
    on delete set default
    on update cascade
)
```

# SQL Data Types

- Date
  - date 'yyyy-m-dd'
- Create Data Type
  - construct in SQL creates user-defined type
- Example:
```
CREATE TYPE Dollars AS numeric(12,2) final
CREATE TABLE (
  dept_name varchar(20),
  building varchar(15),
  budget Dollars
);
```

# Indexes

- Faster way of access data in a table
- Mostly created for primary keys
```
CREATE INDEX Index_Name ON Table(column);
```

# Authorization

- Read, insert, update, delete














