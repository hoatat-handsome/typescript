function displayColors(...colors: string[]){
    //console.log(colors);
    for(let i in colors){
        console.log(colors[i]);
    }
    
};
let colors = ['Red', 'Blue', 'White'];
displayColors(...colors);
// displayColors("Red");
// displayColors("Red", "Blue");
// displayColors("Red", "Blue", "White");

//Lesson 13
var employees = ['A', 'B', 'C'];
let [emp1, ...emp2] = employees;
console.log(emp1);
console.log(emp2);

//lesson 14 bóc tách object
let student = {
    fName: 'Hoa',
    lName: 'Tat',
    age: 37
};

let {fName, lName, age} = student;
console.log(fName);
console.log(lName);
console.log(age);