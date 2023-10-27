
const playBtn    = document.getElementById("play");
const clear      = document.getElementById("clear");
const userChoise = document.getElementById("odd-even");
const userNumberInput = document.getElementById("user-number");

playBtn.addEventListener("click", function(event){
    event.preventDefault();
    
    const userNumber = parseInt(userNumberInput.value);
    const botNumber  = generateRandomNumber(1, 5);
    const soom       = itsEvenOrOdd(userNumber, botNumber);
    
    if(userNumber < 1 || userNumber > 5 || userChoise.value === "") {
        alert("Inserisci dei dati validi!!!");
        window.location.reload();
    } 

    let message = "";
    if (userChoise.value === soom){
        message = "HAI VINTO !"
    } else {
        message = "HAI PERSO"
    }
        
    document.querySelector(".cont-result").classList.remove("hidden");
    document.querySelector(".result").innerHTML = message;
    document.getElementById("bot-number").innerHTML = botNumber;
    
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
        resultMessage = "pari"
    } else {
        resultMessage = "dispari"
    }
    return resultMessage;
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
