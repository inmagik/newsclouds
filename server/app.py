from datetime import datetime
from flask import (
    Flask, render_template, redirect, url_for,
    request, send_from_directory
)
import arrow
import requests

app = Flask(__name__)


def is_valid_cloud(cloud):
    """
    Check if given cloud is valid
    """
    # TODO: Cache it!
    # r = requests.get('https://api.github.com/repos/inmagik/newsclouds-stock/contents/' + cloud)
    # return r.status_code == 200
    return True


@app.route("/")
def index():
    return render_template("app.html")

@app.route("/project")
def project():
    return render_template("app.html")

@app.route("/clouds/<cloud>")
def wordcloud(cloud):
    try:
        arw = arrow.get(cloud, 'YYYYMMDD')
    except:
        # Invalid format so invalid cloud
        return redirect(url_for("index"))

    if (not is_valid_cloud(cloud)):
        # Invalid cloud
        return redirect(url_for("index"))

    # Build meta tags for socials
    url = request.url
    image = "http://inmagik.github.io/newsclouds-stock/%s/%s.image.png" % (cloud, cloud)
    date_en = arw.format('MMMM, D, YYYY', locale='en')
    date_it = ' '.join([c.capitalize() for c in arw.format('D MMMM YYYY', locale='it').split(' ')])

    return render_template("cloud.html", image=image, date_en=date_en, date_it=date_it, url=url)

@app.route('/favicon.ico')
@app.route('/inmagik.png')
@app.route('/asset-manifest.json')
def static_from_root():
    return send_from_directory('', request.path[1:])

@app.errorhandler(404)
def not_found(e):
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=False)
