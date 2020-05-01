class Person17 {
        
    constructor(name: string) {
        this.name = name;
        console.log(this.name + " constructor");
    }

    static talk(name: string) {        
        console.log(name + " static of talk");
    }

    run() {
        console.log("Run function is running...");
    }
}

let p1 = new Person17('Hoa Tat');
p1.run();
//console.log(p1.run === Person17.prototype.run);

Person17.talk("Hoa Tat");
//console.log(typeof p1);
//console.log(typeof Person);
