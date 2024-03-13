## 1 Exercise #1: FizzBuzz Function

Objective:
Write a JavaScript function that prints numbers from 1 to 100, but for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

Instructions:

Function Definition:

Define a function named fizzBuzz that takes no parameters.
Loop Through Numbers:

Use a loop to iterate through numbers from 1 to 100.
Conditional Logic:

Inside the loop, write conditional statements to determine what to output:
If the number is divisible by both 3 and 5, console log "FizzBuzz".
If the number is only divisible by 3, console log "Fizz".
If the number is only divisible by 5, console log "Buzz".
If none of the above conditions are true, console log the number itself.
Function Invocation:

After defining the function, call fizzBuzz() to execute.
Validation:

Ensure your function outputs the correct value at each iteration.
Extra Challenge (Optional):

Instead of using console.log, save the results to an array and return it at the end of the function. Print the array to the console after the function call.
Testing:
After completing the fizzBuzz function, run it and check the console to ensure the output meets the exercise requirements.

Reflection:

Write a brief explanation of how you approached the exercise.
Discuss any challenges you faced and how you resolved them.
Explain the logic behind conditional statements and how JavaScript evaluates them.
Resources:

JavaScript arithmetic operators: MDN Web Docs - Arithmetic operators
JavaScript functions: MDN Web Docs - Functions
JavaScript console.log(): MDN Web Docs - console.log() 

## Exercise #2: Factorial Calculator in JavaScript

Objective:
Write a JavaScript function named factorialCalculator that calculates the factorial of a number provided as an argument. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. It's represented as n! and is defined as n! = n * (n-1) * (n-2) * ... * 1.

Instructions:

Define a function named factorialCalculator that takes one argument, number.

Ensure that the function checks if the number is an integer greater than or equal to 0. If not, the function should return a message indicating that the input is invalid.

If the input is valid, calculate the factorial using a loop or recursion.

The function should return the calculated factorial.

Display the result in a console log, along with the calculation process, for example: 

"5! => 1*2*3*4*5 = 120"
 
Test your function with various numbers, including edge cases like 0 and 1.

Example Code: 

function factorialCalculator(number) {
  // Your code here
}

Testing:
Make sure to test the function with various test cases:

factorialCalculator(5) should return 120.
factorialCalculator(0) should return 1, since the factorial of 0 is defined as 1.
factorialCalculator(1) should also return 1, as the factorial of 1 is 1.
Test with negative numbers and non-integer values to ensure the function handles invalid input gracefully. 
console.log(`5! => ${factorialCalculator(5)}`); 

Bonus Challenge:
As a bonus, try to implement the function recursively and compare the recursive approach to the iterative approach. 


## Exercise #3: Capitalize First Letter

Objective:
Write a JavaScript function named capitalizeFirstLetter that takes a string as an argument and returns the string with its first letter capitalized.

Instructions:

Define a function named capitalizeFirstLetter that accepts one argument, string.

The function should first check if the input is a string and not empty. If it's not a string or it's empty, return an appropriate message indicating the error.

If the input is valid, the function should capitalize the first letter of the string.

Return the modified string where only the first letter is capitalized.

Test the function with various strings to ensure it works correctly. 

Testing:
Test the function with:

Normal strings like 'hello' -> 'Hello'
Empty strings and non-string inputs
Strings with different cases and special characters
Bonus Challenge:
Extend the function to capitalize the first letter of each word in a string. 

## Optional Exercise 

Objective:
Develop a simple JavaScript console-based quiz game that tests the user on basic JavaScript concepts.

Requirements:

Quiz Questions: Create an array of objects, where each object represents a quiz question, its options, and the correct answer.

User Interaction: Use prompt() to display questions and capture user input, and alert() to provide feedback.

Score Tracking: Keep track of the user's score throughout the quiz.

Results: At the end of the quiz, display the user's total score and correct answers.

Instructions:

Set Up Your Environment:

Create an index.html file and link a script.js file to it.
Ensure your browser's console is open to run the quiz.
Write the Quiz Logic:

In script.js, create an array to store your questions, each with options and the correct answer.
Loop through each question and use prompt() to show each one with its options to the user.
Capture the user's answer and compare it to the correct answer, incrementing the score if correct.
Use alert() to give immediate feedback after each question.
Display the Results:

After the last question, display the user's total score and any corrections if necessary using alert().
Test the Quiz:

Open index.html in your browser and play through the quiz.
Ensure the prompts, scoring, and feedback alerts are functioning as expected.
Reflection:

Reflect on how creating this quiz helped to reinforce your understanding of JavaScript fundamentals. 

Example Question Object:

## javascript 
 {
  question: "What does 'var' stand for in JavaScript?",
  a: "Variant",
  b: "Variable",
  c: "Variety",
  d: "None of the above",
  answer: "b"
}
 

 Submission:
Submit your index.html and script.js files, along with any additional reflections or questions you have about the exercise. 