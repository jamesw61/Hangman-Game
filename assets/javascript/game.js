var mainWord = generateWord();
var undersc = hideWord(mainWord);
document.getElementById("displayWord").innerHTML = undersc;
 
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
        
        var underscArray = undersc.split("");
        console.log("underscarray split " + underscArray);
       
        var mainWordArray = mainWord.split("");
        console.log("mainword split   " + mainWordArray);
        console.log("---" + mainWordArray[3]);

        for (var j=0; j < mainWord.length; j++) {
            
            console.log("aa" + mainWordArray[j]);
            var x = mainWordArray[j];
            console.log("***  " + x + "  " + y);
          if(x === y) {
            console.log("bb" + mainWordArray[j]);
            underscArray[j] = y;
            // console.log("if " + underscArray);
            console.log("cc" + mainWordArray[j]);
            console.log(y);
          }

        }
        // console.log(wordArray);
        
        // console.log(wordArray);
        var newHidden = underscArray.join("");
        document.getElementById("displayWord").innerHTML = newHidden.toUpperCase();
        undersc = newHidden
  }
  
