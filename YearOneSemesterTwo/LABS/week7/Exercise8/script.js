let numbers = [[10, 20], [30, 40]];
let table = document.createElement("table");
table.setAttribute("id", "t1");
table.style.border = "1px solid black";
document.body.appendChild(table);
for (let i = 0; i < numbers.length; i++) {
    let row = document.createElement("tr");
    row.setAttribute("id", "t" + i + "r");
    table.appendChild(row);
    for (let j = 0; j < numbers[0].length; j++) {
        let cell = document.createElement("td");
        cell.setAttribute("id", "t" + i + "-" + j + "d");
        cell.style.border = "1px solid black";
        cell.innerText = numbers[i][j];
        row.appendChild(cell);
    }
}