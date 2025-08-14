document.getElementById("username").addEventListener("input", checkUsername);

function checkUsername() {
    if ((document.getElementById("username").value).length < 6) {
        document.getElementById("result").innerHTML = "Input must be a minimum of 6 characters.";
    }
    else {
        document.getElementById("result").innerHTML = "Valid username";
    }
}