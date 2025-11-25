import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Inicializa como false - usuário não autenticado por padrão
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<Usuario | null>(null);

  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();
  public currentUser$: Observable<Usuario | null> = this.currentUserSubject.asObservable();

  constructor() {
    console.log('AuthService inicializado. Estado inicial: Não autenticado.');
  }

  public login(user: Usuario): void {
    // Mantém apenas em memória
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
    console.log('Usuário autenticado via AuthService (Memória):', user);
  }

  public logout(): void {
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    console.log('Usuário deslogado');
  }

  public isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  public getCurrentUser(): Usuario | null {
    return this.currentUserSubject.value;
  }
}
