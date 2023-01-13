var number = +prompt("How many numbers you want to enter?");
if (number < 0 || number == 0 || isNaN(number)) {
    alert("Please enter a valid number");
} else {
    var numbers_arr = [];
    var sum = 0;
    var avg = 0.0;
    for (let i = 0; i < number; i++) {
        numbers_arr[i] = +prompt("Enter array element  " + (i + 1));
        
        sum += numbers_arr[i];
    }
    avg = sum / number;
    alert("The sum is: " + sum + " The average is: " + avg);

}