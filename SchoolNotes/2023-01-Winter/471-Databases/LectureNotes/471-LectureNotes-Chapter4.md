
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
