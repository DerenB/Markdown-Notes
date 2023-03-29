# Chapter 6

![](../NoteImages/ER-CheatSheet.png)

# Entity-Relationship Model

# Homework Corrections

- N / 1 / M notes
- Single Line: Optional inclusion
- Double Line: HAS to be included
- Weak Entities: Always 1-N, full participation
  - No primary key, only a partial key
- Relationship Attribute
  - Applicable when an instance is related
  - Employee "works on" Project
    - Hours go on relationship because 
      - employee can have hours on multiple projects
      - multiple employee hours on a project
  - No keys on relationships
  - N-N relationships MUST have a table
- Dash line attribute: computed attribute
- Double Circle attribute: multi value attribute
- Ternary Relationship
  - Don't worry about 1/n/m, assume all 'n'
  - Can still do single/double line
- Mapping ER diagram
  - Weak Entities: mark partial key and parent primary key, as the primary key
  - Can map a relationship, using the primary key from the 2 entities
- Mapping Relationship diagram to ER diagram
  - Any table with a single primary key will be an entity
  - Always put the foreign key on the N side of the relationship
  - Anytime 1/N/M is unsure, always leave as N-N

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



