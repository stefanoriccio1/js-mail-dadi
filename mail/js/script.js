// alert ('ciao');

// chiedere all'utente la sua email

var emailUtente = prompt('Per accedere devi verificare la tua email');
// console.log(emailUtente);
// controlare che la sua mail sia nella lista che abbiamo

var listaEmail = ['stefano@tiscali.it', 'andrea@tiscali.it', 'giovanni@tiscali.it', 'lucia@tiscali.it', 'marco@tiscali.it', 'matteo@tiscali.it', 'giacomo@tiscali.it'];
// console.log(listaEmail);
var nonTrovata = false;
for (var i = 0; i < listaEmail.length; i++) {
 // console.log(listaEmail[i]);
 var emailVerifica = listaEmail[i];

 if (emailUtente == emailVerifica){
  nonTrovata = true;
  // console.log(emailUtente)
 }
}
if (nonTrovata == false){
  alert ('Spiacenti, email non trovata');
}
else {
  alert ('Grazie! Ora puoi navigare il nostro sito');
}


// Se la mail è presente dargli un messaggio di benvenuto
