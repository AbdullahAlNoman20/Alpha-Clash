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



    // jeta deyar kotha cilo 

    const presentAlphabetElement = document.getElementById('currentAlphabet');
    const presentAlphabet = presentAlphabetElement.innerText;
    const expectedAlphabet = presentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet );


    // check match or not 

    if(playerPressed === expectedAlphabet){
        console.log('Get Point');


        // const currentScore = getElementValue('scoreUpdate');
        // console.log(currentScore);
        // const newScore = currentScore + 1;
        // setElementValue(newScore);

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

    showElementById('playGround')

    continueGame()
}


