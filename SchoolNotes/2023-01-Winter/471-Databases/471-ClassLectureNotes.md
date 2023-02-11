# 01/18 Class Notes

### Database Terminology Concepts

Application Concepts - Database Concepts

1) Client **-** Northeast Airlines
2) DBMS **-** SQL Server
3) Database System **-** Flight ticket reservation system
4) Miniworld **-** All information related to airline tickets, schedules, passengers
5) Database **-** Reservation database
6) Tables **-** Flights or Passengers or Airports
7) Schema **-** Flight(FlightNo, Source, Destination)
8) Row **-** (NEA123, DTW, ORD, 10/04/2021)
9) Column **-** {Smith, Fields, Stone, Johnson}
10) Data **-** Sally or Fields or DTW or 12/06/2021
11) Data Type **-** Integer
12) Casual User **-** Passenger
13) Sophisticated User **-** DBA (Database Admin)
14) Query **-** What is the departure time for NEA123 on 10/04/21?

- Curly Braces {} - Set of data, order doesn't matter
- Parenthesis () - Order matters

# 02/01 Class Notes

- Schema - layout of the database tables
- Schema Diagram :
  - Option 1 - Text Description 
    - List name of table with attributes 
  - Option 2 - Draw Tables
    - Table name as header
    - List attributes beneath  
- <u>TODO</u> - Look up the difference between DROP, DELETE, TRUNCATE

### Relational Database Concepts

- Relational Database - collection of tables
- Relational Schema -  
- Relations - 
- Tuples - 
- Attributes - 
- Domain - 
- Degree - number of attributes in a relation
- Database State or Instance - dataset
- Integrity Constraints - restrictions on the data
- Superkey - 
- Candidate Key - 
- Primary Key - 
- Foreign Key - 
- Atomic - Indivisible values

# 02/08 Class Notes

- Having is a special clause only associated with Group By
- `FROM R,S ON R.x = S.y`
- Whenever there are multiple tables in the `FROM` clause, make sure there is a `JOIN` clause
- Don't separate the `WHERE` clause with commas
- DELETE vs DROP vs TRUNCATE
  - DDL - DROP
  - DML - DELETE, TRUNCATE
  - DELETE clears all data out of the table
  - DROP removes the table
  - TRUNCATE clears all data at once (without removing the table), delete clears data 1 at a time
  - TRUNCATE will reset the increment count, delete keeps the increment count

### Outer Join

- outer join for listing all items, even those without a result
- See all results even if NULL
- Example
  - List all employees by department, include employees that don't have a department




