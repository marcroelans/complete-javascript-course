/**********************************
* Variables and data types


var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// single line komment
var $3years = 3;
*/


/**********************************
* Variable mutation and type coercion


var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/


/**********************************
* Basic operators


var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/**********************************
* Operator precedence


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// 2 + 4 + 5 // left-to-right // some other from right-to-left

// More operators
// x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀


// 1
var massJohn = 110; // kg
var massMark = 90; // kg

var heightJohn = 1.95; // meter
var heightMark = 1.86; // meter

// 2
var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiJohn, bmiMark);

// 3
var markHigherBmi = bmiMark > bmiJohn;

// 4
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBmi);
*/

/*****************************
* If / else statements


var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

// 1
var massJohn = 110; // kg
var massMark = 90; // kg

var heightJohn = 1.95; // meter
var heightMark = 1.86; // meter

// 2
var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);

if (bmiMark > bmiJohn) {
  console.log('Mark\'s BMI is highter than John\'s');
} else {
  console.log('John\'s BMI is highter than Mark\'s');
}
*/
