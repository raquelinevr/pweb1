import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarProjetosComponent } from './adicionar-projetos.component';

import { LivroService } from '../livro.service';


describe('AdicionarProjetosComponent', () => {
  let component: AdicionarProjetosComponent;
  let fixture: ComponentFixture<AdicionarProjetosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarProjetosComponent]
    });
    fixture = TestBed.createComponent(AdicionarProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
