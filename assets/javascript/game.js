$( document ).ready(function(){
    // Generates random number to guess
    var Random=Math.floor(Math.random()*102+19)
    
    // Display random number
    $('#scoreToMatch').text(Random);
    
    //Generate random number for each crystal
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    
    // Variables to keep track of wins, losses and total
    var playerScore= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  // Reset game
  function reset(){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        playerScore= 0;
        $('#totalScore').text(playerScore);
        } 
  // Display wins
  function urock(){
  alert("Congrats! You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  // Display losses
  function loser(){
  alert ("Sorry! You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  // Clicking crystals
    $('.red').on ('click', function(){
      playerScore = playerScore + num1;
      console.log("New playerScore= " + playerScore);
      $('#totalScore').text(playerScore); 
            //Win & lose conditions
          if (playerScore == Random){
            urock();
          }
          else if ( playerScore > Random){
            loser();
          }   
    })  
    $('.blue').on ('click', function(){
      playerScore = playerScore + num2;
      console.log("New playerScore= " + playerScore);
      $('#totalScore').text(playerScore); 
          if (playerScore == Random){
            urock();
          }
          else if ( playerScore > Random){
            loser();
          } 
    })  
    $('.purple').on ('click', function(){
      playerScore = playerScore + num3;
      console.log("New playerScore= " + playerScore);
      $('#totalScore').text(playerScore);
  
            if (playerScore == Random){
            urock();
          }
          else if ( playerScore > Random){
            loser();
          } 
    })  
    $('.green').on ('click', function(){
      playerScore = playerScore + num4;
      console.log("New playerScore= " + playerScore);
      $('#totalScore').text(playerScore); 
        
            if (playerScore == Random){
            urock();
          }
          else if ( playerScore > Random){
            loser();
          }
    });   
  });
  