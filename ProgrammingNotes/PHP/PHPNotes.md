# PHP Notes

# Table of Contents

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [PHP Notes](#-php-notes-)
- [Table of Contents](#-table-of-contents-)
- [Basics](#-basics-)
    - [PHP Execution](#-php-execution-)
- [PHP Keywords / Functions](#-php-keywords--functions-)
- [Variables](#-variables-)
    - [Strings](#-strings-)

<!-- /code_chunk_output -->


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

### Strings

- Needs a newline escape, won't start a newline automatically
- Can use escape character \
- Concatenate with "."



