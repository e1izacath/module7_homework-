class Machine {
    static type = 'MACHINE'
    constructor(options) {        
        this.name = options.name;
        this.waterAmount = options.waterAmount;
        this.ownName = options.ownName             
        
    }
    turnMachine() {
        if(this.waterAmount>=30) {
            console.log(`${this.ownName}: turn on an item`);
        } else {
            console.log(`${this.ownName}: add some water`);
        }
    }
}
const machine = new Machine({
    name: 'Machine', 
    waterAmount: 0       
})

class Kettle extends Machine {
    static type = 'KETTLE'
    constructor(options) {        

        super(options)                    
        this.greeting = function() {
            console.log(`${this.ownName} is saing beep`);
        }
    }
}
const kettle = new Kettle ({
    ownName: 'Kettle',
    waterAmount: 40,    
})
 kettle.greeting(); 
 kettle.turnMachine();



 class CoffeeMachine extends Machine {
    static type = 'KETTLE'
    constructor(options) {        

        super(options) 
        this.color = options.color;      
        this.showColor = function() {
            console.log(`${this.ownName} is ${this.color}`);
        }
    }
}
const coffeeMachine = new CoffeeMachine ({
    ownName: 'Coffee machine',
    waterAmount: 10, 
    color: 'Grey'   
})

coffeeMachine.showColor();
coffeeMachine.turnMachine();