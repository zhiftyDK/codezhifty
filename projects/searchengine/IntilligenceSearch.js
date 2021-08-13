if(document.getElementById("Isearch")) {
    //Isearch styling
    const Isearch = document.getElementById("Isearch");
    Isearch.style.textAlign = "center";

    //Divs
    const searchFieldDiv = document.createElement("div");
    searchFieldDiv.id = "searchFieldDiv";
    document.getElementById("Isearch").appendChild(searchFieldDiv);

    const br = document.createElement("br");
    document.getElementById("Isearch").appendChild(br);
    
    const responseFieldDiv = document.createElement("div");
    responseFieldDiv.id = "responseFieldDiv";
    responseFieldDiv.style.display = "flex";
    responseFieldDiv.style.justifyContent = "center";
    document.getElementById("Isearch").appendChild(responseFieldDiv);
    
    //Input searchfield
    const input = document.createElement("input");
    input.id = "searchField";
    input.autocomplete = "off";
    input.type = "text";
    input.placeholder = "Intilligence Search";
    input.style.borderRadius = "10px";
    input.style.padding = "10px";
    input.style.width = "50vw";
    input.style.marginTop = "20vh";
    input.style.marginBottom = "10vh";
    document.getElementById("searchFieldDiv").appendChild(input);
    
    //Error Message Field
    const errorMessage = document.createElement("h3");
    errorMessage.id = "errorMessage";
    errorMessage.style.display = "none";
    document.getElementById("responseFieldDiv").appendChild(errorMessage);
    
    //Search
    document.getElementById("searchField").addEventListener("keydown", function (){
        if(document.getElementById("searchObject")) {
            document.querySelectorAll("#searchObject").forEach(searchObject => {
                searchObject.remove();
            });
        }
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "search.json");
        xhr.responseType = "json";
        xhr.onload = function(){
            const data = xhr.response;
            for(let i = 0; i < data.length; i++) {
                if(data[i].keyword.includes(document.getElementById("searchField").value.toLowerCase())) {
                    const searchObject = document.createElement("div");
                    searchObject.id = "searchObject"
                    searchObject.style.height = "100px";
                    searchObject.style.width = "100px";
                    searchObject.style.backgroundColor = "black";
                    searchObject.style.color = "white";
                    searchObject.style.padding = "20px";
                    searchObject.style.margin = "20px";
                    searchObject.style.borderRadius = "10px";
                    searchObject.innerHTML = `<strong>${data[i].header}</strong>`;
                    document.getElementById("responseFieldDiv").appendChild(searchObject);
                }
                else {
                    document.getElementById("errorMessage").innerHTML = "There is nothing to see here!"
                }
            }
        }
        xhr.send();
    })
}