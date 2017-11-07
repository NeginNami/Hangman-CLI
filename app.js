
var inquirer = require("inquirer");



var Word=require("./word.js");
var inquirer = require("inquirer");
var animation_movies_array=["tangled","frozen","cinderella","alladin","cars","mulan","pocahontas","zootopia","kubo","ratatouille"];
var if_user_desired_a_new_round=true;
var chances=15;
var random_number= Math.floor(Math.random() * 10);
var current_word=new Word(animation_movies_array[random_number]);
var won=false;
var end=false;
var right_guess_counter=0;

for (var i = 0; i < current_word.word.length; i++) {
	
	current_word.add_letter(current_word.word.charAt(i));
} 


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
	  
	     	var str="";
	     	for (var i = 0; i < current_word.word.length; i++) 
	     		
	     		str+=current_word.letters[i].return_letter_for_print();

	     	console.log(str);

	     	//Checks the number of correct guesses, if that is equal to the letters number in the current word, means user already won.
	     	for (var i = 0; i < current_word.word.length; i++) {
	     		if (current_word.letters[i].guessed===true) 
	     			right_guess_counter++;
	     	}
	     	if (right_guess_counter==current_word.word.length) 
	     		won=true;
	     	else
	     		right_guess_counter=0;


	     	
	     	console.log("right_guess_counter: "+right_guess_counter);
	     	console.log("won: "+won);
	     
	      
	      chances--;
	      
	     if (won===false) 
	      	game();
	     else if (won===true) {
	      	console.log("Congratulations! You won!");
	      	chances=15;
			random_number= Math.floor(Math.random() * 10);
			current_word=new Word(animation_movies_array[random_number]);
			won=false;
			end=false;
			right_guess_counter=0; 
			for (var i = 0; i < current_word.word.length; i++) 
				current_word.add_letter(current_word.word.charAt(i));
			 
	      	check_round(); 
	      }
	     	
    	});

	}
	else{
		console.log("Sorry You Are Out Of Your Chances.You Lost!");
		console.log("The Answer Was "+"\""+current_word.word+"\"");
		chances=15;
		random_number= Math.floor(Math.random() * 10);
		current_word=new Word(animation_movies_array[random_number]);
		won=false;
		end=false;
		right_guess_counter=0; 
		for (var i = 0; i < current_word.word.length; i++) 
			current_word.add_letter(current_word.word.charAt(i));
		check_round();

	}
}

check_round();

function check_round() {
	console.log(" ");
	inquirer.prompt([
	{
		name:"newRound",
		message:"Do You Want To Start a New Game? (Type yes or no)"
	}]).then(function (answer) {
		
		if (answer.newRound==="yes") 
			game();
	});
}

