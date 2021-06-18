//Creating SpeechRecognition
listener();
function listener() {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function(event) {
        console.log(event);
        const result = event.results[0][0].transcript;

        if(result.includes("hello")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("Hello sir"));
            setTimeout(() => {
                listener();
            }, 1000);
        }
    }
    recognition.start()
}