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

// console.log(player);

// variable or array or object defined here  
let pieceIndex = [20, 21, 22, 23, 24, 5, 4, 3, 2, 1, 0, 6, 12, 13, 14, 15, 16, 17, 25, 26, 27, 28, 29, 30, 42, 54, 53, 52, 51, 50, 49, 67, 68, 69, 70, 71, 72, 66, 60, 59, 58, 57, 56, 55, 48, 47, 46, 45, 44, 43, 31, 19]
let selectPiece = ["rgoti.png", "ggoti.png", "bgoti.png", "ygoti.png"]
let playerPieces = ["red_piece_img", "green_piece_img", "blue_piece_img", "yellow_piece_img"]
for (let index = 0; index < 4; index++) {
    for (let j = 0; j < 4; j++) {
        piece[4 * index + j].innerHTML = `<img class="close_piece ${playerPieces[index]}" src="../img/${selectPiece[index]}" alt="">`

    }
}


function pieceActivate(ele) {

    for (let index = 0; index < 4; index++) {
        ele[index].style.border = "4px solid #ae00eb";

    }
}

function pieceDeactivate(ele) {

    for (let index = 0; index < 4; index++) {
        ele[index].style.border = "1.5px solid #000000";

    }


}

function openPiece(ele, value) {

    // console.log(ele)
    ele.className = `open_piece  ${playerPieces[value]}`

}

function canOpenPiece(ele, value) {

    for (let index = 0; index < 4; index++) {
        ele[index].className = `can_open_piece  ${playerPieces[value]}`
    }
}

function movePiece(player_start_pos, diceVal) {
    // here code for move goti with respect to dice  
    k = 1

    let ab = setInterval(() => {
        run_goti_box[arr[player_start_pos + k]].appendChild(DOM_img);
        // console.log(k, step_move_goti)
        // console.log(start_goti_point[0].classList[1])
        if (k == step_move_goti) {
            clearInterval(ab)
        }
        k++

    }, 250);

}

function dice() {

    return Math.ceil(Math.random() * 10) % 6 + 1;


}

function playerSelect(value) {
    // console.log(player[value]);

}


function playerDice(value, stopBoxIndex) {

    diceTurn[value].addEventListener('click', () => {
        diceVal = 6
            // dice value show in page  
        showDiceNum.innerHTML = diceVal
        showDiceNum.style.display = "block"
            // for (let index = 0; index < openPieceAll.length; index++) {
            //     openPieceAll[index].addEventListener('click', (e) => {
            //         console.log(e.target.classList[0])

        //         if (e.target.classList[0] == "open_piece") {
        //             // console.log("message")


        //         }
        //     })

        // }




        // movePiece(, diceVal)
        // e.target.remove()
        // console.log(stopBoxIndex);
        // box[stopBoxIndex].innerHTML = `<img class="open_piece" src="../img/${selectPiece[value]}" alt="">`
        if (diceVal == 6) {
            ele = document.getElementsByClassName(`${playerPieces[value]}`)
            pieceActivate(ele)

            let a = 1 // for only one time detect target value so that's why i am use overthere condtion

            document.addEventListener('click', (e) => {
                // console.log(e.target.classList[0])
                if (e.target.classList[0] != "open_piece" && a == 1 && e.target.classList[0] == "close_piece") {
                    canOpenPiece(ele, value)

                }

                if (e.target.classList[0] == "can_open_piece" && a == 1 && e.target.classList[0] != "open_piece") {

                    box[stopBoxIndex].appendChild(e.target)
                    console.log("hellow hellow wait!")
                    openPiece(e.target, value)
                    pieceDeactivate(ele)

                    a++
                }



            })



        }




        playerSelect(value)



    })

}

for (let i = 0; i < box.length; i++) {

    //  box[i].innerHTML=i
    //  box[pieceIndex[i]].innerHTML=i


}

playerDice(0, 20)
playerDice(1, 13)
playerDice(2, 59)
playerDice(3, 53)