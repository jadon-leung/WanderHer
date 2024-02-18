from flask import Flask, render_template, request, jsonify, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('home.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/match')
def match():
    return render_template('match.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

def hello_world():
    return "<p>Hello, World!</p>"
if __name__ == "__main__":
    #app.run(host = "0.0.0.0", port = 5500, debug = True)
    app.run(debug = True)
