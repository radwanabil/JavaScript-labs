var num1 = +prompt("Please enter your first number: ");
var operation = prompt("Please enter the operation required:\nsum, multi, subtract, division, moduls ");
var num2 = +prompt("Please enter your second number: ");
var result = 0;

switch (operation) {
    case "sum":
        result = num1 + num2;
        alert("The result is: " + result);
        break;

    case "multi":
        result = num1 * num2;
        alert("The result is: " + result);
        break;
    case "subtract":
        result = num1 - num2;
        alert("The result is: " + result);
        break;
    case "division":
        result = num1 / num2;
        alert("The result is: " + result);
        break;
    case "moduls":
        result = num1 % num2;
        alert("The result is: " + result);
        break;
    default:
        alert("Please enter a correct operation");

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Bonus

// var num1 = +prompt("Please enter your first number: ");
// var stop = false;
// var result = 0;
// do {

//     var operation = prompt("Please enter the operation required:\nsum, multi, subtract, division, moduls, exit ");
//     if (operation == "exit") break;
//     var num2 = +prompt("Please enter your second number: ");
//     switch (operation) {
//         case "sum":
//             result = num1 + num2;
//             num1 = result;
//             alert("The result is: " + result);
//             break;

//         case "multi":
//             result = num1 * num2;
//             num1 = result;
//             alert("The result is: " + result);
//             break;
//         case "subtract":
//             result = num1 - num2;
//             num1 = result;
//             alert("The result is: " + result);
//             break;
//         case "division":
//             result = num1 / num2;
//             num1 = result;
//             alert("The result is: " + result);
//             break;
//         case "moduls":
//             result = num1 % num2;
//             num1 = result;
//             alert("The result is: " + result);
//             break;
//         case "exit":
//             stop = true;
//             break;
//         default:
//             alert("Please enter a correct operation");

//     }
// } while (!stop)



