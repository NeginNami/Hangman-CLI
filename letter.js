
function Letter(letter) {
	this.letter=letter;
	this.guessed=false;

	this.return_letter_for_print= function() {
		if (this.guessed===false)
			return(" _ ");
		else
			return(" "+this.letter+" ");
	};
};

module.exports= Letter;