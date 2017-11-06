
var Letter=require("./letter.js");

function Word(word) {
	this.word=word;
	this.letters=[];
	this.add_correct_guessed_letter=function (ltr) {
		var current_letter=new Letter(ltr);
		current_letter.guessed=true;
		this.letters.push(current_letter);
	};
};

module.exports= Word;