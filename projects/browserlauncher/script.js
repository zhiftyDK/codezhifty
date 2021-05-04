function downloadPopup(){
    
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