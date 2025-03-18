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
          this.filterJobs(query,null,null);
        });
        this.jobSearchService.locationQuery$.subscribe((location) => {
          this.filterJobs(null, location, null);
        });
        this.jobSearchService.salaryQuery$.subscribe((salary) => {
          this.filterJobs(null, null, salary);
        });
  }
  filterJobs(searchQuery: string | null, location: string | null, salary: number | null) {
    this.filteredJobs = this.jobs.filter((job) => {
      const matchesSearch = searchQuery ? job.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      const matchesLocation = location ? job.location.toLowerCase().includes(location.toLowerCase()) : true;
      const matchesSalary = salary ? parseInt(job.salary.replace(/\D/g, '')) <= salary : true;
      return matchesSearch && matchesLocation && matchesSalary;
    });
  }
}
