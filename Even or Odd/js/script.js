const userChoise = document.getElementById("odd-even");
const playBtn    = document.getElementById("play");
const userNumber = document.getElementById("user-number");
const botNumber  = generateRandomNumber(1, 5);
const soom       = itsEvenOrOdd(userNumber.value, botNumber);
const clear      = document.getElementById("clear");

playBtn.addEventListener("click", function(event){
    event.preventDefault();

    if(userNumber.value < 1 || userNumber.value > 5 || userChoise.value === "") {
        alert("Inserisci dei dati validi!!!");
        window.location.reload();
    } else {
        
    }
    
    let message = "";
    if (userChoise.value === soom){
        message = "HAI VINTO !"
    } else {
        message = "HAI PERSO"
    }
    
    document.querySelector(".result").innerHTML = message;
    document.getElementById("bot-number").innerHTML = botNumber;
    document.querySelector(".cont-result").classList.remove("hidden");
})

clear.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.reload();
})


// FUNZIONI:

/**
 * Dati due numeri, determina se la somma di essi sia pari o dispari
 * @param {number} numberOne
 * @param {number} numberTwo
 * @returns {string}
 */
function itsEvenOrOdd(numberOne, numberTwo){
    const result = numberOne + numberTwo;
    if (result % 2 === 0){
        message = "pari"
    } else {
        message = "dispari"
    }
    return message;
}

/**
 * Genera in automatico un numero rondomico compreso tra due valori minimo e massimo impostati
 * @param {number} min
 * @param {number} max
 * @returns {rndNumber}
 */
function generateRandomNumber(min, max) {
    const rndNumber = Math.floor(Math.random() * (max - min) ) + min;
    return rndNumber;
}