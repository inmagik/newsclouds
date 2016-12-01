#!/usr/bin/env node

var jsdom = require('jsdom');
var ncp = require('ncp').ncp;
var fs = require('fs');

// TODO: Check for ./buil/index.html...
jsdom.env('./build/index.html', function (err, window) {
  // Build app.html base jinja template

  // Build the jinja head
  var $head = window.document.head;
  var $title = $head.getElementsByTagName('title')[0];
  $title.innerHTML = '{% block title %}{% endblock %}';
  $head.innerHTML = '{% block head %}' + $head.innerHTML + '{% endblock %}';

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
  var rawHtml = window.document.documentElement.outerHTML;

  // Write app html
  fs.writeFile('./server/templates/app.html', rawHtml);

  // Copy static
  ncp('./build/static', './server/static');
});
