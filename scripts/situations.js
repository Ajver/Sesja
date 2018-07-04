function Question(content, id, target, qstats) {
  this.content = content;
  this.id = id;

  // Where should go, after click
  this.target = target;

  // Array
  this.qstats = qstats;

  this.getContentHTML = function () {
    var statsStr = "";
    for (var i = 0; i < qstats.length; i++) {
      statsStr += "," + qstats[i];
    }
    return '<div id="qb' + this.id + '" class="questionBox" onclick="questionOnClick(' + target + statsStr + ')">' + content + '</div>';
  }
}

function Situation(clientAnswer, coachQuestions, id) {
  this.clientAnswer = clientAnswer;

  // Array
  this.coachQuestions = coachQuestions;
  this.id = id;

  this.updateContent = function () {
    var question = "";

    for (i = 0; i < coachQuestions.length; i++) {
      question += coachQuestions[i].getContentHTML();
    }
    var answer = '<div id="clientDialogue">' + this.clientAnswer + '</div>';
    document.getElementById('client').innerHTML = answer;

    document.getElementById('coach').innerHTML = question;
  }
}

function createSituations() {
  var situations = new Array();

  // Creating situation 0
  situations.push(new Situation(
    "CLIENTT",
    new Array(
      new Question("Na czym polega problem?", 0, 1, new Array(1, 1, 1)),
      new Question("Co Ty na to?", 1, 1, new Array(1, 1, 1)),
      new Question("Czy to jest pytanie?", 2, 0, new Array(1, 1, 1)),
      new Question("Czy to jest pytanie2?", 3, 0, new Array(1, 1, 1)),
      new Question("Czy to jest pytanie3? Aleee Nieee?", 4, 0, new Array(1, 1, 1)),
      new Question("Czy to jest jeszcze inne pytanie?", 5, 2, new Array(1, 1, 1))
    ), 0));

  // Creating situation 1
  situations.push(new Situation(
    "Sytuacja id=1",
    new Array(
      new Question("GOTO 0", 0, 0, new Array(1, 1, 1)),
      new Question("GOTO 2", 1, 2, new Array(1, 1, 1))
    ), 1));

  // Creating situation 2
  situations.push(new Situation(
    "To jest trzecia sytuacja (id=2), bdawdwajbd wadwbdh awudffh wadb hbdwahb dwabhb wadbh bwadhb dhbawh bwahdb hwadbh wadhb hwadb bdawhbd awhbh bdwahbdwahbdawh bh awbhdbawh bhdawb hdb awhdbwahb dw. dwajdjaw dj w adwjad wand wandn wandw adnn awnwd audaw uhduh wadj awdnuaw udybn awyd byjdo ud awy dawjn aw.",
    new Array(
      new Question("GoTO 1", 0, 1, new Array(1, 1, 1)),
      new Question("Gotooo 0", 1, 0, new Array(1, 1, 1))
    ), 2));

  return situations;
}
