document.getElementById("and").addEventListener("blur", (event) => {
    document.getElementById("and").value = document.getElementById("and").value.replaceAll("&", "and");
});