// alert('ciao')

// Richiedere agli utenti un numero da 1 a 10, chi fa il più alto vince

var giocatore1 = prompt('Per tirare il dado scrivi il tuo nome');
console.log (giocatore1);
var dado1 = (Math.floor(Math.random() * 6) +1);
console.log(giocatore1 + ' Hai fatto ' + dado1);

var giocatore2 = prompt('Sfidante, scrivi il tuo nome per tirare il tuo dado');
console.log (giocatore2);
var dado2 = (Math.floor(Math.random() * 6) +1);
console.log(giocatore2 + ' Hai fatto ' + dado2);


if (dado1 > dado2) {
  console.log('Vince ' + giocatore1);
  alert ('Grande ' + giocatore1 + ' Hai vinto!')
}
else if (dado2 > dado1){
  console.log('Vince '+ giocatore2);
  alert ('Grande ' + giocatore2 + ' Hai vinto!')
}
else {
  console.log('Patta, dovete tirare ancora!');
  alert ('Wow '+ giocatore1 + giocatore2 + ' ! avete pattato! Dovete tirare ancora')
}
