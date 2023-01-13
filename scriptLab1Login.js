var username = prompt("Please enter your username to log in: ");
var password = prompt("Please enter your password to log in: ");
var flagUsername = 0;
var flagPassword = 0;

if (username === "admin") {
    flagUsername = 1;
}
if (password === "421$$") {
    flagPassword = 1;
}

if (flagUsername == 0 && flagPassword == 0) {
    alert("incorrect username and password");
} else if (flagPassword == 0) {
    alert("incorrect password");
} else if (flagUsername == 0) {
    alert("incorrect username");
} else {
    alert("Welcome login success");
}
