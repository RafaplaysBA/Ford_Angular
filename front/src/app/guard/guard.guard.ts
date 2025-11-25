import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('AuthGuard executado!');
  console.log('Usuário autenticado?', authService.isAuthenticated());

  if (authService.isAuthenticated()) {
    console.log('Acesso permitido');
    return true;
  }

  console.log('Acesso negado, redirecionando para login');
  // Feedback visual para garantir que o usuário saiba que foi bloqueado
  alert('Acesso negado! Você precisa fazer login para acessar esta página.');
  router.navigate(['/login']);
  return false;
};