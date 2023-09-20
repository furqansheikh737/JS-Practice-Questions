// if, else if , alert, prompt and oprators practice question...

// 1) Write a program that takes input a name from user & greet the user.

// let username = prompt("Enter your name")
// if(username !== null && username !== ""){
//     alert(`Welcome to ${username} our home `)
// }else{
//     alert("Welcome to guests")
// }

// 2) Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// let cityname = prompt("Enter city name")
// if(cityname === "Karachi"){
//    alert("Welcome to city of lights")
// }else{
//     alert(`welcome to ${cityname}`)
// }

// 3) Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

// let userInput = prompt("Enter a number")

// let number = parseInt(userInput)

// if(isNaN(number) || userInput === ""){
//     number = 5
// }

// document.write(`<h2> Multiplication Table of ${number} </h2>`)
// document.write('<ul>')
// for(var i=1; i<=10; i++){
//   let result = number * i;
//   document.write(`<li> ${number} x ${i} = ${result}</li>`)
// }
// document.write('</ul>')

// 4) Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// let gender = prompt("Enter a gender")
// if(gender === "male"){
//     alert("Good Morning Sir")
// }else if(gender === "female"){
//     alert("Good Morning Ma'am")
// }else{
//     alert("Please enter a gender")
// }

// 5) Write a program to take input color of road traffic signal from the user & show the message according to this table:

// Signal color  Message
// Red           Must Stop
// Yellow        Ready to move
// Green         Move now

// let userInput = prompt("Enter color of road traffic signal")
// if(userInput === "red"){
//     alert("Must Stop")
// }else if(userInput === "yellow"){
//     alert("Ready to move")
// }else if(userInput === "green"){
//     alert("Move now")
// }

// 6) Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// let checkFuel = prompt("Check remaining fuel")

// if(checkFuel <= "0.25litres"){
//     alert("Please refill the fuel in your car")
// }else{
//     alert("No need of extra fuel")
// }

// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// } else {
//   alert("given condition for variable a is false");
// }

// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// } else {
//   alert("given condition for variable b is false");
// }

// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// } if (c === 13){
//     alert("condition 2 is true");
// } if (++c < 14){
//     alert("condition 3 is true");
// } if(c === 14){
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// 7) Write a program to take input the marks obtained inthree subjects & total marks. Compute & show the resultingpercentage on your page. Take percentage & compute grade asper following table:

// let totalmarks = prompt("Enter total marks");
// document.write(`<h3>Total marks : ${totalmarks}</h3>`);

// let eng = prompt("Enter marks of English subject");
// let english = parseInt(eng);
// let math = prompt("Enter marks of Mathematics subject");
// let maths = parseInt(math);
// let phy = prompt("Enter marks of Physics subject");
// let physics = parseInt(phy);
// let allSubjmarks = english + maths + physics;

// document.write(`<h3>Marks Obtained : ${allSubjmarks}</h3>`);

// let percentage = (allSubjmarks * 100) / totalmarks;
// document.write(`<h3>Percentage : ${percentage}%</h3>`);

// if (percentage >= 80) {
//   document.write(`<h3>Grade : A+</h3>`);
//   document.write(`<h3>Remarks : Excellent</h3>`);
// } else if (percentage >= 70) {
//   document.write(`<h3>Grade : A</h3>`);
//   document.write(`<h3>Remarks : Good</h3>`);
// } else if (percentage >= 60) {
//   document.write(`<h3>Grade : B</h3>`);
//   document.write(`<h3>Remarks : You need to improve</h3>`);
// } else if (percentage < 60) {
//   document.write(`<h3>Grade : Fail</h3>`);
//   document.write(`<h3>Remarks : Sorry</h3>`);
// }

// 8) Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// let userInput = prompt("Enter a number");

// let number = parseInt(userInput);
// if(userInput % 3 === 0){
//    alert(`${userInput} is divisible by 3.`)
// }else{
// alert(`${userInput} is not divisible by 3.`)
// }

// 9) Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// let secretNumber = Math.floor(Math.random() * 10) + 1;

// let guessNumber = prompt("Guess the secret number");

// let guess = parseInt(guessNumber);
// if(guess === secretNumber){
//   alert("Bingo! Correct answer")
// }else if(guess === secretNumber +1 || guess === secretNumber -1){
//   alert("Close enough to the correct answer")
// }else{
//     alert("Sorry, incorrect answer. The correct answer was " + secretNumber)
// }

// 10)  Write a program that checks whether the given input is an even number or an odd number.

// function checkEvenOrOdd(number){
//   if(number % 2 === 0){
//       return "Even"
//   }else{
//     return "Odd"
//   }
// }

// let userInput = prompt("Enter a number")

// let number = parseInt(userInput);

// if(isNaN(number)){
//    alert("Invalid input. Please enter a valid number")
// }else{
//     const result = checkEvenOrOdd(number)
//     alert(`${number} is ${result}`)
// }

// 11) Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

// function calculate(firstNumber, secondNumber, operation) {
//   let result;

//   if (operation === "+") {
//     result = firstNumber + secondNumber;
//   } else if (operation === "-") {
//     result = firstNumber - secondNumber;
//   } else if (operation === "*") {
//     result = firstNumber * secondNumber;
//   } else if (operation === "/") {
//     if (secondNumber === 0) {
//       return "Division by zero is not allowed.";
//     }
//     result = firstNumber / secondNumber;
//   } else if (operation === "%") {
//     if (secondNumber === 0) {
//       return "Modulo by zero is not allowed.";
//     }
//     result = firstNumber % secondNumber;
//   } else {
//     return "Invalid operation. Please enter +, -, *, /, or %.";
//   }

//   return result;
// }

// const firstNumber = parseFloat(prompt("Enter the first number:"));
// const secondNumber = parseFloat(prompt("Enter the second number:"));
// const operation = prompt("Enter the operation (+, -, *, /, %):");

// const result = calculate(firstNumber, secondNumber, operation);

// alert(`Result: ${result}`);

// 12) Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// function checkInputType(input){
//    const charCode = input.charCodeAt(0);

//    if(charCode >= 48 && charCode <= 57){
//     return "Number";
//    }else if(charCode >= 65 && charCode <= 90){
//     return "Uppercase Letter";
//    }else if(charCode >= 97 && charCode <= 122){
//     return "Lowercase Letter";
//    }else{
//     return "Other Character"
//    }
// }

// const userInput = prompt("Enter a character (number or letter)");
// const inputType = checkInputType(userInput);
// alert(`Input ${userInput} is ${inputType}`)

// 13)  Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// let number1 = parseInt(prompt("Enter a first number"))
// let number2 = parseInt(prompt("Enter a second number"))

// if(!isNaN(number1) && !isNaN(number2)){
//     if(number1 === number2){
//        alert("Both numbers are same")
//     }else if(number1 > number2){
//       alert(`The larger integer is ${number1}`)
//     }else{
//         alert(`The larger integer is ${number2}`)
//     }
// }

// 14) Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// let userInput = parseFloat(prompt("Enter a number"))

// if(!isNaN(userInput)){
//   if(userInput > 0){
//      alert("The entered number is positive")
//   }else if(userInput < 0){
//     alert("The entered number is negitive")
//  }else if(userInput === 0){
//     alert("The entered number is zero")
//  }
// }else{
//     alert("Invalid input. Please enter a valid input")
// }

// 15)  Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// Function to check if a character is a vowel
// function isVowel(character) {
// Convert the character to lowercase to handle both uppercase and lowercase vowels
// const lowerCaseChar = character.toLowerCase();

// Check if the character is a vowel
//     return ['a', 'e', 'i', 'o', 'u'].includes(lowerCaseChar);
//   }

// Input from the user
//   const userInput = prompt("Enter a character (a single letter):");

// Check if the input character is a vowel
//   if (userInput.length === 1 && /^[a-zA-Z]+$/.test(userInput)) {
//     const result = isVowel(userInput);
//     console.log(`Is "${userInput}" a vowel? ${result}`);
//   } else {
//     console.log("Invalid input. Please enter a single letter.");
//   }

// 16) Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c. Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

// const correctPassword = "Furqan6616";
// const userPassword = prompt("Enter your password:");

// if (userPassword === null || userPassword === "") {
//   alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password.");
// } else {
//   alert("Incorrect password.");
// }

// 17) Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

// let userInput = prompt("Enter a time in 24 hours clock format (e.g., 1900)");

// let time = parseInt(userInput);

// if(time >=0 && time < 600){
//   alert("It's the middle of the night (12:00 AM - 5:59 AM).");
// }else if(time < 1200){
//   alert("It's morning (6:00 AM - 11:59 AM).");
// }else if(time < 1800){
//   alert("It's afternoon (12:00 PM - 5:59 PM).");
// }else if(time <= 2359){
//   alert("It's evening (6:00 PM - 11:59 PM).");
// }else{
//   alert("Invalid input. Please enter a valid time in 24-hour format.");
// }

// Arrays...

//  1)  Declare an empty array using JS literal notation to store student names in future.

// const studentName = []

// 2) Declare and initialize a strings array.

// const fruitName = ["Apple", "Mango", "Banana", "Graphs"]

// 3) Declare and initialize a numbers array.

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// 4) Declare and initialize a boolean array.

// const boolean = [true, false,true,false]

// 5) Declare and initialize a mixed array.
// const mixArr = [1,"furqan", true, "burhan", 3, 5, false]

// 6) Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// document.write("<h1>Qualifications</h1>")

// const qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD']
// document.write("<ul>")
// for(let i=1; i<qualification.length; i++){
// document.write(`<li>${qualification[i]}</li>`)
// }
// document.write("</ul>")

// 7) Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// const studentNames = ["Hamza", "Waqar", "Furqan"];

// const studentScores = [320, 230, 480];

// const totalNum = 500;

// for (let i = 0; i < studentNames.length; i++) {
//   const names = studentNames[i];
//   const score = studentScores[i];
//   const percentage = (score * 100) / totalNum;

//   document.write(`Score of ${names}  is ${score}. Percentage: ${percentage}% <br>`);
// }

// 8)  Initialize an array with color names. Display the array elements in your browser. a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. c. Add two more color to the beginning of the array. Display the updated array in your browser. d. Delete the first color in the array. Display the updated array in your browser. e. Delete the last color in the array. Display the updated array in your browser. f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then 

const colorNames = ["Black", "White", "Orange", "Blue", "Green",];

// let AddColorInBeginning = prompt("Add a color in beginnig");
// colorNames.unshift(AddColorInBeginning);
// alert(colorNames);

// let AddColorInEnd = prompt("Add a color in end");
// colorNames.push(AddColorInEnd);
// alert(colorNames);

// AddColorInBeginning = prompt("Add a color in beginnig");
// colorNames.unshift(AddColorInBeginning);
// alert(colorNames);

// AddColorInBeginning = prompt("Add a color in beginnig");
// colorNames.unshift(AddColorInBeginning);
// alert(colorNames);

// let deleteColorInBeginning = prompt("Delete a color in beginnig");
// colorNames.shift(deleteColorInBeginning);
// alert(colorNames);

// let deleteColorInEnd = prompt("Delete a color in end");
// colorNames.pop(deleteColorInEnd);
// alert(colorNames);

// 10) Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method

// let studentsScores = [340, 280, 450, 830, 110, 360]

// studentsScores.sort(function(a,b){
//     return a-b
// })

// alert(studentsScores)

// 11) Write a program to store student scores in an array & sort the array in deascending order using Array’s sort method

// let studentsScores = [340, 280, 450, 830, 110, 360]

// studentsScores.sort(function(a,b){
//     return b-a
// })

// alert(studentsScores)

// 12) Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array

// let cities = ['karachi', 'Lahore', 'Quetta', 'Islamabad', 'Mari', 'Peshawar']

// let selectedCities = []

// for(let i=0; i<3 && i<cities.length; i++){
//     selectedCities.push(cities[i])
// }
// document.write("<h1>Cities List:</h1><br>")
// document.write(`<h3>${cities}</h3><br><br>`)
// document.write("<h1>selected cities List:</h1><br>")
// document.write(`<h3>${selectedCities}</h3>`)

// 13) Write a program to create a single string from the below mentioned array: 
// arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method)

// let arr = ['This',' is',' my',' cat'];
// let arrstring = arr.join('')

// document.write("<h3>Array:</h3><br>")
// document.write(`${arr}<br>`)
// document.write("<h3>String:</h3><br>")
// document.write(arrstring)

// 14)  Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) 


// const arr = []

// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer");
// arr.push("Monitor");

// const firstRemove = arr.shift()
// const secondRemove = arr.shift()
// const thirdRemove = arr.shift()
// const fourthRemove = arr.shift()

// document.write("Devices: <br>");
// document.write(`${arr} <br>`);
// document.write("out: <br>")
// document.write(`${firstRemove} <br>`)
// document.write("out: <br>")
// document.write(`${secondRemove} <br>`)
// document.write("out: <br>")
// document.write(`${thirdRemove} <br>`)
// document.write("out: <br>")
// document.write(`${fourthRemove} <br>`)

// 15)  Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out) 

// const arr = []

// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer");
// arr.push("Monitor");

// const firstRemove = arr.pop()
// const secondRemove = arr.pop()
// const thirdRemove = arr.pop()
// const fourthRemove = arr.pop()


// document.write("Devices: <br>");
// document.write(`${arr} <br>`);
// document.write("out: <br>")
// document.write(`${firstRemove} <br>`)
// document.write("out: <br>")
// document.write(`${secondRemove} <br>`)
// document.write("out: <br>")
// document.write(`${thirdRemove} <br>`)
// document.write("out: <br>")
// document.write(`${fourthRemove} <br>`)

// 16) You can create a dropdown/select menu in your browser using the document.write() method in JavaScript. Here's a program that stores phone manufacturers in an array and displays a dropdown/select menu:

// Array of phone manufacturers
//const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Start building the HTML for the dropdown/select menu
//let selectHTML = '<select>';

// Iterate through the manufacturers array to create options
//for (let i = 0; i < manufacturers.length; i++) {
//  selectHTML += `<option>${manufacturers[i]}</option>`;
//}

// Close the select element
//selectHTML += '</select>';

// Use document.write() to display the dropdown/select menu
//document.write(selectHTML);
