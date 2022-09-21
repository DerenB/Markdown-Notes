
# SQL Notes

Notes on using SQL.

# Learning Sources:

- Codecademy
- IAmTimCorey

# Table of Contents

- Accessing & Creating : Data & Tables

# Accessing & Creating : Data & Tables

### Select data from a table

```
SELECT * FROM tableName;
```
- Returns all data from the given table name

## Select specific data from a table

```
SELECT columnName FROM tableName;
SELECT name FROM celebs;
```

### Create Table

```
CREATE TABLE tableName (
   columnName1 TYPE,
   columnName2 TYPE,
   columnNameN TYPE 
);
```
- Type is what variable type for the column data
- Examples include INTEGER, TEXT


### Insert Data into Table

```
INSERT INTO tableName (
    columnName1, columnName2, columnName3
) VALUES (
    value1, value2, value3
);

INSERT INTO celebs (
    id, name, age
) VALUES (
    1, 'Tom Brady', 45
);
```


