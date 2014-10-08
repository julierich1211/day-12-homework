// use EACH the iteration methods discussed in class today 
// (for loop, Array.forEach, custom forEach) for EACH of the following problems:
// 1. calculate the sum of numbers (can be any number of arguments)
// 2. calculate the average of numbers
// 3. find the largest number of the inputs
// 4. find the longest string of the inputs
// 5. given an array of Date() objects (Oct 4th 2014, Oct 3rd 2014, Sept 30th 2014, Sept 1st 2012, March 13th 2010),
// // in that order, sort them chronologically. 
// //Use http://devdocs.io/javascript/global_objects/date for reference on creating Date() objects with a specific date.


function sumOf2(a, b) {
    "use strict";
    return a + b;
}
console.log(sumOf2(890, 987));

function sumLoop() {
    "use strict"
    var arg = Array.prototype.slice.apply(arguments, []);
    var sum = 0
    for (var x = 0; x < arg.length; x++) {
        sum += arg[x];
    }
    return sum;
}
console.log(sumLoop(2, 4, 6, 7, 8, 5, 4));


function sumLoopAv() {
    "use strict"
    var arg = Array.prototype.slice.apply(arguments, []);
    var sum = 0
    for (var x = 0; x < arg.length; x++) {
        sum += arg[x];
    }
    return (sum / arg.length);
}
console.log(sumLoopAv(2, 4, 6, 7, 8, 5, 4));


function getMaxOfArguments() {
    var par = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];
    return Math.max.apply(null, par);
}
console.log(getMaxOfArguments(1, 3, 9));


//function longest(a) {
//  var a = ["str1", "str2", "str3", "str4"];

//function forEach(a, callback) {
//  for (var i = 0; i < a.length; i++) {
//    callback(a[i], i);
//}

// }
//  Array.prototype.forEach = (callback) {
//     for (var i = 0; i < this.length; i++) {
//         callback(a[i], i);
//     }
//  }


//  return current.length >= longest.length ? current : longest;
//}
//console.log(longest_substring('iillooovvvveeejjjjaaavvvvvaaaa'));


function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

function sortDateForLoop(dates) {
    var newArray = [],
        earliestDate;
    for (var i = 0; i < dates.length; i++) {
        earliestDate = dates[j];
        // find lowest date and swap it with date
        for (var j = i + 1; j < dates.length; j++) {

            if (+dates[j] < +earliestDate) {
                earliestDate = dates[j];
                var temp = earliestDate;
                earliestDate = dates[j];
                dates[j] = temp;

            }

        }

    }
}


function sortDateForEach(dates) {
    dates.forEach(sortDateForLoop)

}

function sortDateCustomForEach(dates) {
    forEach(dates, sortDateForLoop)
}

//setup
var dates = [
    new Date(2014, 9, 4),
    new Date(2014, 9, 3),
    new Date(2014, 8, 29),
    new Date(2012, 9, 1),
    new Date(2010, 2, 13)
];

console.log(dates);
sortDateForLoop(dates);
sortDateForEach(dates);
sortDateCustomForEach(dates);
