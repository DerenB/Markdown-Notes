
# Return Function from Function

```
def get_math_function(operation):
    def add(n1, n1):
        return n1 + n2
    def sub(n1, n2):
        return n1 - n2
    
    if operation == '+':
        return add
    elif operation == '-':
        return sub

add_function = get_math_function('+')
sub_function = get_math_function('-')
print( sub_function(4,6) )
```