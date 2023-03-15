# Chapter 6

![](../NoteImages/ER-CheatSheet.png)

# Entity-Relationship Model

### Entities

- No data types
- Center square with Entity name, bubbles connected with attributes

### Relationships

- Binary - relationship between 2 entities
- Ternary - relationship between 3 entities
- Single Line - Partial participation
- Double Line - Entity HAS to be included in a relationship (total participation)
- Recursive Relationships
  - require role names

### Cardinality Constraints

- 1-to-1: arrow on both sides
- 1 employee can only work in 1 department, multiple employees per department
  - Employee -> Department

### Attributes

- Use brackets {} for multi-value attributes
- Composite Attributes
  - Attributes with multiple sub attributes
  - Use tabs beneath for sub attributes
- Derived Attributes
  - Use ()
- Underline attribute that is primary key

### Constraints

- Disjoint / Overlap
  - Disjoint Example: Employee has Salary and Hourly subclasses. Can not belong to both
  - Overlap Example: Employee has Staff and Instructor subclasses. A person can be both
- Total vs. Partial Completeness Constraint
  - Total: every superclass exists in at least one subclass
  - Partial: a superclass can be in no subclass



