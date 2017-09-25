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
    this.hours = 5;
    this.mins = 4;
    this.secs = 3;
    this.cs = 2;
  }

//==============================
//=========  METHODES  =========
//==============================
  incrementTime() {
    if(this.mins > 59) {
      this.mins = 0;
      this.hours ++;
    } else if(this.secs > 59){
      this.secs = 0;
      this.mins ++;
    } else if(this.cs > 99) {
      this.cs = 0;
      this.secs ++;
    } else {
      this.cs ++;
    }

    console.log(
      this.hours + ':' +
      this.mins + ':' +
      this.secs + ':' +
      this.cs
    );
  }

  run() {
    let tic = new Event('tac');

    setInterval(function() {
      document.dispatchEvent(tic);
    }, 10);

    document.addEventListener('tac', function() {
      if(this.mins > 59) {
        this.mins = 0;
        this.hours ++;
      } else if(this.secs > 59){
        this.secs = 0;
        this.mins ++;
      } else if(this.cs > 99) {
        this.cs = 0;
        this.secs ++;
      } else {
        this.cs ++;
      }

      console.log(
        this.hours + ':' +
        this.mins + ':' +
        this.secs + ':' +
        this.cs
      );
    }, false);
  }
}