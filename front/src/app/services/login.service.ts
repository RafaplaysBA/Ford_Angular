import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
  
})
export class LoginService {
  
  private url= environment.api;


  constructor(private httpclient:HttpClient){ }

  login(nome:string, senha:string){
    return this.httpclient.post<Usuario>(this.url +'/login',{
      nome,
      senha
    
    });

}
}

