
# SQL Notes

Notes on using SQL.

# Learning Sources:

- [Codecademy](https://www.codecademy.com/learn/learn-sql)
- [IAmTimCorey](https://www.iamtimcorey.com/)

# Table of Contents

- [Accessing & Creating : Data & Tables](#accessing--creating--data--tables)
- [Queries](#queries)
- [Aggregate Functions](#aggregate-functions)

---

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

### Add Table Column

```
ALTER TABLE tableName
ADD COLUMN colName TYPE;

ALTER TABLE celebs
ADD COLUMN twitter_handle TEXT;
```

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

### Update Table Row Data

```
UPDATE tableName
SET columnName = data
WHERE identifyingColumn = identifier;

UPDATE celebs
SET twitter_handle = '@tombrady'
WHERE id = 4;
```

### Delete Row/Data from Table

```
DELETE FROM tableName
WHERE identifyingColumn IS NULL;
```

### Data Constraints

- Add information about how a column can be used
- Examples:
  - Primary Key: column to be used to uniquely identify rows. Cannot repeat values, only 1 primary key
  - Unique: Cannot repeat data, multiple columns
  - Not Null: Row value cannot be null
  - Default: given value if none is given
```
CREATE TABLE celebs (
    id INTEGER PRIMARY KEY,
    name TEXT UNIQUE,
    date_of_birth TEXT NOT NULL,
    date_of_death TEXT DEFAULT 'Not Applicable'
);
```

[Return to Top](#table-of-contents)
___

# Queries

### Select Data with New Column Name

- 'AS' Changes the name of the returned column without changing the database
```
SELECT oldColumnName AS newColumnName
FROM tableName;

SELECT imdb_rating AS 'Movie Rating
FROM movies;
```

### Select only unique values

- 'DISTINCT' Filters out duplicate values in column
```
SELECT DISTINCT columnName FROM tableName;
```

### Conditional Data Selection

- 'WHERE' Adds search rules for data. Examples:
  - = 
  - !=
  - \>
  - <
  - \>=
  - <=
```
SELECT * FROM movies
WHERE rating < 5;
```

### Similar Data Selection

- 'LIKE' Used for searching for data with similar patterns
- '-' dash used as a wildcard character
- Example searches for any word with any character in the middle
```
SELECT * FROM movies
WHERE name LIKE 'Se_en';
```

### Pattern Data Selection

- '%' is a wildcard character that matches zero or more missing letters in the pattern
- Examples:
  - 'A%' matches all items with names that begin with 'A'
  - %a matches all items that end with 'a'
  - %man% matches all items that contain 'man'
```
SELECT * FROM movies
WHERE name LIKE '%man%';
```

### Data Range

- 'BETWEEN' is used to create a search range
```
SELECT * FROM movies
WHERE year BETWEEN 1990 AND 1999;
```

### AND OR

```
SELECT * FROM movies
WHERE year BETWEEN 1990 AND 1999
AND genre = 'romance';

SELECT * FROM movies
WHERE year BETWEEN 1990 AND 1999
OR genre = 'romance';
```

### Sort Results

```
SELECT * FROM movies
ORDER BY name;

SELECT * FROM movies
ORDER BY year DESC;
```

### Limit Search Results

- Limit the number of returned results
```
SELECT * FROM movies LIMIT 10;
```

### Case (if-else)

```
SELECT NAME,
    CASE
        WHEN rating > 8 THEN 'Fantastic'
        WHEN rating > 6 THEN 'Average'
        ELSE 'Avoid'
    END AS 'Review'
FROM movies;
```

[Return to Top](#table-of-contents)
___

# Aggregate Functions

- Aggregates: calculations performed on multiple rows of a table



[Return to Top](#table-of-contents)
___

