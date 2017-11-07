# Hangman-CLI

Hangman-CLI is an app that makes it possible to play play the hangman game on the command line. I used the animation movies theme for it. So you gonna guess a name of an animation movie!

### Getting Started 

Clone the repo to your computer. Go to your terminal and navigate to the repo folder. Then type "npm install" then enter. This command installs all the modules you need to run the program.

## Prerequisites & Installing

Beacuse Hangman-CLI is a server side node.js application you need to run that from your terminal. Depend on which OS you are using that can be different. Here is a guide about how to run a node.js app on your computer if you are using windows: http://blog.gvm-it.eu/post/20404719601/getting-started-with-nodejs-on-windows. If you are using mac that would be easier. Just go to your terminal and navigate to the Hangman-CLI folder. Then you need to download and install all the node modules that are used in this application. So type "npm install" then hit enter. That would install the needed modules based on package.json file which is availabe on the app folder.

 
### Running and test

At the start you see a command that asks if you want to start a new game. Type "yes" and hit enter to start the game. If you type "no" and then u hit enter you would exit the game. This process happens at the end of each round though. Whether you win or lose. After submitting yes, you will be asked to guess a letter, if you guess a letter that exist in the randomly picked word from an animation movie array, it would show up on the screen. Otherwise you would see underscores indicating the unguessed letters. You would have 15 chances to guess the whole word by guessing each letters.

## Deployment

This application is not deployed on the web. To run this locally you need to go to your terminal and run the program from there. For more information about how to do that, read the app description, Prerequisites & Installing and Running and test section on this file. 

## Built With

* [Node.js](https://nodejs.org)