let box = document.getElementsByClassName("box");
let player = document.getElementsByClassName("player");
let redPlayer = document.getElementsByClassName("player_red");
let greenPlayer = document.getElementsByClassName("player_green");
let bluePlayer = document.getElementsByClassName("player_blue");
let yellowPlayer = document.getElementsByClassName("player_yellow");
let diceTurn = document.getElementsByClassName('dice')
let showDiceNum = document.getElementById('show_dice_num')
let piece = document.getElementsByClassName('piece')
let openPieceAll = document.getElementsByClassName('open_piece')
let stopBox = document.getElementsByClassName('stop_box')


// variable or array or object defined here  
let pieceIndex = [20, 21, 22, 23, 24, 5, 4, 3, 2, 1, 0, 6, 12, 13, 14, 15, 16, 17, 25, 26, 27, 28, 29, 30, 42, 54, 53, 52, 51, 50, 49, 67, 68, 69, 70, 71, 72, 66, 60, 59, 58, 57, 56, 55, 48, 47, 46, 45, 44, 43, 31, 19]
let selectPiece = ["rgoti.png", "ggoti.png", "bgoti.png", "ygoti.png"]
let playerPieces = ["red_piece_img", "green_piece_img", "blue_piece_img", "yellow_piece_img"]




for (let index = 0; index < 4; index++) {
    for (let j = 0; j < 4; j++) {
        piece[4 * index + j].innerHTML = `<img class="close_piece ${playerPieces[index]} " src="../img/${selectPiece[index]}" alt="">`

    }
}


function pieceActivate(ele) {

    for (let index = 0; index < 4; index++) {
        ele[index].style.border = "4px solid #ae00eb";

    }
}

function pieceDeactivate(ele, value) {

    for (let index = 0; index < 4; index++) {
        ele[index].style.border = "1.5px solid #000000";

        if (ele[index].classList[0] == "can_open_piece") {
            ele[index].className = `close_piece  ${playerPieces[value]}`
        }

    }


}

function openPiece(ele, value) {


    ele.className = `open_piece  ${playerPieces[value]}`

}

function canOpenPiece(ele, value) {

    for (let index = 0; index < 4; index++) {
        ele[index].className = `can_open_piece  ${playerPieces[value]}`
    }
}




function movePiece(PieceCurrPos, diceVal) {
    // here code for move goti with respect to dice  
    k = 1
    let n = 2

    PieceCurrPos.parentElement.classList.length == 2 ? n = 1 : n = 3

    boxIndexCurr = parseInt(PieceCurrPos.parentElement.classList[n].replace("box", ""))


    let ab = setInterval(() => {
        box[pieceIndex[boxIndexCurr + k]].appendChild(PieceCurrPos);

        if (k == diceVal) {
            clearInterval(ab)
        }
        k++

    }, 250);

}

function dice() {

    return Math.ceil(Math.random() * 10) % 6 + 1;


}

function playerSelect(value) {


}

function stopBoxMultPieces() {

    for (let index = 0; index < stopBox.length; index++) {

        // here img or pieces position set   for stopBox multiplee pieces

        if (stopBox[index].children.length > 1) {
            for (let i = 0; i < stopBox[index].children.length; i++) {

                stopBox[index].children[i].style.marginLeft = `${2 * i}px`
                stopBox[index].children[i].style.width = "30px "
                stopBox[index].children[i].style.height = "30px "

            }
            stopBox[index].style.justifyContent = "start "
            stopBox[index].style.alignItems = "start "

        }
    }

}


function playerDice(value, stopBoxIndex) {

    diceTurn[value].addEventListener('click', () => {
        diceVal = 6
        let count = 1
        ele = document.getElementsByClassName(`${playerPieces[value]}`)

        // dice value show in page  
        showDiceNum.innerHTML = diceVal
        showDiceNum.style.display = "block"
        for (let index = 0; index < openPieceAll.length; index++) {
            document.addEventListener('click', (e) => {

                if (e.target.classList[0] == "open_piece" && count == 1) {

                    pieceDeactivate(ele, value)

                    // movePiece(e.target, diceVal)
                    // e.target.remove()

                    count++

                }
            })

        }




        //
        // 

        // box[stopBoxIndex].innerHTML = `<img class="open_piece" src="../img/${selectPiece[value]}" alt="">`
        if (diceVal == 6) {

            pieceActivate(ele)

            let a = 1 // for only one time detect target value so that's why i am use overthere condtion

            document.addEventListener('click', (e) => {

                if (e.target.classList[0] != "open_piece" && a == 1 && e.target.classList[0] == "close_piece") {
                    canOpenPiece(ele, value)

                }

                if (e.target.classList[0] == "can_open_piece" && a == 1 && e.target.classList[0] != "open_piece") {

                    box[stopBoxIndex].appendChild(e.target)

                    openPiece(e.target, value)
                    stopBoxMultPieces()
                    pieceDeactivate(ele, value)

                    a++
                }



            })



        }




        playerSelect(value)



    })

}


// for every value asign positin with this code  ******************

for (let i = 0; i < 52; i++) {

    // box[i].innerHTML = i

    box[pieceIndex[i]].innerHTML = i
    box[pieceIndex[i]].className += ` box${i}`

}

playerDice(0, 20)
playerDice(1, 13)
playerDice(2, 59)
playerDice(3, 53)