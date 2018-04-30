

//trivia questions
var q1 = {question: "How many years after retiring is a player eligible for the hall of fame?",
    possAnswer1:"3",
    possAnswer2:"5",
    possAnswer3:"6",
    possAnswer4:"10",
    correctAnswer:"5"
    };
var q2 = {question: "How many teams are in the nfl?",
    possAnswer1:"28",
    possAnswer2:"30",
    possAnswer3:"32",
    possAnswer4:"36",
    correctAnswer:"32"
    };
var q3 = {question: "Which NFL team has the most Super Bowl Wins?",
    possAnswer1:"The New England Patriots",
    possAnswer2:"The Pittsburg Steelers",
    possAnswer3:"The Dallas Cowboys",
    possAnswer4:"The Miami Dolphins",
    correctAnswer:"The Pittsburg Steelers"
    };
var q4 = {question: "Which state has the most Super Bowl appearances?",
    possAnswer1:"NY",
    possAnswer2:"Cal",
    possAnswer3:"Florida",
    possAnswer4:"Iowa",
    correctAnswer:"Iowa"};
var q5 = {question: "What year were players first required to wear helmets?",
    possAnswer1:"1935",
    possAnswer2:"1943",
    possAnswer3:"1962",
    possAnswer4:"1977",
    correctAnswer:"1943"};
var q6 = {question: "Which NFL team hold the game record for least completed pass during a game?",
    possAnswer1:"The Cleveland Browns",
    possAnswer2:"The Buffalo Bills",
    possAnswer3:"The Seattle Seahawks",
    possAnswer4:"The Detroit Lions",
    correctAnswer:"The Buffalo Bills"};
var q7 = {question: "Which player holds the record for most sacks in a single season?",
    possAnswer1:"JJ Watt",
    possAnswer2:"Mark Gastineau",
    possAnswer3:"Michael Strahan",
    possAnswer4:"Lawrence Taylor",
    correctAnswer:"Michael Strahan"};
var q8 = {question: "Which two teams played in the lowest scoring overtime tie?",
    possAnswer1:"The Seattle Seahawks and the Arizona Cardinals",
    possAnswer2:"The Buffalo Bills and the NY Jets",
    possAnswer3:"The Cleveland Browns and the Miami Dolphins",
    possAnswer4:"The Philadelphia Eagles and the St Louis Rams",
    correctAnswer:"The Seattle Seahawks and the Arizona Cardinals"};
var q9 = {question: "Who is the only quarterback in NFL history to have a career passer rating over 100 (minimum 1500 passes thrown)?",
    possAnswer1:"Aaron Rogers",
    possAnswer2:"Tom Brady",
    possAnswer3:"Steve Young",
    possAnswer4:"Peyton Manning",
    correctAnswer:"Aaron Rogers"
};

//global variables
var userGuess=[];                   //user guess
var correctGuesses=0;               //number of correct guesses
var wrongGuesses=0;                 //number of incorrect Guesses
var guessTime=30;                //time per question
var prevQuestions=[];               //array of previously answered questions
var isRunning=true;
var timer;

var questionsArray =[q1, q2, q3, q4, q5, q6, q7, q8];
var randomNumber=null;
var numberOrder=[];
//determines a nonrepeating number


function questionOrder(){
    var usedNums=[]
    for (i=0; i<questionsArray.length; i++){
        usedNums.push(i);}
    for (j=0; j<questionsArray.length; j++){
        randomNumber = usedNums[Math.floor(Math.random() * usedNums.length)]
        usedNums.splice((usedNums.indexOf(randomNumber)),1 );
        numberOrder.push(randomNumber);
    }
}
questionOrder();

userQuestion();

function userQuestion(){

    //function variables
    i = numberOrder[0];
    isRunning=true;
    guessTime=30;
    userGuess=[];

    //start timer
    timer = setInterval(function(){
        guessTime--;
        $("#timer").text(guessTime + " Yay " );
        console.log(guessTime);
        }, 1000);
    

    //display questions and answer choices on screen
    $("#question").text(questionsArray[i].question);
    $("#choice1").text(questionsArray[i].possAnswer1);
    $("#choice2").text(questionsArray[i].possAnswer2);
    $("#choice3").text(questionsArray[i].possAnswer3);
    $("#choice4").text(questionsArray[i].possAnswer4);
    
    
    //Click Handlers splice selected answer to userGuess[]
    $("#choice1").click (function(){
        userGuess.splice(0, 1, questionsArray[i].possAnswer1);
        $("#userGuess").text("You Guessed: " + userGuess);
    });
    $("#choice2").click (function(){
        userGuess.splice(0, 1, questionsArray[i].possAnswer2);
        $("#userGuess").text("You Guessed: " + userGuess);
    });
    $("#choice3").click (function(){
        userGuess.splice(0, 1, questionsArray[i].possAnswer3);
        $("#userGuess").text("You Guessed: " + userGuess);
    }); 
    $("#choice4").click (function(){
        userGuess.splice(0, 1, questionsArray[i].possAnswer4);
        $("#userGuess").text("You Guessed: " + userGuess);
    });
    
    
    $("#submit").click(function(){
        if (isRunning == true){
            clearInterval(timer);
            if (userGuess == questionsArray[i].correctAnswer){
                numberOrder.splice(0, 1);
                isRunning=false;
                correctGuesses++;
                console.log("You are correct. CorrectGuesses: " + correctGuesses);
            }
            else if (userGuess != []){
                numberOrder.splice(0, 1);
                wrongGuesses++;
                isRunning=false;
                console.log("false. wrong guesses: " + wrongGuesses);
            }
            else{
                numberOrder.splice(0, 1);
                wrongGuesses++;
                isRunning=false;
                console.log("false. wrong guesses: " + wrongGuesses);
            }
        }
    });

        $("#next").click(function(){
            if(isRunning == false){
                userQuestion();
            }
            
        });

}



