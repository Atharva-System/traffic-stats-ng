import { Component } from '@angular/core';

@Component({
  selector: 'app-site-selector',
  templateUrl: './site-selector.component.html',
})
export class SiteSelectorComponent {
  dropdownOpen = false;
  selectedSite = 'All Sites';
  sites = ['All Sites', 'Main Site', 'Landing Page A', 'Landing Page B'];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectSite(site: string) {
    this.selectedSite = site;
    this.dropdownOpen = false;
  }
}
