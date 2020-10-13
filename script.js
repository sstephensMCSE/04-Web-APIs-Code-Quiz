var questionEl = document.getElementById('question');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submitbtn = document.getElementById('submit');
var list = document.getElementById('list');
var paragraph = document.getElementById('paragraph');
var result = document.getElementById('result');
var timerdiv = document.getElementById('timerdiv');
var myHR = document.getElementById("myHR");
var footer = document.getElementById("footer");

var totalScore = 0;
var timeleft = 100;
var quizLength = 1;

highscores=[ "SMS 5", "AJC 4", "TOM 2"]

// hide the quiz list
myHR.style.display = "none";
result.innerText = "";
list.style.display = "none";
questionEl.innerText = "Welcome to the quiz!";
paragraph.innerText = "Try to answer 5 random code-related questions within the time limit. Each correct answer is worth 10 points. Keep in mind that the incorrect answers will penalize your scoretime by ten seconds";
submitbtn.innerText = "Start Quiz";
timerdiv.innerText = "Quiz Timer: "+ timeleft;

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
        footer.innerHTML = "";
        submitbtn.innerText = "Submit";
        list.style.display = "";
        paragraph.innerText = "";
        currentQuestion++

        //start quiz timer
        quiztimeleft = 100;
        quizTimer = setInterval( function() {
            quiztimeleft--;
            timerdiv.innerText = "Quiz Timer: "+ quiztimeleft;
            if(quiztimeleft <= 0) {                    
                timerdiv.innerText = "Quiz Timer: 0";
                clearInterval(quizTimer);
            }
        }, 1000);



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
            if (answer == currentQuizData.answer) { var resulttext = "Correct!"; totalScore += 1 }
            else { var resulttext = "Incorrect." ; quiztimeleft -= 10 } ;            
            
            
            // 3 sec loop to show the result            
            myHR.style.display = "";            
            result.innerText = resulttext;

            var timeleft = 4;
            var Timer = setInterval( function() {
                timeleft--;
                result.innerText = resulttext;
                if(timeleft <= 0) {                    
                    result.innerText = "";                          
                    myHR.style.display = "none";
                    clearInterval(Timer);
                }
            }, 1000);
            

            currentQuestion++
            document.getElementById(answer).checked = false;
            if (currentQuestion <= quizLength) {
                loadQuiz();
            } else {

                // stop all timers.
                result.innerText = "Enter Initials";
                myHR.style.display = "none";              
                clearInterval(Timer);                
                timerdiv.innerText = "Quiz Timer: 0";
                clearInterval(quizTimer);
                
                // clear the multiple choice buttons
                list.innerHTML = "";

                questionEl.innerText = "All Done!";
                paragraph.innerText = "Your Final Score was: "+totalScore;
                submitbtn.innerText = "Try Again";
                
                // reset the quiz 
                totalScore = 0;
                timeleft = 100;
                currentQuestion = 0;
                
                
                // enter initials            
                var label = document.createElement("label");
                label.for = "initials";
                label.textContent = "Initials: ";
                footer.appendChild(label);
                // Text box
                var x = document.createElement("INPUT");
                x.setAttribute("type", "text");
                x.setAttribute("id", "initials");
                footer.appendChild(x);
                // Submit 
                var y = document.createElement("INPUT");
                y.id = "submitHS";
                y.setAttribute("type", "submit");
                footer.appendChild(y);
                                
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

// Modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var modalbtn = document.getElementById("highscores");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
modalbtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Submit the score 

// Get the button that opens the modal
var submit = document.getElementById("submitHS");

// When the user clicks the button, open the modal 
submit.onclick = function() {
  alert("score submitted")
}