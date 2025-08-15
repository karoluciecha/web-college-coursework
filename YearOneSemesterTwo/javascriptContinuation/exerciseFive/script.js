function changeH1() {
    document.getElementById("myHeading1").innerHTML = "Hello " + prompt("Please enter your name:") + ".";
}
function greeting() {
    document.getElementById("myHeading2").innerHTML = "Hello " + document.getElementById("intext").value + "!";
}