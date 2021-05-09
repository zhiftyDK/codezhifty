function download() {
    const gameName = document.getElementById("gameName").value.toLowerCase().replace(/ /g, "");
    const gamePath = document.getElementById("gamePath").value.replace(/\\/g, "\\\\");

    const text = '@echo off\nset gameName=' + gameName + '\n(\necho Windows Registry Editor Version 5.00\necho.\necho [HKEY_CLASSES_ROOT\\%gameName%]\necho "URL Protocol"=""\necho [HKEY_CLASSES_ROOT\\%gameName%\\shell]\necho [HKEY_CLASSES_ROOT\\%gameName%\\shell\\open]\necho [HKEY_CLASSES_ROOT\\%gameName%\\shell\\open\\command]\necho @="' + gamePath + '"\n) > %gameName%.reg\nregedit /s %cd%\\%gameName%.reg'

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', gameName + ".bat");
 
    element.style.display = 'none';
    document.body.appendChild(element);
 
    element.click();
 
    document.body.removeChild(element);
}

function downloadPopup(){
    
}

function addGame(){
    const allGames = document.querySelectorAll('.allGames');
    for (var i = 0; i < allGames.length; i++) {
        allGames[i].style.display = "none";
    }

    document.querySelector('.gameAdder').style.display = "block";
}

function harrypotter1(){
    const allGames = document.querySelectorAll('.allGames');
    for (var i = 0; i < allGames.length; i++) {
        allGames[i].style.display = "none";
    }

    document.querySelector('.hp1').style.display = "block";
}

function harrypotter2(){
    const allGames = document.querySelectorAll('.allGames');
    for (var i = 0; i < allGames.length; i++) {
        allGames[i].style.display = "none";
    }
    document.querySelector('.hp2').style.display = "block"
}