const wordUser        = document.getElementById("user-word");
const resultContainer = document.querySelector(".result");
const checkBtn        = document.getElementById("check");

checkBtn.addEventListener("click", function(event){
    event.preventDefault();
    if(wordUser.value === ""){
        alert("Inserisci una parola")
    } else {
        resultContainer.innerHTML = isPalindrome(wordUser.value);
    }
})

// FUNZIONE:

/**
 * Data una parola, verifica se scrivendola al contrario, si compone la stessa parola
 * @param {string} myWord
 * @returns {boolean}
 */
function isPalindrome(myWord) {
    
    let arrayElem = "";
    let i = 0;
    while(i < myWord.length) {
        arrayElem += myWord[i];
        i++;
    }

    let arrayReverse = "";
    let j = myWord.length - 1;
    while (j >= 0) {
        arrayReverse += myWord[j];
        j--;
    }

    if (arrayElem === arrayReverse){
        message = "E' PALINDROMA"
    } else {
        message = "NON E' PALINDROMA"
    }

    return message;
}