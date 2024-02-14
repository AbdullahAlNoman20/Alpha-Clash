// function playNow(){

//     const homeSection = document.getElementById('homeScreen');

//     homeSection.classList.add('hidden');

//     // console.log(homeSection.classList)


//     const playgroundSection = document.getElementById('playGround');

//     playgroundSection.classList.remove('hidden');

//     // console.log(playgroundSection.classList)


// }

function continueGame(){

const alphabet = getRandomAlphabet();
console.log('your randomly genareted Word is ', alphabet);



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


