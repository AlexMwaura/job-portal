import { Component, HostListener } from '@angular/core';
import { JobSearchService } from '../job-filter/services/job-search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  expandedItem: string | null = null;
  searchInput: string = ''; // Store user input
 constructor(private jobSearchService: JobSearchService) { }

  toggleExpand(item: string) {
    this.expandedItem = this.expandedItem === item ? null : item;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!(event.target as HTMLElement).closest('.navbar, .dropdown-content')) {
      this.expandedItem = null;
    }
  }
  onSearchChange() {
    this.jobSearchService.updateSearchQuery(this.searchInput); // Send search input to service
  }
}
