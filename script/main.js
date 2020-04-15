/*
* Un alert espone 5 numeri casuali (univoci). 
 Da li parte un timer di 30 secondi.
 Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
 Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
*/

$( document ).ready(function() {
  
  var computerNumbers = [];

  var maxNumber = 5;

  var numbersRange = parseInt( prompt('Scegli difficoltà di gioco tra \n0 Facile \n1 Medio \n2 Difficile') );

  while (isNaN(numbersRange) || numbersRange < 0 || numbersRange > 3) {
    numbersRange == false;
    numbersRange = parseInt( prompt('Scegli difficoltà di gioco tra \n0 Facile \n1 Medio \n2 Difficile') );
  }
  
  /*if {
    numbersRange == true;
  }*/

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
  }

  while (computerNumbers.length < maxNumber) {
    
    var numbers = randomNumbers(100)

    if ( !computerNumbers.includes(numbers) ) {
      computerNumbers.push(numbers);
    }

  };

  console.log(computerNumbers);

  
  
  
  
  
  // Funzioni
  function randomNumbers(max) {
    
    return Math.floor( Math.random() * max ) + 1;
  
  };






































});
