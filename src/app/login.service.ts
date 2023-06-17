import { Injectable } from '@angular/core';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private livros: Livro[] = [];

  // Restante do código do serviço...

  adicionarLivro(livro: Livro) {
    this.livros.push(livro);
  }

  obterLivros(): Livro[] {
    return this.livros;
  }
}
