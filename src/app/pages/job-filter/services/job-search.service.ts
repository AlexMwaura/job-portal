import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobSearchService {

  constructor() { }
  
  private searchQuery = new BehaviorSubject<string>(''); // Holds the search term
  private locationQuery = new BehaviorSubject<string>('');
  private salaryQuery = new BehaviorSubject<number | null>(null);


  searchQuery$ = this.searchQuery.asObservable(); // Observable for components to subscribe
  locationQuery$ = this.locationQuery.asObservable();
  salaryQuery$ = this.salaryQuery.asObservable();


  updateSearchQuery(query: string) {
    this.searchQuery.next(query);
  }

  updateLocationQuery(location: string) {
    this.locationQuery.next(location);
  }
  updateSalaryQuery(salary: number | null) {
    this.salaryQuery.next(salary);
  }
}
