//Variables
const terminal = document.getElementById("terminal");
const terminalText = document.getElementById("terminalText");
const terminalPrefix = document.getElementById("terminalPrefix");
const terminalInput = document.getElementById("terminalInput");
const matrix = document.getElementById("matrix");
const terminalDatabase = [];
const scrollingElement = (document.scrollingElement || document.body)

//Load Terminal
function loadTerminal() {
    terminalDatabase.push("Zhifty Terminal");
    terminalDatabase.push("The first client side terminal ever!");
    terminalDatabase.push("Write 'help' for a list of commands");
    terminalDatabase.push("");
    const formatTerminalDatabase = terminalDatabase + "";
    const formattedTerminalDatabase = formatTerminalDatabase.split(",").join("<br>");
    terminalText.innerHTML = formattedTerminalDatabase;
    terminalPrefix.style.color = sessionStorage.getItem("color");
    terminalInput.style.color = sessionStorage.getItem("color");
    terminalText.style.color = sessionStorage.getItem("color");
    if(sessionStorage.getItem("matrix") == "true") {
        document.body.style.padding = "0px";
        document.body.style.margin = "0px";
        matrix.style.display = "block";
        terminal.style.display = "none";
        sessionStorage.removeItem("matrix");
        document.body.addEventListener("keyup", function(event) {
            if(event.keyCode === 13 || event.keyCode === 32) {
                location.reload();
            }
        });
    }
}
window.onload = loadTerminal;


//Focus Terminal
setInterval(() => {
    terminalInput.focus();
});

//ipconfig
function callback(response){
    document.getElementById("ipAddress").innerHTML = response.IPv4;
}

$.ajax({
    url:"https://geoip-db.com/jsonp/",
    dataType:"jsonp"
})

//Terminal Handler
terminalInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13 && terminalInput.value !== "") {
        event.preventDefault();
        let javascriptCode = "";

        //Terminal Commands
        if(terminalInput.value == "help") { //list of commands
            terminalDatabase.push("$ " + terminalInput.value);
            terminalDatabase.push("Zterm Commands...");
            terminalDatabase.push("version | Shows the version of Zterm youre running");
            terminalDatabase.push("clear | Clears/resets the terminal");
            terminalDatabase.push("start www.example.com | Start/open any webpage/url")
            terminalDatabase.push("ping www.example.com | Ping any website to check the response time");
            terminalDatabase.push("lookup 88.888.888.88 | Lookup any IP adress");
            terminalDatabase.push("color limegreen | Change color to anything you would like");
            terminalDatabase.push("ipconfig | Get you're IP adress");
            terminalDatabase.push("matrix | Display the matrix");
            terminalDatabase.push("echo text | Display any message");
            terminalDatabase.push("calc 5 + 5 | Built in calculator");
            terminalDatabase.push("run alert('text') | Run native javascript code");
            terminalDatabase.push("nrplt AB12345 | Check any Danish numberplate");
            terminalDatabase.push("exerunner.create C:\\GAMEPATH | Create Aka. register any executable for exerunner");
            terminalDatabase.push("exerunner.launch GAMENAME | Launch any exerunner registered executeable");
            terminalDatabase.push("exerunner.registry | List of all exerunner registered executables");
            terminalDatabase.push("exerunner.clear | Clear list of all exerunner registered executables");
            terminalDatabase.push("");
            terminalDatabase.push("");
            const formatTerminalDatabase = terminalDatabase + "";
            const formattedTerminalDatabase = formatTerminalDatabase.split(",").join("<br>");
            terminalText.innerHTML = formattedTerminalDatabase;
        }
        else if(terminalInput.value == "version") { //shows version information
            terminalDatabase.push("$ " + terminalInput.value);
            terminalDatabase.push("You are running Zhifty Terminal version 0.8");
            terminalDatabase.push("");
            pushCommand();
        } 
        else if(terminalInput.value == "clear") { //clears the terminal
            location.reload();
        }
        else if(terminalInput.value.endsWith("start") || terminalInput.value.startsWith("start") && terminalInput.value.endsWith(" ")){
            terminalDatabase.push("$ " + terminalInput.value);
            terminalDatabase.push('You need to enter a website url after "start"');
            terminalDatabase.push("");
            pushCommand();
        }
        else if(terminalInput.value.includes("start ")) { //starts any website
            terminalDatabase.push("$ " + terminalInput.value);
            const startLink = "http://" + terminalInput.value.replace(/start /g, "") 
            terminalDatabase.push("You started " + startLink);
            terminalDatabase.push("");
            window.open(startLink, "_blank");
            pushCommand();
        }
        else if(terminalInput.value.endsWith("ping") || terminalInput.value.startsWith("ping") && terminalInput.value.endsWith(" ")){
            terminalDatabase.push("$ " + terminalInput.value);
            terminalDatabase.push('You need to enter a website url after "ping"');
            terminalDatabase.push("");
            pushCommand();
        }
        else if(terminalInput.value.includes("ping ")) { //pings any website
            terminalDatabase.push("$ " + terminalInput.value);
            const pingLink = terminalInput.value.replace(/ping /g, "")
            terminalDatabase.push("Pinging http://" + pingLink + "...");
            terminalDatabase.push("");

            $.ajaxSetup({ cache: false });
            $( document ).ready(function() {
                var start = new Date().getTime();
                $('#junkOne').on('error', function (e) {
                    var end = new Date().getTime();
                    $("#timer").html("" + (end-start) + "ms");
                    setTimeout(() => {
                        terminalDatabase.push(document.getElementById("timer").innerHTML)
                        terminalDatabase.push("");
                        pushCommand();
                        terminalPrefix.style.display = "inline";
                        terminalInput.style.display = "inline";
                    }, end-start+1000);
                }).attr('src', 'http://' + pingLink + '/latency.jpg?d=' + new Date().getTime());
            });
            terminalPrefix.style.display = "none";
            terminalInput.style.display = "none";
            pushCommand();
        }
        else if(terminalInput.value.endsWith("lookup") || terminalInput.value.startsWith("lookup") && terminalInput.value.endsWith(" ")){
            terminalDatabase.push("$ " + terminalInput.value);
            terminalDatabase.push('You need to enter an IP adress after "lookup"');
            terminalDatabase.push("");
            pushCommand();
        }
        else if(terminalInput.value.includes("lookup ")) { //get location of ip adress
            terminalDatabase.push("$ " + terminalInput.value);
            const iplookup = terminalInput.value.replace(/lookup /g, "")
            terminalDatabase.push("Looking up " + iplookup + "...");
            terminalDatabase.push("");
            setTimeout(() => {
                window.open("https://www.ip-tracker.org/locator/ip-lookup.php?ip=" + iplookup);
            }, 2000);
            pushCommand();
        }
        else if(terminalInput.value.endsWith("color") || terminalInput.value.startsWith("color") && terminalInput.value.endsWith(" ")){
            terminalDatabase.push("$ " + terminalInput.value);
            terminalDatabase.push('You need to define a color after "color"');
            terminalDatabase.push("");
            pushCommand();
        }
        else if(terminalInput.value.includes("color ")) { //change text color
            terminalDatabase.push("$ " + terminalInput.value);
            const colorType = terminalInput.value.replace(/color /g, "");
            terminalDatabase.push("Changed color to " + colorType + "...");
            terminalDatabase.push("");
            terminalPrefix.style.color = colorType;
            terminalInput.style.color = colorType;
            terminalText.style.color = colorType;
            sessionStorage.setItem("color", colorType);
            pushCommand();
        }
        else if(terminalInput.value.includes("ipconfig")) { //get ip address
            terminalDatabase.push("$ " + terminalInput.value);
            terminalDatabase.push("IPv4: " + document.getElementById("ipAddress").innerHTML);
            terminalDatabase.push("");
            pushCommand();
        }
        else if(terminalInput.value.includes("matrix")) { //launch the matrix
            terminalDatabase.push("$ " + terminalInput.value);
            terminalDatabase.push("Launching the matrix...");
            terminalDatabase.push("");
            terminalPrefix.style.display = "none";
            terminalInput.style.display = "none";
            sessionStorage.setItem("matrix", "true");
            setInterval(() => {
                location.reload();
            }, 3000);
            pushCommand();
        }
        else if(terminalInput.value.endsWith("echo") || terminalInput.value.startsWith("echo") && terminalInput.value.endsWith(" ")){
            terminalDatabase.push("$ " + terminalInput.value);
            terminalDatabase.push('You need to define a message after "echo"');
            terminalDatabase.push("");
            pushCommand();
        }
        else if(terminalInput.value.includes("echo ")) { //Echoing any message
            terminalDatabase.push("$ " + terminalInput.value);
            const echoMsg = terminalInput.value.replace(/echo /g, "");
            terminalDatabase.push(echoMsg);
            terminalDatabase.push("");
            pushCommand();
        }
        else if(terminalInput.value.includes("calc ")) { //basic calculator
            const calcString = terminalInput.value.replace(/calc /g, "")
            const fixedCalcString = calcString.replace(/,/g, ".")
            terminalDatabase.push("$ " + "calc " + fixedCalcString);
            terminalDatabase.push(fixedCalcString + " = " + eval(fixedCalcString));
            terminalDatabase.push("");
            pushCommand();
        }
        else if(terminalInput.value.endsWith("calc")){
            terminalDatabase.push("$ " + terminalInput.value);
            terminalDatabase.push('You need to enter numbers after "calc"');
            terminalDatabase.push("");
            pushCommand();
        }
        else if(terminalInput.value.includes("run ")) { //run javascript code
            const javascriptString = terminalInput.value.replace(/run /g, "")
            const fixedJavascriptString = javascriptString.replace(/,/g, ".")
            terminalDatabase.push("$ " + "run " + fixedJavascriptString);
            terminalDatabase.push("");
            sessionStorage.setItem("runJsCode", "run");
            javascriptCode = new Function (javascriptString);
            pushCommand();
        }
        else if(terminalInput.value.endsWith("run")){
            terminalDatabase.push("$ " + terminalInput.value);
            terminalDatabase.push('You need to define any sort of native js after "run"');
            terminalDatabase.push("");
            pushCommand();
        }
        else if(terminalInput.value.includes("nrplt ")) { //Lookup any danish numberplate
            terminalDatabase.push("$ " + terminalInput.value);
            const nrplt = terminalInput.value.replace(/nrplt /g, "")
            terminalDatabase.push("Checking numberplate " + nrplt + "...");
            terminalDatabase.push("");
            setTimeout(() => {
                window.open("https://www.tjekbil.dk/nummerplade/" + nrplt + "/overblik");
            }, 2000);
            pushCommand();
        }
        else if(terminalInput.value.endsWith("nrplt" || "nrplt ")){
            terminalDatabase.push("$ " + terminalInput.value);
            terminalDatabase.push('You need to define the plate numbers after "nrplt"');
            terminalDatabase.push("");
            pushCommand();
        }
        else if(terminalInput.value.endsWith("exerunner.create") || terminalInput.value.startsWith("exerunner.create") && terminalInput.value.endsWith(" ")){
            terminalDatabase.push("$ " + terminalInput.value);
            terminalDatabase.push('You need to define the executables path after "exerunner.create"');
            terminalDatabase.push("");
            pushCommand();
        }
        else if(terminalInput.value.includes("exerunner.create ")) { //Create AKA. register any executable for exerunner
            terminalDatabase.push("$ " + terminalInput.value);
            const path = terminalInput.value.replace(/exerunner.create /g, "");
            const fixedPath = path.replace(/\\/g, "\\\\");
            const fixedName = fixedPath.split("\\").pop().replace(".exe", "").toLowerCase().replace(" ", "");

            const text = '@echo off\nset Name=' + fixedName + '\n(\necho Windows Registry Editor Version 5.00\necho.\necho [HKEY_CLASSES_ROOT\\%Name%]\necho "URL Protocol"=""\necho [HKEY_CLASSES_ROOT\\%Name%\\shell]\necho [HKEY_CLASSES_ROOT\\%Name%\\shell\\open]\necho [HKEY_CLASSES_ROOT\\%Name%\\shell\\open\\command]\necho @="' + fixedPath + '"\n) > %Name%.reg\nregedit /s %cd%\\%Name%.reg'
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', "ExeRunner " + fixedName + ".bat");

            const prevLS = localStorage.getItem("exerunner");
            if(prevLS != "null"){
                localStorage.setItem("exerunner", prevLS + ", " + fixedName);
            }
            else {
                localStorage.setItem("exerunner", fixedName);
            }
            
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);

            terminalDatabase.push('Executable runner file "' + fixedName + '" is created!');
            terminalDatabase.push("");
            pushCommand();
        }
        else if(terminalInput.value.includes("exerunner.launch ")) { //Launch any exerunner registered executeable
            terminalDatabase.push("$ " + terminalInput.value);
            const prgmName = terminalInput.value.replace(/exerunner.launch /g, "");
            terminalDatabase.push("Launching " + prgmName + "...");
            terminalDatabase.push("");
            pushCommand();

            setTimeout(() => {
                window.open(prgmName + ":", "_self");
            }, 2000);
        }
        else if(terminalInput.value.endsWith("exerunner.launch")){
            terminalDatabase.push("$ " + terminalInput.value);
            terminalDatabase.push('You need to define one of the registered executable names after "exerunner.launch"');
            terminalDatabase.push('You can find a list of registered executables by using "exerunner.registry"')
            terminalDatabase.push("");
            pushCommand();
        }
        else if(terminalInput.value.includes("exerunner.registry")) { //List of all exerunner registered executables
            terminalDatabase.push("$ " + terminalInput.value);
            const echoMsg = terminalInput.value.replace(/echo /g, "");
            if(localStorage.getItem("exerunner") != "null"){
                terminalDatabase.push(localStorage.getItem("exerunner"));
            }
            else {
                terminalDatabase.push("There is no registered exerunner executables!");
            }
            terminalDatabase.push("");
            pushCommand();
        }
        else if(terminalInput.value.includes("exerunner.clear")) { //Clear list of all exerunner registered executables
            terminalDatabase.push("$ " + terminalInput.value);
            localStorage.setItem("exerunner", "null")
            terminalDatabase.push("Exerunner registry is cleared!");
            terminalDatabase.push("");
            pushCommand();
        }
        else {
            pushNoncommand();
        }
        
        //Terminal DB Push
        function pushCommand() {
            const formatTerminalDatabase = terminalDatabase + "";
            const formattedTerminalDatabase = formatTerminalDatabase.split(",").join("<br>");
            terminalText.innerHTML = formattedTerminalDatabase;
            if(sessionStorage.getItem("runJsCode") != null){
                javascriptCode();
                sessionStorage.removeItem("runJsCode");
            }
        }

        function pushNoncommand() {
            terminalDatabase.push("$ " + terminalInput.value);
            terminalDatabase.push("'" + terminalInput.value + "' is not recognized as an internal command");
            terminalDatabase.push("");
            const formatTerminalDatabase = terminalDatabase + "";
            const formattedTerminalDatabase = formatTerminalDatabase.split(",").join("<br>");
            terminalText.innerHTML = formattedTerminalDatabase;
        }

        terminalInput.value = "";
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
    }
});