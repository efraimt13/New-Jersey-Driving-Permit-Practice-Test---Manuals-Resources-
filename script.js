const questions = [
    { question: "What does a red traffic light mean?", options: ["Stop", "Yield", "Go", "Caution"], answer: "Stop", type: "multiple-choice" },
    { question: "What should you do if you see a stop sign?", options: ["Slow down", "Come to a complete stop", "Honk your horn", "Keep going"], answer: "Come to a complete stop", type: "multiple-choice" },
    { question: "What does a yellow traffic light mean?", options: ["Stop", "Prepare to stop", "Go", "Honk"], answer: "Prepare to stop", type: "multiple-choice" },
    { question: "What is the speed limit in a residential area in New Jersey?", options: ["25 mph", "35 mph", "45 mph", "55 mph"], answer: "25 mph", type: "multiple-choice" },
    { question: "What should you do if an emergency vehicle is approaching with flashing lights?", options: ["Stop where you are", "Speed up to get out of the way", "Pull over to the side of the road", "Ignore it"], answer: "Pull over to the side of the road", type: "multiple-choice" },
    { question: "What does a yield sign mean?", options: ["Stop", "Give right-of-way", "Speed up", "Ignore other vehicles"], answer: "Give right-of-way", type: "multiple-choice" },
    { question: "When should you use your high-beam headlights?", options: ["In heavy traffic", "On an open road at night", "In fog", "During a rainstorm"], answer: "On an open road at night", type: "multiple-choice" },
    { question: "What does a flashing yellow light mean?", options: ["Stop", "Slow down and proceed with caution", "Go", "Yield to traffic"], answer: "Slow down and proceed with caution", type: "multiple-choice" },
    { question: "What is the penalty for driving under the influence in New Jersey?", options: ["Fine", "License suspension", "Jail time", "All of the above"], answer: "All of the above", type: "multiple-choice" },
    { question: "What should you do when approaching a pedestrian at a crosswalk?", options: ["Speed up", "Yield to the pedestrian", "Honk your horn", "Keep driving"], answer: "Yield to the pedestrian", type: "multiple-choice" },
    { question: "How far should you park from a fire hydrant?", options: ["10 feet", "15 feet", "20 feet", "25 feet"], answer: "10 feet", type: "multiple-choice" },
    { question: "What is the correct hand signal for a right turn?", options: ["Left hand up", "Left hand straight", "Right hand straight", "Left hand down"], answer: "Left hand up", type: "multiple-choice" },
    { question: "What is the blood alcohol concentration (BAC) limit for drivers over 21 in New Jersey?", options: ["0.08%", "0.05%", "0.10%", "0.02%"], answer: "0.08%", type: "multiple-choice" },
    { question: "When driving in fog, what lights should you use?", options: ["High beams", "Low beams", "Parking lights", "No lights"], answer: "Low beams", type: "multiple-choice" },
    { question: "What does a double solid yellow line mean?", options: ["No passing allowed", "Passing allowed", "One-way traffic", "Pedestrian crossing"], answer: "No passing allowed", type: "multiple-choice" },
    { question: "At a four-way stop, who has the right of way?", options: ["The first vehicle to arrive", "The vehicle on the left", "The largest vehicle", "The vehicle on the right"], answer: "The first vehicle to arrive", type: "multiple-choice" },
    { question: "What should you do if your vehicle starts to hydroplane?", options: ["Accelerate", "Turn sharply", "Brake hard", "Ease off the gas pedal"], answer: "Ease off the gas pedal", type: "multiple-choice" },
    { question: "What is the minimum following distance you should maintain?", options: ["2 seconds", "3 seconds", "4 seconds", "5 seconds"], answer: "3 seconds", type: "multiple-choice" },
    { question: "What should you do if your brakes fail?", options: ["Shift to a lower gear", "Pump the brakes", "Use the emergency brake", "All of the above"], answer: "All of the above", type: "multiple-choice" },
    { question: "When parallel parking, how far should you be from the curb?", options: ["6 inches", "12 inches", "18 inches", "24 inches"], answer: "6 inches", type: "multiple-choice" },
    { question: "What does a green traffic light mean?", options: ["Stop", "Prepare to stop", "Go", "Honk"], answer: "Go", type: "multiple-choice" },
    { question: "What does a flashing red light mean?", options: ["Stop and proceed when safe", "Slow down", "Yield", "Go immediately"], answer: "Stop and proceed when safe", type: "multiple-choice" },
    { question: "How close can you park to a crosswalk?", options: ["5 feet", "10 feet", "20 feet", "30 feet"], answer: "10 feet", type: "multiple-choice" },
    { question: "What is the speed limit in a school zone?", options: ["15 mph", "20 mph", "25 mph", "30 mph"], answer: "25 mph", type: "multiple-choice" },
    { question: "What should you do when merging onto the highway?", options: ["Stop at the end of the ramp", "Match the speed of traffic", "Honk your horn", "Drive slowly"], answer: "Match the speed of traffic", type: "multiple-choice" },
    { question: "When must you use your headlights?", options: ["From sunset to sunrise", "In the rain", "In fog", "All of the above"], answer: "All of the above", type: "multiple-choice" },
    { question: "What is the penalty for not wearing a seatbelt?", options: ["Fine", "Points on license", "License suspension", "All of the above"], answer: "Fine", type: "multiple-choice" },
    { question: "When is it illegal to pass another vehicle?", options: ["On a hill", "In a tunnel", "At a railroad crossing", "All of the above"], answer: "All of the above", type: "multiple-choice" },
    { question: "What is the purpose of a roundabout?", options: ["Reduce speed", "Eliminate left turns", "Improve traffic flow", "All of the above"], answer: "All of the above", type: "multiple-choice" },
    { question: "When should you yield to pedestrians?", options: ["At a crosswalk", "At an intersection", "When making a turn", "All of the above"], answer: "All of the above", type: "multiple-choice" },
    { question: "What does a diamond-shaped road sign indicate?", options: ["Construction", "Warning", "Speed limit", "No parking"], answer: "Warning", type: "multiple-choice" },
    { question: "What should you do if you are involved in a minor accident?", options: ["Leave the scene", "Exchange information", "Call the police", "All of the above"], answer: "Exchange information", type: "multiple-choice" },
    // Add 68 more questions here in the same format.
];

const maxQuestionsPerTest = 40;
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let shuffledQuestions = [];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const progressBar = document.getElementById("progress");
const resultsEl = document.getElementById("results");
const scoreEl = document.getElementById("score");
const wrongListEl = document.getElementById("wrong-list");
const retryBtn = document.getElementById("retry-btn");

function initializeQuiz() {
    shuffledQuestions = getRandomizedQuestions(questions, maxQuestionsPerTest);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    loadQuestion();
}

function getRandomizedQuestions(questionsArray, count) {
    const randomized = questionsArray.sort(() => Math.random() - 0.5);
    const selectedQuestions = randomized.slice(0, count);
    return selectedQuestions.map(question => {
        return {
            ...question,
            options: question.options.sort(() => Math.random() - 0.5)
        };
    });
}

function loadQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length) {
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        questionEl.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
        answersEl.innerHTML = "";

        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.className = "answer-btn";
            button.onclick = () => checkAnswer(option, currentQuestion);
            answersEl.appendChild(button);
        });

        updateProgressBar();
    } else {
        showResults();
    }
}

function checkAnswer(selectedOption, question) {
    userAnswers.push({
        question: question.question,
        selectedAnswer: selectedOption,
        correctAnswer: question.answer,
        isCorrect: selectedOption === question.answer
    });

    if (selectedOption === question.answer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showResults() {
    document.getElementById("quiz-container").style.display = "none";
    resultsEl.style.display = "block";
    scoreEl.textContent = `You scored ${score} out of ${shuffledQuestions.length}`;
    wrongListEl.innerHTML = "";

    userAnswers.forEach(item => {
        const questionResult = document.createElement("div");
        questionResult.className = "question-result";

        const questionText = document.createElement("p");
        questionText.textContent = item.question;
        questionResult.appendChild(questionText);

        const userAnswer = document.createElement("p");
        userAnswer.textContent = `Your answer: ${item.selectedAnswer}`;
        userAnswer.style.color = item.isCorrect ? "green" : "red";
        questionResult.appendChild(userAnswer);

        if (!item.isCorrect) {
            const correctAnswer = document.createElement("p");
            correctAnswer.textContent = `Correct answer: ${item.correctAnswer}`;
            correctAnswer.style.color = "green";
            questionResult.appendChild(correctAnswer);
        }

        wrongListEl.appendChild(questionResult);
    });
}

function resetQuiz() {
    resultsEl.style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    initializeQuiz();
}

retryBtn.addEventListener("click", resetQuiz);

// Initialize the quiz
initializeQuiz();
