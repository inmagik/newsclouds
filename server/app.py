from flask import Flask, render_template, redirect, url_for
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/clouds/<cloud>")
def wordcloud(cloud):
    return render_template("cloud.html", cloud=cloud)

@app.errorhandler(404)
def not_found(e):
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)
