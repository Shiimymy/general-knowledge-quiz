
// Get username to display in quizz.html

document.addEventListener("DOMContentLoaded", function getUsername() {

    let urlParams = new URLSearchParams(document.location.search);
    let username = urlParams.get("username");
    localStorage.setItem("username", username);
    document.getElementById("username-area").textContent = username.toUpperCase();
    document.getElementById("username-final").textContent = username;
});

// Game description when icon hovered

let icon = document.getElementById('icon');
let description = document.getElementById('description');
description.style.display= "none";


function showDescription() {
    description.style.display = "";
    description.style.fontSize = "13px";
    description.style.letterSpacing = "1px";
    description.style.margin = "auto";
}
icon.addEventListener("mouseenter", showDescription);

function hideDescription() {
    description.style.display = "none";
    
}
icon.addEventListener("mouseleave", hideDescription);

// Quizz question List in an array of objects.

let questionsList = [
    {
        subjects: "History",
        question: "What was the name of the first person to circumnavigate the globe?",
        answers: [
            { text: "Christopher Columbus", isCorrect: false },
            { text: "Ferdinand Magellan", isCorrect: true },
            { text: "Marco Polo", isCorrect: false }],
        correct : "Ferdinand Magellan",

    },
    {
        subjects: "History",
        question: "What was the name of the dynasty that ruled China from 1368 to 1644?",
        answers: [
            { text: "Tang dynasty", isCorrect: false },
            { text: "Qing dynasty", isCorrect: false },
            { text: "Ming Dynasty", isCorrect: true }
        ],
        correct : "Ming Dynasty",
    },
    {
        subjects: "Geography",
        question: "What is the largest country in Africa?",
        answers: [
            { text: "Algeria", isCorrect: true },
            { text: "The Democratic Republic of the Congo", isCorrect: false },
            { text: "Madagascar", isCorrect: false }],
            correct : "Algeria",
    },
    {
        subjects: "Geography",
        question: "What is the capital of Lithuania?",
        answers: [
            { text: "Riga", isCorrect: false },
            { text: "Vilnius", isCorrect: true },
            { text: "Tallinn", isCorrect: false }],
            correct : "Vilnius",
    },
    {
        subjects: "Geopolitics",
        question: "What is the name of the organization that aims to promote economic cooperation among countries?",
        answers: [
            { text: "The World Intellectual Property Organization", isCorrect: false },
            { text: "The Central Banks", isCorrect: false },
            { text: "The World Trade Organization", isCorrect: true }],
            correct : "The World Trade Organization",
    },
    {
        subjects: "Geopolitics",
        question: "Originally, which one of the following countries is not a member of the BRICS? ",
        answers: [
            { text: "Russia", isCorrect: false },
            { text: "Brazil", isCorrect: false },
            { text: "Canada", isCorrect: true }],
        correct : "Canada",
    },
    {
        subjects: "Economy",
        question: "What is called a situation in which a single company or group owns all or nearly all of the market for a given type of product or service?",
        answers: [
            { text: "A monopoly", isCorrect: true },
            { text: "A monopsony", isCorrect: false },
            { text: "A oligopoly", isCorrect: false }],
        correct : "A monopoly",
    },
    {
        subjects: "Economy",
        question: "What is inflation?",
        answers: [
            { text: "The rate at which the general level of prices for goods and services is rising and, subsequently, purchasing power is falling.", isCorrect: true },
            { text: "It refers to the total expenditure a firm incurs when utilizing economic resources to produce goods and services.", isCorrect: false },
            { text: "It is the limited availability of resources for human consumption.", isCorrect: false }],
        correct : "The rate at which the general level of prices for goods and services is rising and, subsequently, purchasing power is falling.",
    },
    {
        subjects: "Nature",
        question: "What is the largest mammal on Earth?",
        answers: [
            { text: "The Elephant", isCorrect: false },
            { text: "The Hippopotamus", isCorrect: false },
            { text: "The Blue whale", isCorrect: true }],
        correct : "The Blue whale",
    },
    {
        subjects: "Nature",
        question: "What is the name of the largest desert in Asia?",
        answers: [
            { text: "The Central Asia Desert", isCorrect: false },
            { text: "The Sahara Desert", isCorrect: false },
            { text: "The Gobi Desert", isCorrect: true }],
        correct : "The Gobi Desert",
    },
    {
        subjects: "English",
        question: "What is the definition of 'plethora'?",
        answers: [
            { text: "The use of unnecessary words to express an idea.", isCorrect: false },
            { text: "A large or excessive amount of something.", isCorrect: true },
            { text: "The state of being without or not having enough of something.", isCorrect: false }],
        correct : "A large or excessive amount of something.",
    },
    {
        subjects: "English",
        question: "Who wrote “Pride and Prejudice”?",
        answers: [
            { text: "Charlotte Brontë", isCorrect: false },
            { text: "Jane Austen", isCorrect: true },
            { text: "Agatha Christie", isCorrect: false }],
        correct : "Jane Austen",
    },
    {
        subjects: "Psychology",
        question: "What is 'Bandwagon pressuring?",
        answers: [
            { text: "A type of advertising technique that aims to convince people to do something because everyone else is doing it.", isCorrect: true },
            { text: "A technique which involves using words that sound impressive but don’t actually mean anything.", isCorrect: false },
            { text: "A technique that involves using celebrities or other well-known figures to promote a product or service.", isCorrect: false }],
        correct : "A type of advertising technique that aims to convince people to do something because everyone else is doing it.",
    },
    {
        subjects: "Psychology",
        question: "What is not a branche of psychology?",
        answers: [
            { text: "American Psychology", isCorrect: true },
            { text: "Developmental psychology", isCorrect: false },
            { text: "Social psychology", isCorrect: false }],
        correct : "American Psychology",
    },

];

// Variables 

let subject = document.getElementById('subject');
let questions = document.getElementById('question');
let options = document.getElementById('options');
let radios = document.getElementsByClassName("radio");
let submit = document.getElementById('submit');
let next = document.getElementById('next');
let chosenQuestion = [];

/**
 * Display a new question in the DOM
 * and its answers options,
 * then with a loop check the "correct" value
 * and send it to the local Storage.
 */


function displayQuestions() {

    //Hide end message.
    document.getElementById("end-message").style.display = "none";
    document.getElementById("answer-feedback").style.display = "none";
    localStorage.correct = "null";

    let result = getRandomQuestions(questionsList);

    subject.innerHTML = result.subjects;
    questions.innerHTML = result.question;
    options.innerHTML = `
       <li> 
          <input type="radio" name="answer" id="answer-1" class="radio" value="${result.answers[0].isCorrect}" required>
          <label for"answer-1">${result.answers[0].text}</label>
       </li>
       <li>
          <input type="radio" name="answer" id="answer-2" class="radio" value="${result.answers[1].isCorrect}">
          <label for"answer-2">${result.answers[1].text}</label>
       </li>
       <li>
          <input type="radio" name="answer" id="answer-3" class="radio" value="${result.answers[2].isCorrect}">
          <label for"answer-3">${result.answers[2].text}</label>
       </li>
    `;

    for (var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function () {
            localStorage.setItem('correct', this.value);
            localStorage.setItem("correctAnswer", result.correct);
            submit.addEventListener("click", displayNextQuestion);

        };
    }
}
displayQuestions();

// Get a random question from the question list array

function getRandomQuestions() {

    let randomIndex = Math.floor(Math.random() * questionsList.length);
    var randomQuestion = questionsList[randomIndex];
    questionsList.splice(randomIndex, 1);
    chosenQuestion.push(randomQuestion);

    return randomQuestion;
}

/**
 * Get the value from local storage, 
 * Get the current score from the DOM and increments it by 1 if true, 
 * Then display if answer is Right or Wrong with the button Next Question.
 */

function displayNextQuestion(event) {
    event.preventDefault();
    let theAnswer = document.getElementById('theAnswer');
    if (localStorage.correct == "true") {
        document.getElementById("answer-feedback").style.display = "";
        document.getElementById("submit").style.display = "none";
        theAnswer.innerHTML = "Right Answer!";
        document.getElementById("theAnswer").style.color = "green";
        document.getElementById("theAnswer").style.fontWeight = "700";
        addToScore();

    } else if (localStorage.correct == "null") { 
        alert("Please select an answer");
    } else {
        document.getElementById("answer-feedback").style.display = "";
        document.getElementById("submit").style.display = "none";
        theAnswer.innerHTML = `
        Wrong Answer!
        The correct answer is : ${localStorage.correctAnswer}
        `;
        document.getElementById("theAnswer").style.color = "red";
        document.getElementById("theAnswer").style.fontWeight = "700";
    }
    next.addEventListener("click", getAnswers);
}

function addToScore() {
    let points = parseInt(document.getElementById("points").innerText);
    document.getElementById("points").innerText = ++points;
};

/**
 * Check the answer number in the DOM,
 * then return the appropriate function
 */

function getAnswers() {
    let questionNumber = parseInt(document.getElementById("questionNumber").innerText);
    document.getElementById("questionNumber").innerText = ++questionNumber;
    if (questionNumber != "8") {
        displayQuestions();
        document.getElementById("submit").style.display = "";

    } else {
        let result = document.getElementById("points").innerHTML;
        localStorage.setItem('result', result);
        displayFeedback();
    }

}

/**
 * Display feedback in the end message,
 * and check the score to show the appropriate one.
 */

function displayFeedback() {
    document.getElementById("quizz-area").style.display = "none";
    document.getElementById("answer-feedback").style.display = "none";
    document.getElementById("end-message").style.display = "";

    let score = document.getElementById("points").innerHTML;
    let feedback = document.getElementById("feedback");

    if (score < 4) {
        feedback.innerHTML =
            ` <p>You will do better next time...</p>
        <img src="assets/images/bad.jpg" alt="disappointed woman">
        `;
    } else if (score < 7) {
        feedback.innerHTML =
            `<p>You did well.</p>
        <img src="assets/images/good.jpg" alt="thumb up">
        `;
    } else {
        feedback.innerHTML =
            `<p>You did great !</p>
        <img src="assets/images/congrats.jpg" alt="graduation hat flying in the air">
        `;
    }
};

function restartGame() {
    window.location.href = `quizz.html?username=${localStorage.username}`;
}

function exitGame() {
    window.location.href = `index.html`;
}





