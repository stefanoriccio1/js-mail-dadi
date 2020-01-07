// alert ('ciao');

// chiedere all'utente la sua email

var emailUtente = prompt('Per accedere devi verificare la tua email');
console.log(emailUtente);
// controlare che la sua mail sia nella lista che abbiamo

var listaEmail = ['stefano@tiscali.it', 'andrea@tiscali.it', 'giovanni@tiscali.it', 'lucia@tiscali.it', 'marco@tiscali.it', 'matteo@tiscali.it', 'giacomo@tiscali.it'];
// console.log(listaEmail);
for (var i = 0; i < listaEmail.length; i++) {
 console.log(listaEmail[i]);

 if (emailUtente == listaEmail[i]){
  alert('Grazie! Ora puoi accedere e navigare il nostro sito');
 }
 else {
   console.log('errore');
 }
}


// Se la mail è presente dargli un messaggio di benvenuto
