import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private jobsUrl = 'assets/jobs.json'; // Path to your JSON file

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any> {
    return this.http.get<any>(this.jobsUrl);
  }
}
