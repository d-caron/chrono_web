"use strict";

var chrono = new Chrono();

// On demande au chrono d'incrémenter le temps de 1cs
// tout les centièmes de secondes via sa méthode incrementTime
setInterval(function() {
  chrono.incrementTime();
}, 10);