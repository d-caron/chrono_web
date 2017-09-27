/***************************************************************
* Fichier : Chrono.js (object declaration)
* Projet  : chrono_web
* 
* arborescence :
* js
* |- main.js
* |- class
* |  |- Chrono.js *
* 
* Dev.    : Dylan CARON
* Update  : 22/09/2017
*   => Création de la classe Chrono
***************************************************************/
"use strict"

class Chrono {
  /*
  * Objet Chrono
  *
  * CONSTRUCTEUR
  * Chrono() : Chrono object
  *
  * ATTRIBUTS
  *
  * METHODES
  *
  */

  constructor() {
  //==============================
  //========  ATTRIBUTS  =========
  //==============================
    this.hours = 0;
    this.mins = 0;
    this.secs = 0;
    this.cs = 0;
  }

//==============================
//=========  METHODES  =========
//==============================
  run(chrono) { // Testé & approuvé !
    setInterval(function(){
      if(chrono.mins > 59) {
        chrono.mins = 0;
        chrono.hours ++;
      } else if(chrono.secs > 59){
        chrono.secs = 0;
        chrono.mins ++;
      } else if(chrono.cs > 99) {
        chrono.cs = 0;
        chrono.secs ++;
      } else {
        chrono.cs ++;
      }

      console.log(
        this.hours + ':' +
        this.mins + ':' +
        this.secs + ':' +
        this.cs
      );
    }, 10);
  }

  reset() { // A TESTER
    this.hours = 0;
    this.mins = 0;
    this.secs = 0;
    this.cs = 0;
  }
}