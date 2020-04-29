class Person17 {
    run() {
        console.log("Run function is running...");
    }
}

let p1 = new Person17();
console.log(p1.run === Person17.prototype.run);
//console.log(typeof p1);
//console.log(typeof Person);
