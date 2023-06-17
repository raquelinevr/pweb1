import { Injectable } from '@angular/core';
import { Livro } from '../livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private livros: Livro[] = [];

  constructor() { }

  adicionarLivro(livro: Livro) {
    this.livros.push(livro);
  }

  listarLivros() {
    return this.livros;
  }
}
