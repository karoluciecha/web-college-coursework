let rand = Math.floor(Math.random() * 10) + 1;
if ((rand < 0) || (rand > 10)) {
    alert("Error. Unexpected number detected.")
} else {
    document.write(rand);
}