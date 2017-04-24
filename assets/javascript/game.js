var mainWord = generateWord();
var test = hideWord(mainWord);
document.getElementById("displayWord").innerHTML = test;
 
console.log(mainWord);



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

  document.onkeyup = function(event)
    {
    letterGuessed = event.key;
    document.getElementById("displayLetter").innerHTML = letterGuessed;
    replaceLetter(letterGuessed);
    }

   

function replaceLetter(y)
  {
        y = y.toLowerCase();    
        
        // console.log("n " + n);
        // console.log("mW "+ mainWord);       
        var wordArray = test.split("");
        var n = mainWord.search(y);
        // console.log(wordArray);
        wordArray[n] = y;
        // console.log(wordArray);
        var newHidden = wordArray.join("");
        document.getElementById("displayWord").innerHTML = newHidden.toUpperCase();
        test = newHidden
  }

