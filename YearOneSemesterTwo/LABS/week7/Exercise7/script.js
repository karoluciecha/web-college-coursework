let numbers = [[1, 2, 3, 4], [5, 6, 7, 8]];
let message = "Values in the array are:\n\n";
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[0].length; j++) {
        message += numbers[i][j];
        if (j < numbers[i].length - 1) message += ", ";
    }
}
message += "\n\nThis array contains " + numbers.length + " values.";
alert(message);