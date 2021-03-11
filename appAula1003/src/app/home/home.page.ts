import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pessoa = {

    nome: 'Bruno',
    idade: 30,
    sexo: 'm'

  }

  public contador = 0;

  public maxValue = 0;

  public increment() {

    this.contador++;

    if (this.maxValue < this.contador) {

      this.maxValue = this.contador;

    }


  }

  public abatement() {

    //if 

    this.contador--;

  }

  public cash = 0;

  public saldo = 0;

  public depositar() {

    this.saldo = this.saldo + this.cash;

  }

  public sacar() {

    if (this.saldo - this.cash < 0) {

      this.saldo = 0;

    } else {

      this.saldo = this.saldo - this.cash;

    }



  }

  public sacarTudo() {

    this.saldo = 0;

  }


}
