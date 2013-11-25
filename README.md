RaphaelJS.group
===============

A plugin which brings SVG group elements into Raphael JS framework.

<h4>Short documentation</h4>

First take a look at the source code of the 'index.html' file for adding the script in the page.

Initiating a group:

<code>
  var group = new r.group('container',array);

</code>
  /*
    where:
    'r' is the Raphael JS canvas,
    'container' is the HTML element ID where the SVG was created with Raphael JS
    and 'array' is an array of Raphael JS objects
  */