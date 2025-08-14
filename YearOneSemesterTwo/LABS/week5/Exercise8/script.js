function image() {
    document.getElementById("jsImg").style.display = "block";
    document.getElementById("jsTxt").style.display = "none";
    document.getElementById("imgSettings").style.display = "block";
    document.getElementById("changer").innerHTML = "Change to text";
    document.getElementById("changer").onclick = texts;
}
function imageSize() {
    document.getElementById("jsImg").style.width = document.getElementById("num1").value + "px";
    document.getElementById("jsImg").style.height = document.getElementById("num2").value + "px";
}
function texts() {
    document.getElementById("jsImg").style.display = "none";
    document.getElementById("jsTxt").style.display = "block";
    document.getElementById("imgSettings").style.display = "none";
    document.getElementById("changer").innerHTML = "Change to image";
    document.getElementById("changer").onclick = image;
}