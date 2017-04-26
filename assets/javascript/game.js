var mainWord = generateWord();
var underScores = hideWord(mainWord);

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
    document.getElementById("instruction").innerHTML = "Guess a Letter";
    document.onkeyup = function(event)
    {
      var letterGuessed = event.key;
      document.getElementById("displayLetter").innerHTML = letterGuessed.toUpperCase();
      replaceLetter(letterGuessed);
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
      guesses++;
    }
    document.getElementById("displayWord").innerHTML = newHidden.toUpperCase();
    document.getElementById("numberOfMisses").innerHTML = "Number of Missed Letters: " + guesses;
    underScores = newHidden;
  }
  
