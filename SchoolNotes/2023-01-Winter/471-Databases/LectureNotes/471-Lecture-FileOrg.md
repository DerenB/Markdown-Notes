# File Organization

- Index
  - Can create an index that's sorted by a different column

# Which Selection Example

### Options

- Heap
- Ordered
- Hash
- (1) : fast
- (2) : Average
- (3) slow

### Question 1

```
SELECT *
FROM Employee
WHERE ssn = 246839185;
```

(1) Hash
(2) Ordered
(3) Heap

### Question 2

```
SELECT *
FROM Employee
WHERE salary > 30000;
```
- If the ordering field is not ordered by the search, heap is as fast as ordered 
(1) Heap / Ordered / Hash
(2)
(3)

### Question 3

```
INSERT INTO Employee Values ();
```
(1) Heap
(2) Hash
(3) Ordered

### Question 4

```
DELETE
FROM Employee
WHERE ssn = 123;
```
(1) Hash
(2) Ordered
(3) Heap

### Question 5

```
DELETE
FROM Employee
WHERE salary > 30000;
```
(1) Heap / Ordered / Hash
(2)
(3)

### Question 6

```
UPDATE Employee
SET dno = 5
WHERE SSN = 12;
```
(1) Hash
(2) Ordered
(3) Heap

### Question 7

```
UPDATE Employee
SET salary = salary * 1.10 (select first)
WHERE salary > 30000;
```

