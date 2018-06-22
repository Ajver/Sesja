// All posible situations
var situations = new Array();
var currentSituationID = 2;


function setUp() {
	situations = createSituations();
	
	if(situations.length > 0) {
		situations[currentSituationID].updateContent();
	}else {
		alert('BŁĄD! Brak sytuacji! \n\n ERROR! No situations left!');
	}
}

function questionOnClick(target) {
	currentSituationID = target;
	situations[target].updateContent();
}

function Question(content, id, target) {
	this.content = content;
	this.id = id;
	
	// Where should go, after click
	this.target = target;
	
	this.getContentHTML = function() {
		return '<div id="qb' +this.id+ '" class="questionBox" onclick="questionOnClick(' +target+ ')">' +this.content+ '</div>';
	}
}

function Situation(clientAnswer, coachQuestions, id) {
    
    this.clientAnswer = clientAnswer;
    
    // Array
    this.coachQuestions = coachQuestions;
	
	this.id = id;

	this.updateContent = function() {
        var question = "";
        
        for(i=0; i<coachQuestions.length; i++) {
            question += coachQuestions[i].getContentHTML();
        }
        var answer = '<div id="clientDialogue">' +this.clientAnswer+ '</div>';
		document.getElementById('client').innerHTML = answer;
        
        document.getElementById('coach').innerHTML = question;
	}
}


window.onload = setUp();

