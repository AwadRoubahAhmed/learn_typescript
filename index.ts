//Les types primitives;
let userName = "Toto";
let age = 32;

const isStudent: boolean = false;
const test: null = null;
const undefinedConst: undefined = undefined;

///////////////////////////////////////////////////////////////////////////

//Les types non primitives les types de références;
//Array[]
const favoriteColors: string[] = ["Blue", "Green", "Red", "Yellow"];

//Object{}
type UserObject = {
  name: string;
  age: number;
  active: boolean;
  department: string;
};
const user: UserObject = {
  name: "John Smith",
  age: 23,
  active: true,
  department: "IT",
};

//Function()
function greeting(name: string): string {
  return `Hello ${name}`;
}
console.log(greeting("Alice Smith"));

//Arrow function () =>
const somme = (a: number, b: number): number => a + b;
console.log(somme(3, 5));

//Classes
class Person {
  namePerson: string;
  agePerson: number;

  constructor(namePerson: string, agePerson: number) {
    this.namePerson = namePerson;
    this.agePerson = agePerson;
  }

  greet(): string {
    return `Hello ${this.namePerson} and your age is ${this.agePerson} years old !`;
  }
}

const newPerson = new Person("Jane Smith", 24);
console.log(newPerson.greet());

////////////////////////////////////////////////////////////////////////////////////////////////
type PropsCheck = {
  isLoggedIn: boolean;
};

const isLoggedIn: boolean = true;
const renderLoggedIn = (isLoggedIn: PropsCheck): string => {
  if (isLoggedIn) {
    return "Bienvenu, utilisateur !";
  } else {
    return "Désolé vous n'etes pas connecter !";
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////
// Types Generics;

function getType<T>(arr: T[], item: T): boolean {
  return arr.includes(item);
}

console.log(getType([1, 3, 5, 6, 7], 4));
