let questions=[
  {
    category: "JavaScript",
    question: "Which keyword is used to declare a variable in JavaScript?",
    choices: ["var", "const", "All of the above"],
    answer: "All of the above"
  },
  {
    category: "HTML",
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    category: "CSS",
    question: "Which property is used to change the text color of an element?",
    choices: ["background-color", "font-color", "color"],
    answer: "color"
  },
  {
    category: "General Knowledge",
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Math",
    question: "What is the value of π (pi) approximately?",
    choices: ["2.14", "3.14", "3.41"],
    answer: "3.14"
  }
];

function getRandomQuestion(questions){
  return questions[Math.floor(Math.random()*questions.length)];
}

function getRandomComputerChoice(choices){
  return choices[Math.floor(Math.random()*choices.length)];
}

function getResults(question,computerChoice){
  if(computerChoice==question.answer){
    return "The computer's choice is correct!";
  }
  else{
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}




