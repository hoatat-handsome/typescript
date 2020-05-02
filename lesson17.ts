export class Person17 {
    firstname: string;
    lastname: string;
    private _age: number;

    constructor(firstname: string, lastname: string, age: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this._age = age;
        console.log(this.firstname + " constructor");
    }
    
    get age(){
        return this._age;
    }
    set age(age: number){
        this._age = age;
    }
    addOneYear() {
        this.age = this.age + 1;
        console.log(this.age + " add one year.");
    }

    static talk(name: string) {        
        console.log(name + " static of talk");
    }

    run() {
        console.log("Run function is running...");
    }
}

let p1 = new Person17('Hoa', 'Tat', 100);
p1.addOneYear();
p1.age = 200;
p1.addOneYear();
console.log(p1.age);
//p1.run();
//console.log(p1.run === Person17.prototype.run);

Person17.talk("Hoa Tat");
//console.log(typeof p1);
//console.log(typeof Person);
