
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



