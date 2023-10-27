#! /usr/bin/env node
import inquirer from "inquirer";
class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    AskQuestion(ans) {
        if (ans == 1) {
            this.personality = "extrovert";
        }
        else if (ans == 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "Mystery";
        }
    }
    get person() {
        return this.personality;
    }
}
class Student extends Person {
    name;
    constructor() {
        super();
        this.name = " ";
    }
    get name_Persons() {
        return this.name;
    }
    set name_Persons(v) {
        this.name = v;
    }
}
let p1 = new Person();
let s1 = new Student();
let ask = await inquirer.prompt([
    {
        message: "What's your name:",
        name: "you",
        type: "input"
    },
    {
        message: "Choose whether you like to talk to others or if you like to talk to yourself",
        name: "choose",
        choices: ["1. you like to talk to others", "2. you like to keep it to yourself"],
        type: "list"
    }
]);
s1.name_Persons = ask.you;
if (ask.choose == "1. you like to talk to others") {
    p1.AskQuestion(1);
    s1.AskQuestion(1);
    console.log(`You are: ${p1.person}`);
}
else if (ask.choose == "2. you like to keep it to yourself") {
    p1.AskQuestion(2);
    s1.AskQuestion(2);
    console.log(`You are: ${p1.person}`);
}
else {
    console.log("Wrong choice");
}
console.log(`Hence,\nName:${s1.name_Persons} is an ${s1.person}`);
