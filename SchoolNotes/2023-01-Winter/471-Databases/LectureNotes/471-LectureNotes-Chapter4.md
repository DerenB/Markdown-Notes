
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




