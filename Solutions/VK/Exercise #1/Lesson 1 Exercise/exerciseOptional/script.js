const questions = [
  { question: "What is 1 + 1 ?", a: "1", b: "3", c: "2", answer: "c" },
  { question: "What is 5 + 4 ?", a: "3", b: "9", c: "4", answer: "b" },
  { question: "What is 7 - 3 ?", a: "4", b: "7", c: "1", answer: "a" },
  { question: "What is 5 - 2 ?", a: "3", b: "4", c: "6", answer: "a" },
  { question: "What is 2 x 3 ?", a: "8", b: "6", c: "3", answer: "b" },
  { question: "What is 3 x 4 ?", a: "6", b: "13", c: "12", answer: "c" },
  { question: "What is 9 : 3 ?", a: "1", b: "3", c: "2", answer: "b" },
];
const score = 0;

for (var i = 0; i <= questions.length; i++) {
  answer = prompt(
    `${questions[i].question} a) ${questions[i].a} b) ${questions[i].b} c) ${questions[i].c}`
  );

  if (answer === questions[i].answer) {
    alert("you are right, the correct answer is: " + questions[i].answer);
    score++;
  } else {
    alert("you are wrong!");
  }
}



// const questions = [
//   { question: "What is 1 + 1 ?", a: "1", b: "3", c: "2", answer: "c" },
//   { question: "What is 5 + 4 ?", a: "3", b: "9", c: "4", answer: "b" },
//   { question: "What is 7 - 3 ?", a: "4", b: "7", c: "1", answer: "a" },
//   { question: "What is 5 - 2 ?", a: "3", b: "4", c: "6", answer: "a" },
//   { question: "What is 2 x 3 ?", a: "8", b: "6", c: "3", answer: "b" },
//   { question: "What is 3 x 4 ?", a: "6", b: "13", c: "12", answer: "c" },
//   { question: "What is 9 : 3 ?", a: "1", b: "3", c: "2", answer: "b" },
// ];
// let score = 0;

// for (let i = 0; i < questions.length; i++) {
//   let answer = prompt(
//     `${questions[i].question} a) ${questions[i].a} b) ${questions[i].b} c) ${questions[i].c}`
//   );

//   if (answer === questions[i].answer) {
//     alert("You are right, the correct answer is: " + questions[i].answer);
//     score++;
//   } else {
//     alert("You are wrong!");
//   }
// }

// alert("Your final score is: " + score);







// for - ში უმჯობესია გქონდეს i < questions.lenght - ზე და არა i <= questions.length-ზე. <= - ის გამოყენება იწვევს წვდომას მასივის
// ბოლო undefined ელემენტზე, ამიტომ ითიშება. 

// score უკეთესია განსაზღვრო let, ან var - ით.  score მუდმივი რიცხვი ვერ იქნება, რადგან შესაძლებელია მიიღო სხვადასხვა შედეგები.  

// კარგი პრაქტიკაა     <script src="./script.js"></script>  განათავსო შემდეგნაირად:  

{/* <body>
    <script src="./script.js"></script>
    </body>  */} 

// head - ში განთავსებული ეს იმპორტი იწვევს სკრიპტის შესრულებას გვერდის სრულად ჩატვირთვამდე. ამიტომ თავის დაზღვევის მიზნით უმჯობესია
// იყოს body - ში (ამ შემთხვევაში)
 