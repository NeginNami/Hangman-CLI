
var Letter=require("./letter.js");

function Word(word) {
	this.word=word;
	this.letters=[];
	this.add_letter=function (ltr) {
		var current_letter=new Letter(ltr);
		this.letters.push(current_letter);
	};
};

module.exports= Word;