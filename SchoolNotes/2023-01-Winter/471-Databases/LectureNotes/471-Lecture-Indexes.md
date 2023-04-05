# Indexes - Chapter 10

- Can have as many indexes as you want
  - More indexes, more memory and overhead
- Sparse Index - index entry for multiple records
  - Uses a block pointer
- Dense Index - 1 index entry for every record
  - Uses a record pointer
- Advantage - will always be ordered
- Each index record will have a key and a pointer
- Multi-Level Index - can have multiple indexes
  - Keep going until the index is only 1 value
  - Index of an Index of an Index etc
  - Very good for reducing the number of blocks
  - Structure painful to maintain, lots of overhead
  
### B-Tree, B+ Tree

- Binary Search tree, nodes with pointers to other nodes
- Starts with a Pointer, then Key, then Pointer, etc
  - Ends with a pointer
  - $<P_{1},K_{1},P_{2},K_{2},P_{3},>$





