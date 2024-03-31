let a;
        let score={
            yourScore: 0,
            compScore: 0,
            draws: 0
        }
        let output;

        function displayScore(){
                    console.log(score);
                    let yourWins=document.querySelector(".yourWins");
                    let compWins=document.querySelector(".compWins");
                    let draws=document.querySelector(".draws");
                    yourWins.innerHTML=`Your Score : ${score.yourScore}`;
                    compWins.innerHTML=`Computer Score : ${score.compScore}`;
                    draws.innerHTML=`Draws : ${score.draws}`;
                    let gameover=document.querySelector(".objects");
                    if(score.yourScore>=10){
                        gameover.innerHTML="You Won!";
                    }
                    if(score.compScore>=10){
                        gameover.innerHTML="You Lose :(";
                    }
                    gameover.classList.add('results');
                }

            function chooseComputerMove(){
            let compChoice=document.querySelector('.comppic');
                a = Math.random();
            if(a<0.25){
                output="grass";
                compChoice.innerHTML=`<img src="imgs/grass.jpeg" class="yourpicc">`;
            }
            if(a>=0.25 && a<0.5){
                output="deer";
                compChoice.innerHTML=`<img src="imgs/deer.jpg" class="yourpicc">`;
            }
            if(a>=0.5 && a<0.75){
                output="tiger";
                compChoice.innerHTML=`<img src="imgs/tiger.jpg" class="yourpicc">`;
            }
            if(a>=0.75){
                output="human";
                compChoice.innerHTML=`<img src="imgs/hunter.jpeg" class="yourpicc">`;
            }
            }

            function chooseGrass(){
                let paragraph=document.querySelector(".para");
                let mychoice=document.querySelector(".yourpic");
                if(output=="grass"){
                    mychoice.innerHTML=`<img src="imgs/grass.jpeg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer also chose grass. Play again.";
                    score.draws++;
                }
                if(output=="deer"){
                    mychoice.innerHTML=`<img src="imgs/grass.jpeg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer chose deer. You lose.";
                    score.compScore++;
                }
                if(output=="tiger"){
                    mychoice.innerHTML=`<img src="imgs/grass.jpeg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer chose tiger. You win.";
                    score.yourScore++;
                }
                if(output=="human"){
                    mychoice.innerHTML=`<img src="imgs/grass.jpeg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer chose human. You win.";
                    score.yourScore++;
                }
            }

            function chooseDeer(){
                let paragraph=document.querySelector(".para");
                let mychoice=document.querySelector(".yourpic");
                if(output=="grass"){
                    mychoice.innerHTML=`<img src="imgs/deer.jpg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer chose grass. You win.";
                    score.yourScore++;
                }
                if(output=="deer"){
                    mychoice.innerHTML=`<img src="imgs/deer.jpg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer also chose deer. Play again.";
                    score.draws++;
                }
                if(output=="tiger"){
                    mychoice.innerHTML=`<img src="imgs/deer.jpg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer chose tiger. You lose.";
                    score.compScore++;
                }
                if(output=="human"){
                    mychoice.innerHTML=`<img src="imgs/deer.jpg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer chose human. You lose.";
                    score.compScore++;
                }
            }

            function chooseTiger(){
                let paragraph=document.querySelector(".para");
                let mychoice=document.querySelector(".yourpic");
                if(output=="grass"){
                    mychoice.innerHTML=`<img src="imgs/tiger.jpg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer chose grass. You win.";
                    score.yourScore++;
                }
                if(output=="deer"){
                    mychoice.innerHTML=`<img src="imgs/tiger.jpg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer chose deer. You win.";
                    score.yourScore++;
                }
                if(output=="tiger"){
                    mychoice.innerHTML=`<img src="imgs/tiger.jpg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer also chose tiger. Play again.";
                    score.draws++;
                }
                if(output=="human"){
                    mychoice.innerHTML=`<img src="imgs/tiger.jpg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer chose human. You lose.";
                    score.compScore++;
                }
            }

            function chooseHuman(){
                let paragraph=document.querySelector(".para");
                let mychoice=document.querySelector(".yourpic");
                if(output=="grass"){
                    mychoice.innerHTML=`<img src="imgs/hunter.jpeg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer chose grass. You win.";
                    score.yourScore++;
                }
                if(output=="deer"){
                    mychoice.innerHTML=`<img src="imgs/hunter.jpeg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer chose deer. You win.";
                    score.yourScore++;
                }
                if(output=="tiger"){
                    mychoice.innerHTML=`<img src="imgs/hunter.jpeg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer chose tiger. You lose.";
                    score.compScore++;
                }
                if(output=="human"){
                    mychoice.innerHTML=`<img src="imgs/hunter.jpeg" class="yourpicc">`;
                    paragraph.innerHTML= "Computer also chose human. Play again.";
                    score.draws++;
                }
            }