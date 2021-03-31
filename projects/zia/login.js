const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");
// username.focus();

const firebaseConfig = {
    apiKey: "AIzaSyAI-cXtii8WbqM-LWuJLW4O4DmXNvD3fjQ",
    authDomain: "zhifty-investigation-agency.firebaseapp.com",
    projectId: "zhifty-investigation-agency",
    storageBucket: "zhifty-investigation-agency.appspot.com",
    messagingSenderId: "834729099624",
    appId: "1:834729099624:web:1b18d00dfbf7d111ee16dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


login.addEventListener("click", function(){signIn()});
function signIn() {
    const promise = firebase.auth().signInWithEmailAndPassword(email.value, md5(password.value));
    promise.catch(e => alert(e.message));
    console.log("Signed In");
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.open("index.html", "_self")
    } else {
      // No user is signed in.
    }
});

password.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("login").click();
    }
});