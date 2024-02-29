#!/usr/bin/env node

// console.log('Jai shree Ram');


// ex2  argunment setting

// inside the terminal set type 
// note "this is my new note"

// after this 

const note = process.argv;

// create a new object
const newNote = {
    id : Date.now(),
    note,
};

console.log('new note is ', newNote );

// hite enter button