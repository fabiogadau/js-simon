/*
* Un alert espone 5 numeri casuali (univoci). 
 Da li parte un timer di 30 secondi.
 Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
 Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
*/
 
// Referenze
var computerNumbers = [];
var maxNumber = 5;
var numbersRange = parseInt( prompt('Scegli difficoltà di gioco tra: \n0 Facile \n1 Medio \n2 Difficile \n3 Estremo') );

// Scelta difficoltà di gioco
while (isNaN(numbersRange) || numbersRange < 0 || numbersRange > 3) {
  numbersRange == false;
  numbersRange = parseInt( prompt('Scegli difficoltà di gioco tra: \n0 Facile \n1 Medio \n2 Difficile \n3 Estremo') );
};

switch(numbersRange) {
  case 0:
    maxNumber = 5;
    break;
  case 1:
    maxNumber = 10;
    break;
  case 2:
    maxNumber = 15;
    break;
  case 3:
    maxNumber = 20;
    break;
};

// Creazione numeri computer
while (computerNumbers.length < maxNumber) {
  var numbers = randomNumbers(100)
  
  if ( !computerNumbers.includes(numbers) ) {
    computerNumbers.push(numbers);
  }
};

alert('Memorizza i seguenti numeri: ' + computerNumbers);

// Setup gioco
var userNumbers = [];
var winNumbers = []

setTimeout(function() {
  for (i = 0; i < maxNumber; i++) {
    var numbers = parseInt( prompt('Inserisci uno dei cinque numeri memorizzati') );
    
    while ( isNaN(numbers) || numbers < 1 || numbers > 100 ) {
      numbers = parseInt( prompt('Prego, inserisci un numero valido da 1 a 100') );
    };

    if ( !userNumbers.includes(numbers) ) {
      userNumbers.push(numbers);
    }
    
    if ( computerNumbers.includes(numbers) ) {
      winNumbers.push(numbers);
    }
  };

  console.log('Numeri da memorizzare: ' + computerNumbers);
  console.log('I numeri che hai inserito sono: ' + userNumbers);
  
  if (winNumbers.length == 0) {
    alert('Hai indovinato 0 numeri! GAME OVER');
    console.log('Hai indovinato 0 numeri! GAME OVER');
  }
  else {
    alert('Hai indovinato: ' + winNumbers.length + ' numeri.');
    console.log('Hai indovinato ' + winNumbers.length + ' numeri.');
  }
  
}, 3000);

// Funzioni
function randomNumbers(max) {
  return Math.floor( Math.random() * max ) + 1;
};
