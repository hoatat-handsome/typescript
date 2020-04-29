"use strict";
function displayColors() {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    //console.log(colors);
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
}
;
var colors = ['Red', 'Blue', 'White'];
displayColors.apply(void 0, colors);
// displayColors("Red");
// displayColors("Red", "Blue");
// displayColors("Red", "Blue", "White");
//Lesson 13
var employees = ['A', 'B', 'C'];
var emp1 = employees[0], emp2 = employees.slice(1);
console.log(emp1);
console.log(emp2);
//lesson 14 bóc tách object
var student = {
    fName: 'Hoa',
    lName: 'Tat',
    age: 37
};
var fName = student.fName, lName = student.lName, age = student.age;
console.log(fName);
console.log(lName);
console.log(age);
//# sourceMappingURL=lesson11.js.map