var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var idNum = 2;

function addBox() {
    if(idNum == 3){document.getElementById("temp-div").style.display = "none";}
    document.getElementById("main-div").innerHTML = 
    document.getElementById("main-div").innerHTML +
    "<span class='boxes operators'><span id='operator-span" + idNum +
    "'><img class='icon' src='icon.png'></span></span>";
    idNum++;
    document.getElementById("main-div").innerHTML = 
    document.getElementById("main-div").innerHTML + 
    "<span class='boxes numbers'><span id='number-span" + idNum +
    "'>&nbsp;</span></span>";
}

function start() {
    recognition.start();
}

recognition.onresult = function(event) {
    var transcriptVal = event.results[0][0].transcript;
    document.getElementById("test").innerHTML = transcriptVal;
}