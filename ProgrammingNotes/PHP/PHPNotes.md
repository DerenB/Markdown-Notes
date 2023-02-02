# PHP Notes

# Table of Contents

# Basics

- PHP can be used directly in-line within HTML document
- PHP line starts with: `<?php`
- PHP line ends with: `?>`
- Semicolon required at end of all PHP statements
- Example, before execution:
```
<p>This HTML will get delivered as is</p>
<?php echo "<p>But this code is interpreted by PHP and turned into HTML</p>";?>
```
- Example, after execution:
```
<p>This HTML will get delivered as is</p>
<p>But this code is interpreted by PHP and turned into HTML</p>
```

### PHP Execution

- Can also be executed from the terminal, output logged to terminal
- PHP File
  - .php extension
  - First line: `<?php` to indicate it's a php file
  - Closing tag is not required

# PHP Keywords / Functions

- Comments
  - Single Line: either `#` or `//`
  - Block: `/* */`
- echo
  - Used to output any text
  - Can include HTML tags like <li>

# Variables

### Create Variables

- Use a dollar sign, also known as a *sigil*
- Example: `$myVariable = "Hello";`
- Dollar Sign is used to call variable
  - `echo $myVariable;`

### Assignment Reference

- Setting a variable equal to another variable makes a copy of the value
  - `$second = $first;`
  - Changing first won't change second
- Can make an "alias" for a variable that points to the same spot in memory
  - Assigned by reference
  - `$second =& $first;`

### Strings

- Needs a newline escape, won't start a newline automatically
- Can use escape character \
- Concatenate with "."
- Concatenate and assign with `.=`
  - `$name = "First";`
  - `$name .= " Last";`

### String Interpolation

- Can insert variables into strings with ${}
```
$variable = "PHP";
echo "This is ${variable} string interpolation";
```





