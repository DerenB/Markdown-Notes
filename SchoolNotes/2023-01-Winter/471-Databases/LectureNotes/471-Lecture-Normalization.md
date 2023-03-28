# Normalization

# Normal Form

- 1st Normal Form
  - All attributes are dependent on the key
  - If you know the key value, you can find the value of any attribute
  - You should be able to get exactly 1 value
- 2nd Normal Form
  - All attributes depend on the <strong>whole</strong> key
  - Have to remove all partial dependencies to get to the 2nd Normal form
  - If it is not in 2nd Normal Form, it won't be in 3rd, 4th, etc
- 3rd Normal Form
  - Attributes are <strong>ONLY</strong> dependent on the key

### Example

- R (<u>A, B,</u> C, D, E, F, G)
- Also written as AB $\rarr$ ABCDEFG
- FDS:
  - A $\rarr$ CD (partial dependency)
  - B $\rarr$ E (partial dependency)
  - F $\rarr$ G (transitive dependency)
    - Not in 2nd NF because it has partial
    - Not in 3rd (because it's not in 2nd) but also has transitive dependency
- Put in 2nd Normal Form:
  - Remove partial dependencies
  - R1(<u>A,B,</u> F,G)
    - AB $\rarr$ ABFG
    - F $\rarr$ G
  - R2(<u>A,</u> C,D)
    - A $\rarr$ CD
  - R3(<u>B</u>, E)
    - B $\rarr$ E
- Put in 3rd Normal Form:
  - R11(<u>A,B</u> F)

### Example 2

- R(A, <u>B, C, D,</u> E, F, G)
- A $\rarr$ E   - transitive
- C $\rarr$ F   - partial
- D $\rarr$ G   - partial
- F $\rarr$ G   - transitive
- 2NF Normalization
  - R1 
    - (A, <u>B,C,D,</u> E)
    - A $\rarr$ E
  - R2
    - (<u>C,</u> F)
    - (C, F, D, G)
  - R3
    - (<u>D,</u> G)

### Example 3

- PSL(<u>Part#</u>, Desc, <u>VendorName</u>, Address, UnitCost)
- Part# $\rarr$ Desc
- VName $\rarr$ Address
- PSL1 (<u>Part#, Vname</u>, UnitCost)
- PSL2 (<u>Part#,</u> Desc)
- PSL3 (<u>VName</u>, Address)

### Example 4

- R(A, B, C, D, E, F, G, H)
- CG $\rarr$ ABCDEFGH
- DE $\rarr$ F
- G $\rarr$ H
- A $\rarr$ B
- In UNF Form
- 1NF
  - Set a key based on the dependencies
  - R(A, B, <u>C,</u> D, E, F, <u>G,</u> H)
- 2NF
  - R1(A,B,C,D,E,F,<u>G</u>)
  - R2(<u>G,</u>H)
- 3NF
  - R11(A,<u>C,</u>D,E,<u>G</u>)
  - R12(<u>D,E,</u>F)
  - R13(<u>A,</u>B)
  - R2(G,H)





