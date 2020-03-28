// function greeter(person: string) {
//     return "Hello, " + person;
// }

// let user = "Jane User";
// let user =["Jane User"];

//===========================基于接口====================================

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter (person:Person){
//     return "hello, "+person.firstName+"  "+person.lastName;
// }
// let user={
//     firstName:"s",
//     lastName:"dn"
// }
// console.log(greeter(user));


//=========================基于class=====================================
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + middleInitial + lastName;
    }

}

let a=new Student("s","d","n");
