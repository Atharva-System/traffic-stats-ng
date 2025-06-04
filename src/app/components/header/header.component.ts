import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  toggleTheme(): void {
    const html = document.documentElement;
    html.classList.toggle('dark');
  }
}
