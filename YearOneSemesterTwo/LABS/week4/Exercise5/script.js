let number1 = 0, number2 = 0, action = 0, cont = 1;
function arithmetic(a, b, c) {
    switch (c) {
        case 1:
            return a + b;
        case 2:
            return a - b;
        case 3:
            return a * b;
        case 4:
            return a / b;
    }
}

do {
    number1 = 0;
    number2 = 0;
    action = 0;
    number1 = parseInt(prompt("Enter first number:"), 10);
    number2 = parseInt(prompt("Enter second number:"), 10);
    do {
        action = parseInt(prompt("What arithmetic operation do you wish to perform with the numbers?\n\nEnter a choice:\n\n1. For Addition\n2. For Substraction\n3. For Multiplication\n4. For Division"), 10);
    }
    while (action < 1 || action > 4);
    alert("Result: " + arithmetic(number1, number2, action))
    cont = parseInt(prompt("Do you wish to perform any more calculations? (1. For Yes 2. For No)"), 10);
} while (cont == 1);