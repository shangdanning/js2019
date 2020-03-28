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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + middleInitial + lastName;
    }
    return Student;
}());
var a = new Student("s", "d", "n");
