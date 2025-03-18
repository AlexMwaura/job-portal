import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterToggleService {

  constructor() { }
  private showFiltersSource = new BehaviorSubject<boolean>(false);
  showFilters$ = this.showFiltersSource.asObservable();

  toggleFilters() {
    this.showFiltersSource.next(!this.showFiltersSource.value);
  }
}
