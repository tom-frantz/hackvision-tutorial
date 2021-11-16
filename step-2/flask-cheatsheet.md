# Flask Cheatsheet
## Getting started
To get started, make sure to install [Python](https://www.python.org/downloads/) from this link

And install pip - The python package manager

```bash 
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py

```

Once you've installed Python, make sure to install flask and any other dependices you need. 
For now we only need Flask but for the next step we will need flask-cors as well

```
pip -r requirements.txt
```

## Running Flask
Once you've installed Flask, it's very easy to run, simply create a file called `app.py` and insert the following code
```python
from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

```

after that, run the following
```
flask run
```

To run in debug mode, go [here](https://flask.palletsprojects.com/en/2.0.x/quickstart/#debug-mode) on how to set it up.

## Accessing flask
In your web browser, navigate to [http://localhost:5000](http://localhost:5000) to see the results!

## Flask and REST
### Flask Explained
First, you must import flask (`from flask import Flask`). This will bring in the web server and any other dependencies for you.

Creating a Flask app is very easy, with just one line (`app = Flask(__name__)`)

### Endpoints
Flask REST endpoints can be created via decorators in python, as follows 
```python
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```

These are composed of a few parts
- `app.route` specifies that the following function will be for a REST endpoint
- `"/"` indicates what endpoint the function will be at. For example, if you set it to be `"/hello"`, you would have to navigate to [http://localhost:5000/hello](http://localhost:5000/hello) to get the response
- `return "<p>Hello, World!</p>"` is the response that would be returned from the flask server once you go to the above endpoint.

[You can find more about flask here](https://flask.palletsprojects.com/en/2.0.x/quickstart)
