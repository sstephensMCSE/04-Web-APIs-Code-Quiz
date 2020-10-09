

var questionEl = document.getElementById('question');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submitbtn = document.getElementById('submit')
var list = document.getElementById('list')
var paragraph = document.getElementById('paragraph')

// hide the quiz list
list.style.display = "none";
questionEl.innerText = "Welcome to the quiz!";
paragraph.innerText = "Try to answer the following code-related questions within the time limit. Keep in mind that the incorrect answers will penalize your scoretime by ten seconds";
submitbtn.innerText = "Start Quiz";


// initialize the counter for the curent question
currentQuestion = -1;

// this function will call the quiz...
//ToDo: remove the initial quiz and replace it with a welcome screen.


//loadQuiz();


// use JS to load the quiz data into the HTML
function loadQuiz() {    
    
    // Load the curent quiz into new variable
    var currentQuizData = quizData[currentQuestion];
    // set the question and answer texts
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;   
    d_text.innerText = currentQuizData.d;
}

submitbtn.addEventListener('click', function() {
    if (currentQuestion == -1) {
        submitbtn.innerText = "Submit";
        list.style.display = "";
        paragraph.innerText = "";
        currentQuestion++
        loadQuiz();
    } else {
        // get the radio values
        var answer = detectAnswer();
        // todo: warn user if there is no answer selected
        if (answer == "na") {
            alert("Please select one answer")
        } else {        
            currentQuestion++
            document.getElementById(answer).checked = false;
            if (currentQuestion < quizData.length) {
                loadQuiz();
            } else {
                // todo: all done
                // hide the list
                // your final score was score
                // enter initials
                // submit
                // show leaderboard
                alert("end")
            }
        }
    }
})

function detectAnswer(){
    if (document.getElementById('a').checked) {return "a"}
    else if (document.getElementById('b').checked) {return "b"}
    else if (document.getElementById('c').checked) {return "c"}
    else if (document.getElementById('d').checked) {return "d"}
    else return "na"
};





