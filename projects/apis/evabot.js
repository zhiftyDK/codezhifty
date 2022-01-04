const synth = window.speechSynthesis;
const evaBotDiv = document.getElementById("evaBot");
const idleAnim = document.createElement("video");
idleAnim.src = "https://www.dropbox.com/s/f1agmxamacsqw8y/idleAnim.mp4?dl=1";
idleAnim.autoplay = true;
idleAnim.muted = true;
idleAnim.loop = true;
idleAnim.style.width = "100%";
idleAnim.id = "idleAnim";
evaBotDiv.appendChild(idleAnim);
const talkAnim = document.createElement("video");
talkAnim.src = "https://www.dropbox.com/s/grewgvnoqkhwyk1/talkAnim.mp4?dl=1";
talkAnim.autoplay = true;
talkAnim.muted = true;
talkAnim.loop = true;
talkAnim.style.width = "100%";
talkAnim.id = "talkAnim";
talkAnim.style.display = "none";
evaBotDiv.appendChild(talkAnim);

function evaBotSpeak(input){
    document.getElementById("idleAnim").style.display = "none";
    document.getElementById("talkAnim").style.display = "block";
    const voices = speechSynthesis.getVoices();
    var utterance = new SpeechSynthesisUtterance(input);
    utterance.voice = voices[2];
    speechSynthesis.speak(utterance);
    utterance.onend = function(){
        document.getElementById("talkAnim").style.display = "none";
        document.getElementById("idleAnim").style.display = "block";
    }
}