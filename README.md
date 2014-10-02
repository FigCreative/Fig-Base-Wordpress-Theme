Fig Wordpress Base theme With SVG, Webp, UnCSS, BrowserSync, local db backup, db creation for production, ftp file upload
======
Based on Wadehammes Version @ wadehammes/base-foundation-wordpress
----
Base Foundation is a template framework based on the <a href="http://foundation.zurb.com">Foundation</a> framework from Zurb, which utilizes <a href="http://sass-lang.com">SASS</a>, and is meant to be a starting point for a website build. It utilizes <a href="http://gruntjs.com/">Grunt</a>, which handles javascript tasks such as CSS minification and prefixing, SASS compilation, and JS concatenation and uglifying, folder syncing, and more. Webp and SVG support has been added also UnCss that removes all unused CSS elements from the file. Includes optimised .htaccess file for your wordpress website. Database backup, and production changed DB has also been added as well as a file uploading system.

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

Grunt settings to set
-------

Your project name, can have spaces.<br />
<code>projectname: 'yourprojectname',</code>
<br /><br />
Project slug/ Theme name, must not contain spaces<br />
<code>projectslugname: 'your-project-slug',</code>
<br /><br />
URL of where your live/online version shall be<br />
<code>liveurl: 'http://www.liveurl.co.uk',</code>
<br /><br />
Your local Database Username<br />
<code>dbuser: 'root',</code>
<br /><br />
Your local Database Password<br />
<code>dbpass: 'root',</code>
<br /><br />
Your local host - normally 'localhost'.<br />
<code>dbhost: 'localhost',</code>
<br /><br />
Your local Database port, for mamp usually '8889'.<br />
<code>dbport: '8889',</code><br /><br />
Set your FTP ip / address<br />
<code>ftpaddress: 'ftpiporaddress',</code>

Please add your live website ftp details in '.ftppass' file.

List of Useful Grunt commands
-------

Pre-Production: To run the quick command that gets all the files in the correct place, this should be used for larger updates that span across a range of files.<br />
<code>$ grunt</code>

Run just CSS comparison to the live/staging website<br />
<code>$ grunt cssfix</code>

Convert and minify on your js files<br />
<code>$ grunt jsrun</code>

Review changes or have live changes in your browser, only works on localhost<br />
<code>$ grunt review</code>

Staging, Shall convert all images, and do CSS Unused, this will remove all CSS classes that are not used on the website. A backup of your local database shall also be created, with a production db that has all the urls changed as set in the grunt file.<br />
<code>$ grunt launch</code>

First upload onto the server, includes wordpress and all relevant files, make sure the config file is setup in wordpress. Also upload the production database in the <code>db/production/</code><br />
<code>$ grunt wordpress-upload</code>

Alterations or changes to the website should then be uploaded using this command as it does not reupload wordpress base files.<br />
<code>$ grunt wpcontent-upload</code>

For production, run this to remove all unused css. Make sure settings in grunt are setup correctly.<br />
<code>$ grunt cssfix</code>

To watch your files that change and run grunt tasks:<br />
<code>$ grunt watch</code>

Your www root will be <code>wordpress/</code>, which is 3.8.1 as of this build. You will want to push the contents of this folder to your web root, and run the config. If you need help with that, see the Wordpress Codex - <a href="http://codex.wordpress.org/Getting_Started_with_WordPress">http://codex.wordpress.org/Getting_Started_with_WordPress</a>

For development:
Do your JS work in <code>js/</code> and all your styling within <code>scss/</code>. The <code>templates/</code> directory is meant to be your static build folder for HTML, and there is a 'base-joints' theme customized within the wordpress/wp-content/themes directory where you can create your Wordpress theme based off your static templates. Grunt will handle the rest to ensure your templates have the necessary files.

####CREDITS:
Foundation - http://foundation.zurb.com

Grunt - http://gruntjs.com

Bones Theme - https://github.com/eddiemachado/bones


