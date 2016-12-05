from datetime import datetime
from flask import (
    Flask, render_template, redirect, url_for,
    request, send_from_directory
)
import locale
import requests

app = Flask(__name__)

# From cloud string as 20161128 to localized formatted data
def cloud_date(cloud, date_format = "{d.day} {d:%B} {d:%Y}", locale_code = "EN_us"):
    locale.setlocale(locale.LC_TIME, locale_code)
    return date_format.format(d=datetime.strptime(cloud, '%Y%m%d'))

@app.route("/")
def index():
    return render_template("app.html")

@app.route("/project")
def project():
    return render_template("app.html")

@app.route("/clouds/<cloud>")
def wordcloud(cloud):
    # TODO: Cache it!
    r = requests.get('https://api.github.com/repos/inmagik/newsclouds-stock/contents/' + cloud)

    if r.status_code == 404:
        # Invalid cloud
        return redirect(url_for("index"))
    elif r.status_code != 200:
        # Impossible but, in case of Github was down eheh
        return 'Unable to contact clouds API', 500

    # Build meta tags for socials
    url = request.url
    image = "http://inmagik.github.io/newsclouds-stock/%s/%s.image.png" % (cloud, cloud)
    date_it = cloud_date(cloud, locale_code="IT_it")
    date_en = cloud_date(cloud, locale_code="EN_us", date_format="{d:%B}, {d.day}, {d:%Y}")

    return render_template("cloud.html", image=image, date_en=date_en, date_it=date_it, url=url)

@app.route('/favicon.ico')
@app.route('/asset-manifest.json')
def static_from_root():
    return send_from_directory('', request.path[1:])

@app.errorhandler(404)
def not_found(e):
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)
