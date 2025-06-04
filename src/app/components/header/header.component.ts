import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isDarkMode = false;

  constructor() {
    // Check initial theme
    this.isDarkMode = document.documentElement.classList.contains('dark');
  }
  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
  }
}
