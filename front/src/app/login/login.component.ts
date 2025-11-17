import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  constructor(private loginService: LoginService , private router: Router){

  }

  usuario!: Usuario;
  senha!: string 
  nome!: string

  
 
  public authentication(): void {
    this.loginService.login
      (this.nome, this.senha!).subscribe({
        next: (user: Usuario) => {
          if (user.nome === this.nome) {
            this.router.navigate(['/home']);
            alert("Usuário autenticado com sucesso!");
            
            console.log(user.id, user.nome, user.email);
          }
        },
        error: (err: Error) => {
          console.error("Erro ao autenticar:", err);
          alert("Erro ao autenticar usuário");
        }
      });
    }



 

  
}
