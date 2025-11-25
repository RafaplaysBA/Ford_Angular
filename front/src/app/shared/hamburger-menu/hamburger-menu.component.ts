import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-hamburger-menu',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './hamburger-menu.component.html',
    styleUrl: './hamburger-menu.component.css'
})
export class HamburgerMenuComponent {
    isOpen = false;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    toggleMenu() {
        this.isOpen = !this.isOpen;
    }

    closeMenu() {
        this.isOpen = false;
    }

    logout() {
        // Usa o AuthService para fazer logout
        this.authService.logout();
        this.closeMenu();
        this.router.navigate(['/login']);
    }

}
