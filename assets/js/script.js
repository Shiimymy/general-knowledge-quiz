
// Get username to display in quizz.html

document.addEventListener("DOMContentLoaded", function getUsername() {

    let urlParams = new URLSearchParams(document.location.search);
    let username = urlParams.get("username");
    console.log(username);
    document.getElementById("username-area").textContent = username.toUpperCase();

});

// Quizz question List in an array of objects.

let questionsList = [
    {
        subjects: "History",
        question: "What was the name of the first person to circumnavigate the globe?",
        answers: [
            { text: "Christopher Columbus", isCorrect: false },
            { text: "Ferdinand Magellan", isCorrect: true },
            { text: "Marco Polo", isCorrect: false }]

    },
    {
        subjects: "History",
        question: "What was the name of the dynasty that ruled China from 1368 to 1644?",
        answers: [
            { text: "Tang dynasty", isCorrect: false },
            { text: "Qing dynasty", isCorrect: false },
            { text: "Ming Dynasty", isCorrect: true }
        ]
    },
    {
        subjects: "Geography",
        question: "What is the largest country in Africa?",
        answers: [
            { text: "Algeria", isCorrect: true },
            { text: "The Democratic Republic of the Congo", isCorrect: false },
            { text: "Madagascar", isCorrect: false }]
    },
    {
        subjects: "Geography",
        question: "What is the capital of Lithuania?",
        answers: [
            { text: "Riga", isCorrect: false },
            { text: "Vilnius", isCorrect: true },
            { text: "Tallinn", isCorrect: false }]
    },
    {
        subjects: "Geopolitics",
        question: "What is the name of the organization that aims to promote economic cooperation among countries?",
        answers: [
            { text: "The World Intellectual Property Organization", isCorrect: false },
            { text: "The Central Banks", isCorrect: false },
            { text: "The World Trade Organization", isCorrect: true }]
    },
    {
        subjects: "Geopolitics",
        question: "Originally, which one of the following countries is not a member of the BRICS? ",
        answers: [
            { text: "Russia", isCorrect: false },
            { text: "Brazil", isCorrect: false },
            { text: "Canada", isCorrect: true }]
    },
    {
        subjects: "Economy",
        question: "What is called a situation in which a single company or group owns all or nearly all of the market for a given type of product or service?",
        answers: [
            { text: "A monopoly", isCorrect: true },
            { text: "A monopsony", isCorrect: false },
            { text: "A oligopoly", isCorrect: false }]
    },
    {
        subjects: "Economy",
        question: "What is inflation?",
        answers: [
            { text: "The rate at which the general level of prices for goods and services is rising and, subsequently, purchasing power is falling.", isCorrect: true },
            { text: "It refers to the total expenditure a firm incurs when utilizing economic resources to produce goods and services.", isCorrect: false },
            { text: "It is the limited availability of resources for human consumption.", isCorrect: false }]
    },
    {
        subjects: "Nature",
        question: "What is the largest mammal on Earth?",
        answers: [
            { text: "The Elephant", isCorrect: false },
            { text: "The Hippopotamus", isCorrect: false },
            { text: "The Blue whale", isCorrect: true }]
    },
    {
        subjects: "Nature",
        question: "What is the name of the largest desert in Asia?",
        answers: [
            { text: "Central Asia Desert", isCorrect: false },
            { text: "Sahara Desert", isCorrect: false },
            { text: "Gobi Desert", isCorrect: true }]
    },
    {
        subjects: "English",
        question: "What is the definition of 'plethora'?",
        answers: [
            { text: "The use of unnecessary words to express an idea.", isCorrect: false },
            { text: "A large or excessive amount of something.", isCorrect: true },
            { text: "The state of being without or not having enough of something.", isCorrect: false }]
    },
    {
        subjects: "English",
        question: "Who wrote “Pride and Prejudice”?",
        answers: [
            { text: "Charlotte Brontë", isCorrect: false },
            { text: "Jane Austen", isCorrect: true },
            { text: "Agatha Christie", isCorrect: false }]
    },
    {
        subjects: "Psychology",
        question: "What is 'Bandwagon pressuring?",
        answers: [
            { text: "A type of advertising technique that aims to convince people to do something because everyone else is doing it.", isCorrect: true },
            { text: "A technique which involves using words that sound impressive but don’t actually mean anything.", isCorrect: false },
            { text: "A technique that involves using celebrities or other well-known figures to promote a product or service.", isCorrect: false }]
    },
    {
        subjects: "Psychology",
        question: "What is not a branche of psychology?",
        answers: [
            { text: "American Psychology", isCorrect: true },
            { text: "Developmental psychology", isCorrect: false },
            { text: "Social psychology", isCorrect: false }]
    },

];

// Variables 

let subject = document.getElementById('subject');
let questions = document.getElementById('question');
let options = document.getElementById('options');
let radios = document.getElementsByClassName("radio");
let submit = document.getElementById('submit');


function displayQuestions() {

    let result = getRandomQuestions(questionsList);

    subject.innerHTML = result.subjects;
    questions.innerHTML = result.question;
    options.innerHTML = `
       <li> 
          <input type="radio" name="answer" id="answer-1" class="radio" value="${result.answers[0].isCorrect}">
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

        for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        localStorage.setItem('correct', this.value);
        submit.addEventListener( "click", displayNextQuestion);
    }

}
}
displayQuestions();

function getRandomQuestions(questionsList) {
    return questionsList[Math.floor(Math.random() * questionsList.length)];

}

function displayNextQuestion() {
    event.preventDefault();
    displayQuestions();
}


function getAnswers() {

    
}


function addToScore() { };

function displayImage() { };

function displayFeedback() { };




