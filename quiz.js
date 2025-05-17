const quizQuestions = [
    {
      question: "What is the capital of France?",
      option1: "Berlin",
      option2: "Madrid",
      option3: "Paris",
      option4: "Rome",
      option5: "London",
      correctAnswer:"Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      option1: "Earth",
      option2: "Saturn",
      option3: "Mars",
      option4: "Venus",
      option5: "Jupiter",
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest ocean on Earth?",
      option1: "Indian Ocean",
      option2: "Arctic Ocean",
      option3: "Southern Ocean",
      option4: "Atlantic Ocean",
      option5: "Pacific Ocean",
      correctAnswer: "Pacific Ocean"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      option1: "William Wordsworth",
      option2: "Jane Austen",
      option3: "William Shakespeare",
      option4: "Mark Twain",
      option5: "Charles Dickens",
      correctAnswer: "William Shakespeare"
    },
    {
      question: "What is the boiling point of water at sea level?",
      option1: "90°C",
      option2: "100°F",
      option3: "212°C",
      option4: "100°C",
      option5: "80°C",
      correctAnswer: "100°C"
    },
  {
      question: "What is the capital of France?",
      option1: "Berlin",
      option2: "Madrid",
      option3: "Paris",
      option4: "Rome",
      option5: "London",
      correctAnswer: "Paris"
    },
    {
      question: "What is 2 + 2?",
      option1: "3",
      option2: "4",
      option3: "5",
      option4: "22",
      option5: "2",
      correctAnswer: "4"
    },
    {
      question: "Which is a JavaScript framework?",
      option1: "Django",
      option2: "Flask",
      option3: "React",
      option4: "Laravel",
      option5: "Rails",
      correctAnswer: "React"
    }
  ];
  
  let count = 0;
  let score = 0;
  
  const questionBox = document.getElementById("question");
  const optionsBox = document.getElementById("options");
  const nextBtn = document.getElementById("nextBtn");
  const scoreBox = document.getElementById("score");
  
  function displayQuestion(index) {
    const q = quizQuestions[index];
    questionBox.textContent = q.question;
    optionsBox.innerHTML = "";
  
    for (let i = 1; i <= 5; i++) {
      const optionText = q[`option${i}`];
      const optionBtn = document.createElement("div");
      optionBtn.classList.add("option");
      optionBtn.textContent = optionText;
      optionBtn.addEventListener("click", () => checkAnswer(optionBtn, q.correctAnswer));
      optionsBox.appendChild(optionBtn);
    }
  
    nextBtn.disabled = true;
  }
  
  function checkAnswer(selectedOption, correctAnswer) {
    const allOptions = document.querySelectorAll(".option");
    allOptions.forEach(opt => {
      opt.classList.add(opt.textContent === correctAnswer ? "correct" : "wrong");
      opt.style.pointerEvents = "none";
    });
  
    if (selectedOption.textContent === correctAnswer) {
      score += 1;
    }
  
    scoreBox.textContent = `Score: ${score}`;
    nextBtn.disabled = false;
  }
  
  nextBtn.addEventListener("click", () => {
    count++;
    if (count < quizQuestions.length) {
      displayQuestion(count);
    } else {
      questionBox.textContent = "Quiz Completed!";
      optionsBox.innerHTML = "";
      nextBtn.style.display = "none";
    }
  });
  
  // Start the quiz
  displayQuestion(count);
  
