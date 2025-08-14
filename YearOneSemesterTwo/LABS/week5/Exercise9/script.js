function seasons() {
    document.getElementsByTagName("li")[0].style.color = "blue";
    document.getElementsByTagName("li")[1].style.color = "blue";
    document.getElementsByTagName("li")[2].style.color = "green";
    document.getElementsByTagName("li")[3].style.color = "green";
    document.getElementsByTagName("li")[4].style.color = "green";
    document.getElementsByTagName("li")[5].style.color = "yellow";
    document.getElementsByTagName("li")[6].style.color = "yellow";
    document.getElementsByTagName("li")[7].style.color = "yellow";
    document.getElementsByTagName("li")[8].style.color = "maroon";
    document.getElementsByTagName("li")[9].style.color = "maroon";
    document.getElementsByTagName("li")[10].style.color = "maroon";
    document.getElementsByTagName("li")[11].style.color = "blue";
}
function reset() {
    let lists = document.querySelectorAll("li");
    lists.forEach(function(item) {
        item.style.color = "black";
    });
}