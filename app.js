
var inquirer = require("inquirer");



var Word=require("./word.js");
var inquirer = require("inquirer");
var animation_movies_array=["tangled","frozen","cinderella","alladin","cars","mulan","pocahontas","zootopia","kubo","Ratatouille"];
var if_user_desired_a_new_round=true;
var chances=10;
var random_number= Math.floor(Math.random() * 10);
var current_word=new Word(animation_movies_array[random_number]);

console.log(current_word.word);
console.log(current_word.word.length);

for (var i = 0; i < current_word.word.length; i++) {
	//current_word.letters.push(current_word.word.charAt(i));
	current_word.add_letter(current_word.word.charAt(i));
} 
console

var game= function () {

	console.log(" ");
	if (chances>0) {
		inquirer.prompt([
	      {
	        name: "letter_guessed",
	        message: "Guess a letter?"
	      }
	    ]).then(function(answer) {
	      
	     	if (current_word.word.indexOf(answer.letter_guessed)!=-1) {
	     		
	     		for (var i = 0; i < current_word.word.length; i++) {
	     			if (current_word.letters[i].letter===answer.letter_guessed) {
	     				current_word.letters[i].guessed=true;
	     			}
	     		}
	     	}
	     		
	     	else{

	     	}

	     	console.log(current_word);
	     	console.log(current_word.word.charAt(1));
	     	console.log(answer.letter_guessed);
	     	console.log(current_word.word.indexOf(answer.letter_guessed));
	      
	      chances--;
	      
	      game();
	     	
    	});

	}
	
	
}
game();
