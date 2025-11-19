import { Injectable } from "@angular/core";
import { User } from "../models/user.model";


@Injectable({
    providedIn: 'root'
})

export class StorageService {

    public saveData(user: User): void {
        const userData: User = user;
        localStorage.setItem('usuario', JSON.stringify(userData));
        console.log('Dados salvos no localStorage', userData.nome);
    }

    public getDataLogin(): User | null {
        const data = localStorage.getItem('usuario');
        if (data) {
            const userData: User = JSON.parse(data);
            console.log('Dados carregados:', userData);
            return userData;
        } else {
            console.log('Nenhum dado encontrado no localStorage.');
        }
        return null;
    }

    public clearUserData() {
        try {
            localStorage.removeItem('usuario');
        } catch (e) {
            console.error('Erro ao remover do Local Storage', e);
        }
    }
}