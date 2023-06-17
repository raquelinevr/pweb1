import { Component } from '@angular/core';

@Component({
  selector: 'app-adicionar-projetos',
  templateUrl: './adicionar-projetos.component.html',
  styleUrls: ['./adicionar-projetos.component.css']
})
export class AdicionarProjetosComponent {
  exibirFormAdicionar: boolean = false;
  exibirFormEditar: boolean = false;
  livroExistente: boolean = false;
  nomeLivro: string = '';
  sinopseLivro: string = '';
  categoriaLivro: string = '';
  precoLivro: number = 0;

  mostrarFormAdicionar() {
    this.exibirFormAdicionar = true;
    this.exibirFormEditar = false;
    this.livroExistente = false;
    this.nomeLivro = '';
    this.sinopseLivro = '';
    this.categoriaLivro = '';
    this.precoLivro = 0;
  }

  mostrarFormEditar() {
    // Lógica para exibir o formulário de edição
    // ...
  }

  adicionarLivro() {
    // Lógica para adicionar um novo livro
    // ...
  }

  editarLivro() {
    // Lógica para editar um livro existente
    // ...
  }

  // Restante do código do componente...
}
