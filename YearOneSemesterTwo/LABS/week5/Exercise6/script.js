function add() {
    document.getElementById("result").innerHTML = "Answer: " + Number(document.getElementById("num1").value) + " + " + Number(document.getElementById("num2").value) + " = " +(Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value));
}
function multiply() {
    document.getElementById("result").innerHTML = "Answer: " + Number(document.getElementById("num1").value) + " * " + Number(document.getElementById("num2").value) + " = " +(Number(document.getElementById("num1").value) * Number(document.getElementById("num2").value));
}
function substract() {
    document.getElementById("result").innerHTML = "Answer: " + Number(document.getElementById("num1").value) + " - " + Number(document.getElementById("num2").value) + " = " +(Number(document.getElementById("num1").value) - Number(document.getElementById("num2").value));
}
function divide() {
    document.getElementById("result").innerHTML = "Answer: " + Number(document.getElementById("num1").value) + " / " + Number(document.getElementById("num2").value) + " = " +(Number(document.getElementById("num1").value) / Number(document.getElementById("num2").value));
}