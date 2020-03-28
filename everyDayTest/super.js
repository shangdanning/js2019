// class base {
//     constructor() {
//         this.name = 'base';
//     }
//     print() {
//         console.log("this is base print log")
//     }
// }

// class student extends base {
//     constructor() {
//         super();
//     }
//     say() {
//         console.log("i am sdn");
//         console.log(this.name);
//         super.print();
//     }
// }

// let studentA = new student();
// studentA.say();


//===========================static==============================================
//在子类的静态方法中用super调用父类的静态方法
// class Rectangle {
//     constructor() {

//     }
//     static logNbSides() {
//         return 'I have 4 sides';
//     }

// }

// class Square extends Rectangle {
//     constructor() {}
//     static logDescription() {
//         return super.logNbSides() + ' which are all equal';
//     }
// }
// Square.logDescription(); // 'I have 4 sides which are all equal'

//==============================================================
class X {
    constructor() {
        Object.defineProperty(this, 'prop', {
            configurable: true,
            writable: false,
            value: 1
        });
    }
}

class Y extends X {
    constructor() {
        super();
    }
    foo() {
        // super.prop = 2; // Cannot overwrite the value.
        console.log(super.prop);
    }
}

var y = new Y();
y.foo(); // TypeError: "prop" is read-only
console.log(y.prop); // 1