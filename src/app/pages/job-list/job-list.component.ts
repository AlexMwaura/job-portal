import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JobSearchService } from '../job-filter/services/job-search.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit {
  jobs: any[] = [];
  filteredJobs: any[] = [];


  constructor(private http: HttpClient,private jobSearchService: JobSearchService) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/jobs.json').subscribe(data => {
      console.log("this is the jobs list",data)
      this.jobs = data;
      this.filteredJobs = data;
    });
        // Subscribe to search query changes
        this.jobSearchService.searchQuery$.subscribe(query => {
          this.filterJobs(query);
        });
  }
  filterJobs(query: string) {
    if (!query) {
      this.filteredJobs = this.jobs; // Reset if empty
    } else {
      this.filteredJobs = this.jobs.filter(job =>
        job.title.toLowerCase().includes(query.toLowerCase())
      );
    }
  }
}
