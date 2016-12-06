#!/usr/bin/env node

var jsdom = require('jsdom');
var fs = require('fs-extra');

var noop = function() {};

// TODO: Check for ./buil/index.html...
jsdom.env('./build/index.html', function (err, window) {
  // Build base.html base jinja template

  // Build the jinja head
  var $head = window.document.head;
  var $title = $head.getElementsByTagName('title')[0];
  $title.innerHTML = '{% block title %}{% endblock %}';
  $head.innerHTML = $head.innerHTML + '{% block head %}' + `
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@inmagiklabs" />
  <meta name="twitter:title" content="Daily Clouds by INMAGIK" />
  <meta name="twitter:description" content="#dailyclouds: #news from top #italian newspapers in a #wordcloud by @inmagiklabs" />
  <meta name="twitter:image" content="https://dailyclouds.inmagik.com/inmagik.png" />
  <meta property="og:url" content="https://dailyclouds.inmagik.com" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="DailyClouds by INMAGIK" />
  <meta property="og:description" content="Daily Clouds: Le notizie di oggi dei principali giornali italiani in una #wordcloud" />
  <meta property="og:image" content="https://dailyclouds.inmagik.com/inmagik.png" />


  ` +'{% endblock %}';

  // Build the jinja body
  var $body = window.document.body;
  var $root = window.document.getElementById('root');
  var $scripts = $body.getElementsByTagName('script');

  var rawScripts = Array.prototype.slice.call($scripts).reduce(function (raw, $s) {
    return raw + $s.outerHTML;
  }, '');
  $body.innerHTML = '{% block root %}' + $root.outerHTML + '{% endblock %}'
                  + '{% block scripts %}' + rawScripts + '{% endblock %}';

  // All document as string
  var rawHtml = jsdom.serializeDocument(window.document);

  // Write base html
  fs.writeFile('./server/templates/base.html', rawHtml);

  // Copy static
  fs.emptyDirSync('./server/static');
  fs.copySync('./build/static', './server/static');

  // Copy favicon and manifest
  fs.copySync('./build/favicon.ico', './server/favicon.ico');
  fs.copySync('./build/asset-manifest.json', './server/asset-manifest.json');
});
