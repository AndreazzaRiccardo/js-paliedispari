### ESERCIZIO:

**L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.**

### FUNZIONI:

1. Creo la prima FUNZIONE per generare numeri randomici:

    _Definisco_ la FUNZIONE con due valori (min e max) {
        creo una COSTANTE in grado di generare un numero randomico compreso tra min e max;
        ritorno il valore della COSTANTE come risultato;
    }

2. Creo la seconda FUNZIONE che determinerà se la somma di due numeri è pari o dispari:

    _Definisco_ la FUNZIONE con due valori (numberOne, numberTwo) {
        creo una COSTANTE "result" che sia la somma tra numberOne e numberTwo;
        creo una condizione per cui:
            SE result diviso due da resto zero {
                message = "even"
            } ALTRIMENTI {
                message = "odd"
            }
            ritorno il valore di message;
    }

### DATI:

1. Chiedo all'utente di scegliere tra pari o dispari;
2. Chiedo all'utente un numero da 1 a 5;
3. Genero un numero casuale per il bot _invocando_ la relativa FUNZIONE;

### SVOLGIMENTO:

1. _Invoco_ la relativa FUNZIONE per determinare se la somma del numero scelto dall'utente e del numero generato per il bot sia pari o dispari;
2. Preparo il messaggio;

### OUTPUT:

Stampo a schermo se l'utente ha vinto o perso;
