import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  expandedItem: string | null = null;

  toggleExpand(item: string) {
    this.expandedItem = this.expandedItem === item ? null : item;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!(event.target as HTMLElement).closest('.navbar, .dropdown-content')) {
      this.expandedItem = null;
    }
  }
}
