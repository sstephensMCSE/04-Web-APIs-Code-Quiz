var questionEl = document.getElementById('question');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submitbtn = document.getElementById('submit');
var list = document.getElementById('list');
var paragraph = document.getElementById('paragraph');
var result = document.getElementById('result');
var quizLength = 5;
var myHR = document.getElementById("myHR");



// hide the quiz list
myHR.style.display = "none";
list.style.display = "none";
questionEl.innerText = "Welcome to the quiz!";
paragraph.innerText = "Try to answer 5 random code-related questions within the time limit. Each correct answer is worth 10 points. Keep in mind that the incorrect answers will penalize your scoretime by ten seconds";
submitbtn.innerText = "Start Quiz";

// initialize the counter for the curent question
currentQuestion = 0;

// use JS to load the quiz data into the HTML
function loadQuiz() {    

    // clear the multiple choice buttons
    list.innerHTML = "";
    
    // Declare globaL random quiz into a variable
    currentQuizData = quizData[Math.floor(Math.random() * quizData.length)];

    // set the question and answer texts
    questionEl.innerText = currentQuizData.question;
    
    //Create the multiple choices 
    if (currentQuizData.choices.a != null ) {createRadio("a", currentQuizData.choices.a);}
    if (currentQuizData.choices.b != null ) {createRadio("b", currentQuizData.choices.b);}
    if (currentQuizData.choices.c != null ) {createRadio("c", currentQuizData.choices.c);}
    if (currentQuizData.choices.d != null ) {createRadio("d", currentQuizData.choices.d);}
}


// Function to create a radio questions
function createRadio(letter, text) {
    // Create a blank list item
    var li = document.createElement("li");    

    // Build the first part of the radio obj
    var radio = document.createElement("input");     
    radio.type = "radio";
    radio.name = "answer";    
    li.appendChild(radio);

    // Build the second part of the radio obj
    var label = document.createElement("label");
    label.id = letter+"_text";
    label.for = letter;
    radio.id = letter;
    label.textContent = text;
    li.appendChild(label);
    
    // Append them to the list
    list.appendChild(li);    
}

submitbtn.addEventListener('click', function() {
    if (currentQuestion == 0) {
        submitbtn.innerText = "Submit";
        list.style.display = "";
        paragraph.innerText = "";
        currentQuestion++
        loadQuiz();
    } else {
        // get the radio values
        var answer = detectAnswer();
        
        // Warn user if no answer was selected.
        if (answer == "na") {
            alert("Please select one answer")
        } else {
            // Todo: slice the answer from the array so we dont get a repeat!

            // was it right or wrong? add a point and set the resulttext.

            if (answer == currentQuizData.answer) { var resulttext = "Result - Correct!" }
            else { var resulttext = "Result - Incorrect." } ;            

            // 3 sec loop to show the result
            myHR.style.display = "";
            result.innerText = resulttext;

            var timeleft = 4;
            var Timer = setInterval( function() {
                timeleft--;
                result.innerText = resulttext +" - " + timeleft;
                if(timeleft <= 0) {
                    result.innerText = "";            
                    myHR.style.display = "none";
                    clearInterval(Timer);
                }
            }, 1000);


            // Green box around correct answer.

            // 3 sec pause before next question.
            
            // say right or wrong and show the timer.
            
            currentQuestion++
            document.getElementById(answer).checked = false;
            if (currentQuestion <= quizLength) {
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

