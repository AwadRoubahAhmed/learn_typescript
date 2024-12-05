//Les types primitives;
var userName = "Toto";
var age = 32;
var isStudent = false;
var test = null;
var undefinedConst = undefined;
///////////////////////////////////////////////////////////////////////////
//Les types non primitives les types de références;
//Array[]
var favoriteColors = ["Blue", "Green", "Red", "Yellow"];
var user = {
    name: "John Smith",
    age: 23,
    active: true,
    department: "IT",
};
//Function()
function greeting(name) {
    return "Hello ".concat(name);
}
console.log(greeting("Alice Smith"));
//Arrow function () =>
var somme = function (a, b) { return a + b; };
console.log(somme(3, 5));
//Classes
var Person = /** @class */ (function () {
    function Person(namePerson, agePerson) {
        this.namePerson = namePerson;
        this.agePerson = agePerson;
    }
    Person.prototype.greet = function () {
        return "Hello ".concat(this.namePerson, " and your age is ").concat(this.agePerson, " years old !");
    };
    return Person;
}());
var newPerson = new Person("Jane Smith", 24);
console.log(newPerson.greet());
