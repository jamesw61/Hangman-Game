
var wordlist = ["concatenation", "polymorphism", "encapsulation", "scope", "lexical"];
var mainWord = generateWord();
var underScores = hideWord(mainWord);
var lettersMissed = [];
var guesses = 0;
var wins = 0;
var losses = 0;


document.onkeyup = function(event)
  { 
    playGame();
  }

function playGame()
  {
    playMusic();
    document.getElementById("displayWord").innerHTML = underScores;
    document.getElementById("instruction").innerHTML = "Guess a Letter - Miss 5 and You Lose!";
    document.onkeyup = function(event)
      {
        var letterGuessed = event.key;
        document.getElementById("displayLetter").innerHTML = letterGuessed.toUpperCase();
        replaceLetter(letterGuessed);
        if (guesses == 5)
          {
            document.getElementById("displayLetter").innerHTML = "You Lose!  Hit any key to start again";
            document.getElementById("instruction").innerHTML = "You Lose!  Hit any key to start again";
            
            losses++;
            document.getElementById("gamestats").innerHTML = "Wins:  " + wins + "    " + "Losses:  " + losses;
            document.onkeyup = function(event)
              {
                reloadGame();
              }
          }
        if(mainWord === underScores)
          {
            document.getElementById("displayLetter").innerHTML = "You Win!  Hit any key to start again";
            
            wins++;
            document.getElementById("gamestats").innerHTML = "Wins:  " + wins + "    " + "Losses:  " + losses;
            document.onkeyup = function(event)
              {
                reloadGame();
              }
          }
      }
  }

function reloadGame()
  {
    mainWord = generateWord();
    underScores = hideWord(mainWord);
    lettersMissed = [];
    guesses = 0;
    document.getElementById("displayWord").innerHTML = underScores;
    document.getElementById("instruction").innerHTML = "Guess a Letter - Miss 5 and You Lose!";
    document.getElementById("displayLetter").innerHTML = "";
    document.getElementById("numberOfMisses").innerHTML = "";
    document.getElementById("missedLetters").innerHTML = "";
    document.getElementById("instruction2").innerHTML = "";
    playGame();
  }

function generateWord()
  {
    var index = Math.floor(Math.random() * wordlist.length);
    return wordlist[index];
  }
        
function hideWord(word)
  {   
    var hiddenWord = "";
    for (var i=0; i < word.length; i++)
      {
       hiddenWord = hiddenWord + "_";
      }
    return hiddenWord;
  }

function replaceLetter(y)
  {
    y = y.toLowerCase();    
    var underscArray = underScores.split("");
    var mainWordArray = mainWord.split("");
    for (var j=0; j < mainWord.length; j++) 
      {
        var x = mainWordArray[j];
        if(x === y) 
        {
          underscArray[j] = y;
        }
      }
    var newHidden = underscArray.join("");
    if(underScores === newHidden)
      {
        y = y.toUpperCase();
        guesses++;
        lettersMissed.push(y);
      }
    document.getElementById("displayWord").innerHTML = newHidden.toUpperCase();
    document.getElementById("numberOfMisses").innerHTML = "Number of Missed Letters: " + guesses;
    document.getElementById("missedLetters").innerHTML = "Letters Missed: " + lettersMissed;
    underScores = newHidden;
  }
  
function playMusic()
  {
    document.getElementById("sixty").style.display = "block";
    sixty.play();
  }
