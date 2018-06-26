// All posible situations
var situations = new Array();
var currentSituationID = 2;
var isChanging = false;
var nestSituationID = 0;
var stats = new Stats();

function setUp() {
	situations = createSituations();
	
	if(situations.length > 0) {
		situations[currentSituationID].updateContent();
        setUpClock();
	}else {
        document.getElementById('stopButton').style.display = 'none';
        stopClock();
        setDefaultContent();
	}
}

function change() {
    isChanging = false;
    situations[nextSituationID].updateContent();
    document.getElementById('currentSituation').style.opacity = '1';
       
}

function setDefaultContent() {
    document.getElementById('client').innerHTML = '<p class="errorMessage">BŁĄD!</p><p class="errorMessage">Jeśli widzisz ten komunikat, oznacza to, że coś poszło nie tak. Przeładuj stronę, a jeśli to nie pomoże - powiedz o tym trenerowi lub zadzwoń: 575 730 007.</p>';
        
    document.getElementById('coach').innerHTML = '<p>Brak pytań do zadania</p>';
}

function questionOnClick(target, qst0, qst1, qst2) {
    if(!isChanging) {
        stats.addStats(qst0, qst1, qst2);
        isChanging = true;
        nextSituationID = target;
        document.getElementById('currentSituation').style.opacity = '0';
        setTimeout("change()", 300);
    }
}

function Question(content, id, target, qstats) {
	this.content = content;
	this.id = id;
	
	// Where should go, after click
	this.target = target;
    
    // Array
    this.qstats = qstats;
	
	this.getContentHTML = function() {
		return '<div id="qb' +this.id+ '" class="questionBox" onclick="questionOnClick(' + target + ',' + qstats[0] + ',' + qstats[1] + ',' + qstats[2] + ')">' + content + '</div>';
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

function Stats() {
    
    this.koncentracjaNaRozwiazaniach = 0;
    this.trafnePytania = 0;
    this.domykanieSesji = 0;
    
    this.addStats = function(qst0, qst1, qst2) {
        this.koncentracjaNaRozwiazaniach += qst0;
        this.trafnePytania += qst1;
        this.domykanieSesji += qst2;
    }
    
    this.getStat = function(nr) {
        switch(nr) {
            case 0: return this.koncentracjaNaRozwiazaniach; break;
            case 1: return this.trafnePytania; break;
            case 2: return this.domykanieSesji; break;
        }
    }
}

function getStats() {
    return stats;
}


window.onload = setUp();

