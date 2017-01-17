# Wordbox Maker
A project to help people solve "wordbox" puzzles - mainly made as a test for react and associated technologies.

##How to run the project
npm install

To build the code: npm start (this watches the code and updates accordingly).
To deploy the code: webpack-dev-server --hot

Then simply visit: http://localhost:8080/index.html

##Tech used
React (react-router), Redux, Webpack, Typescript, Babel.

##What is a wordbox?
A wordbox is a grid of letters that contains all of the words in a given list in a particular pattern. You may start a word on any square
but then must proceed either left, right, up or down for each subsequent letter. You cannot go diagonally or stay still but you can go back
on yourself. So, given the following grid:

| C | A | T |  
| A | B | E |  
| N | R | C |  

Cat, Cabe, Can and Banana are all valid words but Arc, Bett and Ben are not.