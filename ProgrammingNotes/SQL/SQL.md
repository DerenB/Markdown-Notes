
# SQL Notes

Notes on using SQL.

# Learning Sources:

- [Codecademy](https://www.codecademy.com/learn/learn-sql)
- [IAmTimCorey](https://www.iamtimcorey.com/)

# Table of Contents

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [SQL Notes](#sql-notes)
- [Learning Sources:](#learning-sources)
- [Table of Contents](#table-of-contents)
- [Databases](#databases)
- [Accessing & Creating : Data & Tables](#accessing-creating-data-tables)
    - [Select data from a table](#select-data-from-a-table)
  - [Select specific data from a table](#select-specific-data-from-a-table)
    - [Create Table](#create-table)
    - [Add Table Column](#add-table-column)
    - [Insert Data into Table](#insert-data-into-table)
    - [Update Table Row Data](#update-table-row-data)
    - [Delete Row/Data from Table](#delete-rowdata-from-table)
    - [Data Constraints](#data-constraints)
- [Queries](#queries)
    - [Select Data with New Column Name](#select-data-with-new-column-name)
    - [Select only unique values](#select-only-unique-values)
    - [Conditional Data Selection](#conditional-data-selection)
    - [Similar Data Selection](#similar-data-selection)
    - [Pattern Data Selection](#pattern-data-selection)
    - [Data Range](#data-range)
    - [AND OR](#and-or)
    - [Sort Results](#sort-results)
    - [Limit Search Results](#limit-search-results)
    - [Case (if-else)](#case-if-else)
- [Aggregate Functions](#aggregate-functions)
    - [Count](#count)
    - [SUM](#sum)
    - [MIN / MAX](#min-max)
    - [Average](#average)
    - [Round](#round)
    - [Group By](#group-by)
- [Multiple Tables](#multiple-tables)
    - [Join](#join)
    - [Left Join](#left-join)
    - [Cross Join](#cross-join)
    - [Union](#union)
    - [With](#with)
- [Primary Keys](#primary-keys)

<!-- /code_chunk_output -->


---

# Databases



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

### Count

```
SELECT COUNT(*) FROM movies
WHERE price = 0;
```

### SUM

```
SELECT SUM(downloads) FROM movies;
```

### MIN / MAX

```
SELECT MAX(price) FROM movies;
```

### Average

```
SELECT AVG(price) FROM movies;
```

### Round

- Rounds the return column to the number of decimal places
- ROUND(dataToRound, numberOfDecimalPlaces)

```
SELECT name, ROUND(price, 2) FROM movies;
SELECT ROUND(AVG(price),2) FROM movies;
```

### Group By

- Groups similar return results
- Example returns the count for each price group where downloads are over 20,000
```
SELECT price, COUNT(*) FROM movies
WHERE downloads > 20000 
GROUP BY price
```

[Return to Top](#table-of-contents)
___

# Multiple Tables

- Joining: matching data between tables

### Join

- Won't join data that isn't in both tables
```
SELECT *
FROM orders
JOIN customers
    ON orders.customer_id = customers.customer_id;
```
- SELECT: 
  - selects all data from the joined tables
  - can specify columns
- FROM orders:
  - Specifies the first table to look in
- JOIN customers:
  - Specifies the second table to look in
- ON:
  - Which columns to match data with
```
SELECT *
FROM orders
JOIN subscriptions
  ON orders.subscription_id = subscriptions.subscription_id
WHERE subscriptions.description = 'Fashion Magazine';
```

### Left Join

- Will keep all of the rows from the first table regardless if there is a matching row in the second table
```
SELECT *
FROM table1
LEFT JOIN table2
    ON table1.c2 = table2.c2;
```

### Cross Join

- Combines all rows of one table with all rows of another table
```
SELECT shirts.shirt_color, pants.pants_color
FROM shirts
CROSS JOIN pants;
```

### Union

- Stacks two tables on top of each other
- Tables must have the same number of columns
- The columns must have the same data types in the same order as the first table
```
SELECT *
FROM table1
UNION
SELECT *
FROM table2;
```

### With

- Combines two tables, one table from a query result
```
WITH previous_query AS (
    SELECT customer_id,
        COUNT(subscription_id) AS 'subscriptions'
    FROM orders
    GROUP BY customer_id
)
SELECT customers.customer_name,
previous_query.subscriptions
FROM previous_query
JOIN customers
	ON customers.customer_id = previous_query.customer_id;
```

[Return to Top](#table-of-contents)
___

# Primary Keys

- None of the values can be NULL
- Each value must be unique
- Tables can only have 1 primary key column
- Foreign Key:
  - when the primary key for one table appears in a different table

[Return to Top](#table-of-contents)
___








