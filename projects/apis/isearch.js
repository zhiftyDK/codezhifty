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
    responseFieldDiv.style.display = "grid";
    responseFieldDiv.style.gridTemplateColumns = "auto auto auto";
    responseFieldDiv.style.justifyContent = "center";
    responseFieldDiv.style.gridGap = "70px";
    responseFieldDiv.style.padding = "50px";
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
    input.style.marginTop = "10vh";
    input.style.marginBottom = "5vh";
    document.getElementById("searchFieldDiv").appendChild(input);
    
    //Error Message Field
    const errorMessage = document.createElement("h3");
    errorMessage.id = "errorMessage";
    errorMessage.style.display = "none";
    document.getElementById("searchFieldDiv").appendChild(errorMessage);
    
    //Search engine start
    let code_happened = false;
    if(code_happened == false) {
        createResults();
        code_happened = true;
    }
    document.getElementById("searchField").addEventListener("keydown", function (){
        createResults();
    })

    //Create results
    function createResults(){
        if(document.getElementById("searchObject")) {
            document.querySelectorAll("#searchObject").forEach(searchObject => {
                searchObject.remove();
            });
        }
        setTimeout(() => {
            if(!document.getElementById("searchObject")){
                document.getElementById("errorMessage").style.display = "block";
                document.getElementById("errorMessage").innerHTML = "There is nothing to see here!";
            }
        }, 100);
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "search.json");
        xhr.responseType = "json";
        xhr.onload = function(){
            const data = xhr.response;
            for(let i = 0; i < data.length; i++) {
                if(data[i].keyword.includes(document.getElementById("searchField").value.toLowerCase())) {
                    document.getElementById("errorMessage").style.display = "none";
                    const searchObject = document.createElement("div");
                    searchObject.id = "searchObject";
                    searchObject.style.display = "inline-block";
                    searchObject.style.backgroundColor = data[i].backgroundColor ? data[i].backgroundColor : "black";
                    searchObject.style.color = data[i].textColor ? data[i].textColor : "white";
                    searchObject.style.padding = "20px";
                    searchObject.style.maxWidth = "400px";
                    searchObject.style.borderRadius = "10px";
                    searchObject.style.boxShadow = data[i].boxShadow ? data[i].boxShadow : false;
                    searchObject.innerHTML = `
                    <h3>${data[i].header ? data[i].header : ""}</h3>
                    <p>${data[i].description ? data[i].description : ""}</p>
                    <a href="${data[i].link ? data[i].link : "javascript:alert('This button has no link!')"}" target="${data[i].linkTarget ? data[i].linkTarget : "_self"}">
                    <button style="padding: 10px; border-radius: 10px;" onMouseOver="this.style.backgroundColor='#cccccc'; this.style.cursor='pointer';" onMouseOut="this.style.backgroundColor='#efefef';">Learn More!</button>
                    </a>
                    `;
                    document.getElementById("responseFieldDiv").appendChild(searchObject);
                }
            }
        }
        xhr.send();
    }
}