import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailPipe } from './shared/pipes/email.pipe';
import { ProjetoComponent } from './projeto/projeto.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';
import { AdicionarProjetosComponent } from './adicionar-projetos/adicionar-projetos.component';
import { FormsModule } from '@angular/forms';
//import { LivroComponent } from './livro/livro.component'; // Importação do FormsModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailPipe,
    ProjetoComponent,
    AdicionarProjetosComponent,
    LivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule // Adição do FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
