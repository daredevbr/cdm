import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public tarefas = [

    { nome: "lavar louça", completed: false },
    { nome: "passar roupa", completed: false },
    { nome: "limpar casa", completed: false }

  ]

  public novaTarefa = '';

  public adicionarTarefa() {

    this.tarefas.push({ "nome": this.novaTarefa, "completed": false })

  }

}
