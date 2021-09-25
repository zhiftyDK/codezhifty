const synth = window.speechSynthesis;
const recognition = new webkitSpeechRecognition();

recognition.onresult = function(event) {
    console.log(event.results[0][0].transcript);
    if(event.results[0][0].transcript.toLowerCase().includes("eva")){
        var command = event.results[0][0].transcript.toLowerCase();
        const voices = speechSynthesis.getVoices();
        if(command.includes("how are you")){
            var utterance = new SpeechSynthesisUtterance("I am great thanks");
            utterance.voice = voices[5];
            speechSynthesis.speak(utterance);
        }
        else if(command.includes("tell me about")){
            var splitStr = command.split("tell me about ").pop().toLowerCase().split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                // You do not need to check if i is larger than splitStr length, as your for does that for you
                // Assign it back to the array
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
            }
            // Directly return the joined string
            const query = splitStr.join(' ').replace(" ", "%20"); 
            console.log(query);
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=2&explaintext=1&format=json&origin=*&titles=" + query);
            xhr.responseType = "json";
            xhr.onload = function(){
                const data = xhr.response;
                const dataPageId = Object.getOwnPropertyNames(data.query.pages);
                sessionStorage.setItem("finalData", eval(`(data.query.pages["${dataPageId}"].extract)`));
            }
            xhr.send();
            setTimeout(() => {
                var utterance = new SpeechSynthesisUtterance(sessionStorage.getItem("finalData"));
                utterance.voice = voices[5];
                speechSynthesis.speak(utterance);
                console.log(sessionStorage.getItem("finalData"));
                sessionStorage.removeItem("finalData");
            }, 1000);
        }
    }
}
recognition.onend = function() {
    setTimeout(() => {
        recognition.start();
    }, 1000);
}
recognition.start();