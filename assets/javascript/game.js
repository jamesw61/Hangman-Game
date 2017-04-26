var mainWord = generateWord();
var underScores = hideWord(mainWord);
var lettersMissed = [];

var tries = 5;
var guesses = 0;

startover();


function startover()
  {
    document.onkeyup = function(event)
    {
      playgame();
    }
  }


function playgame()
  {
     
        document.getElementById("displayWord").innerHTML = underScores;
        document.getElementById("instruction").innerHTML = "Guess a Letter - Miss 5 and You Lose!";
        document.onkeyup = function(event)
          {
            var letterGuessed = event.key;
            document.getElementById("displayLetter").innerHTML = letterGuessed.toUpperCase();
            replaceLetter(letterGuessed);
            if (guesses == 5)
              {
                  document.getElementById("instruction2").innerHTML = "You Lose!";
              }
            if(mainWord === underScores)
              {
                  document.getElementById("instruction2").innerHTML = "You Win!";
              }
          }
      
    
  }



function generateWord()
  {
    var wordlist = ["concatenation", "polymorphism", "encapsulation"];
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
    document.getElementById("missedLetters").innerHTML = lettersMissed;
    underScores = newHidden;
  }
  
