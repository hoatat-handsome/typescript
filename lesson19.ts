import person = require('./lesson17')

class Employment extends person.Person17 {
    constructor(){
        super('Hoa', 'Tat', 100);
        console.log('constructor of Employment');
    }    

    run() {        
        super.run();
        console.log('run of Employment.');
    }
}

let emp = new Employment();
emp.run();