
document.addEventListener("DOMContentLoaded", function getUsername() {

    let urlParams = new URLSearchParams(document.location.search);
    let username = urlParams.get("username");
    console.log(username);
    document.getElementById("username-area").textContent = `${username}`;

});


function getAnswers() { };

function checkAnswers() { };

function incrementScore() { };

function displayImage() { };

function displayFeedback() { };


