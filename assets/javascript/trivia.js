                            ///////////////////////////////////////////////////////////////////////////
                            ///////////////              Global Variables                 /////////////
                            ///////////////////////////////////////////////////////////////////////////

                            
//Array of Questions and Answer Objects
var questionsArray = [
    q1 = {question: "How many years after retiring is a player eligible for the hall of fame?",
    possAnswer1:"3",
    possAnswer2:"5",
    possAnswer3:"6",
    possAnswer4:"10",
    correctAnswer:"5",
    funFact:"After retirement, players must wait 5 years before they are eligible to be voted into the NFL Hall of Fame"
    },
    q2 = {question: "How many teams are in the nfl?",
    possAnswer1:"28",
    possAnswer2:"30",
    possAnswer3:"32",
    possAnswer4:"36",
    correctAnswer:"32",
    funFact: "There are currently 32 teams in the NFL."
    },
    q3 = {question: "Which NFL team has the most Super Bowl Wins?",
    possAnswer1:"The New England Patriots",
    possAnswer2:"The Pittsburg Steelers",
    possAnswer3:"The Dallas Cowboys",
    possAnswer4:"The Miami Dolphins",
    correctAnswer:"The Pittsburg Steelers",
    funFact: "The Pittsburg Steelers have won 6 Super Bowl Titles."
    },
    q4 = {question: "Which state has the most collective Super Bowl wins?",
    possAnswer1:"Massachussets",
    possAnswer2:"California",
    possAnswer3:"New York",
    possAnswer4:"Pennsylvania",
    correctAnswer:"California",
    funFact:"The 49ers and Raiders have won a collective 8 Super Bowls. The Chargers and Rams have never won a SuperBowl in California."},
    q5 = {question: "What year were players first required to wear helmets?",
    possAnswer1:"1935",
    possAnswer2:"1943",
    possAnswer3:"1962",
    possAnswer4:"1977",
    correctAnswer:"1943",
    funFact:"The NFL has been requiring all players to wear helmets since 1943."},
    q6 = {question: "In modern NHL history, which NFL team hold the game record for least completed pass during a game?",
    possAnswer1:"The Cleveland Browns",
    possAnswer2:"The Buffalo Bills",
    possAnswer3:"The Seattle Seahawks",
    possAnswer4:"The Detroit Lions",
    correctAnswer:"The Buffalo Bills",
    funFact:"On September 29th, 1974, the Buffalo Bills completed 0 passes against the New York Jets.  The Jets only completed 2 passes."},
    q7 = {question: "Which player holds the record for most sacks in a single season?",
    possAnswer1:"JJ Watt",
    possAnswer2:"Mark Gastineau",
    possAnswer3:"Michael Strahan",
    possAnswer4:"Lawrence Taylor",
    correctAnswer:"Michael Strahan",
    funFact: "In the 2001 season, Michael Strahan recorded 22.5 sacks."    },
    q8 = {question: "Which two teams played in the lowest scoring overtime tie, with a final score of 6-6?",
    possAnswer1:"The Seattle Seahawks and the Arizona Cardinals",
    possAnswer2:"The Buffalo Bills and the NY Jets",
    possAnswer3:"The Cleveland Browns and the Miami Dolphins",
    possAnswer4:"The Philadelphia Eagles and the St Louis Rams",
    correctAnswer:"The Seattle Seahawks and the Arizona Cardinals",
    funFact:"On October 23rd, 2016, the Seattle Seahawks and the Arizona Cardinals game ended in an overtime 6-6 tie.  Both teams potentially game winning short field goals in overtime."},
    q9 = {question: "Who is the only quarterback in NFL history to have a career passer rating over 100 (minimum 1500 passes thrown)?",
    possAnswer1:"Aaron Rogers",
    possAnswer2:"Tom Brady",
    possAnswer3:"Steve Young",
    possAnswer4:"Peyton Manning",
    correctAnswer:"Aaron Rogers",
    funFact: "Aaron Rogers has a 103.8 career passer rating.  Russell Wilson is number 2 on the list with a career passer rating of 98.8."},
    q10 = {question: "In 1990, Derrick Thomas set the single game current NFL record for which statistic?",
    possAnswer1:"Most quarterback sacks",
    possAnswer2:"Longest punt return for a touchdown",
    possAnswer3:"Most penalty yards by a player",
    possAnswer4:"Most interceptions",
    correctAnswer:"Most quarterback sacks",
    funFact: "In a 1990 game against the Seattle Seahawks, Thomas sacked quarterback Dave Krieg seven times. The Seahawks somehow still won the game with a score of 17-16."},
    q11 = {question: "Which Running Back holds the single-season rushing yards?",
    possAnswer1:"Adrian Peterson",
    possAnswer2:"OJ Simpson",
    possAnswer3:"Barry Sanders",
    possAnswer4:"Eric Dickerson",
    correctAnswer:"Eric Dickerson",
    funFact: "In the 1984 season, Eric Dickerson rushed for 2,105 yards.  Adrian Peterson came within 10 yards of that record in 2012."},
    q12 = {question: "Who was the oldest coach to win a Super Bowl?",
    possAnswer1:"Vince Lombardi",
    possAnswer2:"Don Shula",
    possAnswer3:"Tom Coughlin",
    possAnswer4:"Bill Belichick",
    correctAnswer:"Tom Coughlin",
    funFact: "In 2012, at age 65, Tom Coughlin's NY Giants defeated Bill Belichick's New England Patriots."},
    q13 = {question: "Which NFL kicker holds the record for longest successful field goal?",
    possAnswer1:"Sebastion Janikowski",
    possAnswer2:"David Akers",
    possAnswer3:"Mat Prater",
    possAnswer4:"Tom Demsey",
    correctAnswer:"Mat Prater",
    funFact: "On December 8, 2013, Mat Prater kicked a 64 yard field goal in Denver's Mile High Stadium."},
    q14 = {question: "Which Coach holds the record for most career wins?",
    possAnswer1:"George Halas",
    possAnswer2:"Tom Landry",
    possAnswer3:"Bill Belichick",
    possAnswer4:"Don Shula",
    correctAnswer:"Don Shula",
    funFact: "Over his 32 year NFL coaching career with the Baltimore Colts and the Miami Dolphins, Don Shula won 348 games."},
    q15 = {question: "Which former NFL quarterback holds the record for most career fumbles?",
    possAnswer1:"Dave Krieg",
    possAnswer2:"Warren Moon",
    possAnswer3:"Steve Young",
    possAnswer4:"Brett Favre",
    correctAnswer:"Warren Moon",
    funFact: "During his 16 year NFL career, Warren Moon fumbled 161 times."},
    q16 = {question: "Which team has the most Super Bowl appearances?",
    possAnswer1:"The Dallas Cowboys",
    possAnswer2:"The Pittsburg Steelers",
    possAnswer3:"The Denver Broncos",
    possAnswer4:"The New England Patriots",
    correctAnswer:"The New England Patriots",
    funFact:"The New England Patriots have been to 10 Super Bowls.  Of those, all 5 of their wins were during the Tom Brady/Bill Belichick era."},
    q17 = {question: "Who was crowned Super Bowl MVP in the very first Super Bowl?",
    possAnswer1:"Ray Nitschke",
    possAnswer2:"Jerry Kramer",
    possAnswer3:"Jim Taylor",
    possAnswer4:"Bart Starr",
    correctAnswer:"Bart Starr",
    funFact: "Packers Quarterback Bart Starr was named MVP of SuperBowl I, in which the Green Bay Packers defeated the Kansas City Chiefs, 35-21."},
    q18 = {question: "Only once in the history of the Super Bowl has player on the losing team been awarded the title of SuperBowl MVP.  What was that player's position?",
    possAnswer1:"Linebacker",
    possAnswer2:"Running Back",
    possAnswer3:"QuarterBack",
    possAnswer4:"Defensive End",
    correctAnswer:"Linebacker",
    funFact: "Chuck Howley, former linebacker for the Dallas Cowboys, was named MVP of Super Bowl V despite the Cowboys losing to the Baltimore Colts 16-13."},
    q19 = {question: "Which of these NFL players has never won the Associated Press NFL MVP? Award?",
    possAnswer1:"Shaun Alexander",
    possAnswer2:"Eli Manning",
    possAnswer3:"Cam Newton",
    possAnswer4:"Adrian Peterson",
    correctAnswer:"Eli Manning",
    funFact: "Eli Manning has never won this award.  His brother Peyton has won 4."},
    q20 = {question: "Which of these team mascots are incorrect.",
    possAnswer1:"Cincinatti Bengals - 'Who Dey'",
    possAnswer2:"New Orleans Saints - 'Gumbo'",
    possAnswer3:"Carolina Panthers - 'Sir Purr'",
    possAnswer4:"New York Giants - 'Tall Sam'",
    correctAnswer:"New York Giants - 'Tall Sam'",
    funFact: "The New York Giants do not actually have an official mascot."},

];    

var numberOrder=[];                                                             //The order of indexes of questionsArray that the questions will appear
var userGuess=[];                                                               //user guess
var correctGuesses=0;                                                           //number of correct guesses
var wrongGuesses=0;                                                             //number of incorrect Guesses
var guessTime=30;                                                               //time per question
var isRunning=true;                                                             //define isRunning = true
var timer;                                                                      //define timer (for setinterval)
var score=0;                                                                    //Create a userScore

//Initial Display Parameters

$("#timer").hide();                                                             //hide timer
$("#mainCard").hide();                                                          //hide questions card
$("#resultsCard").hide();                                                       //hide results card
$("#otherGamesLink").hide();                                                    //hide otherGames Link View                                                      


                            ///////////////////////////////////////////////////////////////////////////
                            ///////////////              Global Variables                 /////////////
                            ///////////////////////////////////////////////////////////////////////////


//determines a nonrepeating question order array
function questionOrder(){
    var usedNums=[]                                                             //create an array to hold possible numbers
    var randomNumber=null;                                                      //assign random number as null
    for (i=0; i<questionsArray.length; i++){                                    //for how long the questionsarray is,
        usedNums.push(i);}                                                      //push a number into usedNums array
    
    for (j=0; j<questionsArray.length; j++){                                    //for how long questionsArray is,
        randomNumber = usedNums[Math.floor(Math.random() * usedNums.length)]    //generate a random number from between 0 and usedNums.length
        usedNums.splice((usedNums.indexOf(randomNumber)),1 );                   //remove that number from usedNums
        numberOrder.push(randomNumber);                                         //push that number to numberOrder
    }
}
//resets Button Colors
function buttonColor(){
    $("#choice1").removeClass("bg-info  text-white");                        //remove button classes
    $("#choice2").removeClass("bg-info  text-white");                        //remove button classes
    $("#choice3").removeClass("bg-info  text-white");                        //remove button classes
    $("#choice4").removeClass("bg-info  text-white");                        //remove button classes
}
//Game Main Function
function runGame(){

    //display changes
    $("#submitRow").hide();                                                 //hide submit button
    $("#nextQuestionRow").hide();                                           //hide nextQuestion button
    $("#funFactCorrect").hide();                                            //hide funFact Display
    $("#funFactFalse").hide();                                              //hide funFact Display
    buttonColor();                                                          //Remove Button Selector Classes
    
    //reset variables
    i = numberOrder[0];                                                     //i = the first index of number order array
    isRunning=true;                                                         //reset isRunning to True
    guessTime=30;                                                           //reset guess time to 30 seconds
    userGuess=[];                                                           //reset user's guess
    
    //Interval Timer

    //If not all questions have been answered
    if (numberOrder.length >0){
        timer = setInterval(function(){                                     //set interval timer for 1000ms
            guessTime--;                                                    //countdown from 30 seconds
            $("#timer").text(guessTime + " Seconds Remaining ");            //display countdown timer
            console.log(guessTime);                                         
            
            //if you run out of time
            if (guessTime <= 0){                                            //if you run out of time
                clearInterval(timer);                                       //clear the interval timer
                $("#timer").text("Sorry, you ran out of Time!");            //display "Out of Time"
                score -= 20;                                                //Score Goes Down 10 points
                $("#gameScorePoints").text("Your Score: " + score);
                
                if (userGuess == []){                                       //if user did not select an answer
                    numberOrder.splice(0, 1);                               //remove current question
                    wrongGuesses++;                                         //wrongGuesses + 1
                    $("#funFactFalse").show();                              //show funFactFalse row
                    $("#funFactFalse").text("False. " + questionsArray[i].funFact);     //display a fun fact or explanation about the answer
                    $("#submitRow").hide();
                    $("#nextQuestionRow").show();
                    isRunning=false;                                        //set isRunning to false
                    console.log("false. wrong guesses: " + wrongGuesses);   
                }
                //if user selected an answer
                else{
                    $("#submitRow").hide();                                 //hide the submit button
                    $("#nextQuestionRow").show();                           //show the next questio button
                    
                    //if user's selected, but not submitted answer is correct                                                       
                    if (userGuess == questionsArray[i].correctAnswer){      
                        $("#funFactCorrect").show();                        //show funFactCorrect row
                        $("#funFactCorrect").text("Correct. " + questionsArray[i].funFact);   //display a fun fact or explanation about the answer
                        correctGuesses++;                                   //correctGuesses + 1
                        numberOrder.splice(0, 1);                           //remove current question
                        score +=20;                                         //Score goes up 20 points
                        isRunning=false;                                    //set isRunning to false
                        console.log("true");
                    }
    
                    //if user's selected, but not submitted answer is incorrect
                    else{
                        $("#funFactFalse").show();                          //show funFactFalse row
                        $("#funFactFalse").text("False. " + questionsArray[i].funFact);     //display a fun fact or explanation about the answer
                        wrongGuesses++;                                     //wrongGuesses + 1
                        numberOrder.splice(0, 1);                           //remove current question
                        isRunning=false;                                    //set is runing to false
                        console.log("false");
                    }
                }
            };
        }, 1000);                                                           //interval time (1000ms)
        
        //display questions and answer choices on screen
        $("#question").text(questionsArray[i].question);                    //display Question on screen
        $("#choice1").text(questionsArray[i].possAnswer1);                  //display possAnswer1 on screen
        $("#choice2").text(questionsArray[i].possAnswer2);                  //display possAnswer2 on screen
        $("#choice3").text(questionsArray[i].possAnswer3);                  //display possAnswer3 on screen
        $("#choice4").text(questionsArray[i].possAnswer4);                  //display possAnswer4 on screen
        
        //////////////////
        //Click Handlers//
        //////////////////

        //Choice 1
        $("#choice1").click (function(){
            if (isRunning == true){
            $("#submitRow").show();                                         //show Submit Button
            buttonColor();                                                  //reset all button color classes
            $(this).addClass("bg-info text-white");                         //change this button color class to grey and white
            userGuess.splice(0, 1, questionsArray[i].possAnswer1);          //splice the selected answer to userGuess
            };
        });
        //Choice 2
        $("#choice2").click (function(){
            if (isRunning == true){
                $("#submitRow").show();                                     //show Submit Button
                buttonColor();                                              //reset all button color classes
                $(this).addClass("bg-info text-white");                     //change this button color class to grey and white
                userGuess.splice(0, 1, questionsArray[i].possAnswer2);      //splice the selected answer to userGuess
            };                                    
           
        });
        //Choice 3
        $("#choice3").click (function(){
            if (isRunning == true){
                $("#submitRow").show();                                     //show Submit Button
                buttonColor();                                              //reset all button color classes
                $(this).addClass("bg-info text-white");                     //change this button color class to grey and white
                userGuess.splice(0, 1, questionsArray[i].possAnswer3);      //splice the selected answer to userGuess
            };
            
        }); 
        //Choice 4
        $("#choice4").click (function(){
            if (isRunning == true){
                $("#submitRow").show();                                     //show Submit Button
                buttonColor();                                              //reset all button color classes
                $(this).addClass("bg-info text-white");                 //change this button color class to grey and white
                userGuess.splice(0, 1, questionsArray[i].possAnswer4);      //splice the selected answer to userGuess
            };
        });
        
        //Submit Answer Button
        //only shown after an answer has been selected
        $("#submit").click(function(){  

            if (isRunning == true){                                         //if isRunning is true(makes sure button can only run function on first click)
                $("#submitRow").hide();                                     //hide submit button
                $("#nextQuestionRow").show();                               //show next question button
                clearInterval(timer);                                       //stop the interval timer countdown
                isRunning=false;                                            //set isRunning to false
                
    
                if (userGuess == questionsArray[i].correctAnswer){          //if the userGuess is correct
                    $("#funFactCorrect").show();                            //show funFactCorrect row
                    $("#funFactCorrect").text("Correct. " +questionsArray[i].funFact);   //display a fun fact or explanation about the answer
                    numberOrder.splice(0, 1);                               //remove index[0] from number order
                    score += (guessTime + 20);                              //Score goes up by remaining guess time and 20 points
                    correctGuesses++;                                       //correctGuesses + 1       
                }                                     
                
                else {                                                      //if the userGuess is wrong
                    $("#funFactFalse").show();                              //show funFactFalse row
                    $("#funFactFalse").text("False. " + questionsArray[i].funFact);     //display a fun fact or explanation about the answer
                    numberOrder.splice(0, 1);                               //remove index[0] from number order
                    score -= 5;                                             //score is reduced by 5
                    wrongGuesses++;}                                        //wrongGuesses + 1
            }
        });
        
        //Next Question Button
        //only shown after submit has been clicked or time has run out
        $("#nextQuestion").click(function(){                    
            if(isRunning == false && questionsArray[i] != undefined){       //If isRunning is false And there are still more questions
                $("#submitRow").hide();                                     //hide submit row
                $("#funFactCorrect").hide();                                //hide funFactCorrect row
                $("#funFactFalse").hide();                                  //hide funFactFalse row
                runGame();                                                  //run next question
            }   
        });
    }
    //if all questions have been answered
    else {  
        $("#resultsCard").show()                                            //show results card
        $("#otherGamesLink").show();                                        //show otherGames Link View 
        $("#timer").hide();                                                 //hide timer
        $("#mainCard").hide();                                              //hide main card
        $("#gameScoreAnswers").text("You correctly answered " + correctGuesses + " / " + questionsArray.length + " questions!")
        $("#gameScorePoints").text(score);                                  //show game score

        //Scores Above 600  - EXPERT
        if(score >= 600){
            $("#grade").html("<h1 class='indie text-success'>Expert!</h1>");
        };

        //Scores 450 - 599  -  ADVANCED
        if(score >= 450 && score < 600){
            $("#grade").html("<h1 class='indie text-success'>Advanced</h1>");
        };

        //Scores 250 - 449  -  INTERMEDIATE
        if(score >= 250 && score < 450){
            $("#grade").html("<h1 class='indie text-warning'>Novice</h1>");
        };

        //Scores Under 250  -  BEGINNER
        if(score < 250){
            $("#grade").html("<h1 class='indie text-danger'>Beginner</h1>");
        };
    };
};


                            ///////////////////////////////////////////////////////////////////////////
                            ///////////////                Click Handlers                 /////////////
                            ///////////////////////////////////////////////////////////////////////////

//Start Game Button
$("#startGame").click(function(){                                           //when user clicks start game
    $("#timer").show();                                                     //show timer
    $("#mainCard").show();                                                  //show main question/answer card
    $("#resultsCard").hide();                                               //hide results card
    $("#startGameCard").hide();                                             //hide start game card
    questionOrder();                                                        //create a new random order for the questions
    runGame();                                                              //run game
});

//Try Again Button
$("#tryAgainBtn").click(function(){                                         //when user clicks try again
    $("#timer").show();                                                     //show timer
    $("#mainCard").show();                                                  //show main card
    $("#resultsCard").hide();                                               //hide results card
    $("#otherGamesLink").hide();                                            //hide otherGames Link View 
    score=0;                                                                //reset user's score to 0
    correctGuesses=0;                                                       //reset correct guesses to 0
    wrongGuesses=0;                                                         //reset wrong guesses to 0
    questionOrder();                                                        //create a new random order for the questions
    runGame();                                                              //run game
});

