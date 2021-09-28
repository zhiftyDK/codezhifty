const evaBotDiv = document.getElementById("evaBot");
const video = document.createElement("video");
video.src = "./animations/idleAnim.mp4"
evaBotDiv.appendChild(video);

function evaBot(input){
    document.getElementById("evaIdleAnim").style.display = "none";
    document.getElementById("evaTalkAnim").style.display = "block";
    const voices = speechSynthesis.getVoices();
    var utterance = new SpeechSynthesisUtterance(input);
    utterance.voice = voices[2];
    speechSynthesis.speak(utterance);
    utterance.onend = function(){
        document.getElementById("evaTalkAnim").style.display = "none";
        document.getElementById("evaIdleAnim").style.display = "block";
    }
}