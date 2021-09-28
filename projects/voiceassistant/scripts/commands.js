//Weather Handling
import {weatherDatabase, database} from "./database.js"
fetch('https://api.openweathermap.org/data/2.5/weather?q=Silkeborg&appid=f4e80e2071fcae0bd7c122d2f82fd284')
.then(response => response.json())
.then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];    
    const tempValueC = tempValue - 273.15
    const weather = tempValueC  + " " + descValue;
    const weatherDeci = weather[0] - 1 + 2;
    const fullWeather = weatherDeci + " degrees and " + descValue;
    weatherDatabase.push(fullWeather);
    console.log(weatherDatabase)
})

//Music Handler
const shoottothrill = document.getElementById("shoottothrill");
const backinblack = document.getElementById("backinblack");
const musicArray = [shoottothrill, backinblack];
const music = Math.floor(Math.random() * musicArray.length);

//Bootup Sequence
//let count = 0;
//if(count == 0) {
//    speechSynthesis.speak(new SpeechSynthesisUtterance("Engaging boot sequence"))
//    setTimeout(2000);
//    speechSynthesis.speak(new SpeechSynthesisUtterance("Boot was succesful, shifty assistant at your service"))
//    setTimeout(function(){record()}, 1100);
//    count = 1;
//}

//SpeechSynthesis Commmands
import {searchGoogle} from "./searchgoogle.js";
document.getElementById("btn").addEventListener("click", event => {
    record();
});
export function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function(event) {
        console.log(event);
        document.getElementById("speechToText").value = event.results[0][0].transcript;

        //Speech Console Database Handling
        const speechToText = document.getElementById("speechToText").value;
        const speechConsole = document.getElementById("speechConsole");
        database.push(speechToText)
        const formatDatabase = database + '';
        const formattedDatabase = formatDatabase.split(",").join("<br>");
        console.log(formattedDatabase)
        speechConsole.innerHTML = formattedDatabase;

        //Commands
        if(document.getElementById("speechToText").value.includes("open Google")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("Opening Google"))
            setTimeout(function(){ window.open("https://www.google.com","_blank"),record()}, 1100);
        }

        if(document.getElementById("speechToText").value.includes("Google me")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("Searching for Oscar Stausholm"))
            setTimeout(function(){ window.open("https://www.google.com/search?q=Oscar Stausholm","_blank"),record()}, 1700);
        }

        if(document.getElementById("speechToText").value.includes("open YouTube")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("Opening Youtube"))
            setTimeout(function(){ window.open("https://www.youtube.com"),record()}, 1100);
        }

        if(document.getElementById("speechToText").value.includes("your name")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("my name is Michael"))
            setTimeout(function(){ record()}, 1300);
        }

        if(document.getElementById("speechToText").value.includes("how are you")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("Im great thanks"))
            setTimeout(function(){ record()}, 1300);
        }

        if(document.getElementById("speechToText").value.includes("you're slow")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("be patient"))
            setTimeout(function(){ record()}, 1200);
        }

        if(document.getElementById("speechToText").value.includes("morning Michael")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("morning sir. what a delightful day, dont you think? anyways what can i do for you"))
            setTimeout(function(){ record()}, 7000);
        }

        if(document.getElementById("speechToText").value.includes("weather")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance(weatherDatabase))
            setTimeout(function(){ record()}, 1600);
        }

        if(document.getElementById("speechToText").value.includes("good morning")) {
            var today = new Date(),
            month = today.getMonth(),
            monthDay = today.getDate(),
            weekDay = today.getDay(),
            year = today.getFullYear(),
            hours = today.getHours(),
            minutes = today.getMinutes(),
            seconds = today.getSeconds();
            const weekDayFull = weekDay - 1;
            var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var fullDate = monthDay + " " + months[month] + " " + year;
            var tomorrow = monthDay + 1 + " " + months[month] + " " + year;
            speechSynthesis.speak(new SpeechSynthesisUtterance("Good morning sir, the time is" + hours + " " + minutes + ", the weather in Silkeborg is " + weatherDatabase + ", have a great " + weekDays[weekDayFull] + " sir"))
            setTimeout(function(){ record()}, 3000);
        }

        if(document.getElementById("speechToText").value.includes("my name")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("your name is Oscar"))
            document.getElementById("speechToText").value = "Oscar Juul Stausholm"
            setTimeout(function(){ record()}, 1200);
        }

        if(document.getElementById("speechToText").value.includes("who is Rasmus")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("Oh dont worry about that shithead"))
            setTimeout(function(){ record()}, 1400);
        }

        if(document.getElementById("speechToText").value.includes("who is Magnus")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("Omg that redhaired motherfucker is such a meme"))
            setTimeout(function(){ record()}, 2900);
        }

        if(document.getElementById("speechToText").value.includes("suck my cock")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("Nah im only horny for girls"))
            setTimeout(function(){ record()}, 2300);
        }

        if(document.getElementById("speechToText").value.includes("play the music") || document.getElementById("speechToText").value.includes("fire it up")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("Playing the music sir"))
            setTimeout(function(){ record(), musicArray[music].play(); }, 1500);
        }
        
        if(document.getElementById("speechToText").value.includes("stop the music")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("Stopping the music sir"))
            setTimeout(function(){ record(), location.reload(); }, 1600);
        }

        if(document.getElementById("speechToText").value.includes("send email")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("Sending email"))
            setTimeout(function(){sendMail()}, 1200);
        }

        if(document.getElementById("speechToText").value.includes("search Google")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance("What should i search for"))
            setTimeout(function(){ searchGoogle()}, 1200);
        }

        else{
            setTimeout(function(){ record() }, 1200);
        }
        
    }
    recognition.start();
}