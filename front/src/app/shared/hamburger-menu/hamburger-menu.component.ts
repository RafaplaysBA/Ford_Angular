import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hamburger-menu',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './hamburger-menu.component.html',
    styleUrl: './hamburger-menu.component.css'
})
export class HamburgerMenuComponent {
    isOpen = false;

    constructor(private router: Router) { }

    toggleMenu() {
        this.isOpen = !this.isOpen;
    }

    closeMenu() {
        this.isOpen = false;
    }

    logout() {
        // Clear any stored tokens or session data here if needed
        // localStorage.removeItem('token'); 
        // sessionStorage.clear();

        this.closeMenu();
        this.router.navigate(['/login']);
    }

}
