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

### Shorthand

- Can write a shorter version that doesn't need the `php` or the `echo`
- Original: `<?php echo "<p>Let's insert some text into our HTML using PHP!</p>";?>`
- Shorthand: `<?="<p>Let's insert some text into our HTML using PHP!</p>";?>`

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

### Numbers

- Exponents: **
  - $4^{2}$ $\rArr$  `4 ** 2`
- Mod: %
  - `echo 7 % 3` prints 1
  
# Functions
  
- Basic Format:
```
function myFunction() {
  content; 
}
```
- Call Function: `myFunction();`
- Assigning a function to a variable also calls the function
- Parameters:
  - `function myFunction($parameter)`
  - `function myFunction($parameter1, $parameter2)`
- Parameter Default values:
  - `function myFunction($name = "Joe")`
- Reassign variable values with function:
  - Variables can have their value changed after being passed to a function
  - Example:
```
function addXPermanently (&$param) {
  $param = $param . "X";
  echo $param;
};
$word = "Hello";
addXPermanently($word); // Prints: HelloX
echo $word; // Prints: HelloX
```

# Built-In Functions
  
### Variable types

- **Get Type**
   - Takes a variable as an argument, returns a string with the data type
  - `gettype($variable);`
- **Var Dump**
  - Takes a variable as an argument, prints details about the variable
  - `$name = "Aisle Nevertell";`
  - `var_dump($name); //Prints: string(15) "Aisle Nevertell"`

### Strings

- **String to Lowercase**
  - Makes all characters in string lowercase
  - `strtolower(string);`
- **String Reverse**
  - Reverses a string input
  - `strrev($variable);`
- **String Repeat**
  - Repeats a string N times
  - `str_repeat(string, n);`
 
### Substrings

- **Substring Search Count**
  - Searches a given string for how often a substring occurs
  - `substr_count(string_to_search, substring_to_search_for);`
- **Pad String with String**
  - Pads a given string with another string using N length
  - Options for Pad Type:
    - STR_PAD_RIGHT (default)
    - STR_PAD_LEFT
    - STR_PAD_BOTH
```
str_pad(
  base_string,
  length_to_pad,
  what_to_pad_with,
  pad_type
);
str_pad(
  "You did it!",
  29,
  "*~*",
  STR_PAD_BOTH
); // Prints *~**~**~*You did it!*~**~**~*
```

### Numbers

- **Round**
  - Rounds to the nearest integer
  - `round(num);`
- **Absolute Value**
  - Returns the absolute value of the input number
  - `abs(num);`
  - `abs(-10.99); // Returns 10.99`
- **Random Number**
  - Gets a random integer between given range
  - `rand(start_range, end_range);`
  
# Arrays

- Can be of mixed data types
- Created with :
  - `$myArray = array();`
  - `$myArray = [];
- Printing Arrays:
  - Can print the whole array with: `implode(spacer, array);`
  - Example: `implode(", ", $array);`
- Print Array content
  - Prints the content of an array and it's indexes
  - `print_r($array);`


