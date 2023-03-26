Deren Bozer
COSC-381 MW 11:00
Winter 2023

# CS50 - Flask

Question 1: A layout or plan that can be used to design, solve, or build software. A MVC is a type of design pattern that stands for Model-View-Controller.

Question 2:
def index()
def greet()

Question 3: Render_Template is a function that can look for the given file and return it's contents. It's used in the video like this: `return render_template("index.html")`

Question 4: https://flask.palletsprojects.com/en/2.2.x/api/

Question 5: The webpage will route to "/" by default. By changing the route parameter, the page will not load since "/" doesn't exist anymore. If you enter "/hello" in the URL, the page will load again.

Question 6: What he changed & how they connect:
- Index HTML Form Input name and placeholder - the name of the form input and the placeholder to be displayed
- The py app GET parameter - the HTTP parameter that is grabbed from the URL
- The py app parameter - the parameter that gets passed into the template
- Template HTML output variable - the parameter from the py app

Question 7:
```
@app.route("/", methods=["GET", "POST"]) 
def index():
    if request.method == "GET":
        return get_param(get_param)
    if request.method == "POST":
        return post_param(post_param)
```

Question 8: Jinja is used to create templates that flask can use to render HTML. It can be used to avoid retyping the same lines for every HTML file.

Question 9: The model part is the part that defines the form and what's on it

