import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit {
  jobs: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/jobs.json').subscribe(data => {
      this.jobs = data;
    });
  }
}
