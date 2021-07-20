        
        var roundscore,  Activeplayer,gameState,  score; 
InitializeGame();

        document.querySelector('.roll-die').addEventListener('click', function(){ //to roll the die
     if(gameState){
        var die= document.querySelector('#die');
        die.style.display="block";
            var  current= Math.floor(Math.random()*6)+1; //generates the die score
        var die= document.querySelector('#die');
        die.src='dice-'+current+'.png'; // displays the die score

           roundscore += current // accumulates die's scores
        document.getElementById('current-'+Activeplayer).textContent=roundscore; //displays accumulated score
        if(current===1){// checks if die appeared one(1) 
            roundscore=0; //resets players score to Zero(0)
            document.getElementById('current-'+Activeplayer).textContent="0";// displays Zero(0) to user
         
         switchPlayer();
        }
    }
      
        }) // end rolling die

        document.querySelector('.hold').addEventListener('click', function(){ 
  if(gameState){
          score[Activeplayer]+=roundscore; //updates the final score for the activePlayer
            document.getElementById('score-'+Activeplayer).textContent=score[Activeplayer];//display score held

            if(score[Activeplayer]>=100){
                ++Activeplayer
                alert( "Player "+Activeplayer+" is the winner")
                gameState=false;
                var die= document.querySelector('#die');
                die.style.display="none";
            }else{
                document.getElementById('current-'+Activeplayer).textContent="0";//resets current score to Zero for user
                roundscore=0;//reset code back to Zero(0)
              switchPlayer()
    
            }
        }
        })


            document.querySelector('#new').addEventListener('click', function(){

            InitializeGame();
            })

            function InitializeGame() {
                Activeplayer=0; // whos turn
                roundscore=0; //current score played
                score=[0,0]; //this holds the final score
            gameState=true;
                document.getElementById('current-0').textContent="0";
                document.getElementById('current-1').textContent="0";
                document.getElementById('score-0').textContent="0";
                document.getElementById('score-1').textContent="0";
            }
            function switchPlayer(){
                if(Activeplayer==1){// switches players
                    Activeplayer=0
                }else{
                Activeplayer=1 
                }
                alert("next Turn!") // message for user
}