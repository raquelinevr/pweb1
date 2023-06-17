import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})

export class LoginComponent {
  constructor(private router: Router) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^.+@academico\.com$/)
  ]);
  
  senhaFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/)
  ]);

  fazerLogin() {
    const email = this.emailFormControl.value;
    const senha = this.senhaFormControl.value;
  
    if (email && senha) {
      if (this.validarCredenciais(email, senha)) {
        this.router.navigate(['/adicionar-projetos']);
        console.log('Login bem-sucedido');
      } else {
        console.log('Credenciais inválidas');
      }
    } else {
      console.log('Preencha todos os campos');
    }
  }

  private validarCredenciais(email: string, senha: string): boolean {
    // Validar o email com regex
    const emailRegex = /^[^\s@]+@academico\.com$/;
    const isEmailValid = emailRegex.test(email);
  
    // Validar a senha com regex
    const senhaRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
    const isSenhaValid = senhaRegex.test(senha);
  
    // Verificar se tanto o email quanto a senha são válidos
    if (isEmailValid && isSenhaValid) {
      // Lógica adicional de validação (se necessário)
      // ...
      return true; // Credenciais válidas
    }
  
    return false; // Credenciais inválidas
  }
}
