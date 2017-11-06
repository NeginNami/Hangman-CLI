
var inquirer = require("inquirer");



var Word=require("./word.js");
var inquirer = require("inquirer");
var animation_movies_array=["tangled","frozen","cinderella","alladin","cars","mulan","pocahontas","zootopia","kubo","Ratatouille"];
var if_user_desired_a_new_round=true;
var chances=10;
var random_number= Math.floor(Math.random() * 11);
var current_word=new Word(animation_movies_array[random_number])

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
	     		//current_word.letters.push(answer.letter_guessed);
	     		current_word.add_correct_guessed_letter(answer.letter_guessed);
	     		//current_word.letters[current_word.word.indexOf(answer.letter_guessed)]=answer.letter_guessed;
	     		//console.log("hast");
	     	}
	     		
	     	else{

	     	}

	     	console.log(current_word);
	     	console.log(answer.letter_guessed);
	     	console.log(current_word.word.indexOf(answer.letter_guessed));
	      
	      chances--;
	      
	      game();
	     	
    	});

	}
	
	
}
game();
