// function playNow(){

//     const homeSection = document.getElementById('homeScreen');

//     homeSection.classList.add('hidden');

//     // console.log(homeSection.classList)


//     const playgroundSection = document.getElementById('playGround');

//     playgroundSection.classList.remove('hidden');

//     // console.log(playgroundSection.classList)


// }

function keyboardButtonPress(event){




    playerPressed = event.key;
    // console.log('Player Pressed', playerPressed);

// game stop
    if(playerPressed === 'Escape'){
        gameOver();
    }


    // jeta deyar kotha cilo 

    const presentAlphabetElement = document.getElementById('currentAlphabet');
    const presentAlphabet = presentAlphabetElement.innerText;
    const expectedAlphabet = presentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet );


    // check match or not 

    if(playerPressed === expectedAlphabet){
        console.log('Get Point');


        // const currentScore = getTextElementValueById('current-score');
        // const updatedScore = currentScore + 1;
        // setTextElementValueById('current-score', updatedScore);
        // const newScore = currentScore + 1;
        // removeBackgroundColorById(expectedAlphabet);
        // continueGame();


        // score Update
        const currentScoreElement = document.getElementById('scoreUpdate');
        const currentScoreNumber = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreNumber);
        console.log(currentScore);

        // Increase Score

        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;


        // New Round
        console.log('pressed currently', playerPressed);
        removeKeyboardBackground(playerPressed);
        continueGame();
    }
    else{

        console.log('lost life : Press right key ');

         // Life Update
         const currentLifeElement = document.getElementById('currentLife');
         const currentLifeNumber = currentLifeElement.innerText;
         const currentLife = parseInt(currentLifeNumber);
         console.log(currentLife);
 
         // Reduce life
 
         const newLife = currentLife - 1;
         currentLifeElement.innerText = newLife;
 

         if (newLife===0){

            gameOver(); 


         }


    }



}

document.addEventListener('keyup',keyboardButtonPress )





function continueGame(){

const alphabet = getRandomAlphabet();
// console.log('your randomly generated Word is ', alphabet);



// Set the Random Value

    const currentAlphabet = document.getElementById('currentAlphabet');
    currentAlphabet.innerText = alphabet;

    setKeyboardBackground(alphabet);

}


function playNow(){

    hideElementById('homeScreen')
    hideElementById('scoreBoard')
    showElementById('playGround')

    // set Score And Life
    setTextElementValueById('currentLife' , 3 );
    setTextElementValueById('scoreUpdate' , 0 );

    continueGame()
}


function gameOver(){

    hideElementById('playGround');
    showElementById('scoreBoard')


    // update final score
    // 1.get the final score
    const lastScore = getTextElementValueById('scoreUpdate');
    console.log(lastScore);
    setTextElementValueById('result', lastScore);

    // clear the last selected alphabet highlight
    const getCurrentAlphabet = getElementTextById('currentAlphabet');
    // console.log(getCurrentAlphabet);
    removeKeyboardBackground(getCurrentAlphabet);

}


