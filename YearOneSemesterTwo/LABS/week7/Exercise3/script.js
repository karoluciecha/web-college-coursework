let list = ["Bread", "Milk", "Tea", "Biscuits", "Crisps"];
for (let i = 0; i < list.length; i++) {
    let result = document.createElement("li");
    result.innerText = list[i];
    document.body.appendChild(result);
}