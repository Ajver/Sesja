
function start() {
	var sytuations = new Array(new Sytuation("CLIENTT","COACHH"));

	sytuations[0].test();
	
	
}




class Sytuation {
	
	constructor(clientAnswer, coachQuestions) {
		this.clientAnswer = clientAnswer;
		this.coachQuestions = coachQuestions;
	}
	
	function() {
		this.showTexts = 10;
	}
}
/**/

Sytuation.prototype.test = function() {
	document.getElementById('client').innerHTML = this.clientAnswer;
	document.getElementById('coach').innerHTML = this.coachQuestions;
	
}

window.onload = start();
