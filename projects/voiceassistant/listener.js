import {record} from "./commands.js";
listener();
function listener() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function(event) {
        console.log(event);
        document.getElementById("speechToText").value = event.results[0][0].transcript;

        if(document.getElementById("speechToText").value.includes("zhifty")) {
            document.body.style.background = "#141414 url('wave.gif')";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "repeat-x";
            document.body.style.backgroundSize = "100% 100%";
            document.body.style.backgroundPositionY = "70px";
            document.getElementById("speechToText").value = "";
            speechSynthesis.speak(new SpeechSynthesisUtterance("yes sir"))
            setTimeout(function(){record(), document.body.style.background = ""; }, 1100);
        }
    }
    recognition.start()
}
