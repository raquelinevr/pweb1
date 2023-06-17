import { Component } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent {
  nomeLivro: string = '';
  sinopseLivro: string = '';
  categoriaLivro: string = '';
  precoLivro: number = 0;

  constructor(private livroService: LivroService) { }

  adicionarLivro() {
    const novoLivro: Livro = {
      nome: this.nomeLivro,
      sinopse: this.sinopseLivro,
      categoria: this.categoriaLivro,
      preco: this.precoLivro
    };

    this.livroService.adicionarLivro(novoLivro);
    this.limparFormulario();
  }

  listarLivros() {
    return this.livroService.listarLivros();
  }

  limparFormulario() {
    this.nomeLivro = '';
    this.sinopseLivro = '';
    this.categoriaLivro = '';
    this.precoLivro = 0;
  }
}
