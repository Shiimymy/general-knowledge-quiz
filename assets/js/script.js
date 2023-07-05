
document.addEventListener("DOMContentLoaded", function getUsername() {

    let urlParams = new URLSearchParams(document.location.search);
    let username = urlParams.get("username");
    console.log(username);
    document.getElementById("username-area").textContent = username.toUpperCase();

});

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
        subjects: "Geography",
        question: "What is the largest country in Africa?",
        answers: [
            { text: "Algeria", isCorrect: true },
            { text: "The Democratic Republic of the Congo", isCorrect: false },
            { text: "Madagascar", isCorrect: false }]
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
        subjects: "Economy",
        question: "What is called a situation in which a single company or group owns all or nearly all of the market for a given type of product or service?",
        answers: [
            { text: "A monopoly", isCorrect: true },
            { text: "A monopsony", isCorrect: false },
            { text: "A oligopoly", isCorrect: false }]
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
        subjects: "English",
        question: "What is the definition of 'plethora'?",
        answers: [
            { text: "The use of unnecessary words to express an idea.", isCorrect: false },
            { text: "A large or excessive amount of something.", isCorrect: true },
            { text: "The state of being without or not having enough of something.", isCorrect: false }]
    },
    {
        subjects: "Psychology",
        question: "What is 'Bandwagon pressuring'?",
        answers: [
            { text: "A type of advertising technique that aims to convince people to do something because everyone else is doing it.", isCorrect: true },
            { text: "A technique which involves using words that sound impressive but don’t actually mean anything.", isCorrect: false },
            { text: "A technique that involves using celebrities or other well-known figures to promote a product or service.", isCorrect: false }]
    },
];


function displayQuestions() {

    let questions = document.createElement('div');
    let divHTML = "";
    questionsLength = questionsList.length;

    for (let i = 0; i < questionsLength; i++) {

        divHTML +=
            "<h3>" + questionsList[i].subjects + "</h3>" +
            `<div>
               <ul>
               ${questionsList[i].question}
               <br>
                  <li>
                     <input type="radio" name="answer-${questionsList[i].subjects}" id="${questionsList[i].subjects}-1" class="radio" value="${questionsList[i].answers[0].isCorrect}">
                     <lablel for="${questionsList[i].subjects}-1">
                     ${questionsList[i].answers[0].text}
                     </lablel>
                  </li>
                  <li>
                     <input type="radio" name="answer-${questionsList[i].subjects}" id="${questionsList[i].subjects}-2" class="radio" value="${questionsList[i].answers[1].isCorrect}">
                     <lablel for="${questionsList[i].subjects}-2">
                     ${questionsList[i].answers[1].text}
                     </lablel>
                  </li>
                  <li>
                     <input type="radio" name="answer-${questionsList[i].subjects}" id="${questionsList[i].subjects}-3" class="radio" value="${questionsList[i].answers[2].isCorrect}">
                     <lablel for="${questionsList[i].subjects}-3">
                     ${questionsList[i].answers[2].text}
                     </lablel>
                  </li>
               </ul >
               
            </div >`
            ;
    };

    questions.innerHTML = divHTML;
    document.getElementById("quizz-area").prepend(questions);
}
displayQuestions();

//


function getAnswers() {

    let radios = document.getElementsByClassName("radio");

    for (let radio of radios) {
        if (radio.checked) {
            if (radio.value === "true") {
                console.log("Right !");
            } else {
                console.log("Wrong !");
            }
        }
    }

}


function incrementScore() { };

function displayImage() { };

function displayFeedback() { };


