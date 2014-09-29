Fig Wordpress Base With SVG, Webp and UnCSS
======
Based on Wadehammes Version @ wadehammes/base-foundation-wordpress
----
Base Foundation is a template framework based on the <a href="http://foundation.zurb.com">Foundation</a> framework from Zurb, which utilizes <a href="http://sass-lang.com">SASS</a>, and is meant to be a starting point for a website build. It utilizes <a href="http://gruntjs.com/">Grunt</a>, which handles javascript tasks such as CSS minification and prefixing, SASS compilation, and JS concatenation and uglifying, folder syncing, and more. Webp and SVG support has been added also UnCss that removes all unused CSS elements from the file. Includes optimised .htaccess file for your wordpress website.

####PRIOR TO FIRST USE:
You will need to make sure you have the following installed to your machine (via Terminal):

Install NPM first:
<a href="http://nodejs.org/download/">http://nodejs.org/download/</a>

Then Grunt:
<a href="http://gruntjs.com/getting-started">http://gruntjs.com/getting-started</a>

Then Bower:
<code>$ npm install -g bower</code>

After that, install some other dependencies:
<code>$ sudo gem install -g sass</code>


####AFTER ABOVE DEPENDENCIES ARE INSTALLED AND FOR FUTURE USE:
Once you are ready to compile the project, copy them to your project directory from the repo. NOTE: do not initiate your project in this repo! You will have to perform the below steps with every new project in order to have nodes, bower packages, and bourbon up-to-date.

Rename your directory to your project name then run the following:

In terminal:
<code>$ cd your/yourprojectname/directory</code>

Install the Node Modules into the project, also install the Bower dependencies into the project, and run pre-production grunt:
<code>$ npm install && bower install && grunt</code>

To watch and compile the files you change (SASS & JS) use:
<code>$ grunt watch</code>

To watch your files and update your browser instantly used:
<code>$ grunt review</code>
*Make sure MAMP is running with localhost:8888, or change the settings in gruntfile.

In order to update packages, run this every so often to keep everything up-to-date:
<code>$ bower update</code>
<code>$ npm update</code>

Your project should compile, and you will recieve notifications of things changing.

Before you start buliding, change all references of 'yourprojectname' with your project name. These are in many files so do a batch find and replace with sublime.
Also change the url in gruntfile.js ('http://www.yourprojectname.co.uk/?show_sitemap') to your live website url, e.g. for local 'http://localhost:8888/?show_sitemap'.

Start building something awesome.

####OTHER TIDBITS:
- Use scss/project/global for creating style guide classes and other reusuable, global elements.
- Use scss/project/media/screen.scss for screen styles
- Use scss/project/media/print.scss for print styles

To watch your files that change run :
<code>$ grunt watch</code>

Once the files are ready for production :
<code>$ grunt launch</code>

If Files still have not changed, do a full grunt fresh with :
<code>$ grunt</code>

Your www root will be <code>wordpress/</code>, which is 3.8.1 as of this build. You will want to push the contents of this folder to your web root, and run the config. If you need help with that, see the Wordpress Codex - <a href="http://codex.wordpress.org/Getting_Started_with_WordPress">http://codex.wordpress.org/Getting_Started_with_WordPress</a>

For development:
Do your JS work in <code>js/</code> and all your styling within <code>scss/</code>. The <code>templates/</code> directory is meant to be your static build folder for HTML, and there is a 'base-joints' theme customized within the wordpress/wp-content/themes directory where you can create your Wordpress theme based off your static templates. Grunt will handle the rest to ensure your templates have the necessary files.

####CREDITS:
Foundation - http://foundation.zurb.com

Grunt - http://gruntjs.com

Bones Theme - https://github.com/eddiemachado/bones


