let numbers = [10, 20, 30, 40, 50];
let message = "Values in the array are:\n\n";
numbers.forEach (n => {
    message += n + "\n";
});
message += "\nThis array contains " + numbers.length + " values.";
alert(message);