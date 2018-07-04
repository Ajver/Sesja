var gameEnd = false;

function Stats() {
  this.koncentracjaNaRozwiazaniach = 0;
  this.trafnePytania = 0;
  this.domykanieSesji = 0;

  this.addStats = function (qst0, qst1, qst2) {
    this.koncentracjaNaRozwiazaniach += qst0;
    this.trafnePytania += qst1;
    this.domykanieSesji += qst2;
  }

  this.getStat = function (nr) {
    switch (nr) {
      case 0:
        return this.koncentracjaNaRozwiazaniach;
        break;
      case 1:
        return this.trafnePytania;
        break;
      case 2:
        return this.domykanieSesji;
        break;
    }
  }
}

function summary(type) {
  gameEnd = true;
  // Type = which end was typed
  stopClock();
  var time = getClock();
  var stats = getStats();

  var header = '<h1>Podsumowanie sesji</h1>'
  var statsContent = '<p>' + stats.getStat(0) + '</p>' + '<p>' + stats.getStat(1) + '</p>' + '<p>' + stats.getStat(2) + '</p>';
  var content = header;

  var main = document.querySelector("main");
  main.innerHTML = content + statsContent;


  closeCurtaint();
}

function toggleCurtain() {
  if (!gameEnd) {
    document.querySelector("body").classList.toggle("opened-window");
  }
}

function closeCurtaint() {
  document.querySelector("body").classList.remove("opened-window");
}
