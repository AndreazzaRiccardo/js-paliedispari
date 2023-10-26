### ESERCIZIO:

**Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma (non usare funzioni predefinite di js).**

### FUNZIONI:

Creo una FUNZIONE per verificare se una parola è palindroma:

        Definisco con un valore in entrata(word) {
            -Creo una variabile array vuota;
            -Imposto un ciclo WHILE cescente in modo da riempire il mio array con ogni singola lettera della mia variabile word;
            -Creo un'altra variabile arrayReverse vuota;
            -Imposto un'altro ciclo WHILE decrescente in modo da riempire con ogni singola lettera il mio arrayReverse;

            -Imposto una condizione per cui:
            SE (array è identico ad arrayReverse) {
                è palindroma;
            } ALTRIMENTI {
                non è palindroma;
            }
        }

### DATI:

1. Chiedere all'utente una parola;

### SVOLGIMENTO:

1. Inserisco la parola fornitami dall'utente all'interno della mia funzione;
2. Stampo il risultato in console;