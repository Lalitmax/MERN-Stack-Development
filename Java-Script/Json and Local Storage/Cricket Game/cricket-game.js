let btns = document.querySelector('.buttons').querySelectorAll('button')

let userScore = document.querySelector('.userScore')
let compScore = document.querySelector('.compScore')
let winningDisplay = document.querySelector('.winningDisplay')
let reset = document.querySelector('.reset')





let getFromLocal=localStorage.getItem('result');

console.log(getFromLocal)
let result;
if (getFromLocal !== undefined ) {

    result = JSON.parse(getFromLocal)

} else {
    result = {
        userScoreCount: 0,
        compScoreCount: 0,
        bgColor: false,
        drawCheck: false,
        start:true
    }
}

displayScore()


 
function setInlocalStorage() {


    localStorage.setItem("result", JSON.stringify(result))

}

function displayScore() {
    // console.log(scoreAndDrawchekDetails2)

    userScore.textContent = "User:" + result.userScoreCount;
    compScore.textContent = "Comp:" + result.compScoreCount;


    if(result.start){
        winningDisplay.style.backgroundColor = "black"
        winningDisplay.textContent = "Start Game";
        result.start=false;

    }else{
        if (result.drawCheck) {
            winningDisplay.textContent = "Game Draw";
            winningDisplay.style.backgroundColor = "black"
            result.drawCheck = false;
    
        } else {
            if (result.bgColor) {
                winningDisplay.textContent = "User Won";
                winningDisplay.style.backgroundColor = "green"
                result.bgColor = false
            } else {
                winningDisplay.textContent = "Comp Won";
                winningDisplay.style.backgroundColor = "red"
    
            }
        }
    }



}



function cChoice() {
    let compChoice = ["bat", "ball", "stump"];

    let num0to3 = Math.floor(Math.random() * 3);

    return compChoice[num0to3]
}


btns.forEach((e) => {
    e.addEventListener('click', (e) => {
        let cs = e.target.id;
        let us = cChoice();
 

        if (cs === us) {

            result.drawCheck = true;

        } else {
            if (us === 'bat' && cs === 'ball') {


                result.userScoreCount++;
                result.bgColor = true


            } else if (us === 'bat' && cs === 'stump') {


                result.compScoreCount++;


            } else if (us === 'ball' && cs === 'bat') {


                result.compScoreCount++;


            } else if (us === 'ball' && cs === 'stump') {


                result.compScoreCount++;


            } else if (us === 'stump' && cs === 'bat') {


                result.userScoreCount++;
                result.bgColor = true


            } else if (us === 'stump' && cs === 'ball') {


                result.userScoreCount++;
                result.bgColor = true


            }
        }
        setInlocalStorage()
        displayScore()

    })


})

reset.addEventListener('click',()=>{
    result = {
        userScoreCount: 0,
        compScoreCount: 0,
        bgColor: false,
        drawCheck: false,
        start:true
    }
    localStorage.setItem("result", JSON.stringify(result))
    displayScore()
})