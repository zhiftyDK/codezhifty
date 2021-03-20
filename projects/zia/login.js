const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("login");

if (sessionStorage.getItem("agent") !== null) {
    window.open("./index.html", "_self")
}

username.focus();

document.getElementById("login").addEventListener("click", () => {
    if (username.value == "c12-marine" && md5(password.value) == "b2239cc71b97ef89c50ec3778a4f32fa") {
        sessionStorage.setItem("agent", "Welcome agent " + username.value);
        username.value = "";
        password.value = "";
        window.open("./index.html", "_self");
    }
    else if (username.value == "user123" && md5(password.value) == "32250170a0dca92d53ec9624f336ca24") {
        sessionStorage.setItem("agent", "Welcome agent " + username.value);
        username.value = "";
        password.value = "";
        window.open("./index.html", "_self");
    }
    else {
        username.value = "";
        password.value = "";
        alert("Incorrect username or password!");
        username.focus();
    }
});

username.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        login.click();
    }
});

password.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        login.click();
    }
});