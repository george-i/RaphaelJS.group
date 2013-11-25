RaphaelJS.group
===============

A plugin which brings SVG group elements into Raphael JS framework.

<h5>Short documentation</h5>

First take a look at the source code of the 'index.html' file for adding the script in the page.

Initiating a group:

<code>
  var group = new r.group('container',array);

  
  
</code>
Where:
    'r' is the Raphael JS canvas,
    'container' is the HTML element ID where the SVG was created with Raphael JS
    and 'array' is an array of Raphael JS objects

	
Available methods

 * group.remove
 * group.translate
 * group.rotate
 * group.scale
 * group.push
 * group.getAttr
 * group.toFront
 * group.clipPath
 * group.animate

 
Copyright 2013 George I.

Licensed under the MIT License

