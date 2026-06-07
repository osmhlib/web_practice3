"use strict";

console.log("Підключено JavaScript для Практичної роботи №3");

// 2. Функції створення об’єктів та методів

const car = {
    brand: "Toyota",
    year: 2020,

    displayInfo() {
        console.log("Автомобіль: " + this.brand + ", Рік: " + this.year);
    }
};

car.displayInfo();

const person = {
    name: "Іван",

    sayHello() {
        console.log("Привіт, мене звуть " + this.name);
    }
};

person.sayHello();

// 3. Конструктори, прототипи та класи

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Олена", 28);

console.log(person1);

Person.prototype.greet = function() {
    console.log("Привіт, я " + this.name + " і мені " + this.age + " років.");
};

person1.greet();

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    displayInfo() {
        console.log("Студент: " + this.name + ", Вік: " + this.age + ", Оцінка: " + this.grade);
    }
}

const student1 = new Student("Андрій", 22, "A");

student1.greet();
student1.displayInfo();

// 3.3 Геттери та сеттери

class SimpleUser {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName) {
            this._name = newName;
        }
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        }
    }

    display() {
        console.log("Користувач: " + this._name + ", Вік: " + this._age);
    }
}

const user1 = new SimpleUser("Марія", 30);

user1.display();

user1.name = "Оксана";
user1.age = 32;

user1.display();

// 4.1 Комплексне завдання: Бібліотека користувачів

class User {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

    display() {
        return "Користувач: " + this.name +
            "\nВік: " + this.age +
            "\nПрофесія: " + this.profession;
    }
}

class Admin extends User {
    constructor(name, age, profession, role) {
        super(name, age, profession);
        this.role = role;
    }

    display() {
        return "Адміністратор: " + this.name +
            "\nВік: " + this.age +
            "\nПрофесія: " + this.profession +
            "\nРоль: " + this.role;
    }
}

let userName = prompt("Введіть ім'я користувача:");
let userAge = Number(prompt("Введіть вік користувача:"));
let userProfession = prompt("Введіть професію користувача:");

if (userAge > 0) {
    const user = new User(userName, userAge, userProfession);

    console.log(user.display());
    alert(user.display());
} else {
    console.log("Помилка: вік користувача введено неправильно.");
    alert("Помилка: вік користувача введено неправильно.");
}

let adminName = prompt("Введіть ім'я адміністратора:");
let adminAge = Number(prompt("Введіть вік адміністратора:"));
let adminProfession = prompt("Введіть професію адміністратора:");
let adminRole = prompt("Введіть роль адміністратора:");

if (adminAge > 0) {
    const admin = new Admin(adminName, adminAge, adminProfession, adminRole);

    console.log(admin.display());
    alert(admin.display());
} else {
    console.log("Помилка: вік адміністратора введено неправильно.");
    alert("Помилка: вік адміністратора введено неправильно.");
}

// Live-coding demo: bind()

const userForBind = {
    name: "Петро",

    showName() {
        console.log("Ім'я користувача: " + this.name);
    }
};

const show = userForBind.showName.bind(userForBind);

show();