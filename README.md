# LET'S TEST YOU!

This is a **quiz on general knowledge** website that enable the users to test themselves on 8 different topics: History, Geography, Geopolitics, Economy, Nature, English and Psychology. The user can replay he game and have other questions displayed. It will be useful for the user to test his general knowledge or even learn.

![Responsive-Screens](assets/images/responsive-screens.jpg)


Project URL : [Let's Test You!](https://shiimymy.github.io/general-knowledge-quizz/)

## Features

### Landing Page 

The landing page is the index.html that the user will see which has different components.

![Landing-Page](assets/images/landing-page.jpg)

#### Description

The description can be found on all html pages by hovering the mouse on the question mark icon. This will allow to make the user aware of the number subjects and that he can replay the game to have other questions.

![Description](assets/images/display-description.jpg)

#### Username Form

The user form can be found on the first page that will ask the player to choose an username. This username will then be displayed on the second page of the website.

![Username-Form](assets/images/username-form.jpg)

### The quiz page

#### Score 

The score area show the number of questions *(which is 7)* that one round will display. It will also count the number of correct answers each time an answer is submitted. If the answer is correct, it will add one point to the score.

![score](assets/images/count-right-answers.jpg)

#### Question number 

The question number is actually very useful as this what the game will check to know if whether or not the game needs to end. The game will indeed display 7 questions per round.

![Question-number](assets/images/display-question-number.jpg)

#### Question content

The question content will be chosen randomly by the system between the 14 possibilities. It is divided in 3 elements that stay connected: the subject, the actual question and 3 different answer options.

![Question-content](assets/images/display-question.jpg)

#### Submit button

The submit button as different roles: 
* Display the next question once the answer has been selected and the user click it,
* Add a point to the score if the answer is correct,
* And check if the maximum of questions, during the round, has been reach to end quiz.

![Submit-button](assets/images/submit-selection.jpg)

#### End Message

The end message will be display once the 7 questions have been answered whereas the question area will be hidden. The user will then easily understand that the round is over and a little feedback will show. This feedback will change depending of the score of the round. 

![End-message](assets/images/end-message.jpg)

#### End buttons

With the End message, two buttons will be displayed. The user will have the choice to either restart the game from the question or exit the game totally.

![End-buttons](assets/images/end-buttons.jpg)

## Testing

### Manual Testing

I checked first and confirmed that the website was working on different browsers : Google Chrome, Microsoft Edge, and Firefox.

Through manual testing, I saw that the website was not responsive enough and I had to make some updates. I did some changes thanks to [Am I Responsive website](https://ui.dev/amiresponsive) as I didn't have acess to a bigger screen.

I also realised that adding the informatin about which is the corect answer would need to be added when the user select the wrong option for a better user experience.

### Validator Testing

* HTML Testing : 1 error found with [W3C Validator](https://validator.w3.org/) in the text input of the first page as I used "min" attribute which in now deleted.
* CSS Testing : 1 error found with [Jigsaw Validator](https://jigsaw.w3.org/css-validator/validator) as I used "none" instead of "transparent" as a value after a color property. It is now changed.

### Performance Testing

I used [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) to test the performances of my 2 pages. The results were positive, as scores were between 90 and 93. Please find the result below at the time of the tests :

* Index page performances :

![Index page Performances](assets/images/performance-index.jpg)

* Quiz page performances : 

![Quiz page Performances](assets/images/performance-quiz.jpg)

## Deployment

* **Fork template** : The first step before coding was to fork the [ci-full-template](https://github.com/Code-Institute-Org/ci-full-template) from [Code Institute](https://codeinstitute.net/ie/) as asked. 
To do so, once on the ci-full-template in Github (as per the first link), I clicked on **Fork** on the top-right of the page. Then I renamed the repository with the name of my project under **Repository name** and clicked to **Create Fork**. This allowed me to update the template.

* **Project deployment** : Once the site was nearly ready, it was deployed thanks to [Github](https://github.com/) from the [general-knowledge-quizz repository](https://github.com/Shiimymy/general-knowledge-quizz). Once in the repository, I clicked on **Settings** in the top navigation bar, then on Pages in the left menu. Once the page opened, in the Branch section, I chose main in the drop down menu and clicked on **Save**.

* **Clone project** :

This project will be also cloned to work localy on the future realesed by following these setps :

1. Go in [General Knowledge Quizz](https://github.com/Shiimymy/general-knowledge-quizz) repository,
2. Click on Code to find the URL and copy it.
3. In the Terminal write git clone and paste the url.
4. Press Enter to create the clone.

## Credit



### Content

### Media
