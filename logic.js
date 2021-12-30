let change = true;

const signs = {
  true: "X",
  false: "O"
}

let gameState = ['', '', '', '', '', '', '', '', '']

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let filledTiles = 0;

const buttons = document.querySelectorAll("button")

buttons.forEach(button => button.addEventListener("click", (e) => {
  if (e.target.innerText) {
    return;
  }
    e.target.innerText = signs[change];
    gameState[e.target.id] = signs[change];
    // console.log(gameState);
    // console.log((e.target.id))
    change = !change;
    checkResult();
}))

// function checkTie() {
//     let c = 0;
//     buttons.forEach(button => {
//         if (button.innerText == 'O' || button.innerText == 'X') {
//             c = c + 1;
//             if (c == 9) {
//                 return 1;
//             }
//         }
//     })
// }

function announceWinner(user) {
    alert('User ' + user + ' won the game');
    buttons.forEach(button => {
        button.innerText = '';
    })
}

function checkResult() {

    filledTiles = filledTiles + 1;
    let roundWon = false;

    for (let i = 0; i <= 7; i++){

        let winningCondition = winningConditions[i];

        let a = gameState[winningCondition[0]];
        let b = gameState[winningCondition[1]];
        let c = gameState[winningCondition[2]];

        if (a == '' || b == '' || c == '') {
            continue
        }
        if (a == b && b == c) {
            roundWon = true;
            buttons.forEach(button => {
                button.innerText = '';
            })
            gameState = ['', '', '', '', '', '', '', '', '']
            change = true;
            filledTiles = 0;
            break
        }
    }

    if (roundWon) {
        alert(signs[change] + " won game!");
    }

    if (filledTiles == 9) {
        filledTiles = 0;
        alert("It's a tie!")
        buttons.forEach(button => {
            button.innerText = '';
        })
        gameState = ['', '', '', '', '', '', '', '', '']
        change = true;
    }

    // let buttonTexts = []
    
    // buttons.forEach(button => {
    //     buttonTexts.push(button.innerText)
    // })

    // if (buttonTexts[0] == 'O' && buttonTexts[4] =='O' && buttonTexts[6] =='O') {
    //     announceWinner('O')
    // }

    // if (buttonTexts[0] == 'X' && buttonTexts[1] =='X' && buttonTexts[2] =='X') {
    //     announceWinner('O')
    // }
    // if (buttonTexts[0] == 'O' && buttonTexts[1] =='O' && buttonTexts[2] =='O') {
    //     announceWinner('O')
    // }
    
    // if (buttonTexts[3] == 'X' && buttonTexts[4] =='X' && buttonTexts[5] =='X') {
    //     announceWinner('O')
    // }
    // if (buttonTexts[3] == 'O' && buttonTexts[4] =='O' && buttonTexts[5] =='O') {
    //     announceWinner('O')
    // }
    
    // if (buttonTexts[6] == 'X' && buttonTexts[7] =='X' && buttonTexts[8] =='X') {
    //     announceWinner('O')
    // }
    // if (buttonTexts[6] == 'O' && buttonTexts[7] =='O' && buttonTexts[8] =='O') {
    //     announceWinner('O')
    // }
        
    // if (buttonTexts[0] == 'X' && buttonTexts[3] =='X' && buttonTexts[6] =='X') {
    //     announceWinner('O')
    // }
    // if (buttonTexts[0] == 'O' && buttonTexts[3] =='O' && buttonTexts[6] =='O') {
    //     announceWinner('O')
    // }
        
    // if (buttonTexts[1] == 'X' && buttonTexts[4] =='X' && buttonTexts[7] =='X') {
    //     announceWinner('O')
    // }
    // if (buttonTexts[1] == 'O' && buttonTexts[4] =='O' && buttonTexts[7] =='O') {
    //     announceWinner('O')
    // }
        
    // if (buttonTexts[2] == 'X' && buttonTexts[5] =='X' && buttonTexts[8] =='X') {
    //     announceWinner('O')
    // }
    // if (buttonTexts[2] == 'O' && buttonTexts[5] =='O' && buttonTexts[8] =='O') {
    //     announceWinner('O')
    // }

        
    // if (buttonTexts[0] == 'X' && buttonTexts[4] =='X' && buttonTexts[8] =='X') {
    //     announceWinner('X')
    // }
    // if (buttonTexts[0] == 'O' && buttonTexts[4] =='O' && buttonTexts[8] =='O') {
    //     announceWinner('O')
    // }

        
    // if (buttonTexts[2] == 'X' && buttonTexts[4] =='X' && buttonTexts[6] =='X') {
    //     announceWinner('X')
    // }
    // if (buttonTexts[2] == 'O' && buttonTexts[4] =='O' && buttonTexts[6] =='O') {
    //     announceWinner('O')
    // }

    // if (checkTie()) {
    //     return alert("It's a tie")
    // }
}

// var previousClick = 'O';

// let Button1 = document.getElementById('b1');
// let Button2 = document.getElementById('b2');
// let Button3 = document.getElementById('b3');
// let Button4 = document.getElementById('b4');
// let Button5 = document.getElementById('b5');
// let Button6 = document.getElementById('b6');
// let Button7 = document.getElementById('b7');
// let Button8 = document.getElementById('b8');
// let Button9 = document.getElementById('b9');

// function handleClick1() {

//     if (Button1.innerText == '') {
//         if (previousClick === 'X') {
//             Button1.innerText = 'O';
//             previousClick = 'O';
//         }
//         else if (previousClick === 'O') {
//             Button1.innerText = 'X';
//             previousClick = 'X';
//         }
//     }
// }
// function handleClick2() {

//     if (Button2.innerText == '') {
//         if (previousClick === 'X') {
//             Button2.innerText = 'O';
//             previousClick = 'O';
//         }
//         else if (previousClick === 'O') {
//             Button2.innerText = 'X';
//             previousClick = 'X';
//         }
//     }
// }
// function handleClick3() {

//     if (Button3.innerText === '') {
//         if (previousClick === 'X') {
//             Button3.innerText = 'O';
//             previousClick = 'O';
//         }
//         else if (previousClick === 'O') {
//             Button3.innerText = 'X';
//             previousClick = 'X';
//         }
//     }
// }
// function handleClick4() {

//     if (Button4.innerText == '') {
//         if (previousClick == 'X') {
//             Button4.innerText = 'O';
//             previousClick = 'O';
//         }
//         else if (previousClick == 'O') {
//             Button4.innerText = 'X';
//             previousClick = 'X';
//         }
//     }
// }
// function handleClick5() {

//     if (Button5.innerText == '') {
//         if (previousClick == 'X') {
//             Button5.innerText = 'O';
//             previousClick = 'O';
//         }
//         else if (previousClick == 'O') {
//             Button5.innerText = 'X';
//             previousClick = 'X';
//         }
//     }
// }
// function handleClick6() {

//     if (Button6.innerText == '') {
//         if (previousClick == 'X') {
//             Button6.innerText = 'O';
//             previousClick = 'O';
//         }
//         else if (previousClick == 'O') {
//             Button6.innerText = 'X';
//             previousClick = 'X';
//         }
//     }
// }
// function handleClick7() {

//     if (Button7.innerText == '') {
//         if (previousClick == 'X') {
//             Button7.innerText = 'O';
//             previousClick = 'O';
//         }
//         else if (previousClick == 'O') {
//             Button7.innerText = 'X';
//             previousClick = 'X';
//         }
//     }
// }
// function handleClick8() {

//     if (Button8.innerText == '') {
//         if (previousClick == 'X') {
//             Button8.innerText = 'O';
//             previousClick = 'O';
//         }
//         else if (previousClick == 'O') {
//             Button8.innerText = 'X';
//             previousClick = 'X';
//         }
//     }
// }
// function handleClick9() {

//     if (Button9.innerText == '') {
//         if (previousClick == 'X') {
//             Button9.innerText = 'O';
//             previousClick = 'O';
//         }
//         else if (previousClick == 'O') {
//             Button9.innerText = 'X';
//             previousClick = 'X';
//         }
//     }
// }