Template Engine / View Engine - > responsible for rendering the data from server and display on html.

Step 1 : npm init
Step 2 : npm i express
Step 3 : npm i -D nodemon - > when ever you save file to automatically start the server , configure this in package.json ( start script)
Step 4 : create src folder and index.js inside that
Step 5 : now to work with View engine first install npm i ejs ( embeded java script)
        ejs has a compiler inside it , it conerts the code into html and js
Step 6 : create a folder called views inside src folder , views is a directory which ejs will try   to look for views folder within the root for that we need to give configuration to say to ejs that where is view folder for that we use middle ware function called app.set('views',path) refer to index.js 

Step 7 : create index.ejs inside views folder

Step 8 : create routes folder inside the src and create common.js file der  , in common.js we will be having all the common routes here , means we dont need any authentication configuration required here.

Step 9 : In all the html files we have something called common files with meta we can remove all the code from all the files and put it in some common file called head under partials folder and refer this file in all the files


Step 10 : everytime we cannot go to url and give /contact /about right ? so we now create a navigation thing :) 