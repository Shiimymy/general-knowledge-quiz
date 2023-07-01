
document.addEventListener("DOMContentLoaded", function getUsername() {

    let urlParams = new URLSearchParams(document.location.search);
    let username = urlParams.get("username");
    console.log(username);
    document.getElementById("username-area").textContent = `${username}`;

});

let questionsList = [
    {
        question: "What was the name of the first person to circumnavigate the globe?",
        answers: [
            { text: "Christopher Columbus", isCorrect: false },
            { text: "Ferdinand Magellan", isCorrect: true },
            { text: "Marco Polo", isCorrect: false }]
    },
    {
        question: "What is the largest country in Africa?",
        answers: [
            { text: "Algeria", isCorrect: true },
            { text: "The Democratic Republic of the Congo", isCorrect: false },
            { text: "Madagascar", isCorrect: false }]
    },
    {
        question: "What is the name of the organization that aims to promote economic cooperation among countries?",
        answers: [
            { text: "The World Intellectual Property Organization", isCorrect: false },
            { text: "The Central Banks", isCorrect: false },
            { text: "The World Trade Organization", isCorrect: true }]
    },
    {
        question: "What is called a situation in which a single company or group owns all or nearly all of the market for a given type of product or service?",
        answers: [
            { text: "A monopoly", isCorrect: true },
            { text: "A monopsony", isCorrect: false },
            { text: "A oligopoly", isCorrect: false }]
    },
    {
        question: "What is the largest mammal on Earth?",
        answers: [
            { text: "The Elephant", isCorrect: false },
            { text: "The Hippopotamus", isCorrect: false },
            { text: "The Blue whale", isCorrect: true }]
    },
    {
        question: "What is the definition of 'plethora'?",
        answers: [
            { text: "The use of unnecessary words to express an idea.", isCorrect: false },
            { text: "A large or excessive amount of something.", isCorrect: true },
            { text: "The state of being without or not having enough of something.", isCorrect: false }]
    },
    {
        question: "What is 'Bandwagon pressuring'?",
        answers: [
            { text: "A type of advertising technique that aims to convince people to do something because everyone else is doing it.", isCorrect: true },
            { text: "A technique which involves using words that sound impressive but don’t actually mean anything.", isCorrect: false },
            { text: "A technique that involves using celebrities or other well-known figures to promote a product or service.", isCorrect: false }]
    },
];

function displaySubjects() {
    let subjects = ["History", "Geography", "Geopolitics", "Economy", "Nature", "English", "Psychology"];
    let h3 = document.createElement('h3');

    let h3Html = ``;

    for (let i = 0; i < subjects.length; i++) {
        console.log(subjects[i]);
        h3Html += subjects[i] + "<br>";
    }
    h3.innerHTML = h3Html;
    document.getElementById("quizz-area").appendChild(h3);
}
displaySubjects();

function displayQuestions() {

}
displayQuestions();

function getAnswers() {

};

function checkAnswers() { };

function incrementScore() { };

function displayImage() { };

function displayFeedback() { };


