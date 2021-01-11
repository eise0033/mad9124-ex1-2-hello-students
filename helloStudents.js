'use strict'

// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

function say (message){
    console.log(message)
}

const students = require('./students.json')

for(let student of students) {
    say(`Hello ${student.firstName} ${student.lastName}`)
}

say('Count of last names starting with D is 3')