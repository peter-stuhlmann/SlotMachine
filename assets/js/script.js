// Input field #bet
let bet = document.querySelector("#bet").value

function slotMachine_randomize() {

    // integer random number between 0 and <1 multiplied by 10
    // result is output on the HTML page in the element with the ID firstColumn respectively secondColumn respectively thirdColumn

    // firstColumn

    firstColumn = Math.floor(Math.random() * 10);

    switch (firstColumn) {
        case 0: firstColumn = `<img src="assets/img/dollar.png">`; break;
        case 1: firstColumn = `<img src="assets/img/coconut.png">`; break;
        case 2: firstColumn = `<img src="assets/img/bananas.png">`; break;
        case 3: firstColumn = `<img src="assets/img/kiwi.png">`; break;
        case 4: firstColumn = `<img src="assets/img/watermelon.png">`; break;
        case 5: firstColumn = `<img src="assets/img/cherry.png">`; break;
        case 6: firstColumn = `<img src="assets/img/orange.png">`; break;
        case 7: firstColumn = `<img src="assets/img/tomato.png">`; break;
        case 8: firstColumn = `<img src="assets/img/apple.png">`; break;
        case 9: firstColumn = `<img src="assets/img/strawberry.png">`; break;
    }
    document.querySelector("#firstColumn").innerHTML = firstColumn


    // secondColumn

    secondColumn = Math.floor(Math.random() * 10);

    switch (secondColumn) {
        case 0: secondColumn = `<img src="assets/img/dollar.png">`; break;
        case 1: secondColumn = `<img src="assets/img/coconut.png">`; break;
        case 2: secondColumn = `<img src="assets/img/bananas.png">`; break;
        case 3: secondColumn = `<img src="assets/img/kiwi.png">`; break;
        case 4: secondColumn = `<img src="assets/img/watermelon.png">`; break;
        case 5: secondColumn = `<img src="assets/img/cherry.png">`; break;
        case 6: secondColumn = `<img src="assets/img/orange.png">`; break;
        case 7: secondColumn = `<img src="assets/img/tomato.png">`; break;
        case 8: secondColumn = `<img src="assets/img/apple.png">`; break;
        case 9: secondColumn = `<img src="assets/img/strawberry.png">`; break;
    }
    document.querySelector("#secondColumn").innerHTML = secondColumn


    // thirdColumn

    thirdColumn = Math.floor(Math.random() * 10);

    switch (thirdColumn) {
        case 0: thirdColumn = `<img src="assets/img/dollar.png">`; break;
        case 1: thirdColumn = `<img src="assets/img/coconut.png">`; break;
        case 2: thirdColumn = `<img src="assets/img/bananas.png">`; break;
        case 3: thirdColumn = `<img src="assets/img/kiwi.png">`; break;
        case 4: thirdColumn = `<img src="assets/img/watermelon.png">`; break;
        case 5: thirdColumn = `<img src="assets/img/cherry.png">`; break;
        case 6: thirdColumn = `<img src="assets/img/orange.png">`; break;
        case 7: thirdColumn = `<img src="assets/img/tomato.png">`; break;
        case 8: thirdColumn = `<img src="assets/img/apple.png">`; break;
        case 9: thirdColumn = `<img src="assets/img/strawberry.png">`; break;
    }
    document.querySelector("#thirdColumn").innerHTML = thirdColumn
}


let i = 1;

function slotMachine_round() {

    // 19 numbers will be displayed; display duration of each number

    setTimeout(function () {
        slotMachine_randomize();
        i++;
        if (i < 20) { // 19 numbers
            slotMachine_round();
        } else {

            if (firstColumn == '<img src="assets/img/dollar.png">' && secondColumn == '<img src="assets/img/dollar.png">' && thirdColumn == '<img src="assets/img/dollar.png">') {
                document.querySelector("#firstColumn").style.backgroundColor = "blue"
                document.querySelector("#secondColumn").style.backgroundColor = "blue"
                document.querySelector("#thirdColumn").style.backgroundColor = "blue"

                let profit = parseInt(document.querySelector("#bet").value) * 750 // probability 1/1000
                document.querySelector("#information").innerHTML = `JACKPOT! You have won ${profit} coins!`

                document.querySelector("#audio").innerHTML = `<audio autoplay controls><source src="assets/audio/jingle-1.mp3" type="audio/mpeg"></audio>`

                slotMachine_profits(profit)

            } else {
                if (firstColumn == secondColumn && secondColumn == thirdColumn) {
                    document.querySelector("#firstColumn").style.backgroundColor = "green"
                    document.querySelector("#secondColumn").style.backgroundColor = "green"
                    document.querySelector("#thirdColumn").style.backgroundColor = "green"

                    let profit = parseInt(document.querySelector("#bet").value) * 50 // probability 1/100
                    document.querySelector("#information").innerHTML = `Congrats! You have won ${profit} coins!`

                    document.querySelector("#audio").innerHTML = `<audio autoplay controls><source src="assets/audio/jingle-1.mp3" type="audio/mpeg"></audio>`

                    slotMachine_profits(profit)

                } else {
                    if (firstColumn == secondColumn) {
                        document.querySelector("#firstColumn").style.backgroundColor = "yellow"
                        document.querySelector("#secondColumn").style.backgroundColor = "yellow"
                        document.querySelector("#thirdColumn").style.backgroundColor = "red"

                        let profit = parseInt(document.querySelector("#bet").value) * 5 // probability 1/10
                        document.querySelector("#information").innerHTML = `You have won ${profit} coins!`

                        document.querySelector("#audio").innerHTML = `<audio autoplay controls><source src="assets/audio/coins-xl.mp3" type="audio/mpeg"></audio>`

                        slotMachine_profits(profit)

                    } else {
                        if (secondColumn == thirdColumn) {
                            document.querySelector("#firstColumn").style.backgroundColor = "red"
                            document.querySelector("#secondColumn").style.backgroundColor = "yellow"
                            document.querySelector("#thirdColumn").style.backgroundColor = "yellow"

                            let profit = parseInt(document.querySelector("#bet").value) * 5 // probability 1/10
                            document.querySelector("#information").innerHTML = `You have won ${profit} coins!`

                            document.querySelector("#audio").innerHTML = `<audio autoplay controls><source src="assets/audio/coins-xl.mp3" type="audio/mpeg"></audio>`

                            slotMachine_profits(profit)

                        } else {
                            document.querySelector("#firstColumn").style.backgroundColor = "red"
                            document.querySelector("#secondColumn").style.backgroundColor = "red"
                            document.querySelector("#thirdColumn").style.backgroundColor = "red"

                            document.querySelector("#information").innerHTML = "Unfortunately you lost!"

                            document.querySelector("#audio").innerHTML = `<audio autoplay controls><source src="assets/audio/lost.mp3" type="audio/mpeg"></audio>`
                        }
                    }
                }
            }
        }
    }, 100) // 100 => 100 ms = 1/10 second
}

function slotMachine_reset() {

    i = 1; // to play it several times (reset i from 19 to 1 after every round)
    
    // reset the background-color after every round
    document.querySelector("#firstColumn").style.backgroundColor = "hotpink";
    document.querySelector("#secondColumn").style.backgroundColor = "hotpink";
    document.querySelector("#thirdColumn").style.backgroundColor = "hotpink";

    // reset the content of #information after every round
    document.querySelector("#information").innerHTML = ""
}

// Account balance
document.querySelector("#account-balance").innerHTML = 100 // 100 coins

function slotMachine_losses() {
    // Losses (bets); subtract the bets from the credit
    let creditNew = parseInt(document.querySelector("#account-balance").innerHTML) - parseInt(document.querySelector("#bet").value)
    document.querySelector("#account-balance").innerHTML = creditNew
}

function slotMachine_profits(profit) {

    // Profits; add profits to the credit
    let creditNew = parseInt(document.querySelector("#account-balance").innerHTML) + profit
    document.querySelector("#account-balance").innerHTML = creditNew
}

// Payouts (possible profits)
function slotMachine_possibleProfits() {

    let winningCombinations1 = parseInt(document.querySelector("#bet").value) * 5 // yellow = x x y / y x x
    let winningCombinations2 = parseInt(document.querySelector("#bet").value) * 50 // green = x x x
    let winningCombinations3 = parseInt(document.querySelector("#bet").value) * 750 // blue = 0 0 0

    document.querySelector("#winning-combinations-1").innerHTML = winningCombinations1
    document.querySelector("#winning-combinations-2").innerHTML = winningCombinations2
    document.querySelector("#winning-combinations-3").innerHTML = winningCombinations3
}

// buttons on HTML page
document.querySelector('#play-button').addEventListener('click', function () {
    slotMachine_round()
    slotMachine_reset()
    slotMachine_losses()
    slotMachine_possibleProfits()
})