const $ = selector => document.querySelector(selector)

// Input field #bet
let bet = $("#bet").value

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
    $("#firstColumn").innerHTML = firstColumn


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
    $("#secondColumn").innerHTML = secondColumn


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
    $("#thirdColumn").innerHTML = thirdColumn
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
                $("#firstColumn").style.backgroundColor = "blue"
                $("#secondColumn").style.backgroundColor = "blue"
                $("#thirdColumn").style.backgroundColor = "blue"

                let profit = parseInt($("#bet").value) * 750 // probability 1/1000
                $("#information").innerHTML = `JACKPOT! You have won ${profit} coins!`

                $("#audio").innerHTML = `<audio autoplay controls><source src="assets/audio/jingle-1.mp3" type="audio/mpeg"></audio>`

                slotMachine_profits(profit)

            } else {
                if (firstColumn == secondColumn && secondColumn == thirdColumn) {
                    $("#firstColumn").style.backgroundColor = "green"
                    $("#secondColumn").style.backgroundColor = "green"
                    $("#thirdColumn").style.backgroundColor = "green"

                    let profit = parseInt($("#bet").value) * 50 // probability 1/100
                    $("#information").innerHTML = `Congrats! You have won ${profit} coins!`

                    $("#audio").innerHTML = `<audio autoplay controls><source src="assets/audio/jingle-1.mp3" type="audio/mpeg"></audio>`

                    slotMachine_profits(profit)

                } else {
                    if (firstColumn == secondColumn) {
                        $("#firstColumn").style.backgroundColor = "yellow"
                        $("#secondColumn").style.backgroundColor = "yellow"
                        $("#thirdColumn").style.backgroundColor = "red"

                        let profit = parseInt($("#bet").value) * 5 // probability 1/10
                        $("#information").innerHTML = `You have won ${profit} coins!`

                        $("#audio").innerHTML = `<audio autoplay controls><source src="assets/audio/coins-xl.mp3" type="audio/mpeg"></audio>`

                        slotMachine_profits(profit)

                    } else {
                        if (secondColumn == thirdColumn) {
                            $("#firstColumn").style.backgroundColor = "red"
                            $("#secondColumn").style.backgroundColor = "yellow"
                            $("#thirdColumn").style.backgroundColor = "yellow"

                            let profit = parseInt($("#bet").value) * 5 // probability 1/10
                            $("#information").innerHTML = `You have won ${profit} coins!`

                            $("#audio").innerHTML = `<audio autoplay controls><source src="assets/audio/coins-xl.mp3" type="audio/mpeg"></audio>`

                            slotMachine_profits(profit)

                        } else {
                            $("#firstColumn").style.backgroundColor = "red"
                            $("#secondColumn").style.backgroundColor = "red"
                            $("#thirdColumn").style.backgroundColor = "red"

                            $("#information").innerHTML = "Unfortunately you lost!"

                            $("#audio").innerHTML = `<audio autoplay controls><source src="assets/audio/lost.mp3" type="audio/mpeg"></audio>`
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
    $("#firstColumn").style.backgroundColor = "hotpink";
    $("#secondColumn").style.backgroundColor = "hotpink";
    $("#thirdColumn").style.backgroundColor = "hotpink";

    // reset the content of #information after every round
    $("#information").innerHTML = ""
}

// Account balance
$("#account-balance").innerHTML = 100 // 100 coins

function slotMachine_losses() {
    // Losses (bets); subtract the bets from the credit
    let creditNew = parseInt($("#account-balance").innerHTML) - parseInt($("#bet").value)
    $("#account-balance").innerHTML = creditNew
}

function slotMachine_profits(profit) {

    // Profits; add profits to the credit
    let creditNew = parseInt($("#account-balance").innerHTML) + profit
    $("#account-balance").innerHTML = creditNew
}

// Payouts (possible profits)
function slotMachine_possibleProfits() {
    $("#winning-combinations-1").innerHTML = parseInt($("#bet").value) * 5 // yellow = x x y / y x x
    $("#winning-combinations-2").innerHTML = parseInt($("#bet").value) * 50 // green = x x x
    $("#winning-combinations-3").innerHTML = parseInt($("#bet").value) * 750 // blue = 0 0 0
}

$('#reset-button').addEventListener('click', function () {
    $("#account-balance").innerHTML = 500 // 100 coins
})

// buttons on HTML page

$('#play-button').addEventListener('click', function () {
    if (parseInt($("#account-balance").innerHTML) >= $("#bet").value) {
        $('.slotMaschine-columns').style.display = ""
        slotMachine_round()
        slotMachine_reset()
        slotMachine_losses()
        slotMachine_possibleProfits()
    } else {
        $('.slotMaschine-columns').style.display = "none"
        $('#information').innerHTML = 'Your credit is unfortunately not enough. =('
    }   
})