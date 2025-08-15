function myFunction() {
    alert("Function has run!");
}
function writeFunction() {
    let textInBox = document.getElementById("inBox").value;
    document.getElementById("myHeading").innerHTML = textInBox;
}
function calculateFunction() {
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
window.setInterval(() => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  
  let timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerHTML = timeString;
}, 1000);

