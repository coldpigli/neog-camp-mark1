//Intial Setup for using readLineSync and Chalk

const readLineSync  = require('readline-sync');
const chalk = require('chalk');


//global variable for score
let userScore = 0;


//Set-up the question Bank
const questionList = [{
  question: "What is my Full Name?",
  answer: "Piyush Kumar Das"
},
{
  question: "Do you know which school i went to?",
  answer: "Delhi Public School"
},
{
  question: "Do you know where i Work?",
  answer: "TCS"
},{
  question: "What was my first Programming Language?",
  answer: "C++"
},{
  question: "Why is my pet dog's name?",
  answer: "Snoopy"
}
];

//Set-up for the High-Score List
let highScores = [
  {
    name: "Piyush",
    score: 5
  },
  {
    name: "Arushi",
    score: 5
  }
];

//function to display welcome screen
const initalRender = () => {
  console.log(chalk.yellow.bold.underline("Hi User! Welcome to the gate of neogcamp"));
  console.log(chalk.red.bold.underline("You need to enter your name to continue"));
  console.log("####################################################");
  const userName = readLineSync.question("Enter your name ");
  console.log(chalk.magenta.bold("Hello " + userName + "! Answer the following questions to check if you know the creator of this app"));
  console.log("####################################################");
}

//function to start the game
const startGame = () => {
  for(let i = 0; i<questionList.length; i++){
  eachQuestion(i+1,questionList[i].question, questionList[i].answer);
}
}

//function to display each question and maintain count of correct answers
const eachQuestion = (id,question,answer) => {
  console.log("Question Number " + id);
  const userAnswer = readLineSync.question(question+ " ");
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green.bold("Correct Answer"));
    userScore++;
    console.log(chalk.blue.underline("Current Score " + userScore))

  }
  else{
    console.log(chalk.red.bold("That isn't correct. You seem to be an IMPOSTOR!!"));
    console.log(chalk.blue.underline("Current Score " + userScore));
  }
}


//function to display final score and high score
const displayScores = () => {
  console.log(chalk.cyanBright.underline("Your Final Score Was " + userScore));
  console.log("Checkout the High Scores");
  highScores.map((highScore)=>{console.log(highScore.name + " X " + highScore.score)});
}


initalRender();
startGame();
displayScores();