
# Net Ninja PHP Tutorials

# Random

- PHP - Hypertext PreProcessor
- Server-side scripting language

# Installs

### XAMPP

- Launch XAMPP Control Panel
- Start/Stop services
- Apache Service:
  - Runs from Install-Drive:/XAMPP/htdocs
  - Through the specified directory > index file

# Get & Post

- Both can be used to send data to the server
- GET sends the data in the URL
- POST sends the data in the request header (hidden)
- Get Example:
```
if(isset($_GET['submit'])) {
  echo $_GET['email'];
  echo $_GET['title'];
  echo $_GET['ingredients'];
}
```

# XSS Attacks

- Cross-Site Scripting Attacks
- JavaScript code is entered into the form, and executed on the server
- Surround submission variables with `htmlspecialchars`
- Converts the inputs into HTML entities
- POST Example:
```
if(isset($_POST['submit'])) {
  echo htmlspecialchars($_POST['email']);
  echo htmlspecialchars($_POST['title']);
  echo htmlspecialchars($_POST['ingredients']);
}
```

# Server Side Form Validation

- Check if something was submitted
- Convert to HTML characters (avoid XSS)
- Check if Empty
  - `if(empty($_POST['varName']))`

### E-Mail Validation

