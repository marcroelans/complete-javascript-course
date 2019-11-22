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


/*****************************
* Boolean logic

var firstName = 'John';
var age = 16;

if(age < 13) {
  console.log(firstName + ' is a boy.');
} else if(age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
*/


/*****************************
* The Ternary Operator and Switch Statements


var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.'): console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// example
/* if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designes beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 10;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/*****************************
* Truthy and Falsy values and equality operators


// flasy values: undefined, null, 0, '', NaN // turn out to be falls on if else {
// truthly values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
  console.log('The == operator does type coercion!');
}
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀


var scoreTeameJohn = (89 + 120 + 103) / 3;
var scoreTeameMike = (116 + 94 + 123) / 3;
var scoreTeamMary = (97 + 134 + 105) / 3;
console.log(scoreTeameJohn, scoreTeameMike, scoreTeamMary);

if (scoreTeameJohn > scoreTeameMike && scoreTeameJohn > scoreTeamMary) {
    console.log('John\'s team wins with ' + scoreTeameJohn + ' points');
} else if (scoreTeameJohn < scoreTeameMike && scoreTeamMary < scoreTeameMike) {
    console.log('Maik\'s team wins with ' + scoreTeameMike + ' points');
} else if (scoreTeamMary > scoreTeameMike && scoreTeamMary > scoreTeameJohn) {
    console.log('Mary\'s team wins with ' + scoreTeamMary + ' points');
} else {
    console.log('There is a draw');
}
*/


/*****************************
* Functions


function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMaik = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMaik, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/


/*****************************
* Function Statemetns and Expressions


// Function declaration
// function whatDoYouDo() {}

// Function expression
var whatDoYouDo = funciton(job, fistName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cap in lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Mark'));
console.log(whatDoYouDo('designer', 'Jane'));
*/

/*****************************
* Arrays

// Initialize new array
var names = ['John', '', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
*/

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀


// Marcs way
var tips = [20, 15, 10]; // soll fix sein werte direkt in die funktion schreiben

var tipCalc = function(bill) { // wird jedes mal returnt, sauberer mit if else und variablen mutation
    switch(true) {
        case bill < 50:
            return bill * tips[0]/100;
        case bill >= 50 && bill <= 200:
            return bill * tips[1]/100;
        default:
            return bill * tips[2]/100;
    }
}

var bills = [124, 48, 268];
var paidTip = [tipCalc(bills[0]),
                tipCalc(bills[1]),
                tipCalc(bills[2])];

var finalPaid = [bills[0] + paidTip[0],
                 bills[1] + paidTip[1],
                 bills[2] + paidTip[2]];

console.log(paidTip);
console.log(finalPaid);


// Teachers way
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = 20/100;
    } else if (bill >= 50 && bill < 200) {
        percentage = 15/100;
    } else {
        percentage = 10/100;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips);
console.log(finalValues);
*/

/*****************************
* Objects and properties
*/
/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', '', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/


/*****************************
* Objects and Mehtods

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', '', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where  and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/*
var John = {
  fullName: 'John Smith',
  mass: 110,
  height: 1.95,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
}

var Mark = {
  fullName: 'Mark Miller',
  mass: 90,
  height: 1.86,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
}
John.calcBMI();
Mark.calcBMI();

if (John.BMI > Mark.BMI) {
    console.log(John.fullName + ' has a higher BMI of ' + John.BMI);
} else if (Mark.BMI > John.BMI) {
    console.log(Mark.fullName + ' has a higher BMI of ' + Mark.BMI);
} else {
  console.log('They have the same BMI');
}
*/

/*****************************
* loops and iteration
*/

/*
// for loop
for (i = 1; i <= 20; i++) {
  console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 ture, log i to the console, i++
//...
// i = 9, 9 < 10 ture, log i to the console, i++
// i = 10, 10 < 10 false, exit the loop!

var john = ['John', 'Smith', 1990, 'designer', false]

for (i = 0; i < john.length; i++) {
  console.log(john[i]);
}


// while loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}


// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue']

for (i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

for (i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}


// loop backwards
for (i = john.length; i >= 0; i--) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}
*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀


// Marcs way
var john = {
  name: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for(var i = 0; i < this.bills.length; i++) {
      // Determine percentage on tipping rules
      var percentage;
      var bill = this.bills[i];

      if(bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }

      // Add result to the corresponing arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

var mark = {
  name: 'Mark Miller',
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for(var i = 0; i < this.bills.length; i++) {
      // Determine percentage on tipping rules
      var percentage;
      var bill = this.bills[i];

      if(bill < 100) {
        percentage = .2;
      } else if (bill >= 100 && bill < 300) {
        percentage = .1;
      } else {
        percentage = .25;
      }

      // Add result to the corresponing arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

function calcAverage(tips) {
  var sum = 0;
  for(var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

// Do all the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if(john.average > mark.average) {
  console.log(john.name + '\'s family pays higher tips with an average of $' + john.average);
} else if (john.average < mark.average) {
  console.log(mark.name + '\'s family pays higher tips with an average of $' + mark.average);
}
*/
