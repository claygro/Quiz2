const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { Text: "shark", correct: false },
      { Text: "whale", correct: true },
      { Text: "girraf", correct: false },
      { Text: "hippo", correct: false },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { Text: "Asia", correct: false },
      { Text: "Artic", correct: false },
      { Text: "Australia", correct: true },
      { Text: "Africa", correct: false },
    ],
  },
  {
    question: "Which is used to find the remainder in Javascript?",
    answers: [
      { Text: "**", correct: false },
      { Text: "%", correct: true },
      { Text: "/", correct: false },
      { Text: "***", correct: false },
    ],
  },
  {
    question: "Which is the largest country however, small continent?",
    answers: [
      { Text: "Nepal", correct: false },
      { Text: "India", correct: false },
      { Text: "Australia", correct: true },
      { Text: "Japan", correct: false },
    ],
  },
  {
    question: "In which country boys do make up?",
    answers: [
      { Text: "Japan", correct: false },
      { Text: "china", correct: false },
      { Text: "South Korea", correct: false },
      { Text: "Japan and South Korea", correct: true },
    ],
  },
  {
    question: "Who is the best hacker in the world?",
    answers: [
      { Text: "Kevin Mitnick", correct: true },
      { Text: "Adrian Lamo", correct: false },
      { Text: "Albert Gonzalez", correct: false },
      { Text: "Jeanson James Ancheta", correct: false },
    ],
  },
  {
    question: "Who is the ceo of facebook?",
    answers: [
      { Text: "Mark Zuckerberg", correct: true },
      { Text: "Adrian Lamo", correct: false },
      { Text: "Steve Jobs", correct: false },
      { Text: "Elon musk", correct: false },
    ],
  },
  {
    question: "Who is the ceo Tesla and Spacex?",
    answers: [
      { Text: "Mark Zuckerberg", correct: false },
      { Text: "Adrian Lamo", correct: false },
      { Text: "Steve Jobs", correct: false },
      { Text: "Elon musk", correct: true },
    ],
  },
  {
    question: "Who is the ceo Apple 🍎?",
    answers: [
      { Text: "Mark Zuckerberg", correct: false },
      { Text: "Adrian Lamo", correct: false },
      { Text: "Steve Jobs", correct: true },
      { Text: "Elon musk", correct: false },
    ],
  },
  {
    question: "Who made a fitst website?",
    answers: [
      { Text: "Mark Zuckerberg", correct: false },
      { Text: " Tim Berners-Lee", correct: true },
      { Text: "Steve Jobs", correct: false },
      { Text: "Elon musk", correct: false },
    ],
  },
  {
    question: "Who the ceo of Microsoft?",
    answers: [
      { Text: "Mark Zuckerberg", correct: false },
      { Text: " Bill gates", correct: false },
      { Text: " Satya Nadella", correct: true },
      { Text: "Elon musk", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.Text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `you scored ${score} out of ${questions.length}:)`;
  nextButton.innerHTML = "play again";
  nextButton.style.display = "block";
}
function handelNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handelNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
