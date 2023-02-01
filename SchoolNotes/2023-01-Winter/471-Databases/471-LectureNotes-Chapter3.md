
# Chapter 3 Lecture Notes

# Table of Contents

- [Chapter 3 Lecture Notes](#chapter-3-lecture-notes)
- [Table of Contents](#table-of-contents)
- [Domain Types in SQL](#domain-types-in-sql)
- [Create  table](#create--table)
- [Modify Table](#modify-table)
    - [Delete table](#delete-table)
    - [Update Table](#update-table)
    - [Insert Value](#insert-value)
    - [Delete Tuple](#delete-tuple)
    - [Update](#update)
- [Queries](#queries)
    - [Select](#select)
    - [Select, relational Algebra](#select-relational-algebra)


# Domain Types in SQL

- char(n) - fixed length character string, with user-specified length n
  - unused space is filled with spaces
- varchar(n) - variable length string, maximum length n
- int - integer 
- smallint - small integer
- numeric(p,d) - fixed point number, precision p digits, n digits to the right of decimal points
- real, double precision - floating point numbers
- float(n) - floating point number with n digits

# Create  table

```
CREATE TABLE tableName (
    attribute1 variableType NOT NULL,
    primary key (attribute1, attribute2),
    unique(attribute),
    foreign key (localAttribute) references otherTable (otherTablePrimaryKey)
);
```
- unique (candidate key)
- foreign key primary key not necessary

# Modify Table

### Delete table

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

### Select, relational Algebra

- Select compared to relational algebra:
  - SELECT: Project Operation $\Pi$
  - FROM: Join Operation $\bowtie$
  - WHERE: Select Operation $\sigma$
















