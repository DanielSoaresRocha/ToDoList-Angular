import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared'

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit (): void {
    this.tarefas = this.tarefaService.listarTodos();
  }

  listarTodos (): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover ($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm(`Deseja remover a tarefa "${tarefa.nome}"?`)) {
      this.tarefaService.remover(tarefa.id)
      this.tarefas = this.listarTodos()
      console.log(tarefa.id)
      console.log(this.tarefas)
    }
  }

}
