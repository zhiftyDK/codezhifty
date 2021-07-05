class assistant {
    question(input){
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "assistant.json");
        xhr.responseType = "json";
        xhr.onload = function(){
            const data = xhr.response;
            for(let i = 0; i < data.length; i++) {
                if(input.includes(data[i].question)) {
                    if(data[i].answer.startsWith("Cmd/")) {
                        sessionStorage.clear("XHRAnswer");
                        const evalCode = data[i].answer.replace("Cmd/", "");
                        eval(evalCode);
                    }
                    else {
                        sessionStorage.setItem("XHRAnswer", data[i].answer);
                    }
                }
            }
        }
        xhr.send();
        if(sessionStorage.getItem("XHRAnswer") != null){
            return sessionStorage.getItem("XHRAnswer");
        }
    }
    speak(input){
        speechSynthesis.speak(new SpeechSynthesisUtterance(input));
    }
}