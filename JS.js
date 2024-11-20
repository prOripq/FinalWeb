
  document.addEventListener("DOMContentLoaded", function () {
    const welcomeModal = document.getElementById("welcomeModal");
    const closeModal = document.getElementById("closeModal");
    welcomeModal.style.display = "block";
  
    closeModal.onclick = function () {
      welcomeModal.style.display = "none";
    };
  });
  


  const questions = [
    {
      question: "What is the name of the main character in The Legend of Zelda?",
      options: ["Zelda", "Link", "Mario", "Ghost"],
      correct: 1,
    },
    {
        question: "What year was the first PlayStation released?",
        options: ["1994", "1998", "1990", "2000"],
        correct: 0,
    },
    {
        question: "What is the best-selling video game of all time?",
        options: ["Minecraft", "Tetris", "Grand Theft Auto V", "Fortnite"],
        correct: 0,
    },
    {
      question: "In which game do players compete in the `Battle Bus`?",
      options: ["Fortnite", "Apex Legends", "PUBG", "Overwatch 2"],
      correct: 0,
    },
    {
      question: "What is the name of the main protagonist in `Halo`?",
      options: ["Master Chief", "Cortana", "Arbiter", "Sergeant Johnson"],
      correct: 0,
    },
    {
      question: "Which of these is NOT a Pokémon type?",
      options: ["Fairy", "Dragon", "Shadow", "Psychic"],
      correct: 2,
    },
    {
      question: "With which game `Arcane` is connected?",
      options: ["Counter-Strike 2", "Dota 2", "League of Legends", "Deadlock"],
      correct: 2,
    },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const quiz = document.getElementById('quiz');
    const result = document.getElementById('result');
    result.textContent = ""; // Clear result for the next question

    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        quiz.innerHTML = `
            <div class="question">
                <h2>Question ${currentQuestion + 1}:</h2>
                <p>${q.question}</p>
            </div>
            <div class="options">
                ${q.options.map((option, index) =>
                  `<button onclick="checkAnswer(${index})">${option}</button>`
                ).join('')}
            </div>
        `;
    } else {
        quiz.innerHTML = `
            <h2>🎉 Quiz Complete!</h2>
            <p>You scored ${score}/${questions.length}.</p>
            <button onclick="restartQuiz()">Restart Quiz</button>
        `;
    }
}

function checkAnswer(selected) {
    const correct = questions[currentQuestion].correct;
    const result = document.getElementById('result');
    if (selected === correct) {
        score++;
        result.textContent = "🎉 Correct!";
        result.style.color = "#33cc33";
    } else {
        result.textContent = "❌ Incorrect!";
        result.style.color = "#ff3333";
    }
    currentQuestion++;
    setTimeout(loadQuestion, 1000);
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

// Initial load
loadQuestion();






