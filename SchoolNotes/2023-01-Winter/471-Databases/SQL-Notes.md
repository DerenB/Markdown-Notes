
# SQL Notes

# Tables

### Create Table

```
CREATE TABLE tableName (
    attribute1 variableType NOT NULL,
    primary key (attribute1, attribute2),
    unique(attribute),
    foreign key (localAttribute) references otherTable (otherTablePrimaryKey)
);
```

### Delete Table

```
DROP TABLE tableName
```

### Update Table

- only updates the schema
- Add or drop attributes
```
ALTER TABLE tableName
    ADD attribute variableType;
```

# Modify Data

### Insert Value

- Constraints will be enforced, primary key, null, etc
```
INSERT INTO TableName
    VALUES (val1,val2)
```
```
INSERT INTO TableName(colName, colName)
    VALUES (value, value)
```

### Delete Tuple

```
DELETE FROM TableName
WHERE attribute='';
```

### Update

```
UPDATE TableName
SET attribute=''
WHERE attribute='';
```

# Queries

### Select

- General Format:
```
SELECT <attribute List>
FROM <Table List>
WHERE <conditions>;
```
- Example:
```
SELECT FirstName
FROM Employees
WHERE Salary > 75000;
```

# Set Operations

### Union

- Find courses that ran in Fall 2009 or in Spring 2010
```
(SELECT course_id FROM section
WHERE sem = "Fall" AND year = 2009)
UNION
(SELECT course_id FROM section
WHERE sem = "Spring" AND year = 2010);
```

### Intersect

- Find courses that ran in Fall 2009 and in Spring 2010
```
(SELECT course_id FROM section
WHERE sem = "Fall" AND year = 2009)
INTERSECT
(SELECT course_id FROM section
WHERE sem = "Spring" AND year = 2010);
```

### Except

- Find courses that ran in Fall 2009 but not in Spring 2010
```
(SELECT course_id FROM section
WHERE sem = "Fall" AND year = 2009)
EXCEPT
(SELECT course_id FROM section
WHERE sem = "Spring" AND year = 2010);
```

