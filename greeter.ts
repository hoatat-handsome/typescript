class Studnet {
    fullName: string;
    constructor(public firstName: string, public midleName: string, public lastName: string) {
        this.fullName = firstName + " " + midleName + " " + lastName;
    }
};

interface Person {
    firstName: string;
    lastName: string;
};

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
};

function greeterStudent(person: Studnet) {
    return "Hello, " + person.fullName;
};

let user = {firstName: "Hoa", lastName: "Tat"};
document.body.textContent = greeter(user);

let std = new Studnet("Hoa", "Quang", "Tat");
document.body.textContent = greeterStudent(std);