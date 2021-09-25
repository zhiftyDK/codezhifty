const synth = window.speechSynthesis;
const recognition = new webkitSpeechRecognition();
recognition.onresult = function(event) {
    console.log(event.results[0][0].transcript);
    if(event.results[0][0].transcript.toLowerCase().includes("eva") || event.results[0][0].transcript.toLowerCase().includes("either")){
        var command = event.results[0][0].transcript.toLowerCase();
        const voices = speechSynthesis.getVoices();
        if(command.includes("how are you")){
            var utterance = new SpeechSynthesisUtterance("I am great thanks");
            utterance.voice = voices[5];
            speechSynthesis.speak(utterance);
        }
        else if(command.includes("tell me about")){
            const query = command.split("tell me about ").pop().toLowerCase();
            console.log(query);
            fetch("https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search=" + query)
            .then(response => response.json())
            .then(formattedQuery => {
                console.log(formattedQuery);
                fetch("https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=2&explaintext=1&format=json&origin=*&titles=" + formattedQuery[1][0])
                .then(response => response.json())
                .then(data => {
                    const dataPageId = Object.getOwnPropertyNames(data.query.pages);
                    var utterance = new SpeechSynthesisUtterance(data.query.pages[dataPageId].extract);
                    utterance.voice = voices[5];
                    speechSynthesis.speak(utterance);
                    console.log(data.query.pages[dataPageId].extract);
                })
            })
        }
        else if(command.includes("weather")){
            fetch("https://api.openweathermap.org/data/2.5/weather?q=Silkeborg&units=metric&appid=f4e80e2071fcae0bd7c122d2f82fd284")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const tempValue = data['main']['temp'];
                const nameValue = data['name'];
                const descValue = data['weather'][0]['main'];    
                console.log(tempValue.toString().slice(0,2) + " " + descValue + " " + nameValue)
                var utterance = new SpeechSynthesisUtterance(`In ${nameValue} it is ${tempValue.toString().slice(0,2)} degrees and ${descValue}`);
                utterance.voice = voices[5];
                speechSynthesis.speak(utterance);
            })
        }
        else if(command.includes("good morning")){
            fetch("https://api.openweathermap.org/data/2.5/weather?q=Silkeborg&units=metric&appid=f4e80e2071fcae0bd7c122d2f82fd284")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const tempValue = data['main']['temp'];
                const nameValue = data['name'];
                const descValue = data['weather'][0]['main'];    
                console.log(tempValue.toString().slice(0,2) + " " + descValue + " " + nameValue)
                const today = new Date(),
                hours = today.getHours(),
                minutes = today.getMinutes(),
                weekDay = today.getDay();
                const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var utterance = new SpeechSynthesisUtterance("Good morning sir, the time is" + hours + " " + minutes + ", the weather in " + nameValue + " is " + tempValue.toString().slice(0,2) + " degrees and " + descValue + ", have a great " + weekDays[weekDay] + " sir");
                utterance.voice = voices[5];
                speechSynthesis.speak(utterance);
            })
        }
        else if(command.includes("tidal")){
            window.open("tidal:")
            var utterance = new SpeechSynthesisUtterance("Opening tidal");
            utterance.voice = voices[5];
            speechSynthesis.speak(utterance);
        }
    }
}
recognition.onend = function() {
    setTimeout(() => {
        console.log("Ended")
        recognition.start();
    }, 1000);
}