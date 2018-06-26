function summary(type) {
    // Type = which end was typed
    stopClock();
    var time = getClock();
    
    var header = '<h1>Podsumowanie sesji</h1>'
    
    var content = header;
    
    var container = document.getElementById('container');
    container.innerHTML = content;
    
    
    canelCurtaint();
}

function curtain() {
    var curtain = document.getElementById('mainCurtain');
    var endWindow = document.getElementById('endGameWindow');
    
    curtain.classList.add('curtain');
    endWindow.style.left = '0';
    endWindow.style.right = '0';
    endWindow.style.opacity = '1';
}
function canelCurtaint() {
    var curtain = document.getElementById('mainCurtain');
    var endWindow = document.getElementById('endGameWindow');
    
    curtain.classList.remove('curtain');
    endWindow.style.left = '-100vw';
    endWindow.style.right = '100vw';
    endWindow.style.opacity = '0';
}