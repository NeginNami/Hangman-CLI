
function Letter(letter) {
	this.letter=letter;
	this.guessed=false;

	this.print_letter= function() {
		if (this.guessed===false)
			console.log(" _ ");
		else
			console.log(" "+this.letter+" ");
	};
};

module.exports= Letter;