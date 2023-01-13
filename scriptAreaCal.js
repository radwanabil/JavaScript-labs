var shape = prompt("Enter a shape to calculate it's area:\n(circle, triangle, square, recatngle, parallelogram, trapezium, ellipse) ");
function circle() {
    var radius = +prompt("Enter the radius of the circle: ");
    let area = Math.PI * radius * radius;
    alert("The area is: " + area.toFixed(3));
}
function triangle() {
    var b = +prompt("Enter the base of the triangle: ");
    var h = +prompt("Enter the height of the triangle: ");
    let area = 0.5 * b * h;
    alert("The area is: " + area);


}
function square() {
    var length = +prompt("Enter the side length of the square: ");
    let area = length * length;
    alert("The area is: " + area);
}
function rectangle() {
    var length = +prompt("Enter the length of the rectangle: ");
    var width = +prompt("Enter the width of the rectangle: ");
    let area = length * width;
    alert("The area is: " + area);
}
function parallelogram() {
    var b = +prompt("Enter the base of the parallelogram: ");
    var h = +prompt("Enter the height of the parallelogram: ");
    let area = b * h;
    alert("The area is: " + area);
}

function trapezium() {
    var b = +prompt("Enter (b) the length of parallel side of the trapezium: ");
    var a = +prompt("Enter (a) the length of parallel side of the trapezium: ");
    var h = +prompt("Enter the height of the trapezium: ");
    let area = Math.sqrt(a + b) * h;
    alert("The area is: " + area);
}
function ellipse() {
    var b = +prompt("Enter (b) the half minor axis of the ellipse: ");
    var a = +prompt("Enter (a) the half minor axis of the ellipse: ");
    let area = Math.PI * a * b;
    alert("The area is: " + area.toFixed(3));
}
switch (shape) {
    case "circle":
        circle();
        break;
    case "triangle":
        triangle();
        break;
    case "square":
        square();
        break;
    case "rectangle":
        rectangle();
        break;
    case "parallelogram":
        parallelogram();
        break;
    case "trapezium":
        trapezium();
        break;
    case "ellipse":
        ellipse();
        break;
}
