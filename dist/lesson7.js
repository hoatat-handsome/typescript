"use strict";
/*
let fullName: string = "Hoa Tat";
let age: number = 10;
let sentence: string = `
    Hello ${fullName}. Age is ${age}
`
console.log(sentence);

enum Color {Red, Blue, Yellow};
let color: Color = Color.Blue;
console.log(color);
*/
//Từ khóa this
var employee = {
    id: 1,
    greet: function () {
        var self = this;
        setTimeout(function () {
            console.log(self.id);
        }, 1000);
    },
    greetArrow: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.id); }, 1000);
    }
};
console.log(employee.greet());
console.log(employee.greetArrow());
//# sourceMappingURL=lesson7.js.map