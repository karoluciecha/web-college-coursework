let result = parseInt(prompt("What's your exam score?"), 10);
if (result > 84) document.write("<h3>Merit</h3>");
else if (result > 39) document.write("<h3>Pass</h3>");
else document.write("<h3>Fail</h3>");