lcars
=====

This is a web-based LCARS framework using python, json, jquery, html, css 

LCARS is the "Library Computer Access/Retrieval System" which is used in Startrek universe since the next generation (http://en.wikipedia.org/wiki/LCARS).
This project is about giving each individual interested in the LCARS UI a framework that can be used in personal projects like for example a selfmade MP3 player using the RaspberryPi or a full blown home automation system.

The basic idea is to have a configuration-file, which allows to easily setup/change an LCARS-based web application.
This example shows a setup-example (as of 24.02.2013) which describes a login-screen:
screens = { 
  'login': {
    'name'       : 'login',
    'layout'     : 'Layout_001',
    'scheme'     : 'hometrek_style1.css',
    'timeline'   : 'true',
    'headline'   : 'BENKYS LCARS - LOGIN SCREEN',
    'hlwidth'    : '320px',
    'hlcolor'    : 'trk_hellgrau',
    'menu'       : 'Off',
    'onclick'    : 'alert("Off");',
    'defContent' : 'Login',
    'contentLogin' : {
      'name'       : 'loginCont',
      'layout'     : 'Login_Form'
    }    
  }
  ...

The most interesting thing is the attribute 'layout' because it is used to dynamically load other scripts that really build up the content. The layout given in the example simply creates a headline, a line showing the current time/date (including star-time ;o), a big content area and a menu on the bottom. The content area will be build up by the script named in the layout attribute of the 'contentLogin' section.
(All other attributes on a level are used by the actual layout-script.)

Setup:
======
To run LCARS framework you need:
1. A webserver (for example XAMPP / LAMPP)
2. Python
3. A Browser

The webserver needs to be setup in a way that it accepts *.py as CGI-scripts.
