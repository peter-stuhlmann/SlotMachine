function slotMachine_randomize() {
    
    // integer random number between 0 and <1 multiplied by 10
    // result is output on the HTML page in the element with the ID column1 respectively column2 respectively column3
    
    column1 = Math.floor(Math.random() * 10);
    document.getElementById("column1").innerHTML = column1
    
    column2 = Math.floor(Math.random() * 10);
    document.getElementById("column2").innerHTML = column2
    
    column3 = Math.floor(Math.random() * 10);
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
        } 
    }, 100) // 100 = 1/10 second
}



// buttons on HTML page

document.querySelector('#play-button').addEventListener('click', slotMachine_round);