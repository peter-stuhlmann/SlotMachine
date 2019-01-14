// Input field #bet
let bet = document.getElementById("bet").value



function slotMachine_randomize() {

    // integer random number between 0 and <1 multiplied by 10
    // result is output on the HTML page in the element with the ID column1 respectively column2 respectively column3


    // column1

    column1 = Math.floor(Math.random() * 10);

    switch (column1) {

        case 0:
            column1 = `<img src="assets/img/dollar.png">`;
            break;

        case 1:
            column1 = `<img src="assets/img/coconut.png">`;
            break;

        case 2:
            column1 = `<img src="assets/img/bananas.png">`;
            break;

        case 3:
            column1 = `<img src="assets/img/kiwi.png">`;
            break;

        case 4:
            column1 = `<img src="assets/img/watermelon.png">`;
            break;

        case 5:
            column1 = `<img src="assets/img/cherry.png">`;
            break;

        case 6:
            column1 = `<img src="assets/img/orange.png">`;
            break;

        case 7:
            column1 = `<img src="assets/img/tomato.png">`;
            break;

        case 8:
            column1 = `<img src="assets/img/apple.png">`;
            break;

        case 9:
            column1 = `<img src="assets/img/strawberry.png">`;
            break;
    }

    document.getElementById("column1").innerHTML = column1


    // column2

    column2 = Math.floor(Math.random() * 10);

    switch (column2) {

        case 0:
            column2 = `<img src="assets/img/dollar.png">`;
            break;

        case 1:
            column2 = `<img src="assets/img/coconut.png">`;
            break;

        case 2:
            column2 = `<img src="assets/img/bananas.png">`;
            break;

        case 3:
            column2 = `<img src="assets/img/kiwi.png">`;
            break;

        case 4:
            column2 = `<img src="assets/img/watermelon.png">`;
            break;

        case 5:
            column2 = `<img src="assets/img/cherry.png">`;
            break;

        case 6:
            column2 = `<img src="assets/img/orange.png">`;
            break;

        case 7:
            column2 = `<img src="assets/img/tomato.png">`;
            break;

        case 8:
            column2 = `<img src="assets/img/apple.png">`;
            break;

        case 9:
            column2 = `<img src="assets/img/strawberry.png">`;
            break;
    }

    document.getElementById("column2").innerHTML = column2


    // column3

    column3 = Math.floor(Math.random() * 10);

    switch (column3) {

        case 0:
            column3 = `<img src="assets/img/dollar.png">`;
            break;

        case 1:
            column3 = `<img src="assets/img/coconut.png">`;
            break;

        case 2:
            column3 = `<img src="assets/img/bananas.png">`;
            break;

        case 3:
            column3 = `<img src="assets/img/kiwi.png">`;
            break;

        case 4:
            column3 = `<img src="assets/img/watermelon.png">`;
            break;

        case 5:
            column3 = `<img src="assets/img/cherry.png">`;
            break;

        case 6:
            column3 = `<img src="assets/img/orange.png">`;
            break;

        case 7:
            column3 = `<img src="assets/img/tomato.png">`;
            break;

        case 8:
            column3 = `<img src="assets/img/apple.png">`;
            break;

        case 9:
            column3 = `<img src="assets/img/strawberry.png">`;
            break;
    }

    document.getElementById("column3").innerHTML = column3

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

            if (column1 == 0 && column2 == 0 && column3 == 0) {
                document.getElementById("column1").style.backgroundColor = "blue"
                document.getElementById("column2").style.backgroundColor = "blue"
                document.getElementById("column3").style.backgroundColor = "blue"

                let profit = parseInt(document.getElementById("bet").value) * 750 // probability 1/1000
                document.getElementById("information").innerHTML = `JACKPOT! You have won ${profit} coins!`

            } else {
                if (column1 == column2 && column2 == column3) {
                    document.getElementById("column1").style.backgroundColor = "green"
                    document.getElementById("column2").style.backgroundColor = "green"
                    document.getElementById("column3").style.backgroundColor = "green"

                    let profit = parseInt(document.getElementById("bet").value) * 50 // probability 1/100
                    document.getElementById("information").innerHTML = `Congrats! You have won ${profit} coins!`

                } else {
                    if (column1 == column2) {
                        document.getElementById("column1").style.backgroundColor = "yellow"
                        document.getElementById("column2").style.backgroundColor = "yellow"
                        document.getElementById("column3").style.backgroundColor = "red"

                        let profit = parseInt(document.getElementById("bet").value) * 5 // probability 1/10
                        document.getElementById("information").innerHTML = `You have won ${profit} coins!`

                    } else {
                        if (column2 == column3) {
                            document.getElementById("column1").style.backgroundColor = "red"
                            document.getElementById("column2").style.backgroundColor = "yellow"
                            document.getElementById("column3").style.backgroundColor = "yellow"

                            let profit = parseInt(document.getElementById("bet").value) * 5 // probability 1/10
                            document.getElementById("information").innerHTML = `You have won ${profit} coins!`

                        } else {
                            document.getElementById("column1").style.backgroundColor = "red"
                            document.getElementById("column2").style.backgroundColor = "red"
                            document.getElementById("column3").style.backgroundColor = "red"

                            document.getElementById("information").innerHTML = "Unfortunately you lost!"
                        }
                    }
                }
            }
        }
    }, 100) // 100 = 1/10 second
}



function slotMachine_reset() {

    // to play it several times (reset i from 19 to 1 after every round)
    i = 1;

    // reset the background-color after every round
    document.getElementById("column1").style.backgroundColor = "hotpink";
    document.getElementById("column2").style.backgroundColor = "hotpink";
    document.getElementById("column3").style.backgroundColor = "hotpink";

    // reset the content of #ginformation after every round
    document.getElementById("information").innerHTML = ""
}


// buttons on HTML page

document.querySelector('#play-button').addEventListener('click', slotMachine_round);
document.querySelector('#play-button').addEventListener('click', slotMachine_reset);
