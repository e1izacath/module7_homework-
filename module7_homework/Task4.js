let machine = {
    turnMachine: function() {
        if(this.waterAmount>=30) {
            console.log(`${this.name}: turn on an item`);
        } else {
            console.log(`${this.name}: add some water`);
        }
    }
}

let kettle = Object.create(machine);
kettle.name = 'Kettle';
kettle.waterAmount = 40;
kettle.greeting = function() {
    console.log(`${this.name} is saing beep`);
}
kettle.turnMachine();
kettle.greeting();


let coffeeMachine = Object.create(machine);
coffeeMachine.name = 'Coffee machine';
coffeeMachine.waterAmount = 10;
coffeeMachine.color = 'pink';
console.log(`Coffee machine color is ${coffeeMachine.color}`);
coffeeMachine.turnMachine();
