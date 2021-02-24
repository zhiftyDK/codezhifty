import {record} from "./commands.js"
export function searchGoogle() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function(event) {
        console.log(event);
        document.getElementById("speechToText").value = event.results[0][0].transcript;

        if(document.getElementById("speechToText").value !== "") {
            if(document.getElementById("speechToText").value !== "search Google") {
                speechSynthesis.speak(new SpeechSynthesisUtterance("Searching"))
                setTimeout(function(){ search();}, 1000)
            }
        }
function search() {
    var q = document.getElementById("speechToText").value
    window.open('http://google.com/search?q='+q)
    record()
}

    }
    recognition.start()
}