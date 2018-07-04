// All posible situations
var situations = [];
var currentSituationID = 2;
var isChanging = false;
var nestSituationID = 0;
var stats = new Stats();

function setUp() {
  situations = createSituations();

  if (situations.length > 0) {
    situations[currentSituationID].updateContent();
    setUpClock();
  } else {
    document.getElementById('stopButton').style.display = 'none';
    stopClock();
    setDefaultContent();
  }
}

function changeSituation() {
  isChanging = false;
  situations[nextSituationID].updateContent();
  document.getElementById('currentSituation').style.opacity = '1';
}

function setDefaultContent() {
  document.getElementById('client').innerHTML = '<p class="errorMessage">BŁĄD!</p><p class="errorMessage">Jeśli widzisz ten komunikat, oznacza to, że coś poszło nie tak. Przeładuj stronę, a jeśli to nie pomoże - powiedz o tym trenerowi lub zadzwoń: 575 730 007.</p>';

  document.getElementById('coach').innerHTML = '<p>Brak pytań do zadania</p>';
}

function questionOnClick(target, qst0, qst1, qst2) {
  if (!isChanging) {
    stats.addStats(qst0, qst1, qst2);
    isChanging = true;
    nextSituationID = target;
    document.getElementById('currentSituation').style.opacity = '0';
    setTimeout("changeSituation()", 300);
  }
}

function getStats() {
  return stats;
}

window.addEventListener("keyup", function (e) {
  if (e.keyCode === 27) {
    toggleCurtain();
  }
}, false);
document.getElementById("stop-btn").addEventListener("click", function () {
  toggleCurtain();
}, false);
for (var i = 0; i < 2; i++) {
  document.getElementById("ending-btn-" + i).addEventListener("click", function () {
    summary(i);
  }, false);
}
document.getElementById("continue-btn").addEventListener("click", function () {
  closeCurtaint();
}, false);
window.addEventListener("load", function () {
  setUp();
}, false);
