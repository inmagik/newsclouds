from flask import Flask, render_template, redirect, url_for, request, send_from_directory
app = Flask(__name__)

@app.route("/")
@app.route("/project")
def index():
    return render_template("index.html")

@app.route("/clouds/<cloud>")
def wordcloud(cloud):
    return render_template("cloud.html", cloud=cloud)

@app.route('/favicon.ico')
@app.route('/asset-manifest.json')
def static_from_root():
    return send_from_directory('', request.path[1:])

@app.errorhandler(404)
def not_found(e):
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run()
