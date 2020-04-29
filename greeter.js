var Studnet = /** @class */ (function () {
    function Studnet(firstName, midleName, lastName) {
        this.firstName = firstName;
        this.midleName = midleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + midleName + " " + lastName;
    }
    return Studnet;
}());
;
;
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
;
function greeterStudent(person) {
    return "Hello, " + person.fullName;
}
;
var user = { firstName: "Hoa", lastName: "Tat" };
document.body.textContent = greeter(user);
var std = new Studnet("Hoa", "Quang", "Tat");
document.body.textContent = greeterStudent(std);
