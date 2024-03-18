// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe
// non potranno esserci due numeri uguali. In seguito l'utente clicca su una cella: se il numero è presente
// nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita
// termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri
// consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha
// cliccato su una cella che non era una bomba.

// prendere il btn play
const playButton = document.getElementById('play-btn');

// l'utente clicca sul btn play
playButton.addEventListener('click', function(){
    // L’array contenete i numeri random deve essere collegato alla griglia e non deve avere doppioni
    // RESPONSABILITA’: l’array deve essere vuoto fino a quando non vengono pushati i numeri random
    


    // si genera la griglia 10x10
    const myGrid = document.querySelector('#grid');
    myGrid.innerHTML = '';
    for(let i = 1; i <= 100; i++){
        const numberSquare = document.createElement('div');
        numberSquare.classList.add('square');
        numberSquare.innerHTML = `<span>${i}</span>`;
        // mettere la cella in ascolto
        numberSquare.addEventListener('click', function() {
            // Cambia lo stile della cella cliccata
            this.classList.add('azure');
            // ottieni il numero della cella
            const cellNumber = i;
            // stampa il numero della cella nella console
            console.log('Numero della cella cliccata:', cellNumber);
        });
        myGrid.append(numberSquare);
    };

});




// FUNCTIONS
// genera numeri random (W3S)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Il pc genera 16 numeri random da 1-100
// Pushare solo i numeri che non hanno doppioni
// RESPONSABILITA’: è un operazione indipendente ma dentro il btn play
function numberRandom(){
    // array vuovo
    const randomList = [];
    // per 16 volte generami un numero
    for(let i = 0; i < 16; i++){
        // numeri random da 1 a 100
        const random = getRndInteger(1, 100)
        // pushare i numeri se non sono presenti 
        if(!randomList.includes(random)){
            randomList.push(random)
            console.log(i + ' - ' + randomList[i])
        }
    }
    return randomList;
}
