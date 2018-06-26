// All posible situations
var situations = new Array();
var currentSituationID = 2;
var isChanging = false;
var nestSituationID = 0;

function setUp() {
	situations = createSituations();
	
	if(situations.length > 0) {
		situations[currentSituationID].updateContent();
	}else {
        setDefaultContent();
		alert('BŁĄD! Brak sytuacji! \n\n ERROR! No situations left!');
	}
    
    setUpClock();
}

function change() {
    isChanging = false;
    situations[nextSituationID].updateContent();
    document.getElementById('currentSituation').style.opacity = '1';
       
}

function setDefaultContent() {
    document.getElementById('client').innerHTML = '<p class="errorMessage">Jeśli widzisz ten komunikat, oznacza to, że coś poszło nie tak. Przeładuj stronę, a jeśli to nie pomoże - powiedz o tym trenerowi lub zadzwoń: 575 730 007.</p>';
        
    document.getElementById('coach').innerHTML = '<p>Brak pytań do zadania</p>';
}

function questionOnClick(target) {
    if(!isChanging) {
        isChanging = true;
        nextSituationID = target;
        document.getElementById('currentSituation').style.opacity = '0';
        setTimeout("change()", 300);
    }
}

function Question(content, id, target, stats) {
	this.content = content;
	this.id = id;
	
	// Where should go, after click
	this.target = target;
    
    // Array
    this.stats = stats;
	
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

