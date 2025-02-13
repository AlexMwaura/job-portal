import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobSearchService {

  constructor() { }
  
  private searchQuery = new BehaviorSubject<string>(''); // Holds the search term
  searchQuery$ = this.searchQuery.asObservable(); // Observable for components to subscribe

  updateSearchQuery(query: string) {
    this.searchQuery.next(query);
  }
}
