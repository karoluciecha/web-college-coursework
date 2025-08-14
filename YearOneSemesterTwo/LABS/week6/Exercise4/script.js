document.getElementById("myBtn").addEventListener("click", myFunction);
document.getElementById("h2heading").addEventListener("click", myFunction);
document.getElementById("h3heading").addEventListener("mouseover", myFunction);
document.getElementById("h4heading").addEventListener("mouseout", myFunction);
document.getElementById("inBox1").addEventListener("input", calculate);
document.getElementById("inBox2").addEventListener("input", calculate);
function myFunction() {
    alert("Function has run!");
}
function calculate() {
    let valInBox1 = parseFloat(document.getElementById("inBox1").value);
    let valInBox2 = parseFloat(document.getElementById("inBox2").value);
    if (isNaN(valInBox1)) {
        if (isNaN(valInBox2)) document.getElementById("result").innerHTML = "Nothing to calculate";
        else document.getElementById("result").innerHTML = valInBox2;
    }
    else {
        if (isNaN(valInBox2)) document.getElementById("result").innerHTML = valInBox1;
        else document.getElementById("result").innerHTML = valInBox1 + valInBox2;
    }
}