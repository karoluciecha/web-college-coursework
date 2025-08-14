function myFunction() {
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