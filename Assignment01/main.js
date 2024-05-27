"use strict";
// ASSIGNMENT 1
// Task 1
let people = {
    friends: []
};
let friend1 = {
    firstName: "Ben",
    lastName: "Tennyson",
    id: 101
};
let friend2 = {
    firstName: "Kevin",
    lastName: "Peterson",
    id: 102
};
let friend3 = {
    firstName: "Peter",
    lastName: "Parker",
    id: 103
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
// Task 2
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
scrambledArray.unshift("I", "am", "a");
scrambledArray.pop();
scrambledArray.splice(5, 2);
let newArray = scrambledArray.join(" ");
console.log(newArray);
// Task 3
let inventory = [];
let productOne = { name: "Mobile Phone", model: 11, cost: 5000, quantity: 10 };
let productTwo = { name: "Smartwatch", model: 7, cost: 700, quantity: 7 };
let productThree = {
    name: "Refrigerators",
    model: 9,
    cost: 10000,
    quantity: 2,
};
inventory.unshift(productOne, productTwo, productThree);
console.log(inventory[2].quantity);
let additionalChanges = inventory[1];
additionalChanges.usedTime = 30;
console.log(inventory);
let productAddition = { name: "Laptop", model: 7, quantity: 4 };
inventory.push(productAddition);
console.log(productAddition);
let students = [
    { name: "Jake", seniorStatus: true, assignmentCompletion: true },
    { name: "Roman", seniorStatus: false, assignmentCompletion: true },
    { name: "Paul", seniorStatus: true, assignmentCompletion: false },
    { name: "Mike", seniorStatus: true, assignmentCompletion: true },
    { name: "Mason", seniorStatus: false, assignmentCompletion: false }
];
function filteredStudents(students) {
    let newArray = students.filter(students => students.assignmentCompletion && students.seniorStatus);
    console.log(newArray);
}
filteredStudents(students);
// I forgot to write comments :(
