let answers = ["OF COURSE!", "YES", "NO", "IN YOUR DREAMS!", "YOU KNOW THE ANSWER YOURSELF"];


document.querySelector(".button").addEventListener("click", ask);

function ask (){
   let userAnswer = prompt("Ask a YES/NO question?");
   let random =  Math.floor(Math.random() * 5);
   document.querySelector(".answer").innerHTML ="<b>" + answers[random] + "</b>";
  
   let sound = new Audio("sounds/8ball.wav");
   sound.play();
   

}


  
