var emailUtente = prompt('Per accedere devi verificare la tua email');

var listaEmail = ['stefano@tiscali.it', 'andrea@tiscali.it', 'giovanni@tiscali.it', 'lucia@tiscali.it', 'marco@tiscali.it', 'matteo@tiscali.it', 'giacomo@tiscali.it'];

var nonTrovata = false;
for (var i = 0; i < listaEmail.length; i++) {

 var emailVerifica = listaEmail[i];

 if (emailUtente == emailVerifica){
  nonTrovata = true;
 }
}
if (nonTrovata == false){
  alert ('Spiacenti, email non trovata');
}
else {
  alert ('Grazie! Ora puoi navigare il nostro sito');
}
