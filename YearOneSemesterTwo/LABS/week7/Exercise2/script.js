let fruit = ["Banana", "Orange", "Apple", "Pear"];
document.getElementById("addFruit").addEventListener("click", () => {
    if (document.getElementById("fruit").value == "") {
        document.getElementById("fruit").focus();
        return;
    }
    fruit.push(document.getElementById("fruit").value.charAt(0).toUpperCase() + document.getElementById("fruit").value.slice(1).toLowerCase());
    document.getElementById("fruit").value = "";
    document.getElementById("fruit").focus();
});
document.getElementById("showArray").addEventListener("click", () => {
    if (document.getElementById("result1")) {
        document.getElementById("result1").innerHTML = fruit[0];
        for (let i = 1; i < fruit.length - 1; i++) {
            document.getElementById("result1").innerHTML +=  ", " + fruit[i];
        }
        if ((fruit.length - 1) > 0) document.getElementById("result1").innerHTML += ", " + fruit[fruit.length - 1];
    }
    else {
        let result = document.createElement("h1");
        result.setAttribute("id", "result1");
        result.innerHTML = fruit[0] + ", ";
        for (let i = 1; i < fruit.length - 1; i++) {
            result.innerHTML += fruit[i] + ", ";
        }
        result.innerHTML += fruit[fruit.length - 1];
        document.body.appendChild(result);
    }
});
document.getElementById("showArrayIndex").addEventListener("click", () => {
    let i = document.getElementById("fruitNum").value;
    if (i <= 0 || i > fruit.length) {
        alert("The specified value is invalid.");
    } else {
        i--;
        if (!document.getElementById("result2")) {
            let result = document.createElement("h1");
            result.setAttribute("id", "result2");
            result.innerHTML = fruit[i];
            document.body.appendChild(result);
        } else {
            document.getElementById("result2").innerHTML = fruit[i];
        }
    }
});
document.getElementById("searchArray").addEventListener("click", () => {
    let name = document.getElementById("search").value.charAt(0).toUpperCase() + document.getElementById("search").value.slice(1).toLowerCase();
    if (fruit.indexOf(name) == -1) {
        alert("Fruit not found.");
    } else {
        if (!document.getElementById("result3")) {
            let result = document.createElement("h1");
            result.setAttribute("id", "result3");
            result.innerHTML = fruit.indexOf(name);
            document.body.appendChild(result);
        } else {
            document.getElementById("result3").innerHTML = fruit.indexOf(name);
        }
    }
});
document.getElementById("deleteFruit").addEventListener("click", () => {
    let i = document.getElementById("fruitDel").value;
    i--;
    if (i < 0 || i > fruit.length) {
        alert("The specified value is invalid.");
    } else {
        fruit.splice(i, 1);
    }
});