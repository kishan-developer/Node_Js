
// what is a module

// ans => in Node a module is self contained code that performs
// a specific task
// function, object, or any piece of functionality that can be used in other parts of your application



// var a = 10

// iife function 
// self contain funtion

    // (function x(){
    //     var a = 20
    //     console.log(a)
    // })();


// types of module / 3 type of module

//1. internal modules
//2. user-created modules
//3. third party modules


// 1. internal modules
// const http = require('http');

//2. user-created modules
// const add = require('./math');
// console.log(add(10,20))

// output is 30


// 3. Third party modules

// const axios = require('axios');
// axios.get();



// access loggle.js file logger object

// const logger = require('./logger');
// logger.log('Hello World !');



// import add fun
import { add } from "./logger.js";

console.log(add(10,20));
// if you facing error 
// add inside the package.json "type":"module",
// after this get the output
















