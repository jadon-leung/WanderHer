from flask import Flask, render_template, request, jsonify, redirect, url_for

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
if __name__ == "__main__":
    #app.run(host = "0.0.0.0", port = 5500, debug = True)
    app.run(debug = True)
